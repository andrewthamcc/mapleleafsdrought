export interface TimeEvent {
  date: Date
  title: string
  description?: string
}

const eventDates = [
  '1967-05-02',
  '1971-09-01',
  '1972-09-28',
  '1973-10-10',
  '1975-04-19',
  '1976-02-07',
  '1979-12-29',
  '1982-01-20',
  '1982-03-24',
  '1985-06-15',
  '1992-01-02',
  '1993-05-27',
  '1994-01-22',
  '1994-06-28',
  '1999-02-13',
  '2000-02-06',
  '2000-04-27',
  '2000-12-27',
  '2001-03-29',
  '2002-02-24',
  '2003-03-13',
  '2004-03-15',
  '2006-06-26',
  '2006-10-14',
  '2008-10-14',
  '2011-08-31',
  '2013-05-13',
  '2014-04-14',
  '2016-06-24',
  '2016-10-12',
  '2018-07-01',
  '2020-02-22',
  '2021-05-31',
] as const

type EventDate = typeof eventDates[number]

export const events: Record<EventDate, TimeEvent> = {
  '1967-05-02': {
    date: new Date('1967/05/02'),
    title: '1967 Champions',
  },
  '1971-09-01': {
    date: new Date('1971/09/01'),
    title: `Ballard's Reign Begins`,
  },
  '1972-09-28': {
    date: new Date('1972/09/28'),
    title: '1972 Summit Series',
    description: 'Paul Henderson scores the game winning goal'
  },
  '1973-10-10': {
    date: new Date('1973/10/10'),
    title: `Börje Salming's debut`,
  },
  '1975-04-19': {
    date: new Date('1975/04/19'),
    title: `Dave Keon's last game`,
  },
  '1976-02-07': {
    date: new Date('1976/02/07'),
    title: `Darryl Sittler's 10 point night`,
  },
  '1979-12-29': {
    date: new Date('1979/12/29'),
    title: `Lanny McDonald traded`,
    description: 'Darryl Sittler cuts off his C'
  },
  '1982-01-20': {
    date: new Date('1982/01/20'),
    title: `Darryl Sittler traded`,
  },
  '1982-03-24': {
    date: new Date('1982/03/24'),
    title: `Rick Vaive Scores 50`,
    description: 'Vaive is the first Leaf to score 50 goals in a season'
  },
  '1985-06-15': {
    date: new Date('1985/06/15'),
    title: 'Wendel Clark drafted',
  },
  '1992-01-02': {
    date: new Date('1992/01/02'),
    title: 'Gilmore arrives',
  },
  '1993-05-27': {
    date: new Date('1993/05/27'),
    title: 'Game 6 vs L.A. Kings',
    description: 'The high stick that never was'
  },
  '1994-01-22': {
    date: new Date('1994/01/22'),
    title: 'Félix "The Cat" Potvin',
    description: 'First Leaf to start an NHL All Star Game'
  },
  '1994-06-28': {
    date: new Date('1994/06/28'),
    title: 'Wendel Clark traded',
    description: 'Leafs aquire future captain Mats Sundin'
  },
  '1999-02-13': {
    date: new Date('1999/02/13'),
    title: 'Last Game at Maple Leaf Gardens',
  },
  '2000-02-06': {
    date: new Date('2000/02/06'),
    title: '50th All-Star Game at the ACC'
  },
  '2000-04-27': {
    date: new Date('2000/04/27'),
    title: `Wendel Clark's last game`
  },
  '2000-12-27': {
    date: new Date('2000/12/27'),
    title: `Lemiux's Return`,
    description: 'Lemiux scores three against the leafs'
  },
  '2001-03-29': {
    date: new Date('2000/03/29'),
    title: `Tie Domi Fights a Fan`,
  },
  '2002-02-24': {
    date: new Date('2002/02/24'),
    title: 'Pat Quinn captures Olympic Gold',
  },
  '2003-03-13': {
    date: new Date('2003/03/13'),
    title: 'Gilmour Returns! Sorta',
  },
  '2004-03-15': {
    date: new Date('2004/03/15'),
    title: 'Mogilny scores his 1000th point.',
  },
  '2006-06-26': {
    date: new Date('2006/06/24'),
    title: 'Leafs aquire Andrew Raycroft',
    description: 'Boston aquires Tukka Rask'
  },
  '2006-10-14': {
    date: new Date('2006/10/14'),
    title: `Sundin's 500th Goal`,
    description: 'OT, short handed, hat-trick'
  },
  '2008-10-14': {
    date: new Date('2008/10/14'),
    title: `Sundin Returns as a Canuck`,
  },
  '2011-08-31': {
    date: new Date('2011/08/31'),
    title: 'Wade Belak Passes',
  },
  '2013-05-13': {
    date: new Date('2013/05/13'),
    title: `Game 7 vs Boston`,
    description: 'It was 4-1'
  },
  '2014-04-14': {
    date: new Date('2014/04/14'),
    title: 'Brendan Shanahan Hired',
    description: 'The Shanaplan begins'
  },
  '2016-06-24': {
    date: new Date('2015/06/24'),
    title: 'Auston Matthews Drafted',
  },
  '2016-10-12': {
    date: new Date('2015/10/12'),
    title: `Matthew's 4 Goal Debut`,
  },
  '2018-07-01': {
    date: new Date('2017/07/01'),
    title: `John Tavares Signs`,
  },
  '2020-02-22': {
    date: new Date('2020/02/22'),
    title: 'David Ayres beats Toronto',
    description: '"THEY LOST TO A 42-YEAR-OLD ZAMBONI DRIVER WHO WORKS FOR THE TEAM"'
  },
  '2021-05-31': {
    date: new Date('2021/05/31'),
    title: 'Game 7 vs Montreal',
  },
}