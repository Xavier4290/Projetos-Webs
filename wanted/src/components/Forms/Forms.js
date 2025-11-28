import './Forms.css'
import Inputs from '../Inputs/Inputs.js'
import StatusDeVida from '../StatusDeVida/StatusDeVida.js';
import Botao from '../Btn/btn.js'
import { useState } from 'react';

const Forms = (props) => {
    const rank = [
        'Vivo ou morto',
        'Somente vivo',
        'Somente morto'
    ]

const [nome, setNome] = useState('')
const [idade, setIdade] = useState('')
const [recompensa, setRecompensa] = useState('')
const [status, setStatus] = useState('')

const salvar = (e) => {
    e.preventDefault()
    props.novoForagido({
        nome,
        idade,
        recompensa,
        status
    })
}

    return (
        <div className="container">
            <form onSubmit={salvar}>
                <Inputs 
                    label='Nome' 
                    placeholder="Nome"
                    valor = {nome}
                    Alterado = {nome => setNome(nome)}
                />

                <Inputs 
                    label='Idade' 
                    placeholder="Idade"
                    valor = {idade}
                    Alterado = {idade => setIdade(idade)}
                />
                <Inputs 
                    label='Recompensa' 
                    placeholder="100,00"
                    valor = {recompensa}
                    Alterado = {recompensa => setRecompensa(recompensa)}
                />
                <StatusDeVida 
                    status={rank} 
                    label="Vivo ou Morto"
                    valor={status}
                    Alterado = {status => setStatus(status)}
                />

                <Botao/>
            </form>
        </div>

    );
};

export default Forms; 