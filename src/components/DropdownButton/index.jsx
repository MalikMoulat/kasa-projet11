import {useState} from 'react'
import PropTypes from 'prop-types'

function DropdownBtn({defaultClose, header, content}){

    const [isClose, updateState] = useState(defaultClose)

    let displayedContent
    // Si le type de content est un string retoune content dans un array sinon retourne content (qui est un array)
    (typeof content === 'string') ? displayedContent = [content] : displayedContent = content

    return (
        <div className='btn-dropdown'>
            <div className='btn-dropdown-header' onClick={() => updateState(!isClose)}>
                <span>{header}</span>
                <i className={isClose ? 'fas fa-chevron-down chevron-down' : 'fas fa-chevron-down chevron-up'}></i>
            </div>
            <div className={isClose ? 'btn-dropdown-content display-hidden' : 'btn-dropdown-content display-block'}>
                {
                    displayedContent.map((e, index) => {
                        return <p key={e + index}>{e}</p>
                    })
                }
            </div>
        </div>
    )

}

DropdownBtn.propTypes = {
    default: PropTypes.bool,
    header: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

export default DropdownBtn