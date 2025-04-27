
import { CVAnalysisData } from "@/components/CVAnalysis";

export const extractTextFromPDF = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('pdf', file);
  
  // For now, we'll return a mock extraction. In a production environment,
  // you would want to use a PDF extraction service or library
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      // This is a demo implementation. For a real app, use proper PDF parsing
      const text = `
John Smith
Software Engineer
john.smith@email.com | (123) 456-7890 | New York, NY | linkedin.com/in/johnsmith

PROFESSIONAL SUMMARY
Experienced software engineer with 8+ years developing web applications using React, Node.js, and cloud technologies. Passionate about creating user-friendly interfaces and optimizing application performance.

WORK EXPERIENCE
Senior Software Engineer
Tech Solutions Inc. | Jan 2020 - Present
- Led development of company's flagship product, increasing user engagement by 40%
- Implemented CI/CD pipeline reducing deployment time by 65%
- Mentored junior developers and conducted code reviews

Software Engineer
WebDev Company | Mar 2016 - Dec 2019
- Developed responsive web applications using React and Redux
- Collaborated with UX team to improve user experience
- Optimized database queries, improving performance by 30%

EDUCATION
Master of Computer Science
University of Technology | 2015

Bachelor of Science in Software Engineering
State University | 2013

SKILLS
- JavaScript/TypeScript
- React/Redux
- Node.js/Express
- SQL/NoSQL Databases
- AWS/Azure
- Docker/Kubernetes
- Git/GitHub
- Agile/Scrum

LANGUAGES
- English (Native)
- Spanish (Intermediate)
- French (Basic)

ACHIEVEMENTS
- Published 3 technical articles on modern web development
- Speaker at Regional Tech Conference 2021
- Awarded "Employee of the Year" 2020`;

      resolve(text);
    };
    reader.readAsText(file);
  });
};

export const extractTextFromDOCX = async (file: File): Promise<string> => {
  // Similar to PDF, we'll return mock extraction for now
  return `
Jane Doe
Data Scientist
jane.doe@email.com | (987) 654-3210 | San Francisco, CA | linkedin.com/in/janedoe

PROFESSIONAL SUMMARY
Data scientist with 5+ years of experience applying statistical analysis, machine learning, and data visualization to solve complex business problems. Strong background in Python, R, and SQL with a passion for deriving actionable insights.

WORK EXPERIENCE
Senior Data Scientist
Data Insights Corp | Mar 2019 - Present
- Developed predictive models that increased customer retention by 25%
- Created data pipelines processing 500GB+ daily using Apache Spark
- Collaborated with product teams to implement A/B testing framework

Data Analyst
Analytics Company | Jun 2016 - Feb 2019
- Analyzed user behavior data to identify trends and opportunities
- Built interactive dashboards using Tableau
- Automated reporting processes, saving 10+ hours weekly

EDUCATION
Master of Science in Data Science
Tech University | 2016

Bachelor of Science in Statistics
State College | 2014

SKILLS
- Python (Pandas, NumPy, Scikit-learn)
- R
- SQL
- Data Visualization (Tableau, Power BI)
- Machine Learning
- Statistical Analysis
- Big Data (Hadoop, Spark)
- Deep Learning

LANGUAGES
- English (Native)
- Mandarin (Conversational)

ACHIEVEMENTS
- Published research paper on machine learning algorithms
- Kaggle competition - Top 5% ranking
- Certified in Advanced Data Science`;
};

export const analyzeCVText = async (cvText: string): Promise<CVAnalysisData> => {
  return new Promise((resolve, reject) => {
    try {
      const ws = new WebSocket('wss://backend.buildpicoapps.com/ask_ai_streaming_v2');
      let analysisResult = '';
      
      const promptTemplate = "Analyze the given resume text and return 1 sentence summary of the candidate, rate of the cv quality on 10, some suggestion on how to make it better, what it is missing in the cv, what he need to impress the hr, a list of modification that the user should do to his cv to make it better , make it explicit and long and explain in very clear way and for each part give a spesific paragraphe , do not generate one paragraphe: {Resume text}";
      const substitutedPrompt = promptTemplate.replace("{Resume text}", cvText);

      ws.addEventListener("open", () => {
        ws.send(JSON.stringify({
          appId: "goal-worker",
          prompt: substitutedPrompt
        }));
      });

      ws.addEventListener("message", (event) => {
        analysisResult += event.data;
      });

      ws.addEventListener("close", (event) => {
        if (event.code !== 1000) {
          reject(new Error("WebSocket connection closed unexpectedly"));
          return;
        }

        try {
          // Parse the analysis result into the expected format
          const analysis = {
            summary: analysisResult,
            personalInfo: {
              name: "Extracted from CV",
            },
            education: [],
            experience: [],
            skills: [],
            languages: []
          };
          
          resolve(analysis);
        } catch (parseError) {
          reject(new Error('Failed to parse CV analysis results'));
        }
      });

      ws.addEventListener("error", (error) => {
        reject(new Error('WebSocket error occurred'));
      });
    } catch (error) {
      reject(error);
    }
  });
};
