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
      <a className="instagram-link" href="https://www.instagram.com/judoca.ailton/">Clique aqui para acessar a Página do instagram </a>
      <br></br>
        <a className="link-wpp" href='https://wa.me/5511972192454'>Saiba Mais no WhatsApp Clicando aqui</a> 
    </div>
  );
};

export default Form;
