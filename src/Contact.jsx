import React, { useState } from 'react';
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({ nombre: '', email: '', msg: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        // Here you could implement form submission logic (e.g., API call)
        setSubmitted(true);
    }

    return (
        <section>
            <h2>Formulario de Contacto</h2>
            {submitted ? (
                <p>Thanks for reaching out! We'll get back to you soon.</p>
            ) : (

                <div className="form-container">
                <form onSubmit={handleSubmit} >
                    <div className="form-row">
                        <label>
                            Nombre:
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-row">
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-row">
                        <label>
                            Mensaje:
                            <textarea
                                name="msg"
                                value={formData.msg}
                                onChange={handleChange}
                                required
                                rows="4"
                            />
                        </label>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
                </div>
            )}
        </section>
    );
}

export default Contact;
