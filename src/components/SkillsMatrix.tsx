
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveRadar } from '@nivo/radar';

interface Skill {
  name: string;
  score: number;
  category: string;
}

interface SkillsMatrixProps {
  skillsData: Skill[];
}

const SkillsMatrix = ({ skillsData }: SkillsMatrixProps) => {
  // Transform data for the radar chart
  const radarData = skillsData.map(skill => ({
    skill: skill.name,
    score: skill.score,
    scoreNormalized: skill.score * 10,
  }));

  // Group skills by category
  const skillsByCategory = skillsData.reduce((acc: Record<string, Skill[]>, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Skills Visualization</CardTitle>
          <CardDescription>
            Radar chart showing your proficiency across different skills
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveRadar
              data={radarData}
              keys={['score']}
              indexBy="skill"
              valueFormat=">-.2f"
              margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
              borderColor={{ from: 'color' }}
              gridLabelOffset={36}
              dotSize={10}
              dotColor={{ theme: 'background' }}
              dotBorderWidth={2}
              colors={{ scheme: 'category10' }}
              blendMode="multiply"
              motionConfig="wobbly"
              legends={[
                {
                  anchor: 'top-left',
                  direction: 'column',
                  translateX: -50,
                  translateY: -40,
                  itemWidth: 80,
                  itemHeight: 20,
                  itemTextColor: '#999',
                  symbolSize: 12,
                  symbolShape: 'circle',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemTextColor: '#000'
                      }
                    }
                  ]
                }
              ]}
            />
          </div>
        </CardContent>
      </Card>
      
      {Object.entries(skillsByCategory).map(([category, skills]) => (
        <Card key={category}>
          <CardHeader>
            <CardTitle>{category}</CardTitle>
            <CardDescription>
              Your proficiency in {category.toLowerCase()} skills
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.score}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-bidaia-primary h-2.5 rounded-full" 
                      style={{ width: `${skill.score * 10}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SkillsMatrix;
