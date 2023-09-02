import React from 'react'
import {Bar} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'

  ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

export default function BarChart() {
  const data ={
    labels:['Januvary', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        labels:'Revenue',
        backgroundColor:'#4e73df',
        hoverBackgroundColor:'#w259d9',
        borderColor:'#4e73df',
        data:[4215, 5312, 6251, 7841, 9821, 14984]
      }
    ]
  }
  return (
    <>
      <Bar data={data} />
    </>
  )
}
