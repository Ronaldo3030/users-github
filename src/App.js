import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Input from './components/Input';
import Users from './components/Users';
import Loading from './components/Loading';
import Button from './components/Button';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

function App() {

  const [name, setName] = useState('')
  const [users, setUsers] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false);
  const [last, setLast] = useState(0)
  const [firstUsers, setFirstUsers] = useState([])

  useEffect(() => {
    // Function to fetch initial user data when the page loads
    const fetchInitialUserData = async () => {
      getUsers(0)
      setFirstUsers([])
    };

    fetchInitialUserData(); // Call the function to fetch initial user data
  }, []);

  const getUsers = async (since, prev) => {
    try {
      const response = await axios.get(`https://api-users-github.onrender.com/api/users?since=${since}`);
      const max = response.data.length
      const first = response.data[0].id
      if(prev === true){
        setFirstUsers(firstUsers.slice(0, -1));
      }else{
        setFirstUsers([...firstUsers, first])
      }
      setLast(response.data[max - 1].id)
      setUsers(response.data);
      setDataLoaded(true)
    } catch (error) {
      console.log(error);
      setUsers([]); // Reset users if there's an error or no data found
      setDataLoaded(true)
    }
  }

  const handleSearch = async (value) => {
    try {
      const response = await axios.get(`https://api-users-github.onrender.com/api/users/${value}`);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
      setUsers([]);
    }
  };

  const next = async () => {
    getUsers(last)
  }

  const previous = async () => {
    getUsers(firstUsers[firstUsers.length - 2] - 1, true)
  }

  return (
    <div className="App">
      <div className='container'>
        <div style={{ width: "50%", margin: "0 auto" }}>
          <Input name="Procurar" placeholder="Digite um usuário" value={name} onChange={value => {
            setName(value);
            handleSearch(value);
          }} />
        </div>
        {dataLoaded ? (
          <Users users={users} />
        ) : <Loading />}
        {firstUsers.length > 1 && (<Button onClick={previous} name="Anterior" ><BsFillArrowLeftCircleFill /></Button>)}
        <Button onClick={next} name="Próximo"><BsFillArrowRightCircleFill /></Button>
      </div>
    </div>
  );
}

export default App;
