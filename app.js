window.AXIS_STORY = {
  id: 'one-axis',
  defaultImage: 'assets/one-axis-features.png',
  idleCaption: 'Press play to follow the One Axis setup guide.',
  endCaption: 'Your One Axis setup is now complete. Welcome aboard.',
  totalLabel: '09',
  parts: ['assets/oneaxis-part1.wav', 'assets/oneaxis-part2.wav'],
  // Scene boundaries supplied against each audio file's own clock (seconds).
  sceneTimings: {
    introduction: { part: 0, start: 0, end: 19 },
    intune: { part: 0, start: 19, end: 44 },
    'first-registration': { part: 0, start: 44, end: 90 },
    'new-device': { part: 0, start: 90, end: 124 },
    access: { part: 0, start: 124, end: 145 },
    'employee-services': [
      { part: 0, start: 145, end: 152 },
      { part: 1, start: 0, end: 44 }
    ],
    attendance: { part: 1, start: 44, end: 114 },
    policies: { part: 1, start: 114, end: 142 },
    complete: { part: 1, start: 142, end: 148 }
  },
  sections: [
    {
      id: 'introduction', index: 0, number: '01', kicker: 'WELCOME TO ONE AXIS', navTitle: 'Introduction', title: 'Your employee companion.', heroTitle: 'One Axis,<br><em>step by step.</em>', heroKicker: 'THE PRACTICAL GUIDE', heroDeck: 'Welcome to the One Axis application setup guide.', image: 'assets/one-axis-features.png', heroImage: 'assets/first-morning.png', alt: 'One Axis mobile services overview', showCard: false,
      transcript: [{ part: 0, paragraphs: [
        'Welcome to the One Axis application setup guide.',
        'One Axis is your employee companion, bringing together important employee services, personal information, attendance, leave, payroll, benefits, and HR policies in one place.',
        'Let\'s begin by setting up the application on your mobile device.'
      ] }]
    },
    {
      id: 'intune', index: 1, number: '02', kicker: 'SET UP YOUR WORK PROFILE', navTitle: 'Intune setup', title: 'Start with Company Portal.', heroTitle: 'Start with<br><em>Company Portal.</em>', heroKicker: 'SET UP YOUR WORK PROFILE', heroDeck: 'Download Intune Company Portal, sign in with your AD credentials, and complete work profile setup.',
      image: 'assets/one-axis-setup-overview.png', heroImage: 'assets/first-morning.png', alt: 'One Axis guide setup overview with Company Portal instructions', caption: 'One Axis app guide · Setup overview',
      summary: 'Follow the steps in order. The latest One Axis app is installed automatically in your Work Profile after registration.',
      transcript: [{ part: 0, paragraphs: [
        'First, download Intune Company Portal from the Google Play Store or Apple App Store.',
        'Once the installation is complete, open Company Portal and sign in using your AD credentials.',
        'Follow the instructions displayed on your screen to complete the registration and work profile setup.',
        'Once the registration is successful, the latest version of the One Axis application will be installed automatically in your device\'s Work Profile.'
      ] }],
      steps: [
        'Download Intune Company Portal from the Google Play Store or Apple App Store.',
        'Open Company Portal and sign in using your AD credentials.',
        'Follow the on-screen instructions to complete registration and work profile setup.',
        'The latest One Axis app will install automatically in your device’s Work Profile.'
      ],
      noteTitle: 'On your phone', note: 'The One Axis app is installed automatically after Company Portal registration succeeds.'
    },
    {
      id: 'first-registration', index: 2, number: '03', kicker: 'FIRST-TIME REGISTRATION', navTitle: 'First registration', title: 'Create your six-digit MPIN.', heroTitle: 'A few steps to<br><em>make it yours.</em>', heroKicker: 'FIRST-TIME REGISTRATION', heroDeck: 'Choose New User, verify your registered mobile number, then create your MPIN.',
      image: 'assets/one-axis-overview.png', heroImage: 'assets/scene-customer.png', alt: 'One Axis overview showing the New User registration option', caption: 'One Axis app guide · Generate One Axis PIN',
      images: [
        { src: 'assets/one-axis-overview.png', alt: 'One Axis overview showing New User registration', caption: 'New User route' },
        { src: 'assets/one-axis-mpin.png', alt: 'Set New MPIN screens shown in the supplied guide', caption: 'MPIN screens' }
      ],
      summary: 'Use the registered details associated with your employee account.',
      transcript: [{ part: 0, paragraphs: [
        'Now that the application is installed, let\'s move on to your first-time registration.',
        'Open the One Axis application.',
        'If you are accessing the application for the first time, select the New User option.',
        'You will be guided through the registration process.',
        'Enter your Employee Code and registered mobile number in the respective fields.',
        'Next, create your six-digit MPIN. This MPIN will be used to access the One Axis application in the future.',
        'Carefully review and accept the displayed Terms and Conditions, then select Submit.',
        'An OTP will be sent to your registered mobile number for verification.',
        'Enter the OTP and complete the verification process.',
        'Once your registration is successful, your MPIN will be ready to use.'
      ] }],
      steps: [
        'Open One Axis and select New User.',
        'Enter your Employee Code and registered mobile number.',
        'Create a six-digit MPIN.',
        'Review and accept the displayed Terms and Conditions, then select Submit.',
        'Enter the OTP sent to your registered mobile number and complete verification.'
      ],
      noteTitle: 'On the screen', note: 'The overview labels this action NEW USER?.'
    },
    {
      id: 'new-device', index: 3, number: '04', kicker: 'REGISTER ANOTHER DEVICE', navTitle: 'New device', title: 'Register a new phone.', heroTitle: 'A new device?<br><em>Register it first.</em>', heroKicker: 'REGISTER ANOTHER DEVICE', heroDeck: 'Use Having Trouble, then choose Register New Device.',
      image: 'assets/one-axis-device-registration.png', heroImage: 'assets/scene-open.png', alt: 'One Axis Register New Device steps and mobile screens', caption: 'Register New Device · Reference mobile screens',
      summary: 'Follow the verification instructions displayed in One Axis to complete registration.',
      transcript: [{ part: 0, paragraphs: [
        'Now, let\'s look at device registration.',
        'If you are using a new mobile device, or need to register another device, open the application and select the Having Trouble option.',
        'Choose Register New Device and follow the verification instructions displayed on your screen to complete the registration.',
        'Once your device is registered, you can proceed to access the application.'
      ] }],
      steps: [
        'Open One Axis and select Having Trouble.',
        'Choose Register New Device.',
        'Enter your Employee ID, mobile number, and new six-digit MPIN. Confirm the MPIN and accept the Terms and Conditions, then select Submit.',
        'Verify the OTP sent to your registered mobile number.',
        'Continue once the new device is registered successfully.'
      ],
      noteTitle: 'On your phone', note: 'The screenshots show the exact Register New Device screens. Follow the prompts as they appear.'
    },
    {
      id: 'access', index: 4, number: '05', kicker: 'LOG IN AND RESTORE ACCESS', navTitle: 'Access help', title: 'Get back into One Axis.', heroTitle: 'Access, reset,<br><em>or unblock.</em>', heroKicker: 'LOG IN AND RESTORE ACCESS', heroDeck: 'Log in with your Employee ID and MPIN. Use Having Trouble if you need to recover access.',
      image: 'assets/one-axis-mpin.png', heroImage: 'assets/scene-team.png', alt: 'One Axis MPIN support screens', caption: 'Set New MPIN · Reference mobile screens',
      images: [
        { src: 'assets/one-axis-mpin.png', alt: 'One Axis Set New MPIN support screens', caption: 'Set New MPIN' },
        { src: 'assets/one-axis-unblock.png', alt: 'One Axis Unblock MPIN screens, including the Unblock Account button', caption: 'Unblock MPIN / Unblock Account' }
      ],
      summary: 'Follow the prompts shown in the supplied screens to reset your MPIN or restore a blocked account.',
      transcript: [{ part: 0, paragraphs: [
        'To log in, open One Axis and enter your Employee ID along with your six-digit MPIN.',
        'After successful authentication, you will be taken to the application dashboard.',
        'If you forget your MPIN, don\'t worry. Select the Having Trouble option and choose Reset MPIN.',
        'Follow the verification process displayed on your screen to reset your MPIN and regain access.',
        'Similarly, if your account gets blocked, select the Unblock Account option and follow the displayed instructions to restore access.'
      ] }],
      steps: [
        'Log in with your Employee ID and six-digit MPIN.',
        'To reset a forgotten MPIN, select Having Trouble. The supplied screen shows Set New MPIN.',
        'Enter your Employee ID and mobile number, create and confirm a new six-digit MPIN, accept the Terms and Conditions, and submit.',
        'Verify the OTP sent to your registered mobile number and confirm the reset success message.',
        'To unblock a blocked account, select Unblock Account. Enter your Employee ID and mobile number, create and confirm a new six-digit MPIN, accept the Terms and Conditions, and submit. Verify the OTP and confirm the success message.'
      ],
      noteTitle: 'Labels shown in your guide', note: 'The overview calls the login field Employee Code; the narration says Employee ID. The narration says Reset MPIN, while the supplied screen shows HAVING TROUBLE? and Set New MPIN. The unblock button reads Unblock Account.'
    },
    {
      id: 'employee-services', index: 5, number: '06', kicker: 'EXPLORE EMPLOYEE SERVICES', navTitle: 'Employee services', title: 'Your workday, in one place.', heroTitle: 'One place for<br><em>your workday.</em>', heroKicker: 'EXPLORE EMPLOYEE SERVICES', heroDeck: 'My Profile, Leave and Attendance, Payroll and Benefits, Health and Wellness, Reimbursement, and Policies.',
      image: 'assets/one-axis-features.png', heroImage: 'assets/scene-customer.png', alt: 'One Axis employee services shown around the mobile app', caption: 'One Axis app features · Reference overview',
      summary: 'The guide introduces the services covered in your One Axis walkthrough.',
      transcript: [
        { part: 0, paragraphs: ['Now that you are familiar with accessing One Axis, let\'s explore the employee services available within the application.'] },
        { part: 1, paragraphs: [
          'Under My Profile, you can access your personal information, organisation information, identification details, and employment letters.',
          'The Leave and Attendance section provides access to your leave balance, regularization records, leave records, and public holidays.',
          'Under Payroll and Benefits, you can access your salary slips, Form 16, detailed payroll information, investment declarations, flexi-pay, bank detail updates, retiral benefits, and VPF declarations.',
          'The Health and Wellness section provides access to benefit details, claim status, and nominations.',
          'Under Reimbursement, you can apply for reimbursements and track your reimbursement history and status.',
          'You can also access important HR policies and employee declarations through the Policies and Declarations section.'
        ] }
      ],
      steps: [
        'My Profile: personal information, organisation information, identification details, and employment letters.',
        'Leave and Attendance: leave balance, regularization records, leave records, and public holidays.',
        'Payroll and Benefits: salary slips, Form 16, payroll details, investment declarations, flexi-pay, bank detail updates, retiral benefits, and VPF declarations.',
        'Health and Wellness: benefit details, claim status, and nominations.',
        'Reimbursement: apply and track reimbursement history and status.',
        'Policies and Declarations: access HR policies and employee declarations.'
      ]
    },
    {
      id: 'attendance', index: 6, number: '07', kicker: 'ATTENDANCE AND LEAVE', navTitle: 'Attendance', title: 'Attendance follows your location.', heroTitle: 'Mark attendance<br><em>with One Axis.</em>', heroKicker: 'ATTENDANCE AND LEAVE', heroDeck: 'Open One Axis at your mapped base location. The guide also shows the attendance icon and regularization path.',
      image: 'assets/one-axis-attendance.png', heroImage: 'assets/scene-open.png', alt: 'Attendance Marking instructions and One Axis mobile screens', caption: 'Attendance Marking · Reference mobile screens',
      summary: 'Use the location setup and app actions described in the supplied attendance material.',
      transcript: [{ part: 1, paragraphs: [
        'Let\'s now understand how attendance works through One Axis.',
        'Employees are mapped to their respective base locations, and each location has a defined geographical boundary.',
        'When you open the One Axis application at your mapped base location, attendance is automatically captured according to the location-based setup.',
        'You can also access attendance-related options through the Finger icon in the application.',
        'If you need to correct a missed or incorrectly recorded attendance entry, navigate to the Leave and Attendance section.',
        'Select the Regularization option and follow the instructions to raise a regularization request.',
        'Choose the relevant date, provide the required details, and submit your request for approval.',
        'Similarly, if you wish to apply for leave, navigate to Leave and Attendance and select Apply Leave.',
        'Choose the appropriate leave dates, provide the required information, and submit your application for approval.',
        'You can also track your leave and regularization records through the same section.'
      ] }],
      steps: [
        'Open One Axis at your mapped base location. Attendance is automatically captured according to the location-based setup.',
        'Select the Finger icon labelled “To mark attendance from Office” to open attendance-related options.',
        'For a missed or incorrect entry, open Leave and Attendance and select Regularization.',
        'Choose the relevant date, provide the required details, and submit for approval.',
        'To apply for leave, choose Apply Leave, enter the dates and required information, and submit for approval.',
        'Track leave and regularization records in the same section.'
      ],
      noteTitle: 'At your base location', note: 'The screenshots describe mapped locations and a defined geographical boundary for automatic capture.'
    },
    {
      id: 'policies', index: 7, number: '08', kicker: 'HR POLICIES', navTitle: 'HR policies', title: 'Find policy guidance in My Space.', heroTitle: 'The right guidance,<br><em>when you need it.</em>', heroKicker: 'HR POLICIES', heroDeck: 'After logging in, navigate to My Space and select Policies.',
      image: 'assets/one-axis-policy-access.png', heroImage: 'assets/scene-team.png', alt: 'One Axis policy access instructions and app screens', caption: 'How and where to access policies · Reference screens',
      summary: 'Use the available HR-related policies whenever you need to refer to them.',
      transcript: [{ part: 1, paragraphs: [
        'Finally, let\'s look at where you can find HR policies.',
        'After logging in, navigate to My Space and select Policies.',
        'Here, you can access the available HR-related policies and refer to them whenever required.'
      ] }],
      steps: [
        'Enter your Employee ID and MPIN to log in to One Axis.',
        'In My Space, select the Policies tab.',
        'Select the HR tab.',
        'Open the available HR-related policy when you need to refer to it.'
      ]
    },
    {
      id: 'complete', index: 8, number: '09', kicker: 'YOUR ONE AXIS JOURNEY', navTitle: 'Finish', title: 'Your setup is complete.', heroTitle: 'Your One Axis setup<br><em>is complete.</em>', heroKicker: 'YOUR ONE AXIS JOURNEY', heroDeck: 'Take a few moments to explore the available sections and familiarise yourself with the features.',
      image: 'assets/one-axis-features.png', heroImage: 'assets/first-morning.png', alt: 'Overview of One Axis employee services', caption: 'One Axis employee services',
      transcript: [{ part: 1, paragraphs: [
        'One Axis brings essential employee services together, helping you manage important aspects of your professional journey from a single application.',
        'Take a few moments to explore the available sections and familiarise yourself with the features.',
        'Your One Axis setup is now complete.',
        'Welcome aboard, and all the best for your journey at Axis Bank.'
      ] }]
    }
  ]
};

// Recreated app mockups use the guide's supplied labels and actions. These are
// HTML screens so the narrated action can be highlighted without editing slides.
const phoneDefaults = {
  intune: { title: 'Work profile setup', eyebrow: 'COMPANY PORTAL', button: 'Continue', foot: 'Managed by Axis Bank' },
  'first-registration': { title: 'New User', button: 'Submit', foot: 'Secure registration' },
  'new-device': { title: 'Register New Device', button: 'Submit', foot: 'Device verification' },
  access: { title: 'Having Trouble?', button: 'Continue', foot: 'Account access support' },
  'employee-services': { title: 'Employee Services', eyebrow: 'GOOD MORNING', foot: 'Your workday, in one place' },
  attendance: { title: 'Leave & Attendance', button: 'View attendance', foot: 'Mapped base location' },
  policies: { title: 'My Space', button: 'Open HR policies', foot: 'Policies and Declarations' }
};
window.AXIS_STORY.sections.forEach(section => {
  if (!phoneDefaults[section.id]) return;
  const labels = {
    intune: [
      ['Download Company Portal', 'Google Play Store or Apple App Store'],
      ['Sign in', 'Use your AD credentials'],
      ['Complete setup', 'Follow the on-screen work profile instructions'],
      ['One Axis installs', 'Latest app installs in your Work Profile']
    ],
    'first-registration': [
      ['NEW USER?', 'First-time registration'], ['Employee Code', 'Enter your registered mobile number'],
      ['Set New MPIN', 'Create and confirm a six-digit MPIN'], ['Terms & Conditions', 'Review, accept, then Submit'], ['OTP verification', 'Enter the OTP sent to your registered mobile']
    ],
    'new-device': [
      ['HAVING TROUBLE?', 'Open the support options'], ['Register New Device', 'Choose this option'],
      ['Employee ID + mobile', 'Create and confirm a six-digit MPIN'], ['Terms & Conditions', 'Accept and select Submit'], ['OTP verification', 'Verify the registered mobile number']
    ],
    access: [
      ['Employee ID', 'Enter your six-digit MPIN to log in'], ['HAVING TROUBLE?', 'Open access support'],
      ['Set New MPIN', 'Enter employee ID and registered mobile'], ['OTP verification', 'Confirm the reset'], ['Unblock Account', 'Follow prompts to restore access']
    ],
    'employee-services': [
      ['My Profile', 'Personal and organisation information'], ['Leave and Attendance', 'Balances, records, holidays'],
      ['Payroll and Benefits', 'Salary slips, Form 16, benefits'], ['Health and Wellness', 'Benefits, claims, nominations'],
      ['Reimbursement', 'Apply and track status'], ['Policies and Declarations', 'Access HR policies']
    ],
    attendance: [
      ['Mapped location', 'Attendance captures automatically within the defined boundary'], ['Finger icon', 'To mark attendance from Office'],
      ['Leave and Attendance', 'Open the attendance options'], ['Regularization', 'Choose the date and submit for approval'],
      ['Apply Leave', 'Enter dates and submit for approval'], ['Records', 'Track leave and regularization']
    ],
    policies: [
      ['My Space', 'Open after logging in'], ['Policies', 'Select the Policies tab'], ['HR', 'Select the HR tab'], ['Available policies', 'Open a policy to refer to it']
    ]
  }[section.id];
  section.phone = { ...phoneDefaults[section.id], rows: labels.map(([label, detail], i) => ({ label, detail, icon: ['◉', '⌕', '▣', '✓', '○', '⌂'][i % 6] })) };
});
