import './LinkButton.scss';

function LinkButton(props) {
     const { link, type, children, size } = props;

     return (
          <>
               <a
                    className={`button-link button-link__${type} button-link__${size}`}
                    rel="noreferrer"
                    href={link}
                    target="blank"
               >
                    {children}
               </a>
          </>
     );
}

export default LinkButton;
