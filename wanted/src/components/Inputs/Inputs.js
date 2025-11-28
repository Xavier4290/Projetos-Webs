import './Inputs.css'

const Inputs = (props) => {
    const Digitado = (evento) => {
        props.Alterado(evento.target.value)
    }

    return (
        <label> {props.label}
            <input type="text" onChange={Digitado} placeholder={props.placeholder}></input>
        </label>
    );
};

export default Inputs