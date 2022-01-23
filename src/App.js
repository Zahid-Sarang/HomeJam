import React from 'react';


// Components Import
import Navbar from './components/navbar/Navbar';
import Upcomming from './components/home/upcoming show/Upcomming';
import ReviewsCard from './components/home/reviews/ReviewsCard';
import Home from './components/home/Home';

const App = () => {
  return (
     <>
        <Navbar />
        <Home />
        <Upcomming />
        <ReviewsCard />
        
        </>
  );
};

export default App;
