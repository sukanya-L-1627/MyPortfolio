import React from 'react';
import { Brain, Cpu, MessageSquare, Database, Bot, Workflow, Search, BarChart3 } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Generative AI Solutions",
            desc: "Designing and deploying custom LLM-based solutions, fine-tuning models, and prompt engineering.",
            icon: <Brain size={32} className="text-pink" />
        },
        {
            title: "LLM & RAG Pipelines",
            desc: "Building advanced Retrieval-Augmented Generation (RAG) systems for knowledge retrieval and intelligent chat.",
            icon: <MessageSquare size={32} className="text-pink" />
        },
        {
            title: "Machine Learning Modeling",
            desc: "Developing predictive models, classification systems, and regression analysis using Scikit-Learn and XGBoost.",
            icon: <Cpu size={32} className="text-pink" />
        },
        {
            title: "NLP & Text Analytics",
            desc: "Implementing sentiment analysis, intent detection, and entity recognition systems for unstructured data.",
            icon: <Bot size={32} className="text-pink" />
        },
        {
            title: "AI Agent Development",
            desc: "Creating autonomous agents using LangChain and AutoGPT for automated reasoning and execution.",
            icon: <Database size={32} className="text-pink" />
        },
        {
            title: "Gen AI Agents & Automation",
            desc: "Building multi-agent systems with CrewAI and LangGraph for orchestrated, autonomous task execution.",
            icon: <Workflow size={32} className="text-pink" />
        },
        {
            title: "Semantic Search & RAG",
            desc: "Implementing vector search with FAISS and ChromaDB for context-aware, retrieval-driven AI responses.",
            icon: <Search size={32} className="text-pink" />
        },
        {
            title: "Power BI",
            desc: "Data visualization and business intelligence dashboards.",
            icon: <BarChart3 size={32} className="text-pink" />
        }
    ];

    return (
        <section id="services" className="services-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2>what can i do for you</h2>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
