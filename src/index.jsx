import React from 'react';
import ReactDOM from 'react-dom/client';
import {
     BrowserRouter as Router,
     Routes,
     Route,
     useLocation,
} from 'react-router-dom';

import './index.scss';
import GlobalStyle from './utils/style/GlobalStyle';
import Home from './pages/Home/Home';
import Mention from './pages/Legislation/Mention';
import Header from './components/Header/Header';
import { OfficeProvider } from './utils/contexts/contexts';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';

function ScrollToTop() {
     const { pathname } = useLocation();

     // always return at the top when you change page
     React.useEffect(() => {
          window.scrollTo(0, 0);
     }, [pathname]);

     return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>
          {/* regarder ce qu'est le strictMode */}
          <Router>
               <OfficeProvider>
                    <GlobalStyle />
                    <ScrollToTop />
                    <Header />
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route
                              path="/mentions-legales"
                              element={<Mention />}
                         />

                         <Route path="*" element={<Error />} />
                    </Routes>
                    <Footer />
               </OfficeProvider>
          </Router>
     </React.StrictMode>
);
