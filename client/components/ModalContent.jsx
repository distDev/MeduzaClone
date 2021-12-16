import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logoutUser } from '../store/slices/authSlice';
import { Magic } from 'magic-sdk';
import { useEffect } from 'react';

const ModalContent = ({ setSuccess, email, setEmail, mag }) => {
 

 
  const dispatch = useDispatch();


  const handleSubmit = async () => {
    try {
      await mag.auth.loginWithMagicLink({ email });
      dispatch(loginUser({ email }));
      setSuccess(true);
    } catch (error) {
      console.log('ошибка авторизации: ' + error);
      dispatch(logoutUser());
    }
  };


  return (
    <div className='modal-login'>
      <div className='modal-login-content'>
        <h3>Читать «Медузу» удобнее, если у вас есть профиль</h3>
        <p>
          Вы сможете сохранять материалы в закладки, а еще слушать подкасты с
          того же места на любом устройстве. Плюс видеть историю прочтений
        </p>
        <div className='modal-login-form'>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            placeholder='Электронная почта'
          />
          <button type='submit' onClick={handleSubmit}>
            ВОЙТИ
          </button>
          <p className='modal-polit'>
            Нажимая на кнопку «Войти», вы соглашаетесь <br /> с правилами
            обработки данных
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
