
import React, { useState } from 'react';
import styles from './Card.module.css';



function Card() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState('');

  const adicionarTarefa = () => {
    if (tarefa.trim() !== '') {
      setTarefas([...tarefas, tarefa]);
      setTarefa('');
    }
  };

  const removerTarefa = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };

  return (
    <div className={styles.container}>

      <h1 className=''>Projeto DevList</h1>
      <br />
      <h2>Projeto interno de Lista</h2>


      <div className={styles.divIn}>
        <input type="text" value={tarefa} onChange={(e) => setTarefa(e.target.value)} placeholder="Adicionar uma nova tarefa"
          className={styles.input}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
      <ul className={styles.lista}>
        {tarefas.map((tarefa, index) => (
          <ol key={index} className={styles.remover}>
            <div className={styles.text}>
              {tarefa}
            </div>
            <button onClick={() => removerTarefa(index)}>Remover</button>
          </ol>

        ))}

      </ul>
    </div>
  );
}

export default Card;
