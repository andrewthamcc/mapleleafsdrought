import React from 'react'
import Dot from '../../svgs/dot.svg'
import './time-event.scss'

interface Position {
  left?: number
  right?: number
  bottom?: number
  top?: number
}

interface Props {
  title: string
  description?: string
  position: Position // position of the text
  date: Date
}

export const TimeEvent: React.FC<Props> = ({
  title,
  description = '',
  position,
}) => {
  return <div className="time-event"></div>
}
