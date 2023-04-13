import React, { useState } from "react";
const API_BASE_URL = "http://localhost:4000";
// const API_BASE_URL = "http://localhost:4000";

const FileUploader = ({ handleChange }) => {

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file.type === "application/pdf") {
            const blob = new Blob([file], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);
            handleChange(url);
        }
    };

    return (
        <div>

            <h4>Upload your PDF</h4>
            <input type="file" onChange={handleFileChange} accept="application/pdf" style={{
                marginBottom: 10,
                padding: "0.5rem 2rem",
                backgroundColor: "grey",
                borderRadius: "10px"
            }} />
        </div>
    );
};

export default FileUploader;
