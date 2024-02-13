"use client";
import React, { useCallback, useState } from "react";
import { useDropzone, DropzoneFile } from "react-dropzone";
import { FaRegSquarePlus } from "react-icons/fa6";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const onDrop = useCallback((acceptedFiles: DropzoneFile[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div>
      {selectedImage ? (
        <div>
          <img src={selectedImage} alt="Selected" style={imageStyles} />
        </div>
      ) : (
        <div {...getRootProps()} style={dropzoneStyles}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the image here</p>
          ) : (
            <FaRegSquarePlus size={65} />
          )}
        </div>
      )}
    </div>
  );
};

const dropzoneStyles: React.CSSProperties = {
  position: "relative",
  width: "289px",
  height: "223px",
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  overflow: "hidden",
  textAlign: "center",
  cursor: "pointer",
  backgroundColor: "#B8B8B8",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#ffffff",
  fontSize: "24px",
  //on hver
  transition: "all 0.3s ease",
};

const imageStyles: React.CSSProperties = {
  maxWidth: "100%",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  width: "289px",
  height: "223px",
};

export default ImageUpload;
