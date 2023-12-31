import './Card.scss';

function Card(props) {
     const { title, subTitle, picto, children } = props;
     return (
          <div className="card" data-icon={picto}>
               <h3 className="card__title">{title}</h3>
               {subTitle ? <p className="card__subtitle">{subTitle}</p> : null}
               {children}
          </div>
     );
}

export default Card;
