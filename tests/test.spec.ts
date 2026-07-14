import { test, expect } from '@playwright/test'
import { TestConfig } from '../test.config'
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
let config: TestConfig;
let accpage: MyAccountPage;
let homepage: HomePage;
let loginPage: LoginPage;
test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl); //navigation to the app url
    homepage = new HomePage(page);
    loginPage = new LoginPage(page);
    accpage = new MyAccountPage(page);
})
