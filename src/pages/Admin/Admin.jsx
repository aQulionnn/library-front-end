import React, { useEffect, useState } from 'react'
import style from './Admin.module.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout'
import { getBooksByLibrary } from '../../services/bookService';
import Book from '../../components/Book/Book';

function Admin() {
  const { id } = useParams()
  const [books, setBooks] = useState([{}])
  const [newBook, setNewBook] = useState({
    name: '',
    description: '',
    author: '',
    category: '',
    available: true,
    image: null,
    libraryId: parseInt(id),
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setNewBook({
        ...newBook,
        image: files[0]
      });
    } else {
      setNewBook({
        ...newBook,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload the image first
    let imageFileName = '';
    if (newBook.image) {
      const formData = new FormData();
      formData.append('file', newBook.image);
      
      try {
        const uploadResponse = await axios.post('https://localhost:7172/api/Image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        imageFileName = uploadResponse.data.fileName;
      } catch (error) {
        console.error('Error uploading image', error);
        return;
      }
    }

    // Create the key
    const bookData = {
      name: newBook.name,
      description: newBook.description,
      author: newBook.author,
      category: newBook.category,
      available: true,
      image: imageFileName,
      libraryId: parseInt(newBook.libraryId)
    };

    try {
      const response = await axios.post('https://localhost:7172/api/Book', bookData);
      console.log('Key created successfully', response.data);
    } catch (error) {
      console.error('Error creating key', error);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await getBooksByLibrary(id)
      setBooks(data)
    }
    
    fetch()
  }, [])

  return (
    <div className={style['admin']}> 
      <header>
        <h2>Кітапхана басқару жүйесу</h2>
        <div>
          <p>Шығу</p>
          <LogoutIcon />
        </div>
      </header>
      <div className={style['content']}>
        <div className={style['left']}>
          <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Кітап атауы' onChange={handleChange}/>
            <input type="text" name='description' placeholder='Сипаттама' onChange={handleChange}/>
            <select name="" id="">
              <option value="">Автор</option>
              <option value="1">Альбер Камю</option>
              <option value="2">Фридрих Ницше</option>
              <option value="3">Джордж Оруэл</option>          
            </select>
            <select name="" id="">
              <option value="">Жанр</option>
              <option value="1">Проза</option>
              <option value="2">Роман</option>
              <option value="3">Эссе</option>          
            </select>
            <input type="file" name='image' onChange={handleChange}/>
            <button type='submit'>Құру</button>
          </form>
        </div>
        <div className={style['right']}>
          {books.map((book) => (
            <Book 
              key={book.id}
              name={book.name}
              image={book.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Admin