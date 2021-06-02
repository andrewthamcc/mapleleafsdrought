import { DateTime } from 'luxon'

export const calculateTime = (startTime: Date) => {
  const start = DateTime.fromJSDate(startTime)
  const difference = DateTime.now().diff(start, [
    'years',
    'months',
    'days',
    'hours',
    'minutes',
    'seconds',
  ])

  return difference.toObject()
}
