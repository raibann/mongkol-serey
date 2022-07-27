export interface IEventToday {
  id: number;
  customerName: string;
  facebook: string;
  contacNumber: string;
  gift: number;
}
export interface IUpcomingEvent {
  id: number;
  profile: string;
  upComing: string;
  ordered: number;
  lastOrder: string;
  customerName: string;
  facebook: string;
  telegram: string;
  contacNumber: string;
  gift: number;
}
const eventToday: IEventToday[] = [
  {
    id: 1,
    customerName: 'Ma Raibann',
    facebook: 'Raibann Ma',
    contacNumber: '092123305',
    gift: 2,
  },
  {
    id: 2,
    customerName: 'Meas Soaminea',
    facebook: 'Meas Soaminea',
    contacNumber: '012914314',
    gift: 2,
  },
  {
    id: 3,
    customerName: 'Rem Brosna',
    facebook: 'Rem Brosna',
    contacNumber: '016919081',
    gift: 2,
  },
  {
    id: 4,
    customerName: 'Heom Ponlork',
    facebook: 'Dara Pl',
    contacNumber: '0967848534',
    gift: 2,
  },
  {
    id: 5,
    customerName: 'Unknow',
    facebook: 'Unknow',
    contacNumber: '012345678',
    gift: 2,
  },
  {
    id: 6,
    customerName: 'Unknow',
    facebook: 'Unknow',
    contacNumber: '012345678',
    gift: 7,
  },
  {
    id: 7,
    customerName: 'Unknow',
    facebook: 'Unknow',
    contacNumber: '012345678',
    gift: 2,
  },
];

const upcomingEvent: IUpcomingEvent[] = [
  {
    id: 1,
    profile: '',
    upComing: '2 days',
    ordered: 2,
    lastOrder: '21-07-2022',
    customerName: 'unknow',
    facebook: 'unknow',
    telegram: 'unknow',
    contacNumber: '0987654309',
    gift: 2,
  },
  {
    id: 2,
    profile: '',
    upComing: '2 days',
    ordered: 2,
    lastOrder: '21-07-2022',
    customerName: 'unknow',
    facebook: 'unknow',
    telegram: 'unknow',
    contacNumber: '0987654309',
    gift: 2,
  },
  {
    id: 3,
    profile: '',
    upComing: '2 days',
    ordered: 2,
    lastOrder: '21-07-2022',
    customerName: 'unknow',
    facebook: 'unknow',
    telegram: 'unknow',
    contacNumber: '0987654309',
    gift: 2,
  },
  {
    id: 4,
    profile: '',
    upComing: '2 days',
    ordered: 2,
    lastOrder: '21-07-2022',
    customerName: 'unknow',
    facebook: 'unknow',
    telegram: 'unknow',
    contacNumber: '0987654309',
    gift: 2,
  },
  {
    id: 5,
    profile: '',
    upComing: '2 days',
    ordered: 2,
    lastOrder: '21-07-2022',
    customerName: 'unknow',
    facebook: 'unknow',
    telegram: 'unknow',
    contacNumber: '0987654309',
    gift: 2,
  },
  {
    id: 6,
    profile: '',
    upComing: '2 days',
    ordered: 2,
    lastOrder: '21-07-2022',
    customerName: 'unknow',
    facebook: 'unknow',
    telegram: 'unknow',
    contacNumber: '0987654309',
    gift: 2,
  },
];
export { eventToday, upcomingEvent };
