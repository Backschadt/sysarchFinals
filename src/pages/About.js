import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
import about from "../assets/about.jpg";
function About() {
  const jobs = [
    {'type': 'Transcriber', 'desc': 'Verbal Test required', 'avail': 'Open', 'space': '          '},
    {'type': 'Booking Manager', 'desc': 'Problem Solving Test required', 'avail': 'Open'},
    {'type': 'Chat support', 'desc': 'Typing Test required', 'avail': 'Open'},
    {'type': 'Chat support', 'desc': 'Typing Test required', 'avail': 'Open'},
    {'type': 'Booking Manager', 'desc': 'Problem Solving Test required', 'avail': 'Open'},
    {'type': 'Chat support', 'desc': 'Typing Test required', 'avail': 'Open'},
    {'type': 'Chat support', 'desc': 'Typing Test required', 'avail': 'Open'},
    {'type': 'Booking Manager', 'desc': 'Problem Solving Test required', 'avail': 'Open'}
];

  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${about})`, height:'9999999px', textIndent:'-9999px' }}
      ></div>
      <div className="aboutBottom">
        <h1> Available Jobs</h1>
        <div className="job-container">
        <table>
          
        {
          jobs.map((job, index) => (
            <tr>
            <td>{job.type}</td>
            <td>{job.desc}</td>
            <td>{job.avail}</td>
            </tr>
          ))
        }
        </table>
        </div>
        
      </div>
    </div>
  );
}

export default About;
