
// ═══════════════════════════════════════
//  QUIZ DATA
// ═══════════════════════════════════════
const PROGRAMS = {
  BCA: {
    color: '#7c6af7',
    subjects: [
      { id: 'c_prog', name: 'Programming in C', icon: '⌨️', questions: [
        { q: "What is the correct syntax to declare a pointer in C?", opts: ["int ptr;", "int *ptr;", "*int ptr;", "pointer int ptr;"], ans: 1, exp: "A pointer is declared using the * operator before the variable name: int *ptr; This creates a pointer that can store the address of an integer." },
        { q: "Which header file is required for using printf() and scanf()?", opts: ["stdlib.h", "string.h", "stdio.h", "math.h"], ans: 2, exp: "stdio.h (Standard Input/Output) provides printf() for output and scanf() for input." },
        { q: "What is the output of: printf(\"%d\", sizeof(int));", opts: ["2", "4", "8", "Depends on compiler"], ans: 3, exp: "sizeof(int) is implementation-defined and varies by platform/compiler (typically 2, 4, or 8 bytes)." },
        { q: "What does the 'break' statement do in a switch-case?", opts: ["Exits the program", "Terminates the loop", "Exits the switch block", "Goes to next case"], ans: 2, exp: "break exits the current switch block, preventing fall-through to subsequent cases." },
        { q: "Which loop guarantees at least one execution?", opts: ["for", "while", "do-while", "foreach"], ans: 2, exp: "The do-while loop executes its body first, then checks the condition, guaranteeing at least one execution." },
        { q: "What is a dangling pointer?", opts: ["Pointer with no value", "Pointer pointing to freed memory", "NULL pointer", "Void pointer"], ans: 1, exp: "A dangling pointer points to memory that has been freed/deallocated, leading to undefined behavior if accessed." },
        { q: "What is the purpose of 'static' keyword for a local variable?", opts: ["Makes it global", "Retains value between calls", "Makes it constant", "Allocates on heap"], ans: 1, exp: "Static local variables retain their value across function calls, initialized only once." },
        { q: "Which function is used for dynamic memory allocation in C?", opts: ["alloc()", "malloc()", "memalloc()", "dyalloc()"], ans: 1, exp: "malloc() (memory allocation) allocates a block of memory on the heap and returns a void pointer." },
        { q: "What is a segmentation fault?", opts: ["Syntax error", "Accessing unauthorized memory", "Stack overflow", "Division by zero"], ans: 1, exp: "A segmentation fault occurs when a program tries to access memory it's not allowed to access." },
        { q: "What does 'void' in a function return type mean?", opts: ["Returns 0", "Returns NULL", "Returns nothing", "Returns any type"], ans: 2, exp: "void return type means the function does not return any value to the caller." }
      ]},
      { id: 'ds', name: 'Data Structures', icon: '🌲', questions: [
        { q: "What is the time complexity of binary search?", opts: ["O(n)", "O(log n)", "O(n²)", "O(1)"], ans: 1, exp: "Binary search halves the search space each iteration, giving O(log n) time complexity." },
        { q: "Which data structure uses LIFO principle?", opts: ["Queue", "Tree", "Stack", "Graph"], ans: 2, exp: "Stack uses Last In First Out (LIFO) — the last element added is the first to be removed." },
        { q: "What is the worst-case time complexity of Quick Sort?", opts: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"], ans: 2, exp: "QuickSort's worst case O(n²) occurs when the pivot is always the smallest or largest element." },
        { q: "In a Binary Search Tree, where is the smallest element?", opts: ["Root", "Rightmost node", "Leftmost node", "Any leaf"], ans: 2, exp: "In a BST, all left subtree values are smaller than the root, so the leftmost node is the minimum." },
        { q: "What is a circular linked list?", opts: ["List with no nodes", "Last node points to head", "Doubly linked list", "Sorted list"], ans: 1, exp: "In a circular linked list, the last node's next pointer points back to the head node." },
        { q: "Which traversal visits root first in a binary tree?", opts: ["Inorder", "Postorder", "Preorder", "Level order"], ans: 2, exp: "Preorder traversal visits: Root → Left → Right." },
        { q: "What is the space complexity of merge sort?", opts: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], ans: 2, exp: "Merge sort requires O(n) extra space for the temporary arrays used during merging." },
        { q: "A full binary tree has nodes with how many children?", opts: ["0 or 1", "0 or 2", "Always 2", "1 or 2"], ans: 1, exp: "In a full binary tree, every node has either 0 (leaf) or exactly 2 children." },
        { q: "Which data structure is used for BFS traversal?", opts: ["Stack", "Queue", "Priority Queue", "Tree"], ans: 1, exp: "Breadth-First Search uses a Queue to explore nodes level by level." },
        { q: "What is hashing?", opts: ["Sorting data", "Mapping data to fixed-size values", "Searching linearly", "Balancing trees"], ans: 1, exp: "Hashing maps data of arbitrary size to fixed-size values using a hash function for O(1) average lookups." }
      ]},
      { id: 'dbms', name: 'DBMS', icon: '🗄️', questions: [
        { q: "What does ACID stand for in database transactions?", opts: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Index, Data", "Atomic, Commit, Integrate, Delete", "None of these"], ans: 0, exp: "ACID ensures reliable database transactions: Atomicity, Consistency, Isolation, Durability." },
        { q: "Which normal form removes transitive dependencies?", opts: ["1NF", "2NF", "3NF", "BCNF"], ans: 2, exp: "3NF (Third Normal Form) eliminates transitive dependencies where non-key attributes depend on other non-key attributes." },
        { q: "What is a foreign key?", opts: ["Primary key of same table", "Key referencing another table's primary key", "Unique key", "Composite key"], ans: 1, exp: "A foreign key is a field that references the primary key of another table, establishing a relationship." },
        { q: "Which SQL command is used to modify existing table structure?", opts: ["UPDATE", "MODIFY", "ALTER", "CHANGE"], ans: 2, exp: "ALTER TABLE modifies the structure of an existing table (add/remove columns, change data types)." },
        { q: "What is a deadlock in DBMS?", opts: ["When DB crashes", "Two transactions wait for each other's locks", "Slow query", "Memory overflow"], ans: 1, exp: "A deadlock occurs when two or more transactions permanently wait for each other to release locks." },
        { q: "What does the SELECT DISTINCT statement do?", opts: ["Selects all rows", "Removes duplicate rows", "Selects NULL values", "Orders results"], ans: 1, exp: "SELECT DISTINCT returns only unique (non-duplicate) values from the specified column(s)." },
        { q: "What type of join returns all rows from both tables?", opts: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"], ans: 3, exp: "FULL OUTER JOIN returns all rows from both tables, with NULL where there's no match." },
        { q: "What is an index in DBMS?", opts: ["A view", "Data structure to speed up queries", "A constraint", "A trigger"], ans: 1, exp: "An index is a data structure that improves the speed of data retrieval operations on database tables." },
        { q: "Which aggregate function returns the number of rows?", opts: ["SUM()", "AVG()", "COUNT()", "MAX()"], ans: 2, exp: "COUNT() returns the number of rows matching the specified criteria." },
        { q: "What is ER diagram used for?", opts: ["Writing SQL", "Modeling database structure", "Executing queries", "Backing up data"], ans: 1, exp: "Entity-Relationship diagrams visually represent the logical structure of a database." }
      ]},
      { id: 'networks', name: 'Computer Networks', icon: '🌐', questions: [
        { q: "What does HTTP stand for?", opts: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transmission Process", "Host Transfer Protocol"], ans: 0, exp: "HTTP (HyperText Transfer Protocol) is the foundation of data communication on the World Wide Web." },
        { q: "Which layer of OSI model is responsible for routing?", opts: ["Data Link", "Transport", "Network", "Session"], ans: 2, exp: "The Network layer (Layer 3) handles routing of packets between different networks using IP addresses." },
        { q: "What is the default port for HTTPS?", opts: ["80", "21", "443", "8080"], ans: 2, exp: "HTTPS operates on port 443, while HTTP uses port 80." },
        { q: "What does DNS stand for?", opts: ["Domain Name System", "Data Network Service", "Dynamic Name Server", "Distributed Network System"], ans: 0, exp: "DNS (Domain Name System) translates human-readable domain names into IP addresses." },
        { q: "What is the purpose of a subnet mask?", opts: ["Encrypt data", "Identify network and host portions", "Route packets", "Assign MAC addresses"], ans: 1, exp: "A subnet mask divides an IP address into network and host portions for routing purposes." },
        { q: "Which protocol is connection-oriented?", opts: ["UDP", "ICMP", "TCP", "IP"], ans: 2, exp: "TCP (Transmission Control Protocol) is connection-oriented, establishing a connection before data transfer." },
        { q: "What is a MAC address?", opts: ["IP address type", "Hardware identifier for network interface", "Protocol", "Port number"], ans: 1, exp: "MAC (Media Access Control) address is a unique hardware identifier assigned to network interface cards." },
        { q: "What is the maximum transmission unit (MTU)?", opts: ["Maximum speed", "Largest packet size transmittable", "Minimum bandwidth", "Maximum users"], ans: 1, exp: "MTU defines the largest data packet that can be transmitted over a network without fragmentation." },
        { q: "Which device operates at Layer 2 of OSI model?", opts: ["Router", "Hub", "Switch", "Gateway"], ans: 2, exp: "Switches operate at Layer 2 (Data Link), using MAC addresses to forward frames within a network." },
        { q: "What is a VPN?", opts: ["Very Private Network", "Virtual Private Network", "Verified Protocol Node", "Video Processing Node"], ans: 1, exp: "A VPN (Virtual Private Network) creates an encrypted tunnel over a public network for secure communication." }
      ]},
      { id: 'web', name: 'Web Technology', icon: '🖥️', questions: [
        { q: "What does CSS stand for?", opts: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Syntax", "Custom Style System"], ans: 1, exp: "CSS (Cascading Style Sheets) is used to style and layout HTML elements on web pages." },
        { q: "Which HTML tag creates a hyperlink?", opts: ["<link>", "<href>", "<a>", "<url>"], ans: 2, exp: "The <a> (anchor) tag creates hyperlinks in HTML using the href attribute for the URL." },
        { q: "What is the purpose of JavaScript?", opts: ["Styling web pages", "Database management", "Adding interactivity to web pages", "Server configuration"], ans: 2, exp: "JavaScript adds dynamic behavior and interactivity to web pages, running in the browser." },
        { q: "What does DOM stand for?", opts: ["Document Object Model", "Data Object Management", "Document Oriented Module", "Dynamic Object Model"], ans: 0, exp: "DOM (Document Object Model) is a programming interface for HTML/XML documents as a tree structure." },
        { q: "Which CSS property controls text size?", opts: ["text-style", "font-size", "text-size", "font-scale"], ans: 1, exp: "font-size sets the size of the text, accepting values in px, em, rem, %, etc." },
        { q: "What does AJAX stand for?", opts: ["Asynchronous JavaScript And XML", "Advanced Java And XML", "Automated JavaScript Actions", "Async JSON And XML"], ans: 0, exp: "AJAX (Asynchronous JavaScript And XML) allows web pages to update without reloading by communicating with a server." },
        { q: "What is the box model in CSS?", opts: ["3D model", "Content, Padding, Border, Margin", "Grid layout system", "Flexbox container"], ans: 1, exp: "The CSS Box Model describes how every element is a box with: content, padding, border, and margin." },
        { q: "Which method sends form data in the URL?", opts: ["POST", "PUT", "GET", "DELETE"], ans: 2, exp: "GET method appends form data to the URL as query parameters, visible in the address bar." },
        { q: "What is a responsive web design?", opts: ["Fast loading design", "Design adapting to different screen sizes", "Animated design", "Dark mode design"], ans: 1, exp: "Responsive web design creates layouts that adapt and work across different devices and screen sizes." },
        { q: "What is localStorage in JavaScript?", opts: ["Server-side storage", "Browser storage with no expiry", "Session-only storage", "Cookie storage"], ans: 1, exp: "localStorage provides client-side storage in the browser that persists even after the browser is closed." }
      ]}
    ]
  },
  MCA: {
    color: '#f7c66a',
    subjects: [
      { id: 'algo', name: 'Advanced Algorithms', icon: '🧮', questions: [
        { q: "What is the time complexity of Dijkstra's algorithm with a min-heap?", opts: ["O(V²)", "O(E log V)", "O(V log E)", "O(E + V)"], ans: 1, exp: "With a binary min-heap, Dijkstra's runs in O((V + E) log V) ≈ O(E log V) for sparse graphs." },
        { q: "What is dynamic programming's key principle?", opts: ["Divide and conquer", "Greedy selection", "Optimal substructure & overlapping subproblems", "Backtracking"], ans: 2, exp: "DP solves complex problems by breaking them into overlapping subproblems and storing results (memoization/tabulation)." },
        { q: "What does NP-Complete mean?", opts: ["Not Polynomial", "In NP and as hard as any NP problem", "Non-deterministic Polynomial", "Never solvable in polynomial time"], ans: 1, exp: "NP-Complete problems are in NP and every NP problem reduces to them in polynomial time." },
        { q: "What is the Bellman-Ford algorithm used for?", opts: ["Minimum spanning tree", "Shortest path with negative edges", "All-pairs shortest path", "Topological sort"], ans: 1, exp: "Bellman-Ford finds shortest paths from a source, even with negative edge weights, in O(VE)." },
        { q: "What is amortized analysis?", opts: ["Worst-case analysis", "Average cost per operation over sequence", "Best-case analysis", "Space complexity analysis"], ans: 1, exp: "Amortized analysis calculates the average performance per operation over a worst-case sequence of operations." },
        { q: "Which paradigm does the Greedy algorithm use?", opts: ["Exhaustive search", "Making locally optimal choices", "Divide and conquer", "Dynamic programming"], ans: 1, exp: "Greedy algorithms make the locally optimal choice at each step, hoping to find a global optimum." },
        { q: "What is the Master Theorem used for?", opts: ["Graph problems", "Solving divide and conquer recurrences", "Dynamic programming", "Sorting"], ans: 1, exp: "Master Theorem provides a formula to solve recurrences of the form T(n) = aT(n/b) + f(n)." },
        { q: "What is a P problem?", opts: ["Polynomial space", "Solvable in polynomial time", "Parallel problem", "Probabilistic problem"], ans: 1, exp: "P is the class of decision problems solvable by a deterministic algorithm in polynomial time." },
        { q: "Which algorithm is used for finding minimum spanning trees?", opts: ["Dijkstra's", "Bellman-Ford", "Kruskal's", "Floyd-Warshall"], ans: 2, exp: "Kruskal's algorithm (and Prim's) finds the Minimum Spanning Tree of a weighted undirected graph." },
        { q: "What is memoization?", opts: ["Memory management", "Caching results of expensive function calls", "Sorting technique", "Graph traversal"], ans: 1, exp: "Memoization stores the results of expensive function calls and returns the cached result for repeated inputs." }
      ]},
      { id: 'se', name: 'Software Engineering', icon: '⚙️', questions: [
        { q: "What is the Agile Manifesto's first value?", opts: ["Working software", "Individuals and interactions over processes", "Customer collaboration", "Responding to change"], ans: 1, exp: "Agile's first value: 'Individuals and interactions over processes and tools.'" },
        { q: "What is technical debt?", opts: ["Financial cost of software", "Cost of rework from quick fixes", "Database size", "Code documentation"], ans: 1, exp: "Technical debt is the future cost of rework caused by choosing quick/easy solutions over better long-term approaches." },
        { q: "What does SOLID stand for in OOP?", opts: ["Single, Open, Liskov, Interface, Dependency", "Simple, Object, Linear, Integrate, Design", "System, Open, Link, Interface, Data", "None of these"], ans: 0, exp: "SOLID: Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion." },
        { q: "What is continuous integration?", opts: ["Merging code to main branch frequently", "Deploying to production daily", "Writing tests", "Code review process"], ans: 0, exp: "CI is the practice of frequently merging developer code changes to a shared repository with automated testing." },
        { q: "Which model is best for projects with unclear requirements?", opts: ["Waterfall", "V-Model", "Agile/Scrum", "RAD"], ans: 2, exp: "Agile handles changing/unclear requirements well through iterative development and regular feedback cycles." },
        { q: "What is a design pattern?", opts: ["UI template", "Reusable solution to a common software problem", "Coding standard", "Database schema"], ans: 1, exp: "Design patterns are reusable solutions to commonly occurring problems in software design (e.g., Singleton, Observer)." },
        { q: "What does MVP stand for in product development?", opts: ["Most Valuable Product", "Minimum Viable Product", "Maximum Version Product", "Multi-Version Protocol"], ans: 1, exp: "MVP (Minimum Viable Product) is a product with just enough features to satisfy early customers and gather feedback." },
        { q: "What is unit testing?", opts: ["Testing the entire system", "Testing individual components", "Performance testing", "User acceptance testing"], ans: 1, exp: "Unit testing tests individual functions/components in isolation to verify they work correctly." },
        { q: "What is refactoring?", opts: ["Adding new features", "Rewriting from scratch", "Improving code structure without changing behavior", "Bug fixing"], ans: 2, exp: "Refactoring improves code quality (readability, maintainability) without changing external behavior." },
        { q: "What is version control?", opts: ["Software licensing", "Managing changes to code over time", "Server management", "API versioning"], ans: 1, exp: "Version control systems (e.g., Git) track changes to code, enabling collaboration and history management." }
      ]},
      { id: 'cloud', name: 'Cloud Computing', icon: '☁️', questions: [
        { q: "What is IaaS?", opts: ["Internet as a Service", "Infrastructure as a Service", "Integration as a Service", "Input as a Service"], ans: 1, exp: "IaaS provides virtualized computing infrastructure (servers, storage, networking) over the internet." },
        { q: "What is auto-scaling in cloud computing?", opts: ["Automatic backup", "Dynamically adjusting resources based on demand", "Auto-deployment", "Automatic billing"], ans: 1, exp: "Auto-scaling automatically increases or decreases compute resources based on real-time demand." },
        { q: "What is serverless computing?", opts: ["Computing without servers", "Cloud execution without managing servers", "Local computing", "Peer-to-peer computing"], ans: 1, exp: "Serverless lets developers run code without managing server infrastructure; cloud provider handles provisioning." },
        { q: "What does SLA stand for in cloud services?", opts: ["Service Level Agreement", "System Load Allocation", "Secure Login Authentication", "Software Licensing Agreement"], ans: 0, exp: "SLA (Service Level Agreement) is a contract defining the level of service expected from a cloud provider." },
        { q: "What is a virtual machine?", opts: ["Physical server", "Software emulation of a computer", "Cloud storage unit", "Network protocol"], ans: 1, exp: "A virtual machine is a software emulation of a physical computer, running an OS and applications in isolation." },
        { q: "What is multi-tenancy in cloud?", opts: ["Multiple cloud providers", "Multiple users sharing same infrastructure", "Multiple regions", "Multiple backups"], ans: 1, exp: "Multi-tenancy allows multiple customers (tenants) to share the same physical infrastructure while staying isolated." },
        { q: "What is the CAP theorem?", opts: ["Cloud Architecture Principle", "Can't have Consistency, Availability, Partition tolerance all at once", "Cache and Persistence", "None"], ans: 1, exp: "CAP theorem states a distributed system can only guarantee two of three: Consistency, Availability, Partition tolerance." },
        { q: "What is Docker?", opts: ["Cloud provider", "Containerization platform", "Programming language", "Database system"], ans: 1, exp: "Docker is a platform for containerizing applications, packaging code and dependencies into portable containers." },
        { q: "What is Kubernetes?", opts: ["Cloud storage", "Container orchestration system", "Programming framework", "Monitoring tool"], ans: 1, exp: "Kubernetes automates deployment, scaling, and management of containerized applications." },
        { q: "What is edge computing?", opts: ["Computing at the network edge near data sources", "Central data center computing", "Mobile computing", "Quantum computing"], ans: 0, exp: "Edge computing processes data near its source (edge of the network) to reduce latency." }
      ]},
      { id: 'ml', name: 'Machine Learning', icon: '🤖', questions: [
        { q: "What is overfitting in machine learning?", opts: ["Model too simple for data", "Model memorizes training data, fails on new data", "Too few training examples", "High bias"], ans: 1, exp: "Overfitting occurs when a model learns training data too well, including noise, reducing generalization." },
        { q: "What is the purpose of the activation function in neural networks?", opts: ["Weight initialization", "Introduce non-linearity", "Regularization", "Data normalization"], ans: 1, exp: "Activation functions introduce non-linearity, allowing neural networks to learn complex patterns." },
        { q: "What is gradient descent?", opts: ["Data preprocessing technique", "Optimization algorithm minimizing loss function", "Feature selection", "Model evaluation"], ans: 1, exp: "Gradient descent iteratively adjusts model parameters in the direction that minimizes the loss function." },
        { q: "What is the difference between supervised and unsupervised learning?", opts: ["Speed", "Supervised uses labeled data, unsupervised doesn't", "Algorithm type", "Hardware requirement"], ans: 1, exp: "Supervised learning uses labeled training data; unsupervised learning finds patterns in unlabeled data." },
        { q: "What is a confusion matrix?", opts: ["Data visualization", "Table showing actual vs predicted classifications", "Loss function", "Activation function"], ans: 1, exp: "A confusion matrix shows TP, TN, FP, FN counts to evaluate classification model performance." },
        { q: "What does PCA stand for?", opts: ["Polynomial Component Analysis", "Principal Component Analysis", "Predictive Classification Algorithm", "Partial Correlation Analysis"], ans: 1, exp: "PCA (Principal Component Analysis) reduces dimensionality by finding principal components of data variance." },
        { q: "What is a Random Forest?", opts: ["Decision tree", "Ensemble of multiple decision trees", "Neural network", "Clustering algorithm"], ans: 1, exp: "Random Forest combines many decision trees trained on random subsets, reducing overfitting via ensemble learning." },
        { q: "What is the vanishing gradient problem?", opts: ["Memory overflow", "Gradients becoming too small in deep networks", "Training data issue", "Overfitting"], ans: 1, exp: "In deep networks, gradients shrink exponentially during backpropagation, making early layers learn very slowly." },
        { q: "What is K-Means clustering?", opts: ["Supervised classification", "Unsupervised algorithm partitioning data into K clusters", "Regression technique", "Neural network type"], ans: 1, exp: "K-Means partitions n data points into K clusters based on feature similarity, minimizing intra-cluster variance." },
        { q: "What is transfer learning?", opts: ["Moving data between servers", "Using a pre-trained model for a new task", "Data augmentation", "Hyperparameter tuning"], ans: 1, exp: "Transfer learning leverages knowledge from a model trained on one task to improve learning on a different task." }
      ]},
      { id: 'cyber', name: 'Cyber Security', icon: '🔐', questions: [
        { q: "What is a SQL injection attack?", opts: ["Server crash", "Inserting malicious SQL into input fields", "Password theft", "DDoS attack"], ans: 1, exp: "SQL injection inserts malicious SQL code into input fields to manipulate/access database data unauthorized." },
        { q: "What does XSS stand for?", opts: ["Extended Security System", "Cross-Site Scripting", "XML Security Standard", "Cross-Server System"], ans: 1, exp: "XSS (Cross-Site Scripting) injects malicious scripts into web pages viewed by other users." },
        { q: "What is a man-in-the-middle attack?", opts: ["Brute force attack", "Attacker intercepts communication between two parties", "Password cracking", "Phishing"], ans: 1, exp: "MITM attack secretly intercepts and possibly alters communication between two parties who believe they're direct." },
        { q: "What is symmetric encryption?", opts: ["Different keys for encryption/decryption", "Same key for both encryption and decryption", "No key encryption", "Public key encryption"], ans: 1, exp: "Symmetric encryption uses the same secret key for both encrypting and decrypting data (e.g., AES)." },
        { q: "What is a zero-day vulnerability?", opts: ["Old known vulnerability", "Flaw unknown to vendor with no patch available", "Scheduled vulnerability", "Test vulnerability"], ans: 1, exp: "A zero-day is a vulnerability unknown to the software vendor, leaving zero days to fix before exploitation." },
        { q: "What is two-factor authentication (2FA)?", opts: ["Two passwords", "Verification using two different authentication factors", "Two usernames", "Dual encryption"], ans: 1, exp: "2FA requires two types of verification: something you know (password) + something you have/are (OTP, biometric)." },
        { q: "What is a firewall?", opts: ["Physical security device", "Network security system monitoring/controlling traffic", "Antivirus software", "VPN service"], ans: 1, exp: "A firewall monitors and controls incoming/outgoing network traffic based on predetermined security rules." },
        { q: "What is social engineering in cybersecurity?", opts: ["Building social networks", "Manipulating people to reveal confidential information", "Social media hacking", "Network topology"], ans: 1, exp: "Social engineering manipulates humans psychologically to divulge confidential information or perform actions." },
        { q: "What does HTTPS ensure?", opts: ["Faster browsing", "Encrypted communication between browser and server", "Free hosting", "Anonymous browsing"], ans: 1, exp: "HTTPS uses TLS/SSL encryption to secure data transmission between browser and web server." },
        { q: "What is a brute force attack?", opts: ["Physical server attack", "Trying all possible passwords/keys systematically", "Software vulnerability", "Network flooding"], ans: 1, exp: "Brute force attacks systematically try every possible combination to guess passwords or decrypt data." }
      ]}
    ]
  }
};

// ═══════════════════════════════════════
//  STATE
// ═══════════════════════════════════════
let state = {
  program: null,
  subject: null,
  questions: [],
  current: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  correct: 0,
  wrong: 0,
  skipped: 0,
  answered: false,
  timer: null,
  timeLeft: 20,
  shuffledQuestions: []
};

// ═══════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goHome() {
  clearInterval(state.timer);
  showScreen('home');
}

function confirmBack() {
  if (confirm('Exit quiz? Your progress will be lost.')) {
    clearInterval(state.timer);
    goHome();
  }
}

function selectProgram(prog) {
  state.program = prog;
  const data = PROGRAMS[prog];
  document.getElementById('select-title').textContent = `${prog} — Choose Subject`;
  document.getElementById('select-title').style.color = data.color;

  const grid = document.getElementById('subjects-grid');
  grid.innerHTML = data.subjects.map(s => `
    <button class="subject-btn" onclick="startQuiz('${s.id}')">
      <span class="subj-icon">${s.icon}</span>
      <span class="subj-name">${s.name}</span>
      <span class="subj-count">${s.questions.length} questions · 20s each</span>
    </button>
  `).join('');

  showScreen('subject-select');
}

function startQuiz(subjectId) {
  const subj = PROGRAMS[state.program].subjects.find(s => s.id === subjectId);
  state.subject = subj;
  state.shuffledQuestions = shuffle([...subj.questions]);
  state.questions = state.shuffledQuestions;
  state.current = 0;
  state.score = 0;
  state.streak = 0;
  state.maxStreak = 0;
  state.correct = 0;
  state.wrong = 0;
  state.skipped = 0;

  document.getElementById('quiz-subject-name').textContent = subj.name;
  document.getElementById('quiz-program-badge').textContent = `${state.program} · ${subj.questions.length} Questions`;

  showScreen('quiz');
  renderQuestion();
}

// ═══════════════════════════════════════
//  QUESTION RENDERING
// ═══════════════════════════════════════
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderQuestion() {
  clearInterval(state.timer);
  state.answered = false;
  state.timeLeft = 20;

  const q = state.questions[state.current];
  const total = state.questions.length;
  const pct = Math.round((state.current / total) * 100);

  document.getElementById('q-num').textContent = `Question ${String(state.current + 1).padStart(2,'0')}`;
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('progress-text').textContent = `Question ${state.current + 1} of ${total}`;
  document.getElementById('progress-pct').textContent = `${pct}%`;
  document.getElementById('progress-fill').style.width = `${pct}%`;
  document.getElementById('stat-score').textContent = state.score;
  document.getElementById('stat-streak').textContent = state.streak;
  document.getElementById('explanation').classList.remove('show');
  document.getElementById('next-btn').classList.remove('show');

  // Question card re-animate
  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = 'slideUp 0.4s ease';

  // Options
  const letters = ['A', 'B', 'C', 'D'];
  document.getElementById('options-grid').innerHTML = q.opts.map((opt, i) => `
    <button class="option-btn" onclick="selectAnswer(${i})" id="opt-${i}">
      <span class="option-letter">${letters[i]}</span>
      <span>${opt}</span>
    </button>
  `).join('');

  startTimer();
}

function startTimer() {
  updateTimerUI(state.timeLeft);
  state.timer = setInterval(() => {
    state.timeLeft--;
    updateTimerUI(state.timeLeft);
    if (state.timeLeft <= 0) {
      clearInterval(state.timer);
      if (!state.answered) {
        timeUp();
      }
    }
  }, 1000);
}

function updateTimerUI(val) {
  document.getElementById('timer-val').textContent = val;
  const fill = document.getElementById('timer-ring-fill');
  const circumference = 125.66;
  const offset = circumference * (1 - val / 20);
  fill.style.strokeDashoffset = offset;
  if (val <= 5) fill.style.stroke = '#f76a6a';
  else if (val <= 10) fill.style.stroke = '#f7c66a';
  else fill.style.stroke = '#5ef0b0';
}

function timeUp() {
  state.answered = true;
  state.skipped++;
  state.streak = 0;
  document.getElementById('stat-streak').textContent = 0;
  const q = state.questions[state.current];
  document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
  document.getElementById(`opt-${q.ans}`).classList.add('correct');
  showExplanation(q.exp);
  showToast('⏱ Time up!', '');
  document.getElementById('next-btn').classList.add('show');
}

function selectAnswer(idx) {
  if (state.answered) return;
  clearInterval(state.timer);
  state.answered = true;

  const q = state.questions[state.current];
  const btns = document.querySelectorAll('.option-btn');
  btns.forEach(b => b.disabled = true);

  if (idx === q.ans) {
    btns[idx].classList.add('correct');
    state.score += 10 + (state.timeLeft > 10 ? 5 : 0); // bonus for fast answer
    state.correct++;
    state.streak++;
    state.maxStreak = Math.max(state.maxStreak, state.streak);
    document.getElementById('stat-score').textContent = state.score;
    document.getElementById('stat-streak').textContent = state.streak;
    showToast(`✓ Correct! ${state.streak > 1 ? '🔥 ' + state.streak + ' streak' : ''}`, 'correct-t');
  } else {
    btns[idx].classList.add('wrong');
    btns[q.ans].classList.add('correct');
    state.wrong++;
    state.streak = 0;
    document.getElementById('stat-streak').textContent = 0;
    showToast('✗ Incorrect', 'wrong-t');
  }

  showExplanation(q.exp);
  document.getElementById('next-btn').classList.add('show');
}

function showExplanation(text) {
  const el = document.getElementById('explanation');
  el.innerHTML = `<strong>💡 Explanation:</strong> ${text}`;
  el.classList.add('show');
}

function nextQuestion() {
  state.current++;
  if (state.current >= state.questions.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

// ═══════════════════════════════════════
//  RESULT
// ═══════════════════════════════════════
function showResult() {
  clearInterval(state.timer);
  showScreen('result');

  const total = state.questions.length;
  const maxScore = total * 15; // max with bonuses
  const pct = state.correct / total;
  const accuracy = Math.round((state.correct / (state.correct + state.wrong)) * 100) || 0;

  document.getElementById('result-score').textContent = state.score;
  document.getElementById('result-total').textContent = `/ ${total * 10}+`;
  document.getElementById('res-correct').textContent = state.correct;
  document.getElementById('res-wrong').textContent = state.wrong;
  document.getElementById('res-skipped').textContent = state.skipped;
  document.getElementById('res-accuracy').textContent = accuracy + '%';

  let grade, msg;
  if (pct >= 0.9)  { grade = '🏆 Outstanding'; msg = 'Exceptional performance! You\'ve mastered this subject.'; }
  else if (pct >= 0.8) { grade = '⭐ Excellent'; msg = 'Great work! You have a strong grasp of the material.'; }
  else if (pct >= 0.7) { grade = '✅ Good'; msg = 'Good job! A bit more practice will get you to the top.'; }
  else if (pct >= 0.6) { grade = '📚 Average'; msg = 'Decent effort. Review the topics you missed and retry.'; }
  else if (pct >= 0.4) { grade = '⚠️ Needs Work'; msg = 'Keep studying! Focus on the fundamentals of this subject.'; }
  else               { grade = '🔄 Try Again'; msg = 'Don\'t give up! Review the material and give it another shot.'; }

  document.getElementById('result-grade').textContent = grade;
  document.getElementById('result-msg').textContent = msg;

  // Animate ring
  setTimeout(() => {
    const ring = document.getElementById('result-ring');
    const offset = 502.65 * (1 - pct);
    ring.style.strokeDashoffset = offset;
    ring.style.stroke = pct >= 0.7 ? '#5ef0b0' : pct >= 0.4 ? '#f7c66a' : '#f76a6a';
  }, 200);
}

function retryQuiz() {
  startQuiz(state.subject.id);
}

// ═══════════════════════════════════════
//  TOAST
// ═══════════════════════════════════════
let toastTimer;
function showToast(msg, cls) {
  const t = document.getElementById('toast');
  t.className = `toast ${cls}`;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2000);
}

