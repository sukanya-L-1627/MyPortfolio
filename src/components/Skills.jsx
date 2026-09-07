import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Sparkles, MessageSquareText, Users, Search, Database } from 'lucide-react';
import './Skills.css';

const DevIcon = ({ src, alt, className = "" }) => (
    <img src={src} alt={alt} width={40} height={40} className={className} style={{ objectFit: 'contain' }} />
);

const Skills = () => {
    const skills = [
        {
            name: "Python",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />,
            desc: "AI scripting, automation, and model development."
        },
        {
            name: "PyTorch",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" />,
            desc: "Deep learning models and neural networks."
        },
        {
            name: "TensorFlow",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />,
            desc: "ML workflows and GenAI applications."
        },
        {
            name: "LangChain",
            icon: <DevIcon src="https://avatars.githubusercontent.com/u/126733545?s=200&v=4" alt="LangChain" />,
            desc: "Building agents, tools, and RAG pipelines."
        },
        {
            name: "OpenAI",
            icon: <DevIcon src="https://openai.com/favicon.ico" alt="OpenAI" />,
            desc: "GPT integration, embeddings, and AI APIs."
        },
        {
            name: "MongoDB",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />,
            desc: "NoSQL data storage for AI datasets and apps."
        },
        {
            name: "Ollama",
            icon: <DevIcon src="https://cdn.jsdelivr.net/npm/simple-icons@13/icons/ollama.svg" alt="Ollama" />,
            desc: "Local LLM inference and model orchestration."
        },
        {
            name: "Gemini",
            icon: <DevIcon src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg" alt="Gemini" />,
            desc: "Google Gemini models and advanced multimodal AI."
        },
        {
            name: "RAG Pipeline",
            icon: <DevIcon src="https://cdn-icons-png.flaticon.com/512/6825/6825781.png" alt="RAG Pipeline" />,
            desc: "Retrieval-augmented generation for knowledge-driven AI."
        },
        {
            name: "LangGraph",
            icon: <DevIcon src="https://cdn-icons-png.flaticon.com/512/3504/3504878.png" alt="LangGraph" />,
            desc: "Graph-based reasoning and knowledge graph pipelines."
        },
        {
            name: "CrewAI",
            icon: <Users size={40} className="text-pink" />,
            desc: "Multi-agent orchestration for collaborative AI workflows."
        },
        {
            name: "Agentic AI",
            icon: <DevIcon src="https://cdn-icons-png.flaticon.com/512/4712/4712139.png" alt="Agentic AI" />,
            desc: "Autonomous AI agents and workflows."
        },
        {
            name: "Gen AI & RAG",
            icon: <DevIcon src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png" alt="Gen AI" />,
            desc: "RAG and Large Language Models."
        },
        {
            name: "FastAPI",
            icon: <DevIcon src="https://raw.githubusercontent.com/fastapi/fastapi/master/docs/en/docs/img/logo-margin/logo-teal.svg" alt="FastAPI" />,
            desc: "High-performance AI model serving."
        },
        {
            name: "Machine Learning",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" alt="Scikit-learn" />,
            desc: "Supervised and Statistical Modeling."
        },
        {
            name: "React & JS",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />,
            desc: "Modern frontend web development."
        },
        {
            name: "Docker",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />,
            desc: "Containerization for scalable AI deployments."
        },
        {
            name: "GitHub",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />,
            desc: "Version control and collaborative development."
        },
        {
            name: "AWS",
            icon: <DevIcon src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg" alt="AWS" />,
            desc: "Cloud infrastructure for ML and model serving."
        },
        {
            name: "Vector Databases",
            icon: <DevIcon src="https://cdn-icons-png.flaticon.com/512/4696/4696854.png" alt="Vector Databases" />,
            desc: "Embedding storage and semantic search for AI apps."
        },
        {
            name: "Fine-Tuning",
            icon: <DevIcon src="https://cdn-icons-png.flaticon.com/512/3078/3078049.png" alt="Fine Tuning" />,
            desc: "Custom model tuning for domain-specific performance."
        },
        {
            name: "Power BI",
            icon: <BarChart3 size={40} className="text-pink" />,
            desc: "Data visualization and business intelligence dashboards."
        },
        {
            name: "NLP",
            icon: <DevIcon src="https://cdn.jsdelivr.net/npm/simple-icons@13/icons/spacy.svg" alt="spaCy" />,
            desc: "Text understanding, summarization, and language pipelines."
        },
        {
            name: "SQL",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />,
            desc: "Data management and querying for AI datasets."
        },
        {
            name: "Keras",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" alt="Keras" />,
            desc: "High-level neural network APIs for deep learning."
        },
        {
            name: "Pandas",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" />,
            desc: "Data wrangling and analysis for AI datasets."
        },
        {
            name: "NumPy",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" />,
            desc: "Numerical computing and array operations."
        },
        {
            name: "PostgreSQL",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />,
            desc: "Relational database management with pgvector support."
        },
        {
            name: "Flask",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" />,
            desc: "Lightweight backend framework for AI APIs."
        },
        {
            name: "Streamlit",
            icon: <DevIcon src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/streamlit.svg" alt="Streamlit" />,
            desc: "Rapid UI development for AI and data apps."
        },
        {
            name: "Git",
            icon: <DevIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />,
            desc: "Version control for collaborative development."
        },
        {
            name: "FAISS",
            icon: <Search size={40} className="text-pink" />,
            desc: "Fast similarity search over dense vector embeddings."
        },
        {
            name: "ChromaDB",
            icon: <Database size={40} className="text-pink" />,
            desc: "Vector database for embeddings and semantic retrieval."
        },
        {
            name: "Prompt Engineering",
            icon: <MessageSquareText size={40} className="text-pink" />,
            desc: "Crafting effective prompts for reliable LLM outputs."
        },
        {
            name: "Claude",
            icon: <Sparkles size={40} className="text-pink" />,
            desc: "Anthropic's Claude models for reasoning and AI apps."
        }
    ];

    return (
        <section id="skills" className="skills-section section-padding">
            <div className="container">
                <div className="section-header">
                    <h2>My Skills</h2>
                    <p>Building intelligent systems with a focus on Deep Learning, NLP, and scalable AI solutions.</p>
                </div>
                <div className="skills-grid-new">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-card-new"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="skill-icon-new">
                                {skill.icon}
                            </div>
                            <h3>{skill.name}</h3>
                            <p>{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
