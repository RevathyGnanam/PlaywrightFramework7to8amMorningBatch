import { test, expect } from '@playwright/test'
import { TestConfig } from '../test.config'
import { HomePage } from '../pages/HomePage';
import { DataProvider } from '../utils/dataProvider'
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { log } from 'node:console';


//load JSON test data loginData.json

// const jsonPath = "data/logindata.json";
// const jsonTestData = DataProvider.getTestDataFromJson(jsonPath);

// for (const data of jsonTestData) {

//     test(`Login with test data: ${data.testName}`, async ({ page }) => {

//         const config = new TestConfig();
//         await page.goto(config.appUrl);

//         const homepage = new HomePage(page);
//         await homepage.clickMyAccount();
//         await homepage.clickLogin();

//         const loginPage = new LoginPage(page);
//         await loginPage.login(data.email, data.password);
//         const accpage = new MyAccountPage(page);
//         const isloggin = await accpage.isMyAccountPageExists();
//         expect(isloggin).toBeTruthy();

//     })

// }

// //using csv
const csvpath = "data/logindata.csv";
const csvTestData =DataProvider.getTestDataFromCsv(csvpath)

for (const data of csvTestData) {

    test(`Login with test data ${data.testName} @regression`, async ({ page }) => {

        const config = new TestConfig();
        await page.goto(config.appUrl);

        const homepage = new HomePage(page);
        await homepage.clickMyAccount();
        await homepage.clickLogin();

        const loginPage = new LoginPage(page);
        await loginPage.login(data.email, data.password);
        const accpage = new MyAccountPage(page);
        const isloggin = await accpage.isMyAccountPageExists();
        expect(isloggin).toBeTruthy();

    })

}