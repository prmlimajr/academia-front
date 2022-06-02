import React, { useState, useCallback } from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../api/auth';

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
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (data) => {
    try {
      await schema.validate(data, { abortEarly: false });
      const { email, password } = data
      await login(email, password);
      history.push('/');
    } catch (err) {
      alert('Falha na requisição');
      console.log(err);
    }
  }, []);

  return (
    <div className='signinbg'>
      <img src={Logo} alt='Ladfit' className='signinLogo' />
      <div className='signinContainer'>
        <p className='signinTxt'>Faça o Login para acessar o sistema.</p>

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(data) => handleSubmit(data)}
          validationSchema={schema}
        >
          <Form className='signinForm'>
            <Field type='text' label='E-mail' name='email' as={Input} />
            <ErrorMessage
              component='span'
              name='email'
              className='validationInput'
            />

            <Field type='password' label='Senha' name='password' as={Input} />
            <ErrorMessage
              component='span'
              name='password'
              className='validationInput'
            />

            <Button disabled={loading}>
              <FiLogIn />
              {loading ? 'Carregando...' : 'ENTRAR'}
            </Button>
          </Form>
        </Formik>

        <p className='signinTxt'>Esqueci a minha senha.</p>

        <div className='yellowLine'></div>

        <p className='signinTxt'>Ainda não tem sua conta?</p>
        <Link to='/signup' className='signinTxt'>
          Faça o seu cadastro aqui!
        </Link>

        <img src={LadSoft} alt='LadSoft' className='signinLad' />
      </div>
    </div>
  );
}
