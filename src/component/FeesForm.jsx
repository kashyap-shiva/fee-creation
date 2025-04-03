import React from "react";
import { Container, TextField, Select, MenuItem, Grid, Typography } from "@mui/material";

const FeesForm = () => {
  return (
    <Container sx={{ background: "#fff", padding: 3, borderRadius: 2, boxShadow: 1, maxWidth: "100% !important"  }} >
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Fees Creation
      </Typography>

      <TextField label="Name a Fees Creation" fullWidth margin="normal" />
      <Grid container spacing={2}>
  {/* First Row - Two columns */}
  <Grid container spacing={2}>
  {/* First Row - Two columns */}
  <Grid container item spacing={2} xs={12}>
    <Grid item xs={12} sm={6}>
      <Select fullWidth displayEmpty>
        <MenuItem value="">Select Program Level</MenuItem>
      </Select>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Select fullWidth displayEmpty>
        <MenuItem value="">Select Program Type</MenuItem>
      </Select>
    </Grid>
  </Grid>

  {/* Second Row - Full width */}
  <Grid item xs={12}>
    <Select fullWidth displayEmpty>
      <MenuItem value="">Select Program Name</MenuItem>
    </Select>
  </Grid>
</Grid>

</Grid>

    </Container>
  );
};

export default FeesForm;
