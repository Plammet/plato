import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import MainPage from './pages/MainPage/MainPage';
import StartPage from './pages/StartPage/StartPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 로그인 정보 있을 때 */}
          <Route path="/main" element={<MainPage/>}/>

          {/* 로그인 정보 없을 때 */}
          <Route path="/" element={<StartPage/>}/>

          <Route path="/naverLogin" element={<MainPage/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
