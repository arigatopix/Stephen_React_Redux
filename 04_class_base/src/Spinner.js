import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// ใส่ default ให้ props กรณีลืมใส่ props ใน <Spinner />
Spinner.defaultProps = {
  message : 'Loading ...'
}

export default Spinner;

/**
 *  บางทีลืมใส่ message ใน <Spinner /> จะใส่
 * - Spinner.defaultProps = {} */