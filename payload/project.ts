import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '인디고 프로젝트',
      startedAt: '2023-01',
      endedAt: '2023-02',
      where: '코드스테이츠 메인 프로젝트(6인 / 4주)',
      descriptions: [
        {
          content: '[팀장, 백엔드] Redis, Spring Batch, 배포(AWS, Github Actions)',
          weight: 'BOLD',
          descriptions: [
            {
              content: '프로젝트 아이디어, DB 테이블 기획 및 설계  ERD, API 문서 작성',
            },
            {
              content: 'Redis와 Spring Batch를 활용한 쿼리 최적화',
            },
            {
              content: 'QueryDSL을 활용한 동적 검색 쿼리 구현',
            },
            {
              content: 'Github Actions, AWS(EC2, S3, CodeDeploy)를 활용한 배포 자동화 구현',
            },
            {
              content: '커뮤니티 게시판 CRUD, JavaMailSender 구현',
            },
          ],
        },
        {
          content: '배포 링크',
          href: 'http://indiego.site/',
        },
        {
          content: '깃허브 리포지토리',
          href: 'https://github.com/codestates-seb/seb41_main_020',
        },
      ],
    },
    {
      title: 'Lorem ipsum Project',
      startedAt: '2016-10',
      endedAt: '2017-11',
      where: 'Bar Co., LTD.',
      descriptions: [
        { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { content: 'Integer massa magna, feugiat commodo arcu sed, sagittis sollicitudin tortor' },
        { content: 'Nullam diam ex, interdum nec lacus vel, ultrices pretium sapien' },
        { content: 'Proin bibendum non nibh eu aliquet' },
      ],
    },
  ],
};

export default project;
