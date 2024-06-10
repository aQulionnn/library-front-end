import React, { useEffect, useState } from 'react'
import style from './LibraryPage.module.css'
import Layout from '../../layout/Layout'
import { getAllLibraries } from '../../services/libraryService'
import Book from '../../components/Book/Book'

function Library() {

  const [libraries, setLibraries] = useState([{}])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetch = async() => {
      const data = await getAllLibraries()
      setLibraries(data)
    }

    fetch()
  }, [])

  return (
    <Layout onChange={(e) => setSearch(e.target.value)}>
      {libraries.map((library) => (
          <div className={style['content']}>
            <img src="/assets/library.jpg" alt="" />
            <span>{library.name}</span>
          </div>
        ))}
    </Layout>
  )
}

export default Library