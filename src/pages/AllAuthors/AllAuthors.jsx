import React, { useEffect, useState } from 'react'
import style from './AllAuthors.module.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import { getAllAuthors } from '../../services/authorService'


function AllAuthors() {

  const [auhtors, setAuhtors] = useState([{}])
  const [clicked, setClicked] = useState(null)
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  function open(id) {
    if (clicked === id) setClicked(null);
    else setClicked(id);
  }

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllAuthors()
      setAuhtors(data)
    }

    fetch()
  }, [])

  return (
    <Layout onChange={(e) => setSearch(e.target.value)}>
      {auhtors.map((author) => (
        <div 
          key={author.id}
          className={clicked !== author.id ? style['card'] : style['description']} 
          onClick={() => open(author.id)} 
          onDoubleClick={() => navigate(`/author/${author.id}`)}
        >
          <img src="/assets/authors/camus.jpg" alt="" />
          {clicked === author.id && <p>{author.information}</p>}
          {!clicked !== author.id && <p>{author.name}</p>}
        </div>
      ))}
    </Layout>
  )
}

export default AllAuthors