import React from 'react'
import {Box} from '@mui/material';
import Post from "./Post";
const Feed = () => {
  return (
    <Box 
        
        flex={3}
        p={2}
        // sx={{display:{xs:"none",sm:"block"}}}
    >
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </Box>
  )
}

export default Feed