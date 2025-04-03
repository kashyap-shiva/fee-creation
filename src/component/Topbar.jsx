import React from "react";
import { AppBar, Toolbar, IconButton, InputBase, Typography, Avatar, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  return (
    <AppBar position="static" color="default" elevation={0} sx={{ padding: 1 }}>
      <Toolbar>
        {/* Menu Icon */}
        <IconButton edge="start" sx={{ marginRight: 2 }}>
          <MenuIcon />
        </IconButton>
        
        {/* Search Bar */}
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", backgroundColor: "#f5f5f5", borderRadius: 2, paddingX: 2 }}>
          <SearchIcon color="disabled" />
          <InputBase placeholder="Search..." sx={{ marginLeft: 1, flex: 1 }} />
        </Box>
        
        {/* Icons & Profile */}
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        
        <Avatar alt="Aarohi Shah" src="/path-to-avatar.jpg" sx={{ marginLeft: 2 }} />
        <Typography variant="body1" sx={{ marginLeft: 1, fontWeight: "bold" }}>
          Aarohi Shah
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 1 }}>
          Admin
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
