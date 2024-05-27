import React, { useEffect, useState } from 'react'
import style from './Author.module.css'
import Book from '../../components/Book/Book'
import Sidebar from '../../components/Sidebar/Sidebar'
import { getAllBooks } from '../../services/bookService'

function Author() {

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
    <div className={style['author']}>
      <Sidebar />
      <div className={style['content']}>
        {books.filter(book => book.author == 'Альбер Камю').map((book) => (
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

export default Author