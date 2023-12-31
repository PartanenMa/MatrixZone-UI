import { useState, useEffect } from "react";
import Notification from "/src/Components/Notification/Notification.jsx";
import LoginFirstScreen from "/src/Components/LoginFirstScreen/LoginFirstScreen.jsx";
import LoadingScreen from "/src/Components/LoadingScreen/LoadingScreen.jsx";
import HeaderAdmin from "/src/Components/Header/HeaderAdmin.jsx";
import NavAdmin from "/src/Components/Nav/NavAdmin.jsx";
import FooterAdmin from "/src/Components/Footer/FooterAdmin.jsx";
import { info } from "/src/Constants/Info.jsx";
import { data } from "/src/Constants/Data.jsx";
import { motion, AnimatePresence } from "framer-motion";
import "./ProjectsPage.scss";

function ProjectsPageAdmin() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const load = sessionStorage.getItem("load");
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [notificationContent, setNotificationContent] = useState({
        title: "",
        description: "",
        type: "",
    });

    useEffect(() => {
        setProjects(data.projectsData);
    }, []);

    useEffect(() => {
        if (isLoggedIn === "true") {
            //Simulate loading for 1 second:
            const timer = setTimeout(() => {
                setLoading(false);
                if (load === "true") {
                    sessionStorage.setItem("load", "false");
                    triggerNotification("LOGGED IN AS ADMIN", "Welcome back!", "success");
                }
            }, 1000);

            //Clean up the timer to prevent memory leaks:
            return () => clearTimeout(timer);
        }
    }, [isLoggedIn, load]);

    const triggerNotification = (title, description, type) => {
        setNotificationContent({ title, description, type });
        setIsNotificationOpen(true);

        // Close the notification after 5 seconds
        setTimeout(() => {
            setIsNotificationOpen(false);
        }, 5000);
    };

    if (isLoggedIn === "true") {
        return (
            <div>
                {loading && load === "true" ? (
                    //Loading component here:
                    <LoadingScreen />
                ) : (
                    <div>
                        <HeaderAdmin />
                        <NavAdmin />
                        <div className="projectsPageContainerAdmin">
                            <div className="breadcrumb">
                                <h2>Admin / projects</h2>
                            </div>
                            <ProjectsPageTitle />
                            <AboutMyProjects />
                            <Projects projects={projects} />
                            <Notification
                                isNotificationOpen={isNotificationOpen}
                                setIsNotificationOpen={setIsNotificationOpen}
                                title={notificationContent.title}
                                description={notificationContent.description}
                                type={notificationContent.type}
                            />
                        </div>
                        <FooterAdmin />
                    </div>
                )}
            </div>
        );
    } else {
        return <LoginFirstScreen />;
    }
}

function ProjectsPageTitle() {
    return (
        <div className="projectsPageTitleContainer">
            <h2>MY PROJECTS</h2>
        </div>
    );
}

function AboutMyProjects() {
    return (
        <div className="aboutMyProjectsContainer">
            <div className="aboutMyProjectsTitle">
                <h3>ABOUT MY PROJECTS</h3>
            </div>
            <div className="aboutMyProjectsContent">
                <AnimatePresence>
                    <motion.a
                        className="aboutMyProjectsPhoto"
                        title="My GitHub"
                        href={info.GitHub.link}
                        target="_blank"
                        key="aboutmyprojectsphotoA"
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.1 },
                        }}
                        whileTap={{ scale: 0.9 }}
                    />
                </AnimatePresence>
                <div className="aboutMyProjectsTextContainer">
                    <div className="aboutMyProjectsTextTitle">
                        <h4 className="h4_1">{info.GitHub.user}</h4>
                        <h4 className="h4_2">{info.LinkedIn.name}</h4>
                    </div>
                    <div className="aboutMyProjectsText">
                        <p>
                            {info.GitHub.description1}
                            <br />
                            <br />
                            {info.GitHub.description2}
                            <br />
                            <br />
                            {info.GitHub.description3}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Projects({ projects }) {
    return (
        <div className="projectsContainer">
            <div className="projectsTitle">
                <h3>PROJECTS</h3>
            </div>
            <div className="projectsContent">
                {projects.length > 0 ? (
                    projects[0].title !== 0 ? (
                        projects.map((project, index) =>
                            projects.map((project, index) => (
                                <AnimatePresence>
                                    <motion.a
                                        className="project"
                                        href={project.link}
                                        target="_blank"
                                        key={index}
                                        whileHover={{
                                            scale: 1.03,
                                            transition: { duration: 0.1 },
                                        }}
                                        whileTap={{ scale: 0.99 }}
                                    >
                                        <div className="projectTitle">
                                            <h4>{project.title}</h4>
                                        </div>
                                        <div className="projectContent">
                                            <div className="projectContentDescription">
                                                <div className="pCDBox1">
                                                    <p>
                                                        Project type: <span style={{ color: "white", fontSize: "15px" }}>{project.type}</span>
                                                    </p>
                                                </div>
                                                <div className="pCDBox2">
                                                    <div className="pCDBox2Title">
                                                        <p>Project description:</p>
                                                    </div>
                                                    <div className="pCDBox2Content">
                                                        <p>{project.description}</p>
                                                    </div>
                                                </div>
                                                <div className="pCDBox3">
                                                    <p>
                                                        Technologies used: <span style={{ color: "white", fontSize: "15px" }}>{project.tech}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="projectContentPhoto" style={{ backgroundImage: `url(${project.image})` }} />
                                        </div>
                                    </motion.a>
                                </AnimatePresence>
                            ))
                        )
                    ) : (
                        <div className="noProjectsYet">
                            <h4>NO PROJECTS YET!</h4>
                        </div>
                    )
                ) : (
                    <div className="noProjectsData">
                        <h4>NO DATA!</h4>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProjectsPageAdmin;
