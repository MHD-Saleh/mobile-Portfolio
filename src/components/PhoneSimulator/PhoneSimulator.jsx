import { useState } from "react";
import phone from "/phone.png";
import { ColorPicker, FontSelector, ImageUploader } from "./Selectors";
import Popup from "../PopUp/Popup";
import "./style.css";

const PhoneSimulator = () => {
  const [backgroundType, setBackgroundType] = useState("gradient");
  const [background, setBackground] = useState(
    "linear-gradient(271deg, #0df7bb, hsl(273, 100%, 49%))"
  );
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontSize, setFontSize] = useState("16px");
  const [fontColor, setFontColor] = useState("#000000"); // Default black
  const [showPopup, setShowPopup] = useState(false);

  const handleColorChange = (color) => {
    setBackground(color);
  };

  const handleFontChange = (font) => {
    setFontFamily(font);
  };

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  const handleFontColorChange = (color) => {
    setFontColor(color);
  };

  const handleBackgroundTypeChange = (type) => {
    setBackgroundType(type);
  };

  return (
    <div>
      <BTN onClick={() => setShowPopup(true)} />
      {showPopup && (
        <Popup onClose={() => setShowPopup(false)}>
          <h2 className="Popup-title">Customize Your App</h2>
          <div className="popup-section">
            <p className="popup-label">Select Background Type:</p>
            <div className="radio-buttons">
              <label>
                <input
                  type="radio"
                  value="gradient"
                  checked={backgroundType === "gradient"}
                  onChange={() => handleBackgroundTypeChange("gradient")}
                />
                Gradient
              </label>
              <label>
                <input
                  type="radio"
                  value="image"
                  checked={backgroundType === "image"}
                  onChange={() => handleBackgroundTypeChange("image")}
                />
                Image
              </label>
            </div>
          </div>
          {backgroundType === "gradient" && (
            <div className="popup-section">
              <p className="popup-label">Select Gradient Colors:</p>
              <ColorPicker value={background} onChange={handleColorChange} />
            </div>
          )}
          {backgroundType === "image" && (
            <div className="popup-section">
              <p className="popup-label">Upload Background Image:</p>
              <ImageUploader onUpload={(url) => setBackground(`url(${url})`)} />
            </div>
          )}
          <div className="popup-section">
            <p className="popup-label">Select Font:</p>
            <FontSelector onChange={handleFontChange} />
          </div>
          <div className="popup-section">
            <p className="popup-label">Select Font Size:</p>
            <input
              type="range"
              min="10"
              max="50"
              value={parseInt(fontSize)}
              onChange={(e) => handleFontSizeChange(`${e.target.value}px`)}
            />
          </div>
          <div className="popup-section">
            <p className="popup-label">Select Font Color:</p>
            <ColorPicker value={fontColor} onChange={handleFontColorChange} />
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              onClick={() => setShowPopup(false)}
              style={{
                padding: "5px 20px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Apply
            </button>
          </div>
        </Popup>
      )}
      <div
        className={`phone-mockup-container ${
          backgroundType === "image" ? "" : "css-selector"
        }`}
        style={{ background }}
      >
        <img src={phone} alt="Phone Mockup" />
        <div className="phone-content">
          <h1
            contentEditable="true"
            className="editable-header"
            style={{ fontFamily, fontSize, color: fontColor }}
          >
            Your Awesome App
          </h1>

          <p
            contentEditable="true"
            className="editable-header"
            style={{ fontFamily, fontSize, color: fontColor }}
          ></p>
          <br />
          <p contentEditable="true" className="editable-header">
            you can edit all text on this screen
          </p>
          <br />
          <br />
          <br />
          <p contentEditable="true" className="editable-header">
            click customize your app to show more options
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhoneSimulator;

const BTN = ({ onClick }) => {
  return (
    <div onClick={onClick} className="mainBTN">
      <div className="btn">
        <div className="dd">
          <div className="center">Edit me</div>
        </div>
      </div>
    </div>
  );
};
