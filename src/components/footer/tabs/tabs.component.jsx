import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { filterExercises } from "../../../redux/exercises/exercises.actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

const TabsComponent = ({ exercises, filterExercises }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      filterExercises(exercises.data);
    } else {
      const filteredData = exercises.muscles
        .filter(([category]) => category === newValue)
        .map(([data, object]) => object);
      filterExercises(filteredData[0]);
    }
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {exercises.muscles.map(([muscle]) => (
          <Tab label={muscle} key={muscle} value={muscle} />
        ))}
      </Tabs>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterExercises: (item) => dispatch(filterExercises(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabsComponent);
