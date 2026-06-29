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

 


];

export const MY_EXPERIENCE = [
    {
        title: "Full Stack Developer",
        company: "Arieal Sollutions Pvt Ltd",
        duration: "07-Jan-2025 - 25-May-2026",
    }
];
