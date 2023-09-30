import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { info } from "/src/Constants/Info.jsx";
import { motion, AnimatePresence } from "framer-motion";
import Header from "/src/Components/Header/Header.jsx";
import Footer from "/src/Components/Footer/Footer.jsx";
import "./FrontPage.css";

function FrontPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="FP">
            <Header setIsModalOpen={setIsModalOpen} />
            <div className="FrontPageContainer">
                <Main isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            </div>
            <Footer />
        </div>
    );
}

function Main({ isModalOpen, setIsModalOpen }) {
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isModalOpen) {
            setTimeout(() => {
                setShouldAnimate(true);
            }, 500);
            setShouldAnimate(false);
        }
    }, [isModalOpen]);

    const handleNavigation = (page) => {
        if (page === "profile") {
            navigate(info.routes.profilePage);
        } else if (page === "projects") {
            navigate(info.routes.projectsPage);
        } else if (page === "videos") {
            navigate(info.routes.videosPage);
        }
    };

    return (
        <main className="Main">
            <section className="HeroSection">
                {isModalOpen ? (
                    <AnimatePresence>
                        <motion.div
                            className="FPModal"
                            key="modal"
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                        >
                            <div className="FPAboutTitle">
                                <h2>What is the MatrixZone?</h2>
                                <motion.button
                                    className="FPTitleX-button"
                                    onClick={() => setIsModalOpen(false)}
                                    key="fptitlex-button"
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.1 },
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    X
                                </motion.button>
                            </div>
                            <div className="FPAbout">
                                <p>
                                    Welcome to the MatrixZone! Here, I invite you to delve into my
                                    <br />
                                    world of passion and creativity. As an enthusiast in the realm of software
                                    development, this platform serves as a window into my
                                    <br />
                                    programming journey.
                                    <br />
                                    <br />
                                    Explore my profile to discover the mind behind the projects that
                                    <br />
                                    blend imagination with ingenuity, and immerse yourself in my
                                    <br />
                                    diverse project portfolio, where innovation meets determination.
                                    <br />
                                    <br />
                                    From coding marvels to ingenious experiments, MatrixZone is a
                                    <br />
                                    testament to my journey of growth and exploration as a fellow
                                    <br />
                                    software developer.
                                </p>
                            </div>
                            <div className="FPBack">
                                <motion.button
                                    className="FPBackButton"
                                    onClick={() => setIsModalOpen(false)}
                                    key="fpbackbutton"
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.1 },
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Close
                                </motion.button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                ) : (
                    shouldAnimate && (
                        <AnimatePresence>
                            <motion.div
                                className="HeroTitle"
                                key="heroT"
                                initial={{ opacity: 0, x: -1000 }}
                                animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
                                exit={{ opacity: 0, x: 1000 }}
                            >
                                <div className="HTWelcome1">
                                    <h3 className="HTW1text">
                                        Hi, 👋 I'm <span style={{ color: "green" }}>{info.LinkedIn.name}</span>
                                    </h3>
                                </div>
                                <div className="HTWelcome2">
                                    <p>I'm a</p>
                                    <div className="HTW2animation">
                                        <div className="HTW2first">
                                            <div>{info.LinkedIn.profession}</div>
                                        </div>
                                        <div className="HTW2second">
                                            <div>Software Developer</div>
                                        </div>
                                        <div className="HTW2third">
                                            <div>IT Engineer</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="HTWelcome3">
                                    <h3>Welcome to the MatrixZone</h3>
                                </div>
                            </motion.div>
                            <motion.div
                                className="HeroContent"
                                key="heroC"
                                initial={{ opacity: 0, x: 1000 }}
                                animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
                                exit={{ opacity: 0, x: -1000 }}
                            >
                                <motion.div
                                    className="HeroContent1"
                                    onClick={() => handleNavigation("profile")}
                                    key="heroC1"
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.1 },
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <h2 className="HC-1T">PROFILE</h2>
                                    <div className="HC1-1">
                                        <div className="TitleProfile">
                                            <h3>View my profile</h3>
                                            <div className="LogoProfile" />
                                        </div>
                                        <div className="ContentProfile">
                                            <p>- About me.</p>
                                            <p>- My educational background.</p>
                                            <p>- My programming skills.</p>
                                            <p>
                                                - My experience as a <br />
                                                software developer.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="HC1-2" />
                                </motion.div>
                                <motion.div
                                    className="HeroContent2"
                                    onClick={() => handleNavigation("projects")}
                                    key="heroC2"
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.1 },
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <h2 className="HC-2T">PROJECTS</h2>
                                    <div className="HC2-1">
                                        <div className="TitleProjects">
                                            <h3>View my projects</h3>
                                            <div className="LogoProjects" />
                                        </div>
                                        <div className="ContentProjects">
                                            <p>NOT YET AVAILABLE</p>
                                        </div>
                                    </div>
                                    <div className="HC2-2" />
                                </motion.div>
                                <motion.div
                                    className="HeroContent3"
                                    onClick={() => handleNavigation("videos")}
                                    key="heroC3"
                                    whileHover={{
                                        scale: 1.1,
                                        transition: { duration: 0.1 },
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <h2 className="HC-3T">VIDEOS</h2>
                                    <div className="HC3-1">
                                        <div className="TitleVideos">
                                            <h3>View my videos</h3>
                                            <div className="LogoVideos" />
                                        </div>
                                        <div className="ContentVideos">
                                            <p>NOT YET AVAILABLE</p>
                                        </div>
                                    </div>
                                    <div className="HC3-2" />
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    )
                )}
            </section>
        </main>
    );
}

export default FrontPage;