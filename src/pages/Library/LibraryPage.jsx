import React, { useEffect, useState } from 'react'
import style from './LibraryPage.module.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { getAllLibraries } from '../../services/libraryService'

function Library() {

  const [library, setLibrary] = useState([{}])

  useEffect(() => {
    const fetch = async() => {
      const data = await getAllLibraries()
      setLibrary(data)
    }

    fetch()
  }, [])

  return (
    <div className={style['library']}>
      <Sidebar />  
      <div className={style['content']}>
        <div>
          <img src="/assets/library.jpg" alt="" />
          <span>Библиотека</span>
        </div>
      </div>
    </div>
  )
}

export default Library