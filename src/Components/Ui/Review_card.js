import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function Review_card() {
  return (
    <div className='review-card-con'>
        <div className='review-card-text'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s,
        </div>
        <div className='review-card-profile'>
        <Image
  src={require("../../../public/assets/Images/profile.png")}
  width={50}
  height={50}
  style={{borderRadius:'20px'}}
/>
            <Typography>{"Victor Murphy"}</Typography>
        </div>
    </div>
  )
}

export default Review_card