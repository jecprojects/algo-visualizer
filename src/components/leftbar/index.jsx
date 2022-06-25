import React, { useState } from "react";
import "./style.css";

import { FiChevronDown, FiChevronRight } from 'react-icons/fi'; 
import { NavLink, useLocation } from "react-router-dom";

const LeftBar = (props) => {

  const location = useLocation()

  const [bruteForce, setBruteForce] = useState(false);
  const [graph, setGraph] = useState(false);
  const [divideAndC, setDivideAndC] = useState(false);

  const [selectedAlgo, setSelectedAlgo] = useState(location.pathname);

  return (
    <div className="sidebar-main-div">

      <div className="sidebar-contents">
        <div onClick={e => setBruteForce(!bruteForce)} className="sidebar-individua-content">
          <label>Sorting Algorithm</label>
          { bruteForce ? <span><FiChevronDown/></span> : <span><FiChevronRight/></span> }
        </div>

        {
          bruteForce ? 
            <div className="sidebar-individua-sub-content-main-div">

              {/* For Bubble sort Tab */}
              <div className="sidebar-individua-sub-content">
                <NavLink 
                  id="bubblesort"
                  className={selectedAlgo === "/bubble-sort" ? "selected" : "nav-link"}
                  to={"/bubble-sort"}>
                    Bubble Sort
                </NavLink>
              </div>

              {/* For Bubble Sort Tab */}
              <div className="sidebar-individua-sub-content">
                <NavLink 
                  to={"/selection-sort"}
                  className={selectedAlgo === "/selection-sort" ? "selected" : "nav-link"}
                  >
                    Selection Sort
                </NavLink>
              </div>

              {/* For Insertion Tab */}
              <div className="sidebar-individua-sub-content">
                <NavLink
                  className={selectedAlgo === "/insertion-sort" ? "selected" : "nav-link"}
                  to={"/insertion-sort"}>
                    Insertion Sort
                </NavLink>
              </div>
            </div>

          :
          null
        }

        <div onClick={e => setGraph(!graph)} className="sidebar-individua-content">
          <label>Graph</label>
          { graph ? <span><FiChevronDown/></span> : <span><FiChevronRight/></span> }
        </div>

        {
          graph ? 
            <div className="sidebar-individua-sub-content-main-div">

              {/* For Bubble sort Tab */}
              <div className="sidebar-individua-sub-content">
                <NavLink 
                  id="bubblesort"
                  className={selectedAlgo === "/bfs" ? "selected" : "nav-link"}
                  to={"/bfs"}>
                    BFS
                </NavLink>
              </div>

              {/* For Bubble Sort Tab */}
              <div className="sidebar-individua-sub-content">
                <NavLink 
                  to={"/dfs"}
                  className={selectedAlgo === "/dfs" ? "selected" : "nav-link"}
                  >
                    DFS
                </NavLink>
              </div>
            </div>

          :
          null
        }

        <div onClick={e => setDivideAndC(!divideAndC)} className="sidebar-individua-content">
          <label>Divide and Conquer</label>
          { divideAndC ? <span><FiChevronDown/></span> : <span><FiChevronRight/></span> }
        </div>

      </div>

    </div>
  );
};

export default LeftBar;
