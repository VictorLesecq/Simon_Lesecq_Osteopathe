import VectorRight from '../../assets/images/VectorRight.png';
import VectorLeft from '../../assets/images/VectorLeft.png';
import './TextCarrousel.scss';
import {
     useMemo,
     useEffect,
     useLayoutEffect,
     useState,
     useRef,
     useCallback,
} from 'react';

function TextCarrousel(props) {
     const { children } = props;
     const oneText = children.length === 1;

     const containerRef = useRef();
     const [current, setCurrent] = useState(1);
     const [translateX, setTranslateX] = useState(0);

     const actionHandler = useCallback(
          (mode) => {
               containerRef.current.style.transitionDuration = '400ms';
               if (mode === 'prev') {
                    if (current <= 1) {
                         setTranslateX(0);
                         setCurrent(children.length);
                    } else {
                         setTranslateX(
                              containerRef.current.clientWidth * (current - 1)
                         );
                         setCurrent((prev) => --prev);
                    }
               } else if (mode === 'next') {
                    if (current >= children.length) {
                         setTranslateX(
                              containerRef.current.clientWidth *
                                   (children.length + 1)
                         );
                         setCurrent(1);
                    } else {
                         setTranslateX(
                              containerRef.current.clientWidth * (current + 1)
                         );
                         setCurrent((prev) => ++prev);
                    }
               }
          },
          [current, children]
     );

     useEffect(() => {
          const transitionEnd = () => {
               if (current === 1) {
                    containerRef.current.style.transitionDuration = '0ms';
                    setTranslateX(containerRef.current.clientWidth * current);
               }

               if (current === children.length) {
                    containerRef.current.style.transitionDuration = '0ms';
                    setTranslateX(
                         containerRef.current.clientWidth * children.length
                    );
               }
          };

          document.addEventListener('transitionend', transitionEnd);

          return () => {
               document.removeEventListener('transitionend', transitionEnd);
          };
     }, [current, children]);

     const slides = useMemo(() => {
          if (children.length > 1) {
               let items = children.map((elem, index) => (
                    <li key={index}>
                         {elem}
                         <span className="NumSlide">
                              {index + 1}/{children.length}
                         </span>
                    </li>
               ));

               return [
                    <li key={children.length + 1}>
                         {children[children.length - 1]}
                         <span className="NumSlide">
                              {children.length}/{children.length}
                         </span>
                    </li>,
                    ...items,
                    <li key={children.length + 2}>
                         {children[0]}
                         <span className="NumSlide">1/{children.length}</span>
                    </li>,
               ];
          }

          setCurrent(0);
          return <li>{children}</li>;
     }, [children]);

     useEffect(() => {
          const handleWindowResize = () => {
               setTranslateX(containerRef.current.clientWidth * current);
          };
          window.addEventListener('resize', handleWindowResize);
          return () => {
               window.removeEventListener('resize', handleWindowResize);
          };
     }, [current]);

     //Position first element, this will rendre only ones
     useLayoutEffect(() => {
          setTranslateX(containerRef.current.clientWidth * current);
          // eslint-disable-next-line
     }, []);

     return (
          <div className="Carrousel">
               <ul
                    className="Carrousel_Container"
                    ref={containerRef}
                    style={{ '--translateX': `-${translateX}px` }}
               >
                    {slides}
               </ul>

               {!oneText ? (
                    <div>
                         <button
                              className="Carousel_btn btn_left"
                              onClick={() => actionHandler('prev')}
                         >
                              <img width="15px" src={VectorLeft} alt="" />
                         </button>
                         <button
                              className="Carousel_btn btn_right"
                              onClick={() => actionHandler('next')}
                         >
                              <img width="15px" src={VectorRight} alt="" />
                         </button>
                    </div>
               ) : null}
          </div>
     );
}

export default TextCarrousel;
