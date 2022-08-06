import { Link } from "react-router-dom";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textWhite: {
    color: "#fff",
  },
  box: {
    marginTop: "3vh",
  },
  link: {
    color: "inherit",
    textDecoration: "inherit",
  },
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Grid item>
          <Box className={classes.box}></Box>
        </Grid>
        <Grid item>
          <Typography variant="h6" className={classes.textWhite}>
            <Link to="/bio" className={classes.link}>
              Go to page 2 {">"}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;
