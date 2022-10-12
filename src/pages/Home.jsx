import React from 'react'

import Card from '../components/Card'

function Home({dataFetch}) {

    return (
        <React.StrictMode>
            <section className='banner home-banner'>
              <h1>Chez vous, partout et ailleurs</h1>
            </section>
            <section className='card-section'>
              {dataFetch?.map((e, index) => (
              <Card
              key={`${e.id}-${index}`}
              cover = {e.cover}
              title = {e.title}
              id = {e.id}
              />
              ))}
            </section>
        </React.StrictMode>
    )
}

export default Home