import { useEffect, useState } from "react";
import {
  Grid,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  alignText: {
    marginLeft: "1vw !important",
  },
  textWhite: {
    color: "#fff",
  },
  textOrange: {
    color: "orange",
  },
}));
const Header = (props) => {
  const classes = useStyles();
  const { position, setPosition, sideOptions } = props;
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      var today = new Date();
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      setCurrentTime(time.toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <Typography className={classes.textWhite}>Position: </Typography>
          </Grid>
          <Grid item>
            <Box className={classes.alignText}></Box>
          </Grid>
          <Grid item>
            <FormControl component="fieldset">
              <RadioGroup
                name="LogticketType"
                className="inSameline"
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
                value={position}
              >
                <Grid container direction="row">
                  <Grid item>
                    {sideOptions.length
                      ? sideOptions.map((item) => {
                          return (
                            <FormControlLabel
                              key={item.label}
                              value={item.code}
                              control={<Radio className={classes.textWhite} />}
                              label={
                                <Typography className={classes.textWhite}>
                                  {item.label}
                                </Typography>
                              }
                            />
                          );
                        })
                      : null}
                  </Grid>
                </Grid>
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" alignItems="center" spacing={4}>
          <Grid item>
            <Typography className={classes.textOrange}>
              Press ESC key to hide the window. Enter to show it again.
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.textWhite}>{currentTime}</Typography>
          </Grid>
          <Grid item>
            <Box mr={1}></Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Header;
