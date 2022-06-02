import React, { useEffect, useState } from 'react';
import * as DateFns from 'date-fns';

import './Athlete.css';
import api from '../../services/api';
import { getUser } from '../../services/auth';
import Button from '../../components/Button';
import ChevronLeft from '../../assets/img/chevron-left.svg';
import { Link } from 'react-router-dom';
import Avatar from '../../assets/img/account_box.svg';

export default function Athlete (props) {
  const [athlete, setAthlete] = useState({})  
  const [chosenTab, setChosenTab] = useState(null)
  const [chosenTabContent, setChosenTabContent] = useState(null)

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

  const renderTabs = () => {
    let tabs = []

    if (athlete.prescription) {
      athlete.prescription.forEach(p => {
        tabs.push(p.workout_type)
      })
  
      tabs = [...new Set(tabs)]
    }
    console.log({ tabs})
    return (
      <>
        <ul className='tabs'>
          {tabs.map(tab => <li key={tab} className={chosenTab === tab ? 'tab-active' : 'tab'} onClick={() => setChosenTab(tab)}>Treino {tab}</li>)}
        </ul>

        <div className="divider" />
      </>
    )
  }
  
console.log({ athlete, chosenTabContent})

  if (!athlete.hasOwnProperty('id')) {
    return <div>Carregando...</div>
  }

  return (
    <div className='mainBg'>

      <div className='mainContainer'>
        <Link to='/' className='back'>
          <img src={ChevronLeft} alt='voltar' />
          Voltar
        </Link>
        <h1 className='userName'>Bem vindo, {getUserName()}</h1>

        <div className='mainData'>
          <p className='mainTxt'>Seus atleta:</p>

          <header className='athleteData'>
            <div className="header">
              <img src={athlete.avatar ? athlete.avatar : Avatar} alt={athlete.first_name} className='athlete-avatar'/>

              <div className="athlete-data">
                <span className="name">{athlete.first_name} {athlete.surname}</span>
                <span className="data">Idade: {DateFns.differenceInYears(new Date(), DateFns.parseISO(athlete.birthdate))} anos, Peso: {athlete.weight}Kg</span>
                <span className="data">Motivação: {athlete.motivation}</span>
                <span className="data">Contato: {athlete.phone} / {athlete.email}</span>

                {athlete.history && <span className="red">CUIDADO: {athlete.history}</span>}
              </div>

              <div className="last">
                <span className="data">Ultimo treino prescrito em: {athlete.prescription.length > 0 && athlete.prescription[0].prescribed_at ? DateFns.format(
            DateFns.parseISO(athlete.prescription[athlete.prescription.length - 1].prescribed_at),
            'dd/MM/yyyy'
          ) : '--'}</span>

                <Button style={{background: '#0B4455', color: '#fff'}}>Novo Treino</Button>
              </div>
            </div>
          </header>

          {renderTabs()}

          <div className="tab-content">
            <ul className='tab-content-list'>
              {athlete.prescription.map(p => {
                if (p.workout_type === chosenTab) {
                  return (
                    <>
                      <li key={p.id} className='tab-content-item' onClick={() => setChosenTabContent(p)}>
                        {p.exe_name}
                      </li>

                      <div className="divider" />
                    </>
                  )   
                }
              })}
            </ul>

            {chosenTabContent && chosenTabContent.workout_type === chosenTab && (
              <div className="workout-container">
                <div className="workout-content">
                  <span className="data-name">{chosenTabContent.exe_name}</span>
                  {chosenTabContent.exe_load && <span className="data">Data: {DateFns.format(DateFns.parseISO(chosenTabContent.updated_at), 'dd/MM/yyyy')}</span>}

                  <span className="data">Series: {chosenTabContent.sets}</span>

                  <span className="data">Repeticoes: {chosenTabContent.repetitions}</span>

                  {chosenTabContent.exe_load && <span className="data">Carga Executada: {chosenTabContent.exe_load} Kg</span>}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}