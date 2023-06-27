import React, { useState } from 'react'
import HorizontalTimeline from 'react-horizontal-timeline'

export default function Experience() {
  const [value, setValue] = useState(0)
  const [previous, setPrevious] = useState(0)

  // Values should be only date
  const VALUES = ['2021-01-01', '2021-01-15', '2021-03-22']

  // Description array corresponding to values
  const description = [
    'The event of 1 Jan 2021 : Happy New Year \n test ',
    'The event of 15 Jan 2021 : Festival',
    'The event of 22 March 2021 : Board Exam'
  ]

  return (
    <div className="root-div">
      <div
        style={{
          width: '100%',
          height: '100px',
          margin: '0 auto',
          color: 'white'
        }}
      >
        <HorizontalTimeline
          styles={{ outline: '#DFA867', foreground: '#19295C', color: 'white' }}
          index={value}
          indexClick={index => {
            setValue(index)
            setPrevious(value)
          }}
          values={VALUES}
        />
      </div>
      <div className="text-center text-white">{description[value]}</div>
    </div>
  )
}
