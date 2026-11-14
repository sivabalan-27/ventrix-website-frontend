# Ventrix Technologies – Official Company Website

A modern, responsive company website developed as part of a Full Stack Developer Intern technical assessment.

The platform showcases company information, services, products, and career opportunities while providing business enquiry management and AI-powered features to improve visitor engagement and enquiry prioritization.

## 🌐 Live Demo

- **Official Website:** https://ventrixtechnologies.com/
- **Admin Portal:** https://ventrix-website-admin.vercel.app/

## ✨ Features

### 1. Home
- Modern hero section with call-to-action buttons.
- Company introduction.
- Services and products overview.
- Why Choose Ventrix section.
- Business enquiry section.

### 2. About Us
- Company overview.
- Mission and vision.
- Core values.
- Areas of expertise.

### 3. Services

Showcases the services offered by Ventrix Technologies:

- Web Development
- Mobile Application Development
- AI & Automation Solutions
- Software Development
- Digital Marketing
- IT Consulting

### 4. Products
- Product showcases with descriptions and features.
- Product visuals.
- Learn More navigation.

### 5. Careers
- Internship and job opportunities.
- Job descriptions.
- Online job application form.
- Resume upload functionality.

### 6. Contact
- Business enquiry form.
- Name, email, phone, subject, and message fields.
- Form validation and submission feedback.
- Backend API integration.
- WhatsApp contact integration.

### 7. AI-Powered Features

#### AI Website Chatbot

An AI-powered virtual assistant designed to help website visitors learn more about Ventrix Technologies.

**Features:**
- Answers questions about company services and products.
- Provides company-related information.
- Handles visitor questions and follow-up conversations.
- Includes suggested questions for quick interactions.
- Maintains its intended Ventrix assistant role.
- Handles inappropriate requests and prompt-injection attempts.

#### AI-Assisted Lead Enquiry Classification

An AI-powered feature that analyses incoming business enquiries and determines their priority based on the enquiry content and intent.

**Features:**
- Analyses incoming business enquiries using AI.
- Evaluates enquiry content and identifies its intent.
- Assigns priority levels to enquiries.
- Helps administrators identify high-priority enquiries.
- Supports faster enquiry review and follow-up through the admin dashboard.

**Purpose:** Help the Ventrix team identify important business enquiries and prioritize potential client requests.

### 8. Responsive Design
- Desktop, tablet, and mobile support.
- Responsive navigation.
- Modern UI components.
- Smooth animations and transitions.
- Consistent visual styling across screen sizes.

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React.js |
| Programming Language | JavaScript (ES6+) |
| Styling | Tailwind CSS, CSS3 |
| Markup | HTML5 |
| Build Tool | Vite |
| State Management | React Hooks |
| API Integration | REST APIs |
| Version Control | Git & GitHub |
| Deployment | Vercel |

## 🏗️ Project Architecture

The application follows a frontend-backend architecture.

- **Frontend:** React.js application responsible for the user interface and visitor interactions.
- **Backend:** Node.js and Express.js REST APIs handle application submissions, business enquiries, and AI integrations.
- **Database:** MongoDB stores application and enquiry information.
- **AI Integration:** Backend-based AI processing supports the website chatbot and enquiry priority classification.
- **Admin Portal:** A separate React application for managing job applications and business enquiries.

## 📁 Project Structure

```text
ventrix-website-frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## ⚙️ Installation and Setup

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/sivabalan-27/ventrix-website-frontend.git
```

### 2. Navigate to the project directory

```bash
cd ventrix-website-frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:5000
```

For production, replace the local URL with your deployed backend API URL.

### 5. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

### 6. Build for production

```bash
npm run build
```

The optimized production files will be generated in the `dist/` directory.

## 🔗 Backend Integration

The frontend communicates with the backend through REST APIs.

Backend responsibilities include:

- Contact enquiry submission.
- Job application submission.
- Resume upload handling.
- AI chatbot communication.
- AI-assisted enquiry priority classification.
- Database operations through MongoDB.

The frontend uses the configured `VITE_API_URL` to communicate with the backend.

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API base URL |

**Security:** Sensitive credentials and AI API keys are maintained on the backend. Private API keys and secrets must never be exposed in frontend code or public repositories.

## 🚀 Deployment

The frontend is deployed using **Vercel**.

Deployment workflow:

1. Push source code to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Select Vite as the framework preset.
5. Deploy the application.

Vercel can automatically trigger new deployments when changes are pushed to the connected GitHub branch.

## 🧪 Testing

The following areas have been tested:

- Website navigation and page functionality.
- Responsive desktop and mobile layouts.
- Contact enquiry submission.
- Job application submission.
- Resume upload and download.
- Frontend and backend API communication.
- Admin dashboard data retrieval.
- AI chatbot conversations.
- Initial chatbot prompt-injection tests.
- Admin login and logout.
