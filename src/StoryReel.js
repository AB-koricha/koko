import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
            image='https://wersm.com/wp-content/uploads/2018/05/wersm-polls-stickers-facebook-stories.jpg'
            profileSrc='https://content.fortune.com/wp-content/uploads/2015/05/rtx1b282.jpg'
            title='Ibrahim'
            />
            <Story 
            image='https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg'
            profileSrc='https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg'
            title='Adan'
            />
            <Story
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjSTsCSy9e_DdD4hS4elH4C2khWk_QO0LSKg&usqp=CAU"
            profileSrc="https://image.shutterstock.com/image-photo/paris-france-may-24-2018-260nw-1098814607.jpg"
            title='Yussuf'
            />
            <Story
            image='https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073__340.jpg'
            profileSrc='https://image.shutterstock.com/image-photo/istanbul-turkey-december-19-2017-260nw-778315861.jpg'
            title='Ali'
            />
            <Story 
            image='https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            profileSrc='https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            title='Halima'
            />
        </div>
    )
}

export default StoryReel

