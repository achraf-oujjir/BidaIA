
import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface PDFViewerProps {
  pdfDoc: any;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const PDFViewer = ({ pdfDoc, currentPage, setCurrentPage }: PDFViewerProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  const renderPage = async () => {
    if (!pdfDoc || !canvasRef.current) return;
    
    try {
      const page = await pdfDoc.getPage(currentPage);
      const viewport = page.getViewport({ scale: 1.2 });

      const canvas = document.createElement('canvas');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const context = canvas.getContext('2d');
      
      if (context) {
        await page.render({ canvasContext: context, viewport }).promise;
      }

      // Clear previous canvas and append new one
      canvasRef.current.innerHTML = '';
      canvasRef.current.appendChild(canvas);
    } catch (error) {
      console.error('Error rendering page:', error);
    }
  };

  useEffect(() => {
    renderPage();
  }, [pdfDoc, currentPage]);

  return (
    <div className="space-y-4">
      <div ref={canvasRef} className="border rounded-md shadow-md" />
      <div className="flex justify-between items-center mt-2">
        <Button 
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} 
          disabled={currentPage <= 1}
          variant="outline"
        >
          Previous
        </Button>
        <span>{currentPage} / {pdfDoc.numPages}</span>
        <Button 
          onClick={() => setCurrentPage(p => Math.min(p + 1, pdfDoc.numPages))}
          disabled={currentPage >= pdfDoc.numPages}
          variant="outline"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default PDFViewer;
