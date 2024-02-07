import './Card.scss';

function Card(props) {
     const { subTitle, picto, children } = props;
     return (
          <div className="card">
               <img src={picto.src} alt="" />
               <div className="picto"></div>
               {subTitle ? <p className="card__subtitle">{subTitle}</p> : null}
               {children}
          </div>
     );
}

export default Card;
