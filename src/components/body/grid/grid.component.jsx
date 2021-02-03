import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import LeftBodyGrid from "./left-side/left-side.component";
import RightBodyGrid from "./right-side/right-side.component";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

const GridComponent = ({ exercises }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <LeftBodyGrid {...exercises} />
        </Grid>
        <Grid item xs={6}>
          <RightBodyGrid />
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises
  };
};

export default connect(mapStateToProps)(GridComponent);
