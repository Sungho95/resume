import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '•  Java, Spring Boot 기반의 웹 애플리케이션 프로젝트를 개발한 경험이 있습니다.',
    '•  대학 팀 프로젝트를 통해 웹 서비스를 개발하여 대학 내 경진대회에서 수상한 경험이 있습니다.',
    '•  대학 졸업 이후 24주 과정 웹 개발 부트캠프인 코드스테이츠의 백엔드 과정을 수료했습니다.',
    '•  다양한 언어와 기술에 관심이 많으며 풀스택 개발자로 성장하는 것을 목표로 하고 있습니다.',
    '•  동료들과 소통하고 지식 공유하는 것을 즐기며, 조직 내 긍정적인 영향력을 전하고자 노력합니다.',
    '•  기술 블로그를 운영하여 500개 이상의 게시글과 월평균 50,000 이상의 조회 수를 기록하고 있습니다.',
  ],

  sign: 'SungHo',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
