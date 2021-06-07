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
  '1992-10-24',
  '1993-05-27',
  '1993-10-23',
  '1994-01-22',
  '1994-06-28',
  '1999-02-13',
  '2000-02-06',
  '2000-04-27',
  '2001-03-29',
  '2002-02-24',
  '2003-03-13',
  '2003-08-29',
  '2004-03-15',
  '2006-06-26',
  '2006-10-14',
  '2008-03-18',
  '2008-10-14',
  '2008-11-29',
  '2009-09-18',
  '2010-01-31',
  '2010-12-09',
  '2011-08-31',
  '2012-03-29',
  '2013-05-13',
  '2014-04-14',
  '2016-06-24',
  '2016-10-12',
  '2017-12-09',
  '2018-07-01',
  '2019-06-13',
  '2020-02-22',
  '2020-08-01',
  '2021-05-31',
] as const

type EventDate = typeof eventDates[number]

export const events: Record<EventDate, TimeEvent> = {
  '1967-05-02': {
    date: new Date('1967/05/02'),
    title: 'Stanley Cup Champions',
  },
  '1971-09-01': {
    date: new Date('1971/09/01'),
    title: `Ballard's Reign Begins`,
  },
  '1972-09-28': {
    date: new Date('1972/09/28'),
    title: '1972 Summit Series',
    description: 'Paul Henderson scores the game winning goal',
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
    description: 'Sittler cuts off his C',
  },
  '1982-01-20': {
    date: new Date('1982/01/20'),
    title: `Darryl Sittler traded`,
  },
  '1982-03-24': {
    date: new Date('1982/03/24'),
    title: `Rick Vaive Scores 50`,
    description: 'Vaive is the first Leaf to score 50 goals in a season',
  },
  '1985-06-15': {
    date: new Date('1985/06/15'),
    title: 'Wendel Clark drafted',
  },
  '1992-01-02': {
    date: new Date('1992/01/02'),
    title: 'Gilmore arrives',
  },
  '1992-10-24': {
    date: new Date('1992/10/24'),
    title: 'World Series Champions',
  },
  '1993-05-27': {
    date: new Date('1993/05/27'),
    title: 'Game 6 vs L.A. Kings',
    description: 'The high stick that never was',
  },
  '1993-10-23': {
    date: new Date('1993/10/23'),
    title: 'World Series Champions',
  },
  '1994-01-22': {
    date: new Date('1994/01/22'),
    title: 'Félix "The Cat" Potvin',
    description: 'First Leaf to start an NHL All Star Game',
  },
  '1994-06-28': {
    date: new Date('1994/06/28'),
    title: 'Wendel Clark traded',
    description: 'Leafs aquire future captain Mats Sundin',
  },
  '1999-02-13': {
    date: new Date('1999/02/13'),
    title: 'Last Game at Maple Leaf Gardens',
  },
  '2000-02-06': {
    date: new Date('2000/02/06'),
    title: '50th All-Star Game at the ACC',
  },
  '2000-04-27': {
    date: new Date('2000/04/27'),
    title: `Wendel Clark's last game`,
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
  '2003-08-29': {
    date: new Date('2003/08/29'),
    title: 'JFJ hired as GM',
    description: 'An era of bad trades and signings to follow',
  },
  '2004-03-15': {
    date: new Date('2004/03/15'),
    title: 'Mogilny scores his 1000th point.',
  },
  '2006-06-26': {
    date: new Date('2006/06/24'),
    title: 'Leafs aquire Andrew Raycroft',
    description: 'Boston gets Tuukka Rask in return',
  },
  '2006-10-14': {
    date: new Date('2006/10/14'),
    title: `Sundin's 500th Goal`,
    description: 'OT, hat-trick, short handed, clutch',
  },
  '2008-03-18': {
    date: new Date('2008/03/18'),
    title: `Vesa Toskala's 197 Foot Goal`,
  },
  '2008-10-14': {
    date: new Date('2008/10/14'),
    title: `Sundin Returns as a Canuck`,
  },
  '2008-11-29': {
    date: new Date('2008/11/29'),
    title: `GM Brian Burke says "truculence"`,
    description: 'pugnacity, testosterone, truculence and belligerence',
  },
  '2009-09-18': {
    date: new Date('2009/09/18'),
    title: 'Leafs acquire Phil Kessel',
    description: 'for two 1sts and a 2nd round pick to Boston',
  },
  '2010-01-31': {
    date: new Date('2010/01/31'),
    title: 'Leafs acquire Dion Phaneuf',
    description: '7 player trade with Calgary',
  },
  '2010-12-09': {
    date: new Date('2010/12/09'),
    title: 'Waffles',
  },
  '2011-08-31': {
    date: new Date('2011/08/31'),
    title: 'Wade Belak Passes',
    description: 'R.I.P. Wade',
  },
  '2012-03-29': {
    date: new Date('2012/03/29'),
    title: `"LET'S GO BLUE JAYS!" Chant`,
    description: 'Leafs lose 7 - 1',
  },
  '2013-05-13': {
    date: new Date('2013/05/13'),
    title: `Game 7 vs Boston`,
    description: 'It was 4-1',
  },
  '2014-04-14': {
    date: new Date('2014/04/14'),
    title: 'Brendan Shanahan Hired',
    description: 'The Shanaplan begins',
  },
  '2016-06-24': {
    date: new Date('2016/06/24'),
    title: 'Auston Matthews Drafted',
  },
  '2016-10-12': {
    date: new Date('2016/10/12'),
    title: `Matthews' 4 Goal Debut`,
  },
  '2018-07-01': {
    date: new Date('2017/07/01'),
    title: `John Tavares Signs`,
  },
  '2017-12-09': {
    date: new Date('2017/12/09'),
    title: `MLS Cup Champions`,
  },
  '2019-06-13': {
    date: new Date('2019/06/13'),
    title: `NBA Champions`,
  },
  '2020-02-22': {
    date: new Date('2020/02/22'),
    title: 'David Ayres beats Toronto',
    description:
      '"THEY LOST TO A 42-YEAR-OLD ZAMBONI DRIVER WHO WORKS FOR THE TEAM"',
  },
  '2020-08-01': {
    date: new Date('2020/08/01'),
    title: 'NHL COVID-19 Bubble',
    description: 'Toronto is chosen as one of two bubble cities',
  },
  '2021-05-31': {
    date: new Date('2021/05/31'),
    title: 'Game 7 vs Montreal',
    description: 'Blow a 3-1 series lead',
  },
}
