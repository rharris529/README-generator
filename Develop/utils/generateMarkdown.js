// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

### Table of Content
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Built With](#built-with)
- [Installiation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributin](#contributing)
- [Tests](#tests)
- [Demo](#demo)
- [Questions](#questions)
- [Project](#project)

## Built With
${data.languages}

## Installation
${data.install}

## Usage
${data.userUsage}

## License
${data.license}

## Contributing
${data.contribute}

## Tests
${data.test}

## Demo
Found [here](./src/)

## Questions
Check out my GitHub [here](${data.github}).
<br />
If you have questions, feel free to email me [here](${data.email}).

## Project
Can be found [here](${data.link}).
`;
}

module.exports = generateMarkdown;
