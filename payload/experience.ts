import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '키트웍스 (Kit Works)',
      position: '백엔드 개발자',
      startedAt: '2023-04',
      descriptions: [
        'IT 솔루션 및 스터디 모아 개발/운영 스타트업',
        '현대자동차 캐스퍼 백엔드 개발',
      ],
      skillKeywords: [
        'Java',
        'Spring',
        'Mybatis',
        'Tibero',
        'MariaDB',
        'Redis',
        'Jenkins',
        'Docker',
        'MSA',
        'JIRA',
      ],
    },
    // {
    //   title: 'Bar Co., Ltd.',
    //   position: 'Software Engineer',
    //   startedAt: '2016-10',
    //   endedAt: '2017-11',
    //   descriptions: [
    //     'Online Commerce IT Startup',
    //     'Development of reservation system and service worker',
    //     'AWS infrastructure and RDBMS maintenance and development',
    //   ],
    //   skillKeywords: ['Node.js', 'MySQL', 'AWS'],
    // },
  ],
};

export default experience;
