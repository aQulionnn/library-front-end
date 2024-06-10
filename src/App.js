import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Admin from './pages/Admin/Admin'
import Home from './pages/Home/Home'
import LibraryPage from './pages/Library/LibraryPage';
import AllAuthors from './pages/AllAuthors/AllAuthors'
import Author from './pages/Author/Author';
import Favoutites from './pages/Favoutites/Favoutites';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/admin/:id' element={<Admin />} />
          <Route path='/home' element={<Home />} />
          <Route path='/library' element={<LibraryPage />} />
          <Route path='/authors' element={<AllAuthors />} />
          <Route path='/author/:id' element={<Author />}/>
          <Route path='/favourites' element={<Favoutites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
