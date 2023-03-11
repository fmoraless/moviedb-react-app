import { useState, useEffect } from 'react'
import { TVShowAPI } from './api/tv-show'
import LogoImg from './assets/images/logo.png'
import TVShowDetail from './components/TVShowDetail/TVShowDetail'
import s from './style.module.css'

function App() {
	const [currentTVShow, setCurrentTVShow] = useState()

	async function fetchPopulars() {
		const popularTVShowList = await TVShowAPI.fetchPopulars()
		if (popularTVShowList && popularTVShowList.length > 0) {
			setCurrentTVShow(popularTVShowList[0])
		}
	}

	useEffect(() => {
		fetchPopulars()
	}, [])

	console.log(currentTVShow)

	return (
		<div className={s.main_container}>
			<div className={s.recommended_shows}>Recommended TV Shows</div>
		</div>
	)
}

export default App
