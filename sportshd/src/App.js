// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import channelGrid from './Components/channelGrid';
import ChannelGrid from './Components/ChannelGrid';
import Navbar from './Components/Navbar';
import Channel from './Components/Channel';


const App = () => {

  return (
    <BrowserRouter>
    <Navbar />
  <Routes>
    <Route element={<ChannelGrid />} path="/" exact />
    <Route element={<Channel />} path="/:url" />
  </Routes>
    </BrowserRouter>
  )
}

export default App;
