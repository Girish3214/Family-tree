import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import "../assets/styles/customStyles.css";

const CustomTypeWithLabel = ({ label, value, type }) => {
  return (
    <Box style={{ margin: 18 }}>
      <Grid container>
        <Grid item xs={3}>
          <div>{label}</div>
        </Grid>
        <Grid item xs={1}>
          <span>:</span>
        </Grid>
        <Grid item xs={8}>
          {type === "photo" ? (
            <>
              <Grid
                item
                xs={7}
                flexDirection="row"
                display={"flex"}
                justifyContent="space-between"
              >
                <>
                  {value.map((photo, index) => (
                    <Paper elevation={2} style={{ marginRight: 5 }} key={index}>
                      <Grid
                        item
                        xs={12}
                        key={index}
                        margin={2}
                        alignItems="center"
                        display={"flex"}
                        height="165px"
                        justifyContent="center"
                      >
                        <img src={photo} alt="img" className="photo" />
                      </Grid>
                    </Paper>
                  ))}
                </>
              </Grid>
            </>
          ) : (
            <div>{value}</div>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomTypeWithLabel;
