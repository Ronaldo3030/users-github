import './Card.css'
import Id from '../Id';
import { BiLinkAlt } from "react-icons/bi";

const Card = (props) => {
  return (
    <div className='card' onClick={props.onClick}>
      <a className='link' href={props.linkProfile} target='_blank' rel="noreferrer"> <BiLinkAlt /> </a>
      <Id id={props.id}/>
      <img src={props.image} alt={props.name} />
      <h3 className='name'>{props.name}</h3>
    </div>
  )
}

export default Card