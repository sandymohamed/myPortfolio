import React from 'react';
import'./style.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact =() =>{   

    const formRef = useRef();
      // set variable to confirm that the email message sent successfully
      const [done, setDone] = useState(false);

    // useing emailjs to send emails
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_18igkn1',
         'template_8oj9jqm',
         formRef.current, '9Xct6LoX3lP7iDWsc')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
        
    }

        return (<>
        <section className="contact" id="contact">
        <h1 className="heading"> <span>contact</span> me</h1>
        <form ref={formRef} onSubmit={handleSubmit}> 
            <input type="text" placeholder="your name" className="box" />
            <input type="email" placeholder="your email" className="box" />
            <input type="text" placeholder="subject" className="box" />
            <textarea name="" className="box" placeholder="your message" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="send message" className="btn" />
            { done && alert("your message has been sent successfully")}

        </form>
    </section>

    </>
    
    
    );
    

} 
export default Contact ;
