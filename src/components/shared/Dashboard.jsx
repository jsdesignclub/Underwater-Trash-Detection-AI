import React, { useEffect, useState } from "react";
import axios from "axios";
import { DetectionResult } from "./report/DetectionResult";

export const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedRole = localStorage.getItem("role");
    if (storedUsername) setUsername(storedUsername);
    if (storedRole) setRole(storedRole);
  }, []);

  const handleFileChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedImage(e.dataTransfer.files[0]);
    }
  };

  const handleTestDetection = () => {
    if (!selectedImage) {
      alert("Please upload or drag an image before testing.");
      return;
    }
    // Simulate detection result
    setDetails({
      trashCount: 5,
      confidence: 92.3,
      time: 1450,
    });
    setShowResult(true);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
    

      {/* Show result or upload area */}
      {showResult ? (
        <DetectionResult
          image={selectedImage}
          details={details}
          onBack={() => setShowResult(false)}
        />
      ) : (
        <>
          {/* Drag & Drop Upload */}
          <div
            className={`mt-6 p-6 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors ${
              dragActive ? "border-blue-500 bg-blue-50" : "border-gray-400"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="fileInput"
            />
            <label htmlFor="fileInput" className="block cursor-pointer">
              {selectedImage ? (
                <p className="text-green-600 font-medium">
                  {selectedImage.name} selected ✅
                </p>
              ) : (
                <p className="text-gray-600">
                  Drag & drop an image here, or{" "}
                  <span className="text-blue-500 underline">browse</span>
                </p>
              )}
            </label>
          </div>

          {/* Test Detection Button */}
          <div className="mt-4 text-center">
            <button
              onClick={handleTestDetection}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg flex items-center gap-2 mx-auto"
            >
              🔍 Test Detection
            </button>
            <p className="mt-2 text-sm text-gray-500">
              Please upload a clear underwater image showing trash for best results.
            </p>
          </div>
        </>
      )}
    </div>
  );
};
