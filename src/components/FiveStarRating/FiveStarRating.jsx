import { StarFill, StarHalf, Star as StarEmpty } from 'react-bootstrap-icons'

const FiveStartRating = ({ rating }) => {
	const starList = []

	const starFillCount = Math.floor(rating)
	console.log({ llenas: starFillCount })

	const hasHalfStar = rating - parseInt(rating) >= 0.5
	console.log({ media: hasHalfStar })

	const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0)
	console.log({ vacias: emptyStarCount })

	for (let i = 1; i <= starFillCount; i++) {
		starList.push(<StarFill key={'star-fill' + i} />)
	}

	if (hasHalfStar) {
		starList.push(<StarHalf key={'star-half'} />)
	}

	// Push the empty star icon
	for (let i = 1; i <= emptyStarCount.length; i++) {
		starList.push(<StarEmpty key={'star-empty' + i} />)
	}

	return <div>{starList}</div>
}

export default FiveStartRating
