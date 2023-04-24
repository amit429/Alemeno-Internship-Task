import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Job from './Pages/Job';
import Application from './Pages/Application';

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/job" element={<Job/>} />
          <Route path="/application" element={<Application/>} />
        </Routes>
        </BrowserRouter>
      </ChakraProvider>
    
    </>
  );
}

export default App;
