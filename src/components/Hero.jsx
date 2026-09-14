import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
    const roles = ["Full Stack AI Engineer", "GenAI & LLM Engineer", "Machine Learning Engineer"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const currentFullText = roles[currentRoleIndex];

            if (isDeleting) {
                setDisplayText(prev => prev.substring(0, prev.length - 1));
                setTypingSpeed(50);
            } else {
                setDisplayText(prev => currentFullText.substring(0, prev.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && displayText === currentFullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRoleIndex, roles, typingSpeed]);

    return (
        <section id="home" className="hero-section hero-sinau-style">
            <div className="container">
                <div className="hero-row">
                    <motion.div
                        className="hero-content-sinau"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="sinau-heading">
                            Hi, I&rsquo;m <span className="hero-name">Sukanya</span>
                        </h1>
                        <p className="sinau-tagline">
                            <span className="typed-text">{displayText}</span>
                            <span className="typed-cursor">|</span>
                        </p>
                        <p className="sinau-desc">
                            I design and build end-to-end AI applications — from LLM-powered backends and RAG pipelines to intelligent, user-facing interfaces — turning Machine Learning and Generative AI into real-world products.
                        </p>
                        <div className="sinau-btns">

                            <a href="/Lambaday_Sukanya__Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline ml-3">VIEW RESUME</a>
                        </div>

                    </motion.div>

                    <motion.div
                        className="hero-image-sinau"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="sinau-img-wrapper">
                            <div className="pink-circle-bg"></div>
                            <div className="portrait-container">
                                <img src={profilePic} alt="Sukanya" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
