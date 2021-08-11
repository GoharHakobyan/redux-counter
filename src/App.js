import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { decrementCreator, incrementCreator } from "./redux/actions";

function App() {
  const counter = useSelector((state) => state.createReducer.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCreator());
  };
  const handledecrement = () => {
    dispatch(decrementCreator());
  };
  return (
    <div className="App">
      <h4>Increment and Decrement App</h4>
      <div>
        <h6>the counter is {counter}</h6>
        <Button variant="contained" color="primary" onClick={handleIncrement} style={{ marginRight: "20px" }}>
          increment
        </Button>
        <Button variant="contained" color="primary" onClick={handledecrement}>
          decrement
        </Button>
      </div>
    </div>
  );
}

export default App;
