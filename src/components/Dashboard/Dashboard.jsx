import { useState } from "react";

import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import { Grid, makeStyles, Box } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "98.9vw",
  },
  headerGrid: {
    marginTop: "1rem",
    minHeight: "10vh",
    background: "#000000",
  },
  mainGrid: {
    minHeight: "77.9vh ",
  },
  footerGrid: {
    minHeight: "10vh",
    background: "#000000",
  },
}));
const Dashboard = () => {
  const classes = useStyles();
  const [position, setPosition] = useState("Center");
  const sideOptions = [
    { code: "Center", label: "Center" },
    { code: "LowerRight", label: "Lower Right" },
  ];
  return (
    <>
      <Box className={classes.wrapper}>
        <Grid container direction="column">
          <Grid item xs={12} className={classes.headerGrid}>
            <Header
              position={position}
              setPosition={setPosition}
              sideOptions={sideOptions}
            />
          </Grid>
          <Grid item xs={12} className={classes.mainGrid}>
            <Main position={position} setPosition={setPosition} />
          </Grid>
          <Grid item xs={12} className={classes.footerGrid}>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Dashboard;
