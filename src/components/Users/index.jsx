import { useState } from 'react';
import axios from 'axios';
import Card from '../Card'
import './Users.css'
import Modal from '../Modal';

const Users = (props) => {
  const [selectedCardInfo, setSelectedCardInfo] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const openModal = async (cardInfo) => {
    setShowModal(true)
    const response = await axios.get(`http://localhost:3000/api/users/${cardInfo.login}/details`)
    const responseRepos = await axios.get(`http://localhost:3000/api/users/${cardInfo.login}/repos`)
    //PUT IN RESPONSE FOR USER, REPOS
    response.data["repos"] = responseRepos.data
    setSelectedCardInfo(response.data)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedCardInfo(null)
  }

  return (
    <>
      <section className='users'>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <Card
              key={user.login}
              name={user.login}
              id={user.id}
              image={user.avatar_url}
              linkProfile={user.html_url}
              onClick={() => openModal(user)}
            />
          ))
        ) : (
          <p>Nenhum usuário encontrado</p>
        )}
      </section>
      <Modal showModal={showModal} closeModal={closeModal} data={selectedCardInfo} />
    </>
  );
}

export default Users