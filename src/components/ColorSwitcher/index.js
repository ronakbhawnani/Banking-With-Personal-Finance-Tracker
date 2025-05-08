import React from "react";
import "./styles.css";

const ColorSwitcher = ({ handleColorChange }) => {
  return (
    <div className="color-switcher">
      <div
        className="color-option color-box green"
        onClick={() =>
          handleColorChange({
            "--primary-purple": "#20bf6b",
            "--primary-purple-shade": "#26de81",
          })
        }
      ></div>
      <div
        className="color-option color-box pink"
        onClick={() =>
          handleColorChange({
            "--primary-purple": "#e83e8c",
            "--primary-purple-shade": "#e80065",
          })
        }
      ></div>
      <div
        className="color-option color-box orange"
        onClick={() =>
          handleColorChange({
            "--primary-purple": "#fc7b54",
            "--primary-purple-shade": "#fd8a67",
          })
        }
      ></div>
      <div
        data-tip="Light-green"
        className="color-option color-box light-green"
        onClick={() =>
          handleColorChange({
            "--primary-purple": "#10ac84",
            "--primary-purple-shade": "#1dd1a1",
          })
        }
      ></div>
      <div
        data-tip="Purple-light"
        className="color-option color-box default"
        onClick={() =>
          handleColorChange({
            "--primary-purple": "#6842EF",
            "--primary-purple-shade": "#8161f4",
          })
        }
      ></div>
    </div>
  );
};

export default ColorSwitcher;
