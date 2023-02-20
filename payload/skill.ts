import { ISkill } from '../component/skill/ISkill';

const language: ISkill.Skill = {
  category: 'Language',
  items: [
    {
      title: 'Java',
      // level: 3,
    },
  ],
};

const framwork: ISkill.Skill = {
  category: 'Framework / Library',
  items: [
    {
      title: 'Spring Boot',
    },
    {
      title: 'Spring MVC',
    },
    {
      title: 'Spring Security',
    },
    {
      title: 'Spring Batch',
    },
    {
      title: 'JPA',
    },
    {
      title: 'Querydsl',
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
    },
    {
      title: 'Redis',
    },
    {
      title: 'H2',
    },
    // {
    //   title: 'Redis',
    //   level: 2,
    // },
    // {
    //   title: 'MongoDB',
    //   level: 1,
    // },
  ],
};

const deploy: ISkill.Skill = {
  category: 'Deploy',
  items: [
    {
      title: 'AWS EC2',
    },
    {
      title: 'AWS S3',
    },
    {
      title: 'AWS RDS',
    },
    {
      title: 'AWS CodeDeploy',
    },
    {
      title: 'AWS Route 53',
    },
    {
      title: 'Github Actions',
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'Git / Github',
    },
    {
      title: 'InteliJ',
    },
    {
      title: 'Notion',
    },
    {
      title: 'Slack',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [language, framwork, database, deploy, etc],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
