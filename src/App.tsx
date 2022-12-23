import React from "react";
import {connect} from "react-redux";

function App({count, increment}) {

  function handleOnClick(){
    increment();
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleOnClick}>Count is {count}</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    increment: () => dispatch({type: "counter/increment"})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
