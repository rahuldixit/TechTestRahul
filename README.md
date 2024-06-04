# Project Description

This is a repository for end-to-end automation testing using [Playwright](https://playwright.dev/) and [Typescript](https://www.typescriptlang.org/docs/)

## Installation

Recommend installation in WSL2(Windows) / MacOSX / Linux

1. Install Node.js (recommend using [NVM](https://github.com/nvm-sh/nvm) or similar version manager)
2. Install Playwright test for VSCode from Extensions in VSCode
3. `git clone https://sgfleet@dev.azure.com/sgfleet/Test%20Automation/_git/Test%20Automation`
4. `npm i`
5. `npx playwright install`

## Project structure

src/

├─ pages/  
├─ steps/  
├─ tests/  
utils/  
assets/

### Naming Convention

Align with conventions used by the [Typescript project](https://github.com/microsoft/Typescript)

## Execute Tests from VSCode

There are two ways to run your tests from local:

a. From Playwright test runner

1.  Open the file containing the test you want to run (Ex: createIMSLead.spec.ts )
2.  Click 'Execute Playwright test' button available on the top of each test (to execute one test at a time) or on the top of test.describe (to run as a testsuite)
3.  This will open a new terminal and start execution automatically.

b. From command line

1.  Run all tests: `npx playwright test`
2.  To run tests by tag: `npx playwright test -g @tagname`
    (Example: `npx playwright test -g @regression`)
3.  Run individual tests: `npx playwright test <test file name>`

Refer [Running tests](https://playwright.dev/docs/running-tests) for additional options.

## Results

To view report after execution please execute `npx playwright show-report`
