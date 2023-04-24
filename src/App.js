import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import Job from './Pages/Job';

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/job" element={<Job/>} />
        </Routes>
        </BrowserRouter>
      </ChakraProvider>
    
    </>
  );
}

export default App;
