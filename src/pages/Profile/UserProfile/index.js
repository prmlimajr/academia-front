import React, { useState, useEffect, useCallback } from 'react';
import * as Yup from 'yup';
import * as DateFns from 'date-fns';
import Avatar from '../../../assets/img/account_box.svg';
import { FaCamera } from 'react-icons/fa';
import { Formik, Form, Field } from 'formik';
import Input from '../../../components/Input';
import api from '../../../services/api'

import './UserProfile.css';
import Checkbox from '../../../components/Checkbox';
import RadioButton from '../../../components/RadioButton';
import TextArea from '../../../components/TextArea';
import Button from '../../../components/Button';
import { useHistory } from 'react-router-dom';

export default function Profile() {
  const [selectedImage, setSelectedImage] = useState(null);

  const initialValues = {
    first_name: null,
    surname: null,
    email: null,
    password: null,
    confirmPassword: null,
    birthday: null,
    gender: null,
    phone: null,
    motivation: null,
    healthCondition: null,
    weight: null,
    height: null,
    avatar: null
  };

  const history = useHistory();

  const handleSubmit = async (data) => {
    try {
      await api.post('/v2/athlete', {data});

      history.push('/');
    } catch (err) {
      console.log(err);
    }
  }

  function getBase64(file) {
    const reader = new FileReader();

    reader.addEventListener("load", function(evt) {
      setSelectedImage(evt.target.result);
    }); 
      
    reader.readAsDataURL(file);
 }

  const handleFile = (e) => {
    const file = e.target.files

    if (file.length > 0) {
      getBase64(e.target.files[0])
    }
  }

  return (
    <div className='profilebg'>
      <div className='signinContainer'>
        <div className='profileContainer'>
          <div className='userPicture'>
            <div className='avatarContainer'>
              <input type='file' id='avatar' name='avatar' onChange={e => handleFile(e)} />

              <label htmlFor='avatar' style={{ cursor: 'pointer' }}><img src={selectedImage ? selectedImage : Avatar} alt='User Picture' className='avatar' /></label>
            </div>

            <button className='avatarBtn' onClick={() => setSelectedImage(null)}>Apagar foto</button>
          </div>

          <div className='userData'>
            <Formik
              initialValues={initialValues}
              onSubmit={(data) => handleSubmit(JSON.stringify({...data, avatar: selectedImage}))}
            >
              <Form className='profileForm'>
                <Field
                  type='text'
                  label='Nome'
                  name='first_name'
                  as={Input}
                />
                <Field
                  type='text'
                  label='Sobrenome'
                  name='surname'
                  as={Input}
                />
                <Field
                  type='email'
                  label='Email'
                  name='email'
                  as={Input}
                />
                <Field
                  type='password'
                  label='Senha'
                  name='password'
                  as={Input}
                />
                <Field
                  type='password'
                  label='Confirmacao de Senha'
                  name='confirmPassword'
                  as={Input}
                />
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
                      value='Masculino'
                      label='Masculino'
                      as={RadioButton}
                    />

                    <Field
                      type='radio'
                      id='female'
                      name='gender'
                      value='Feminino'
                      label='Feminino'
                      as={RadioButton}
                    />
                  </div>
                </label>
                <Field
                  type='number'
                  min='0'
                  label='Peso'
                  name='weight'
                  as={Input}
                />
                <Field
                  type='number'
                  min='0'
                  label='Altura'
                  name='height'
                  as={Input}
                />
                <Field type='text' label='Telefone' name='phone' as={Input} />
                <Field
                  type='text'
                  label='Motivação'
                  name='motivation'
                  as={Input}
                />
                <Field
                  type='text'
                  label='Histórico de saúde/Lesões'
                  name='healthCondition'
                  as={TextArea}
                />
                <Button type='submit'>CADASTRAR USUARIO</Button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
