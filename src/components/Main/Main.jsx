import { useState } from "react";
import { Grid, Typography, Box, makeStyles } from "@material-ui/core";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    background: "#333",
    height: "77.9vh",
  },
  paperContainer: {
    width: "26vw",
    height: "53vh",
    border: "solid 5px darkblue",
    background: "darkgray",
  },
  paperCenter: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: `translate(-50%, -50%)`,
  },
  paperLowerRight: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: `translate(80%, -30%)`,
  },
  textWhite: {
    color: "#fff",
  },
  lowerContent: {
    marginTop: "42vh",
  },
  positionFont: {
    fontWeight: "bold",
  },
  randomPosition: {
    position: "absolute",
    left: "10%",
    top: "40%",
    transform: `translate(20%, -20%)`,
  },
}));
const Main = (props) => {
  const classes = useStyles();

  const { position, setPosition } = props;
  const [showContainer, setShowContainer] = useState(true);
  onkeydown = (event) => {
    if (event.key === "Escape") {
      setShowContainer(false);
    } else if (event.key === "Enter") {
      setShowContainer(true);
    }
  };
  const handleDragEnd = (result) => {
    setPosition("Floating");
    if (!result.destination) return;
  };
  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppableSection">
          {(provided, snapshot) => (
            <Grid
              container
              className={classes.container}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {showContainer ? (
                <Draggable draggableId="draggableSection" key={1} index={0}>
                  {(provided, snapshot) => (
                    <Grid
                      item
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Box
                        className={
                          position === "Center"
                            ? [classes.paperContainer, classes.paperCenter]
                            : position === "Floating"
                            ? [classes.paperContainer, classes.randomPosition]
                            : [classes.paperContainer, classes.paperLowerRight]
                        }
                      >
                        <Box>
                          <Typography className={classes.positionFont}>
                            {position}
                          </Typography>
                        </Box>
                        <Grid container justifyContent="flex-end">
                          <Grid item className={classes.lowerContent}>
                            <Typography className={classes.textWhite}>
                              Drag me around...
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  )}
                </Draggable>
              ) : null}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};
export default Main;
