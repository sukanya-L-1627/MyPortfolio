import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
    const schools = [
        {
            school: 'Ellenki College of Engineering and Technology',
            details: 'Affiliated to JNTUH — B.Tech in Electronics and Communication Engineering',
            period: 'Nov 2022 – May 2026',
            grade: 'CGPA: 8.62/10'
        }
    ];

    return (
        <section id="education" className="education-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2>Education</h2>
                    <p>Academic background and qualifications.</p>
                </div>

                <div className="education-grid">
                    {schools.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="education-card"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            <div className="education-icon">
                                <GraduationCap size={36} className="text-pink" />
                            </div>
                            <div className="education-body">
                                <h3>{item.school}</h3>
                                <p className="edu-details">{item.details}</p>
                                <div className="edu-meta">
                                    <span>{item.period}</span>
                                    <span className="edu-grade">{item.grade}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
