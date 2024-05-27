import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { getAllBooks } from '../../services/bookService'
import Book from '../../components/Book/Book'

function Home() {

  const [books, setBooks] = useState([{}])

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllBooks()
      console.log(data)
      setBooks(data)
    }
    

    fetch()
  }, [])

  return (
    <div className={style['home']}>
      <Sidebar className={style['sidebar']}/>
      <div className={style['content']}>
        {books.map((book) => (
          <Book
            key={book.id}
            name={book.name}
            image={book.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Home