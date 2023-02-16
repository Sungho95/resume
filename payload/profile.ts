import { faEnvelope, faPhone, faBlog } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/sungho.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '박성호',
    small: '(백엔드)',
  },
  contact: [
    {
      title: 'tjdgh1785@naver.com',
      link: 'mailto:tjdgh1785@naver.com',
      icon: faEnvelope,
    },
    {
      title: '010-4198-1785',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'github.com/sungho95',
      link: 'https://github.com/sungho95',
      icon: faGithub,
    },
    {
      title: 'ittrue.tistory.com',
      link: 'https://ittrue.tistory.com',
      icon: faBlog,
    },
    // {
    //   link: 'https://www.facebook.com/iu.loen',
    //   icon: faFacebook,
    // },
    // {
    //   title: 'YouTube',
    //   link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
    //   // icon: faRss,
    //   icon: faYoutube,
    // },
  ],
  notice: {
    title: "This resume is a sample page of 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;
