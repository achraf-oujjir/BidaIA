
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Loader2 } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import CVUploader from '@/components/CVUploader';
import PDFViewer from '@/components/PDFViewer';
import { analyzeWithOpenAI } from '@/utils/openAIAnalyzer';

const CVAnalyzerPage = () => {
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [resumeText, setResumeText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisOutput, setAnalysisOutput] = useState('');

  const handleFileUploaded = (file: File, extractedText: string) => {
    setResumeText(extractedText);
  };

  const handlePDFLoaded = (loadedPdfDoc: any) => {
    setPdfDoc(loadedPdfDoc);
    setCurrentPage(1);
  };

  const handleAnalyzeCV = async () => {
    if (!resumeText) {
      toast({
        title: "No text extracted",
        description: "Please upload a valid CV first.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    setAnalysisOutput('');

    try {
      const analysis = await analyzeWithOpenAI(resumeText);
      setAnalysisOutput(analysis);
    } catch (error) {
      toast({
        title: "Analysis Error",
        description: error instanceof Error ? error.message : "Failed to analyze CV",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">CV Analyzer</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upload your resume and our AI will extract your skills, experience, and goals to personalize your internship journey.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* File upload component */}
            <CVUploader onFileUploaded={handleFileUploaded} onPDFLoaded={handlePDFLoaded} />

            {/* PDF preview */}
            {pdfDoc && (
              <PDFViewer 
                pdfDoc={pdfDoc} 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}

            {/* Analyze button */}
            <div className="flex justify-center">
              <Button
                onClick={handleAnalyzeCV}
                disabled={!resumeText || isAnalyzing}
                className="bg-bidaia-primary hover:bg-bidaia-secondary px-8"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Analyze CV'
                )}
              </Button>
            </div>

            {/* Analysis output */}
            {analysisOutput && (
              <div className="p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-4">Analysis Result</h2>
                <pre className="whitespace-pre-wrap text-gray-700">{analysisOutput}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CVAnalyzerPage;
