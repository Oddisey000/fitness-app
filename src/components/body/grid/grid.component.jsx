import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import LeftBodyGrid from "./left-side/left-side.component";
import RightBodyGrid from "./right-side/right-side.component";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

export default function GridComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <LeftBodyGrid />
        </Grid>
        <Grid item xs={6}>
          <RightBodyGrid />
        </Grid>
      </Grid>
    </div>
  );
}
