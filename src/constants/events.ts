import LeafWhite from '../images/leaf.svg'
import BlueJays from '../images/blue-jays.svg'
import TFC from '../images/tfc.svg'
import Raptors from '../images/raptors.svg'

export interface TimeEvent {
  title: string
  description?: string
  icon?: ImageMetadata
  position?: number
}

export const eventDates = [
  '1967/05/02',
  '1971/09/01',
  '1972/09/28',
  '1973/10/10',
  '1975/04/19',
  '1976/02/07',
  '1979/12/29',
  '1982/01/20',
  '1982/03/24',
  '1985/06/15',
  '1992/01/02',
  '1992/10/24',
  '1993/05/27',
  '1993/10/23',
  '1994/01/22',
  '1994/06/28',
  '1996/11/10',
  '1999/02/13',
  '2000/02/06',
  '2000/04/27',
  '2001/03/29',
  '2002/02/24',
  '2003/03/13',
  '2003/08/29',
  '2004/03/15',
  '2006/06/26',
  '2006/10/14',
  '2008/03/18',
  '2008/10/14',
  '2008/11/29',
  '2009/09/18',
  '2010/01/31',
  '2010/12/09',
  '2011/08/31',
  '2012/03/29',
  '2013/05/13',
  '2014/04/14',
  '2016/06/24',
  '2016/10/12',
  '2016/10/15',
  '2017/12/09',
  '2018/07/01',
  '2019/06/13',
  '2019/11/25',
  '2020/02/22',
  '2020/08/01',
  '2021/05/20',
  '2021/05/31',
  '2021/07/03',
  '2021/10/01',
  '2022/04/26',
  '2023/04/29',
  '2024/08/14',
  '2025/05/22',
] as const

type EventDate = (typeof eventDates)[number]

export const events: Record<EventDate, TimeEvent> = {
  '1967/05/02': {
    title: 'Stanley Cup Champions',
    icon: LeafWhite,
  },
  '1971/09/01': {
    title: `Ballard's reign begins`,
  },
  '1972/09/28': {
    title: '1972 Summit Series',
    description: 'Paul Henderson scores the game winning goal',
  },
  '1973/10/10': {
    title: `Börje Salming's debut`,
  },
  '1975/04/19': {
    title: `Dave Keon's last game`,
  },
  '1976/02/07': {
    title: `Darryl Sittler's 10 point night`,
  },
  '1979/12/29': {
    title: `Lanny McDonald traded`,
    description: 'Sittler cuts off his C',
  },
  '1982/01/20': {
    title: `Darryl Sittler traded`,
    position: 75,
  },
  '1982/03/24': {
    title: `Rick Vaive scores 50`,
    description: 'Vaive is the first Leaf to score 50 goals in a season',
    position: 35,
  },
  '1985/06/15': {
    title: 'Wendel Clark drafted',
  },
  '1992/01/02': {
    title: 'Gilmore arrives',
  },
  '1992/10/24': {
    title: 'World Series Champions',
    icon: BlueJays,
  },
  '1993/05/27': {
    title: 'Game 6 vs L.A. Kings',
    description: 'The high stick that never was',
  },
  '1993/10/23': {
    title: 'World Series Champions',
    icon: BlueJays,
  },
  '1994/01/22': {
    title: 'Félix "The Cat" Potvin',
    description: 'First Leaf to start an NHL All Star Game',
    position: 45,
  },
  '1994/06/28': {
    title: 'Wendel Clark traded',
    description: 'Leafs aquire Mats Sundin',
    position: 60,
  },
  '1996/11/10': {
    title: 'Potvin vs Hextall',
    description: `"I know Felix doesn't think this is good idea"`,
  },
  '1999/02/13': {
    title: 'Last game at Maple Leaf Gardens',
  },
  '2000/02/06': {
    title: '50th All-Star Game at the ACC',
    position: 75,
  },
  '2000/04/27': {
    title: `Wendel Clark's last game`,
    position: 30,
  },
  '2001/03/29': {
    title: `Tie Domi fights a fan`,
  },
  '2002/02/24': {
    title: 'Pat Quinn captures Olympic gold',
  },
  '2003/03/13': {
    title: 'Gilmour returns! Sorta...',
  },
  '2003/08/29': {
    title: 'JFJ hired as GM',
    description: 'An era of bad trades and signings to follow',
    position: 70,
  },
  '2004/03/15': {
    title: 'Alexander Mogilny scores his 1000th point.',
    position: 55,
  },
  '2006/06/26': {
    title: 'Leafs aquire Andrew Raycroft',
    description: 'Boston gets Tuukka Rask in return',
    position: 45,
  },
  '2006/10/14': {
    title: `Sundin's 500th Goal`,
    description: 'OT, hat-trick, short handed, clutch',
    position: 65,
  },
  '2008/03/18': {
    title: `Vesa Toskala's 197 foot goal`,
  },
  '2008/10/14': {
    title: `Sundin returns as a Canuck`,
    position: 65,
  },
  '2008/11/29': {
    title: `GM Brian Burke says "truculence"`,
    description: 'pugnacity, testosterone, truculence and belligerence',
    position: 40,
  },
  '2009/09/18': {
    title: 'Leafs acquire Phil Kessel',
    description: 'for two 1sts and a 2nd round pick to Boston',
    position: 40,
  },
  '2010/01/31': {
    title: 'Leafs acquire Dion Phaneuf',
    description: '7 player trade with Calgary',
    position: 70,
  },
  '2010/12/09': {
    title: 'Waffles',
  },
  '2011/08/31': {
    title: 'Wade Belak passes',
    description: 'R.I.P. Wade',
  },
  '2012/03/29': {
    title: `"LET'S GO BLUE JAYS!" chant`,
    description: 'Leafs lose 7 - 1',
    position: 35,
  },
  '2013/05/13': {
    title: `Game 7 vs Boston`,
    description: 'It was 4-1',
  },
  '2014/04/14': {
    title: 'Brendan Shanahan hired',
    description: 'The Shanaplan begins',
  },
  '2016/06/24': {
    title: 'Auston Matthews drafted',
    position: 40,
  },
  '2016/10/12': {
    title: `Matthews' 4 goal debut`,
    position: 60,
  },
  '2016/10/15': {
    title: 'Leafs decide to retire 17 players numbers',
    description: '1, 4, 5, 6, 7, 9, 10, 13, 14, 17, 21, 27, 93',
    position: 80,
  },
  '2018/07/01': {
    title: `John Tavares signs`,
  },
  '2017/12/09': {
    title: `MLS Cup Champions`,
    icon: TFC,
  },
  '2019/06/13': {
    title: `NBA Champions`,
    icon: Raptors,
  },
  '2019/11/25': {
    title: `Marner confirms Babcock report`,
    description: 'List of laziest player from Marner then shared with team',
    position: 80,
  },
  '2020/02/22': {
    title: 'David Ayres',
    description:
      '"THEY LOST TO A 42-YEAR-OLD ZAMBONI DRIVER WHO WORKS FOR THE TEAM"',
  },
  '2020/08/01': {
    title: 'NHL COVID-19 bubble',
    description: 'Toronto is chosen as one of two bubble cities',
    position: 70,
  },
  '2021/05/20': {
    title: 'Tavares stretchered off ice',
    position: 30,
  },
  '2021/05/31': {
    title: 'Game 7 vs Montreal',
    description: 'Blow a 3-1 series lead',
    position: 70,
  },
  '2021/07/03': {
    title: 'Longest Stanley Cup drought',
    description:
      '19,787 days breaking the record previously held by the Rangers',
    position: 45,
  },
  '2021/10/01': {
    title: 'All or Nothing',
    description: 'Amazon Prime documentary',
    position: 80,
  },
  '2022/04/26': {
    title: 'AM34 scores 60',
    description: 'First Leaf to score 60 goals and first player since 2012',
  },
  '2023/04/29': {
    title: 'Playoff win!',
    description: 'Leafs beat Tampa to advance past the first round',
    icon: LeafWhite,
  },
  '2024/08/14': {
    title: 'Matthews named Captain',
    description: 'Tavares steps down',
  },
  '2025/05/22': {
    title: 'MLSE parts with Shanahan',
  },
}
