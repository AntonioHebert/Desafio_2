import React, { useState } from 'react';
import './CadastroReserva.css';

const CadastroReserva = () => {
  const [formData, setFormData] = useState({
    placa: '',
    nome: '',
    apartamento: '',
    bloco: '',
    modelo: '',
    cor: '',
    vaga: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Cadastro realizado com sucesso!");
    setFormData({
      placa: '',
      nome: '',
      apartamento: '',
      bloco: '',
      modelo: '',
      cor: '',
      vaga: ''
    });
  };

  return (
    <div className="container">
      <h2>Cadastro de Reserva de Vaga</h2>
      <form onSubmit={handleSubmit}>
        <label>Placa do Veículo:</label>
        <input type="text" name="placa" value={formData.placa} onChange={handleChange} required />

        <label>Nome do Proprietário:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />

        <label>Número do Apartamento:</label>
        <input type="text" name="apartamento" value={formData.apartamento} onChange={handleChange} required />

        <label>Bloco do Apartamento:</label>
        <input type="text" name="bloco" value={formData.bloco} onChange={handleChange} required />

        <label>Modelo do Veículo:</label>
        <input type="text" name="modelo" value={formData.modelo} onChange={handleChange} required />

        <label>Cor do Veículo:</label>
        <input type="text" name="cor" value={formData.cor} onChange={handleChange} required />

        <label>Número da Vaga de Estacionamento:</label>
        <input type="text" name="vaga" value={formData.vaga} onChange={handleChange} required />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default CadastroReserva;
