import React, {useCallback } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import './Quiz.css';
import RadioButton from '../../components/RadioButton';
import Button from '../../components/Button';

const schema = Yup.object().shape({
 
  question: Yup.string().required('Essa pergunta é obrigatória!'),
  question2: Yup.string().required('Essa pergunta é obrigatória!'),
  question3: Yup.string().required('Essa pergunta é obrigatória!'),
  question4: Yup.string().required('Essa pergunta é obrigatória!'),
  question5: Yup.string().required('Essa pergunta é obrigatória!'),
  question6: Yup.string().required('Essa pergunta é obrigatória!'),
  question7: Yup.string().required('Essa pergunta é obrigatória!'),

 
 
});

export default function Quiz() {
  const initialValues = {
    question: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
  
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
          

          <div className='userData'>
            <h1 className='quizName'>Questionário Anamnese</h1>

            <Formik
              initialValues={initialValues}
              onSubmit={(data) => handleSubmit(data)}
              validationSchema={schema}
            >
              <Form className='profileForm'>
               
                <label className='genderLabel'>
                1. Algum médico já disse que você possui algum problema de coração e que só deveria
realizar atividade física supervisionado por profissionais de saúde? 

                  <div className='row'>
                    <Field
                      type='radio'
                      id='sim'
                      name='question'
                      value='sim'
                      label='Sim'
                      as={RadioButton}
                    />

                    <Field
                      type='radio'
                      id='nao'
                      name='question'
                      value='nao'
                      label='Não'
                      as={RadioButton}
                    />
                  </div>
                </label>

                <label className='quizLabel'>
                2. Você sente dores no peito quando pratica atividade física?

                  <div className='row'>
                    <Field
                      type='radio'
                      id='sim'
                      name='question2'
                      value='sim'
                      label='Sim'
                      as={RadioButton}
                    />

                    <Field
                      type='radio'
                      id='nao'
                      name='question2'
                      value='nao'
                      label='Não'
                      as={RadioButton}
                    />
                  </div>
                </label>
                
                <label className='quizLabel'>
                3. No último mês, você sentiu dores no peito quando praticou atividade física? 

                  <div className='row'>
                    <Field
                      type='radio'
                      id='sim'
                      name='question3'
                      value='sim'
                      label='Sim'
                      as={RadioButton}
                    />

                    <Field
                      type='radio'
                      id='nao'
                      name='question3'
                      value='nao'
                      label='Não'
                      as={RadioButton}
                    />
                  </div>
                </label>
                
                <label className='quizLabel'>
                4. Você apresenta desequilíbrio devido à tontura e/ ou perda de consciência? 

                  <div className='row'>
                    <Field
                      type='radio'
                      id='sim'
                      name='question4'
                      value='sim'
                      label='Sim'
                      as={RadioButton}
                    />

                    <Field
                      type='radio'
                      id='nao'
                      name='question4'
                      value='nao'
                      label='Não'
                      as={RadioButton}
                    />
                  </div>
                </label>
                
                <label className='quizLabel'>
                5. Você possui algum problema ósseo ou articular que poderia ser piorado pela atividade
física? 

                  <div className='row'>
                    <Field
                      type='radio'
                      id='sim'
                      name='question5'
                      value='sim'
                      label='Sim'
                      as={RadioButton}
                    />

                    <Field
                      type='radio'
                      id='nao'
                      name='question5'
                      value='nao'
                      label='Não'
                      as={RadioButton}
                    />
                  </div>
                </label>
                
                <label className='quizLabel'>
                6. Você toma atualmente algum medicamento para pressão arterial e/ou problema de
coração? 

                  <div className='row'>
                    <Field
                      type='radio'
                      id='sim'
                      name='question6'
                      value='sim'
                      label='Sim'
                      as={RadioButton}
                    />

                    <Field
                      type='radio'
                      id='nao'
                      name='question6'
                      value='nao'
                      label='Não'
                      as={RadioButton}
                    />
                  </div>
                </label>
                
                <label className='quizLabel'>
                7. Sabe de alguma outra razão pela qual você não deve praticar atividade física?

                  <div className='row'>
                    <Field
                      type='radio'
                      id='sim'
                      name='question7'
                      value='sim'
                      label='Sim'
                      as={RadioButton}
                    />

                    <Field
                      type='radio'
                      id='nao'
                      name='question7'
                      value='nao'
                      label='Não'
                      as={RadioButton}
                    />
                  </div>
                </label>
                  </Form>
            </Formik>
               
               
              

           
          </div>
        </div>
        <Button>ATUALIZAR PERFIL</Button>
      </div>
    </div>
  );
}
