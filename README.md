# 🅱️ BidaIA

BidaIA is an AI-powered platform designed to simulate personalized, short-term internship experiences. By using your CV and role selection, it generates realistic internship projects, tasks, and feedback, helping you gain hands-on experience and professional development without the need to apply for traditional internships.

<br>
<div align="center">
<img align="center" alt="isagi-goal" width="400" src="https://github.com/achraf-oujjir/BidaIA/blob/main/bidaia-logo.png">
</div>
<br>

**Project Name:** BidaIA  
**Meaning:** "BidaIA" combines the Arabic word "Bidaya" (meaning “beginning”) with "AI" (Artificial Intelligence), symbolizing the platform's mission to be the first step into the professional world through AI-powered micro-internships.

## 🚀 Tech Stack

- **Frontend:**  
  - Next.js (JavaScript)  
  - Tailwind CSS  
  - shadcn/ui

- **Backend/API:**  
  - Next.js API Routes

- **AI:**  
  - OpenAI GPT-4 Turbo via the `openai` npm package

- **Storage:**  
  - None (Data is temporary and stored in-memory, no user login)

## 🏗️ Features

### 1. Landing Page (Home)
- Brief introduction to BidaIA
- Call-to-Action (CTA): "Start My Simulation"

### 2. CV Upload & Parsing
- Upload a PDF resume (client-side only)
- Uses a JS-compatible PDF parser (like `pdfjs-dist`)
- Extracts and displays basic info (name, skills, etc.)

### 3. Role & Company Type Selection
- Dropdown or card options to select:
  - **Role:** Data Analyst, Frontend Developer
  - **Company Type:** Startup, Tech Giant
- Selections are saved in session (in-memory)

### 4. Scenario Generator
- Generates an internship project brief, 5-day plan, and AI coworker intro messages using GPT-4
- Displays clean UI with shadcn/ui components

### 5. Simulated Chat with AI Coworker
- Chat interface with GPT-4-powered AI coworker
- Pre-seeded context: user’s role and internship project
- Users can ask questions or request help from the AI coworker

### 6. Task Feedback Generator
- Users can submit task summaries/responses
- Sends to GPT-4 for detailed feedback and displays it with clear formatting

## 🧑‍💻 Setup and Installation

### 1. Clone the repository

```bash
git clone https://github.com/achraf-oujjir/bidaia-ai-powered-internships.git
cd bidaia-ai-powered-internships
```

### 2. Install dependencies

```bash
npm install
```


### 3. Run the development server

```bash
npm run dev
```
The project will be available at http://localhost:3000.

## 🛠️ Project Structure

- `/pages/` - Next.js page components
  - Contains the main pages for the platform (e.g., Home, Simulation, Task Feedback).
  
- `/components/` - Reusable UI components
  - This directory includes components like the chat interface, upload form, and role selection cards.

- `/lib/prompts.js` - GPT-4 API prompt definitions
  - Contains all the prompts used for generating scenarios, tasks, and feedback.

- `/api/` - Backend API routes for GPT-4 interaction and CV parsing
  - Includes routes for interacting with the GPT-4 API and parsing user-uploaded CVs (PDF).

## ✨ UI Design

- **Color Scheme:** Deep indigo, warm sand beige, and mint green
- **Layout:** Clean and professional with a focus on user experience

## 🧑‍🤝‍🧑 Collaboration

If you'd like to contribute to this project, please fork the repository, create a new branch for your changes, and submit a pull request.

## 🔗 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Inspiration & Credits

This project was inspired by the need for accessible, hands-on internship experiences powered by AI, aiming to bridge the gap between education and professional growth.

## 📝 Future Features

- **Gamification:** Points, badges, and leaderboards
- **Final Report & Certificate:** Performance report and mock reference letter
- **B2B Licensing:** Branded internship simulations for universities and corporates
