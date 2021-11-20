import React, { useState } from "react";
import "./style.css";

import { FiChevronDown, FiChevronRight } from 'react-icons/fi'; 

const Sidebar = (props) => {
  const [bruteForce, setBruteForce] = useState(false);
  const [greedy, setGreedy] = useState(false);
  const [divideAndC, setDivideAndC] = useState(false);

  const [selectedAlgo, setSelectedAlgo] = useState();

  

  return (
    <div className="sidebar-main-div">
      <div className="sidebar-main-top-div">
        <h2>Visualizer</h2>
      </div>

      <div className="sidebar-contents">
        <div onClick={e => setBruteForce(!bruteForce)} className="sidebar-individua-content">
          <label>Brute Force</label>
          { bruteForce ? <span><FiChevronDown/></span> : <span><FiChevronRight/></span> }
        </div>

        {
          bruteForce ? 
            <div className="sidebar-individua-sub-content-main-div">
              <div onClick={e => setSelectedAlgo(e.target.id)} className="sidebar-individua-sub-content">
                <label id="bubblesort">Bubble Sort</label>
              </div>
              <div className="sidebar-individua-sub-content">
                <label>Selection Sort</label>
              </div>
              <div className="sidebar-individua-sub-content">
                <label>Insertion Sort</label>
              </div>
            </div>

          :
          null
        }

        <div onClick={e => setGreedy(!greedy)} className="sidebar-individua-content">
          <label>Greedy</label>
          { greedy ? <span><FiChevronDown/></span> : <span><FiChevronRight/></span> }
        </div>


        <div onClick={e => setDivideAndC(!divideAndC)} className="sidebar-individua-content">
          <label>Divide and Conquer</label>
          { divideAndC ? <span><FiChevronDown/></span> : <span><FiChevronRight/></span> }
        </div>

        <div className="sidebar-individua-sub-content-main-div">
          {
            divideAndC ? 
            <div className="sidebar-individua-sub-content">
              <label>Dijkstra’s shortest path</label>
            </div>
            :
            null
          }

        </div>
      </div>

    </div>
  );
};

export default Sidebar;
