import React from "react";
import { Card, CardContent, Typography, Badge, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const CollegeCard = ({ name, status }) => {
  return (
    <Card
      sx={{
        width: 200,
        height: 120,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3,
        boxShadow: 2,
        backgroundColor: status === "active" ? "#e3f2fd" : "white",
        position: "relative",
      }}
    >
      {status === "pending" && (
        <Badge
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "#ffcc80",
            color: "#000",
            padding: "2px 8px",
            borderRadius: 8,
            fontSize: 12,
          }}
        >
          Pending
        </Badge>
      )}

      <Box
        sx={{
          width: 50,
          height: 50,
          backgroundColor: status === "active" ? "#1565c0" : "#ffcc80",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 1,
        }}
      >
        <SchoolIcon sx={{ color: "#fff" }} />
      </Box>

      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        {name}
      </Typography>
    </Card>
  );
};
export default CollegeCard