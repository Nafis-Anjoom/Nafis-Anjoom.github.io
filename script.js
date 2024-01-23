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

function populateExperiences() {
    const experienceContainerElement = document.getElementById("experience-container");
    experiences.forEach((experience) => {
        const experienceElement = document.createElement("div");
        experienceElement.className = "experience";

        const acrylicElement = document.createElement("div");
        acrylicElement.className = "acrylic";

        experienceElement.addEventListener("mouseenter", () => {
            acrylicElement.classList.add("show");
            experienceElement.style.cursor = "pointer";
        });

        experienceElement.addEventListener("mouseleave", () => {
            acrylicElement.classList.remove("show");
        });

        experienceElement.appendChild(acrylicElement);

        const durationElement = document.createElement("div");
        durationElement.className = "duration";
        durationElement.innerText = `${experience.startDate} - ${experience.endDate}`;

        experienceElement.appendChild(durationElement);

        const experienceMainElement = document.createElement("div");
        experienceMainElement.className = "experience-main";

        const jobTitleElement = document.createElement("div");
        jobTitleElement.className = "job-title";
        jobTitleElement.innerText = experience.title;

        const organizationElement = document.createElement("div");
        organizationElement.className = "organization";
        organizationElement.innerText = experience.organization;

        const jobDescriptionElement = document.createElement("div");
        jobDescriptionElement.className = "job-description";
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

        experienceContainerElement.appendChild(experienceElement);
    });
}

function populatePersonalProjects() {
    const personalProjectsContainerElement = document.getElementById("personalProjects-container");
    personalProjects.forEach((project) => {
        const projectElement = document.createElement("div");
        projectElement.className = "project";

        const acrylicElement = document.createElement("div");
        acrylicElement.className = "acrylic";

        projectElement.addEventListener("mouseenter", () => {
            acrylicElement.classList.add("show");
            projectElement.style.cursor = "pointer";
        });

        projectElement.addEventListener("mouseleave", () => {
            acrylicElement.classList.remove("show");
        });

        projectElement.appendChild(acrylicElement);

        const thumbnailContainerElement = document.createElement("div");
        thumbnailContainerElement.className = "thumbnail";

        const thumbnailImg = document.createElement("img");
        thumbnailImg.className = "thumbnail-img";
        thumbnailImg.src = project.thumbnail;
        thumbnailContainerElement.appendChild(thumbnailImg);

        projectElement.appendChild(thumbnailContainerElement);

        const projectMainElement = document.createElement("div");
        projectMainElement.className = "project-main";

        const projectTitleElement = document.createElement("div");
        projectTitleElement.className = "project-title";
        projectTitleElement.innerText = project.title;

        const descriptionElement = document.createElement("div");
        descriptionElement.className = "project-description";
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

        personalProjectsContainerElement.appendChild(projectElement);
    });
}

populateExperiences();
populatePersonalProjects();
