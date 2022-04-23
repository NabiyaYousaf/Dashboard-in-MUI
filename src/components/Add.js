import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import Stack from '@mui/material/Stack';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import Button from '@mui/material/Button';
const Add = () => {

    const[open,setOpen]=useState(false);
  return (
      <>
    <Tooltip
        onClick={e=>setOpen(true)}
     title="Add" sx={{position:"fixed",bottom:"20px",left:"20px"}}>
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    </Tooltip>
    <Modal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{display:"flex",justifyContent:"center",alignItems:"center"}}
      >
        <Box sx={{width:"30%",height:"35%",borderRadius:"10px",padding:"20px"}}
        bgcolor={"background.default"}
        >
          <Typography variant="h6" sx={{color:"gray"}}>
            Create a post
          </Typography>
          <TextField
          multiline
          rows={4}
          placeholder="what you have in your mind..."
          variant="standard"
          sx={{width:"80%"}}
        />
         <Stack direction="row" sx={{marginTop:"10px"}} spacing={2}>
            <EmojiEmotionsIcon color="secondary"/>
            <CameraAltIcon color="success"/>
            <CollectionsIcon color="error" />
            <VideoCameraBackIcon color="primary"/>
         </Stack>
         <Button variant="contained" color="primary" sx={{marginTop:"20px",maxWidth:"50%",}}>Post</Button>
        </Box>
      </Modal>
    </>
  )
}

export default Add