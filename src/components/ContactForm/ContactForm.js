import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactForm.css';

const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    inquiryType: '',
    message: ''
};

const ContactForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false); 

    const validatePhoneNumber = (value) => {
        const regex = /^[0-9+\-()\s]*$/;
        return regex.test(value);
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'phoneNumber') {
            setErrors({
                ...errors,
                phoneNumber: !validatePhoneNumber(value)
            });
        }

        checkFormValidity();
    };
    
    const checkFormValidity = () => {
        const isFormValid =
            formData.lastName &&
            formData.email &&
            formData.inquiryType &&
            formData.message;
            setIsSubmitEnabled(isFormValid);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isSubmitEnabled) {
            console.log('Form data:', formData); 
            setSubmitted(true);
        }
    };

    const resetForm = () => {
        setFormData(initialFormData);
        setIsSubmitEnabled(false);
        setSubmitted(false);
    };

    return submitted ? ( 
        <div className="submission-confirmation">
            <h2>Vielen Dank für Ihre Anfrage!</h2>
            <p>Wir werden uns baldmöglichst bei Ihnen melden.</p>
            <div>
                <Link to="/">Zur Startseite</Link>
                <button onClick={resetForm}>Erneut Kontakt aufnehmen</button>
                <Link to="/services">Unsere Dienstleistungen</Link>
            </div>
        </div>
    ) : (
        <form onSubmit={handleSubmit} className="contact-form">
            <input
                type="text"
                name="firstName"
                placeholder="Vorname"
                value={formData.firstName}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Nachname *"
                value={formData.lastName}
                onChange={handleInputChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="E-Mail-Adresse *"
                value={formData.email}
                onChange={handleInputChange}
                required
            />
            <input
                type="tel"
                name="phoneNumber"
                placeholder="Handynummer"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={errors.phoneNumber ? 'error' : ''}
                title="Telefonnummer (z.B. +490301234567 oder 030-1234567)"
            />
            {errors.phoneNumber && (
                <p className="error-text">Bitte geben Sie eine gültige Telefonnummer ein.</p>
            )}
            <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleInputChange}
                required
            >
                <option value="">Bitte wählen *</option>
                <option value="general">Allgemeine Frage</option>
                <option value="service">Dienstleistungsfrage</option>
                <option value="appointment">Terminvereinbarung</option>
                <option value="feedback">Feedback geben</option>
            </select>
            <textarea
                name="message"
                placeholder="Ihre Nachricht *"
                value={formData.message}
                onChange={handleInputChange}
                required
            />
            <button type="submit" disabled={!isSubmitEnabled}>
                Absenden
            </button>
        </form>
    );
};

export default ContactForm;