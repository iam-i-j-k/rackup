import React from 'react'
import PieChart from './PieChart'
import BarGraph from './BarGraph'
import BarGraph2 from './BarGraph2'
import PieGraph2 from './PieChart2'

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
          <BarGraph2
            width={600}
            height={400}
          />
        </div>
        <div>
          <PieGraph2
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
