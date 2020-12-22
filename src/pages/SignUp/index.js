import React, { useState, useCallback } from 'react';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';

import * as Yup from 'yup';

import './SignUp.css';
import Checkbox from '../../components/Checkbox';

const schema = Yup.object().shape({
  firstName: Yup.string().required('Favor informar o seu nome'),
  lastName: Yup.string().required('Favor informar o seu sobrenome'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('Favor informar o email cadastrado'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('Favor informar uma senha'),
  confirmPassword: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('Favor confirmar a sua senha'),
  securityKey: Yup.string()
    .min(6, 'A chave de segurança tem ao menos 6 caracteres')
    .nullable(),
});

export default function SignUp() {
  const handleSubmit = useCallback(async (data) => {
    console.log('data', data);
    try {
      await schema.validate(data, { abortEarly: false });
      // login(email, password);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className='signinbg'>
      <div className='signinContainer'>
        <p className='signinTxt'>Faça o seu cadastro.</p>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            instructor: null,
            securityKey: null,
          }}
          onSubmit={(data) => handleSubmit(data)}
          validationSchema={schema}
        >
          {({ values }) => (
            <Form className='signinForm'>
              <Field type='text' name='firstName' as={Input} label='Nome' />
              <ErrorMessage
                component='span'
                name='firstName'
                className='validationInput'
              />
              <Field type='text' name='lastName' as={Input} label='Sobrenome' />
              <ErrorMessage
                component='span'
                name='lastName'
                className='validationInput'
              />
              <Field type='email' name='email' as={Input} label='E-mail' />
              <ErrorMessage
                component='span'
                name='email'
                className='validationInput'
              />
              <Field type='password' name='password' as={Input} label='Senha' />
              <ErrorMessage
                component='span'
                name='password'
                className='validationInput'
              />
              <Field
                type='password'
                name='confirmPassword'
                as={Input}
                label='Confirmar senha'
              />
              <ErrorMessage
                component='span'
                name='confirmPassword'
                className='validationInput'
              />
              <div className='row'>
                <label htmlFor='instructor' className='checkboxLabel'>
                  É instrutor?
                </label>
                <Field type='checkbox' name='instructor' id='instructor' />
              </div>
              {values.instructor && (
                <>
                  <Field
                    type='text'
                    name='securityKey'
                    as={Input}
                    label='Chave de segurança para instrutores'
                  />
                  <ErrorMessage
                    component='span'
                    name='securityKey'
                    className='validationInput'
                  />
                </>
              )}
              <Button>CADASTRAR</Button>
            </Form>
          )}
        </Formik>

        <Link to='/login' className='signinTxt'>
          Fazer o login
        </Link>
      </div>
    </div>
  );
}
