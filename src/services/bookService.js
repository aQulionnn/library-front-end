import axios from "axios";

export const getAllBooks = async () => {
  const { data } = await axios.get("https://localhost:7172/api/Book/all")
  return data
}

export const getBookById = async (id) => {
  const { data } = await axios.get("https://localhost:7172/api/Book/" + id)
  return data
}

export const createBook = async (book) => {
  const { data } = await axios.post("https://localhost:7172/api/Book", book)
  return data
}

export const updateBook = async (book) => {
  const { data } = await axios.put("https://localhost:7172/api/Book/" + book.id, book)
  return data;
}

export const deleteBook = async (id) => {
  const { data } = await axios.delete("https://localhost:7172/api/Book/" + id)
  return data
}