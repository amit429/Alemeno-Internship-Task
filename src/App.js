import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import CourseDetails from './Pages/CourseDetails';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
        <Routes>                          
          <Route path="/" element={<Landing/>} />
          <Route path="/course/:id" element={<CourseDetails/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
        </BrowserRouter>
      </ChakraProvider>
    
    </>
  );
}

export default App;
