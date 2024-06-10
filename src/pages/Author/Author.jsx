import React, { useEffect, useState } from 'react'
import style from './Author.module.css'
import Book from '../../components/Book/Book'
import Sidebar from '../../components/Sidebar/Sidebar'
import { getBooksByAuthor } from '../../services/bookService'
import { useParams } from 'react-router-dom'
import Layout from '../../layout/Layout'

function Author() {

  const { id } = useParams()
  const [books, setBooks] = useState([{}])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetch = async () => {
      const data = await getBooksByAuthor(id)
      console.log(data)
      setBooks(data)
    }
    
    fetch()
  }, [])

  return (
    <Layout onChange={(e) => setSearch(e.target.value)}>
        {books.map((book) => (
          <Book
            key={book.id}
            name={book.name}
            image={book.image}
          />
        ))}
    </Layout>
  )
}

export default Author