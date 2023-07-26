import './Tabela.css'

const Tabela = (props) => {
  return (
    <div>
      {props.data.length > 1 ? (
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>LINK</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map(repo => (
              <tr key={repo.id}>
                <td>{repo.id}</td>
                <td>{repo.name}</td>
                <td> <a href={repo.html_url} target='_blank' rel="noreferrer">{repo.html_url}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : <h2 className='mt-3'>Nenhum repositório encontrado</h2>}
    </div>
  )
}

export default Tabela