export const ColorPicker = ({ value, onChange }) => {
  return (
    <input
      type="color"
      className="color-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export const FontSelector = ({ onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="Arial">Arial</option>
      <option value="Arial, sans-serif">Arial (sans-serif)</option>
      <option value="Times New Roman">Times New Roman</option>
      <option value="Times, serif">Times (serif)</option>
      <option value="Verdana">Verdana</option>
      <option value="Verdana, sans-serif">Verdana (sans-serif)</option>
      <option value="Georgia">Georgia</option>
      <option value="Georgia, serif">Georgia (serif)</option>
      <option value="Tahoma">Tahoma</option>
      <option value="Tahoma, sans-serif">Tahoma (sans-serif)</option>
      <option value="Courier New">Courier New</option>
      <option value="Courier, monospace">Courier (monospace)</option>
      {/* Add more font options as needed */}
    </select>
  );
};

export const ImageUploader = ({ onUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      onUpload(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return <input type="file" accept="image/*" onChange={handleFileChange} />;
};
