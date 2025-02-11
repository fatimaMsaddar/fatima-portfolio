
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation


const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};


const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "MSADDAR Fatima Ezzahra",
  title: "Hi all, I'm Fatima Ezzahra",
  subTitle: emoji(
    "QA Automation Expert , Designing and optimizing test automation for web, mobile, and APIs. Specialized in Selenium, Cypress, Playwright, and CI/CD integration.  Passionate about AI-driven testing to accelerate release cycles. 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1J5T8She-noruqQyw96jO0Mp7Tohow96Y/view?usp=sharing",
  displayGreeting: true 
};


const socialMediaLinks = {
  github: "https://github.com/fatimaMsaddar",
  linkedin: "https://www.linkedin.com/in/msaddar-fatima-ezzahra-53740b11b/",
  gmail: "msaddarfatimaezahra@gmail.com",
  display: true // Set true to display this section, defaults to false
};


const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE QA ENGINEER & AUTOMATION SPECIALIST WHO ENHANCES QUALITY WITH EVERY TEST",
  skills: [
    emoji(
      "⚡ Automated testing using WebdriverIO and other frameworks for end-to-end testing"
    ),
    emoji("⚡ Creating and executing test plans, cases, and scripts to ensure bug-free releases"),
    emoji("⚡ Managing CI/CD pipelines and integrating testing workflows with Jenkins and Git"),
    emoji("⚡ Bug reporting, tracking, and managing critical issues using Jira"),
    emoji("⚡ Collaboration with cross-functional teams to ensure seamless software delivery"),
    emoji("⚡ Hands-on experience with tools like Sourcetree, AWS, and various testing platforms")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "WebdriverIO",
      fontAwesomeClassname: "fab fa-code"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Sourcetree",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fab fa-kubernetes"
    },
    {
      skillName: "Test Automation",
      fontAwesomeClassname: "fas fa-bug"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fab fa-postman"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Institut Supérieur de Technologie Appliquée",
      logo: require("./assets/images/enset.png"),
      subHeader: "Diploma in IT Systems and Software Engineering",
      duration: "September 2012 - June 2015",
      desc: "Emphasized hands-on experience in software testing, application performance analysis, and debugging.",
      descBullets: [
        "Completed coursework in Database Management, Programming Fundamentals, and Web Development.",
        "Gained practical experience through internships and real-world testing projects."
      ]
    },
    {
      schoolName: "Université Mohammed V",
      logo: require("./assets/images/fms.png"),
      subHeader: "Bachelor's Degree in Computer Science",
      duration: "September 2015 - June 2019",
      desc: "Focused on software development, QA processes, and automation tools. Gained strong foundational knowledge in programming and testing methodologies.",
      descBullets: [
        "Studied courses in Software Engineering, QA methodologies, and Automation Testing.",
        "Completed a capstone project involving the integration of automated testing in a web application.",
        "Developed an understanding of continuous integration, version control, and bug-tracking systems."
      ]    }
  ]
};

// Your top 3 proficient stacks/tech experience
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Test Automation & Manual testing ",
      progressPercentage: "100%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Leadership & Mentoring",
      progressPercentage: "70%" // Insert relative proficiency in percentage
    },
    {
      Stack: "CI/CD & DevOps",
      progressPercentage: "90%"
    },
    {
      Stack: "Bug Tracking & Issue Management",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Technical Automation Expert",
      company: "Contentsquare (CsxHotjarxHeap)",
      companylogo: require("./assets/images/contentsquareLogo.png"),
      date: "May 2022 – Present",
      desc: "Leading automation testing efforts for web and mobile applications across multiple platforms. Developed scalable frameworks and integrated automated tests into CI/CD pipelines, improving test coverage and efficiency.",
      descBullets: [
        "Led QA teams, achieving 95% on-time delivery through optimized manual and automated testing.",
        "Integrated automated tests into GitHub Actions, improving CI/CD efficiency by 40%.",
        "Developed a scalable automation framework using WDIO and Cypress, increasing test coverage by 60%.",
        "Spearheaded AI-powered test automation with GitHub Copilot, automating 85% of regression tests.",
        "Collaborated with developers to implement shift-left testing, ensuring early bug detection.",
        "Developed and maintained automated test frameworks for web, mobile, and APIs.",
        "Automated API testing using Postman and Rest Assured, improving backend test reliability.",
        "Enhanced Jenkins pipelines for continuous testing, reducing release time.",
        "Increased defect tracking efficiency via Jira, reducing critical bugs by 40%.",
        "Developed mobile automation testing using Appium and Python, improving mobile test coverage."
      ]
    },
    {
      role: "Senior QA Automation Engineer (Hybrid – Consultant via Kalisoft)",
      company: "ALSTOM",
      companylogo: require("./assets/images/alstomLogo.png"),
      date: "June 2020 – May 2022",
      desc: "Worked as a Senior QA Automation Engineer, developing automated tests for industrial systems and enhancing test processes for continuous integration and delivery.",
      descBullets: [
        "Developed cross-functional test automation frameworks with Selenium and Jenkins.",
        "Enhanced API testing automation and integrated it with Jenkins CI/CD pipelines.",
        "Worked closely with cross-functional teams to ensure high-quality software delivery."
      ]
    },
    {
      role: "QA Automation Engineer",
      company: "Air France",
      companylogo: require("./assets/images/airfranceLogo.png"),
      date: "October 2017 – July 2019",
      desc: "Led automation of API and regression tests for flight management systems, optimizing testing processes and improving efficiency for continuous delivery.",
      descBullets: [
        "Led API and regression test automation for flight management systems using Robot Framework & Python.",
        "Enhanced mobile test automation with Appium and Python, increasing test efficiency by 30%.",
        "Integrated tests into Agile workflows, reducing release time by 20%.",
        "Integrated test automation into CI/CD pipelines using Jenkins.",
        "Conducted performance and load testing using JMeter to identify bottlenecks.",
        "Designed, documented, and executed test cases based on functional requirements.",
        "Identified, reported, and tracked defects using Jira, TestRail.",
        "Performed UAT (User Acceptance Testing) with stakeholders to validate product readiness.",
        "Executed accessibility and usability testing to ensure compliance with WCAG standards.",
        "Decreased manual testing effort by 40% by optimizing test case execution and documentation."
      ]
    },
    {
      role: "Junior QA Engineer",
      company: "Accolade",
      companylogo: require("./assets/images/accoladeLogo.png"),
      date: "August 2019 – May 2020",
      desc: "Worked as a Junior QA Engineer, supporting automation testing and contributing to the overall testing processes.",
      descBullets: [
        "Assisted in test automation for mobile and web applications.",
        "Helped optimize test execution and documentation, reducing manual efforts.",
        "Collaborated with teams to ensure efficient bug tracking and resolution."
      ]
    }
  ]
};




const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Achievements And Big Projects🏆",
  subtitle: "🔒🔒 Internal Projects 🔒🔒",
  projects: [
    {
      projectName: "Quality Dashboard App",
      projectDesc: "Developed a comprehensive Quality Dashboard application to track and visualize test metrics for continuous integration and deployment. The app provides real-time insights into test coverage, pass/fail rates, and performance metrics, improving decision-making for development teams.",
    },
    {
      projectName: "Visual Framework",
      projectDesc: "Contributed to the creation of a Visual Framework for improving UI consistency and ensuring seamless user experience across various platforms. The framework integrates with multiple web and mobile applications, helping design teams quickly prototype and implement UI elements.",
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@qaexpert/how-to-create-efficient-test-automation-strategies-5d9f8b20fa23",
      title: "How to Create Efficient Test Automation Strategies",
      description:
      "Learn the best practices to create robust and efficient test automation strategies that help streamline the testing process and improve software quality."
    },
    {
      url: "https://medium.com/@qaexpert/importance-of-shift-left-testing-for-better-quality-3b9e2870c55f",
      title: "Importance of Shift-Left Testing for Better Quality",
      description:
      "Discover the benefits of shift-left testing, which emphasizes detecting and addressing defects earlier in the software development lifecycle."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  podcast: [
  ],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "msaddarfatimaezahra@gmail.com"
};



const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  blogSection,
  podcastSection,
  contactInfo,
  isHireable,
  resumeSection
};
