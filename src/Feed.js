import React,{ useEffect,useState } from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post.js'
import db from './Firebase'

function Feed() {
    //keep track of the posts
    const [posts,setPosts]=useState([])


    //code when the feed is running to load
    useEffect(() => {//onSn  //what it do is when anything is change or update in side the collection it give real time snapshot like camera
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map((doc)=>({id:doc.id, data:doc.data()})))
        });                         //db.collection access the db of firebase
    }, []);//when this array leave empty it only run once when the feed is load
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            {posts.map(post=>(
                <Post
                key={post.data.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
                />
            ))}
        </div>
    )
}

export default Feed
