const quotes = [
	{
		text: "If you wish to make an apple pie from scratch, you must first invent the universe",
		author: "Carl Sagan"
	},
	{
		text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
		author: "Thomas Edison",
	},
	{
		text: "You can observe a lot just by watching.",
		author: "Yogi Berra",
	},
	{
		text: "A house divided against itself cannot stand.",
		author: "Abraham Lincoln",
	},
	{
		text: "Difficulties increase the nearer we get to the goal.",
		author: "Johann Wolfgang von Goethe",
	},
	{
		text: "Fate is in your hands and no one elses",
		author: "Byron Pulsifer",
	},
	{
		text: "Be the chief but never the lord.",
		author: "Lao Tzu",
	},
	{
		text: "Nothing happens unless first we dream.",
		author: "Carl Sandburg",
	},
	{
		text: "Well begun is half done.",
		author: "Aristotle",
	},
	{
		text: "Life is a learning experience, only if you learn.",
		author: "Yogi Berra",
	},
	{
		text: "Self-complacency is fatal to progress.",
		author: "Margaret Sangster",
	},
	{
		text: "Peace comes from within. Do not seek it without.",
		author: "Buddha",
	},
	{
		text: "What you give is what you get.",
		author: "Byron Pulsifer",
	},
	{
		text: "We can only learn to love by loving.",
		author: "Iris Murdoch",
	},
	{
		text: "Life is change. Growth is optional. Choose wisely.",
		author: "Karen Clark",
	},
	{
		text: "You'll see it when you believe it.",
		author: "Wayne Dyer",
	},
	{
		text: "Today is the tomorrow we worried about yesterday.",
		author: null,
	},
	{
		text: "It's easier to see the mistakes on someone else's paper.",
		author: null,
	},
	{
		text: "Every man dies. Not every man really lives.",
		author: null,
	},
	{
		text: "To lead people walk behind them.",
		author: "Lao Tzu",
	},
	{
		text: "Having nothing, nothing can he lose.",
		author: "William Shakespeare",
	},
	{
		text: "Trouble is only opportunity in work clothes.",
		author: "Henry J. Kaiser",
	},
	{
		text: "A rolling stone gathers no moss.",
		author: "Publilius Syrus",
	},
	{
		text: "Ideas are the beginning points of all fortunes.",
		author: "Napoleon Hill",
	},
	{
		text: "Everything in life is luck.",
		author: "Donald Trump",
	},
	{
		text: "Doing nothing is better than being busy doing nothing.",
		author: "Lao Tzu",
	},
	{
		text: "Trust yourself. You know more than you think you do.",
		author: "Benjamin Spock",
	},
	{
		text: "Study the past, if you would divine the future.",
		author: "Confucius",
	},
	{
		text: "The day is already blessed, find peace within it.",
		author: null,
	},
	{
		text: "From error to error one discovers the entire truth.",
		author: "Sigmund Freud",
	},
	{
		text: "Well done is better than well said.",
		author: "Benjamin Franklin",
	},
	{
		text: "Bite off more than you can chew, then chew it.",
		author: "Ella Williams",
	},
	{
		text: "Work out your own salvation. Do not depend on others.",
		author: "Buddha",
	},
	{
		text: "One today is worth two tomorrows.",
		author: "Benjamin Franklin",
	},
	{
		text: "Once you choose hope, anythings possible.",
		author: "Christopher Reeve",
	},
	{
		text: "God always takes the simplest way.",
		author: "Albert Einstein",
	},
	{
		text: "One fails forward toward success.",
		author: "Charles Kettering",
	},
	{
		text: "From small beginnings come great things.",
		author: null,
	},
	{
		text: "Learning is a treasure that will follow its owner everywhere",
		author: "Chinese proverb",
	},
	{
		text: "Be as you wish to seem.",
		author: "Socrates",
	},
	{
		text: "The world is always in movement.",
		author: "V. Naipaul",
	},
	{
		text: "When you have a dream, you've got to grab it and never let go.",
		author: "Carol Burnett",
	},
	{
		text: "There is nothing impossible to they who will try.",
		author: "Alexander the Great",
	},
	{
		text: "Never mistake activity for achievement.",
		author: "John Wooden",
	},
	{
		text: "What worries you masters you.",
		author: "Haddon Robinson",
	},
	{
		text: "One faces the future with ones past.",
		author: "Pearl Buck",
	},
	{
		text: "Goals are the fuel in the furnace of achievement.",
		author: "Brian Tracy",
	},
	{
		text: "Who sows virtue reaps honour.",
		author: "Leonardo da Vinci",
	},
	{
		text: "Be kind whenever possible. It is always possible.",
		author: "Dalai Lama",
	},
	{
		text: "Talk doesn't cook rice.",
		author: "Chinese proverb",
	},
	{
		text: "He is able who thinks he is able.",
		author: "Buddha",
	},
	{
		text: "A goal without a plan is just a wish.",
		author: "Larry Elder",
	},
	{
		text: "To succeed, we must first believe that we can.",
		author: "Michael Korda",
	},
	{
		text: "All endings are also beginnings. We just don't know it at the time.",
		author: "Mitch Albom",
	},
	{
		text: "Learn from yesterday, live for today, hope for tomorrow.",
		author: "Albert Einstein",
	},
	{
		text: "A weed is no more than a flower in disguise.",
		author: "James Lowell",
	},
	{
		text: "Do, or do not. There is no try.",
		author: "Yoda",
	},
	{
		text: "All serious daring starts from within.",
		author: "Harriet Beecher Stowe",
	},
	{
		text: "The best teacher is experience learned from failures.",
		author: "Byron Pulsifer",
	},
	{
		text: "Think how hard physics would be if particles could think.",
		author: "Murray Gell-Mann",
	},
	{
		text: "Love is the flower you've got to let grow.",
		author: "John Lennon",
	},
	{
		text: "Don't wait. The time will never be just right.",
		author: "Napoleon Hill",
	},
	{
		text: "Time is the wisest counsellor of all.",
		author: "Pericles",
	},
	{
		text: "You give before you get.",
		author: "Napoleon Hill",
	},
	{
		text: "Wisdom begins in wonder.",
		author: "Socrates",
	},
	{
		text: "Without courage, wisdom bears no fruit.",
		author: "Baltasar Gracian",
	},
	{
		text: "Change in all things is sweet.",
		author: "Aristotle",
	},
	{
		text: "What you fear is that which requires action to overcome.",
		author: "Byron Pulsifer",
	},
	{
		text: "When performance exceeds ambition, the overlap is called success.",
		author: "Cullen Hightower",
	},
	{
		text: "When deeds speak, words are nothing.",
		author: "African proverb",
	},
	{
		text: "Real magic in relationships means an absence of judgement of others.",
		author: "Wayne Dyer",
	},
	{
		text: "I never think of the future. It comes soon enough.",
		author: "Albert Einstein",
	},
	{
		text: "Skill to do comes of doing.",
		author: "Ralph Emerson",
	},
	{
		text: "Wisdom is the supreme part of happiness.",
		author: "Sophocles",
	},
	{
		text: "I believe that every person is born with talent.",
		author: "Maya Angelou",
	},
	{
		text: "Your mind is for having ideas, not holding them.",
		author: "David Allen",
	},
	{
		text: "Important principles may, and must, be inflexible.",
		author: "Abraham Lincoln",
	},
	{
		text: "The undertaking of a new action brings new strength.",
		author: "Richard Evans",
	},
	{
		text: "The years teach much which the days never know.",
		author: "Ralph Emerson",
	},
	{
		text: "Our distrust is very expensive.",
		author: "Ralph Emerson",
	},
	{
		text: "All know the way; few actually walk it.",
		author: "Bodhidharma",
	},
	{
		text: "Great talent finds happiness in execution.",
		author: "Johann Wolfgang von Goethe",
	},
	{
		text: "Faith in oneself is the best and safest course.",
		author: "Michelangelo",
	},
	{
		text: "Courage is going from failure to failure without losing enthusiasm.",
		author: "Winston Churchill",
	},
	{
		text: "The two most powerful warriors are patience and time.",
		author: "Leo Tolstoy",
	},
	{
		text: "Anticipate the difficult by managing the easy.",
		author: "Lao Tzu",
	},
	{
		text: "Those who are free of resentful thoughts surely find peace.",
		author: "Buddha",
	},
	{
		text: "A short saying often contains much wisdom.",
		author: "Sophocles",
	},
	{
		text: "It takes both sunshine and rain to make a rainbow.",
		author: null,
	},
	{
		text: "A beautiful thing is never perfect.",
		author: null,
	},
	{
		text: "Only do what your heart tells you.",
		author: "Princess Diana",
	},
	{
		text: "Life is movement-we breathe, we eat, we walk, we move!",
		author: "John Pierrakos",
	},
	{
		text: "No one can make you feel inferior without your consent.",
		author: "Eleanor Roosevelt",
	},
	{
		text: "Argue for your limitations, and sure enough theyre yours.",
		author: "Richard Bach",
	},
	{
		text: "Luck is what happens when preparation meets opportunity.",
		author: "Seneca",
	},
	{
		text: "Victory belongs to the most persevering.",
		author: "Napoleon Bonaparte",
	},
	{
		text: "Love all, trust a few, do wrong to none.",
		author: "William Shakespeare",
	},
	{
		text: "In order to win, you must expect to win.",
		author: "Richard Bach",
	},
	{
		text: "A goal is a dream with a deadline.",
		author: "Napoleon Hill",
	},
	{
		text: "You can do it if you believe you can!",
		author: "Napoleon Hill",
	},
	{
		text: "Set your goals high, and don't stop till you get there.",
		author: "Bo Jackson",
	},
	{
		text: "Every new day is another chance to change your life.",
		author: null,
	},
	{
		text: "Smile, breathe, and go slowly.",
		author: "Thich Nhat Hanh",
	},
	{
		text: "Nobody will believe in you unless you believe in yourself.",
		author: "Liberace",
	},
	{
		text: "Do more than dream: work.",
		author: "William Arthur Ward",
	},
	{
		text: "No man was ever wise by chance.",
		author: "Seneca",
	},
	{
		text: "Some pursue happiness, others create it.",
		author: null,
	},
	{
		text: "He that is giddy thinks the world turns round.",
		author: "William Shakespeare",
	},
	{
		text: "Don't ruin the present with the ruined past.",
		author: "Ellen Gilchrist",
	},
	{
		text: "Do something wonderful, people may imitate it.",
		author: "Albert Schweitzer",
	},
	{
		text: "We do what we do because we believe.",
		author: null,
	},
	{
		text: "Do one thing every day that scares you.",
		author: "Eleanor Roosevelt",
	},
	{
		text: "If you cannot be silent be brilliant and thoughtful.",
		author: "Byron Pulsifer",
	},
	{
		text: "Who looks outside, dreams; who looks inside, awakes.",
		author: "Carl Jung",
	},
	{
		text: "What we think, we become.",
		author: "Buddha",
	},
	{
		text: "The shortest answer is doing.",
		author: "Lord Herbert",
	},
	{
		text: "All our knowledge has its origins in our perceptions.",
		author: "Leonardo da Vinci",
	},
	{
		text: "The harder you fall, the higher you bounce.",
		author: null,
	},
	{
		text: "Trusting our intuition often saves us from disaster.",
		author: "Anne Wilson Schaef",
	},
	{
		text: "Truth is powerful and it prevails.",
		author: "Sojourner Truth",
	},
	{
		text: "Light tomorrow with today!",
		author: "Elizabeth Browning",
	},
	{
		text: "Silence is a fence around wisdom.",
		author: "German proverb",
	},
	{
		text: "Society develops wit, but its contemplation alone forms genius.",
		author: "Madame de Stael",
	},
	{
		text: "The simplest things are often the truest.",
		author: "Richard Bach",
	},
	{
		text: "Everyone smiles in the same language.",
		author: null,
	},
	{
		text: "Yesterday I dared to struggle. Today I dare to win.",
		author: "Bernadette Devlin",
	},
	{
		text: "No alibi will save you from accepting the responsibility.",
		author: "Napoleon Hill",
	},
	{
		text: "If you can dream it, you can do it.",
		author: "Walt Disney",
	},
	{
		text: "It is better to travel well than to arrive.",
		author: "Buddha",
	},
	{
		text: "Life shrinks or expands in proportion to one's courage.",
		author: "Anais Nin",
	},
	{
		text: "You have to believe in yourself.",
		author: "Sun Tzu",
	},
	{
		text: "Our intention creates our reality.",
		author: "Wayne Dyer",
	},
	{
		text: "Silence is a true friend who never betrays.",
		author: "Confucius",
	},
	{
		text: "Character develops itself in the stream of life.",
		author: "Johann Wolfgang von Goethe",
	},
	{
		text: "From little acorns mighty oaks do grow.",
		author: "American proverb",
	},
	{
		text: "You can't stop the waves, but you can learn to surf.",
		author: "Jon Kabat-Zinn",
	},
	{
		text: "Reality does not conform to the ideal, but confirms it.",
		author: "Gustave Flaubert",
	},
	{
		text: "Speak low, if you speak love.",
		author: "William Shakespeare",
	},
	{
		text: "A really great talent finds its happiness in execution.",
		author: "Johann Wolfgang von Goethe",
	},
	{
		text: "Reality leaves a lot to the imagination.",
		author: "John Lennon",
	},
	{
		text: "The greatest remedy for anger is delay.",
		author: "Seneca",
	},
	{
		text: "Growth itself contains the germ of happiness.",
		author: "Pearl Buck",
	},
	{
		text: "You can do what's reasonable or you can decide what's possible.",
		author: null,
	},
	{
		text: "he purpose of our lives is to be happy.",
		author: "Dalai Lama",
	},
	{
		text: "Life is what happens when you're busy making other plans.",
		author: "John Lennon",
	},
	{
		text: "Get busy living or get busy dying",
		author: "Stephen King",
	},
	{
		text: "You only live once, but if you do it right, once is enough.",
		author: "Mae West",
	},
	{
		text: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
		author: "Thomas Edison",
	},
	{
		text: "If you want to live a happy life, tie it to a goal, not to people or things",
		author: "Albert Einstein",
	},
	{
		text: "Never let the fear of striking out keep you from playing the game.",
		author: "Babe Ruth",
	},
	{
		text: "Money and success don’t change people; they merely amplify what is already there.",
		author: "Will Smith",
	},
	{
		text: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
		author: "Steve Jobs",
	},
	{
		text: 'The journey of a thousand miles begins with one step.',
		author: 'Lao Tzu',
	},
	{
		text: 'That which does not kill us makes us stronger.',
		author: 'Friedrich Nietzsche',
	},
	{
		text: 'Life is what happens when you’re busy making other plans.',
		author: 'John Lennon',
	},
	{
		text: 'When the going gets tough, the tough get going.',
		author: 'Joe Kennedy',
	},
	{
		text: 'You must be the change you wish to see in the world.',
		author: 'Mahatma Gandhi',
	},
	{
		text: 'You only live once, but if you do it right, once is enough.',
		author: 'Mae West',
	},
	{
		text: 'Tough times never last but tough people do.',
		author: 'Robert H. Schuller',
	},
	{
		text: 'Get busy living or get busy dying.',
		author: 'Stephen King',
	},
	{
		text: 'Whether you think you can or you think you can’t, you’re right.',
		author: 'Henry Ford',
	},
	{
		text: 'Tis better to have loved and lost than to have never loved at all.',
		author: 'Alrded Lord Tennyson',
	},
	{
		text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
		author: 'Thomas Edison',
	},
	{
		text: 'You can observe a lot just by watching.',
		author: 'Yogi Berra',
	},
	{
		text: 'A house divided against itself cannot stand.',
		author: 'Abraham Lincoln',
	},
	{
		text: 'Difficulties increase the nearer we get to the goal.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Fate is in your hands and no one elses',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Be the chief but never the lord.',
		author: 'Lao Tzu',
	},
	{
		text: 'Nothing happens unless first we dream.',
		author: 'Carl Sandburg',
	},
	{
		text: 'Well begun is half done.',
		author: 'Aristotle',
	},
	{
		text: 'Life is a learning experience, only if you learn.',
		author: 'Yogi Berra',
	},
	{
		text: 'Self-complacency is fatal to progress.',
		author: 'Margaret Sangster',
	},
	{
		text: 'Peace comes from within. Do not seek it without.',
		author: 'Buddha',
	},
	{
		text: 'What you give is what you get.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'We can only learn to love by loving.',
		author: 'Iris Murdoch',
	},
	{
		text: 'Life is change. Growth is optional. Choose wisely.',
		author: 'Karen Clark',
	},
	{
		text: "You'll see it when you believe it.",
		author: 'Wayne Dyer',
	},
	{
		text: 'Today is the tomorrow we worried about yesterday.',
		author: null,
	},
	{
		text: "It's easier to see the mistakes on someone else's paper.",
		author: null,
	},
	{
		text: 'Every man dies. Not every man really lives.',
		author: null,
	},
	{
		text: 'To lead people walk behind them.',
		author: 'Lao Tzu',
	},
	{
		text: 'Having nothing, nothing can he lose.',
		author: 'William Shakespeare',
	},
	{
		text: 'Trouble is only opportunity in work clothes.',
		author: 'Henry J. Kaiser',
	},
	{
		text: 'A rolling stone gathers no moss.',
		author: 'Publilius Syrus',
	},
	{
		text: 'Ideas are the beginning points of all fortunes.',
		author: 'Napoleon Hill',
	},
	{
		text: 'Everything in life is luck.',
		author: 'Donald Trump',
	},
	{
		text: 'Doing nothing is better than being busy doing nothing.',
		author: 'Lao Tzu',
	},
	{
		text: 'Trust yourself. You know more than you think you do.',
		author: 'Benjamin Spock',
	},
	{
		text: 'Study the past, if you would divine the future.',
		author: 'Confucius',
	},
	{
		text: 'The day is already blessed, find peace within it.',
		author: null,
	},
	{
		text: 'From error to error one discovers the entire truth.',
		author: 'Sigmund Freud',
	},
	{
		text: 'Well done is better than well said.',
		author: 'Benjamin Franklin',
	},
	{
		text: 'Bite off more than you can chew, then chew it.',
		author: 'Ella Williams',
	},
	{
		text: 'Work out your own salvation. Do not depend on others.',
		author: 'Buddha',
	},
	{
		text: 'One today is worth two tomorrows.',
		author: 'Benjamin Franklin',
	},
	{
		text: 'Once you choose hope, anythings possible.',
		author: 'Christopher Reeve',
	},
	{
		text: 'God always takes the simplest way.',
		author: 'Albert Einstein',
	},
	{
		text: 'One fails forward toward success.',
		author: 'Charles Kettering',
	},
	{
		text: 'From small beginnings come great things.',
		author: null,
	},
	{
		text: 'Learning is a treasure that will follow its owner everywhere',
		author: 'Chinese proverb',
	},
	{
		text: 'Be as you wish to seem.',
		author: 'Socrates',
	},
	{
		text: 'The world is always in movement.',
		author: 'V. Naipaul',
	},
	{
		text: 'Never mistake activity for achievement.',
		author: 'John Wooden',
	},
	{
		text: 'What worries you masters you.',
		author: 'Haddon Robinson',
	},
	{
		text: 'One faces the future with ones past.',
		author: 'Pearl Buck',
	},
	{
		text: 'Goals are the fuel in the furnace of achievement.',
		author: 'Brian Tracy',
	},
	{
		text: 'Who sows virtue reaps honour.',
		author: 'Leonardo da Vinci',
	},
	{
		text: 'Be kind whenever possible. It is always possible.',
		author: 'Dalai Lama',
	},
	{
		text: "Talk doesn't cook rice.",
		author: 'Chinese proverb',
	},
	{
		text: 'He is able who thinks he is able.',
		author: 'Buddha',
	},
	{
		text: 'A goal without a plan is just a wish.',
		author: 'Larry Elder',
	},
	{
		text: 'To succeed, we must first believe that we can.',
		author: 'Michael Korda',
	},
	{
		text: 'Learn from yesterday, live for today, hope for tomorrow.',
		author: 'Albert Einstein',
	},
	{
		text: 'A weed is no more than a flower in disguise.',
		author: 'James Lowell',
	},
	{
		text: 'Do, or do not. There is no try.',
		author: 'Yoda',
	},
	{
		text: 'All serious daring starts from within.',
		author: 'Harriet Beecher Stowe',
	},
	{
		text: 'The best teacher is experience learned from failures.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Think how hard physics would be if particles could think.',
		author: 'Murray Gell-Mann',
	},
	{
		text: "Love is the flower you've got to let grow.",
		author: 'John Lennon',
	},
	{
		text: "Don't wait. The time will never be just right.",
		author: 'Napoleon Hill',
	},
	{
		text: 'Time is the wisest counsellor of all.',
		author: 'Pericles',
	},
	{
		text: 'You give before you get.',
		author: 'Napoleon Hill',
	},
	{
		text: 'Wisdom begins in wonder.',
		author: 'Socrates',
	},
	{
		text: 'Without courage, wisdom bears no fruit.',
		author: 'Baltasar Gracian',
	},
	{
		text: 'Change in all things is sweet.',
		author: 'Aristotle',
	},
	{
		text: 'What you fear is that which requires action to overcome.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'When performance exceeds ambition, the overlap is called success.',
		author: 'Cullen Hightower',
	},
	{
		text: 'When deeds speak, words are nothing.',
		author: 'African proverb',
	},
	{
		text: 'Real magic in relationships means an absence of judgement of others.',
		author: 'Wayne Dyer',
	},
	{
		text: 'I never think of the future. It comes soon enough.',
		author: 'Albert Einstein',
	},
	{
		text: 'Skill to do comes of doing.',
		author: 'Ralph Emerson',
	},
	{
		text: 'Wisdom is the supreme part of happiness.',
		author: 'Sophocles',
	},
	{
		text: 'I believe that every person is born with talent.',
		author: 'Maya Angelou',
	},
	{
		text: 'Important principles may, and must, be inflexible.',
		author: 'Abraham Lincoln',
	},
	{
		text: 'The undertaking of a new action brings new strength.',
		author: 'Richard Evans',
	},
	{
		text: 'The years teach much which the days never know.',
		author: 'Ralph Emerson',
	},
	{
		text: 'Our distrust is very expensive.',
		author: 'Ralph Emerson',
	},
	{
		text: 'All know the way; few actually walk it.',
		author: 'Bodhidharma',
	},
	{
		text: 'Great talent finds happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Faith in oneself is the best and safest course.',
		author: 'Michelangelo',
	},
	{
		text: 'Courage is going from failure to failure without losing enthusiasm.',
		author: 'Winston Churchill',
	},
	{
		text: 'The two most powerful warriors are patience and time.',
		author: 'Leo Tolstoy',
	},
	{
		text: 'Anticipate the difficult by managing the easy.',
		author: 'Lao Tzu',
	},
	{
		text: 'Those who are free of resentful thoughts surely find peace.',
		author: 'Buddha',
	},
	{
		text: 'A short saying often contains much wisdom.',
		author: 'Sophocles',
	},
	{
		text: 'It takes both sunshine and rain to make a rainbow.',
		author: null,
	},
	{
		text: 'A beautiful thing is never perfect.',
		author: null,
	},
	{
		text: 'Only do what your heart tells you.',
		author: 'Princess Diana',
	},
	{
		text: 'Life is movement-we breathe, we eat, we walk, we move!',
		author: 'John Pierrakos',
	},
	{
		text: 'No one can make you feel inferior without your consent.',
		author: 'Eleanor Roosevelt',
	},
	{
		text: 'Argue for your limitations, and sure enough theyre yours.',
		author: 'Richard Bach',
	},
	{
		text: 'Luck is what happens when preparation meets opportunity.',
		author: 'Seneca',
	},
	{
		text: 'Victory belongs to the most persevering.',
		author: 'Napoleon Bonaparte',
	},
	{
		text: 'Love all, trust a few, do wrong to none.',
		author: 'William Shakespeare',
	},
	{
		text: 'In order to win, you must expect to win.',
		author: 'Richard Bach',
	},
	{
		text: 'A goal is a dream with a deadline.',
		author: 'Napoleon Hill',
	},
	{
		text: 'You can do it if you believe you can!',
		author: 'Napoleon Hill',
	},
	{
		text: "Set your goals high, and don't stop till you get there.",
		author: 'Bo Jackson',
	},
	{
		text: 'Every new day is another chance to change your life.',
		author: null,
	},
	{
		text: 'Smile, breathe, and go slowly.',
		author: 'Thich Nhat Hanh',
	},
	{
		text: 'Nobody will believe in you unless you believe in yourself.',
		author: 'Liberace',
	},
	{
		text: 'Do more than dream: work.',
		author: 'William Arthur Ward',
	},
	{
		text: 'No man was ever wise by chance.',
		author: 'Seneca',
	},
	{
		text: 'Some pursue happiness, others create it.',
		author: null,
	},
	{
		text: 'He that is giddy thinks the world turns round.',
		author: 'William Shakespeare',
	},
	{
		text: "Don't ruin the present with the ruined past.",
		author: 'Ellen Gilchrist',
	},
	{
		text: 'Do something wonderful, people may imitate it.',
		author: 'Albert Schweitzer',
	},
	{
		text: 'We do what we do because we believe.',
		author: null,
	},
	{
		text: 'Do one thing every day that scares you.',
		author: 'Eleanor Roosevelt',
	},
	{
		text: 'If you cannot be silent be brilliant and thoughtful.',
		author: 'Byron Pulsifer',
	},
	{
		text: 'Who looks outside, dreams; who looks inside, awakes.',
		author: 'Carl Jung',
	},
	{
		text: 'What we think, we become.',
		author: 'Buddha',
	},
	{
		text: 'The shortest answer is doing.',
		author: 'Lord Herbert',
	},
	{
		text: 'All our knowledge has its origins in our perceptions.',
		author: 'Leonardo da Vinci',
	},
	{
		text: 'The harder you fall, the higher you bounce.',
		author: null,
	},
	{
		text: 'Trusting our intuition often saves us from disaster.',
		author: 'Anne Wilson Schaef',
	},
	{
		text: 'Truth is powerful and it prevails.',
		author: 'Sojourner Truth',
	},
	{
		text: 'Light tomorrow with today!',
		author: 'Elizabeth Browning',
	},
	{
		text: 'Silence is a fence around wisdom.',
		author: 'German proverb',
	},
	{
		text: 'Society develops wit, but its contemplation alone forms genius.',
		author: 'Madame de Stael',
	},
	{
		text: 'The simplest things are often the truest.',
		author: 'Richard Bach',
	},
	{
		text: 'Everyone smiles in the same language.',
		author: null,
	},
	{
		text: 'Yesterday I dared to struggle. Today I dare to win.',
		author: 'Bernadette Devlin',
	},
	{
		text: 'No alibi will save you from accepting the responsibility.',
		author: 'Napoleon Hill',
	},
	{
		text: 'If you can dream it, you can do it.',
		author: 'Walt Disney',
	},
	{
		text: 'It is better to travel well than to arrive.',
		author: 'Buddha',
	},
	{
		text: "Life shrinks or expands in proportion to one's courage.",
		author: 'Anais Nin',
	},
	{
		text: 'You have to believe in yourself.',
		author: 'Sun Tzu',
	},
	{
		text: 'Our intention creates our reality.',
		author: 'Wayne Dyer',
	},
	{
		text: 'Silence is a true friend who never betrays.',
		author: 'Confucius',
	},
	{
		text: 'Character develops itself in the stream of life.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'From little acorns mighty oaks do grow.',
		author: 'American proverb',
	},
	{
		text: "You can't stop the waves, but you can learn to surf.",
		author: 'Jon Kabat-Zinn',
	},
	{
		text: 'Reality does not conform to the ideal, but confirms it.',
		author: 'Gustave Flaubert',
	},
	{
		text: 'Speak low, if you speak love.',
		author: 'William Shakespeare',
	},
	{
		text: 'A really great talent finds its happiness in execution.',
		author: 'Johann Wolfgang von Goethe',
	},
	{
		text: 'Reality leaves a lot to the imagination.',
		author: 'John Lennon',
	},
	{
		text: 'The greatest remedy for anger is delay.',
		author: 'Seneca',
	},
	{
		text: 'Growth itself contains the germ of happiness.',
		author: 'Pearl Buck',
	},
	{
		text: "You can do what's reasonable or you can decide what's possible.",
		author: null,
	},
	{
		text: "Make your life a dream, and a dream, a reality.",
		author: "Antoine de Saint-Exupéry"
	},
	{
		text: "Music is the langage of emotions.",
		author: "Emmanuel Kant"
	},
	{
		text: "Imagination is more important than knowledge.",
		author: "Albert Einstein"
	},
	{
		text: "If you want peace, prepare for war.",
		author: "Jules César"
	},
	{
		text: "It's the Hell of the poor that makes the Heavens of the Rich.",
		author: "Victor Hugo"
	},
	{
		text: "There is no worst deaf that the ones who do not want to listen.",
		author: "Molière"
	},
	{
		text: "When we want we can, when we can we must.",
		author: "Napoléon Bonaparte"
	},
	{
		text: "I think, therefore I am.",
		author: "René Descartes"
	},
	{
		text: "Anyone who does not know history is doomed to relive it.",
		author: "Karl Marx"
	},
	{
		text: "Promises only bind those who receive them.",
		author: "Jacques Chirac"
	},
	{
		text: "People won't have time for you if you are always angry or complaining.",
		author: "Stephen Hawking"
	},
	{
		text: "Keep your face to the sunshine and you cannot see a shadow.",
		author: "Hellen Keller"
	},
	{
		text: "Sometimes we stare so long at a door that is closing that we see too late the one that is open.",
		author: "Alexander Graham Bell"
	},
	{
    text: "I am always doing that which I cannot do, in order that I may learn how to do it.",
    author: "Pablo Picasso",
  },
  {
    text: "A small body of determined spirits fired by an unquenchable faith in their mission can alter the course of history.",
    author: "Mahatma Gandhi",
  },
  {
    text: "The greatest weapon against stress is our ability to choose one thought over another.",
    author: "William James",
  },
  {
    text: "The last of human freedoms—the ability to choose ones attitude in a given set of circumstances.",
    author: "Viktor E. Frankl",
  },
  {
    text : "First make the change easy (warning: this might be hard), then make the easy change.",
    author : "Kent Beck"
  },
  {
    text : "Before software can be reusable it first has to be usable.", 
    author : "Ralph Johnson"
  },
  {
    text : "If it hurts, do it more frequently, and bring the pain forward.", 
    author : "Jez Humble"
  },
  {
    text : "Good programmers know what to write. Great ones know what to rewrite and reuse.",
    author : "Eric S. Raymond"
  },
  {
    text: "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
    author: "Dr. A.P.J Abdul Kalam",
  },
  {
    text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    author: "Dr. A.P.J Abdul Kalam",
  },
  {
    text: "To succeed in your mission, you must have single-minded devotion to your goal.",
    author: "Dr. A.P.J Abdul Kalam",
  },
  {
    text: "If you fail, never give up because FAIL means First Attempt In Learning.",
    author: "Dr. A.P.J Abdul Kalam",
  },
  {
    text: "Creativity is seeing the same thing but thinking differently.",
    author: "Dr. A.P.J Abdul Kalam",
  },
  {
    text: "Failure will never overtake me if my determination to succeed is strong enough.",
    author: "Dr. A.P.J Abdul Kalam",
  },
  {
    text: "All of us do not have equal talent. But , all of us have an equal opportunity to develop our talents.",
    author: "Dr. A.P.J Abdul Kalam",
  },
{
		text: "Winning isnt everything, but wanting it is.",
		author: "Arnold Palmer"
	},
	{
		text: "You can never cross the ocean unless you have the courage to lose sight of the shore.",
		author: "Christopher Columbus"
	},
	{
		text: "Great sea captains are made in rough waters and deep seas.",
		author: "Kathryn Kuhlman"
	},
	{
		text: "Smooth sea never made a skillful sailor.",
		author: "Anonymous"
	},
	{
		text: "I am always doing that which I cannot do, in order that I may learn how to do it.",
		author: "Pablo Picasso",
	},
	{
		text: "A small body of determined spirits fired by an unquenchable faith in their mission can alter the course of history.",
		author: "Mahatma Gandhi",
	},
	{
		text: "The greatest weapon against stress is our ability to choose one thought over another.",
		author: "William James",
	},
	{
		text: "The last of human freedoms—the ability to choose ones attitude in a given set of circumstances.",
		author: "Viktor E. Frankl",
	},
	{
		text: "Leadership is hard to define and good leadership even harder. But if you can get people to follow you to the ends of the earth, you are a great leader.",
		author: "Indra Nooyi",
	},
	{
		text: "It isn't what we say or think that defines us, but what we do.",
		author: "Jane Austen",
	},
	{
		text: "There is no charm equal to tenderness of heart.",
		author: "Jane Austen",
	},
	{
		text: "We have all a better guide in ourselves, if we would attend to it, than any other person can be.",
		author: "Jane Austen",
	},
	{
		text: "Evil is not something superhuman, it's something less than human.",
		author: "Agatha Christie",
	},
	{
		text: "Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.",
		author: "Bruce Lee",
	},
	{
		text: "We all live in a house on fire, no fire department to call, no way out.",
		author: "Tennessee Williams"
	},
	{
		text: "All truths are easy to understand once they are discovered. The point is to discover them.",
		author: "Galileo Galilei"
	},
	{
		text: "Hunting is not a sport. In a sport, both sides should know they're in the game.",
		author: "Paul Rodriguez"
	},
	{
		text: "No matter how dark the moment, love and hope are always possible.",
		author: "George Chakiris"
	},
	{
		text: "All humanity is one undivided and indivisible family. I cannot detach myself from the wickedest soul.",
		author: "Mahatma Gandhi"
	},
	{
		text: "It is a wise father that knows his own child.",
		author: "William Shakespeare"
	},
	{
		text: "Life will knock us down, but we can choose whether or not to stand back up.",
		author: "Jackie Chan"
	},
	{
		text: "Sometimes it takes only one act of kindness and caring to change a person’s life.",
		author: "Jackie Chan"
	},
	{
		text: "Do not let circumstances control you. You change your circumstances.",
		author: "Jackie Chan"
	},
	{
		text: "Being still and doing nothing are two completely different things.",
		author: "Jackie Chan"
	},
	{
		text: "Nothing makes me more determined to succeed than someone telling me something’s impossible.",
		author: "Jackie Chan"
	},
	{
		text: "Family is not who’s blood is in you, is who you love and who loves you.",
		author: "Jackie Chan"
	},
	{
		text: "Why did I become Jackie Chan? Mostly because I work very hard. When people were sleeping, I was still training.",
		author: "Jackie Chan"
	},
	{
		text: "I never wanted to be the next Bruce Lee. I just wanted to be the first Jackie Chan.",
		author: "Jackie Chan"
	},
	{
		text: "I hope next time when we meet, we won’t be fighting each other. Instead we will be drinking tea together.",
		author: "Jackie Chan"
	},
	{
		text: "The best fights are ones we avoid.",
		author: "Jackie Chan"
	},
	{
		text: "I prepare for the worst, but hope for the best.",
		author: "Jackie Chan"
	},
	{
		text: "Don't wait for the change of circumstances. You change the circumstances",
		author: "Jackie Chan"
	},
	{
		text: "You don't get to do over parts or go back and change your path. Your life is decided by your character and the decisions you make in the moment.",
		author: "Jackie Chan"
	},
	{
		text: "I only want my work to make people happy.",
		author: "Jackie Chan"
	},
	{
		text: "If one does not attach himself to people and desires, never shall his heart be broken. But then, does he ever truly live?",
		author: "Jackie Chan"
	},
	{
		text: "Pain is my daily routine. As long as I don’t go to the hospital, it’s nothing for me.",
		author: "Jackie Chan"
	},
	{
		text: "We learn martial arts as helping weakness. You never fight for people to get hurt. You’re always helping people.",
		author: "Jackie Chan"
	},
	{
		text: "Quiet people have the loudest minds.",
		author: "Stephen Hawking"
	},
	{
		text: "Life would be tragic if it weren't funny.",
		author: "Stephen Hawking"
	},
	{
		text: "Intelligence is the ability to adapt to change.",
		author: "Stephen Hawking"
	},
	{
		text: "The universe doesn't allow perfection.",
		author: "Stephen Hawking"
	},
	{
		text: "My goal is simple. It is a complete understanding of the universe, why it is as it is and why it exists at all.",
		author: "Stephen Hawking"
	},
	{
		text: "Although I cannot move and I have to speak through a computer, in my mind I am free",
		author: "Stephen Hawking"
	},
	{
		text: "If time travel is possible, where are the tourists from the future?",
		author: "Stephen Hawking"
	},
	{
		text: "People who boast about their I.Q. are losers.",
		author: "Stephen Hawking"
	},
	{
		text: "The thing about smart people is that they seem like crazy people to dumb people.",
		author: "Stephen Hawking"
	},
	{
		text: "I'm not afraid of death, but I'm in no hurry to die.",
		author: "Stephen Hawking"
	},
	{
		text: "Not only does God play dice but... he sometimes throws them where they cannot be seen.",
		author: "Stephen Hawking"
	},
	{
		text: "I don't think the human race will survive the next thousand years, unless we spread into space.",
		author: "Stephen Hawking"
},
{
    		text: "There is no avoiding war; it can only be postponed to the advantage of others.",
    		author: "Niccolo Machiavelli"
  	},
{
		text: "Life is trying things to see if they work.",
		author: "Ray Bradbury"
	},
  {
		text: "Strike me down, and I will become more powerful than you could possibly imagine.",
		author: "Obi-Wan Kenobi"
    },
    {
		text: "I'd rather be someone that's underrated than overrated.",
		author: "Clint Dempsey"
	  }
];
