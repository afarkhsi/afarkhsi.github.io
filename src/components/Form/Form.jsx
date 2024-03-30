import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './style.css';

function Form() {
  const form = useRef();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState('');
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [messageErrorMessage, setMessageErrorMessage] = useState('');
  const [formValidation, setFormValidation] = useState();

  //   const prenomValide = () => prenom.value.trim().length >= 2;
  //   const nomValide = () => nom.value.trim().length >= 2;
  //   const messageValide = () => message.value.trim().length >= 20;
  let regexEmail =
    /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
  const emailValide = () => regexEmail.test(email.valueOf());

  //   const validate = () => {
  //     let erreur = false;
  //     if (!prenomValide()) {
  //       formData[0].setAttribute('data-error-visible', 'true');
  //       erreur = true;
  //     } else {
  //       formData[0].setAttribute('data-error-visible', 'false');
  //     }
  //     if (!nomValide()) {
  //       formData[1].setAttribute('data-error-visible', 'true');
  //       erreur = true;
  //     } else {
  //       formData[1].setAttribute('data-error-visible', 'false');
  //     }
  //     if (!emailValide()) {
  //       formData[2].setAttribute('data-error-visible', 'true');
  //       erreur = true;
  //     } else {
  //       formData[2].setAttribute('data-error-visible', 'false');
  //     }
  //     if (!messageValide()) {
  //       formData[3].setAttribute('data-error-visible', 'true');
  //       erreur = true;
  //     } else {
  //       formData[3].setAttribute('data-error-visible', 'false');
  //     }
  //     if (
  //       !prenomValide() === false &&
  //       !nomValide() === false &&
  //       !emailValide() === false &&
  //       !messageValide()
  //     ) {
  //       formValidation.style.display = 'block';
  //     }
  //   };
  console.log('test:', firstName.length);

  useEffect(() => {
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      message.length > 0 &&
      emailValide()
    ) {
      setFormValidation(true);
      //   if (formValidation === true) {
      console.log('le form est complet', formValidation);
      //     console.log(`Message envoyé !
      //       Prénom:${firstName}
      //       Nom:${lastName}
      //       Email:${email}
      //       Message:${message}

      //       // `);
      //     // emailjs
      //     //   .sendForm('service_kyddk1y', 'template_inavdg6', form.current, {
      //     //     publicKey: 'eIE9xQJLjObkTw9_W',
      //     //   })
      //     //   .then(
      //     //     () => {
      //     //       alert('Message envoyé');
      //     //       // e.target.reset();
      //     //     },
      //     //     (error) => {
      //     //       alert('FAILED...', error.text);
      //     //     }
      //     //   );
      //   }
    } else {
      setFormValidation(false);
      console.log('erreur dans le form', formValidation);
    }
  }, [firstName, lastName, message, emailValide, formValidation, email]);
  //   const validate = () => {

  //     if (
  //       firstName.length > 0 &&
  //       lastName.length > 0 &&
  //       message.length > 0 &&
  //       emailValide()
  //     ) {
  //       setFormValidation(true);
  //       if (formValidation === true) {
  //         // console.log('le form est complet', formValidation);
  //         console.log(`Message envoyé !
  //         Prénom:${firstName}
  //         Nom:${lastName}
  //         Email:${email}
  //         Message:${message}

  //         // `);
  //         // emailjs
  //         //   .sendForm('service_kyddk1y', 'template_inavdg6', form.current, {
  //         //     publicKey: 'eIE9xQJLjObkTw9_W',
  //         //   })
  //         //   .then(
  //         //     () => {
  //         //       alert('Message envoyé');
  //         //       // e.target.reset();
  //         //     },
  //         //     (error) => {
  //         //       alert('FAILED...', error.text);
  //         //     }
  //         //   );
  //       }
  //     } else {
  //       setFormValidation(false);
  //       //   console.log('erreur dans le form', formValidation);
  //     }
  //   };

  const sendEmail = (e) => {
    e.preventDefault();
    // validate();
    console.log('etat de formValidation au clic:', formValidation);
    if (formValidation === true) {
      console.log(`Message envoyé !
      Prénom:${firstName}
      Nom:${lastName}
      Email:${email}
      Message:${message}

      `);
      emailjs
        .sendForm('service_kyddk1y', 'template_inavdg6', form.current, {
          publicKey: 'eIE9xQJLjObkTw9_W',
        })
        .then(
          () => {
            alert('Message envoyé');
            e.target.reset();
          },
          (error) => {
            alert('FAILED...', error.text);
          }
        );
    }
    // console.log(firstName, lastName, email, message);
    // emailjs
    //   .sendForm('service_kyddk1y', 'template_inavdg6', form.current, {
    //     publicKey: 'eIE9xQJLjObkTw9_W',
    //   })
    //   .then(
    //     () => {
    //       alert('Message envoyé');
    //       e.target.reset();
    //     },
    //     (error) => {
    //       alert('FAILED...', error.text);
    //     }
    //   );
    // validate();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="formData">
        <label htmlFor="firstName">Prénom</label>
        <input
          className="text-control"
          name="user_firstName"
          id="firstName"
          placeholder="John"
          onChange={(e) => {
            if (e.target.value.trim().length >= 2) {
              setFirstName(e.target.value);
              setFirstNameErrorMessage('');
            } else if (e.target.value.trim().length < 2) {
              setFirstName('');
              setFirstNameErrorMessage(
                'Veuillez renseigner au moins 2 caractères'
              );
            }
          }}
          required
        />{' '}
        {firstNameErrorMessage ? (
          <span className="error_message">{firstNameErrorMessage}</span>
        ) : (
          ''
        )}
      </div>

      <div className="formData">
        {' '}
        <label htmlFor="lastName">Nom</label>
        <input
          className="text-control"
          name="user_lastName"
          id="lastName"
          placeholder="Doe"
          onChange={(e) => {
            if (e.target.value.trim().length >= 2) {
              setLastName(e.target.value);
              setLastNameErrorMessage('');
            } else {
              setLastName('');
              setLastNameErrorMessage(
                'Veuillez renseigner au moins 2 caractères'
              );
            }
          }}
          required
        />
        {lastNameErrorMessage ? (
          <span className="error_message">{lastNameErrorMessage}</span>
        ) : (
          ''
        )}
      </div>

      <div className="formData">
        {' '}
        <label htmlFor="email">Email</label>
        <input
          className="text-control"
          name="user_email"
          id="email"
          placeholder="JohnDoe1995@hotmail.com"
          type="email"
          onChange={(e) => {
            if (regexEmail.test(e.target.value)) {
              setEmail(e.target.value);
              setEmailErrorMessage('');
            } else {
              setEmail('');
              setEmailErrorMessage(
                'Veuillez renseigner une adresse email valide'
              );
            }
          }}
          required
        />
        {emailErrorMessage ? (
          <span className="error_message">{emailErrorMessage}</span>
        ) : (
          ''
        )}
      </div>

      <div className="formData">
        <label htmlFor="message">Message</label>
        <input
          className="text-control"
          name="user_message"
          id="message"
          placeholder="Votre message"
          type="text"
          onChange={(e) => {
            if (e.target.value.trim().length >= 20) {
              setMessage(e.target.value);
              setMessageErrorMessage('');
            } else {
              setMessage('');
              setMessageErrorMessage(
                'Votre message doit contenir au moins 20 caractères'
              );
            }
          }}
          required
        />
        {messageErrorMessage ? (
          <span className="error_message">{messageErrorMessage}</span>
        ) : (
          ''
        )}
      </div>

      <input type="submit" value="Envoyer" />
    </form>
  );
}

export default Form;
