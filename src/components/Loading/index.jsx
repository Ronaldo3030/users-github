import './Loading.css'

const Loading = (props) => {
  return (
    <div className='loading'>
      <div className="lds-ripple"><div></div><div></div></div>
    </div>
  )
}

export default Loading