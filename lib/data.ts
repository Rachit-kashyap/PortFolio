import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'rachitkumae101@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Rachit Kumar, I am reaching out to you because...',

   
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Rachit-kashyap' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/rachit-kumar-37bb572b7/' },
  
    { name: 'Old Version', url: 'https://jocular-malabi-e8553c.netlify.app/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
       
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
       
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: "Service Booking Platform",
        slug: "service-booking-platform",
        liveUrl: "https://worker-ihaa.vercel.app/",
        year: 2026,
        description: `
A full-stack service booking platform built using MERN stack for managing home services like plumbing, carpentry, and cleaning.

Key Features:
<ul>
  <li>🧑‍💼 Role-based system (User, Worker, Admin)</li>
  <li>📅 Service booking and scheduling system</li>
  <li>🔐 JWT-based authentication & authorization</li>
  <li>📊 Admin dashboard for managing services and users</li>
  <li>📱 Fully responsive UI using React and Tailwind CSS</li>
</ul>
        `,
        role: `
Full-Stack Developer:
<ul>
  <li>Built complete frontend using React.js and Tailwind CSS</li>
  <li>Developed REST APIs using Node.js and Express.js</li>
  <li>Implemented JWT authentication and role-based access control</li>
  <li>Designed and managed MongoDB database schemas</li>
  <li>Created admin and user dashboards for full system control</li>
</ul>
        `,
        techStack: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "Tailwind CSS",
        ],
        thumbnail: "/projects/images/image3.png",
        longThumbnail: "/projects/thumbnail/thumb1.png",
        images: [
            "/projects/images/image1.png",
            "/projects/images/image2.png",
        ],
    },
{
    title: "Spoke - Bicycle Repair Shop Management System",
    slug: "spoke-bicycle-repair-shop",
    liveUrl: "https://spokeshop.netlify.app/board",
    year: 2026,
    description: `
A production-ready full-stack bicycle repair shop management system built for the Spoke Full-Stack Internship Assignment.

Key Features:
<ul>
  <li>🚲 Customer, Bike, and Repair Job Management</li>
  <li>📋 Kanban-style repair workflow dashboard</li>
  <li>🔐 JWT Authentication with HTTP Only Cookies</li>
  <li>📸 Damage & Repair Photo Uploads using Cloudinary</li>
  <li>💰 Estimates, Labour, Parts & Automatic Bill Calculation</li>
  <li>⏰ Late job detection with repair timeline tracking</li>
  <li>✅ Server-side business rule validation and stage transitions</li>
  <li>📱 Fully responsive modern UI built with Next.js & Tailwind CSS</li>
</ul>
    `,
    role: `
Full-Stack Developer:
<ul>
  <li>Built the complete application using Next.js App Router and TypeScript</li>
  <li>Designed scalable MongoDB schemas using Mongoose</li>
  <li>Implemented secure JWT authentication with HTTP Only Cookies</li>
  <li>Developed REST APIs for customers, bikes, repair jobs, and dashboard</li>
  <li>Integrated Cloudinary for image uploads and automatic media management</li>
  <li>Implemented repair workflow validation and business rules on the server</li>
  <li>Created responsive dashboard with Kanban repair board and analytics</li>
  <li>Handled data validation using Zod and centralized error handling</li>
</ul>
    `,
    techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Cloudinary",
        "Tailwind CSS",
        "Zod",
    ],
    thumbnail: "/projects/images/spoke.png",
    longThumbnail: "/projects/thumbnail/spoke-thumb.png",
    images: [
        "/projects/images/spoke-dashboard.png",
        "/projects/images/spoke-job.png",
        "/projects/images/spoke-customer.png",
    ],
},
 


];

export const MY_EXPERIENCE = [
    {
        title: "Full Stack Developer",
        company: "Arieal Sollutions Pvt Ltd",
        duration: "07-Jan-2025 - 25-May-2026",
    }
];
