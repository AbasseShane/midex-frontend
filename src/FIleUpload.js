import React, { useState } from "react";
import * as XLSX from "xlsx";

function FIleUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("https://midex-backend-deploy.onrender.com/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.text();
    alert(result);
  };

  return (
    <div>
      <input type="file" accept=".xlsx, xls" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FIleUpload;
