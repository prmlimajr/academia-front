import React from 'react';
import { useHistory } from 'react-router-dom';
import * as DateFns from 'date-fns';

import './AthleteCard.css';

export default function AthleteCard(props) {
  const history = useHistory();
  console.log(props);
  return (
    <div className='card'>
      <div className='athlete'>
        <h1 className='athleteName'>{`${props.athlete.firstName} ${props.athlete.lastName}`}</h1>
        <p className='cardTxt'>
          Treino prescrito em:{' '}
          {DateFns.format(
            DateFns.parseISO(props.athlete.trainning.date),
            'dd/MM/yyyy'
          )}
        </p>
      </div>
      <button
        className='cardBtn'
        onClick={() => history.push(`/athlete/${props.athlete.id}`)}
      >
        Ver mais
      </button>
    </div>
  );
}
