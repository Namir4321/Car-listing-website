"use client";
import React, { useState, useEffect } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const ImageInput = ({ defaultValue = [] }) => {
  const name = "images";
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    // Initialize state with default images
    if (defaultValue.length > 0) {
      setSelectedFiles(defaultValue);
    }
  }, [defaultValue]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    // Limit the number of new files to 10
    if (files.length > 10) {
      alert("You can only select up to 10 files.");
      return;
    }

    // Replace default or existing files with new files
    setSelectedFiles(files);
  };

  return (
    <div className="mb-4">
      <Label htmlFor={name} className="capitalize mb-2 block">
        Image
      </Label>
      <Input
        id={name}
        name={name}
        type="file"
        required
        accept="image/*"
        className="max-w-xs"
        multiple
        onChange={handleFileChange}
      />

      {/* Display selected file names */}
      {selectedFiles.length > 0 && (
        <div className="mt-2 text-sm text-gray-700">
          <p className="font-medium">
            Selected Files ({selectedFiles.length}):
          </p>
          <ul className="list-disc pl-4">
            {selectedFiles.map((file, index) => (
              <li key={index}>{typeof file === "string" ? file : file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageInput;
