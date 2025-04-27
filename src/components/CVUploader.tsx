import React, { useState, useRef } from 'react';
import { FileUp, FileText, X } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import * as pdfjs from 'pdfjs-dist';

// Set up PDF.js worker
// Use CDN for the worker as a reliable approach
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface CVUploaderProps {
  onFileUploaded: (file: File, extractedText: string) => void;
  onPDFLoaded: (pdfDoc: any) => void;
}

const CVUploader = ({ onFileUploaded, onPDFLoaded }: CVUploaderProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (isValidFile(file)) {
        setSelectedFile(file);
        processFile(file);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (isValidFile(file)) {
        setSelectedFile(file);
        processFile(file);
      }
    }
  };

  const processFile = async (file: File) => {
    setIsLoading(true);
    
    try {
      if (file.type === "application/pdf") {
        await loadPdf(file);
      } else {
        // For other file types
        const text = await extractTextFromFile(file);
        onFileUploaded(file, text);
      }
    } catch (error) {
      console.error("Error processing file:", error);
      toast({
        title: "Error",
        description: "Failed to process the file. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const loadPdf = async (file: File) => {
    try {
      console.log("Loading PDF file:", file.name);
      const buffer = await file.arrayBuffer();
      const loadedPdf = await pdfjs.getDocument({ data: buffer }).promise;
      
      onPDFLoaded(loadedPdf);
      
      // Extract text from all pages
      let text = '';
      for (let pageNumber = 1; pageNumber <= loadedPdf.numPages; pageNumber++) {
        const page = await loadedPdf.getPage(pageNumber);
        const content = await page.getTextContent();
        const pageText = content.items.map((item: any) => item.str).join(' ');
        text += `${pageText} `;
      }
      
      onFileUploaded(file, text.trim());
    } catch (error) {
      console.error('Error loading PDF:', error);
      throw error;
    }
  };

  const extractTextFromFile = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target?.result) {
          resolve(event.target.result.toString());
        } else {
          reject(new Error('Failed to read file content'));
        }
      };
      
      reader.onerror = () => reject(reader.error);
      
      reader.readAsText(file);
    });
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const isValidFile = (file: File) => {
    const fileType = file.type;
    if (
      fileType !== "application/pdf" && 
      fileType !== "application/msword" && 
      fileType !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document" &&
      fileType !== "text/plain"
    ) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF, Word document, or text file.",
        variant: "destructive"
      });
      return false;
    }
    
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > 5) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 5MB.",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };

  const removeSelectedFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`border-2 border-dashed rounded-lg p-8 ${
          dragActive ? 'border-bidaia-primary bg-bidaia-light/30' : 'border-gray-300'
        } transition-colors duration-300 relative`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx,.txt"
          onChange={handleFileChange}
        />
        
        {!selectedFile ? (
          <div className="text-center">
            <div className="mx-auto bg-bidaia-light w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <FileUp className="h-8 w-8 text-bidaia-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Upload your CV</h3>
            <p className="text-gray-600 mb-4">
              Drag and drop your file here or click the button below
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Accepted formats: PDF, Word, Text (max 5MB)
            </p>
            <button
              onClick={handleButtonClick}
              className="bg-bidaia-primary hover:bg-bidaia-secondary text-white px-4 py-2 rounded transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Choose File'}
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm">
            <div className="flex items-center">
              <div className="bg-bidaia-light p-2 rounded-md mr-3">
                <FileText className="h-6 w-6 text-bidaia-primary" />
              </div>
              <div>
                <p className="font-medium">{selectedFile.name}</p>
                <p className="text-sm text-gray-500">
                  {(selectedFile.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
            <button
              onClick={removeSelectedFile}
              className="text-gray-500 hover:text-red-500 transition-colors"
              aria-label="Remove file"
              disabled={isLoading}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}

        {isLoading && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center rounded-lg">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-bidaia-primary mx-auto mb-4"></div>
              <p className="text-bidaia-primary font-medium">Processing your CV...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVUploader;
