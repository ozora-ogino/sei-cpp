import React, { useState } from 'react';
import { Container } from 'components/common';
import { Wrapper, IntroWrapper, Details, Thumbnail, Greeting } from './styles';

export const Contact = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [message, setMessage] = useState(""); 

  const handleChange = event => {
    switch(event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "message":
        setMessage(event.target.value);
        break;
      default:
        console.log("Key not found")
    }
  }

  const canSubmit = () => {
    if (name === "") return true
    if (email === "") return true
    if (message === "") return true
    return false;
  };

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details language={intl.locale}>
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <h3 style={{textAlign: "center"}}>Thanks for taking the time to reach out. </h3>
          <h3 style={{textAlign: "center"}}>How can I help you today?</h3>
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
            <ul>
                <li>
                    <label for="name"><span>Name <span class="required-star">*</span></span></label>
                    <input type="text" id="name" name="name" value={name} onChange={handleChange} />
                </li>
                <li>
                    <label for="mail"><span>Email <span class="required-star">*</span></span></label>
                    <input type="email" id="mail" name="email" value={email} onChange={handleChange} />
                </li>
                <li>
                    <label for="msg"><span>Message</span></label>
                    <textarea rows="4" cols="50" name="message" value={message} onChange={handleChange}></textarea>
                </li>
                <li>
                    <input type="submit" value={'Submit'} disabled={canSubmit()}/>
                </li>
            </ul>
      </form>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};