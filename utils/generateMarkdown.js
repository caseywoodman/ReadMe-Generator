// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "NONE") {
    return `<img src="https://img.shields.io/badge/license-${license}-blue.svg">`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "NONE") {
    return `[go to license](#license)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "NONE") {
    return `
  
  ## License
    this project is licensed under ${license}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
   
  ## DESCRIPTION
    ${data.description}
  ## TABLE OF CONTENTS
  ## [Description](#description)
  ## [Installation](#installation)
  ## [Usage](#usage)
  ## ${renderLicenseLink(data.license)}
  ## [Contributing](#contributing)
  ## [Tests](#tests)
  ## [Questions](#questions)

  ## INSTALLATION
    ${data.installation}

  ## USAGE
    ${data.usage}

  ${renderLicenseSection(data.license)}


  ## CONTRIBUTING
    ${data.contributing}

  ## TESTS
    ${data.tests}

  ## QUESTIONS
  [${data.github}](${data.github_link})
  
  or contact me via email at ${data.email}.
`;
}

module.exports = generateMarkdown;
