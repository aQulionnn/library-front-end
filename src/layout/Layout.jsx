import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import style from './Layout.module.css'
import Input from '../components/Input/Input'

function Layout({children, onChange}) {
  return (
    <div className={style['main']}>
      <Sidebar />
      <div className={style['content']}>
        <div className={style['top']}><Input onChange={onChange}/></div>
        <div className={style['bottom']}>{children}</div>
      </div>
    </div>
  )
}

export default Layout