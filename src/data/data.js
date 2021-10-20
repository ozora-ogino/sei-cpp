// Company logos
import google from 'assets/company-logos/google.png';
import ms from 'assets/company-logos/ms.jpg';
import uber from 'assets/company-logos/uber.png';
import amazon from 'assets/company-logos/amazon.webp';
import disney from 'assets/company-logos/disney.png';
import drivemode from 'assets/company-logos/drivemode.png';
import esri from 'assets/company-logos/esri.png';
import auriq from 'assets/company-logos/auriq.png';
import salesforce from 'assets/company-logos/salesforce.png';
import ibm from 'assets/company-logos/ibm.png';
import cisco from 'assets/company-logos/cisco.png';
import longimg from 'assets/illustrations/long-seminar.png';
import shortimg from 'assets/illustrations/short-seminar.png';
import onlineimg from 'assets/illustrations/online-cover.png';

// Online Seminar
import jimmy from 'assets/speakers-icon/jimmy.jpeg';
import jimmyPDF from 'assets/pdf/jimmy-2021-spring.pdf';
import jeffPDF from 'assets/pdf/jeff-2021-spring.pdf';
import jeff from 'assets/speakers-icon/jeff.png';

// < ----------------------- pages/index.js ----------------------- >
// Company's logos
export const companies = [
  { img: ms, size: '240' },
  { img: google, size: '100' },
  { img: amazon, size: '200' },
  { img: salesforce, size: '200' },
  { img: ibm, size: '200' },
  { img: cisco, size: '200' },
  { img: uber, size: '200' },
  { img: disney, size: '240' },
  { img: drivemode, size: '240' },
  { img: esri, size: '200' },
  { img: auriq, size: '200' },
];

export const online = {
  name: 'オンラインセミナー（参加無料）',
  long: '1年に2〜３回程度',
  img: onlineimg,
  description: '世界中で働くプロフェッショナルがZoomを通してDXやコロナ対策の取り組みなど、実例を交えてプレゼンします。',
  to: '/seminars/online',
};

export const long = {
  name: '長期コース',
  long: '期間 : 最長8週間',
  img: longimg,
  description:
    'イノベーションを起こすための手法や理論を体系的にお伝えします。２ヶ月間にわたる実践を通して日本の未来を切り開くイノベーターを育てます。',
  to: '/seminars/long',
};

export const short = {
  name: '短期エグゼクティブコース',
  long: '期間 : 2週間',
  img: shortimg,
  description:
    'DXがどのような効果をもたらすかを知らずに推進責任者になっていませんか？ 視察や見学に留まらない、実践的なDXの学びをエグゼクティブへ提供します',
  to: 'seminars/short',
};

// Youtube videos.
export const videos = [
  'https://www.youtube.com/embed/mxCqJJU8U7w',
  'https://www.youtube.com/embed/i0G2UXFvzls',
  'https://www.youtube.com/embed/C9xc0dRr5Xo',
];

// const testimonials = [
//   {
//     img: google,
//     name: 'google',
//     company: 'google',
//     message: 'google message',
//   },
//   {
//     img: google,
//     name: 'google',
//     company: 'google',
//     message: 'google message',
//   },
// ];

// < ----------------------- pages/seminars/online/index.js ----------------------- >

export const onlineSeminarExamples = [
  {
    title: 'コロナ下における働き方改革',
    name: 'Jimmy Onishi',
    company: 'Microsoft',
    personImg: jimmy,
    pdfImg: jimmyPDF,
  },
  {
    title: '',
    name: 'Jeff Stanford',
    company: 'Drive mode',
    personImg: jeff,
    pdfImg: jeffPDF,
  },
];
