import React from 'react';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { HomePage, PostPage } from './pages';
import Header from './components/Header';
const App = () => {
  return (
    // Defined routers here..

    <BrowserRouter>
      <Header />
      <main className=' min-h-[calc(100vh-73px)] sm:p-8 px-4 py-8 w-full bg-[#f9fafe] '>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create-post' element={<PostPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
