import { useState } from "react";

function UploadFile() {
  const [fileName, setFileName] = useState(null);

  function handleFileUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {fileName && <p>Wybrany plik: {fileName}</p>}
    </div>
  );
}

export default UploadFile;
