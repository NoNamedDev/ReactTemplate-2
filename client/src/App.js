import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import Footer from './Components/Footer';
import TermsOfService from './Components/TermsOfService'


/*
    TODO-list :
                * add custom font for cards
                * find/add other images to home-page
                * Make /menu-page
                * Make /contact-page
                * Make /tos page
                * OK-?change? schedule
                * OK custom_font_2 to all comps
                * OK footer
                * OK navbar
                * OK add things after the introduction-hero ( inside Home.jsx) [schedule !]
*/



function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/menu' exact element={<Menu/>} />
        <Route path='/contact' exact element={<Contact/>} />
        <Route path='/tos' exact element={<TermsOfService/>} />
      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}

export default App;
