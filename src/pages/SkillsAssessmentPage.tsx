
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Loader2, Award, CheckCircle, BookOpen, BarChart4, ChevronRight } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import SkillsAssessmentForm from '@/components/SkillsAssessmentForm';
import SkillsMatrix from '@/components/SkillsMatrix';
import RecommendedLearning from '@/components/RecommendedLearning';

const SkillsAssessmentPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('assessment');
  const [assessmentComplete, setAssessmentComplete] = useState(false);
  const [skillsData, setSkillsData] = useState<any>(null);

  const handleAssessmentComplete = (results: any) => {
    setIsLoading(true);
    
    setTimeout(() => {
      setSkillsData(results);
      setAssessmentComplete(true);
      setActiveTab('results');
      setIsLoading(false);
      toast({
        title: "Assessment Complete",
        description: "Your skills assessment has been analyzed successfully!",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Skills Assessment</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evaluate your professional skills, identify improvement areas, and get personalized recommendations.
            </p>
          </div>

          <Tabs 
            defaultValue="assessment" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full max-w-4xl mx-auto"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="assessment">Assessment</TabsTrigger>
              <TabsTrigger value="results" disabled={!assessmentComplete}>Results</TabsTrigger>
              <TabsTrigger value="learning" disabled={!assessmentComplete}>Learning Path</TabsTrigger>
            </TabsList>
            
            <TabsContent value="assessment" className="mt-6">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <Loader2 className="h-12 w-12 animate-spin text-bidaia-primary mb-4" />
                  <p className="text-lg text-gray-600">Analyzing your skills profile...</p>
                </div>
              ) : (
                <SkillsAssessmentForm onComplete={handleAssessmentComplete} />
              )}
            </TabsContent>
            
            <TabsContent value="results" className="mt-6 space-y-6">
              {skillsData && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Overall Skill Level</CardTitle>
                        <CardDescription>Based on your assessment</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-bidaia-primary mb-2">
                          {skillsData.overallScore}/10
                        </div>
                        <Progress value={skillsData.overallScore * 10} className="h-2" />
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Top Skill</CardTitle>
                        <CardDescription>Your strongest ability</CardDescription>
                      </CardHeader>
                      <CardContent className="flex items-center gap-4">
                        <Award className="h-8 w-8 text-bidaia-primary" />
                        <div>
                          <div className="font-medium">{skillsData.topSkill}</div>
                          <Badge variant="outline" className="mt-1">Expert Level</Badge>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Growth Area</CardTitle>
                        <CardDescription>Focus on improvement</CardDescription>
                      </CardHeader>
                      <CardContent className="flex items-center gap-4">
                        <BarChart4 className="h-8 w-8 text-bidaia-accent" />
                        <div>
                          <div className="font-medium">{skillsData.improvementArea}</div>
                          <Badge variant="outline" className="mt-1">Development Needed</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <SkillsMatrix skillsData={skillsData.skills} />
                  
                  <div className="mt-8 flex justify-center">
                    <Button 
                      onClick={() => setActiveTab('learning')}
                      className="bg-bidaia-primary hover:bg-bidaia-secondary"
                    >
                      View Recommended Learning Path <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}
            </TabsContent>
            
            <TabsContent value="learning" className="mt-6">
              {skillsData && <RecommendedLearning skillsData={skillsData} />}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SkillsAssessmentPage;
