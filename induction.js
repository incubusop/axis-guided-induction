window.AXIS_STORY = {
  id: 'induction',
  defaultImage: 'assets/first-morning.png',
  idleCaption: 'Press play to begin your induction.',
  endCaption: 'Welcome to Axis Bank. Your story starts here.',
  totalLabel: '07',
  parts: ['assets/induction-part1.wav', 'assets/induction-part2.wav'],
  // Scene boundaries supplied against each audio file's own clock (seconds).
  sceneTimings: {
    'first-morning': { part: 0, start: 0, end: 23 },
    'who-we-are': { part: 0, start: 23, end: 51 },
    'our-values': { part: 0, start: 51, end: 83 },
    'dil-se-open': { part: 1, start: 0, end: 20 },
    ownership: { part: 1, start: 20, end: 40 },
    'find-guidance': { part: 1, start: 40, end: 66 },
    'your-next-step': { part: 1, start: 66, end: 81 }
  },
  sections: [
    {
      id: 'first-morning', index: 0, number: '01', kicker: 'YOUR FIRST MORNING', navTitle: 'First morning', title: 'Every first day opens a door.', heroTitle: 'Every first day<br><em>opens a door.</em>', heroKicker: 'A FIRST DAY FILM', heroDeck: 'A new place, full of people, purpose, and possibility.',
      image: 'assets/first-morning.png', heroImage: 'assets/first-morning.png', alt: 'A warm morning scene at an office entrance', caption: 'The first morning',
      summary: 'A name waiting to be learned. A new place, full of people, purpose, and possibility.',
      transcript: [{ part: 0, paragraphs: [
        'Every first day begins with a moment before the beginning. A door ahead. A name waiting to be learned. A new place, full of people, purpose, and possibility.',
        'Welcome to Axis Bank.',
        'This is the start of your journey here. Take a moment to look around. There is a story behind the place you have joined, and a part in that story waiting for you.'
      ] }]
    },
    {
      id: 'who-we-are', index: 1, number: '02', kicker: 'WHO WE ARE', navTitle: 'Who we are', title: 'A promise in every interaction.', heroTitle: 'A bank is made<br>in every <em>interaction.</em>', heroKicker: 'WHO WE ARE', heroDeck: 'The promise made in every interaction, and the care taken to keep it.',
      image: 'assets/scene-customer.png', heroImage: 'assets/scene-customer.png', alt: 'A colleague welcoming a customer', caption: 'People make the promise real',
      summary: 'The work may happen in different places and in different roles. The purpose stays connected.',
      transcript: [{ part: 0, paragraphs: [
        'A bank is more than its branches, offices, or technology. It is the promise made in every interaction, and the care taken to keep it.',
        'Across each conversation, each decision, and each moment of service, people make that promise real. The work may happen in different places and in different roles. The purpose stays connected: understand what people need, and help them move forward.'
      ] }]
    },
    {
      id: 'our-values', index: 2, number: '03', kicker: 'OUR VALUES', navTitle: 'Our values', title: 'The way we work matters.', heroTitle: 'The way we work<br><em>matters.</em>', heroKicker: 'OUR VALUES', heroDeck: 'Customer centricity. Teamwork. Ethics. Ownership. Transparency.',
      image: 'assets/scene-team.png', heroImage: 'assets/scene-team.png', alt: 'Colleagues sharing ideas as a team', caption: 'Choices that build trust',
      summary: 'The values are choices we make, one interaction at a time.',
      transcript: [{ part: 0, paragraphs: [
        'The way we work matters as much as the work itself.',
        'Customer centricity asks us to see the person behind the request. Teamwork reminds us that good work grows through what we share. Ethics calls for care in the choices no one else may see. Ownership means taking responsibility for what is ours to do. Transparency makes trust possible.',
        'These values are not a poster to pass on the way to your desk. They are choices we make one interaction at a time.'
      ] }]
    },
    {
      id: 'dil-se-open', index: 3, number: '04', kicker: 'DIL SE OPEN', navTitle: 'Dil Se Open', title: 'Open to what comes next.', heroTitle: 'Open to what<br><em>comes next.</em>', heroKicker: 'DIL SE OPEN', heroDeck: 'Open to listening. Open to the hopes and plans people bring.',
      image: 'assets/scene-open.png', heroImage: 'assets/scene-open.png', alt: 'An open doorway filled with warm light', caption: 'Open to listening',
      summary: 'The phrase is simple. Its meaning is found in what we do.',
      transcript: [{ part: 1, paragraphs: [
        'Our credo is “Dil Se Open.”',
        'Open to anticipating a need before it is spoken. Open to listening with attention. Open to the hopes and plans people bring with them.',
        'The phrase is simple. Its meaning is found in what we do: make each person feel seen, and make every interaction a chance to create an experience they can enjoy.'
      ] }]
    },
    {
      id: 'ownership', index: 4, number: '05', kicker: 'OWNERSHIP IN ACTION', navTitle: 'Ownership', title: 'Make the next step count.', heroTitle: 'Make the next<br>step <em>count.</em>', heroKicker: 'OWNERSHIP IN ACTION', heroDeck: 'Own the Customer. Own the Brand. Act with Speed. Zero Pendency.',
      image: 'assets/scene-team.png', heroImage: 'assets/scene-team.png', alt: 'A team working together and passing work forward', caption: 'Every action becomes part of someone else’s next step',
      summary: 'Four reminders to care for the experience, represent the bank thoughtfully, respond with purpose, and carry work through.',
      transcript: [{ part: 1, paragraphs: [
        'The ownership mantras give that spirit a shape.',
        'Own the Customer.',
        'Own the Brand.',
        'Act with Speed.',
        'Zero Pendency.',
        'Four reminders to care for the experience, represent the bank thoughtfully, respond with purpose, and carry work through. In a team, every action becomes part of someone else’s next step.'
      ] }],
      steps: ['Own the Customer', 'Own the Brand', 'Act with Speed', 'Zero Pendency']
    },
    {
      id: 'find-guidance', index: 5, number: '06', kicker: 'FIND YOUR GUIDANCE', navTitle: 'Find guidance', title: 'Questions have a next step.', heroTitle: 'Questions have<br>a <em>next step.</em>', heroKicker: 'FIND YOUR GUIDANCE', heroDeck: 'Use the approved information available to you, and ask your HR contact when something needs clarification.',
      image: 'assets/one-axis-policy-access.png', heroImage: 'assets/scene-team.png', alt: 'One Axis mobile policy access guide', caption: 'HR and policy guidance in One Axis',
      summary: 'A new role brings new questions. One Axis brings employee guidance into reach.',
      transcript: [{ part: 1, paragraphs: [
        'A new role brings new questions. The induction material introduces the people and policies that help shape a respectful, responsible workplace, from the Code of Conduct and POSH to human rights, diversity and inclusion, leave, and other HR guidance.',
        'When you need a policy or a next step, use the approved information available to you, and ask your HR contact when something needs clarification.'
      ] }]
    },
    {
      id: 'your-next-step', index: 6, number: '07', kicker: 'YOUR NEXT STEP', navTitle: 'Your next step', title: 'Your story starts here.', heroTitle: 'Your next step<br>starts <em>here.</em>', heroKicker: 'YOUR NEXT STEP', heroDeck: 'Your next step is to set up the One Axis application on your mobile device.',
      image: 'assets/first-morning.png', heroImage: 'assets/first-morning.png', alt: 'A new colleague stepping into the workday', caption: 'Welcome to Axis Bank. Your story starts here.',
      summary: 'The next session walks through the complete setup process, step by step.',
      transcript: [{ part: 1, paragraphs: [
        'Your next step is to set up the One Axis application on your mobile device.',
        'In the next session, we will walk you through the complete setup process, step by step.',
        'Welcome to Axis Bank. Your story starts here.'
      ] }]
    }
  ]
};
