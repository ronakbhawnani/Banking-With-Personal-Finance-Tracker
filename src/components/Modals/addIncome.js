import React from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  DatePicker,
} from "antd";

const AddIncome = ({ isIncomeModalVisible, handleIncomeCancel, onFinish }) => {
  const [form] = Form.useForm();

  return (
    <div>
      <Modal
        title="Add Income"
        open={isIncomeModalVisible}
        onCancel={handleIncomeCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => {
            onFinish(values, "income");
            form.resetFields();
          }}
        >
          <Form.Item
            style={{ fontWeight: 600 }}
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter the name of the transaction",
              },
            ]}
          >
            <Input type="text" className="custome-input" />
          </Form.Item>
          <Form.Item
            style={{ fontWeight: 600 }}
            label="Amount"
            name="amount"
            rules={[
              { required: true, message: "Please enter the income amount" },
            ]}
          >
            <Input type="number" className="custome-input" />
          </Form.Item>
          <Form.Item
            style={{ fontWeight: 600 }}
            label="Date"
            name="date"
            rules={[
              { required: true, message: "Please select the income date!" },
            ]}
          >
            <DatePicker className="custome-input" format="DD-MM-YYYY" />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              className="btn reset-balance-btn"
            >
              Add Income
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AddIncome;
