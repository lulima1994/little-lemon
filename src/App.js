import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
