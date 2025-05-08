import React, { useEffect, useState } from "react";
import "./styles.css";
import { FaUserCircle } from "react-icons/fa";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import ColorSwitcher from "../ColorSwitcher";

const UserProfile = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => { 
    if (user) {
      navigate("/dashboard");
    }
  }, [user, loading]);

  const logout = () => {
    try {
      signOut(auth)
        .then(() => {
          // signed out successfylly
          toast.success("Logout Suceessfylly");
          navigate("/");
        })
        .catch((err) => {
          toast.err(err.message);
        });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const [colorSet, setColorSet] = useState({
    "--primary-purple": "#6842EF", // Default primary color
    "--primary-purple-shade": "#8161f4", // Default secondary color
  });

  const handleColorChange = (colors) => {
    Object.entries(colors).forEach(([variable, color]) => {
      document.documentElement.style.setProperty(variable, color);
    });
    setColorSet(colors);
  };

  return (
    <div className="profile-feture">
      {user && (
        <div className="user-profile">
          {user.photoURL ? (
            <img src={user.photoURL} alt="user-profile" className="img" />
          ) : (
            <FaUserCircle className="no-photo" />
          )}
        </div>
      )}
      <div className="buttons">
        {user && (
          <>
            <h4>{user.displayName ? user.displayName : user.email}</h4>
            <p onClick={logout} className="logout-btn">
              Logout
            </p>
            {/* <p onClick={resetBalance} className="logout-btn">
              Reset Balance
            </p> */}
          </>
        )}
      </div>
      <ColorSwitcher handleColorChange={handleColorChange} />
    </div>
  );
};

export default UserProfile;
