/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Wipro',
    position: 'Senior Engineer',
    url: 'https://www.wipro.com/',
    startDate: '2022-02-07',
    summary: `Designed scalable Azure Functions for BP refineries, optimized messaging architectures with Azure and AWS, modernized legacy APIs, resolved critical UAT issues, 
    and developed high-performance applications using .NET, while ensuring quality through automated testing and collaborating with stakeholders to deliver impactful solutions.`,
    highlights: [
      'Designed and implemented Azure Functions for radiographic image processing in BP refineries, leveraging Azure DevOps to build and deploy CI/CD pipelines, ensuring efficient and scalable solutions',
      "Developed messaging queues and event-driven architectures using Azure Service Bus, Amazon SQS, and SNS, improving real-time communication for BP's systems",
      'Modernized over 50+ legacy SOAP-based web services by transforming them into RESTful APIs, integrated with React-based UIs for enhanced performance and user experience in trade capture applications.',
      'Collaborated with Royal London’s pension and insurance teams to resolve critical UAT issues in an N-Tier ASP.NET Core MVC application, leading to a successful deployment.',
      'Implemented automated testing frameworks using TDD and BDD methodologies, utilizing C# NUnit, and SpecFlow to validate business requirements and ensure quality for an insurance platform.',
      'Developed and maintained high-performance, scalable applications using C#, .NET Core, and .NET Framework, adhering to modern design patterns to ensure clean, maintainable, and efficient codebases.',
      'Actively collaborated with business stakeholders and end-users to gather requirements, provide technical guidance, and deliver software solutions that met business objectives, contributing to project success and client satisfaction.',
    ],
  },
  {
    name: 'Cognizant',
    position: 'Associate Software Developer',
    url: 'https://www.cognizant.com/uk/en',
    startDate: '2018-07-09',
    endDate: '2020-08-15',
    summary: `Built a Web API service layer for seamless UI integration, optimized T-SQL performance, resolved complex software issues, integrated CHUBB insurance products, 
    and contributed to legacy system maintenance with WinForms and ASP.NET Web Forms.`,
    highlights: [
      'Built a service layer using Web API which acts as common integration interface to provide the data to UI.',
      'Contributed to performance tuning by identifying bottlenecks in query plan, performed dynamic data retrievals & optimizations for T-SQL stored procedures, functions.',
      'Successfully debugged and resolved complex software issues, optimized application performance and fixed the production and awaiting pre-production application issues.',
      'Integrated the new stream of CHUBB’s insurance products to the Tracker application using dedicated data flow pipeline. Prepared technical specification and test cases for those integrated products with product specific unique codes.',
      'Gained experience working with WinForms and ASP.NET Web Forms, contributing to legacy system maintenance and upgrades.',
    ],
  },
  {
    name: 'HTC Global Services',
    position: 'Programmer Analyst',
    url: 'https://www.htcinc.com/',
    startDate: '2014-07-30',
    endDate: '2018-07-03',
    summary: `Developed WCF services for Hastings Mutual Insurance, optimized service layer with SQL procedures, 
    modernized legacy ASP.NET Webform into .NET MVC 5 for investment solutions, and contributed to comprehensive technical documentation for end-users and developers.`,
    highlights: [
      'Created 20+ integration middle layer WCF services for Hastings Mutual insurance provider which interact with an application such as billing centre, Policy centre, Super Web, Dividend, Series 2, PEX.',
      'Developed SQL server procedures and functions responsible for the service layer calls and responses.',
      'Created technical documents and application documents for the knowledge articles.',
      'Transformed the legacy ASP.NET Webform IPS Advisor portal into .Net MVC 5 web application to providE an end-to-end solutions to investment execution and portfolio administration, worked on maintenance and support for the same',
      'Documented software design, code, and test procedures, contributing to user manuals and technical documentation to support end-users and developers.',
    ],
  },
];

export default work;
