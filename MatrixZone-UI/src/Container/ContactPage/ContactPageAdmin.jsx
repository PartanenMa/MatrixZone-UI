import { useState, useEffect } from "react";
import { notification } from "antd";
import HeaderAdmin from "/src/Components/Header/HeaderAdmin.jsx";
import NavAdmin from "/src/Components/Nav/NavAdmin.jsx";
import FooterAdmin from "/src/Components/Footer/FooterAdmin.jsx";
import LoginFirstScreen from "/src/Components/LoginFirstScreen/LoginFirstScreen.jsx";
import LoadingScreen from "/src/Components/LoadingScreen/LoadingScreen.jsx";
import { info } from "/src/Constants/Info.jsx";
import "./ContactPage.css";

function ContactPageAdmin() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const load = sessionStorage.getItem("load");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isLoggedIn === "true") {
            //Simulate loading for 1 second:
            const timer = setTimeout(() => {
                setLoading(false);
                if (load === "true") {
                    sessionStorage.setItem("load", "false");
                    notification.success({
                        message: "LOGGED IN!",
                        description: "Welcome back Admin.",
                        placement: "bottomLeft",
                        style: {
                            backgroundColor: "lightgreen",
                            border: "3px solid green",
                        },
                    });
                }
            }, 1000);

            //Clean up the timer to prevent memory leaks:
            return () => clearTimeout(timer);
        }
    }, [isLoggedIn, load]);

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
                        <div className="ContactPageContainer">
                            <div className="Breadcrumb">
                                <h2>Admin / contact</h2>
                            </div>
                            <ContactPageTitle />
                            <ContactPageContent />
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

function ContactPageTitle() {
    return (
        <div className="ContactPageTitleContainer">
            <h2>MY CONTACT</h2>
        </div>
    );
}

function ContactPageContent() {
    return <div className="ContactPageContentContainer"></div>;
}

export default ContactPageAdmin;
