import React from 'react'
import League from '../components/League';
import { useGlobalContext } from '../context';
import {data} from '../data'


const Home = () => {
 const {leagues,loading} = useGlobalContext();
 console.log(leagues)
 return (
  <main>
  <div className="hero">
   <h2>Sports mania</h2>
  </div>

  <div className='leagues'>
   {data.map((item)=>{
    return(
      <League key={item.id} {...item}/>
    )
   })}
  </div>
    </main>
 )
}

export default Home
