import React, { useState } from 'react'
import style from './Admin.module.css'
import axios from 'axios';

function Admin() {

  const [newBook, setNewBook] = useState({
    name: '',
    description: '',
    author: '',
    category: '',
    available: true,
    image: null,
    libraryId: 3,
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

  return (
    <div className={style['admin']}> 
      <header></header>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Название' onChange={handleChange}/>
        <input type="text" name='description' placeholder='Описание' onChange={handleChange}/>
        <input type="text" name='author' placeholder='Автор' onChange={handleChange}/>
        <input type="text" name='category' placeholder='Жанр' onChange={handleChange}/>
        <input type="file" name='image' onChange={handleChange}/>
        <button type='submit'>Создать</button>
      </form>
    </div>
  )
}

export default Admin