import React, { useState } from 'react'
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [condition, setCondition] = useState(true)

  function user(e) {
    e.preventDefault()
    setCondition(false)
  }

  function library(e) {
    e.preventDefault()
    setCondition(true)
  }

  const navigate = useNavigate()

  return (
    <div className={style['login']}>
      <div className={style['left-section']}>
        <form action="">
          <h1>Log In</h1>
          <input type="text" placeholder='Почта' />
          <input type="text" placeholder='Пароль' />
          <p>Забыли пароль?</p>
          <button onClick={() => navigate('/admin')}>LOG IN</button>
        </form>
      </div>
      <div className={style['right-section']}>
        <form action="">
          <h1>Log In</h1>
          <input type="text" placeholder='Имя' />
          <input type="text" placeholder='Телефон' />
          <button onClick={() => navigate('/home')}>LOG IN</button>
        </form>
      </div>
      <div className={condition ? style['fixed-user'] : style['fixed-library']}>
        {condition &&
          <form>
            <h1>Войти как пользователь</h1>
            <p>Я хочу просматривать каталог книг</p> 
            <button onClick={user}>LOG IN</button>
          </form>
        }
        {!condition &&
          <form>
            <h1>Войти от имени библиотеки</h1>
            <p>Я хочу пользоваться системой управления книгами</p> 
            <button onClick={library}>LOG IN</button>
          </form>
        }   
      </div>
    </div>
  )
}

export default Login