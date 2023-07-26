import './Modal.css'
import Id from '../Id';
import Tabela from '../Tabela';
import { GrClose } from "react-icons/gr";
import Loading from '../Loading';

const Modal = (props) => {
  const dataModal = props.data

  const convertDateFormat = (dateStr) => {
    const dateObj = new Date(dateStr);

    const day = dateObj.getUTCDate();
    const month = dateObj.getUTCMonth() + 1;
    const year = dateObj.getUTCFullYear();

    const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

    return formattedDate;
  }

  return (
    <div>
      {props.showModal && (
        <div className='modal'>
          {dataModal ? (
            <section className='container-modal'>
              <button onClick={props.closeModal} className='close'><GrClose /></button>
              <Id id={dataModal.id} />
              <div className='top'>
                <div>
                  <img src={dataModal.avatar_url} alt={dataModal.login} />
                </div>
                <div className='infos'>
                  <h3 className='name'>{dataModal.login}</h3>
                  <a target='_blank' rel="noreferrer" href={dataModal.html_url}>Ver no GitHub</a>
                </div>
              </div>
              <h5 className='sub-title'>Data de criação: {convertDateFormat(dataModal.created_at)}</h5>
              <div className='bottom'>
                <h3>Repositórios:</h3>
                <Tabela data={dataModal.repos} />
              </div>
            </section>
          ) : <Loading />}
        </div>
      )}
    </div>
  )
}

export default Modal