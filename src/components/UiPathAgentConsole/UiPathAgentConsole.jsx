/* eslint-disable no-unused-expressions */
/* eslint-disable react/style-prop-object */
import React from 'react';

import { UiPathAgentConsoleStyles } from './UiPathAgentConsole.Styles';
require('../../UiPathRobot.js');

// It is recommended to keep components stateless and use redux for managing states
const UiPathAgentConsole = (props) => {
  if (!props.isOpen) {
    return null;
  }
  
  let UiPathRobot = window.UiPathRobot;

  function RunProcess(e) {
    UiPathRobot.runProcess(processId, null, (status) => {
        JobStatus(status);
      }).then(
        result => { JobStatus("Change of address completed"); },
        err => { console.error }
      );
  }

  function GetProcesses(e) {
    UiPathRobot.getRobotProcesses().then((processes) => {
        for (var i=0; i<processes.length; i++) {
            console.log(processes[i].id + " " + processes[i].name);
        }
    });
}

function JobStatus(status)
{
    document.getElementById('robot_status').innerHTML = status;
}

  return (
    <UiPathAgentConsoleStyles>
      <h3>Suggested Actions:</h3>
            <ul>
                <button onClick={RunProcess}>Change of Address</button><br />
                <button onClick={GetProcesses}>Add policy</button><br />
                <button onClick={RunProcess}>Terminate policy</button><br />
            </ul>
            <br />
            <div>
                <h3>Robot Status:</h3>
                <span id="robot_status"></span>
            </div>
    </UiPathAgentConsoleStyles>
  );
};

let processId = "ee14cf27-6e91-4a7f-8908-d737e7d96cb9";

export default UiPathAgentConsole;
