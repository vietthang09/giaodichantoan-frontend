import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const GoogleRecaptcha = ({ onChange }) => {
    const recaptchaRef = useRef();

    const handleRecaptchaChange = (value) => {
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LdOo1UpAAAAAJEdWxx7SgZNHJUq1oMwS2PUo4_A"
            onChange={handleRecaptchaChange}
        />
    );
};

export default GoogleRecaptcha;