import React, { useEffect, useState } from 'react';
import AthleteCard from '../../components/AthleteCard';
import Search from '../../assets/img/search.svg';
import Button from '../../components/Button'

import './Home.css';
import api from '../../services/api';
import { getUser } from '../../services/auth';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const [athletes, setAthletes] = useState([])
  const [search, setSearch] = useState('')

  const history = useHistory()

  useEffect(() => {
    async function getAthletes () {
      try {
        const { data } = await api.get(`/v2/athletes?search=${search}`);

        setAthletes(data);
      } catch(error) {
        console.log(error);
      }      
    }

    getAthletes()
  }, [search])

  const getUserName = () => {
    const user = JSON.parse(getUser())

    return user.first_name
  }
  

  return (
    <div className='mainBg'>
      <div className='searchBar'>
        <img src={Search} alt='Buscar' className='inputSearch' />
        <input type='text' className='search' onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <div className='mainContainer'>
        <h1 className='userName'>Bem vindo, {getUserName()}</h1>

        <div className='mainData'>
          <p className='mainTxt'>Seus atletas:</p>
          <ul className='athletesList'>
            {athletes.length > 0 && athletes.map((row) => {
              return (
                <li key={row.id}>
                  <AthleteCard athlete={row} />
                </li>
              );
            })}
          </ul>
        </div>

        <Button onClick={() => history.push('/athlete')}>Novo Atleta</Button>
      </div>
    </div>
  );
}
