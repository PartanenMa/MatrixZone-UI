import { useNavigate } from "react-router-dom";
import { info } from "/src/Constants/Info.jsx";
import "./WebDevPage.css";

function WebDevPageGuest() {
    const navigate = useNavigate();

    return (
        <div className="WebDevPageContent">
            <div className="WebDevContainer">
                <div className="WebDevTitle">
                    <h2>Web development</h2>
                </div>
                <div className="WebDev">
                    <p>
                        vgsfbhndhfm...
                    </p>
                </div>
                <div className="Back">
                    <button className="BackButton" onClick={() => navigate(info.routes.profilePageGuest)}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default WebDevPageGuest;