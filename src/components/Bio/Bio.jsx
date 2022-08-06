import { Link } from "react-router-dom";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "1vh",
    width: "98vw",
  },
  alignment: {
    padding: "5rem",
  },
  textBold: {
    fontWeight: "bold",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
    border: "solid 2px #333",
    padding: "1rem",
    borderRadius: "5px",
  },
}));
const Bio = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.alignment}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h6"> Page 2</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6"> Hobbies</Typography>
              <ul>
                <li>Internet Surfing</li>
                <li>Watching Tech videos</li>
                <li>Watching movies</li>
                <li>Surfing social media</li>
                <li>Reading tech docs</li>
                <li>Trekking</li>
                <li>Visiting picinic spots</li>
                <li>Driving</li>
              </ul>
            </Grid>
            <Grid item>
              <Typography variant="h6"> Sports</Typography>
              <ul>
                <li>Playing Cricket</li>
                <li>Watching Cricket Matches</li>
                <li>Watching WWE Wrestling</li>
              </ul>
            </Grid>
            <Grid item>
              <Typography variant="h6">Occasional activities</Typography>
              <ul>
                <li>Swimming</li>
                <li>Gardening</li>
                <li>Playing Snooker</li>
              </ul>
            </Grid>
            <Grid item>
              <Link to="/" className={classes.link}>
                <Typography variant="subtile2" className={classes.textBold}>
                  {"< "}Back
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default Bio;
