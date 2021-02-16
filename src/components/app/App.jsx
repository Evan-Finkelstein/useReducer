
import React, { useReducer } from 'react'
import reducer, { initialState } from '../../reducers/colorReducer';




function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = ({ target }) => {
    dispatch({
      type: target.id,
      payload: target.value
    });
  };

  const handleClick = ({ target }) => {
    dispatch({
      type: target.id,
    });
  };

  return (
    <>
      <button id="UNDO" onClick={handleClick}>undo</button>
      <button id="REDO" onClick={handleClick}>redo</button>
      <label htmlFor="RECORD">Color</label>
      <input id='RECORD' type="color" value={state.current} onChange={handleChange} />
      <div style={{ backgroundColor: state.current, width: '10rem', height: '10rem' }}>Display</div>
    </>
  )
}

export default App;
