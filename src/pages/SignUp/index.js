import React, { useState } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import './SignUp.css';

export default function SignUp() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [securityKey, setSecurityKey] = useState(null);

  return (
    <div className='signinbg'>
      <div className='signinContainer'>
        <p className='signinTxt'>Faça o seu cadastro.</p>

        <form className='signinForm'>
          <Input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            label='Nome'
          />

          <Input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            label='Sobrenome'
          />

          <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label='E-mail'
          />

          <Input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label='Senha'
          />

          <Input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            label='Confirmar senha'
          />

          <Input
            type='text'
            value={securityKey}
            onChange={(e) => setSecurityKey(e.target.value)}
            label='Chave de segurança para instrutores'
          />

          <Button>CADASTRAR</Button>
        </form>

        <p className='signinTxt'>Fazer o login</p>
      </div>
    </div>
  );
}
