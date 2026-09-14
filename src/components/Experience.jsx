import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
    const jobs = [
        {
            role: 'IT Intern',
            company: 'IKCON Digital IT Services Pvt Ltd, Hyderabad, India',
            period: 'Jun 2026 – Present',
            points: [
                'Automated the UMS (Unified Meeting Suite) pipeline, including data loading and multi-modal (audio/video) transcript generation, with LLM-based classification of content into action items, situation summaries, and risks — reducing manual review effort.',
                'Built and automated AI-powered QA/testing agents using LLM orchestration to auto-generate test cases, validate outputs, and flag issues, improving release reliability for enterprise applications.',
                'Project — RAG Cortex: built an end-to-end RAG system for enterprise document Q&A with semantic chunking, embedding generation using Ollama, and pgvector-based vector similarity search to reduce LLM hallucinations.'
            ]
        },
        {
            role: 'Artificial Intelligence Intern',
            company: 'Placemantra',
            period: 'Jan 2025 – Mar 2025',
            points: [
                'Developed machine learning and NLP pipelines involving preprocessing, feature engineering, model training, and evaluation.',
                'Built customer segmentation models using K-Means clustering and spam news classification systems achieving 95.8% accuracy.',
                'Developed end-to-end workflows for data preprocessing, model evaluation, and result visualization.'
            ]
        }
    ];

    return (
        <section id="experience" className="experience-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2>Experience</h2>
                    <p>Professional internships and hands-on industry experience.</p>
                </div>

                <div className="experience-grid">
                    {jobs.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="experience-card"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            <div className="experience-icon">
                                <Briefcase size={36} className="text-pink" />
                            </div>
                            <div className="experience-body">
                                <h3>{item.role}</h3>
                                <p className="exp-company">{item.company}</p>
                                <span className="exp-period">{item.period}</span>
                                <ul className="exp-points">
                                    {item.points.map((point, pIdx) => (
                                        <li key={pIdx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
