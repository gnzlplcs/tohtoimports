import React from "react";

const Form = () => {
  return (
    <form>
    <h2>Déjanos un mensaje</h2>
      <label htmlFor="form-name">
        Nombre<br/>
        <input type="text" id="form-name" />
      </label><br/>
      <label htmlFor="form-email">
        Correo electrónico<br/>
        <input type="email" id="form-email" placeholder="e-mail@mail.com" />
      </label><br/>
      <label htmlFor="form-text">Mensaje<br/>
        <textarea id="form-text"></textarea>
      </label>
    </form>
  );
};

export default Form;
