import { Container, Navbar } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import NotFoundPage from './Pages/NotFoundPage';

export default function App() {
  return (
    <Container>
      <Navbar expand='lg' variant='light' bg='light'>
        <Container>
          <Link className='nav-link' to='/'>Home</Link>
          <Link className='nav-link' to='/about'>About Me</Link>
        </Container>
      </Navbar><br />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}
