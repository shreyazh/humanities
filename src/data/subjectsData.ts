export const subjectsData = [
  // Humanities
  {
    id: 'philosophy',
    name: 'Philosophy',
    description: 'Explore fundamental questions about existence, knowledge, values, mind, and language through 2,500 years of human thought.',
    category: 'humanities',
    difficulty: 'intermediate',
    estimatedTime: '6-12 months',
    topics: 45,
    icon: 'BookOpen',
    color: 'bg-gradient-to-br from-blue-500 to-purple-600',
    prerequisites: [],
    keywords: ['logic', 'ethics', 'metaphysics', 'epistemology', 'political philosophy'],
    roadmap: [
      {
        id: 'foundations',
        name: 'Philosophical Foundations',
        description: 'Core concepts and methods of philosophical inquiry',
        topics: [
          {
            id: 'what-is-philosophy',
            name: 'What is Philosophy?',
            description: 'Understanding the nature, scope, and methods of philosophical inquiry',
            estimatedTime: '1-2 weeks',
            prerequisites: []
          },
          {
            id: 'logic-reasoning',
            name: 'Logic & Reasoning',
            description: 'Formal and informal logic, argument structure, fallacies',
            estimatedTime: '2-3 weeks',
            prerequisites: []
          },
          {
            id: 'reading-philosophy',
            name: 'Reading Philosophy',
            description: 'Techniques for understanding philosophical texts and arguments',
            estimatedTime: '1-2 weeks',
            prerequisites: ['what-is-philosophy']
          }
        ]
      },
      {
        id: 'ancient-philosophy',
        name: 'Ancient Philosophy',
        description: 'Greek and Roman philosophical traditions',
        topics: [
          {
            id: 'pre-socratics',
            name: 'Pre-Socratic Thinkers',
            description: 'Early Greek philosophers and their questions about nature and reality',
            estimatedTime: '2 weeks',
            prerequisites: ['logic-reasoning']
          },
          {
            id: 'socrates-plato',
            name: 'Socrates & Plato',
            description: 'The examined life, theory of forms, and dialectical method',
            estimatedTime: '3-4 weeks',
            prerequisites: ['pre-socratics']
          },
          {
            id: 'aristotle',
            name: 'Aristotle',
            description: 'Logic, ethics, politics, and natural philosophy',
            estimatedTime: '4 weeks',
            prerequisites: ['socrates-plato']
          }
        ]
      },
      {
        id: 'modern-philosophy',
        name: 'Modern Philosophy',
        description: 'Rationalism, empiricism, and the scientific revolution',
        topics: [
          {
            id: 'descartes',
            name: 'René Descartes',
            description: 'Cartesian doubt, mind-body dualism, and methodical skepticism',
            estimatedTime: '2 weeks',
            prerequisites: ['aristotle']
          },
          {
            id: 'empiricism',
            name: 'British Empiricism',
            description: 'Locke, Berkeley, and Hume on experience and knowledge',
            estimatedTime: '3 weeks',
            prerequisites: ['descartes']
          },
          {
            id: 'kant',
            name: 'Immanuel Kant',
            description: 'Critical philosophy, categorical imperative, and transcendental idealism',
            estimatedTime: '4 weeks',
            prerequisites: ['empiricism']
          }
        ]
      }
    ]
  },
  {
    id: 'history',
    name: 'History',
    description: 'Comprehensive study of human civilization from ancient times to the modern era.',
    category: 'humanities',
    difficulty: 'beginner',
    estimatedTime: '8-12 months',
    topics: 60,
    icon: 'Clock',
    color: 'bg-gradient-to-br from-amber-500 to-orange-600',
    prerequisites: [],
    keywords: ['ancient history', 'medieval', 'modern history', 'world history', 'historiography'],
    roadmap: [
      {
        id: 'historical-methods',
        name: 'Historical Methods',
        description: 'Understanding how historians work and interpret evidence',
        topics: [
          {
            id: 'what-is-history',
            name: 'What is History?',
            description: 'Nature of historical inquiry, sources, and interpretation',
            estimatedTime: '1 week',
            prerequisites: []
          },
          {
            id: 'primary-sources',
            name: 'Primary Sources',
            description: 'Working with documents, artifacts, and original evidence',
            estimatedTime: '2 weeks',
            prerequisites: ['what-is-history']
          },
          {
            id: 'historiography',
            name: 'Historiography',
            description: 'How historical writing and interpretation has evolved',
            estimatedTime: '2 weeks',
            prerequisites: ['primary-sources']
          }
        ]
      },
      {
        id: 'ancient-world',
        name: 'Ancient Civilizations',
        description: 'Early human societies and classical civilizations',
        topics: [
          {
            id: 'mesopotamia',
            name: 'Mesopotamia',
            description: 'Sumerians, Babylonians, and the cradle of civilization',
            estimatedTime: '2 weeks',
            prerequisites: ['historiography']
          },
          {
            id: 'ancient-egypt',
            name: 'Ancient Egypt',
            description: 'Pharaohs, pyramids, and Egyptian civilization',
            estimatedTime: '2 weeks',
            prerequisites: ['mesopotamia']
          },
          {
            id: 'classical-greece',
            name: 'Classical Greece',
            description: 'Democracy, philosophy, and Greek cultural achievements',
            estimatedTime: '3 weeks',
            prerequisites: ['ancient-egypt']
          }
        ]
      }
    ]
  },
  {
    id: 'literature',
    name: 'Literature',
    description: 'Journey through world literature from classical epics to contemporary works.',
    category: 'humanities',
    difficulty: 'intermediate',
    estimatedTime: '6-10 months',
    topics: 55,
    icon: 'BookOpen',
    color: 'bg-gradient-to-br from-purple-500 to-pink-600',
    prerequisites: [],
    keywords: ['poetry', 'fiction', 'drama', 'literary theory', 'world literature'],
    roadmap: [
      {
        id: 'literary-foundations',
        name: 'Literary Foundations',
        description: 'Core concepts and analytical tools for understanding literature',
        topics: [
          {
            id: 'what-is-literature',
            name: 'What is Literature?',
            description: 'Defining literature, genres, and literary vs. non-literary texts',
            estimatedTime: '1 week',
            prerequisites: []
          },
          {
            id: 'literary-elements',
            name: 'Literary Elements',
            description: 'Plot, character, setting, theme, style, and point of view',
            estimatedTime: '2 weeks',
            prerequisites: ['what-is-literature']
          },
          {
            id: 'close-reading',
            name: 'Close Reading',
            description: 'Techniques for detailed textual analysis and interpretation',
            estimatedTime: '2 weeks',
            prerequisites: ['literary-elements']
          }
        ]
      }
    ]
  },

  // Commerce & Business
  {
    id: 'economics',
    name: 'Economics',
    description: 'Understand how markets work, from microeconomic principles to macroeconomic policy.',
    category: 'commerce',
    difficulty: 'intermediate',
    estimatedTime: '8-12 months',
    topics: 50,
    icon: 'TrendingUp',
    color: 'bg-gradient-to-br from-green-500 to-emerald-600',
    prerequisites: ['basic-mathematics'],
    keywords: ['microeconomics', 'macroeconomics', 'market theory', 'fiscal policy', 'monetary policy'],
    roadmap: [
      {
        id: 'economic-foundations',
        name: 'Economic Foundations',
        description: 'Basic principles and concepts of economic thinking',
        topics: [
          {
            id: 'scarcity-choice',
            name: 'Scarcity & Choice',
            description: 'Fundamental economic problem and opportunity cost',
            estimatedTime: '1 week',
            prerequisites: []
          },
          {
            id: 'supply-demand',
            name: 'Supply & Demand',
            description: 'Market forces, equilibrium, and price determination',
            estimatedTime: '2 weeks',
            prerequisites: ['scarcity-choice']
          },
          {
            id: 'market-structures',
            name: 'Market Structures',
            description: 'Perfect competition, monopoly, oligopoly, and monopolistic competition',
            estimatedTime: '3 weeks',
            prerequisites: ['supply-demand']
          }
        ]
      }
    ]
  },
  {
    id: 'business-management',
    name: 'Business Management',
    description: 'Comprehensive management principles from strategy to operations.',
    category: 'commerce',
    difficulty: 'beginner',
    estimatedTime: '6-9 months',
    topics: 42,
    icon: 'Users',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    prerequisites: [],
    keywords: ['strategic management', 'operations', 'leadership', 'organizational behavior'],
    roadmap: [
      {
        id: 'management-basics',
        name: 'Management Fundamentals',
        description: 'Core principles of planning, organizing, leading, and controlling',
        topics: [
          {
            id: 'management-functions',
            name: 'Management Functions',
            description: 'Planning, organizing, leading, and controlling in organizations',
            estimatedTime: '1-2 weeks',
            prerequisites: []
          },
          {
            id: 'organizational-structure',
            name: 'Organizational Structure',
            description: 'How companies organize work, authority, and communication',
            estimatedTime: '2 weeks',
            prerequisites: ['management-functions']
          }
        ]
      }
    ]
  },

  // Social Sciences
  {
    id: 'psychology',
    name: 'Psychology',
    description: 'Scientific study of mind and behavior across various psychological perspectives.',
    category: 'social-sciences',
    difficulty: 'beginner',
    estimatedTime: '6-8 months',
    topics: 48,
    icon: 'Users',
    color: 'bg-gradient-to-br from-indigo-500 to-blue-600',
    prerequisites: [],
    keywords: ['cognitive psychology', 'behavioral psychology', 'developmental psychology', 'social psychology'],
    roadmap: [
      {
        id: 'psychology-intro',
        name: 'Introduction to Psychology',
        description: 'Overview of psychological science and major perspectives',
        topics: [
          {
            id: 'psychology-science',
            name: 'Psychology as Science',
            description: 'Research methods, experimental design, and statistical analysis',
            estimatedTime: '2 weeks',
            prerequisites: []
          }
        ]
      }
    ]
  },
  {
    id: 'sociology',
    name: 'Sociology',
    description: 'Study of society, social relationships, and social institutions.',
    category: 'social-sciences',
    difficulty: 'beginner',
    estimatedTime: '5-7 months',
    topics: 38,
    icon: 'Users',
    color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    prerequisites: [],
    keywords: ['social theory', 'social institutions', 'social stratification', 'culture'],
    roadmap: [
      {
        id: 'sociological-imagination',
        name: 'Sociological Imagination',
        description: 'Understanding the relationship between individual and society',
        topics: [
          {
            id: 'what-is-sociology',
            name: 'What is Sociology?',
            description: 'Scope, methods, and perspectives of sociological inquiry',
            estimatedTime: '1-2 weeks',
            prerequisites: []
          }
        ]
      }
    ]
  },

  // Arts & Culture
  {
    id: 'art-history',
    name: 'Art History',
    description: 'Visual culture from ancient civilizations to contemporary art movements.',
    category: 'arts',
    difficulty: 'beginner',
    estimatedTime: '6-8 months',
    topics: 40,
    icon: 'BookOpen',
    color: 'bg-gradient-to-br from-pink-500 to-rose-600',
    prerequisites: [],
    keywords: ['visual arts', 'art movements', 'art criticism', 'cultural history'],
    roadmap: [
      {
        id: 'art-appreciation',
        name: 'Art Appreciation',
        description: 'Learning to see and analyze visual art',
        topics: [
          {
            id: 'elements-principles',
            name: 'Elements & Principles',
            description: 'Line, color, form, composition, and artistic principles',
            estimatedTime: '2 weeks',
            prerequisites: []
          }
        ]
      }
    ]
  },
  {
    id: 'music-theory',
    name: 'Music Theory',
    description: 'Understanding the language and structure of music across cultures and eras.',
    category: 'arts',
    difficulty: 'intermediate',
    estimatedTime: '4-6 months',
    topics: 35,
    icon: 'Play',
    color: 'bg-gradient-to-br from-violet-500 to-purple-600',
    prerequisites: [],
    keywords: ['harmony', 'rhythm', 'melody', 'composition', 'music history'],
    roadmap: [
      {
        id: 'music-basics',
        name: 'Music Fundamentals',
        description: 'Notes, scales, intervals, and basic theory',
        topics: [
          {
            id: 'notes-scales',
            name: 'Notes & Scales',
            description: 'Musical alphabet, major and minor scales, key signatures',
            estimatedTime: '2 weeks',
            prerequisites: []
          }
        ]
      }
    ]
  },

  // Languages
  {
    id: 'linguistics',
    name: 'Linguistics',
    description: 'Scientific study of language structure, evolution, and use in society.',
    category: 'languages',
    difficulty: 'intermediate',
    estimatedTime: '6-8 months',
    topics: 32,
    icon: 'BookOpen',
    color: 'bg-gradient-to-br from-teal-500 to-cyan-600',
    prerequisites: [],
    keywords: ['phonetics', 'syntax', 'semantics', 'sociolinguistics', 'language evolution'],
    roadmap: [
      {
        id: 'language-basics',
        name: 'Language Fundamentals',
        description: 'What makes language unique and universal',
        topics: [
          {
            id: 'what-is-language',
            name: 'What is Language?',
            description: 'Defining language and its unique properties',
            estimatedTime: '1 week',
            prerequisites: []
          }
        ]
      }
    ]
  },
  {
    id: 'creative-writing',
    name: 'Creative Writing',
    description: 'Craft compelling fiction, poetry, and narrative non-fiction.',
    category: 'languages',
    difficulty: 'beginner',
    estimatedTime: '4-6 months',
    topics: 28,
    icon: 'BookOpen',
    color: 'bg-gradient-to-br from-amber-500 to-yellow-600',
    prerequisites: [],
    keywords: ['fiction writing', 'poetry', 'narrative', 'character development', 'plot structure'],
    roadmap: [
      {
        id: 'writing-foundations',
        name: 'Writing Foundations',
        description: 'Basic techniques and elements of creative writing',
        topics: [
          {
            id: 'finding-voice',
            name: 'Finding Your Voice',
            description: 'Developing personal style and authentic expression',
            estimatedTime: '2 weeks',
            prerequisites: []
          }
        ]
      }
    ]
  },

  // Additional Commerce Subjects
  {
    id: 'accounting',
    name: 'Accounting',
    description: 'Financial recording, reporting, and analysis for business decision-making.',
    category: 'commerce',
    difficulty: 'beginner',
    estimatedTime: '4-6 months',
    topics: 35,
    icon: 'TrendingUp',
    color: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    prerequisites: ['basic-mathematics'],
    keywords: ['financial accounting', 'managerial accounting', 'financial statements', 'budgeting'],
    roadmap: [
      {
        id: 'accounting-basics',
        name: 'Accounting Fundamentals',
        description: 'Basic principles and the accounting equation',
        topics: [
          {
            id: 'accounting-equation',
            name: 'Accounting Equation',
            description: 'Assets = Liabilities + Equity and double-entry bookkeeping',
            estimatedTime: '1 week',
            prerequisites: []
          }
        ]
      }
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Creating value for customers through strategic marketing principles and practices.',
    category: 'commerce',
    difficulty: 'beginner',
    estimatedTime: '5-7 months',
    topics: 40,
    icon: 'TrendingUp',
    color: 'bg-gradient-to-br from-red-500 to-pink-600',
    prerequisites: [],
    keywords: ['digital marketing', 'consumer behavior', 'brand management', 'marketing strategy'],
    roadmap: [
      {
        id: 'marketing-fundamentals',
        name: 'Marketing Fundamentals',
        description: 'Core concepts and the marketing mix',
        topics: [
          {
            id: 'marketing-concept',
            name: 'Marketing Concept',
            description: 'Customer-centric approach and value creation',
            estimatedTime: '1 week',
            prerequisites: []
          }
        ]
      }
    ]
  },

  // Additional Humanities
  {
    id: 'political-science',
    name: 'Political Science',
    description: 'Study of government, politics, and power in domestic and international contexts.',
    category: 'social-sciences',
    difficulty: 'intermediate',
    estimatedTime: '6-8 months',
    topics: 45,
    icon: 'Users',
    color: 'bg-gradient-to-br from-red-500 to-orange-600',
    prerequisites: [],
    keywords: ['comparative politics', 'international relations', 'political theory', 'public policy'],
    roadmap: [
      {
        id: 'political-foundations',
        name: 'Political Foundations',
        description: 'Basic concepts of government and political systems',
        topics: [
          {
            id: 'what-is-politics',
            name: 'What is Politics?',
            description: 'Power, authority, legitimacy, and political participation',
            estimatedTime: '1 week',
            prerequisites: []
          }
        ]
      }
    ]
  },
  {
    id: 'anthropology',
    name: 'Anthropology',
    description: 'Holistic study of humanity across cultures, time, and space.',
    category: 'social-sciences',
    difficulty: 'intermediate',
    estimatedTime: '6-8 months',
    topics: 42,
    icon: 'Users',
    color: 'bg-gradient-to-br from-orange-500 to-red-600',
    prerequisites: [],
    keywords: ['cultural anthropology', 'archaeology', 'linguistic anthropology', 'biological anthropology'],
    roadmap: [
      {
        id: 'anthropology-intro',
        name: 'Introduction to Anthropology',
        description: 'Four fields and anthropological perspective',
        topics: [
          {
            id: 'anthropological-perspective',
            name: 'Anthropological Perspective',
            description: 'Holistic, comparative, and cross-cultural approach',
            estimatedTime: '1 week',
            prerequisites: []
          }
        ]
      }
    ]
  },

  // More Specialized Fields
  {
    id: 'international-relations',
    name: 'International Relations',
    description: 'Global politics, diplomacy, and international cooperation and conflict.',
    category: 'social-sciences',
    difficulty: 'advanced',
    estimatedTime: '6-8 months',
    topics: 38,
    icon: 'Users',
    color: 'bg-gradient-to-br from-blue-600 to-indigo-700',
    prerequisites: ['political-science'],
    keywords: ['diplomacy', 'international law', 'global governance', 'security studies'],
    roadmap: [
      {
        id: 'ir-theories',
        name: 'IR Theories',
        description: 'Realism, liberalism, constructivism, and other theoretical frameworks',
        topics: [
          {
            id: 'realism',
            name: 'Realism',
            description: 'Power politics and state-centric international system',
            estimatedTime: '2 weeks',
            prerequisites: []
          }
        ]
      }
    ]
  },
  {
    id: 'ethics',
    name: 'Ethics',
    description: 'Moral philosophy and applied ethics across various domains.',
    category: 'humanities',
    difficulty: 'intermediate',
    estimatedTime: '4-6 months',
    topics: 30,
    icon: 'BookOpen',
    color: 'bg-gradient-to-br from-teal-500 to-blue-600',
    prerequisites: ['philosophy'],
    keywords: ['moral philosophy', 'applied ethics', 'bioethics', 'business ethics'],
    roadmap: [
      {
        id: 'ethical-theories',
        name: 'Ethical Theories',
        description: 'Major approaches to moral reasoning',
        topics: [
          {
            id: 'consequentialism',
            name: 'Consequentialism',
            description: 'Utilitarianism and outcome-based moral reasoning',
            estimatedTime: '2 weeks',
            prerequisites: []
          }
        ]
      }
    ]
  },

  // More Arts
  {
    id: 'film-studies',
    name: 'Film Studies',
    description: 'Cinema as art form, cultural expression, and industry.',
    category: 'arts',
    difficulty: 'beginner',
    estimatedTime: '5-7 months',
    topics: 36,
    icon: 'Play',
    color: 'bg-gradient-to-br from-red-500 to-purple-600',
    prerequisites: [],
    keywords: ['film theory', 'cinematic techniques', 'film history', 'genre studies'],
    roadmap: [
      {
        id: 'film-language',
        name: 'Film Language',
        description: 'Visual storytelling techniques and cinematic elements',
        topics: [
          {
            id: 'shots-angles',
            name: 'Shots & Angles',
            description: 'Camera work, framing, and visual composition',
            estimatedTime: '2 weeks',
            prerequisites: []
          }
        ]
      }
    ]
  },
  {
    id: 'cultural-studies',
    name: 'Cultural Studies',
    description: 'Interdisciplinary examination of culture, power, and identity.',
    category: 'interdisciplinary',
    difficulty: 'advanced',
    estimatedTime: '6-8 months',
    topics: 34,
    icon: 'Users',
    color: 'bg-gradient-to-br from-purple-600 to-pink-600',
    prerequisites: ['sociology', 'anthropology'],
    keywords: ['cultural theory', 'media studies', 'identity politics', 'postcolonial studies'],
    roadmap: [
      {
        id: 'culture-theory',
        name: 'Culture Theory',
        description: 'Theoretical frameworks for understanding culture',
        topics: [
          {
            id: 'culture-concept',
            name: 'Concept of Culture',
            description: 'Defining culture and its role in human society',
            estimatedTime: '2 weeks',
            prerequisites: []
          }
        ]
      }
    ]
  },

  // More Commerce/Business
  {
    id: 'finance',
    name: 'Finance',
    description: 'Corporate finance, investments, and financial markets.',
    category: 'commerce',
    difficulty: 'intermediate',
    estimatedTime: '6-8 months',
    topics: 44,
    icon: 'TrendingUp',
    color: 'bg-gradient-to-br from-green-600 to-emerald-700',
    prerequisites: ['economics', 'accounting'],
    keywords: ['corporate finance', 'investment analysis', 'financial markets', 'risk management'],
    roadmap: [
      {
        id: 'finance-fundamentals',
        name: 'Finance Fundamentals',
        description: 'Time value of money and basic financial concepts',
        topics: [
          {
            id: 'time-value-money',
            name: 'Time Value of Money',
            description: 'Present value, future value, and discounting',
            estimatedTime: '2 weeks',
            prerequisites: []
          }
        ]
      }
    ]
  },
  {
    id: 'entrepreneurship',
    name: 'Entrepreneurship',
    description: 'Starting and scaling ventures from idea to sustainable business.',
    category: 'commerce',
    difficulty: 'intermediate',
    estimatedTime: '5-7 months',
    topics: 32,
    icon: 'TrendingUp',
    color: 'bg-gradient-to-br from-orange-500 to-red-600',
    prerequisites: ['business-management'],
    keywords: ['startup strategy', 'business model', 'venture capital', 'innovation'],
    roadmap: [
      {
        id: 'entrepreneurial-mindset',
        name: 'Entrepreneurial Mindset',
        description: 'Opportunity recognition and risk assessment',
        topics: [
          {
            id: 'opportunity-recognition',
            name: 'Opportunity Recognition',
            description: 'Identifying and evaluating business opportunities',
            estimatedTime: '2 weeks',
            prerequisites: []
          }
        ]
      }
    ]
  },

  // Additional Subjects
  {
    id: 'journalism',
    name: 'Journalism',
    description: 'News gathering, reporting, and media ethics in the digital age.',
    category: 'languages',
    difficulty: 'intermediate',
    estimatedTime: '5-7 months',
    topics: 30,
    icon: 'BookOpen',
    color: 'bg-gradient-to-br from-blue-500 to-teal-600',
    prerequisites: ['creative-writing'],
    keywords: ['news writing', 'investigative journalism', 'media ethics', 'digital journalism'],
    roadmap: [
      {
        id: 'journalism-basics',
        name: 'Journalism Fundamentals',
        description: 'News values, story structure, and reporting techniques',
        topics: [
          {
            id: 'news-values',
            name: 'News Values',
            description: 'What makes something newsworthy and how to find stories',
            estimatedTime: '1 week',
            prerequisites: []
          }
        ]
      }
    ]
  },
  {
    id: 'public-speaking',
    name: 'Public Speaking',
    description: 'Effective communication and presentation skills for any context.',
    category: 'languages',
    difficulty: 'beginner',
    estimatedTime: '3-4 months',
    topics: 20,
    icon: 'Users',
    color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    prerequisites: [],
    keywords: ['presentation skills', 'rhetoric', 'audience analysis', 'speech delivery'],
    roadmap: [
      {
        id: 'speaking-basics',
        name: 'Speaking Fundamentals',
        description: 'Overcoming fear and basic presentation structure',
        topics: [
          {
            id: 'overcoming-fear',
            name: 'Overcoming Speaking Fear',
            description: 'Building confidence and managing anxiety',
            estimatedTime: '1 week',
            prerequisites: []
          }
        ]
      }
    ]
  },

  // Interdisciplinary
  {
    id: 'gender-studies',
    name: 'Gender Studies',
    description: 'Interdisciplinary examination of gender, sexuality, and identity.',
    category: 'interdisciplinary',
    difficulty: 'advanced',
    estimatedTime: '5-7 months',
    topics: 28,
    icon: 'Users',
    color: 'bg-gradient-to-br from-pink-500 to-purple-600',
    prerequisites: ['sociology', 'history'],
    keywords: ['feminist theory', 'queer theory', 'intersectionality', 'gender identity'],
    roadmap: [
      {
        id: 'gender-concepts',
        name: 'Gender Concepts',
        description: 'Understanding gender as social construction',
        topics: [
          {
            id: 'sex-gender-distinction',
            name: 'Sex vs Gender',
            description: 'Biological sex and socially constructed gender roles',
            estimatedTime: '1 week',
            prerequisites: []
          }
        ]
      }
    ]
  },
  {
    id: 'environmental-studies',
    name: 'Environmental Studies',
    description: 'Interdisciplinary approach to environmental problems and sustainability.',
    category: 'interdisciplinary',
    difficulty: 'intermediate',
    estimatedTime: '6-8 months',
    topics: 38,
    icon: 'BookOpen',
    color: 'bg-gradient-to-br from-green-500 to-teal-600',
    prerequisites: [],
    keywords: ['sustainability', 'environmental policy', 'climate change', 'conservation'],
    roadmap: [
      {
        id: 'environmental-basics',
        name: 'Environmental Foundations',
        description: 'Ecosystems, human impact, and environmental challenges',
        topics: [
          {
            id: 'ecosystems',
            name: 'Ecosystems & Biodiversity',
            description: 'How natural systems work and interconnect',
            estimatedTime: '2 weeks',
            prerequisites: []
          }
        ]
      }
    ]
  }
];