import React from 'react';
import Introsection from '../components/Introsection/Introsection';
import Partners from '../components/Partners/Partners';
import Subscription from '../components/Subscribtion/Subscription';
import MountainVelo from '../components/MountainVelo/MountainVelo';
import Catalogue from '../components/Catalogue/Catalogue';
const Home = () => {
  return (
    <div>
        <Introsection/>
        <Partners/>
        <MountainVelo/>
        <Catalogue/>
        <Subscription/>
    </div>
  )
}

export default Home