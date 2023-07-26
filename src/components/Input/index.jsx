import './Input.css'

const Input = (props) => {
  return (
    <div className='input'>
      <label>{props.name}</label>
      <input type="text" placeholder={props.placeholder} value={props.value} onChange={e => props.onChange(e.target.value)} />
    </div>
  );
}

export default Input