import { SMALL_IMG_COVER_BASE_URL } from '../../config.js'
import {
	ListItemContainer,
	ListItemImg,
	ListItemTitle,
} from './StyledTVShowListItem'
//import s from './style.module.css'

const MAX_TITLE_LENGTH = 20

/* const TVShowListItem = ({ tvShow, onClick }) => {
	const onClick_ = () => {
		onClick(tvShow)
	}

	return (
		<div onClick={onClick_} className={s.container}>
			<img
				alt={tvShow.name}
				src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
				className={s.img}
			/>
			<div className={s.title}>
				{tvShow.name.length > MAX_TITLE_LENGTH
					? tvShow.name.slice(0, MAX_TITLE_LENGTH) + '...'
					: tvShow.name}
			</div>
		</div>
	)
} */

const TVShowListItem = ({ tvShow, onClick }) => {
	const onClick_ = () => {
		onClick(tvShow)
	}
	return (
		<ListItemContainer onClick={onClick_}>
			<ListItemImg
				src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
				alt={tvShow.name}
			/>
			<ListItemTitle>
				{tvShow.name.length > MAX_TITLE_LENGTH
					? tvShow.name.slice(0, MAX_TITLE_LENGTH) + '...'
					: tvShow.name}
			</ListItemTitle>
		</ListItemContainer>
	)
}
export default TVShowListItem
