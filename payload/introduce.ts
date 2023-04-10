import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '•  Java, Spring Boot 기반의 웹 애플리케이션 프로젝트를 개발한 경험이 있습니다.',
    '•  대학 팀 프로젝트를 통해 웹 서비스를 개발하여 대학 내 경진대회에서 수상한 경험이 있습니다.',
    '•  대학 졸업 이후 24주 과정 웹 개발 부트캠프인 코드스테이츠의 백엔드 과정을 수료했습니다.',
    '•  효율적인 코드에 관심이 많아 현재 redis와 Spring Batch를 활용한 트래픽 처리에 대한 학습을 하고 있습니다.',
    '•  동료들과 소통하고 지식 공유하는 것을 즐기며, ‘아낌없이 주는 나무’라는 평가를 받았습니다.',
    '•  기술 블로그를 운영하여 300개 이상의 게시글과 월평균 10,000 이상의 조회 수를 기록하고 있습니다.',
  ],

  sign: 'SungHo',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
