import React, { useState, useEffect } from 'react';
import { Upload, Image as ImageIcon, X } from 'lucide-react';

interface ImageFile {
  id: string;
  file: File;
  url: string;
}

const ImageUploader: React.FC = () => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageFile | null>(null);

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages: ImageFile[] = Array.from(e.target.files).map(file => ({
        id: `${file.name}-${Date.now()}`,
        file,
        url: URL.createObjectURL(file)
      }));
      
      setImages(prev => [...prev, ...newImages]);
    }
  };

  // Remove an image
  const removeImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
    if (selectedImage?.id === id) {
      setSelectedImage(null);
    }
  };

  // View an image in the modal
  const viewImage = (image: ImageFile) => {
    setSelectedImage(image);
  };

  // Clean up object URLs when component unmounts
  useEffect(() => {
    return () => {
      images.forEach(image => URL.revokeObjectURL(image.url));
    };
  }, [images]);

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Image Gallery</h2>
      
      {/* Upload Section */}
      <div className="mb-8">
        <label 
          htmlFor="image-upload" 
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-green-300 rounded-lg cursor-pointer bg-green-50 hover:bg-green-100 transition"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
          </div>
          <input 
            id="image-upload" 
            type="file" 
            className="hidden" 
            accept="image/*" 
            multiple 
            onChange={handleFileChange} 
          />
        </label>
      </div>
      
      {/* Image Gallery */}
      {images.length > 0 ? (
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Your Images</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map(image => (
              <div key={image.id} className="relative group">
                <div 
                  className="aspect-square rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
                  onClick={() => viewImage(image)}
                >
                  <img 
                    src={image.url} 
                    alt={image.file.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage(image.id);
                  }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500">No images uploaded yet</p>
        </div>
      )}
      
      {/* Image Viewer Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="text-lg font-medium text-gray-900">
                {selectedImage.file.name}
              </h3>
              <button 
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 flex justify-center">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.file.name} 
                className="max-h-[70vh] object-contain"
              />
            </div>
            <div className="p-4 border-t bg-gray-50">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">
                    Size: {(selectedImage.file.size / 1024).toFixed(2)} KB
                  </p>
                  <p className="text-sm text-gray-500">
                    Type: {selectedImage.file.type}
                  </p>
                </div>
                <button 
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  onClick={() => removeImage(selectedImage.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;