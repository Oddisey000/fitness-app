import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

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
  wMessage: {
    marginTop: 20
  }
}));

export default function RightBodyGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h5">Welcome!</Typography>
        <Typography className={classes.wMessage}>
          Please select the exercise from the list on the left
        </Typography>
      </Paper>
    </div>
  );
}
