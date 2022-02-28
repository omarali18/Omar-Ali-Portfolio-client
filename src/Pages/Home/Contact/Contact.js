import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css"
import { Typography } from '@mui/material';


// npm install emailjs-com --save


const Contact = () => {
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
            <div>
                <Typography variant="body1" sx={{fontSize:{md:"4rem", xs:"2rem"}}}>
                CONTACT ME
                </Typography>
                <Typography sx={{fontSize:{md:"7rem", xs:"2rem"}, mt:{md:"-50px", xs:"-20px"}, ml:{xs:"20px"}}} className='constact-text'>CONTACT ME</Typography>
            </div>

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
                            <label htmlFor="email">Enter Your Email</label> <br />
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

export default Contact;