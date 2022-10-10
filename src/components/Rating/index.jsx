import PropTypes from 'prop-types'

function Rating({rating}){

    const stars = [
        <i className="fas fa-star"></i>,
        <i className="fas fa-star"></i>,
        <i className="fas fa-star"></i>,
        <i className="fas fa-star"></i>,
        <i className="fas fa-star"></i>
    ]

    function starsRating(){

        let starsRating = parseInt(rating)

        stars.splice(starsRating)

        while (stars.length < 5){
            stars.push(<i className="far fa-star"></i>)
        }
    }

    starsRating()

    return(
        <div className="rating">
            <ul>
            {stars?.map((tag, index) => (
                <li key={index}>{tag}</li>
            ))}
            </ul>
        </div>
    )
}

Rating.prototype = {
    rating: PropTypes.array
}

export default Rating