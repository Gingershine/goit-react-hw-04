import ImageCard from "../ImageCard/ImageCard";
import css from './ImageGallery.module.css';


const ImageGallery = ({data}) => {
  return (
      <div>
          <ul className={css.list}>
	{/* Набір елементів списку із зображеннями */}
	<li>
		<ImageCard data={data} />
	</li>
</ul>
    </div>
  )
}

export default ImageGallery