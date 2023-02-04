import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import "./App.css";
import FamilyTree from "./components/FamilyTree/FamilyTree";
import FamilyDetails from "./components/FamilyDetails/FamilyDetails";
import ImportExport from "./components/ImportExport/ImportExport";

function App() {
  return (
    <Paper
      className="App"
      sx={{
        backgroundColor: (theme) => {
          console.log(theme.palette);
          return theme.palette.grey.A200;
        },
        height: "100vh",
      }}
    >
      <Box sx={{ flexGrow: 1 }} justifyContent="center">
        <Grid container justifyContent={"center"}>
          <Grid xs={3} item>
            <Grid xs={12} item>
              <div
                style={{
                  padding: 8,
                  margin: "2px 4px 8px",
                  minHeight: "26rem",
                  maxHeight: "26rem ",
                }}
              >
                <FamilyTree />
              </div>
            </Grid>
            <Grid xs={12} item>
              <ImportExport />
            </Grid>
          </Grid>
          <Grid
            xs={6}
            item
            marginLeft={5}
            sx={{
              borderRadius: 8,
              backgroundColor: (theme) => theme.palette.secondary.main,
            }}
          >
            <FamilyDetails />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default App;
