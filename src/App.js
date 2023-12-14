import './App.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import View from './pages/View/View'
import Filter from './pages/Filter/Filter';
import User from './pages/User/User'
import Tarif from './pages/Tarif/Tarif'
import Pay from './pages/Pay/Pay'
import ToPay from './pages/ToPay/ToPay'
import PayDetail from './pages/PayDetail/PayDetail'
import Favorite from './pages/Favorite/Favorite'
import Add from './pages/Add/Add'
import AddNew from './pages/AddNew/AddNew'
import {Routes, Route} from "react-router-dom"
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/Protected';
import Vacation from './pages/Vacation/Vacation';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />       
        <Route path='/contact' element={<Protected><Contact/></Protected>} />
        <Route path='/filter' element={<Protected><Filter/></Protected>} />
        <Route path='/view' element={<Protected><View/></Protected>} />
        <Route path='/user' element={<Protected><User/></Protected>} />
        <Route path='/tarif' element={<Protected><Tarif/></Protected>} />
        <Route path='/pay' element={<Protected><Pay/></Protected>} />
        <Route path='/to-pay' element={<Protected><ToPay/></Protected>} />
        <Route path='/pay-detail' element={<Protected><PayDetail/></Protected>} />
        <Route path='/favorite' element={<Protected><Favorite/></Protected>} />
        <Route path='/add' element={<Protected><Add/></Protected>} />
        <Route path='/add-new' element={<Protected><AddNew/></Protected>} />
        <Route path='/vacation' element={<Protected><Vacation/></Protected>}/>
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
