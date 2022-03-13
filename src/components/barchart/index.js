import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({visualData}) => {

    
    const [bgColor, setBgColor] = useState();
    const [labels, setLabels] = useState();

    const options = {
        animation: {
            duration: 300, // general animation time
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Visualize Bar Chart',
          },
        },
      };



    useEffect(() => {
        setLabels(visualData.arr);
        const backgroundColor = [];

        visualData.arr.map((ele, index) => {
          // if(index === visualData.i || index === visualData.j){
          //   backgroundColor.push('#9900cc');
          // }else{
          //   backgroundColor.push('#c5b6c6');
          // }
          if(visualData.min_idx && index === visualData.min_idx){
            backgroundColor.push('#9900cc')
          }else if(visualData.key && index === visualData.key){
            backgroundColor.push('red')
          }else{
            if(visualData.swap && visualData.swap.includes(ele)) backgroundColor.push('red');
            else if(visualData.ele &&  visualData.ele.includes(ele)) backgroundColor.push('#9900cc')
            else backgroundColor.push('#c5b6c6')
          }

        }) 
        

        setBgColor(backgroundColor);
    }, [visualData])
    

    const data = {
        labels,
        datasets: [
            {
                label: 'swap elements',
                data: labels,
                backgroundColor: bgColor,
            },
        ],
    };

    return(
        <Bar options={options} data={data}/>
    )
}

export default BarChart;
