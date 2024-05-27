import React, { useState } from 'react'
import style from './AllAuthors.module.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'

function AllAuthors() {

  const [clicked, setClicked] = useState(false)

  const navigate = useNavigate()

  function open() {
    if (clicked) setClicked(false)
    else setClicked(true)
  }

  return (
    <div className={style['author']}>
      <Sidebar />
      <div className={style['content']}>
        <div className={!clicked ? style['card'] : style['description']} onClick={open} onDoubleClick={() => navigate('/author')}>
          <img src="/assets/camus.jpg" alt="" />
          {clicked && <p>французский писатель и философ, представитель экзистенциализма. 
            Лауреат Нобелевской премии 
            по литературе 1957 года.</p>}
          {!clicked && <p>Альбер Камю</p>}
        </div>
      </div>
    </div>
  )
}

export default AllAuthors