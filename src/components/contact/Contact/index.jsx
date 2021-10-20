/* eslint no-console: 0, jsx-a11y/label-has-associated-control: 0, jsx-a11y/label-has-for: 0 */
import React, { useState } from 'react';
import { Container } from 'components/common';
import { Header } from 'components/theme';
import { Wrapper, IntroWrapper, Details } from './styles';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'message':
        setMessage(event.target.value);
        break;
      default:
        console.log('Key not found');
    }
  };

  const canSubmit = () => {
    if (name === '') return true;
    if (email === '') return true;
    if (message === '') return true;
    return false;
  };

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details>
          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <div style={{ textAlign: 'center' }}>
              <h3>お問い合わせいただきありがとうございます。</h3>
              <h3>どのような内容でも構いませんのでお問い合わせください。</h3>
              <p>受付先: カリフォルニア州立工科大学ポモナ校</p>
              <p>担当者: 一色 浩一郎教授</p>
            </div>
            <input type="hidden" name="form-name" id="form-name" value="contact" />
            <input type="hidden" name="bot-field" id="bot-field" />
            <ul>
              <li>
                <label htmlFor="name">
                  <span>
                    名前 <span className="required-star">*</span>
                  </span>
                </label>
                <input type="text" id="name" name="name" value={name} onChange={handleChange} />
              </li>
              <li>
                <label htmlFor="mail">
                  <span>
                    メール <span className="required-star">*</span>
                  </span>
                </label>
                <input type="email" id="mail" name="email" value={email} onChange={handleChange} />
              </li>
              <li>
                <label htmlFor="msg">
                  <span>お問い合わせ内容</span>
                </label>
                <textarea rows="4" cols="50" name="message" value={message} onChange={handleChange}></textarea>
              </li>
              <li>
                <input type="submit" value="送信" disabled={canSubmit()} />
              </li>
            </ul>
          </form>
        </Details>
      </IntroWrapper>
    </Wrapper>
  );
};
