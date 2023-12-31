import { GrUserAdmin } from 'react-icons/gr';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import theme from 'theme/theme';

const listTitle = [
  {
    id: undefined,
    title: 'កម្លាំងចុងភៅ',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'ថ្លៃជួលសម្ភារៈ',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'ឡានដឹក',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'ហ្គាស',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'សាច់ជ្រូក',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'សាច់ទា',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'សាច់គោ',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'សាច់មាន់',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'គ្រឿងសមុទ្រ',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'សាច់ពពែ',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'ត្រីឆ្ដោរ',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'ត្រីឆ្ដុង',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'ត្រីតុកែ',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'ត្រីសុងហឺ',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'ជ្រូកខ្វៃ',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'ទាខ្វៃ',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'បន្លែ',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'ប្រហិតបាក់សៀប ជើងទា',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'ចាហួយ',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'រោងកម្មវិធី',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'កម្រាលព្រំ',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'ក្ដាពិស',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'អំពូល កង្ហារ',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'អំពូល គ្រីសស្ទាល់',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'ម៉ាស៊ីនភ្លើង',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'ចាប់ក្រណាត់មុខរោង',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'សេវាពិធីការ',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'នំបុ័ង',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'ឆាខ្វៃ សណ្ដែក',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'បង្អែម',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'ត្រីឆ្អើរ',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'ពងត្រី',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'ទឹកកកអនាម័យ',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
  {
    id: undefined,
    title: 'អង្ករ',
    totalPrice: 0,
    paidBy: '',
    other: '',
  },
];

const paidBy = [
  'Cash',
  'ABA',
  'ACLEDA',
  'WING',
  'BAKONG',
  'CANADIA',
  'TRUE MONEY',
  // 'SATHAPANA',
  // 'WOORI',
  // 'AMK',
  // 'PRASAC',
  // 'PHILLIP',
  // 'PRINCE',
  // 'HATTHA',
  // 'CP Bank',
  // 'VATTANAC',
  // 'JTRUST ROYAL',
  // 'FTB Bank',
  // 'PPC Bank',
  // 'CHIP MONG Bank',
  // 'MOHANOKOR',
  // 'SBI LY HOUR',
  // 'MAY Bank',
  // 'eMoney Agent',
  // 'Pi Pay',
];

const paidByColor: { [key: string]: string } = {
  ACLEDA: '#143c6d',
  ABA: '#005b7a',
  WING: '#a4c535',
  BAKONG: '#dc222c',
  CANADIA: '#D61229',
  Cash: '#BB9300',
  'TRUE MONEY': '#f88a30',
  // 'Pi Pay': '#ed288a',
};

const foodList = [
  'មហាសម្បត្តិទាំង៥',
  'ឆាប៉ាវហុឺ តៅហ៊ូពងមាន់ 10ក្រឡ',
  'ភ្លាម៉ាញ៉ាណេសាច់គោ ',
  'បង្គាបំពងខ្ទឹមស',
  'ត្រីឆ្ពុងចំហុយក្រូចឆ្មា ទឹកដោះគោឆៅ',
  'ម្ជូរយួនបង្កង',
  'បាយឆាគ្រាប់ឈូក & បាយស',
  'បង្អែមសងខ្យា3ស្រទាប់',
  'ក្ងានខ្វៃទឹកឃ្មុំ ទាខ្វៃប៉េកាំង',
  'ឆាផ្សិតតុងកូវ បន្លែបញ្ជះពណ៍',
  'ម្ជូរគ្រឿងពោះគោ',
  'បាយឆាពងទាប្រៃ & បាយស',
  'បង្អែមចេកខ្ទិះ ពងមាន់',
  'ប្រហិតត្រីស្លាត',
  'គាវបំពង',
  'ប្រហិតអំពៅ',
  'ទាផ្លិត ជ្រក់ឆៃថាវ',
  'មាន់ទឹមចំហុយ',
  'បង្គារុំស្បៃ',
  'ត្រីសុងហឺចំហុយក្រូចឆ្មា',
  'តុងយាំកូនកាត់',
  'បាយឆាយ៉ាងចូវ បាយស',
  'បង្អែមគ្រាប់ឈូក',
  'បង្អែមត្នោត',
  'ត្រីប្រម៉ាចៀន',
  'តី្រប្រម៉ា ចំហុយពងទា',
  'ត្រីបំពងសា្វយ ទឹកត្រីអំពិលទុំ',
  'ម្ជូយួនគ្រឿងសមុទ្រ',
  'រោងកម្មវិធីចាប់ក្រណាត់ម៉ូតថ្មី',
  'អំពូលគ្រីស្តាល់',
  'កង្ហារត្រជាក់',
  'ព្រំក្រហមមួយផ្លុវដើរ',
  'ទឹកកកអនាម័យ',
  'ក្បាលជ្រូក១ មាន់ស្ងោរ១គូ',
  'អាហារសែនកុងម៉ា',
  'សេវាពិធីការ ៧នាក់',
  'បបរពេលព្រឹក ២ខ្ទះ (លើស 25០$/ខ្ទះ)',
  'បាយថ្ងៃត្រង់ ១១តុ (លើស 8០$/តុ)',
  'ក្តាពីស 3$/m2',
  'បន្ទប់ទឹកចល័ត 100$/pc',
  'ត្រីប្រម៉ាចំហុយ',
  'ត្រីបំពងឡប់ឡែ',
  'ស៊ុបចាប់ឆាយគ្រឿងសមុទ្រ',
  'ឆាឆ្អឹងជំនីបំពងបន្លែជូរអែម',
  'តុងយាំគ្រឿងសមុទ្រ',
  'ត្រីសុងហឺបំពងប្រាំរសជាតិ',
  'ញាំជើងទាគ្រឿងសមុទ្រ',
  'ទាខ្វៃប៉េកាំង',
  'បាយសែនកុងម៉ា 1ថាស',
  'ឆាបង្គា ខាត់ណាចិន',
  'ត្រីក្រហមចំហុយមីសួរ',
  'ស៊ុបក្រពះជ្រូកខ្ចី',
  'ស៊ុបក្តាមផ្សិតមាស 10ក្រឡ',
  'ត្រីឆ្ពុងចំហុយទឹកស៊ីអៀវចិន',
];
const unitList = [
  'តុ',
  'ចាន',
  'ខ្ទះ',
  'នាក់',
  'ឈុត',
  'm²',
  'គ្រឿង',
  'ប្រឡោះ',
  // `m${'2'.sup()}`,
  'pcs',
];

const eventList = [
  'Wedding',
  'Birthday',
  'Party',
  'House Warming',
  'Engagement',
];

export { paidBy, paidByColor, listTitle, foodList, unitList, eventList };

export const role = [
  {
    id: 1,
    name: 'ROLE_SUPER_ADMIN',
    description: 'Has access to everything',
    icon: (
      <GrUserAdmin
        size={24}
        style={{
          position: 'relative',
          left: 2,
        }}
      />
    ),
    disable: true,
  },
  {
    id: 2,
    name: 'ROLE_ADMIN',
    description: 'No access to user management',
    icon: (
      <MdOutlineAdminPanelSettings
        size={28}
        color={theme.palette.common.black}
      />
    ),
    disable: false,
  },
];

export enum MonthRanks {
  'Jan' = 1,
  'Feb' = 2,
  'Mar' = 3,
  'Apr' = 4,
  'May' = 5,
  'Jun' = 6,
  'Jul' = 7,
  'Aug' = 8,
  'Sep' = 9,
  'Oct' = 10,
  'Nov' = 11,
  'Dec' = 12,
}
export const MonthKH: {
  [key: string]: string;
} = {
  January: 'មករា',
  February: 'កុម្ភៈ',
  March: 'មិនា',
  April: 'មេសា',
  May: 'ឧសភា',
  June: 'មិថុនា',
  July: 'កក្កដា',
  August: 'សីហា',
  September: 'កញ្ញា',
  October: 'តុលា',
  November: 'វិច្ឆិកា',
  December: 'ធ្នូ',
};

export const PercentFilter: { [key: string]: number } = {
  week: 0,
  month: 1,
  year: 2,
};

// Types
export enum EnumCustomerType {
  POTENTIAL_CUSTOMER = 'POTENTIAL_CUSTOMER',
  CUSTOMER = 'CUSTOMER',
}

export enum EnumGenderType {
  OTHER = 'OTHER',
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum EnumSocialType {
  FB = 'FB',
  TG = 'TG',
}

export enum EnumStockType {
  STOCK = 'STOCK',
  NON_STOCK = 'NON_STOCK',
}

export const StockTypeDescription: { [key: string]: string } = {
  STOCK: 'មានក្នុងស្តុក',
  NON_STOCK: 'មិនមានស្តុក',
};

export const EXCHANGE_RATE = 4100;
