import React from 'react'
import IntroVelo from '../components/Introvelo/IntroVelo';
import Subscription from '../components/Subscribtion/Subscription'
import VeloCatalogue from '../components/VeloCatalogue/VeloCatalogue';
const Velos = () => {
  return (
    <div>
      <IntroVelo/>
      <VeloCatalogue/>
      <Subscription/>
    </div>
  )
}

export default Velos