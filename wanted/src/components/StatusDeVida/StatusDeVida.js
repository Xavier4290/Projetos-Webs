import './StatusDeVida.css'

const StatusDeVida = (props) => {
    return (
        <div className="Estado-de-vida">
            <label> {props.label}
                <select onChange={evento => props.Alterado(evento.target.value)} required={props.required} value={props.valor}>
                   {props.status.map(status => <option key={status}>{status}</option>)}
                </select>
            </label>
        </div>

    );
};

export default StatusDeVida;