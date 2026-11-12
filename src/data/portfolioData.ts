export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  role: string;
  metrics?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  period: string;
  type: 'Full-time' | 'Internship' | 'Training';
  location?: string;
  summary: string;
  responsibilities: string[];
  skillsGained: string[];
  badgeColor?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
  status: 'Completed' | 'In Progress';
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
  focus: string;
  credentialBadge: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    description: string;
    iconName: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Debtosh Mohanty",
  initials: "DM",
  title: "Computer Science Graduate | IT Support Engineer & Data Annotation Specialist",
  tagline: "Bridging IT Infrastructure, Data Quality, and Analytical Computing",
  location: "Jajpur Road, Jajpur, Odisha, India",
  email: "debtoshmohanty7@gmail.com",
  phone: "+91 8895486669",
  summary:
    "Computer Science graduate with hands-on experience in IT support, computer hardware, networking, Python and basic data analysis. Completed training in Data Science and Cloud Computing. Specialized interest in Data Annotation, Data Labeling, Data Quality and entry-level Data Science roles, with strong attention to detail, analytical thinking, documentation and willingness to learn AI/ML workflows.",
  aboutDetailed: [
    "I am a passionate Computer Science graduate with a strong foundation in both system infrastructure and data-driven problem solving. With hands-on experience as an IT Administrator, Lab Demonstrator, and Data Annotation Engineer at Jetking Institute, I have developed a disciplined approach to hardware maintenance, networking configurations, and precise data handling.",
    "My academic journey at Gandhi Engineering College and specialized technical programs at SDI Bhubaneswar and Jetking have equipped me with practical skills in Python programming, structured dataset manipulation, Cisco Packet Tracer network simulation, and cloud computing fundamentals.",
    "I am particularly driven by Data Annotation, Data Labeling, and Data Quality workflows that power modern AI/ML systems. My core philosophy centers on accuracy, structured documentation, proactive troubleshooting, and continuous learning."
  ],
  strengths: [
    {
      title: "Strong Attention to Detail & Data Accuracy",
      description: "Meticulous in tagging, categorizing, and validating datasets to ensure high data consistency and zero anomalies."
    },
    {
      title: "Analytical & Problem-Solving Mindset",
      description: "Proven ability to diagnose hardware, OS, and network bottlenecks as well as analyze structured datasets methodically."
    },
    {
      title: "Self-Motivated & Eager to Learn",
      description: "Quickly adapt to emerging AI/ML annotation pipelines, cloud architectures, and modern data engineering tools."
    },
    {
      title: "Collaborative & Independent Worker",
      description: "Equally effective whether guiding trainees independently or collaborating within cross-functional technical teams."
    },
    {
      title: "Effective Communication & Interpersonal Skills",
      description: "Experienced in translating complex technical concepts to students, laboratory users, and non-technical stakeholders."
    }
  ],
  stats: [
    { label: "Hands-on Experience", value: "1+ Year" },
    { label: "Technical Domains", value: "IT, Data & Cloud" },
    { label: "Degree", value: "B.Tech CSE" },
    { label: "Location", value: "Odisha, India" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Data Annotation & AI/ML Workflows",
    description: "Concepts and methodologies critical for training and fine-tuning machine learning models.",
    skills: [
      {
        name: "Text & Image Data Labeling",
        description: "Concepts of text tagging, entity labeling, image categorization, and spatial bounding.",
        iconName: "Tag"
      },
      {
        name: "Categorization & Tagging",
        description: "Organizing unstructured content into structured, well-classified schemas.",
        iconName: "FolderTree"
      },
      {
        name: "Data Quality & Consistency",
        description: "Rigorous quality audits, label verification, and maintaining high annotation standards.",
        iconName: "CheckCircle2"
      },
      {
        name: "AI/ML Workflow Readiness",
        description: "Understanding data pipelines, dataset curation, and training data requirements.",
        iconName: "Cpu"
      }
    ]
  },
  {
    title: "Data Handling & Analysis",
    description: "Cleaning, transforming, and deriving preliminary statistical insights from structured data.",
    skills: [
      {
        name: "Data Cleaning & Preprocessing",
        description: "Treating missing fields, removing duplicate records, and standardizing data formats.",
        iconName: "Sparkles"
      },
      {
        name: "Organizing & Structuring Datasets",
        description: "Structuring raw inputs into tabular formats ready for downstream analytical processing.",
        iconName: "Database"
      },
      {
        name: "Filtering, Sorting & Validation",
        description: "Applying logical filters, sorting hierarchies, and ensuring schema integrity.",
        iconName: "Filter"
      },
      {
        name: "Exploratory Data Analysis (EDA)",
        description: "Understanding distribution metrics, summarizing patterns, and exploratory review.",
        iconName: "BarChart3"
      },
      {
        name: "Data Science Fundamentals",
        description: "Knowledge of datasets, statistical variance, and introductory machine learning concepts.",
        iconName: "Binary"
      }
    ]
  },
  {
    title: "Programming & Analytical Tools",
    description: "Computational tools used for data manipulation and spreadsheet intelligence.",
    skills: [
      {
        name: "Python Programming",
        description: "Core syntax, data manipulation fundamentals, conditional logic, and algorithmic problem-solving.",
        iconName: "Code2"
      },
      {
        name: "Microsoft Excel",
        description: "Data entry, formulas, sorting, filtering, lookup functions, and spreadsheet data organization.",
        iconName: "FileSpreadsheet"
      }
    ]
  },
  {
    title: "IT Support & Systems Maintenance",
    description: "Operating systems, hardware maintenance, diagnostics, and technical administration.",
    skills: [
      {
        name: "Windows OS Administration",
        description: "System installation, configuration, patch management, and user privilege setup.",
        iconName: "Monitor"
      },
      {
        name: "Linux Fundamentals",
        description: "Basic command-line navigation, file permissions, and environment setup.",
        iconName: "Terminal"
      },
      {
        name: "Hardware Diagnostics & Assembly",
        description: "Peripherals, system components, memory/storage diagnostics, and hardware replacements.",
        iconName: "Wrench"
      },
      {
        name: "Preventive Maintenance",
        description: "Scheduled health checks, driver updates, software installation, and reliability audits.",
        iconName: "ShieldCheck"
      }
    ]
  },
  {
    title: "Networking & Cloud Computing",
    description: "Network simulation, connectivity protocols, and modern cloud fundamentals.",
    skills: [
      {
        name: "Cisco Packet Tracer",
        description: "Simulating real-life network topologies, switch/router configurations, and diagnostics.",
        iconName: "Network"
      },
      {
        name: "LAN Connectivity & Setup",
        description: "Local area networking, IP addressing, cabling, and connectivity troubleshooting.",
        iconName: "Wifi"
      },
      {
        name: "Cloud Computing Fundamentals",
        description: "Basics to intermediate understanding of cloud infrastructure, virtualization, and services.",
        iconName: "Cloud"
      }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "jetking-it-support",
    role: "IT Administrator / Lab Demonstrator cum IT Support Engineer",
    organization: "JETKING",
    duration: "1 Year",
    period: "1 Year Tenure",
    type: "Full-time",
    location: "Jetking Institute",
    summary:
      "Provided end-to-end technical support across computer hardware and networking labs, ensured high infrastructure uptime, and mentored student batches during laboratory sessions.",
    responsibilities: [
      "Provided technical guidance and hands-on assistance to students during computer hardware and networking laboratory sessions.",
      "Installed, deployed, and configured Windows operating systems, peripheral drivers, and academic software suites across lab systems.",
      "Maintained complete computer lab infrastructure, workstations, peripherals, and local area network (LAN) connectivity.",
      "Diagnosed and resolved hardware faults, software compatibility problems, and network connectivity bottlenecks.",
      "Performed scheduled preventive maintenance, system updates, security patches, and routine system health checks.",
      "Maintained accurate technical documentation and supported lab users with application and system configuration issues."
    ],
    skillsGained: [
      "Hardware Troubleshooting",
      "Windows OS",
      "LAN Connectivity",
      "System Maintenance",
      "Lab Guidance",
      "Documentation"
    ],
    badgeColor: "blue"
  },
  {
    id: "jetking-data-annotation",
    role: "Data Annotation Engineer",
    organization: "JETKING",
    duration: "1 Year",
    period: "Concurrent Role",
    type: "Full-time",
    location: "Jetking Institute",
    summary:
      "Worked as a Data Annotation Engineer for one year, handling dataset categorization, labeling, and quality verification to support machine learning and data workflows.",
    responsibilities: [
      "Executed accurate text and image data labeling following specified annotation rules and formatting guidelines.",
      "Categorized and tagged unstructured datasets to produce reliable training and validation corpora.",
      "Conducted thorough data quality audits, checking consistency across annotated records and correcting discrepancies.",
      "Organized structured datasets and maintained meticulous logs of labeling metrics and validation results."
    ],
    skillsGained: [
      "Data Annotation",
      "Data Labeling",
      "Quality Checking",
      "Categorization",
      "Consistency Audits"
    ],
    badgeColor: "indigo"
  },
  {
    id: "internshala-internship",
    role: "Professional Internship Trainee",
    organization: "Internshala",
    duration: "Internship Program",
    period: "Completed",
    type: "Internship",
    summary:
      "Completed professional internship through Internshala, gaining industry-relevant exposure, professional discipline, and practical technical skill development.",
    responsibilities: [
      "Completed structured coursework and practical assignments under industry mentorship.",
      "Strengthened time management, problem-solving, and professional communication skills.",
      "Collaborated on practical tasks adhering to defined delivery standards."
    ],
    skillsGained: [
      "Industry Practices",
      "Professional Communication",
      "Problem Solving",
      "Self-Management"
    ],
    badgeColor: "sky"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "networking-project",
    title: "Real-Life Enterprise Networking Architecture",
    category: "Networking & Infrastructure",
    tagline: "End-to-end network topology design and simulation in Cisco Packet Tracer",
    description:
      "Designed and implemented realistic enterprise networking scenarios using Cisco Packet Tracer. Configured routers, switches, subnets, and host devices to simulate enterprise-grade connectivity, secure packet routing, and dynamic IP management.",
    technologies: [
      "Cisco Packet Tracer",
      "Subnetting & VLSM",
      "Switch & Router Configuration",
      "LAN/WAN Protocols",
      "Network Troubleshooting"
    ],
    keyFeatures: [
      "Designed hierarchical multi-department network topology with distinct subnets and VLANs.",
      "Configured routing protocols, default gateways, and dynamic DHCP services for connected hosts.",
      "Simulated real-time packet flow diagnostics and resolved routing loop / connectivity failures using ping and traceroute.",
      "Established secure switch port security and switch management configurations."
    ],
    role: "Network Designer & Simulator",
    metrics: "Simulated complete enterprise network with multi-department subnets"
  },
  {
    id: "data-analysis-project",
    title: "Structured Dataset Analysis & Quality Processing",
    category: "Data Science & Analytics",
    tagline: "Python & spreadsheet-driven data cleaning, organization, and exploratory analysis",
    description:
      "Worked with structured datasets using fundamental Python and data-analysis concepts. Implemented automated data cleaning routines, filtering, sorting, anomaly inspection, and summary statistics to convert raw datasets into structured, analytics-ready formats.",
    technologies: [
      "Python",
      "Data Cleaning",
      "Dataset Organization",
      "Microsoft Excel",
      "Exploratory Data Analysis"
    ],
    keyFeatures: [
      "Implemented data preprocessing routines to identify and handle missing values, duplicates, and format inconsistencies.",
      "Structured and categorized complex records into standardized tabular schemas for easy querying.",
      "Performed exploratory data filtering and sorting to extract key summary statistical insights.",
      "Validated data integrity and verified consistency to support reliable downstream reporting."
    ],
    role: "Data Analyst & Preprocessing Engineer",
    metrics: "Cleaned, standardized, and analyzed structured datasets"
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "btech-cse",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Gandhi Engineering College",
    location: "Bhubaneswar, Odisha",
    period: "2020 – 2025",
    details: "Comprehensive undergraduate engineering program covering computer science fundamentals, data structures, algorithms, operating systems, databases, and computer networks.",
    status: "Completed"
  },
  {
    id: "12th-science",
    degree: "Higher Secondary (12th / Science)",
    institution: "Vyasanagar Autonomous College",
    location: "Jajpur Road, Odisha",
    period: "2018 – 2020",
    details: "Higher secondary education with a focused curriculum in science and mathematics.",
    status: "Completed"
  },
  {
    id: "10th-matric",
    degree: "Secondary School Examination (10th)",
    institution: "Saraswati Sishu Vidya Mandir",
    location: "Madhusudan Nagar, Jajpur Road, Odisha",
    period: "2018",
    details: "Foundational secondary education with a strong emphasis on academic discipline and core subjects.",
    status: "Completed"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-data-science",
    title: "Data Science Course",
    issuer: "SDI Bhubaneswar",
    period: "2026",
    focus: "Data analysis methodologies, Python for data manipulation, preprocessing, statistics, and machine learning fundamentals.",
    credentialBadge: "SDI Certified"
  },
  {
    id: "cert-cloud-computing",
    title: "Cloud Computing Course",
    issuer: "Jetking Institute",
    period: "2025 – 2026",
    focus: "Cloud architecture concepts, virtualization fundamentals, cloud deployment models, and intermediate cloud administration.",
    credentialBadge: "Jetking Certified"
  },
  {
    id: "cert-jetking-training",
    title: "1-Year Hands-on Technical Training",
    issuer: "Jetking Institute",
    period: "Completed",
    focus: "Intensive practical training in computer hardware, OS deployment, network administration, troubleshooting, and enterprise IT support.",
    credentialBadge: "Hands-on Technical"
  },
  {
    id: "cert-internshala",
    title: "Internship Certificate",
    issuer: "Internshala",
    period: "Completed",
    focus: "Practical industry experience, professional task execution, and technical discipline.",
    credentialBadge: "Internshala Verified"
  }
];
