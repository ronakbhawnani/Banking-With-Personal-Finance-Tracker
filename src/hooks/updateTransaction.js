import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

export const updateTransactionOnFirebase = async (userId, updatedFields) => {
  try {
    // Step 1: Get the document reference for the specific transaction in Firestore
    // using their uniqe doc id
    const transactionRef = doc(
      db,
      `users/${userId}/transactions/${updatedFields.id}`
    );
    const transactionDoc = await getDoc(transactionRef); // Corrected: Use getDoc to fetch the transaction document
    if (transactionDoc.exists()) {
      // Step 2: Get the transaction data from the document
      const transactionData = transactionDoc.data();
      // Step 3: Update the desired fields of the transaction data with the new values
      const updatedTransaction = { ...transactionData, ...updatedFields };
      // Step 4: Update the transaction in Firestore
      await updateDoc(transactionRef, updatedTransaction);
      toast.success("Transaction data updated successfully.");
    } else {
      toast.error("Transaction not found in the database.");
    }
  } catch (error) {
    toast.error(error.message);
  }
};
