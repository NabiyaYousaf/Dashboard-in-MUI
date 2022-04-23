import React,{useState} from 'react'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import {createTheme,ThemeProvider } from "@mui/material";
const App = () => {
  
  const[mode,setMode]=useState("light");
  const darkTheme=createTheme({
    palette:{
      mode:mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/>
      <Stack direction="row"
        spacing={2}
        display="flex"
        justifyContent="space-between" >
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed/>
        <Rightbar/>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  )
}

export default App