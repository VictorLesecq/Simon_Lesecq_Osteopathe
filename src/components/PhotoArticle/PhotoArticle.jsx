import './PhotoArticle.scss'

function PhotoArticle(props) {
     const { side, url } = props
     return (
          <div className={`photo-article__container image__side-${side}`}>
               <div>
                    <img
                         className="photo-article__image"
                         alt={url.message}
                         src={url.src}
                         srcSet={url.srcset}
                         sizes="(min-width:768px) 30vw, 80vw"
                    />
               </div>
               <div className="photo-article__content">{props.children}</div>
          </div>
     )
}

export default PhotoArticle
