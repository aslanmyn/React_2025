import React from "react";
import "./about.css";
import { FaCoffee, FaCode, FaBus, FaSmile } from "react-icons/fa";

function AboutUs() {
    return (
        <section className="about-section">
            <div className="container">
                <h2 className="title">&lt;/ ABOUT ME &gt;</h2>
                <p className="subtitle">
                    My name is Aslan Mustafaev.
                </p>


                <div className="stats-grid">
                    <div className="stat-card">
                        <FaCoffee className="icon"/>
                        <h3>10,950</h3>
                        <p>Cups of coffee</p>
                    </div>
                    <div className="stat-card">
                        <FaCode className="icon"/>
                        <h3>8,475,000</h3>
                        <p>Lines of code</p>
                    </div>
                    <div className="stat-card">
                        <FaBus className="icon"/>
                        <h3>8,214</h3>
                        <p>Buses taken</p>
                    </div>
                    <div className="stat-card">
                        <FaSmile className="icon"/>
                        <h3>3,165</h3>
                        <p>Awkward winks</p>
                    </div>
                </div>
            </div>
            <div className="contacts">
                <h2>Contacts</h2>
                <ul>
                    <li>Email: <a href="mailto:mustafaev.aslan55@gmail.com">mustafaev.aslan55@gmail.com</a></li>
                    <li>GitHub: <a href="https://github.com/aslanmyn" target="_blank"
                                   rel="noreferrer">github.com/aslanmyn</a></li>
                    <li>Telegram: <a href="https://t.me/aslan66" target="_blank" rel="noreferrer">@aslanmyn66</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default AboutUs;
