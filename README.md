# TestAutomationTestCafe
### Project Information
[Store](http://opencart.abstracta.us/) application test has been automated and validated with TestCafe 
### Tools & Technologies:
* **Programming Language:** JavaScript
* **Automation Frameworks:** TestCafe
* **Design Pattern:** Page Object Model

### Core Features:
* App Automation
* App Validation
* Supports for multiple reports (JSON,xUnit,nUnit,List,HTML etc.)
* Test script written for cross browser testing, concurrent test execution and headless browsers     


### Install:<br>
Make sure you have node js installed in your machine then type <code>npm install</code> in terminal. It will automatically install all required node packages for you. 

### Run:<br>
To execute TestCafe tests type the following command in terminal.See the <code>packages.json</code> file for details of every command.
 
*Chrome:*
<code>npm run test:chrome</code><br>
*Chrome with debug mode on fail:*
<code>npm run test:chrome:debug</code><br>
*Chrome Concurrent:*
<code>npm run test:chrome:5</code><br>
*Chrome with JSON Reporter:*
<code>npm run test:chrome:json</code><br>
*Chrome with xUnit Reporter:*
<code>npm run test:chrome:xunit</code><br>
*Chrome with nUnit Reporter:*
<code>npm run test:chrome:nunit</code><br>
*Chrome with List Reporter:*
<code>npm run test:chrome:list</code><br>
*Chrome with Minimal Reporter:*
<code>npm run test:chrome:minimal</code><br>
*Chrome with HTML Reporter:*
<code>npm run test:chrome:html</code><br>
*Chrome Headless:*
<code>npm run test:chrome:headless</code><br>
*Chrome Headless with --test-meta filter:*
<code>npm run test:chrome:headless:meta</code><br>
*Chrome Headless Concurrent:*
<code>npm run test:chrome:headless:5</code><br>
*Chrome Mobile:*
<code>npm run test:chrome:mobile</code><br>
*Firefox:*
<code>npm run test:firefox</code><br>
*Firefox Headless:*
<code>npm run test:firefox:headless</code><br>
*Safari:*
<code>npm run test:safari</code><br>
*Test in Multiple Browsers:*
<code>npm run test:multiple</code><br>