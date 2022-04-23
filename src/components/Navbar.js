import React,{useState} from 'react'
import { AppBar,Toolbar,Typography,Box,styled,useTheme,Badge,InputBase,Menu,MenuItem} from '@mui/material';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { Mail,Notifications } from '@mui/icons-material';
import { Avatar } from '@mui/material';
const Navbar = () => {
  const[open,setOpen]=useState(false);
  const theme = useTheme();
  const ToolbarStyle=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
  });
  const Search=styled("div")({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
  })
  const Icons = styled(Box)(({ theme }) => ({
    display:"flex",
    gap:20,
    alignItems:"center"
  }));
  return (
    <AppBar position="sticky">
      <ToolbarStyle>
        <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}> 
          Admin Dashboard
        </Typography>
          <DashboardCustomizeIcon sx={{display:{xs:"block",sm:"none"}}} />
       
        <Search><InputBase value="search..."/></Search>
        <Icons sx={{display:{xs:"none",sm:"block"}}}>
          <Badge badgeContent={4} color="error">
            <Mail color="action" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications color="action" />
          </Badge>
        </Icons>
        <Avatar sx={{ bgcolor: "pink" }} onClick={e=>setOpen(true)}>N</Avatar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </ToolbarStyle>
    </AppBar>
  )
}

export default Navbar