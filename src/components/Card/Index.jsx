import PropTypes from 'prop-types'

function Card ({cover, title, id}) {


    return (
        <a href={'/article/' + id}>
            <div className="card">
                <img src={cover} alt={title}></img>
                <h2>{title}</h2>
            </div>
        </a>
    )
}

Card.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.string
}

export default Card