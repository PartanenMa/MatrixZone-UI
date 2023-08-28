import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { info } from "/src/Constants/Info.jsx";
import { motion, AnimatePresence } from "framer-motion";
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

function Header({ setIsModalOpen }) {
    const navigate = useNavigate();
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 500);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleLogoClick = () => {
        setIsModalOpen(true);
    };

    return (
        <header className="Header">
            <AnimatePresence>
                <motion.div className="HeaderTitle" initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="HeaderLogo" onClick={handleLogoClick}></div>
                    <h1>MatrixZone</h1>
                </motion.div>
                {isSmallScreen ? (
                    <div className="Menu-icon">
                        <div className="Bar"></div>
                        <div className="Bar"></div>
                        <div className="Bar"></div>
                    </div>
                ) : (
                    <motion.div className="NavOptions" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}>
                        <button className="LoginButtonFP" onClick={() => navigate(info.routes.loginPage)}>
                            Log in
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

function Main({ isModalOpen, setIsModalOpen }) {
    return (
        <div className="Main">
            <section className="HeroSection">
                <AnimatePresence>
                    {isModalOpen && (
                        <motion.div
                            className="FPModal"
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -100 }}
                        >
                            <div className="FPAboutTitle">
                                <h2>What is the MatrixZone?</h2>
                                <button className="FPTitleX-button" onClick={() => setIsModalOpen(false)}>
                                    X
                                </button>
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
                                <button className="FPBackButton" onClick={() => setIsModalOpen(false)}>
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    <motion.div class="HeroTitle" initial={{ opacity: 0, x: -1000 }} animate={{ opacity: 1, x: 0 }}>
                        <div className="HTWelcome1">
                            <h2>Hi, I'm Manu Partanen</h2>
                        </div>
                        <div className="HTWelcome2">
                            <h3 contenteditable>Welcome to the MatrixZone</h3>
                        </div>
                        <div className="HTWelcome3">
                            <p>My personal website</p>
                            <p>
                                Made with love using{" "}
                                <span>
                                    React<div className="HTRL"></div>
                                </span>
                            </p>
                        </div>
                    </motion.div>
                    <motion.div class="HeroContent" initial={{ opacity: 0, x: -1000 }} animate={{ opacity: 1, x: 0 }}>
                        <div className="HeroContent1"></div>
                        <div className="HeroContent2"></div>
                        <div className="HeroContent2"></div>
                    </motion.div>
                </AnimatePresence>
            </section>
            <section className="AboutSection"></section>
            <section className="ProjectsSection"></section>
        </div>
    );
}

function Footer() {
    return <div className="Footer"></div>;
}

export default FrontPage;
