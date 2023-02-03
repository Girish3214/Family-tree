import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import "./App.css";
import FamilyTree from "./components/FamilyTree/FamilyTree";
import FamilyDetails from "./components/FamilyDetails/FamilyDetails";
import ImportExport from "./components/ImportExport/ImportExport";

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }} justifyContent="center">
        <Grid container justifyContent={"center"}>
          <Grid xs={3} item>
            <Grid xs={12} item>
              <Paper
                style={{
                  padding: 8,
                  margin: 2,
                  minHeight: "26rem",
                  maxHeight: "26rem ",
                }}
              >
                <FamilyTree />
              </Paper>
            </Grid>
            <Grid xs={12} item>
              <Paper style={{ padding: 8, margin: 2 }}>
                <ImportExport />
              </Paper>
            </Grid>
          </Grid>
          <Grid xs={6} item marginLeft={5}>
            <Paper style={{ padding: 8, margin: 2 }}>
              <FamilyDetails />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
