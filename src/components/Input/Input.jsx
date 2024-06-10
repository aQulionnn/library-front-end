import React from 'react'
import style from './Input.module.css'
import SearchIcon from '@mui/icons-material/Search'

function Input({onChange}) {
  return (
    <div className={style['container']}>
      <SearchIcon />
      <input type="text" placeholder='Іздеу' onChange={onChange}/>
    </div>
  )
}

export default Input