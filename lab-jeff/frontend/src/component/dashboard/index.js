import React from 'react';
import { connect } from 'react-redux';

import WaveForm from '../wave-form';
import * as waveActions from '../../action/wave';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <h1> DASHBOARD YO! </h1>
        <WaveForm onComplete={this.props.createWave} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createWave: wave => dispatch(waveActions.createActionRequest(wave)),
});
export default connect(null, mapDispatchToProps)(Dashboard);
