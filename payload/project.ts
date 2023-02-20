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
      title: '스택 오버플로우 클론 프로젝트',
      startedAt: '2022-12',
      endedAt: '2023-01',
      where: '코드스테이츠 프리 프로젝트(6인 / 2주)',
      descriptions: [
        {
          content: '[팀원, 백엔드] Spring Security, JWT 토큰 기반 인증',
          weight: 'BOLD',
          descriptions: [
            {
              content: 'DB 테이블 기획 및 설계  ERD, API 문서 작성',
            },
            {
              content: 'Spring Security를 활용한 보안 설정',
            },
            {
              content: 'JWT 토큰 기반 인증 구현',
            },
            {
              content: '회원 도메인 CRUD, JavaMailSender  구현',
            },
            {
              content: 'AWS(EC2, S3)를 활용한 수동 배포 구현',
            },
          ],
        },
        {
          content: '깃허브 리포지토리',
          href: 'https://github.com/codestates-seb/seb41_pre_029',
        },
      ],
    },
    {
      title: '모바일 키오스크 프로젝트',
      startedAt: '2021-03',
      endedAt: '2021-10',
      where: '한경대학교 졸업 프로젝트(3인)',
      descriptions: [
        {
          content: '[팀원, 풀스택] Spring Boot, Spring MVC, Thymeleaf, HTML, CSS, AWS(EC2, RDS)',
          weight: 'BOLD',
          descriptions: [
            {
              content: '프로젝트 아이디어, DB 테이블, 엔티티 기획 및 설계',
            },
            {
              content: '상품, 주문 도메인 CRUD 구현',
            },
            {
              content: 'Thymeleaf를 활용한 페이지 렌더링',
            },
            {
              content: 'Bootstrap을 활용한 판매 페이지 및 고객 페이지 구현',
            },
            {
              content: 'AWS(EC2, RDS)를 활용한 수동 배포 구현',
            },
          ],
        },
        {
          content: '경진대회 전시 링크',
          href: 'https://www.vavafair.com/home/booth/main/mobilekiosk',
        },
        {
          content: '깃허브 리포지토리',
          href: 'https://github.com/Sungho95/Mobile-Kiosk',
        },
      ],
    },
  ],
};

export default project;
