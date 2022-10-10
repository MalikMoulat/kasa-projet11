import {useState} from 'react'
import PropTypes from 'prop-types'

function Slider({pictures}) {

    let [counter, updateCounter] = useState(0)

    let nbPicture = pictures.length

    function displayArrow(){
        if(nbPicture > 1){
            return (
                <div className='slider-chevron'>
                    <div className='left-chevron'>
                        <i className="fas fa-chevron-left" onClick={() => updateCounter(counter > 0 ? counter - 1 : counter = nbPicture - 1)}></i>
                    </div>
                    <div className='right-chevron'>
                        <i className="fas fa-chevron-right" onClick={() => updateCounter(counter < nbPicture - 1 ? counter + 1 : counter = 0)}></i>
                    </div>
                </div>
            )
        }else{
            return ''
        }
    }

    return (    <div className='slider'>
                    <img className="img-gallery" src={pictures[counter]} alt='profile' height={415} width={1240} />
                    {displayArrow()}
                </div>
    )

}

Slider.prototype = {
    pictures: PropTypes.array
}

export default Slider