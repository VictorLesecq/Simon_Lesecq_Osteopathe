import './Offices.scss';
import { useOffice } from '../../utils/hooks/hooks';

function Offices(props) {
     const { offices } = props;
     const { selectedOffice, handleOfficeChange } = useOffice();

     return (
          <div className="offices">
               {offices.map((office, index) => (
                    <div key={`${office.zipCode} ${index}}`}>
                         <input
                              type="radio"
                              className={`office ${
                                   office.id === selectedOffice
                                        ? ' office-selected'
                                        : ''
                              }`}
                              id={office.id}
                              checked={office.id === selectedOffice}
                              onChange={() => handleOfficeChange(office.id)}
                         />
                         <label className="office pointer" htmlFor={office.id}>
                              {office.adress}, {office.zipCode} {office.town}
                         </label>
                    </div>
               ))}
          </div>
     );
}

export default Offices;
