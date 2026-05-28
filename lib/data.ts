import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'DeepakPandey1212d@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi DeepakPandey, I am reaching out to you because...',

   
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/deepak445566' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/deepak-pandey-650638255/' },
  
    { name: 'Old Version', url: 'https://deepakpandeyportfolio.vercel.app/' },
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
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
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
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
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
        title: "Social Media Web App",
        slug: "social-media-app",
        liveUrl: "https://job-one-plum.vercel.app/",
        year: 2025,
        description: `
A full-stack social media platform where users can create posts, like, comment, and interact in real time.

Key Features:
<ul>
  <li>👤 User authentication system</li>
  <li>📝 Create, edit, delete posts</li>
  <li>❤️ Like and comment system</li>
  <li>🔔 Real-time user interaction</li>
  <li>📱 Responsive UI design</li>
</ul>
        `,
        role: `
Full-Stack Developer:
<ul>
  <li>Built frontend using React.js with reusable components</li>
  <li>Developed backend APIs using Node.js and Express.js</li>
  <li>Integrated MongoDB for storing users and posts</li>
  <li>Implemented authentication and authorization system</li>
  <li>Optimized UI performance and API response handling</li>
</ul>
        `,
        techStack: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Socket.io",
            "JWT",
        ],
        thumbnail: "/projects/thumbnail/social1.png",
        longThumbnail: "/projects/thumbnail/social1.png",
        images: [
            "/projects/images/social.png",
            "/projects/images/social.png",
        ],
    },

    {
        title: "Furniture E-Commerce Platform",
        slug: "furniture-ecommerce",
        liveUrl: "",
        year: 2026,
        description: `
A furniture marketplace platform where users can browse, buy, sell, or donate furniture items.

Key Features:
<ul>
  <li>🛒 Product listing system (Buy/Sell/Donate/Free)</li>
  <li>🔍 Category-based filtering</li>
  <li>🧑‍💼 Admin product management</li>
  <li>📦 Cart and order system</li>
  <li>📱 Mobile-friendly UI</li>
</ul>
        `,
        role: `
Full-Stack Developer:
<ul>
  <li>Built full frontend using React.js and Tailwind CSS</li>
  <li>Created REST APIs for product and order system</li>
  <li>Implemented MongoDB schema design for products & users</li>
  <li>Developed admin panel for managing listings</li>
</ul>
        `,
        techStack: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
        ],
        thumbnail: "/projects/thumbnail/thum1.png",
        longThumbnail: "/projects/images/fur1.png",
        images: [
            "/projects/images/fur2.png",
            "/projects/images/fur3.png",
        ],
    },
    {
    title: "AVtech Plus LLP – Construction Website",
    slug: "avtech-plus",
    liveUrl: "https://avtech-plus-new.vercel.app/",
    year: 2026,
    description: `
A professional construction and techno-commercial company website built for AVtech Plus LLP to showcase their services, legacy, and expertise in engineering and infrastructure.

Key Features:
<ul>
  <li>🏗️ Company profile and services showcase</li>
  <li>📄 About section highlighting experience and legacy</li>
  <li>📬 Contact form for consultation and inquiries</li>
  <li>📱 Fully responsive and modern UI</li>
  <li>⚡ Optimized performance with fast loading experience</li>
</ul>
    `,
    role: `
Frontend Developer:
<ul>
  <li>Developed responsive UI using React.js and Tailwind CSS</li>
  <li>Structured and designed all company information pages</li>
  <li>Implemented inquiry/contact form functionality</li>
  <li>Ensured mobile-first responsive design</li>
</ul>
    `,
    techStack: ["React.js", "Tailwind CSS", "Vercel"],
    thumbnail: "/projects/thumbnail/av3.png",
    longThumbnail: "/projects/images/av1.png",
    images: [
        "/projects/images/av2.png",
        "/projects/images/av1.png",
    ],
},
{
    title: "Kuntal Agro E-Commerce Platform (Admin Dashboard)",
    slug: "kloi-ecommerce",
    liveUrl: "https://kloi-one.vercel.app/",
    year: 2026,
    description: `
A full-stack e-commerce platform built with an integrated admin dashboard for managing products, orders, and store operations.

Key Features:
<ul>
  <li>🛒 Product management system (Add, Edit, Delete, List)</li>
  <li>📦 Order management dashboard (Track and update orders)</li>
  <li>👨‍💼 Admin panel for full store control</li>
  <li>🔍 Product listing with structured categories</li>
  <li>📱 Fully responsive UI for both admin and users</li>
</ul>
    `,
    role: `
Full-Stack Developer:
<ul>
  <li>Built complete frontend using React.js and Tailwind CSS</li>
  <li>Developed backend APIs for product and order management</li>
  <li>Implemented admin dashboard for CRUD operations</li>
  <li>Designed database structure for products, users, and orders</li>
  <li>Handled authentication and role-based access (admin/user)</li>
</ul>
    `,
    techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
    ],
    thumbnail: "/projects/thumbnail/kun5.png",
    longThumbnail: "/projects/images/kun1.png",
    images: [
        "/projects/images/kun2.png",
        "/projects/images/kun3.png",
        "/projects/images/kun4.png"
    ],
},{
    title: "Florawings Pre-Primary School Website",
    slug: "florawings-school-website",
    liveUrl: "https://florawing.com/",
    year: 2026,
    description: `
A modern and informative school website designed for Florawings Pre-Primary School to showcase its educational programs, values, and admission process.

Key Features:
<ul>
  <li>🎓 Programs display (Toddler, Preschool, Kindergarten, Primary)</li>
  <li>🧸 Montessori & Play-way learning focus sections</li>
  <li>📄 Admission and inquiry sections</li>
  <li>👩‍🏫 Teacher training and daycare program details</li>
  <li>📱 Fully responsive and user-friendly design</li>
</ul>
    `,
    role: `
Frontend Developer:
<ul>
  <li>Built responsive UI using React.js and Tailwind CSS</li>
  <li>Designed structured layout for school programs and content sections</li>
  <li>Implemented clean navigation and user-friendly interface</li>
  <li>Ensured mobile-first responsive design</li>
</ul>
    `,
    techStack: ["React.js", "Tailwind CSS", "Vercel"],
    thumbnail: "/projects/thumbnail/fl3.png",
    longThumbnail: "/projects/images/fl1.png",
    images: [
        "/projects/images/fl2.png",
        "/projects/images/fl1.png",
    ],
},
{
    title: "Creation Empire – Clothing E-Commerce Platform (Admin Dashboard)",
    slug: "creation-empire-ecommerce",
    liveUrl: "https://www.creationempire.in/",
    year: 2026,
    description: `
A full-stack clothing e-commerce platform with a powerful admin dashboard for managing products and store operations efficiently.

Key Features:
<ul>
  <li>🛒 Product listing for clothing items with categories</li>
  <li>👨‍💼 Admin dashboard for managing products</li>
  <li>➕ Add, update, and delete products (CRUD operations)</li>
  <li>📦 Order management system for tracking customer orders</li>
  <li>📱 Fully responsive and modern UI</li>
</ul>
    `,
    role: `
Frontend Developer:
<ul>
  <li>Built responsive UI using React.js and Tailwind CSS</li>
  <li>Developed admin dashboard for product management</li>
  <li>Implemented CRUD functionality for products</li>
  <li>Designed user-friendly shopping and admin interface</li>
  <li>Ensured mobile-first responsive experience</li>
</ul>
    `,
    techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT"
    ],
    thumbnail: "/projects/thumbnail/fa3.png",
    longThumbnail: "/projects/images/fa2.png",
    images: [
        "/projects/images/fa1.png",
        "/projects/images/fa2.png",
    ],
}
];

export const MY_EXPERIENCE = [
    {
        title: "Frontend Developer Intern",
        company: "Digital Express India",
        duration: "Nov 2025 - feb 2026",
    },
    {
        title: "Frontend /Mern Developer (Freelance)",
        company: "Self-Employed",
        duration: "Jun 2026 - Present",
    },
];
