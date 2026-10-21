import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
    const jobs = [
        {
            role: 'IT Intern',
            company: 'IKCON Digital IT Services Pvt Ltd',
            location: 'Hyderabad, India',
            period: 'Jun 2026 – Sep 2026',
            badge: 'Latest',
            points: [
                'Automated the UMS (Unified Meeting Suite) pipeline, including data loading and multi-modal (audio/video) transcript generation, with LLM-based classification of content into action items, situation summaries, and risks — reducing manual review effort.',
                'Built and automated AI-powered QA/testing agents using LLM orchestration to auto-generate test cases, validate outputs, and flag issues, improving release reliability for enterprise applications.',
                'Project — RAG Cortex: built an end-to-end RAG system for enterprise document Q&A with semantic chunking, embedding generation using Ollama, and pgvector-based vector similarity search to reduce LLM hallucinations.'
            ],
            technologies: ['LLMs', 'RAG', 'Ollama', 'pgvector', 'Agent Orchestration', 'Multi-modal']
        },
        {
            role: 'Artificial Intelligence Intern',
            company: 'Placemantra',
            location: 'Remote / India',
            period: 'Jan 2025 – Mar 2025',
            badge: null,
            points: [
                'Developed machine learning and NLP pipelines involving preprocessing, feature engineering, model training, and evaluation.',
                'Built customer segmentation models using K-Means clustering and spam news classification systems achieving 95.8% accuracy.',
                'Developed end-to-end workflows for data preprocessing, model evaluation, and result visualization.'
            ],
            technologies: ['Machine Learning', 'NLP', 'K-Means', 'Python', 'Scikit-Learn']
        }
    ];

    return (
        <section id="experience" className="experience-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2>Experience</h2>
                    <p>Professional milestones, industry internships, and production-grade engineering experience.</p>
                </div>

                <div className="experience-timeline">
                    <div className="timeline-central-spine"></div>

                    {jobs.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={`timeline-item ${idx % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                        >
                            {/* Central timeline node marker */}
                            <div className="timeline-marker">
                                <div className="timeline-node">
                                    <Briefcase size={20} className="timeline-node-icon" />
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="timeline-card">
                                <div className="timeline-card-header">
                                    <div>
                                        <div className="timeline-role-row">
                                            <h3 className="timeline-role">{item.role}</h3>
                                            {item.badge && <span className="timeline-status-badge">{item.badge}</span>}
                                        </div>
                                        <h4 className="timeline-company">{item.company}</h4>
                                        <span className="timeline-location">{item.location}</span>
                                    </div>
                                    <div className="timeline-period-badge">
                                        <span>{item.period}</span>
                                    </div>
                                </div>

                                <ul className="timeline-points">
                                    {item.points.map((point, pIdx) => (
                                        <li key={pIdx}>{point}</li>
                                    ))}
                                </ul>

                                {item.technologies && (
                                    <div className="timeline-tech-stack">
                                        {item.technologies.map((tech, tIdx) => (
                                            <span key={tIdx} className="timeline-tech-pill">{tech}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
