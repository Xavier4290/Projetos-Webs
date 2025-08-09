import './Forms.css'
import Inputs from '../Inputs/Inputs.js'
import StatusDeVida from '../StatusDeVida/StatusDeVida.js';

const Forms = () => {
    const status = [
        'Vivo ou morto',
        'Somente vivo',
        'Somente morto'
    ]
    return (
        <div className="container">
            <form>
                <Inputs label='Nome' placeholder="Nome"/>
                <Inputs label='Idade' placeholder="Idade"/>
                <Inputs label='Recompensa' placeholder="100,00"/>
                <StatusDeVida status={status} label="Vivo ou Morto"/>
            </form>
        </div>

    );
};

export default Forms; 