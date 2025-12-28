import { Upload, User } from "lucide-react";
import React, { RefObject } from "react";

export function StudentPhotoDropzone({
  fileInputRef,
  handleBoxClick,
  handleDragOver,
  handleDrop,
  handleFileSelect,
  preview,
}) {
  return (
    <div className="w-full">
      <div
        className={`
          relative border-2 border-dashed rounded-xl p-6 
          flex flex-col items-center justify-center text-center 
          cursor-pointer transition-all duration-300
          ${preview 
            ? 'border-green-400 bg-green-50/50 hover:bg-green-50' 
            : 'border-gray-300 bg-gray-50/50 hover:bg-gray-100 hover:border-blue-400'
          }
        `}
        onClick={handleBoxClick}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {preview ? (
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <img 
                src={preview} 
                alt="Student preview" 
                className="w-32 h-32 rounded-full object-cover shadow-lg ring-4 ring-green-200"
              />
              <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-2 shadow-md">
                <Upload className="h-4 w-4" />
              </div>
            </div>
            <p className="text-sm font-medium text-green-700">
              Photo uploaded successfully!
            </p>
            <p className="text-xs text-gray-500">
              Click or drag to change photo
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-full p-4 shadow-md">
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-700">
                Upload student photo
              </p>
              <p className="text-xs text-gray-500 mt-1">
                or,{" "}
                <label
                  htmlFor="studentPhotoUpload"
                  className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  click to browse
                </label>
              </p>
              <p className="text-xs text-gray-400 mt-2">
                PNG, JPG up to 4MB
              </p>
            </div>
          </div>
        )}
        
        <input
          type="file"
          id="studentPhotoUpload"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={(e) => handleFileSelect(e.target.files)}
        />
      </div>
    </div>
  );
}
