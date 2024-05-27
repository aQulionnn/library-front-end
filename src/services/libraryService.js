import axios from "axios";

export const getAllLibraries = async () => {
  const { data } = await axios.get("https://localhost:7172/api/Library/all")
  return data
}

export const getLibraryById = async (id) => {
  const { data } = await axios.get("https://localhost:7172/api/Library/" + id)
  return data
}

export const createLibrary = async (library) => {
  const { data } = await axios.post("https://localhost:7172/api/Library", library)
  return data
}

export const updateLibrary = async (library) => {
  const { data } = await axios.put("https://localhost:7172/api/Library/" + library.id, library)
  return data;
}

export const deleteLibrary = async (id) => {
  const { data } = await axios.delete("https://localhost:7172/api/Library/" + id)
  return data
}