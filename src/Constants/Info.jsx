import { data } from "./Data.jsx";

export const info = {
    version: "Release 1.0.8",
    routes: {
        frontPage: "/MatrixZone-UI/",
        loginPage: "/MatrixZone-UI/login",
        homePage: "/MatrixZone-UI/home",
        homePageAdmin: "/MatrixZone-UI/admin/home",
        profilePage: "/MatrixZone-UI/profile",
        profilePageAdmin: "/MatrixZone-UI/admin/profile",
        projectsPage: "/MatrixZone-UI/projects",
        projectsPageAdmin: "/MatrixZone-UI/admin/projects",
        videosPage: "/MatrixZone-UI/videos",
        videosPageAdmin: "/MatrixZone-UI/admin/videos",
        goalsPage: "/MatrixZone-UI/goals",
        goalsPageAdmin: "/MatrixZone-UI/admin/goals",
        cvPage: "/MatrixZone-UI/cv",
        cvPageAdmin: "/MatrixZone-UI/admin/cv",
    },
    fpModalText: {
        introduction:
            "Welcome to the MatrixZone, my personal website, and your gateway to discovering the world of software development through my unique perspective. Whether you're a potential client, collaborator, or simply curious about the possibilities of programming, MatrixZone is your one-stop destination to discover the power of my expertise.",
        profile:
            "As someone who deeply values innovation in software development, I welcome you to take a glimpse at my profile to see the skills and experiences I've acquired over time. I've had the opportunity to work on various software solutions, and to improve my programming skills doing so.",
        projects:
            "MatrixZone is not just a showcase of my skills; it's a testament to my dedication and commitment to excellence. Through a carefully curated collection of projects, you'll gain insight into my problem-solving abilities, attention to detail, and ability to tackle complex challenges head-on.",
        //videos: "But that's not all. MatrixZone also offers a glimpse into my journey as a software developer through captivating videos. From behind-the-scenes looks at my projects to thought-provoking discussions on industry trends, these videos provide a window into my world and the passion that drives me.",
    },
    loginInfo: {
        enabled: false,
        adminUserName: "Admin",
        adminPassword: "ManuAdminReact123",
    },
    LinkedIn: {
        //Account data:
        user: "Manu Partanen",
        name: "Manu Partanen",
        phoneNumber: "0440602810",
        emailAddress: "manu111.partanen@gmail.com",
        link: "https://www.linkedin.com/in/manu-partanen-7864b4265/",
        //Profile description:
        description1: "Hello, I'm Manu Partanen, a passionate software developer specializing in web development.",
        description2:
            "With a strong foundation in HTML, CSS, and JavaScript, I enjoy creating dynamic and responsive websites using modern front-end technologies like React and Sass. On the back-end, I have experience working with Go, as well as Node.js (with Express.js). Besides my job, I love working on my own projects during my free time using the skills that I've gained, and enjoy learning new tools and technologies while doing so.",
        description3:
            "In addition to my technical skills, I am a strong collaborator and enjoy working in agile development environments. I believe in continuous learning and staying up-to-date with the latest tech and best practices.",
        //Skills titles:
        skillsTitle1: "Scripting",
        skillsTitle2: "Utility software",
        skillsTitle3: "Programming languages",
        skillsTitle4: "Front-end development",
        skillsTitle5: "Back-end development",
        skillsTitle6: "Full-stack development",
        //Profession:
        profession: data.professionStatus.profession,
        professionDetailed: data.professionStatus.professionDetailed,
        professionTech: data.professionStatus.professionTech,
        professionTechStack: data.professionStatus.professionTechStack,
        professionAdditionalTech: data.professionStatus.professionAdditionalTech,
        //Job:
        jobTitle: data.jobStatus.jobTitle,
        company: data.jobStatus.company,
        companyInfoLink: data.jobStatus.companyInfoLink,
        jobTechStack: data.jobStatus.jobTechStack,
        jobAdditionalTech: data.jobStatus.jobAdditionalTech,
        companyColor: data.jobStatus.companyColor,
        companyLogo: data.jobStatus.companyLogo,
        companyLogoH: data.jobStatus.companyLogoH,
        companyLogoW: data.jobStatus.companyLogoW,
    },
    GitHub: {
        //Account data:
        user: "PartanenMa",
        link: "https://github.com/PartanenMa",
        //Profile description:
        description1: "Hello, I'm Manu Partanen, a passionate software developer specializing in web development. Feel free to explore my projects.",
        description2: "",
        description3: "",
    },
    YouTube: {
        //Account data:
        user: "Manunaama",
        link: "https://www.youtube.com/channel/UCsEePl0jBNlnqYYnyjdQW5g",
        //Profile description:
        description1: "NOT YET AVAILABLE",
        description2: "",
        description3: "",
    },
    CV: {
        isDisabled: true,
    },
};
