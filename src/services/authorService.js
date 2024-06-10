import axios from "axios";

export const getAllAuthors = async () => {
  const { data } = await axios.get('https://localhost:7098/api/Author/all')
  return data
}