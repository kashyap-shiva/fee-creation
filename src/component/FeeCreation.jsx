import React, { useState } from "react";
import {
  Container, TextField, Select, MenuItem, Tabs, Tab, Box,
  Card, CardContent, Typography, Button, Grid, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper
} from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar"
import FeesForm from "./FeesForm"

const semesters = ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8"];

const FeesCreation = () => {
  const [selectedSemester, setSelectedSemester] = useState(0);
  const [fees, setFees] = useState([
    { name: "Tuition Fee", amount: 30000 },
    { name: "Lab Fee", amount: 10000 },
    { name: "Sports Fee", amount: 10000 }
  ]);

  return (
    <Grid container style={{ width: "100%" }}>
      <Grid item xs={2} style={{ width: "20%" }}>
        <Sidebar />
      </Grid>
      <Grid item xs={10} style={{ width: "80%" }}>

        <Container style={{ maxWidth: "100%" }}>
          <Topbar />
          <FeesForm />
          <Tabs
        value={selectedSemester}
        onChange={(e, newValue) => setSelectedSemester(newValue)}
        sx={{ width: '100%',
          paddingTop: '20px', 
          paddingBottom: '20px', 
          '& .MuiTabs-indicator': {
            display: 'none',
          },
         }} 
        indicatorColor="primary" 
      >
        {semesters.map((sem, index) => (
          <Tab
            key={index}
            label={sem}
            sx={{
              width: '13%', 
              backgroundColor: selectedSemester === index ? 'lightblue' : 'transparent', 
              borderRadius: selectedSemester === index ? '10px' : '0px', 
              '&:hover': {
                backgroundColor: selectedSemester === index ? 'lightblue' : '',
                color: selectedSemester === index ? 'white' : 'lightblue', 
              },
            }}
          />
        ))}
      </Tabs>

          <Box sx={{ display: 'flex', gap: '20px', width: '100%' }}>
            <Box sx={{ width: '50%' }}>
              <Typography variant="h6" sx={{ color: 'lightblue', textAlign: 'start' }}>
                Name a Fee Creation
              </Typography>
              <TextField label="Type Something" fullWidth margin="normal" />

              <Box display="flex" width="100%" gap="10px" sx={{ mt: 2 }}>
                <Box sx={{ width: '50%' }} textAlign="start">
                  <Typography variant="body1" sx={{ color: '#14b4e8' }}>
                    Program Level
                  </Typography>
                  <Select fullWidth displayEmpty>
                    <MenuItem value="">Select Program Level</MenuItem>
                  </Select>
                </Box>
                <Box sx={{ width: '50%' }} textAlign="start">
                  <Typography variant="body1" sx={{ color: '#14b4e8' }}>
                    Program Type
                  </Typography>
                  <Select fullWidth displayEmpty>
                    <MenuItem value="">Select Program Type</MenuItem>
                  </Select>
                </Box>
              </Box>

              
              {[...Array(3)].map((_, idx) => (
                <Box display="flex" width="100%" gap="10px" sx={{ mt: 2 }} key={idx}>
                  <Box sx={{ width: '50%' }} textAlign="start">
                    <Typography variant="body1" sx={{ color: '#14b4e8' }}>
                      Program Level
                    </Typography>
                    <Select fullWidth displayEmpty>
                      <MenuItem value="">Select Program Level</MenuItem>
                    </Select>
                  </Box>
                  <Box sx={{ width: '50%' }} textAlign="start">
                    <Typography variant="body1" sx={{ color: '#14b4e8' }}>
                      Program Type
                    </Typography>
                    <Select fullWidth displayEmpty>
                      <MenuItem value="">Select Program Type</MenuItem>
                    </Select>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box sx={{ width: '50%', backgroundColor: 'lightblue', borderRadius: '20px', p: 2 }}>
              <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>No</TableCell>
                      <TableCell>Fees Name</TableCell>
                      <TableCell>Fees Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {fees.map((fee, index) => (
                      <TableRow key={index} sx={{backgroundColor:"lightblue"}}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{fee.name}</TableCell>
                        <TableCell>{fee.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
          <Grid container justifyContent="end" marginTop={2} gap="20px">
            <Button variant="contained" color="primary">Next / Apply</Button>
            <Button variant="outlined" color="secondary">Cancel</Button>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default FeesCreation;