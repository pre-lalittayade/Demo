import test from '@lib/BaseTest';

test(`Login to PHP travels.`, async ({ loginPage }) => {
    await loginPage.navigateToURL();
    await loginPage.loginToApplication();
});