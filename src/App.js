import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import SingleSports from './pages/single/SingleSports';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/sport/:sportId" element={<SingleSports></SingleSports>}></Route>
       {/* <Route path="/" element={<Dashboard></Dashboard>}>
        <Route path="" element={<Maindashboard></Maindashboard>}></Route>
        <Route path="cricket/news" element={<Crickets></Crickets>}></Route>
       </Route> */}
      </Routes>
      <Footer></Footer>
      
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
