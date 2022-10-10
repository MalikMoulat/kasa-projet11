import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';


import Header from '../components/Header/index'
import Card from '../components/Card/index'
import Footer from '../components/Footer/index'
import About from '../pages/about'
import Article from '../pages/CardInformation'
import ErrorPage from './404';


import dataJson from '../Data/data.json'

import '../styles/index.css'




function App() {
  /*
  const [data, setData] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
        );

        setData(result.data)
    };
    fetchData();
  }, [])
*/

//import img from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash'


  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path='/about' element={<About />}/>
          <Route path='/' element={ <>  <section className='banner home-banner'>
                                          <h1>Chez vous, partout et ailleurs</h1>
                                        </section>
                                        <section className='card-section'>
                                          {dataJson?.map((e, index) => (
                                          <Card
                                          key={`${e.id}-${index}`}
                                          cover = {e.cover}
                                          title = {e.title}
                                          id = {e.id}
                                          />
                                          ))}
                                        </section>
                                        </>}>
          </Route>
          <Route path='/article/:articleId' element={<Article dataFetch={dataJson} />}/>
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
   
  );
}

export default App;
