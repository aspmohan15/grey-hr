import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom'
import Auth from './components/authendication/Auth';
import Testing from './components/Testing';
import Register from './components/authendication/Register.js/Register';
import { useSelector } from 'react-redux';
function App() {
  const data = useSelector(state => state.auth)
  console.log(data);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Testing />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/empinfo' element={<Main />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}


export default App;
