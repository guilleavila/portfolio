import {
    react,
    redux,
    typescript,
    javascript,
    gsap,
    tailwind,
    bootstrap,
    mongodb,
    express,
    nodejs,
    graphql,
    rubberduck,
    photoshop,
    illustrator,
    xd,
    indesign,
    figma,
} from "../assets"

const heroText = "Hey! I'm Guille Ávila"

const aboutText = "I am a Full Stack Developer and a UX Designer based in Madrid. I have a strong passion for creating immersive digital experiences, exploring and pushing the boundaries of what is possible."

const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "works",
        title: "Works",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "contact",
        title: "Contact",
    },
]

const technologies = {
    frontend: [
        {
            name: "React",
            icon: react,
        },
        {
            name: "Redux",
            icon: redux,
        },
        {
            name: "TypeScript",
            icon: typescript,
        },
        {
            name: "JavaScript",
            icon: javascript,
        },
        {
            name: "GSAP",
            icon: gsap,
        },
        {
            name: "Tailwind CSS",
            icon: tailwind,
        },
        {
            name: "Bootstrap",
            icon: bootstrap,
        }
    ],
    backend: [
        {
            name: "MongoDB",
            icon: mongodb,
        },
        {
            name: "Express",
            icon: express,
        },
        {
            name: "NodeJS",
            icon: nodejs,
        },
        {
            name: "GraphQL",
            icon: graphql,
        },
        {
            name: "API REST",
            icon: rubberduck,
        }
    ],
    design: [
        {
            name: "Adobe Photoshop",
            icon: photoshop,
        },
        {
            name: "Adobe Illustrator",
            icon: illustrator,
        },
        {
            name: "Adobe XD",
            icon: xd,
        },
        {
            name: "Adobe InDesign",
            icon: indesign,
        },
        {
            name: "Figma",
            icon: figma,
        }
    ]
}

const experiences = [
    {
        title: "Teacher Assistant",
        company_name: "Ironhack",
        date: "March 2022 - May 2022",
        points: [
            "Taught programming concepts and best practices",
            "Reviewed students code",
            "Helped students to develop their projects working as their Product Owner",
            "MERN Stack: Javascript (ES6), MongoDB, Express, React, Node"
        ],
    },
    {
        title: "UX Designer",
        company_name: "Qdq Media",
        date: "Oct. 2021 - Jan. 2022",
        points: [
            "UX Research",
            "UI Design, wireframing and prototyping",
            "Usabillity evaluation, A/B testing",
            "CRO - Conversion Rate Optimization"
        ],
    },
    {
        title: "Graphic & Web Designer",
        company_name: "AdGravity",
        date: "March 2021 - May 2021",
        points: [
            "Conceptualized and executed digital campaigns for 20+ companies",
            "Boosted leads and sales through new strategies"
        ],
    }
]

const projects = [
    {
        name: "REEF",
        header:
            "Immersive web experience created with 2D illustrations and parallax animations.",
        description: "Descripción del proyecto",
        tags: ["JavaScript", "GSAP", "ParticlesJS", "Webpack", "HTML 5", "CSS 3"],
        images: [],
        source_code_link: "https://github.com/guilleavila/reef",
        live_demo_link: "https://reef-immersive-experience.vercel.app/"
    },
    {
        name: "Pooeblo",
        header:
            "Winning Hackshow SPA for discovering villages and managing house subscriptions and reservations.",
        description: "Descripción del proyecto",
        tags: ["React", "Bootstrap", "MongoDB", "Express", "NodeJS", "Google Maps API", "Cloudinary", "MomentJS"],
        images: [],
        source_code_link: "https://github.com/guilleavila/pooeblo-client",
        live_demo_link: "https://pooeblo.netlify.app/"
    },
    {
        name: "Sqube Darkness",
        header:
            "Survival platform game. Jump, hide, and dodge the enemies attacks.",
        description: "Descripción del proyecto",
        tags: ["TypeScript", "Canvas", "HTML 5", "CSS 3"],
        images: [],
        source_code_link: "https://github.com/inesgarper/sqube-darkness-typescript",
        live_demo_link: "https://inesgarper.github.io/sqube-darkness-typescript/"
    },
    {
        name: "Wetaca",
        header:
            "(WIP) Full-stack project that handles weekly food delivery subscriptions.",
        description: "Descripción del proyecto",
        tags: ["TypeScript", "React", "GraphQL", "Apollo", "Node.Js", "JavaScript", "MongoDB"],
        images: [],
        source_code_link: "https://github.com/inesgarper/sqube-darkness-typescript",
        live_demo_link: ""
    }
]

export { heroText, aboutText, navLinks, technologies, experiences, projects };
