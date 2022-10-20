import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../components/Header/index'
import Footer from '../components/Footer/index'
import About from './About'
import Article from './CardInformation'
import ErrorPage from './404';
import Home from '../pages/Home'

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
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path='/about' element={<About />}/>
          <Route path='/' element={<Home dataFetch={dataJson} />}/>
          <Route path='/article/:articleId' element={<Article dataFetch={dataJson} />}/>
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
   
  );
}

export default App;
