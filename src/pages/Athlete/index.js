import React, { useEffect, useState } from 'react';
import Search from '../../assets/img/search.svg';

import './Athlete.css';
import api from '../../services/api';
import { getUser } from '../../services/auth';

export default function Athlete (props) {
  const [athlete, setAthlete] = useState([])  

  useEffect(() => {
    async function getAthlete () {
      try {
        const { data } = await api.get(`/v2/athletes/${props.location.pathname.split('/')[2]}`);
  
        setAthlete(data)
      } catch (error) {
        alert('Falha ao carregar dados do atleta')
      }
    }

    getAthlete()
  }, [])

  const getUserName = () => {
    const user = JSON.parse(getUser())

    return user.first_name
  }
  
console.log({ athlete})
  return (
    <div className='mainBg'>

      <div className='mainContainer'>
        <h1 className='userName'>Bem vindo, {getUserName()}</h1>

        <div className='mainData'>
          <p className='mainTxt'>Seus atletas:</p>

        </div>
      </div>
    </div>
  );
}