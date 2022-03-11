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

        visualData.arr.map(ele => {
            if(visualData.swap.includes(ele)) backgroundColor.push('#0a8c96');
            else backgroundColor.push('#c5b6c6')
        }) 

        setBgColor(backgroundColor);
    }, [visualData])
    

    const data = {
        labels,
        datasets: [
            {
                label: 'Element',
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
