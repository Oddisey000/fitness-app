import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

import SimpleList from "./list-component/list.component";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 500,
    overflowY: "auto"
  },
  typography: {
    textTransform: "capitalize"
  }
}));

const LeftBodyGrid = ({ exercises }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {exercises.map(([group, exercises]) => (
          <Typography className={classes.typography} variant="h5" key={group}>
            {group}
            {/** This will unpack all the data from exercises objects and pass it to list component*/}
            {exercises.map((exercise) => (
              <SimpleList {...exercise} key={exercise.id} />
            ))}
          </Typography>
        ))}
      </Paper>
    </div>
  );
};

export default LeftBodyGrid;
