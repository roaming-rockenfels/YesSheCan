const rawQuotes = [
  {
    quote:
      "Ignore the glass ceiling and do your work. If you're focusing on the glass ceiling, focusing on what you don't have, focusing on the limitations, then you will be limited.",
    author: "Ava DuVernay",
  },
  {
    quote:
      "There are two powers in the world; one is the sword and the other is the pen. There is a third power stronger than both, that of women.",
    author: "Malala Yousafzai",
  },
  {
    quote:
      "A woman is like a tea bag; you never know how strong it is until it's in hot water.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Life is very interesting... in the end, some of your greatest pains, become your greatest strengths.",
    author: "Drew Barrymore",
  },
  {
    quote:
      "I had to remind myself of the truth of who I was and the reality that success wasn't defined by a result but by faithfulness. I had to remember that my identity and healing weren't dependent on the voices that surrounded me and that the truth wasn't dependent on popular opinion or cultural responses. I had to focus on what was real and true. The straight line instead of the crooked.",
    author: "Rachael Denhollander",
  },
  {
    quote:
      "I can never be safe; I always try and go against the grain. As soon as I accomplish one thing, I just set a higher goal. That's how I've gotten to where I am.",
    author: "Beyoncé",
  },
  {
    quote:
      "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    author: "Helen Keller",
  },
  {
    quote:
      "Perhaps some detours aren't detours at all. Perhaps they are actually the path.",
    author: "Katherine Wolf",
  },
  {
    quote:
      "If you don't see a clear path for what you want, sometimes you have to make it yourself.",
    author: "Mindy Kaling",
  },
  {
    quote:
      "I do not try to dance better than anyone else. I only try to dance better than myself.",
    author: "Arianna Huffington",
  },
  {
    quote: "A woman without a man is like a fish without a bicycle.",
    author: "Irina Dunn",
  },
  {
    quote:
      "More than ever, I am aware of the need to support and celebrate each other. I like to believe I am part of a global support group network of 3.4 billion. Imagine, if you can fall back on the 3.5 billion sisters, and the many good men who are with us, what could we possibly not achieve?",
    author: "Nicole Kidman",
  },
  {
    quote:
      "I believe the rights of women and girls is the unfinished business of the 21st century.",
    author: "Hillary Clinton",
  },
  {
    quote:
      "Women have to harness their power—it's absolutely true. It's just learning not to take the first 'no'. And if you can't go straight ahead, you go around the corner.",
    author: "Cher",
  },
  {
    quote: "A woman with a voice is, by definition, a strong woman.",
    author: "Melinda Gates",
  },
  {
    quote:
      "I learned a long time ago that there is something worse than missing the goal, and that's not pulling the trigger.",
    author: "Mia Hamm",
  },
  {
    quote:
      "If you're someone people count on, particularly in difficult moments, that's a sign of a life lived honorably.",
    author: "Rachel Maddow",
  },
  {
    quote:
      "We need women at all levels, including the top, to change the dynamic, reshape the conversation, to make sure women's voices are heard and heeded, not overlooked and ignored.",
    author: "Sheryl Sandberg",
  },
  {
    quote: "We cannot all succeed when half of us are held back.",
    author: "Malala Yousafzai",
  },
  {
    quote:
      "No woman should be told she can't make decisions about her own body. When women's rights are under attack, we fight back.",
    author: "Kamala Harris",
  },
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightengale",
  },
  {
    quote:
      "You can't be that kid standing at the top of the waterslide, overthinking it. You have to go down the chute.",
    author: "Tina Fey",
  },
  { quote: "This is your moment. Own it.", author: "Oprah" },
  {
    quote:
      "My coach said I run like a girl. And I said if he ran a little faster, he could too.",
    author: "Mia Hamm",
  },
  {
    quote: "Courage is like a muscle. We strengthen it by use.",
    author: "Ruth Gordon",
  },
  {
    quote:
      "Here's my feeling: For everyone, men and women, it's important to be a feminist. It's important to have female characters. It's wonderful for women to mentor other women, but it's just as important for women to mentor men and vice-versa.",
    author: "Mindy Kaling",
  },
  {
    quote:
      "Don't look at your feet to see if you are doing it right. Just dance.",
    author: "Anne Lamott",
  },
  {
    quote:
      "I am too intelligent, too demanding, and too resourceful for anyone to be able to take charge of me entirely. No one knows me or loves me completely. I have only myself.",
    author: "Simone de Beauvoir",
  },
  {
    quote: "I never dreamed about success. I worked for it.",
    author: "Estée Lauder",
  },
  {
    quote:
      "All careers go up and down like friendships, like marriages, like anything else, and you can't bat a thousand all the time.",
    author: "Julie Andrews",
  },
  {
    quote:
      "I think the best role models for women are people who are fruitfully and confidently themselves, who bring light into the world.",
    author: "Meryl Streep",
  },
  {
    quote:
      "There's something so special about a woman who dominates in a man's world. It takes a certain grace, strength, intelligence, fearlessness, and the nerve to never take no for an answer.",
    author: "Rihanna",
  },
  {
    quote:
      "Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.",
    author: "Oprah",
  },
  {
    quote:
      "I'm a feminist. I've been a female for a long time now. It'd be stupid not to be on my own side.",
    author: "Maya Angelou",
  },
  {
    quote:
      "Cautious, careful people, always casting about to preserve their reputations can never effect a reform.",
    author: "Susan B. Anthony",
  },
  {
    quote:
      "I'm learning how to drown out the constant noise that is such an inseparable part of my life. I don't have to prove anything to anyone. I only have to follow my heart and concentrate on what I want to say to the world. I run my world.",
    author: "Beyoncé",
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "I'd rather regret the things I've done than regret the things I haven't done.",
    author: "Lucille Ball",
  },
  {
    quote:
      "I have learned that as long as I hold fast to my beliefs and values - and follow my own moral compass - then the only expectations I need to live up to are my own.",
    author: "Michelle Obama",
  },
  {
    quote:
      "It took me quite a long time to develop a voice and now that I have it, I am not going to be silent.",
    author: "Madeleine Albright",
  },
  {
    quote:
      "If you want something said, ask a man; if you want something done, ask a woman.",
    author: "Margaret Thatcher",
  },
  {
    quote: "Above all, be the heroine of your life, not the victim.",
    author: "Nora Ephron",
  },
  {
    quote: "If you don't risk anything, you risk even more.",
    author: "Erica Jong",
  },
  {
    quote:
      "And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.",
    author: "Anaïs Nin",
  },
  {
    quote:
      "Women don't need to find a voice, they have a voice, and they need to feel empowered to use it, and people need to be encouraged to listen.",
    author: "Meghan Markle",
  },
  {
    quote:
      "Be a first rate version of yourself, not a second rate version of someone else.",
    author: "Judy Garland",
  },
  {
    quote: "To be afraid is to behave as if the truth were not true.",
    author: "Dolly Parton",
  },
  {
    quote:
      "My mother told me to be a lady. And for her, that meant to be your own person, be independent.",
    author: "Ruth Bader Ginsburg",
  },
  {
    quote:
      "[Unlikeable women] accept the consequences of their choices, and those consequences become stories worth reading.",
    author: "Roxane Gay",
  },
  {
    quote: "You can't please everyone, and you can't make everyone like you.",
    author: "Katie Couric",
  },
  {
    quote: "I do not wish women to have power over men; but over themselves.",
    author: "Mary Shelley",
  },
];

const quotes = rawQuotes.map((quote, index) => ({ ...quote, id: index }));
export default quotes;
