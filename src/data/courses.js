// Student-verified reflections; supplied catalog descriptions preserved.
export const courses = [
  {
    "code": "CST 300",
    "title": "Graduation Writing Assessment for Computing and Design",
    "slug": "cst-300",
    "units": 3,
    "description": "This course develops critical reading and writing skills for Computing, Design, and Technology fields. Students will learn to adapt their writing for different audiences and purposes, adhering to disciplinary conventions. The curriculum covers expository and academic writing, professional communication, source selection, and effective communication with diverse audiences.",
    "category": "Communication",
    "topics": [
      "Academic writing",
      "Source selection",
      "Professional communication"
    ],
    "evidence": [
      {
        "id": "cst-300-reflection",
        "type": "reflection",
        "title": "Coursework & Learning Reflection",
        "text": "Clear explanations matter to me because a technical idea is useful only when someone else can understand it. My learning in CST 300 centers on critical reading, academic writing, and the choices involved in professional communication. Evaluating a source means considering its evidence, purpose, and relevance instead of accepting a confident statement at face value. That distinction provides a useful foundation for research in computing.\n\nWhen reviewing my writing, I look for a clear claim, supporting reasoning, and language suited to the intended audience. An explanation for another programmer can assume different background knowledge than an explanation for a client. Revising for those differences connects academic writing with technical documentation and workplace communication. These connections help me communicate technical information responsibly.",
        "contentStatus": "student-verified"
      }
    ],
    "evidenceStatus": "complete",
    "isCapstone": false
  },
  {
    "code": "CST 338",
    "title": "Software Design",
    "slug": "cst-338",
    "units": 4,
    "description": "This is an intermediate-level programming course covering techniques for developing large-scale software systems using object-oriented programming. Coverage includes software development life cycle models, requirements analysis, and graphical user interface development.",
    "category": "Software design",
    "topics": [
      "Object-oriented programming",
      "Software life cycles",
      "Requirements analysis",
      "User interfaces"
    ],
    "evidence": [
      {
        "id": "cst-338-reflection",
        "type": "reflection",
        "title": "Coursework & Learning Reflection",
        "text": "I approach software design as a question of responsibility: what should each part of a program know, and what should it do? Classes and objects offer a way to organize those responsibilities, while encapsulation limits how other code depends on internal details. In reflecting on CST 338, I connect these concepts to requirements analysis and the architectural decisions that shape a larger system.\n\nMy coursework reflection examines how requirements guide code organization and how changes affect maintainability. The software development life cycle also gives me a framework for relating planning, implementation, and later revision. I focus on explaining why a design choice helps someone understand or modify software, rather than simply naming an object-oriented feature. The professional connection is making software understandable enough for future developers to extend with confidence.",
        "contentStatus": "student-verified"
      }
    ],
    "evidenceStatus": "complete",
    "isCapstone": false
  },
  {
    "code": "CST 363",
    "title": "Introduction to Database Systems",
    "slug": "cst-363",
    "units": 4,
    "description": "This course provides balanced coverage of database use and design, focusing on relational databases. Students will learn to design relational schemas, write SQL queries, access a DB programmatically, and perform database administration. Students will gain a working knowledge of the algorithms and data structures used in query evaluation and transaction processing. Students will also learn to apply newer database technologies such as XML, NoSQL, and Hadoop.",
    "category": "Data systems",
    "topics": [
      "SQL",
      "Relational schemas",
      "Transactions",
      "NoSQL"
    ],
    "evidence": [
      {
        "id": "cst-363-reflection",
        "type": "reflection",
        "title": "Coursework & Learning Reflection",
        "text": "The relationship between stored data and reliable application behavior is the focus of my CST 363 reflection. Relational schema design involves deciding what information belongs together and how separate records connect. Primary keys identify records, while foreign keys express relationships and help protect data integrity. These choices influence what SQL queries can retrieve and how consistently an application can update information.\n\nI consider how selecting, joining, and filtering data relate to the questions an application needs to answer. Database administration adds another perspective: a database must remain usable and dependable beyond its initial design. Transaction processing connects that responsibility to coordinated changes in shared data. Understanding these relationships supports my broader development as a programmer by helping me reason about persistence, consistency, and the consequences of database design decisions.",
        "contentStatus": "student-verified"
      }
    ],
    "evidenceStatus": "complete",
    "isCapstone": false
  },
  {
    "code": "CST 334",
    "title": "Operating Systems",
    "slug": "cst-334",
    "units": 4,
    "description": "Students in this course will learn about the use and design of modern operating systems, focusing on Linux. On the \"use\" side, students will learn the Linux command line, to write shell scripts, and to build programs with GNU utilities like awk, sed, and make. On the \"design\" side, students will develop a deep understanding of process management, memory management, file systems, and concurrency, and how they apply to modern technologies like virtualization and cloud computing.",
    "category": "Computing systems",
    "topics": [
      "Linux",
      "Shell scripting",
      "Memory management",
      "Concurrency"
    ],
    "evidence": [
      {
        "id": "cst-334-reflection",
        "type": "reflection",
        "title": "Coursework & Learning Reflection",
        "text": "An operating system sits between a program's requests and the resources needed to fulfill them. That relationship gives me a useful starting point for reflecting on CST 334. Linux command-line tools and shell scripting concepts connect everyday system use with automation, while process management, memory management, and file systems explain responsibilities that applications often depend on indirectly.\n\nI connect these areas of learning by considering how these responsibilities interact. Concurrent processes can compete for shared resources, and memory or file access decisions can affect both correctness and performance. Thinking through those connections helps me move beyond viewing the operating system as a collection of commands. For professional development, I see value in being able to distinguish an application problem from an underlying system issue and explain how resource management influences software behavior in larger computing environments.",
        "contentStatus": "student-verified"
      }
    ],
    "evidenceStatus": "complete",
    "isCapstone": false
  },
  {
    "code": "CST 311",
    "title": "Introduction to Computer Networks",
    "slug": "cst-311",
    "units": 4,
    "description": "Survey of Telecomm and Data Comm Technology Fundamentals, Local Area Network, Wide Area Network, Internet and internetworking protocols including TCP/IP, network security and performance, emerging industry trends such as voice over the network and high speed networking. Designed as a foundation for students who wish to pursue more advanced network studies including certificate programs. Includes hands-on networking labs that incorporate Cisco CCNA lab components.",
    "category": "Networks",
    "topics": [
      "TCP/IP",
      "Network security",
      "LAN & WAN",
      "Networking labs"
    ],
    "evidence": [
      {
        "id": "cst-311-reflection",
        "type": "reflection",
        "title": "Coursework & Learning Reflection",
        "text": "How does information travel from one computer to another? That question guides my CST 311 reflection, following communication across local area networks and wide area networks. TCP/IP and other communication protocols establish rules that allow different systems to exchange information. Network architecture gives those exchanges a structure, connecting individual devices with the broader Internet.\n\nI examine the relationship between network performance and security: successful communication involves more than reaching a destination, because reliability, delay, and protection also matter. Separating the responsibilities of different protocols helps me explain where a communication problem might arise. This perspective connects networking to application development and technical troubleshooting. It gives me a way to reason about systems that depend on remote services without assuming every failure originates in the application itself.",
        "contentStatus": "student-verified"
      }
    ],
    "evidenceStatus": "complete",
    "isCapstone": false
  },
  {
    "code": "CST 336",
    "title": "Internet Programming",
    "slug": "cst-336",
    "units": 4,
    "description": "Provides students with dynamic web application development skills, focusing on the integration of server-side programming, database connectivity, and client-side scripting. Coverage includes the Internet architecture, responsive design, RESTful web services, and Web APIs.",
    "category": "Web development",
    "topics": [
      "Responsive design",
      "Server-side programming",
      "RESTful services",
      "Web APIs"
    ],
    "evidence": [
      {
        "id": "cst-336-reflection",
        "type": "reflection",
        "title": "Coursework & Learning Reflection",
        "text": "A dynamic web application requires several parts to cooperate, even when a visitor sees only one page. For CST 336, my reflection follows that cooperation from frontend interaction through client-server communication to backend processing. Responsive design concerns how an interface adapts to different screens; server-side programming and database connectivity address how information is processed and retained. Web APIs define another boundary through which applications exchange data.\n\nTracing a request helps me explain the responsibilities on either side of that boundary. The learning connection I emphasize is how decisions in one layer affect the others. A usable interface depends on meaningful responses, and backend behavior must support what the interface promises. Reasoning across these layers helps me approach web development with greater attention to consistency and maintainability.",
        "contentStatus": "student-verified"
      }
    ],
    "evidenceStatus": "complete",
    "isCapstone": false
  },
  {
    "code": "CST 370",
    "title": "Design and Analysis of Algorithms",
    "slug": "cst-370",
    "units": 4,
    "description": "Students learn important data structures in computer science and acquire fundamental algorithm design techniques to get the efficient solutions to several computing problems from various disciplines. Topics include the analysis of algorithm efficiency, hash, heap, graph, tree, sorting and searching, brute force, divide-and-conquer, decrease-and-conquer, transform-and-conquer, dynamic programming, and greedy programming.",
    "category": "Algorithms",
    "topics": [
      "Data structures",
      "Algorithm efficiency",
      "Dynamic programming",
      "Graph algorithms"
    ],
    "evidence": [
      {
        "id": "cst-370-reflection",
        "type": "reflection",
        "title": "Coursework & Learning Reflection",
        "text": "Choosing an algorithm means asking how a solution behaves as the problem grows. In my CST 370 reflection, I emphasize that reasoning rather than equate a working answer with an efficient one. Time complexity provides a language for comparing approaches, while data structures such as trees and graphs shape how information can be represented, searched, and processed. Sorting and searching offer useful contexts for examining these tradeoffs.\n\nI compare divide-and-conquer, dynamic programming, and greedy algorithms by considering the conditions that make each strategy appropriate. Dividing a problem, reusing overlapping results, and making locally favorable choices are different decisions with different requirements. Connecting efficiency with problem structure strengthens my ability to justify technical choices and recognize when an approach that works on small inputs may become impractical at a larger scale.",
        "contentStatus": "student-verified"
      }
    ],
    "evidenceStatus": "complete",
    "isCapstone": false
  },
  {
    "code": "CST 462S",
    "title": "Race, Gender, Class in the Digital World",
    "slug": "cst-462s",
    "units": 3,
    "description": "Provides students with key knowledge of race, gender, class, and social justice especially in relation to technology in today's digital world. Students challenge the barriers of expertise, gender, race, class, and location that restrict wider access to and understanding of the production and usage of new technologies. Students will engage in a practical experience in the community via their service placements, which will provide depth and context for considering questions of justice, equality, social responsibilities and the complexities of technology and its societal impact. The course uses a scenario based approach combining presentations, discussions, and reflections to allow students to explore the relationship between critical reflection and action on the topics mentioned above.",
    "category": "Technology & society",
    "topics": [
      "Social justice",
      "Digital access",
      "Community service",
      "Critical reflection"
    ],
    "evidence": [
      {
        "id": "cst-462s-reflection",
        "type": "reflection",
        "title": "Coursework & Learning Reflection",
        "text": "Access to technology is not the same as having an equal opportunity to benefit from it. That distinction is central to my CST 462S reflection. Race, gender, class, and location can influence who participates in digital spaces and whose needs receive attention. Examining digital inequality requires looking beyond whether a device or service is technically available.\n\nI connect critical reflection with questions about social responsibility: who might be excluded, what assumptions shape a design, and how could those assumptions be challenged? The professional relevance is a broader understanding of ethical computing. I use these questions to consider how inclusive technology development can account for different communities and how technical decisions can carry consequences beyond their immediate functional goals.",
        "contentStatus": "student-verified"
      }
    ],
    "evidenceStatus": "complete",
    "isCapstone": false
  },
  {
    "code": "CST 328",
    "title": "Digital Art and Design",
    "slug": "cst-328",
    "units": 3,
    "description": "A survey course that combines the study of technology, design and aesthetic principles as they apply to twenty-first century visual media. Students learn how fundamental concepts of art and design apply to a broad range of commercial, expressive and entertainment forms. Students also study the democratization of the creative process through digital media, using current technology to produce sophisticated and expressive examples of personal digital creativity.",
    "category": "Art & design",
    "topics": [
      "Visual media",
      "Design principles",
      "Digital creativity"
    ],
    "evidence": [
      {
        "id": "cst-328-reflection",
        "type": "reflection",
        "title": "Coursework & Learning Reflection",
        "text": "Visual choices influence what people notice, understand, and feel when using digital media. My CST 328 reflection explores that connection between design aesthetics and communication. Typography can establish hierarchy, color can distinguish elements, and composition can guide attention. I see these principles as useful ways to evaluate whether a digital experience communicates its purpose clearly.\n\nI consider the reasoning behind a visual choice and how that choice relates to its intended audience. The course's connection between creativity and technology also offers a perspective on digital tools as a means of expression. For my development in computing, this encourages attention to the experience surrounding a technical function. Understanding visual design helps me discuss interface decisions more thoughtfully and recognize that presentation affects how people interpret and navigate information.",
        "contentStatus": "student-verified"
      }
    ],
    "evidenceStatus": "complete",
    "isCapstone": false
  },
  {
    "code": "CST 438",
    "title": "Software Engineering",
    "slug": "cst-438",
    "units": 4,
    "description": "Prepares students for large-scale software development using software engineering principles and techniques. Coverage includes software process, requirements analysis and specification, software design, implementation, testing, and project management. Students are expected to work in teams to carry out a realistic software project.",
    "category": "Software engineering",
    "topics": [
      "Requirements",
      "Software testing",
      "Team collaboration",
      "Project management"
    ],
    "evidence": [
      {
        "id": "cst-438-reflection",
        "type": "reflection",
        "title": "Coursework & Learning Reflection",
        "text": "Maintainable software depends on decisions made throughout development, starting before implementation. For CST 438, my reflection centers on the links between requirements gathering, specification, software design, testing, and project management. Clear requirements provide a basis for deciding what to build, while testing helps assess whether the implementation behaves as intended. Changes in either area can require revisiting earlier decisions.\n\nCollaborative development adds questions about how people coordinate work and communicate expectations. My learning emphasis is the relationship between process and technical quality: planning, review, and testing help make changes more understandable. That perspective supports my professional growth by encouraging me to consider how software can remain useful and maintainable after its first implementation is finished.",
        "contentStatus": "student-verified"
      }
    ],
    "evidenceStatus": "complete",
    "isCapstone": false
  },
  {
    "code": "CST 315",
    "title": "Introduction to Cybersecurity",
    "slug": "cst-315",
    "units": 4,
    "description": "This course provides a comprehensive introduction to cybersecurity fundamentals and the core technologies protecting digital assets. Students will explore key areas including cryptography, access control mechanisms, malware analysis, and social engineering tactics. By integrating technical concepts with human factors in security, the course equips participants with essential skills to navigate and address contemporary cybersecurity challenges.",
    "category": "Security",
    "topics": [
      "Cryptography",
      "Access control",
      "Malware",
      "Social engineering"
    ],
    "evidence": [
      {
        "id": "cst-315-reflection",
        "type": "reflection",
        "title": "Coursework & Learning Reflection",
        "text": "Protecting digital assets involves both technical controls and human decisions. My CST 315 reflection centers on that connection, considering how authentication establishes identity and access control limits permitted actions. Cryptography contributes methods for protecting information, but its role needs to be understood alongside vulnerabilities in systems and the ways people interact with them.\n\nMalware and social engineering illustrate different routes through which security can fail. One invites examination of malicious software behavior; the other calls attention to manipulation, trust, and judgment. The broader skill I emphasize is evaluating protection in context instead of assuming one control addresses every threat. This approach helps me connect cybersecurity fundamentals with responsible software development, where protecting data requires attention to system behavior, access decisions, and the people using the technology.",
        "contentStatus": "student-verified"
      }
    ],
    "evidenceStatus": "complete",
    "isCapstone": false
  },
  {
    "code": "CST 329",
    "title": "Reasoning with Logic",
    "slug": "cst-329",
    "units": 3,
    "description": "In this course students learn to develop skill in using logic to describe and assess arguments. Students will learn to write formulas in propositional and first-order logic, and more importantly, to write and check proofs. Students will also learn to write formulas in three-valued and modal logic, know how to choose an appropriate logic, and understand the limitations of logic in capturing human reasoning.",
    "category": "Logic",
    "topics": [
      "Propositional logic",
      "First-order logic",
      "Proofs",
      "Modal logic"
    ],
    "evidence": [
      {
        "id": "cst-329-reflection",
        "type": "reflection",
        "title": "Coursework & Learning Reflection",
        "text": "An argument can sound convincing while leaving an important assumption unstated. My CST 329 reflection focuses on how logic makes those assumptions and the steps between them more explicit. Propositional logic represents relationships among statements, while first-order logic adds predicates and quantifiers to express claims about objects. Translating language into logical formulas requires careful attention to what a statement actually asserts.\n\nConditional reasoning is especially relevant because a conclusion must follow from its premises, not simply resemble an expected answer. Formal proofs provide a structure for checking that connection one step at a time. I also consider the limitations of formalization when ordinary language contains ambiguity. These habits connect to computing through precise specifications and structured problem-solving, helping me separate assumptions from conclusions and explain why a proposed line of reasoning is justified.",
        "contentStatus": "student-verified"
      }
    ],
    "evidenceStatus": "complete",
    "isCapstone": false
  },
  {
    "code": "CST 489",
    "title": "Capstone Project Planning",
    "slug": "cst-489",
    "units": 1,
    "description": "Students create a detailed proposal of a substantial, professional level project with an approval of the student's capstone advisor. Students learn and practice project planning, collaboration and writing skills required in the industry.",
    "category": "Capstone",
    "topics": [
      "Proposal writing",
      "Project planning",
      "Collaboration"
    ],
    "evidence": [],
    "evidenceStatus": "deferred",
    "isCapstone": true
  },
  {
    "code": "CST 499",
    "title": "Computer Science Capstone",
    "slug": "cst-499",
    "units": 4,
    "description": "The course offers students a culminating experience by integrating the knowledge and skills acquired throughout their academic program into a comprehensive project. Students often work on a large group real-world project, exploring the problem space, developing requirement specifications, and proposing a solution followed by design and development of the solution. Concurrently, students will acquire and refine essential project management, collaboration, and presentation skills that are critical for their future professional careers.",
    "category": "Capstone",
    "topics": [
      "Requirements",
      "Design & development",
      "Project management",
      "Presentation"
    ],
    "evidence": [],
    "evidenceStatus": "deferred",
    "isCapstone": true
  }
];
