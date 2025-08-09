import './StatusDeVida.css'

const StatusDeVida = (props) => {
    console.log(props.status)
    return (
        <div className="Estado de vida">
            <label> {props.label}
                <select required={props.required}>
                   {props.status.map(status => <option key={status}>{status}</option>)}
                </select>
            </label>
        </div>

    );
};

export default StatusDeVida;