// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==="MIT") {
    return `![GitHub Logo](https://img.shields.io/badge/license-MIT-brightgreen)`
  }
  else if (license==="GPL") {
    return `![GitHub Logo](https://img.shields.io/badge/license-GPL-blue)`
  } else if (license==="Apache") {
    return ` ![GitHub Logo](https://img.shields.io/badge/license-Apache-blue)`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license==="MIT") {
    return `https://choosealicense.com/licenses/mit/#`
  }
  else if (license==="GPL") {
    return `https://choosealicense.com/licenses/gpl-3.0/`
  } else if (license==="Apache") {
    return `https://choosealicense.com/licenses/apache-2.0/`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## License section

${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}



  ## Table of contents 
  * [ Decsritpion ](#description)
  * [ Screenshots-Demo ](#Screenshots)
  * [ Project Objective ](#Project-Objective)
  * [ User Story ](#User-Story)
  * [ Questions ](#Questions)
  * [ Contributions ](#Contributions)
  * [ Installation ](#Installation)
  * [ Usage ](#Usage)
  
  * [ Tests ](#Tests)
  
  * [ License ](#License)
  #



## description 
${data.description}


`;
}

module.exports = generateMarkdown;



