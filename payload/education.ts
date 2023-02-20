import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '코드스테이츠 (Codestates)',
      subTitle: '백엔드 41기(정부지원 3회차) 수료',
      descriptions: [
        {
          content: 'Java, Spring 기반의 백엔드 개발 학습',
        },
        {
          content: '자료구조, 알고리즘',
        },
        {
          content: 'Git/Github, 배포, CI/CD',
        },
        {
          content: 'REST API',
        },
        {
          content: '페어 프로그래밍, 2번의 협업 프로젝트 진행',
        },
      ],
      startedAt: '2022-08',
      endedAt: '2023-02',
    },
    {
      title: '한경대학교',
      subTitle: '컴퓨터공학과 졸업(학사)',
      descriptions: [
        {
          content: '전공학점 4.05 / 4.5',
          descriptions: [
            {
              content: '객체지향 프로그래밍1(A0), 객체지향 프로그래밍2(A+), 웹어플리케이션개발(A+)',
            },
          ],
        },
        {
          content: '평균학점 3.86 / 4.5',
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
