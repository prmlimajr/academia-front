import React, { useState, useEffect, useCallback } from 'react';
import * as Yup from 'yup';
import * as DateFns from 'date-fns';
import Avatar from '../../../assets/img/account_box.svg';
import { FaCamera } from 'react-icons/fa';
import { Formik, Form, Field } from 'formik';
import Input from '../../../components/Input';

import './InstructorProfile.css';
import Checkbox from '../../../components/Checkbox';
import RadioButton from '../../../components/RadioButton';
import TextArea from '../../../components/TextArea';
import Button from '../../../components/Button';

const schema = Yup.object().shape({
  birthday: Yup.string().required('Favor informar a data de nascimento'),
  gender: Yup.string().required('Favor informar o gênero'),
  phone: Yup.string(),
  motivation: Yup.string().required('Favor informar a motivação'),
  healthCondition: Yup.string(),
  weight: Yup.number()
    .positive('Favor informar um peso válido')
    .required('Favor informar o peso atual'),
  height: Yup.number()
    .positive('Favor informar uma altura válida')
    .required('Favor informar a altura'),
  availability: Yup.number()
    .positive('Favor informar um valor válido')
    .required(
      'Favor informar quantos dias na semana tem disponível para treinos'
    ),
});

export default function Profile() {
  const initialValues = {
    birthday: null,
    gender: null,
    phone: null,
    motivation: null,
    healthCondition: null,
    weight: null,
    height: null,
    availability: null,
  };

  const handleSubmit = useCallback(async (data) => {
    console.log('data', data);
    try {
      await schema.validate(data, { abortEarly: false });
      // login(email, password);
      // history.push('/profile');
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className='profilebg'>
      <div className='signinContainer'>
        <div className='profileContainer'>
          <div className='userPicture'>
            <div className='avatarContainer'>
              <img src={Avatar} alt='User Picture' className='avatar' />
            </div>

            <button className='avatarBtn'>Apagar foto</button>
          </div>

          <div className='userData'>
            <h1 className='userName'>Felipe Monteiro</h1>

            <Formik
              initialValues={initialValues}
              onSubmit={(data) => handleSubmit(data)}
              validationSchema={schema}
            >
              <Form className='profileForm'>
                <Field
                  type='date'
                  label='Data de nascimento'
                  name='birthday'
                  as={Input}
                />
                <label className='genderLabel'>
                  Gênero
                  <div className='row'>
                    <Field
                      type='radio'
                      id='male'
                      name='gender'
                      value='male'
                      label='Masculino'
                      as={RadioButton}
                    />

                    <Field
                      type='radio'
                      id='female'
                      name='gender'
                      value='female'
                      label='Feminino'
                      as={RadioButton}
                    />
                  </div>
                </label>

                <Field type='text' label='Telefone' name='phone' as={Input} />
                <Field
                  type='text'
                  label='Número de matrícula'
                  name='studentId'
                  as={Input}
                />
              </Form>
            </Formik>
          </div>
        </div>
        <Button>ATUALIZAR PERFIL</Button>
      </div>
    </div>
  );
}
