import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '새해복설냥',
      startedAt: '2023-12',
      endedAt: '2024-01',
      where: '메디치 팀 프로젝트(6인)',
      descriptions: [
        {
          content: '[팀원, 백엔드] Type Script, NestJs, TypeORM, PostgreSQL',
          weight: 'BOLD',
          descriptions: [
            {
              content: '편지를 대신 전해주는 고양이라는 컨셉의 토이 프로젝트',
            },
            {
              content: '편지 및 악세사리 설계 및 REST API 개발',
            },
            {
              content: 'Node.js, Nest.js, TypeORM 활용 경험',
            },
          ],
        },
        {
          content: '새해복설냥 홈페이지',
          href: 'https://www.catsnewyear.site/',
        },
        {
          content: '깃허브 리포지토리',
          href: 'https://github.com/Sungho95/shinnyang-server',
        },
      ],
    },
    {
      title: '인디고 - 프로젝트 유지보수',
      startedAt: '2023-03',
      where: '코드스테이츠 수료 이후 프로젝트 유지보수 활동',
      descriptions: [
        {
          content: '[백엔드 리드, 백엔드] 기능 개발 및 배포',
          weight: 'BOLD',
          descriptions: [
            {
              content: '운영 및 개발 환경 분리(ci/cd 적용)',
            },
            {
              content: '클라이언트 및 서버 https 적용',
            },
            {
              content: '결제 API 연동 및 기능 유지보수',
            },
            {
              content: '1차 마일스톤 베타 테스트 진행',
            },
            {
              content: '사용자 설문조사 및 요구사항 반영',
            },
          ],
        },
        {
          content: '깃허브 리포지토리',
          href: 'https://github.com/indiego-project/indiego',
        },
      ],
    },
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
