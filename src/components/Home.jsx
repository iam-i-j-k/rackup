import React from 'react'
import PieChart from './PieChart'
import BarGraph from './BarGraph'

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
        <div>
          <PieChart />
        </div>
        <div>
          <BarGraph />
        </div>
        <div>
          <BarGraph />
        </div>
        <div>
          <PieChart />
        </div>
      </div>
    </div>
  )
}

export default Home
