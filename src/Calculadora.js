import React, { useState } from 'react';

export const Calculadora = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    const num1 = parseInt(input1);
    const num2 = parseInt(input2);

    setResultado(num1 + num2);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input
        data-testid="input-1"
        type="number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Ingrese un número"
      />
      +
      <input
        data-testid="input-2"
        type="number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Ingrese otro número"
        style={{ marginBottom: '10px' }}
      />
      <button data-testid="boton-sumar" onClick={sumar} style={{ marginBottom: '10px' }}>Sumar</button>
      <div data-testid="resultado">{resultado}</div>
    </div>
  );
}
