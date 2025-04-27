
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Video, FileText, ExternalLink, Bookmark } from 'lucide-react';

interface Resource {
  title: string;
  type: string;
  provider: string;
  link: string;
  difficulty: string;
}

interface Recommendation {
  skill: string;
  resources: Resource[];
}

interface RecommendedLearningProps {
  skillsData: {
    recommendations: Recommendation[];
    improvementArea: string;
  };
}

const RecommendedLearning = ({ skillsData }: RecommendedLearningProps) => {
  const getResourceIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'course':
        return <Video className="h-5 w-5 text-bidaia-primary" />;
      case 'book':
        return <BookOpen className="h-5 w-5 text-bidaia-accent" />;
      case 'tutorial':
        return <FileText className="h-5 w-5 text-green-500" />;
      default:
        return <BookOpen className="h-5 w-5 text-gray-500" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-bidaia-light to-white p-6 rounded-lg border shadow-sm">
        <h3 className="text-xl font-semibold mb-2">
          Your Personalized Learning Path
        </h3>
        <p className="text-gray-600">
          Based on your assessment, we've created a customized learning path focused on improving your 
          <span className="font-medium text-bidaia-primary mx-1">
            {skillsData.improvementArea}
          </span>
          to help you achieve your career goals.
        </p>
      </div>

      <Tabs defaultValue={skillsData.recommendations[0].skill}>
        <TabsList className="mb-6">
          {skillsData.recommendations.map((rec) => (
            <TabsTrigger key={rec.skill} value={rec.skill}>
              {rec.skill}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {skillsData.recommendations.map((recommendation) => (
          <TabsContent key={recommendation.skill} value={recommendation.skill}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendation.resources.map((resource, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                  <div className="bg-gradient-to-r from-bidaia-light to-white px-6 py-2">
                    <Badge variant="outline" className={`${getDifficultyColor(resource.difficulty)}`}>
                      {resource.difficulty}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <CardDescription className="mt-2">
                          {resource.provider}
                        </CardDescription>
                      </div>
                      {getResourceIcon(resource.type)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{resource.type}</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Bookmark className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Resource
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default RecommendedLearning;
