import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '코드스테이츠 (Codestates)',
      subTitle: '백엔드 41기(정부지원 3회차) 수료',
      descriptions: [],
      startedAt: '2022-08',
      endedAt: '2023-02',
    },
    {
      title: '한경대학교',
      subTitle: '컴퓨터공학과 졸업(학사)',
      descriptions: [
        {
          content: '전공학점 4.05/4.5',
        },
        {
          content: '평균학점 3.86/4.5',
        },
        {
          content: '토목공학과에서 컴퓨터공학과로 전과',
        },
      ],
      startedAt: '2014-03',
      endedAt: '2022-02',
    },
    {
      title: '화곡고등학교',
      subTitle: '자연계 졸업(서울시 강서구)',
      descriptions: [],
      startedAt: '2011-03',
      endedAt: '2014-02',
    },
  ],
};

export default education;
