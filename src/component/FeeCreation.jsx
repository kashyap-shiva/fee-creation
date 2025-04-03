import React, { useState } from "react";
import { 
  Container, TextField, Select, MenuItem, Tabs, Tab, 
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
    <Grid container style={{width:"100%"}}>
      {/* Sidebar */}
      <Grid item xs={2} style={{width:"20%"}}>
        <Sidebar />
      </Grid>

      {/* Main Content */}
      <Grid item xs={10} style={{width:"80%"}}>

        <Container style={{maxWidth:"100%"}}>
            <Topbar />
          <FeesForm />
          
          {/* Semesters Tabs */}
          <Tabs value={selectedSemester} onChange={(e, newValue) => setSelectedSemester(newValue)}>
            {semesters.map((sem, index) => (
              <Tab key={index} label={sem} />
            ))}
          </Tabs>

          {/* Fees Details Table */}
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
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{fee.name}</TableCell>
                    <TableCell>{fee.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          
          {/* Action Buttons */}
          <Grid container justifyContent="space-between" marginTop={2}>
            <Button variant="contained" color="primary">Next / Apply</Button>
            <Button variant="outlined" color="secondary">Cancel</Button>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default FeesCreation;
