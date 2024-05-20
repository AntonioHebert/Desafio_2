import React from 'react';
import './ListarVagas.css';

const ListarVagas = () => {
  const vagasCadastradas = [
    { placa: 'ABC-1234', nome: 'João Silva', apartamento: '101', bloco: 'A', modelo: 'Sedan', cor: 'Preto', vaga: '1' },
    { placa: 'DEF-5678', nome: 'Maria Oliveira', apartamento: '202', bloco: 'B', modelo: 'Hatch', cor: 'Vermelho', vaga: '2' },
    // Adicione mais vagas fictícias conforme necessário
  ];

  return (
    <div className="container">
      <h2>Listar Vagas Cadastradas</h2>
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Nome</th>
            <th>Apartamento</th>
            <th>Bloco</th>
            <th>Modelo</th>
            <th>Cor</th>
            <th>Vaga</th>
          </tr>
        </thead>
        <tbody>
          {vagasCadastradas.map((vaga, index) => (
            <tr key={index}>
              <td>{vaga.placa}</td>
              <td>{vaga.nome}</td>
              <td>{vaga.apartamento}</td>
              <td>{vaga.bloco}</td>
              <td>{vaga.modelo}</td>
              <td>{vaga.cor}</td>
              <td>{vaga.vaga}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarVagas;
