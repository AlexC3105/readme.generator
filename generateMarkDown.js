function renderLincenseBadge(license) {
    if (license === "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    } else if (license === "BSD 3") {
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
    } else if (license === "GPL 3.0") {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    } else if (license === "APACHE 2.0") {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    } else if (license === "NONE") {
        return `"NONE"`;
    }
}

function renderLicenseLink(license) {
    if (license === "MIT") {
        return `(https://opensource.org/licenses/MIT)`;
    } else if (license === "BSD 3") {
        return `(https://opensource.org/licenses/BSD-3-Clause)`;
    } else if (license === "GPL 3.0") {
        return `(https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license === "APACHE 2.0") {
        return `(https://opensource.org/licenses/Apache-2.0)`;
    } else if (license === "NONE") {
        return `"NONE"`;
    }
}

function renderLicenseSection(license) {
    if (license === "MIT") {
        return `## License
        This project is licensed under the MIT license.`;
    } else if (license === "BSD 3") {
        return `## License
        This project is licensed under the BSD license.`;
    } else if (license === "GPL 3.0") {
        return `## License
        This project is licensed under the GPL 3.0 license.`;
    } else if (license === "APACHE 2.0") {
        return `## License
        This project is licensed under the APACHE 2.0 license.`;
    } else if (license === "NONE") {
        return `"NONE"`;
    }
}

function generateMarkDown(data) {
    return `# ${data.title}
    ${renderLincenseBadge(data.license)}
    
    ## Description
    ${data.description}
    
    ## Table of Contents
    
    * [License](#license)
    
    * [Installation](#installation)
    
    * [Usage](#usage)
    
    * [Tests](#tests)
    
    * [Questions](#questions)
    
    * [Contributions](#contributions)
    
    ## Installation
    
    To install necessary dependencies run the the following in the command line:
    \`\`\`
    ${data.installation}
    \`\`\`
    
    ## Usage
    
    ${data.usage}
    
    ${renderLicenseSection(data.license)}
    
    ## Tests
    
    To run tests run the following in the command line:
    \`\`\`
    ${data.tests}
    \`\`\`
    
    ## Questions
    
    If you have any question regarding the repo, you can contact me at ${data.email}. You can also see other projects at https://github.com/${data.github}
    
    ## Contributions
    
    ${data.contributions}`;
}

module.exports = generateMarkDown;