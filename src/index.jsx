import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import GlobalStyle from './utils/style/GlobalStyle';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import { OfficeProvider } from './utils/contexts/contexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>
          <Router>
               <OfficeProvider>
                    <GlobalStyle />
                    <Header />
                    <Routes>
                         <Route path="/" element={<Home />} />
                    </Routes>
               </OfficeProvider>
          </Router>
     </React.StrictMode>
);
