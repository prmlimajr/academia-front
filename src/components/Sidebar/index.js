import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import Ladsoft from '../../assets/img/ladsoft.png';
import { loggedOut } from '../../services/auth';
import './Sidebar.css';
export default function Sidebar() {
  const history = useHistory()
  const handleLogOut = () => {
    loggedOut()
    history.push('/login');
  }
  return (
    <div className='sidebar'>
      <img src={Ladsoft} alt='Ladsoft' className='sidebarLogo' />
      <div className='row'>
        <p className='logout' onClick={() => handleLogOut()}>Sair</p>
        <FiLogOut size={14} color='#534f47' />
      </div>
    </div>
  );
}
