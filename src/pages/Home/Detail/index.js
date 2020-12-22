import React from 'react';
import AthleteCard from '../../components/AthleteCard';
import Search from '../../assets/img/search.svg';

import './Home.css';

export default function Home() {
  const athletes = {
      id: 1,
      firstName: 'Paulo',
      lastName: 'Lima',
      trainning: {
        date: '2020-12-02',
      },
    },
  

  return (
    <div className='mainBg'>
      <div className='searchBar'>
        <img src={Search} alt='Buscar' className='inputSearch' />
        <input type='text' className='search' />
      </div>
      <div className='mainContainer'>
        <h1 className='userName'>Bem vindo, Felipe</h1>

        <div className='mainData'>
          <p className='mainTxt'>Seus atletas:</p>
          <ul className='athletesList'>
            {athletes.map((row) => {
              return (
                <li key={row.id}>
                  <AthleteCard athlete={row} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
