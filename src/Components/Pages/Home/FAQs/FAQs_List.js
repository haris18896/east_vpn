import { nanoid } from 'nanoid'

export const FAQ__List_1 = {
  display: true,
  list: [
    {
      id: nanoid(),
      question: 'What is VPN?',
      answer: `VPN stands for virtual private network, a secure tunnel between two or more device.<br /><br />
        Connecting to a VPN gives you an encrypted connection to the internet. It helps you to stay private and secure. Your identity is protected because the VPN server changes your IP address and you can easily access the online you want no matter where you are.`,
    },
    {
      id: nanoid(),
      question: 'What can I do with VPN?',
      answer: 'A VPN serves multiple purposes. You can use your VPN to: <br />',

      descBullets: [
        'Hide your real IP address',
        'Encrypt your online activity',
        'Protect your sensitive data (such as online payment transactions, passwords, or any confidential activity)',
        'Unblock and access restricted websites, social media platforms, and multimedia platforms',
        'Stream and download securely, anonymously',
      ],
    },

    {
      id: nanoid(),
      question: 'What services can I access with a VPN?',
      answer: 'You can access various services securely using VPN including: <br />',

      descBullets: [
        'Online Streaming Services (such as Netflix, Amazon Prime Video, Youtube, Hulu, HBO Online, Disney+, Hotstar, ESPN, Apple TV, etc.)',
        'Social Media platforms (such as Facebook, Twitter, Messenger, Instagram, WhatsApp, TikTok, Youtube, etc)',
        'News Providers (BBC, New York Times, Al Jazeera, Dawn, Reuters, RT)',
      ],
      answer2: '',
    },
    {
      id: nanoid(),
      question: 'Does VPN slow down internet speed?',
      answer:
        'A VPN can slow down internet speed but the difference is often unnoticeable. Choosing a VPN Server closer to your location will have greater speed as compared to other distant servers. If both your and serverʼs bandwidth is high, then your internet speed will be good <br /> <br /> Furthermore, if your internet service provider (ISP) is throttling certain types of traffic, using a VPN could actually boost your speed.',
      descBullets: [],
      answer2: '',
    },
    {
      id: nanoid(),
      question: 'What is meant by VPN Protocol?',
      answer:
        'VPN is a secure tunnel between two or more devices. VPN uses VPN protocol which is a set of instructions that define how two devices talk to each other.  Different protocols use different encryption standards and authentication methods, resulting in differing levels of speed and security for VPN users.<br /><br />There are many popular VPN Protocols such as PPTP, SSTP, L2TP/IPsec, IKEv2, OpenVPN, WireGuard, etc. Some protocols are less secure while some provide military-grade security. Some protocols are old while some are modern. So protocols vary in speed, security, and underlying authentication and encryption methods.<br />',
      descBullets: [],
      answer2: '',
    },

    {
      id: nanoid(),
      question: 'What is EastVPN?',
      answer:
        'EastVPN is a VPN Service offered by us. EastVPN helps you to browse securely and keeps your data encrypted and secure from the world. EastVPN seamlessly connects you to our high-speed VPN servers and you can enjoy the security and unlimited bandwidth.',
      descBullets: [],
      answer2: '',
    },
    {
      id: nanoid(),
      question: 'Which platforms are supported by EastVPN?',
      answer:
        'EastVPN supports mobile platforms (Android, IOS) directly while desktop platforms (Windows, Mac, Linux) are supported indirectly.<br /><h4>Mobile platforms</h4>EastVPN supports both Android and IOS. Our apps are available on Google PlayStore and Apple AppStore. You can install our apps using the below Links.<br />',
      descBullets1: [
        '<a target=__blank href="#" style="color: #EF4E22;">Android</a>',
        '<a target=__blank href="#" style="color: #EF4E22;" >IOS</a>',
      ],
      answer2:
        '<h4>Desktop platforms</h4>EastVPN indirectly supports desktop platforms (Windows, Mac, Linux) in the sense that we currently have no apps for desktop operating systems but you can use popular and free third-party apps to connect to our VPN services. You need to buy a subscription for that. You can register and purchase any plan. Then from your user panel, you can download certificates to import in third party apps to connect to our VPN services',
    },

    {
      id: nanoid(),
      question: 'Which countries does EastVPN support?',
      answer:
        'EastVPN has servers in dozens of countries around the world. Some of the countries include the United States, Canada, United Kingdom, Germany, France, Netherlands, Singapore, India, etc. We support 3 continents (Asia, Europe, North America). We are committed to expanding our servers in various geographic locations time.',
      descBullets: [],
      answer2: '',
    },
    {
      id: nanoid(),
      question: 'Which VPN Protocols are supported by EastVPN?',
      answer: 'EastVPN supports two popular VPN Protocols out of the box. These are as follows:<br />',
      descBullets: ['OpenVPN UDP', 'OpenVPN TCP', 'WireGuard'],
      answer2:
        '<h4>OpenVPN (TCP & UDP)</h4><a target=__blank href="" style="color: #EF4E22;">OpenVPN</a> is a highly configurable open-source protocol. Itʼs available free for all platforms and is held in high regard by the community, and it is widely adopted among consumer VPN services. It is fast secure and provides a great level of encryption.  It cannot be easily detected or blocked by firewalls, ISPs, or others. It has been widely audited by trusted independent researchers. OpenVPN supports both TCP and UDP. OpenVPN UDP is faster but less reliable. OpenVPN TCP is slower but provides greater reliability. Generally, you should prefer OpenVPN UDP in case you want to switch to the OpenVPN protocol.',
      answer3:
        '<h4>WireGuard</h4><a target=__blank href="" style="color: #EF4E22;">WireGuard </a>is a light, fast, modern, and secure protocol and utilizes state-of-the-art cryptography. It has a small codebase and is quite faster than OpenVPN. It uses less battery as compared to OpenVPN. We use WireGuard as a default protocol in our apps',
    },
  ],
}

export const FAQ__List_2 = {
  display: true,
  list: [
    {
      id: nanoid(),
      question: 'Is EastVPN free? ',
      answer:
        'EastVPN offers both free and premium services. In free mode, users can only connect to limited servers locations but in premium mode, users have to buy a subscription plan. After purchasing a subscription plan, users can connect to all server locations worldwide.',
      descBullets: [],
      answer2: '',
    },
    {
      id: nanoid(),
      question: 'Does EastVPN offer a trial on premium services?',
      answer:
        'EastVPN offers a trial on the first subscription. The trial period varies from 3-7 days. On the first subscription, no payment is charged. After the trial ends, the user is charged a subscription fee depending on the purchased plan.',
      descBullets: [],
      answer2: '',
    },
    {
      id: nanoid(),
      question: 'What subscription plans are offered by EastVPN?',
      answer:
        'EastVPN offers various subscription plans on a subscription period basis for premium users. You purchase the subscription plan when you sign up for the paid services. To view our subscription plans, you can visit our plans page.',
      descBullets: [],
      answer2: '',
    },
    {
      id: nanoid(),
      question: 'Does EastVPN offer discounts on subscription plans?',
      answer:
        'Yes, EastVPN offers to discount of up to 35% on various plans. To view detail, you can visit our <a target=__blank href="#" style="color: #EF4E22;"> plans </a>page.',
      descBullets: [],
      answer2: '',
    },
    {
      id: nanoid(),
      question: 'How do I pay for my subscription?',
      answer:
        'EastVPN currently supports card(Credit/Debit) payments. But in the future, we may support other payment methods too.',
      descBullets: [],
      answer2: '',
    },
    {
      id: nanoid(),
      question: 'How do I cancel/renew my subscription?',
      answer:
        'Once you purchase the subscription, you can use our premium services. At the end of the subscription period, your subscription will automatically be renewed and your chosen payment method will be charged unless you explicitly cancel the subscription before its expiry.<br /><br />If you cancel the subscription before its expiry time, you can still use the service till its expiry. but the subscription will not be renewed and will be expired at the end of the subscription period. It will also be expired in case if the system failed to perform a successful transaction using your stored payment method before its expiry. <br /><br />When a subscription is active, you can cancel or renew your subscription any time from the app side menu or user panel.<br /><br />When a subscription is expired, your payment information is deleted from our system. You have to provide new payment details if you want to re-subscribe after expiry.',
      descBullets: [],
      answer2: '',
    },
    {
      id: nanoid(),
      question: 'How many devices can be connected to EastVPN simultaneously?',
      answer:
        'EastVPN supports up to six simultaneous VPN connections for a single subscription. If you want to connect to a VPN on more devices at a time, you have to purchase a new subscription on a separate account.',
      descBullets: [],
      answer2: '',
    },
    {
      id: nanoid(),
      question: 'Does EastVPN keep my logs?',
      answer:
        'EastVPN is strongly committed to usersʼ privacy, anonymity and security. We make our best possible efforts to protect our userʼs personal and sensitive information. EastVPN does collect minimal information about the usage of our services in order to identify and address technical issues, but this information cannot be used to connect you to any specific activity or behavior. You can read our <a href="/privacy-policy" style="color: #EF4E22;"> Privacy Policy </a> page for more details',
      descBullets: [],
      answer2: '',
    },
    {
      id: nanoid(),
      question: 'Is EastVPN safe and reliable?',
      answer: 'Yes, EastVPN takes plenty of measures to ensure the privacy and security of your VPN Connection <br />',
      descBullets: [
        'Hides IP using dozens of server locations around the world',
        'Industry Standard AES 128-bit, ChaCha20 encryption',
        'Kill Switch for maximum data leak protection during VPN disconnection',
        'No activity logs and no permanent connection logs',
        'Offers Secure DNS on servers',
      ],
      answer2:
        'EastVPN also has a dedicated team of security engineers to enhance network security and to address new threats to your privacy.',
    },
    {
      id: nanoid(),
      question: 'Why I am unable to browse the internet when I connect to EastVPN?',
      answer:
        'This guide will help you how to resolve internet browsing issues when connected to the EastVPN. Examples of this issue include: <br />',
      descBullets: ['Failing to browse the internet immediately', 'Failing to browse the internet after some time'],
      answer2: 'Possible causes of these issues include: <br />',
      descBullets2: [
        'Slow Internet Connection',
        'High load/traffic on the chosen server location',
        'Chosen VPN server location is too far away',
        'Interference by your ISP for certain VPN protocols',
        'Interference from your antivirus in outgoing packet transmission',
      ],
      answer3: 'Following are some troubleshooting tips, you can follow to resolve this issue.',
      descBullets3: [
        'Reconnect your VPN',
        'Connect to a different server location',
        'Change VPN protocol',
        'Check DNS Settings',
        'Update app',
      ],

      answer4:
        '<br />If you are still unable to resolve the issue, you can feel free to contact our EastVPN Support Team by the following ways<br /><br />',

      descBullets4: [
        'Submitting a support ticket',
        'Submitting a <a target=__blank href="" style="color: #EF4E22;">contact form</a>',
        'Sending an email to us at <a href="mailto:support@EastVPNpro.com" style="color: #EF4E22;">support@EastVPNpro.com</a>',
      ],
    },
  ],
}
