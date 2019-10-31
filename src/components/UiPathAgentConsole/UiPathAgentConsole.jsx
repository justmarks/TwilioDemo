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
    var processId = GetProcessByName(processName);

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

  function GetProcessByName(processName) {
    UiPathRobot.getRobotProcesses().then((processes) => {
      for (var i=0; i<processes.length; i++) {
        if (processes[i].name.toLowerCase().startsWith(processName.toLowerCase())) {
          console.log("Found the matching process: " + processes[i].name + " (" + processes[i].id + ")");
          return processes[i].id;
        }
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
                <button onClick={GetProcesses}>Terminate policy</button><br />
            </ul>
            <br />
            <div>
                <h3>Robot Status:</h3>
                <span id="robot_status"></span>
            </div>
    </UiPathAgentConsoleStyles>
  );
};

let processName = "Demo-TwilioChangeOfAddress";

export default UiPathAgentConsole;
