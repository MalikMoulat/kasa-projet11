import {useParams, Navigate} from 'react-router-dom'
import React from 'react';
import PropTypes from 'prop-types'

import '../styles/index.css'

import Rating from '../components/Rating/index';
import Slider from '../components/Slider/index';
import DropdownBtn from '../components/DropdownButton/index';
import ErrorPage from './404';

function Article({dataFetch}){

  const {articleId} = useParams()

  // Vérifie si l'id existe dans le tableau dataFetch
  const idExist = dataFetch.find(e => e.id === articleId)

  function splitHostName(data){
    const hostName = data.split(' ')

    return (
      hostName.map((e, index) => {
        return <p key={index}>{e}</p>
      })
    )
  }

  // Si l'id n'existe pas j'affiche la page error
  if (!idExist) {
    return (<Navigate to="/*"></Navigate>)
  }

  // Sinon je retourne l'article
  return dataFetch?.map((e, index) => 
        (e.id.includes(articleId)
        ? 
          <section className='info-section' key={index}>
            <Slider pictures={e.pictures}/>
            <div className='post-infos'>
              <div className='info-header'>
                <div className='info-name'>
                  <h1>{e.title}</h1>
                  <p>{e.location}</p>
                </div>
                <div className='tags'>
                  {e.tags?.map((tag, index) => (
                    <p key={index}>{tag}</p>
                  ))}
                </div>
              </div>

              <div className='tags-rating'>
                <div className='info-host'>
                  <div className='host-name'>
                    <div className='host-first-last-name'>
                      {splitHostName(e.host.name)}
                    </div>
                  </div>
                  <img src={e.host.picture} alt='profile'/>
                </div>
                    <Rating rating={e.rating} />
              </div>
            </div>

            <div className='decription-equipment'>
                <DropdownBtn 
                  defaultClose={true} 
                  header={'Description'} 
                  content={e.description}
                />

                <DropdownBtn 
                  defaultClose={true} 
                  header={'Équipement'} 
                  content={e.equipments}
                />
            </div>
            
          </section>
        : ''
        ))

}

Article.propTypes = {
  dataFetch: PropTypes.array

}

export default Article