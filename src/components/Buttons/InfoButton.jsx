import './InfoButton.scss';

function InfoButton(props) {
     const { side, children } = props;

     return (
          <div className={`info__container info__container-${side}`}>
               <div className="info__picto">i</div>
               <div className="info__message">{children}</div>
          </div>
     );
}

export default InfoButton;
