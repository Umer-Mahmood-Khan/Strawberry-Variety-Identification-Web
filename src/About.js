// src/About.js
import React from 'react';
import './About.css';
import strawberries from './images/Strawberries.jpg';
import profile1 from './images/20230224_205623.jpg';

function About() {
    return (
        <div className="about-page">
            <div className="about-container">
                <div className="about-content">
                    <h1>About Us</h1>
                    <p>Our story starts here..</p>
                    <button className="learn-more-button">Learn More!</button>
                </div>
                <div className="about-image">
                    <img src={strawberries} alt="Strawberries" />
                </div>
            </div>
            <div className="profiles">
                <div className="profile-container">
                    <div className="profile">
                        <h2>Umer</h2>
                        <p>Experienced full-stack developer with a passion for building innovative and impactful software solutions. Proficient in a wide range of technologies, including Java, C#, C++, Python, R, JavaScript, TypeScript, and SQL.</p>
                    </div>
                    <div className="profile-image">
                        <img src={profile1} alt="Umer" />
                    </div>
                </div>
                <div className="profile-container">
                    <div className="profile-image">
                        <img src={profile1} alt="Umer" />
                    </div>
                    <div className="profile">
                        <h2>Umer</h2>
                        <p>Our story starts with passion for strawberries...</p>
                    </div>
                </div>
                <div className="profile-container">
                    <div className="profile">
                        <h2>Umer</h2>
                        <p>Our story starts with passion for strawberries...</p>
                    </div>
                    <div className="profile-image">
                        <img src={profile1} alt="Umer" />
                    </div>
                </div>
                <div className="profile-container">
                    <div className="profile-image">
                        <img src={profile1} alt="Umer" />
                    </div>
                    <div className="profile">
                        <h2>Umer</h2>
                        <p>Experienced full-stack developer with a passion for building innovative and impactful software solutions. Proficient in a wide range of technologies, including Java, C#, C++, Python, R, JavaScript, TypeScript, and SQL....</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
