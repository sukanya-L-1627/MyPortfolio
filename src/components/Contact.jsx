import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            setStatus('Please fill in your name, email, and message.');
            return;
        }

        const subject = form.subject || `Portfolio enquiry from ${form.name}`;
        const body = `${form.message}\n\n— ${form.name} (${form.email})`;
        const mailtoUrl = `mailto:sukanyal1627@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;
        setStatus('Opening your email app to send the message...');
        setForm({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section section-padding">
            <div className="container">
                <div className="cta-area">
                    <h2>Have Any Project On Mind?</h2>
                    <a href="#" className="btn-pink">Hire Me</a>
                </div>

                <div className="contact-row">
                    <div className="contact-info">
                        <div className="info-item">
                            <MapPin size={30} className="text-pink" />
                            <div>
                                <h3>Location</h3>
                                <p>Hyderabad, India</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Phone size={30} className="text-pink" />
                            <div>
                                <h3>Phone</h3>
                                <p>+91 94913 16259</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Mail size={30} className="text-pink" />
                            <div>
                                <h3>Email</h3>
                                <p>sukanyal1627@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
                                <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} />
                            </div>
                            <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
                            <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange}></textarea>
                            {status && <p className="form-status">{status}</p>}
                            <button type="submit" className="btn-pink">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
