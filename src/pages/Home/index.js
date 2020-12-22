import React from 'react';
import AthleteCard from '../../components/AthleteCard';
import Search from '../../assets/img/search.svg';

import './Home.css';

export default function Home() {
  const athletes = [
    {
      id: 1,
      firstName: 'Paulo',
      lastName: 'Lima',
      trainning: {
        date: '2020-12-02',
      },
    },
    {
      id: 2,
      firstName: 'Arnaldo',
      lastName: 'Batista',
      trainning: {
        date: '2020-10-02 00:00:00',
      },
    },
    {
      id: 3,
      firstName: 'Claudia',
      lastName: 'Ferreira',
      trainning: {
        date: '2020-11-17 00:00:00',
      },
    },
    {
      id: 4,
      firstName: 'Paulo',
      lastName: 'Amorim',
      trainning: {
        date: '2020-12-12 00:00:00',
      },
    },
    {
      id: 5,
      firstName: 'Flavia',
      lastName: 'Barbosa',
      trainning: {
        date: '2020-10-29 00:00:00',
      },
    },
    {
      id: 6,
      firstName: 'Milena',
      lastName: 'Conceição',
      trainning: {
        date: '2020-11-30 00:00:00',
      },
    },
    {
      id: 1,
      firstName: 'Paulo',
      lastName: 'Lima',
      trainning: {
        date: '2020-12-02',
      },
    },
    {
      id: 2,
      firstName: 'Arnaldo',
      lastName: 'Batista',
      trainning: {
        date: '2020-10-02 00:00:00',
      },
    },
    {
      id: 3,
      firstName: 'Claudia',
      lastName: 'Ferreira',
      trainning: {
        date: '2020-11-17 00:00:00',
      },
    },
    {
      id: 4,
      firstName: 'Paulo',
      lastName: 'Amorim',
      trainning: {
        date: '2020-12-12 00:00:00',
      },
    },
    {
      id: 5,
      firstName: 'Flavia',
      lastName: 'Barbosa',
      trainning: {
        date: '2020-10-29 00:00:00',
      },
    },
    {
      id: 6,
      firstName: 'Milena',
      lastName: 'Conceição',
      trainning: {
        date: '2020-11-30 00:00:00',
      },
    },
  ];

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
