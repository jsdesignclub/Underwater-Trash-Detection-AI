import React from "react";

export const DetectionResult = ({ image, details, onBack }) => {
  return (
    <div className="mt-6 p-4 border rounded-lg bg-white shadow-lg">
      <h2 className="text-xl font-bold mb-4">Detection Analytics</h2>

      {/* Uploaded Image Preview */}
      {image && (
        <div className="mb-4">
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded"
            className="max-h-64 mx-auto rounded-lg border"
          />
        </div>
      )}

      {/* Analytics Details */}
      <div className="space-y-2">
        <p><strong>Trash Detected:</strong> {details.trashCount}</p>
        <p><strong>Confidence Level:</strong> {details.confidence}%</p>
        <p><strong>Detection Time:</strong> {details.time} ms</p>
      </div>

      {/* Back Button */}
      <div className="mt-4 text-center">
        <button
          onClick={onBack}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
};
