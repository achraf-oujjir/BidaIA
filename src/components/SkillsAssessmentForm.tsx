
import React, { useState } from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const skillLevels = [
  { value: "1", label: "Beginner" },
  { value: "3", label: "Intermediate" },
  { value: "5", label: "Advanced" }
];

const mockAssessmentData = {
  overallScore: 7,
  topSkill: "Communication",
  improvementArea: "Technical Skills",
  skills: [
    { name: "Communication", score: 9, category: "Soft Skills" },
    { name: "Leadership", score: 8, category: "Soft Skills" },
    { name: "Problem Solving", score: 7, category: "Soft Skills" },
    { name: "JavaScript", score: 6, category: "Technical Skills" },
    { name: "React", score: 5, category: "Technical Skills" },
    { name: "Node.js", score: 4, category: "Technical Skills" },
    { name: "Project Management", score: 7, category: "Management" },
    { name: "Time Management", score: 6, category: "Management" },
    { name: "Teamwork", score: 8, category: "Soft Skills" },
  ],
  recommendations: [
    {
      skill: "Technical Skills",
      resources: [
        { title: "Modern JavaScript Course", type: "course", provider: "Udemy", link: "#", difficulty: "Intermediate" },
        { title: "React - The Complete Guide", type: "course", provider: "Coursera", link: "#", difficulty: "Advanced" },
        { title: "Node.js for Beginners", type: "tutorial", provider: "FreeCodeCamp", link: "#", difficulty: "Beginner" }
      ]
    },
    {
      skill: "Project Management",
      resources: [
        { title: "Agile Project Management", type: "course", provider: "LinkedIn Learning", link: "#", difficulty: "Intermediate" },
        { title: "Scrum: The Complete Guide", type: "book", provider: "Amazon", link: "#", difficulty: "Beginner" }
      ]
    }
  ]
};

const formSchema = z.object({
  role: z.string().min(2, "Please enter your current role"),
  careerGoals: z.string().min(10, "Please describe your career goals"),
  technicalSkills: z.string().min(1, "Please select your technical skill level"),
  communicationSkills: z.string().min(1, "Please select your communication skill level"),
  leadershipSkills: z.string().min(1, "Please select your leadership skill level"),
  problemSolvingSkills: z.string().min(1, "Please select your problem solving skill level"),
  teamworkSkills: z.string().min(1, "Please select your teamwork skill level"),
  adaptabilitySkills: z.string().min(1, "Please select your adaptability skill level"),
  timeManagementSkills: z.string().min(1, "Please select your time management skill level"),
  experience: z.string().min(1, "Please select your years of experience"),
  strengths: z.string().min(10, "Please describe your strengths"),
  weaknesses: z.string().min(10, "Please describe areas for improvement"),
});

interface SkillsAssessmentFormProps {
  onComplete: (results: any) => void;
}

const SkillsAssessmentForm = ({ onComplete }: SkillsAssessmentFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "",
      careerGoals: "",
      technicalSkills: "",
      communicationSkills: "",
      leadershipSkills: "",
      problemSolvingSkills: "",
      teamworkSkills: "",
      adaptabilitySkills: "",
      timeManagementSkills: "",
      experience: "",
      strengths: "",
      weaknesses: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Assessment form submitted:", values);
    // In a real app, we would process this data through an AI
    // For now, we'll use mock data
    onComplete(mockAssessmentData);
  };

  return (
    <Card className="bg-white shadow-sm">
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Background Information</h3>
              
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Role</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="e.g., Software Developer, Project Manager, etc." 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Years of Experience</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="0-2" />
                          </FormControl>
                          <FormLabel className="font-normal">0-2 years</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="3-5" />
                          </FormControl>
                          <FormLabel className="font-normal">3-5 years</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="6-10" />
                          </FormControl>
                          <FormLabel className="font-normal">6-10 years</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="10+" />
                          </FormControl>
                          <FormLabel className="font-normal">10+ years</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="careerGoals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Career Goals</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your short and long-term career goals" 
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Skills Self-Assessment</h3>
              <p className="text-sm text-gray-500">Rate your proficiency in the following areas:</p>
              
              {[
                { name: "technicalSkills", label: "Technical Skills" },
                { name: "communicationSkills", label: "Communication" },
                { name: "leadershipSkills", label: "Leadership" },
                { name: "problemSolvingSkills", label: "Problem Solving" },
                { name: "teamworkSkills", label: "Teamwork" },
                { name: "adaptabilitySkills", label: "Adaptability" },
                { name: "timeManagementSkills", label: "Time Management" },
              ].map((skill) => (
                <FormField
                  key={skill.name}
                  control={form.control}
                  name={skill.name as any}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{skill.label}</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex justify-between"
                        >
                          {skillLevels.map((level) => (
                            <FormItem key={level.value} className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={level.value} />
                              </FormControl>
                              <FormLabel className="font-normal">{level.label}</FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Strengths & Areas for Improvement</h3>
              
              <FormField
                control={form.control}
                name="strengths"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Key Strengths</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your key professional strengths" 
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="weaknesses"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Areas for Improvement</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe areas where you'd like to improve" 
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-end">
              <Button 
                type="submit" 
                className="bg-bidaia-primary hover:bg-bidaia-secondary"
              >
                Complete Assessment
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SkillsAssessmentForm;
