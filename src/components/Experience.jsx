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
                'Built and integrated RAG pipelines for enterprise knowledge retrieval, including document ingestion, chunking, embeddings, semantic search, and LLM-based contextual responses.',
                'Developed audio transcription analysis workflows to process meeting recordings and extract actionable insights such as action items, tasks, risks, and follow-ups from transcripts.',
                'Worked on AI-powered QA/testing agents and automation, leveraging LLMs and agentic workflows to support test-case generation, validation, issue identification, and real-time enterprise application testing.'
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
