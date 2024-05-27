import React, { useEffect, useState } from 'react'
import style from './Favoutites.module.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Book from '../../components/Book/Book'

function Favoutites() {

  const [allItems, setAllItems] = useState([])

  useEffect(() => {
    const getAllItems = () => {
      const items = []
      for (let i=0; i<localStorage.length; i++){
        const key = localStorage.key(i)
        const item = localStorage.getItem(key)
        const parsedItem = JSON.parse(item)
        items.push(parsedItem.image)
      }
      setAllItems(items)
    }
    getAllItems()
  }, [allItems])

  return (
    <div className={style['favourite']}>
      <Sidebar />
      <div className={style['content']}>
        {allItems.map((book) => (
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

export default Favoutites