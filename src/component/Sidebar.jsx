import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Sidebar = () => {
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "BOS", icon: <SchoolIcon /> },
    { text: "Program", icon: <SchoolIcon /> },
    { text: "Fees Creation", icon: <MonetizationOnIcon /> }
  ];

  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
