import React, { useState } from 'react';
import './Form.css';
const Form = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para lidar com o envio do formulário
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
    console.log('Mensagem:', mensagem);
  };

  return (
    <div className="formulario">
      <h2>Contato  
      </h2>
        <a className="link-wpp" href='https://wa.me/5511932345062'>Saiba Mais no WhatsApp </a> 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

<input
          type="telefone"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <textarea
          placeholder="Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <a className="instagram-link" href="https://www.instagram.com/judoca.ailton/">Página do instagram</a>
    </div>
  );
};

export default Form;
