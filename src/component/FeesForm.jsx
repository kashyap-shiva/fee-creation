import React from "react";
import { Box, Container, TextField, Select, MenuItem, Grid, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import CollegeCard from "./CollegeCard"
const colleges = [
  { name: "College Name", status: "pending" },
  { name: "College Name", status: "active" },
  { name: "College Name", status: "pending" },
];

const FeesForm = () => {
  return (
    <Container sx={{ background: "#fff", padding: 3, borderRadius: 2, boxShadow: 1, maxWidth: "100% !important" }} >
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2, textAlign:"start" , color: "#14b4e8"}}>
        Fees Creation
      </Typography>
      <Typography variant="h6" sx={{ color: 'lightblue', textAlign: "start", color: "#14b4e8" }}>
        Name a Fee Creation
      </Typography>
      <TextField label="Type Something" fullWidth margin="normal" />


      <Box display="flex" flexDirection="column">
        <Box display="flex" width="100%" gap="10px">
          <Box width="50%" textAlign="start">
            <Typography variant="body1" sx={{ color: "#14b4e8" }}>Program Level</Typography>
            <Select fullWidth displayEmpty>
              <MenuItem value="">Select Program Level</MenuItem>
            </Select>
          </Box>
          <Box width="50%" textAlign="start">
            <Typography variant="body1" sx={{ color: "#14b4e8" }}>Program Type</Typography>
            <Select fullWidth displayEmpty>
              <MenuItem value="">Select Program Type</MenuItem>
            </Select>
          </Box>
        </Box>


        <Box display="flex" flexDirection="column" textAlign="start">
          <Typography variant="body1" sx={{ color: "#14b4e8" }}>Program Level</Typography>
          <Select displayEmpty sx={{ width: "50%" }}>
            <MenuItem value="">Select Program Level</MenuItem>
          </Select>
        </Box>
      </Box>
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 1,marginTop: 2, textAlign:"start" , color: "#14b4e8"}}>
      Program Level in College
      </Typography>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-start", mt: 4, width: "80%" }}>
      {colleges.map((college, index) => (
        <CollegeCard key={index} name={college.name} status={college.status} />
      ))}
    </Box>
    </Container>
  );
};

export default FeesForm