const experiences = [
    {
        startDate: "Feb 2024",
        endDate: "present",
        title: "Full-stack Software Engineer",
        organization: "Savi Finance",
        stack: ["TypeScript", "React", "MongoDB", "GraphQL", "JSON-RPC", "Redis", "Node.js", "Redux", "Jest"],
        description: "At Savi Finance, I work as a Full-Stack Software Engineer, where I led the design and rollout of a scalable, versioned transaction category system that supports user customization and real-time syncing—migrating over 200,000 legacy records without downtime. I’ve optimized the React-based frontend through caching, request prefetching, and debouncing, cutting load times by up to 2 seconds and improving responsiveness. I also tackled critical security vulnerabilities that left the system open to DDoS attacks, strengthening the platform’s reliability. Additionally, I implemented Plaid API integration to enable over 800 users to securely link their bank accounts, sync transactions, and gain financial insights."
    },
    {
        startDate: "Jan 2024",
        endDate: "Apr 2024",
        title: "Teaching Assistant",
        organization: "Introduction to Relational Database course @ UBC",
        stack: ["Javascript", "TypeScript", "Java", "MySQL"],
        description: "As a Teaching Assistant for the Intro to Relational Database course, I provide personalized guidance to students in understanding and implementing database projects. I guide students through real-world application scenarios, emphasizing the practical aspects of database management systems."
    },
    {
        startDate: "Sep 2022",
        endDate: "Apr 2023",
        title: "Junior Software Engineer (Co-op)",
        organization: "Trulioo Information Technologies",
        stack: ["C#", ".NET Core", "React", "JavaScript", "Typescript", "MySQL", "AWS", "Postman"],
        description: "As a Junior Software Engineer, I played a pivotal role in building a .NET Core web API with Hangfire for scheduling data vendor calls, analyzing responses, and storing results in a MySQL database. I collaborated with a UI designer to integrate a React front-end for user monitoring, while also creating tests using Postman, NUnit, and Moq for quality assurance. I contributed to project maintenance by migrating projects to .NET Core and maintaining dependencies, ensuring the overall reliability and performance of the applications."
    },
]

const personalProjects = [
    {
        title: "Falco",
        description: "A high-performance real-time chat application built with Go and Next.js, utilizing WebSocket and a custom binary protocol for efficient message processing and reduced network payload. Key features include client-side caching, optimistic updates, and real-time user presence detection, designed to handle high-volume messaging seamlessly.",
        stack: ["Go", "NextJS", "React", "TypeScript", "Docker", "Postgres"],
        hyperlink: "https://github.com/Nafis-Anjoom/Falco",
    },
    {
        title: "Charm Interpreter",
        description: "A dynamically typed programming language in Go, supporting first-class functions, closures, HashMaps, and Lists. Built an efficient Pratt parser for flexible expression handling and implemented a full interpreter pipeline, including lexical analysis and a tree-walker for runtime evaluation.",
        stack: ["Go"],
        hyperlink: "https://github.com/Nafis-Anjoom/Charm",
    },
    {
        title: "Pg-migrate",
        description: "a lightweight CLI tool in Go for automated PostgreSQL schema management and version control. Features include bidirectional migrations, granular versioning, targeted rollbacks, and an intuitive interface for generating and managing migration files with ease.",
        stack: ["Go"],
        hyperlink: "https://github.com/Nafis-Anjoom/pg-migrate",
    },
]

const academicProjects = [
    {
        title: "GroovyGraphs",
        description: "A web application that utilizes the d3.js library to visualize the Spotify recommendation algorithm using visualizations such as dendogram, barcharts, scatterplots, and heatmaps.",
        stack: ["TypeScript", "React", "SpotifyAPI", "D3.js"],
    },
    {
        title: "Travel Agency Admin Page",
        description: "Designed and implemented SQL database schema to store customer and staff information such as personal information, accomodations, trips, events, and tickets. Built A REST API and wrote SQL queries to extract key information about the business and communicate it to the front-end application.",
        stack: ["Javascript", "React", "MySQL"],
    }
]

function populateExperiences() {
    const experienceContainerElement = document.getElementById("professionalExperience-container");
    experiences.forEach((experience) => {
        const experienceElement = document.createElement("div");
        experienceElement.className = "card";

        const durationElement = document.createElement("div");
        durationElement.className = "duration";
        durationElement.innerText = `${experience.startDate} - ${experience.endDate}`;

        experienceElement.appendChild(durationElement);

        const experienceMainElement = document.createElement("div");
        experienceMainElement.className = "card-main";

        const jobTitleElement = document.createElement("div");
        jobTitleElement.className = "card-title";
        jobTitleElement.innerText = experience.title;

        jobTitleElement.innerHTML += `
            <svg viewBox="0 0 20 20" fill="currentColor" class="arrow-link-svg" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd">
                </path>
            </svg>
        `;

        const organizationElement = document.createElement("div");
        organizationElement.className = "organization";
        organizationElement.innerText = experience.organization;

        const jobDescriptionElement = document.createElement("div");
        jobDescriptionElement.className = "card-description";
        jobDescriptionElement.innerText = experience.description;

        const techStackElement = document.createElement("div");
        techStackElement.className = "tech-stack";

        experience.stack.forEach((tech) => {
            const techElement = document.createElement("div");
            techElement.className = "tech";
            techElement.innerText = tech;
            techStackElement.appendChild(techElement);
        });

        experienceMainElement.appendChild(jobTitleElement);
        experienceMainElement.appendChild(organizationElement);
        experienceMainElement.appendChild(jobDescriptionElement);
        experienceMainElement.appendChild(techStackElement);

        experienceElement.appendChild(experienceMainElement);

        experienceElement.addEventListener("mouseenter", () => {
            jobTitleElement.classList.add("hover");
        });

        experienceElement.addEventListener("mouseleave", () => {
            jobTitleElement.classList.remove("hover");
        });

        experienceContainerElement.appendChild(experienceElement);
    });
}

function populateProjects(projects, section) {
    const personalProjectsContainerElement = document.getElementById(`${section}-container`);
    projects.forEach((project) => {
        const projectElement = document.createElement("div");
        projectElement.className = "card";

        const projectMainElement = document.createElement("div");
        projectMainElement.className = "card-main";

        const projectTitleElement = document.createElement("div");
        projectTitleElement.className = "card-title";
        projectTitleElement.innerText = project.title;
        if (project.hyperlink) {
            projectTitleElement.addEventListener("click", () => {
                window.open(project.hyperlink, '_blank');
            });
        }

        projectTitleElement.innerHTML += `
            <svg viewBox="0 0 20 20" fill="currentColor" class="arrow-link-svg" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd">
                </path>
            </svg>
        `;

        const descriptionElement = document.createElement("div");
        descriptionElement.className = "card-description";
        descriptionElement.innerText = project.description;

        const techStackElement = document.createElement("div");
        techStackElement.className = "tech-stack";

        project.stack.forEach((tech) => {
            const techElement = document.createElement("div");
            techElement.className = "tech";
            techElement.innerText = tech;
            techStackElement.appendChild(techElement);
        });

        projectMainElement.appendChild(projectTitleElement);
        projectMainElement.appendChild(descriptionElement);
        projectMainElement.appendChild(techStackElement);

        projectElement.appendChild(projectMainElement);

        projectElement.addEventListener("mouseenter", () => {
            projectTitleElement.classList.add("hover");
        });

        projectElement.addEventListener("mouseleave", () => {
            projectTitleElement.classList.remove("hover");
        });

        personalProjectsContainerElement.appendChild(projectElement);
    });
}

populateExperiences();
populateProjects(personalProjects, "personalProjects");
populateProjects(academicProjects, "academicProjects");

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    let currentSection = "";
    if (window.location.hash == "") {
        currentSection = "aboutMe";
    } else {
        currentSection = window.location.hash.substring(1);
    }

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) == currentSection) {
            link.classList.add("active");
        }
    });

    window.addEventListener("scroll", function() {
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (this.scrollY >= sectionTop && this.scrollY <= sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) == currentSection) {
                link.classList.add("active");
            }
        });
    });
});
