import React, { useState } from 'react';
import { login } from '../../api/auth';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { FiLogIn } from 'react-icons/fi';

import Logo from '../../assets/img/logo.png';
import LadSoft from '../../assets/img/ladsoft.png';

import './SignIn.css';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('Favor informar o email cadastrado'),
  password: Yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export default function SignIn() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  function handleSubmit(email, password) {
    login(email, password);
  }

  return (
    <div className='signinbg'>
      <img src={Logo} alt='Ladfit' className='signinLogo' />
      <div className='signinContainer'>
        <p className='signinTxt'>Faça o Login para acessar o sistema.</p>

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(data) => {
            setLoading(true);
            console.log(data);
            setLoading(false);
          }}
        >
          {({ values, handleBlur }) => (
            <Form className='signinForm'>
              <Field
                type='email'
                name='email'
                label='E-mail'
                as={Input}
                validationSchema={schema}
              />

              <Field
                type='password'
                name='password'
                label='Senha'
                as={Input}
                validationSchema={schema}
              />

              <Button disabled={loading}>
                <FiLogIn />
                ENTRAR
              </Button>
            </Form>
          )}
        </Formik>

        <p className='signinTxt'>Esqueci a minha senha.</p>

        <div className='yellowLine'></div>

        <p className='signinTxt'>Ainda não tem sua conta?</p>
        <p className='signinTxt'>Faça o seu cadastro aqui!</p>

        <img src={LadSoft} alt='LadSoft' className='signinLad' />
      </div>
    </div>
  );
}
