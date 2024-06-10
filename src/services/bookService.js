import axios from "axios";

export const getAllBooks = async () => {
  const { data } = await axios.get("https://localhost:7098/api/Book/all")
  return data
}

export const getBooksByAuthor = async (id) => {
  const { data } = await axios.get('https://localhost:7098/api/Book/author/' + id)
  return data
}

export const getBooksByLibrary = async (id) => {
  const { data } = await axios.get('https://localhost:7098/api/Book/library/' + id)
  return data
}