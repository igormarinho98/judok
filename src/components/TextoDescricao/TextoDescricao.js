import React from 'react';
import './TextoDescricao.css';

const TextoDescricao = ({ title, content }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default TextoDescricao;
