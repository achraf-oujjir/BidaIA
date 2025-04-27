
import React from 'react';
import { Badge } from "@/components/ui/badge";  // Add this import
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface CVAnalysisData {
  summary?: string;
  personalInfo?: {
    name?: string;
    email?: string;
    phone?: string;
    location?: string;
    linkedIn?: string;
    portfolio?: string;
  };
  education?: Array<{
    degree?: string;
    institution?: string;
    date?: string;
  }>;
  experience?: Array<{
    position?: string;
    company?: string;
    date?: string;
    description?: string[];
  }>;
  skills?: string[];
  languages?: Array<{
    language: string;
    proficiency?: string;
  }>;
}

const CVAnalysis = ({ data }: { data: CVAnalysisData }) => {
  if (!data) return null;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Analysis Summary */}
      <Card>
        <CardHeader>
          <CardTitle>CV Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <div className="whitespace-pre-wrap">{data.summary}</div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.personalInfo?.name && (
              <div>
                <span className="text-gray-500 text-sm">Name</span>
                <p className="font-medium">{data.personalInfo.name}</p>
              </div>
            )}
            {data.personalInfo?.email && (
              <div>
                <span className="text-gray-500 text-sm">Email</span>
                <p className="font-medium">{data.personalInfo.email}</p>
              </div>
            )}
            {data.personalInfo?.phone && (
              <div>
                <span className="text-gray-500 text-sm">Phone</span>
                <p className="font-medium">{data.personalInfo.phone}</p>
              </div>
            )}
            {data.personalInfo?.location && (
              <div>
                <span className="text-gray-500 text-sm">Location</span>
                <p className="font-medium">{data.personalInfo.location}</p>
              </div>
            )}
            {data.personalInfo?.linkedIn && (
              <div>
                <span className="text-gray-500 text-sm">LinkedIn</span>
                <p className="font-medium">{data.personalInfo.linkedIn}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Summary */}
      {data.summary && (
        <Card>
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{data.summary}</p>
          </CardContent>
        </Card>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Work Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.experience.map((exp, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{exp.position}</h3>
                    <span className="text-sm text-gray-500">{exp.date}</span>
                  </div>
                  <p className="text-bidaia-primary mb-2">{exp.company}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {exp.description?.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-gray-500">{edu.date}</span>
                  </div>
                  <p className="text-bidaia-primary">{edu.institution}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <Badge key={index} className="bg-bidaia-light text-bidaia-primary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Languages */}
      {data.languages && data.languages.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {data.languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium">{lang.language}</span>
                  <span className="text-sm text-gray-500">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CVAnalysis;
