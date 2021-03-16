import React from "react";
import { connect } from "react-redux";

import { exercises } from "../shared/store.data";
import {
  getExercises,
  filterExercises,
  saveMuscleGroup
} from "../../redux/exercises/exercises.actions";

import GridComponent from "./grid/grid.component";

class Body extends React.Component {
  componentDidMount() {
    this.props.getExercises(exercises);
    this.props.filterExercises(exercises);
    this.props.saveMuscleGroup(exercises);
  }

  render() {
    return (
      <div id="app-body">
        <GridComponent />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getExercises: (item) => dispatch(getExercises(item)),
    filterExercises: (item) => dispatch(filterExercises(item)),
    saveMuscleGroup: (item) => dispatch(saveMuscleGroup(item))
  };
};

export default connect(null, mapDispatchToProps)(Body);
