import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    // O `Component` que importamos executa, internamente, um constructor próprio. Quando o customizamos desse jeito, precisamos chamar essa função `super(props)` para garantir que esse construtor dele é executado. Caso não chamássemos, somente a nossa lógica seria executada, e não a dele! Teríamos problemas! As `props` que repassamos aqui são as props do componente, se lembra?
    super(props);
    this.state = { date: new Date() };
  }

  // Precisamos salvar o intervalo setado nessa variável para saber qual intervalo devemos remover ao desmontar o componente!
  componentDidMount() {
    this.timerID = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // A função `toLocaleTimeString()` é só para converter a data-hora que temos para o tipo string, para exibirmos-na bonitinha!
  render() {
    return (
      <div>
        <h1>Relógio</h1>
        <h2>Agora são {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
