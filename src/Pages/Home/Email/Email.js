import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "./Email.css"

const Email = () => {
    const [success, setSuccess] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6vx7x1q', 'template_m08x4pu', e.target, 'user_ykuLnlqbRI29KI44lZBYt')
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });

        // setSuccess(true)
    };

    setTimeout(() => {
        setSuccess(false)
    }, 8000)
    return (
        <div className="email-contaimer" id="contact">

            <div className="form-container">
                <h1>Say Hello!</h1>
                <div className="success-message">
                    {
                        success && <p>Your message has been successfully sent, I will contact you soon.</p>
                    }
                </div>
                <form onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <label htmlFor="nmae">Full Name</label> <br />
                            <input type="text" name="name" placeholder="Your name" className="mb-4" /> <br />
                            <label htmlFor="email">Enter Email</label> <br />
                            <input type="email" name="email" placeholder="Your email" />
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="email">Message</label> <br />
                            <textarea name="message" placeholder="Your message" />
                        </div>
                    </div>
                    <div className="row">

                        <div className="col text-end mt-3">
                            <button>Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Email;