const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript', 'Languages'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 2.5,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL/Redshift',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Azure App Services',
    competency: 4,
    category: ['Azure', 'Cloud'],
  },
  {
    title: 'Azure Functions',
    competency: 4,
    category: ['Azure', 'Cloud'],
  },
  {
    title: 'Azure API Management',
    competency: 3,
    category: ['Azure', 'Cloud'],
  },
  {
    title: 'Service Bus',
    competency: 3,
    category: ['Azure', 'Cloud'],
  },
  {
    title: 'Container Apps',
    competency: 2.5,
    category: ['Azure', 'Cloud'],
  },
  {
    title: 'Virtual Machines',
    competency: 2,
    category: ['Azure', 'Cloud'],
  },
  {
    title: 'Key Vault',
    competency: 4,
    category: ['Azure', 'Cloud'],
  },
  {
    title: 'Storage Account',
    competency: 4,
    category: ['Azure', 'Cloud'],
  },
  {
    title: 'CosmosDB',
    competency: 3.5,
    category: ['Azure', 'Cloud'],
  },
  {
    title: 'Application Insights',
    competency: 3,
    category: ['Azure', 'Cloud'],
  },
  {
    title: 'MS SQLSERVER',
    competency: 4.5,
    category: ['MS SQLSERVER', 'Databases', 'SQL/No SQL'],
  },
  {
    title: 'Stored Procedure',
    competency: 4.5,
    category: ['MS SQLSERVER', 'Databases', 'SQL/No SQL'],
  },
  {
    title: 'TSQL Functions',
    competency: 4,
    category: ['MS SQLSERVER', 'Databases', 'SQL/No SQL'],
  },
  {
    title: 'Query Performance Tuning',
    competency: 4,
    category: ['MS SQLSERVER', 'Databases', 'SQL/No SQL'],
  },
  {
    title: 'Redis',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'RESTfulAPI',
    competency: 4,
    category: ['Web Development', 'C# .NET'],
  },
  {
    title: 'Entity Framework Core',
    competency: 3.5,
    category: ['C# .NET'],
  },
  {
    title: '.NET Core',
    competency: 4,
    category: ['C# .NET'],
  },
  {
    title: 'C#',
    competency: 4.6,
    category: ['Web Development', 'C# .NET', 'Languages'],
  },
  {
    title: 'LINQ',
    competency: 4,
    category: ['C# .NET'],
  },
  {
    title: '.NET 5+',
    competency: 4,
    category: ['C# .NET'],
  },
  {
    title: 'ASP.NET core MVC',
    competency: 4.25,
    category: ['Web Development', 'C# .NET'],
  },
  {
    title: 'WCF',
    competency: 3,
    category: ['C# .NET'],
  },
  {
    title: 'ASP.NET Web Forms',
    competency: 3,
    category: ['C# .NET'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools', 'Version Control'],
  },
  {
    title: 'TFS',
    competency: 3,
    category: ['Tools', 'Version Control'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools', 'Deployment'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Tools', 'Cloud'],
  },
  {
    title: 'Docker',
    competency: 2,
    category: ['Tools', 'Deployment'],
  },
  {
    title: 'Azure Devops',
    competency: 3.5,
    category: ['Tools', 'Deployment', 'Azure'],
  },
  {
    title: 'Azure CI/CD',
    competency: 3.5,
    category: ['Tools', 'Deployment', 'Azure'],
  },
  {
    title: 'Github Pages',
    competency: 3,
    category: ['Web Development', 'Tools', 'Deployment'],
  },
  {
    title: 'AWS Lambda',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Numba',
    competency: 2,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Ruby',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Data Engineering', 'ML Engineering'],
  },
  {
    title: 'Mypy',
    competency: 3,
    category: ['Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
