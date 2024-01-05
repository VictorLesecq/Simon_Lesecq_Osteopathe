import arrow from '../../assets/images/arrow_back_ios-24px 2.png';
import { useState } from 'react';
import './Collapse.scss';

function Collapse(props) {
     const { title, children } = props;
     const [isOpen, setIsOpen] = useState(false);
     return (
          <div
               className={
                    isOpen
                         ? 'collapse__container collapse__container-open'
                         : 'collapse__container'
               }
          >
               <div className="collapse__title">
                    {title}
                    <button onClick={() => setIsOpen(!isOpen)}>
                         <img width="15px" src={arrow} alt="flèche" />
                    </button>
               </div>
               <div className="collapse__content__container">
                    <div className="collapse__content__content">{children}</div>
               </div>
          </div>
     );
}
export default Collapse;
