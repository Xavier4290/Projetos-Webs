import './Inputs.css'

const Inputs = (props) => {
    return (
        <label> {props.label}
            <input type="text" placeholder={props.placeholder}></input>
        </label>
    );
};

export default Inputs