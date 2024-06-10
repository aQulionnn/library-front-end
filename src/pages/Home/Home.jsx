import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { getAllBooks } from '../../services/bookService'
import Book from '../../components/Book/Book'
import Layout from '../../layout/Layout'
import Input from '../../components/Input/Input'

function Home() {

  const [books, setBooks] = useState([{}])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllBooks()
      setBooks(data)
    }
    
    fetch()
  }, [])

  return (
    <Layout onChange={(e) => setSearch(e.target.value)}>
      {books.filter(book => book.name != '').map((book) => (
          <Book
            key={book.id}
            name={book.name}
            image={book.image}
          />
        ))}
    </Layout>
  )
}

export default Home