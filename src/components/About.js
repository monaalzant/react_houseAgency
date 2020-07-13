import React from 'react'
import Rainbow from '../hoc/Rainbow'
import theImg from '../housePic.jpg'
const About=()=>{
    return(
    <div className='container'>
        <h4 className='center'>About</h4>
        <p>Freehold purchase of a house is much less common than a group of leaseholders coming together to buy the freehold of their block of flats (in a process called collective or freehold enfranchisement).

Freehold purchase or enfranchisement of a house in this way is much less common for one simple reason – there are relatively few leasehold houses. Individual flats are always sold on a leasehold basis and the vast majority of houses are freehold.</p>
        <img src={theImg} className='img'/>
    </div>     
    )
}
export default Rainbow(About)