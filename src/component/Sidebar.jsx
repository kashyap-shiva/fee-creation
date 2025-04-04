import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("Fees Creation"); 

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "BOS", icon: <SchoolIcon /> },
    { text: "Program", icon: <SchoolIcon /> },
    { text: "Fees Creation", icon: <MonetizationOnIcon /> }
  ];

  const handleItemClick = (text) => {
    setSelectedItem(text); // Update selected item when clicked
  };

  return (
    <Drawer variant="permanent" sx={{ width:240, flexShrink: 0 }}>
      <List sx={{width:"300px"}}>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            selected={selectedItem === item.text} 
            onClick={() => handleItemClick(item.text)} 
            sx={{
              backgroundColor: selectedItem === item.text ? 'lightblue' : 'transparent', 
              '&:hover': {
                backgroundColor: 'lightgray', 
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;