import css from './ImageCard.module.css';

const ImageCard = ({ image, openModal}) => {
 
  const handleClick = () => {
  openModal(image);
}
  
  return (
      <div>
          <img onClick={handleClick} className={css.ImageCard} src={image.urls.small} alt={image.alt_description} />		
      </div>
  )
}

export default ImageCard