import React from 'react'
import PieChart from './PieChart'
import BarGraph from './BarGraph'

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div>
          <PieChart 
            width={400}
            height={400}
          />
        </div>
        <div>
          <BarGraph 
            width={600}
            height={400}
          />
        </div>
        <div>
          <BarGraph
            width={600}
            height={400}
          />
        </div>
        <div>
          <PieChart 
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
