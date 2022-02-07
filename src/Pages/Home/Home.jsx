import React from 'react'
import './home.css'
import Featuredinfo from '../../Components/Featured/Featuredinfo';
import Chart from '../../Components/Chart/Chart';
import {userData} from '../../Dummydata'

 
function Home() {
  console.log(userData);

  return <div className='home'>
      <Featuredinfo/>
     <div>
     <Chart data={userData} grid datakey="Active User" title="User__Anylytics"/>
     </div>
  </div>;
}
export default Home;
