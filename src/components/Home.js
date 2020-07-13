import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
class Home extends Component{
    state={
        posts:[]
    }
 componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/posts')  
  .then(res=>{
      console.log(res)
      this.setState({
          posts:res.data.slice(0,10)
      })
  }) 
 }   
 render(){
     const {posts}=this.state;
     const postList=posts.length ? (
         posts.map(post=> {
             return(
                 <div className='post card'key={post.id}>
                     <div className='card-content'>
                     <Link to={'/' + post.id}>
                     <span className='card-title red-text' >{post.title}</span>
                     </Link>
                     <p>{post.body}</p>
                 </div>
                 </div>
             )
         })
     ):
(<div className='center'>No posts yet</div>
)   
 return(
    <div className='container'>
        <h4 className='center'>Home</h4>
        <p>Freehold purchase of a house is much less common than a group of leaseholders coming together to buy the freehold of their block of flats (in a process called collective or freehold enfranchisement).

Freehold purchase or enfranchisement of a house in this way is much less common for one simple reason – there are relatively few leasehold houses. Individual flats are always sold on a leasehold basis and the vast majority of houses are freehold.</p>
    {postList}
    </div>     
    )
 }
}
export default Home