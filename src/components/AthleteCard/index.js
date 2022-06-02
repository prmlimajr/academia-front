import React from 'react';
import { useHistory } from 'react-router-dom';
import * as DateFns from 'date-fns';

import './AthleteCard.css';

export default function AthleteCard(props) {
  const history = useHistory();
  
  return (
    <div className='card'>
      <div className='athlete'>
        <h1 className='athleteName'>{`${props.athlete.first_name} ${props.athlete.surname}`}</h1>
        <p className='cardTxt'>
          Treino prescrito em:{' '}
          {props.athlete.prescription.length > 0 && props.athlete.prescription[0].prescribed_at ? DateFns.format(
            DateFns.parseISO(props.athlete.prescription[props.athlete.prescription.length - 1].prescribed_at),
            'dd/MM/yyyy'
          ) : '--'}
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
