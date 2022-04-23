import React from 'react'
import {Box,List,ListItem,ListItemText,ListItemIcon,ListItemButton,Switch} from '@mui/material';
import {Home,Info,MiscellaneousServices,Feed,Settings,AccountCircle,ModeNight} from '@mui/icons-material';
const Sidebar = ({mode,setMode }) => {
  return (
    <Box 
        flex={1}
        p={2}
        sx={{display:{xs:"none",sm:"block"}}}
    >
    <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Feed />
              </ListItemIcon>
              <ListItemText primary="News" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MiscellaneousServices />
              </ListItemIcon>
              <ListItemText primary="Services" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={e=>setMode(mode === "light" ? "dark":"light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
    </Box>
  )
}

export default Sidebar