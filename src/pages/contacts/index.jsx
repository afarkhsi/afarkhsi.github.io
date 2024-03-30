import Form from '../../components/Form/Form';

const Contact = () => {
  const formData = document.querySelectorAll('.formData');
  formData.forEach((data) => data.setAttribute('data-error-visible', 'false'));
  return (
    <section className="contact">
      <Form />
      <div className="validation-message">
        <h2>Votre inscription a bien été prise en compte !</h2>
        <br />
        <input
          className="btn-terminer"
          id="close-validation"
          type="submit"
          value="Terminer"
        />
      </div>
    </section>
  );
};

export default Contact;
