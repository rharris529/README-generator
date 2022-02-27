// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![badge](https://img.shields.io/badge/License-MIT-green)](https://shields.io)`
  } 
  else if (license === "Apache 2.0") {
    return `[![badge](https://img.shields.io/badge/License-Apache2.0-green)](https://shields.io)`
  }
  else if (license === "GPL 3.0") {
    return `[![badge](https://img.shields.io/badge/License-GPL3.0-green)](https://shields.io)`
  }
  else if (license === "BSD 3") {
    return `[![badge](https://img.shields.io/badge/License-BSD3-green)](https://shields.io)`
  } else {
    return "";
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `Info about your license can be found [here](https://opensource.org/licenses/MIT)`
  } 
  else if (license === "Apache 2.0") {
    return `Info about your license can be found [here](https://www.apache.org/licenses/LICENSE-2.0)`
  }
  else if (license === "GPL 3.0") {
    return `Info about your license can be found [here](https://www.gnu.org/licenses/gpl-3.0.en.html)`
  }
  else if (license === "BSD 3") {
    return `Info about your license can be found [here](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    return "";
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license = "") {
    return "";
  } else {
    return `## License`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}

${renderLicenseBadge(license)} 
  
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
${data.languages.join(', ')}

## Installation
${data.install}

## Usage
${data.userUsage}

${renderLicenseSection(license)}
${renderLicenseLink(license)}

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
