import React from 'react'
import style from './Sidebar.module.css'
import BookOutlinedIcon from '@mui/icons-material/BookOutlined'
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'

function Sidebar() {

  const navigate = useNavigate()

  return (
    <div className={style['sidebar']}>
      <div className={style['book']} onClick={() => navigate('/home')}>
        <BookOutlinedIcon />
        <p>Кітаптар</p>
      </div>
      <div className={style['library']} onClick={() => navigate('/library')}>
        <LocalLibraryOutlinedIcon />
        <p>Кітапханалар</p>
      </div>
      <div className={style['author']} onClick={() => navigate('/authors')}>
        <PersonOutlineOutlinedIcon />
        <p>Авторлар</p>
      </div>
      {/* <div className={style['genre']}>
        <CategoryOutlinedIcon />
        <p>Жанрлар</p>
      </div> */}
      {/* <div onClick={() => navigate('/favourites')}>
        <BookmarkBorderOutlinedIcon />
        <p>Избранные</p>
      </div> */}
      <hr />
      <div className={style['logout']} onClick={() => navigate('/')}>
        <LogoutIcon />
        <p>Выйти</p>
      </div>
    </div>
  )
}

export default Sidebar