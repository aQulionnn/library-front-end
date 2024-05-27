import React, { useState } from 'react'
import style from './Book.module.css'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'

function Book(props) {

  const [mark, setMark] = useState(false)

  function favourite() {
    if (mark) {
      setMark(false)
      localStorage.removeItem(`${props.name}`)
    }
    else {
      setMark(true)
      localStorage.setItem(`${props.name}`, `${props.image}`)
    }
  }

  return (
    <div className={style['book']} key={props.id}>
      <BookmarkBorderOutlinedIcon className={!mark ? style['mark'] : style['favourite']} onClick={favourite} />
      <picture>
        <img src={"https://localhost:7172/api/Image/" + props.image} alt="" />
      </picture>
      {/* <span>{props.name}</span> */}
    </div>
  )
}

export default Book