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

├─apis > tests  
├─ pages/  
│ ├─ Miles/  
│ ├─ Quomo/  
│ ├─ FAM/  
│ ├─ FI/  
├─ steps/  
│ ├─ Miles/  
│ ├─ Quomo/  
│ ├─ FAM/  
│ ├─ FI/  
├─ tests/  
│ ├─ Miles/  
│ ├─ Quomo/  
│ ├─ FAM/  
│ ├─ FI/

enums/  
utils/  
assets/

Test scenarios that span across all the applications will be added to a new folder named `e2e` under tests in src.

### Naming Convention

Align with conventions used by the [Typescript project](https://github.com/microsoft/Typescript)

Please check [Playwright & Typescript coding standard and practices](https://sgwiki.sgfleet.com/display/SDY/Playwright+and+TypeScript+Automation+Testing+-+Coding+Standards+and+Practices) for more details.

### Writing Tests

All applications should have their tests in the folder named after them under `tests`

### Tagging Tests

Tag your test by application name, test-type and JIRA ID in the testname:

valid application names are @ims @miles @fam etc.

valid test-types are @smoke @regression @extended-regression

valid JIRA IDS for example @EM-12 @EM-123 from Environment Management dashboard.

You can also use application specific tags for example, @milessmoke @quomoregression etc.

## Linting and Formatting

Some default linters and formatters has been added to keep the code clean:
- `npm run lint` - Review and report on linting errors.
- `npm run lint:fix` - Attempt to auto-fix linting errors.
- `npm run format` - Review and report on source code formatting issues.
- `npm run format:fix` - Attempt to auto-fix formatting issues.

## Setup test environment in your local

Please check [How to setup the framework in your local?](https://sgwiki.sgfleet.com/display/SDY/Setup+test+automation+framework+in+your+local) 

Ask Prachurya/Hong for .env.keys

1. Add the .env.keys file to the root, the keyfile looks like this:
   DOTENV_KEY_DEV64="dotenv://:key_xxxxxxxx@dotenv.local/vault/.env.vault?environment=dev64"
2. To ensure the key file is added correctly, run the below command:

   `npx dotenv-vault@latest local keys`

   This command should yield all the keys.
3. Decrypt the environment variable(s):
   Example: To decrypt .env.sit file run the command below:

   `npx dotenv-vault@latest local decrypt <value from .env.keys for DOTENV_KEY_SIT>`
   i.e
   `npx dotenv-vault@latest local decrypt dotenv://:key_xxxx@dotenv.local/vault/.env.vault?environment=sit`

   Note: xxxx here refers to an actual value in key file, please replace them correctly.

4. Create an empty .env.sit file in your local and copy the values from the terminal, and save it into the file.
5. Repeat for all available environments.

## Execute Tests from VSCode

There are two ways to run your tests from local:

a. From Playwright test runner

1.  Open the file containing the test you want to run (Ex: createIMSLead.spec.ts )
2.  Click 'Execute Playwright test' button available on the top of each test (to execute one test at a time) or on the top of test.describe (to run as a testsuite)
3.  This will open a new terminal and start execution automatically.

b. From command line

1.  Run all tests: `npx playwright test`
2.  To run tests by tag: `npx playwright test -g @tagname`

    (Example: `npx playwright test -g @smoke`)

Refer [Running tests](https://playwright.dev/docs/running-tests) for additional options.

## Results

To view report after execution please execute `npx playwright show-report`
