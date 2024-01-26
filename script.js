const experiences = [
    {
        startDate: "Apr 2022",
        endDate: "May 2022",
        title: "Software Engineer",
        organization: "Trulioo Information Technologies",
        stack: ["Javascript", "React", ".NET Core", "Typescript"],
        description: "In my time as a Junior Software Engineer at Trulioo, I designed, implemented, and maintained key schemas for several applications. But when I took CPSC 304 in the 2022W term with Rachel Pottinger, I learned foundational theories and concepts such as relational algebra, normalization, functional dependencies, data mining, etc. I found these concepts very helpful in my recent projects."
    },
    {
        startDate: "Apr 2022",
        endDate: "May 2022",
        title: "Software Engineer",
        organization: "Trulioo Information Technologies",
        stack: ["Javascript", "React", ".NET Core", "Typescript"],
        description: "In my time as a Junior Software Engineer at Trulioo, I designed, implemented, and maintained key schemas for several applications. But when I took CPSC 304 in the 2022W term with Rachel Pottinger, I learned foundational theories and concepts such as relational algebra, normalization, functional dependencies, data mining, etc. I found these concepts very helpful in my recent projects."
    },
    {
        startDate: "Apr 2022",
        endDate: "May 2022",
        title: "Software Engineer",
        organization: "Trulioo Information Technologies",
        stack: ["Javascript", "React", ".NET Core", "Typescript"],
        description: "In my time as a Junior Software Engineer at Trulioo, I designed, implemented, and maintained key schemas for several applications. But when I took CPSC 304 in the 2022W term with Rachel Pottinger, I learned foundational theories and concepts such as relational algebra, normalization, functional dependencies, data mining, etc. I found these concepts very helpful in my recent projects."
    }
]

const personalProjects = [
    {
        title: "WaveForm",
        description: "In my time as a Junior Software Engineer at Trulioo, I designed, implemented, and maintained key schemas for several applications. But when I took CPSC 304 in the 2022W term with Rachel Pottinger, I learned foundational theories and concepts such as relational algebra, normalization, functional dependencies, data mining, etc. I found these concepts very helpful in my recent projects.",
        stack: ["Javascript", "React", ".NET Core", "Typescript"],
        thumbnail: "thumbnail.png"
    },
    {
        title: "WaveForm",
        description: "In my time as a Junior Software Engineer at Trulioo, I designed, implemented, and maintained key schemas for several applications. But when I took CPSC 304 in the 2022W term with Rachel Pottinger, I learned foundational theories and concepts such as relational algebra, normalization, functional dependencies, data mining, etc. I found these concepts very helpful in my recent projects.",
        stack: ["Javascript", "React", ".NET Core", "Typescript"],
        thumbnail: "thumbnail.png"
    },
    {
        title: "WaveForm",
        description: "In my time as a Junior Software Engineer at Trulioo, I designed, implemented, and maintained key schemas for several applications. But when I took CPSC 304 in the 2022W term with Rachel Pottinger, I learned foundational theories and concepts such as relational algebra, normalization, functional dependencies, data mining, etc. I found these concepts very helpful in my recent projects.",
        stack: ["Javascript", "React", ".NET Core", "Typescript"],
        thumbnail: "thumbnail.png"
    },
    {
        title: "WaveForm",
        description: "In my time as a Junior Software Engineer at Trulioo, I designed, implemented, and maintained key schemas for several applications. But when I took CPSC 304 in the 2022W term with Rachel Pottinger, I learned foundational theories and concepts such as relational algebra, normalization, functional dependencies, data mining, etc. I found these concepts very helpful in my recent projects.",
        stack: ["Javascript", "React", ".NET Core", "Typescript"],
        thumbnail: "thumbnail.png"
    }
]

const academicProjects = [
    {
        title: "WaveForm",
        description: "In my time as a Junior Software Engineer at Trulioo, I designed, implemented, and maintained key schemas for several applications. But when I took CPSC 304 in the 2022W term with Rachel Pottinger, I learned foundational theories and concepts such as relational algebra, normalization, functional dependencies, data mining, etc. I found these concepts very helpful in my recent projects.",
        stack: ["Javascript", "React", ".NET Core", "Typescript"],
        thumbnail: "thumbnail.png"
    },
    {
        title: "WaveForm",
        description: "In my time as a Junior Software Engineer at Trulioo, I designed, implemented, and maintained key schemas for several applications. But when I took CPSC 304 in the 2022W term with Rachel Pottinger, I learned foundational theories and concepts such as relational algebra, normalization, functional dependencies, data mining, etc. I found these concepts very helpful in my recent projects.",
        stack: ["Javascript", "React", ".NET Core", "Typescript"],
        thumbnail: "thumbnail.png"
    },
    {
        title: "WaveForm",
        description: "In my time as a Junior Software Engineer at Trulioo, I designed, implemented, and maintained key schemas for several applications. But when I took CPSC 304 in the 2022W term with Rachel Pottinger, I learned foundational theories and concepts such as relational algebra, normalization, functional dependencies, data mining, etc. I found these concepts very helpful in my recent projects.",
        stack: ["Javascript", "React", ".NET Core", "Typescript"],
        thumbnail: "thumbnail.png"
    },
    {
        title: "WaveForm",
        description: "In my time as a Junior Software Engineer at Trulioo, I designed, implemented, and maintained key schemas for several applications. But when I took CPSC 304 in the 2022W term with Rachel Pottinger, I learned foundational theories and concepts such as relational algebra, normalization, functional dependencies, data mining, etc. I found these concepts very helpful in my recent projects.",
        stack: ["Javascript", "React", ".NET Core", "Typescript"],
        thumbnail: "thumbnail.png"
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

        const thumbnailContainerElement = document.createElement("div");
        thumbnailContainerElement.className = "thumbnail";

        const thumbnailImg = document.createElement("img");
        thumbnailImg.className = "thumbnail-img";
        thumbnailImg.src = project.thumbnail;
        thumbnailImg.loading = "lazy";
        thumbnailContainerElement.appendChild(thumbnailImg);

        projectElement.appendChild(thumbnailContainerElement);

        const projectMainElement = document.createElement("div");
        projectMainElement.className = "card-main";

        const projectTitleElement = document.createElement("div");
        projectTitleElement.className = "card-title";
        projectTitleElement.innerText = project.title;

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
populateProjects(personalProjects, "academicProjects");

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    console.log(window.location.hash);

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
