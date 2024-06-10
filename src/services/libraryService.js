import axios from "axios";

export const getAllLibraries = async () => {
  const { data } = await axios.get("https://localhost:7098/api/Library/all")
  return data
}

