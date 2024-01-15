import React, { useState, useEffect } from 'react';

import './Header.scss';

function Header() {
     const navList = ['accueil', 'questions', 'tarif', 'contact', 'pour_qui'];
     const [scrolled, setScrolled] = useState(false);
     const [isOpen, setIsOpen] = useState(false);
     const [activeSection, setActiveSection] = useState(null);

     const handleScroll = () => {
          if (window.scrollY > 0) {
               setScrolled(true);
          } else {
               setScrolled(false);
          }

          const sections = document.querySelectorAll('.index');

          sections.forEach((section, index) => {
               const sectionTop = section.offsetTop;
               const sectionHeight = section.clientHeight;
               const scrollPosition = window.scrollY + 1;

               if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionTop + sectionHeight 
               ) {
                    setActiveSection(index);
               }
          });
     };

     useEffect(() => {
          window.addEventListener('scroll', handleScroll);

          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []);

     const toggleMenu = () => {
          setIsOpen(!isOpen);
     };

     return (
          <header id="top-header" className={`${scrolled ? 'scrolled' : ''}`}>
               <div className={`top-header-container  ${isOpen ? 'open' : ''}`}>
                    <div className="top-header-container__logo">
                         <h2>
                              Cabinet{' '}
                              <span className="top-header-container__logo_name">
                                   Lesecq
                              </span>
                         </h2>
                    </div>
                    <div className="nav-button pointer" onClick={toggleMenu}>
                         <span className="nav-button__icon"></span>
                    </div>
                    <nav className="navbar">
                         <ul>
                              {navList.map((title, index) => (
                                   <li key={`${title} ${index}}`}>
                                        <a
                                             className={`navbar__link${
                                                  activeSection === index
                                                       ? ' active'
                                                       : ''
                                             }`}
                                             tabIndex={index + 100}
                                             href={`#${title}`}
                                             onClick={(e) => setIsOpen(false)}
                                        >
                                             {title.split('_').join(' ')}
                                        </a>
                                   </li>
                              ))}
                         </ul>
                    </nav>
               </div>
          </header>
     );
}

export default Header;
