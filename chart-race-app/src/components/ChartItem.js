import React from 'react'

export default function ChartItem(props) {
  return (
    <div className='app-chart-item-wrapper' style={{top:props.top,width:props.width}}>
      <div className='app-chart-item' style={{backgroundColor:props.backgroundColor}}>
          {props.text}
      </div>
      <div className='app-chart-text'>
        {props.count}
      </div>
    </div>
  )
}
