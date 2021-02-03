import React from "react";
import { connect } from "react-redux";

import { exercises } from "../shared/store.data";
import { getExercises } from "../../redux/exercises/exercises.actions";

import GridComponent from "./grid/grid.component";

class Body extends React.Component {
  componentDidMount() {
    this.props.getExercises(exercises);
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
    getExercises: (item) => dispatch(getExercises(item))
  };
};

export default connect(null, mapDispatchToProps)(Body);
