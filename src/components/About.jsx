import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile1.jpg';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section section-padding">
            <div className="container">
                <div className="about-row">
                    <motion.div
                        className="about-image"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="about-frame-wrapper">
                            <div className="about-pink-splash"></div>
                            <div className="about-main-img">
                                <img src={profilePic} alt="Sukanya" />
                                <div className="about-exp-badge">
                                    <span className="about-exp-num">AI/ML</span>
                                    <span className="about-exp-text">Engineer</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="about-title-line"></div>
                        <h2 className="about-title">Introduction About Me</h2>
                        <div className="about-story">
                            <p>
                                I began my journey in technology with a curiosity about how data, logic, and
                                software could be transformed into solutions for real-world problems. As I
                                explored Python, programming, databases, and data analysis, that curiosity
                                gradually grew into a deeper interest in Artificial Intelligence and Machine
                                Learning. I started understanding how data can reveal patterns, support
                                decisions, and enable systems to learn from experience.
                            </p>
                            <p>
                                From building my foundations in Data Science and Machine Learning, I gradually
                                expanded my focus toward Deep Learning, Natural Language Processing, and
                                Generative AI. My journey then led me into the world of Large Language Models,
                                RAG architectures, and intelligent AI agents, where software can move beyond
                                prediction to reasoning and action.
                            </p>
                            <p>
                                Along the way, I have worked on projects that challenged me to turn concepts
                                and ideas into practical, data-driven solutions. Every project, experiment, and
                                challenge has strengthened not only my technical skills, but also my ability to
                                think critically, solve problems, and continuously learn.
                            </p>
                            <p>
                                Today, I am focused on building intelligent, scalable systems at the intersection
                                of Data Science, AI/ML, Generative AI, and Software Engineering. I&rsquo;m
                                constantly exploring emerging technologies and looking for ways to transform
                                complex problems into solutions that are useful, reliable, and impactful.
                            </p>
                            <p className="about-story-highlight">
                                My journey is still being written &mdash; and my goal is to keep learning,
                                building, and engineering intelligence that creates meaningful impact.
                            </p>
                        </div>
                        <div className="about-btns-row">

                            <a href="/Lambaday_Sukanya__Resume.pdf" download="Lambaday_Sukanya_Resume.pdf" className="btn-outline ml-3">DOWNLOAD CV</a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
