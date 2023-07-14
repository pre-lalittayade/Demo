import { devices } from '@playwright/test';
import { PlaywrightTestConfig } from '@playwright/test';
import { testConfig } from './testConfig';
let ENV = process.env.ENV;

if (!ENV || ![`qa`, `dev`, `qaApi`, `devApi`, `cloud`, `staging`, `dotnetcore`].includes(ENV)) {

  console.log(`Please provide a correct environment value like "npx cross-env ENV=qa|dev|qaApi|devApi"`);
  process.exit();
} 

const config: PlaywrightTestConfig = {
  testDir: './tests/functional',
  //Global Setup to run before all tests
  globalSetup: `./global-setup`,

  //Global Teardown to run after all tests
  globalTeardown: `./global-teardown`,

  //sets timeout for each test case
  // timeout: 200000,
  smoketimeout :300000 ,
  // timeout :2000000 ,


  //number of retries if test case fails
  retries: 0,
  // retries: 2, //SmokeS


  //Reporters
  reporter: [[`./CustomReporterConfig.ts`], [`experimental-allure-playwright`], [`html`, { outputFolder: 'html-report', open: 'never' }]],

  projects: [
    {
      name: `Chrome`,
      use: {
        // Configure the browser to use.
        browserName: `chromium`,

        //Chrome Browser Config
        channel: `chrome`,

        //Picks Base Url based on User input
        baseURL: testConfig[process.env.ENV],

        //Browser Mode
        headless: false,
        //headless: true,

        //Browser height and width
        // viewport: { width: 1300, height: 730 },

        // viewport: { width: 1500, height: 1000 },
        // viewport: { width: 1920, height: 970 },  //For Big Screen
        viewport: { width: 1290, height: 615 },     // For Small Screen
        // viewport: { width: 1920, height: 1040 },
        ignoreHTTPSErrors: true,

        //Enable File Downloads in Chrome
        acceptDownloads: true,

        //Artifacts
        screenshot: `only-on-failure`,
        // video: `retain-on-failure`,
        video: `on`,
        trace: `retain-on-failure`,

        //Slows down execution by ms
        launchOptions: {
          // args: ["--start-maximized"],
          slowMo: 0
        }
      },
    },
    {
      name: `Chromium`,
      use: {
        browserName: `chromium`,
        baseURL: testConfig[process.env.ENV],
        headless: true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },

    {
      name: `Firefox`,
      use: {
        browserName: `firefox`,
        baseURL: testConfig[process.env.ENV],
        headless: true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },

    {
      name: `Edge`,
      use: {
        browserName: `chromium`,
        channel: `msedge`,
        baseURL: testConfig[process.env.ENV],
        headless: false,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
    // {
    //   name: `WebKit`,
    //   use: {
    //     browserName: `webkit`,
    //     baseURL: testConfig[process.env.ENV],
    //     headless: true,
    //     viewport: { width: 1500, height: 730 },
    //     ignoreHTTPSErrors: true,
    //     acceptDownloads: true,
    //     screenshot: `only-on-failure`,
    //     video: `retain-on-failure`,
    //     trace: `retain-on-failure`,
    //     launchOptions: {
    //       slowMo: 0
    //     }
    //   },
    // },
    // {
    //   name: `Device`,
    //   use: {
    //     ...devices[`Pixel 4a (5G)`],
    //     browserName: `chromium`,
    //     baseURL: testConfig[process.env.ENV],
    //     headless: true,
    //     ignoreHTTPSErrors: true,
    //     acceptDownloads: true,
    //     screenshot: `only-on-failure`,
    //     video: `retain-on-failure`,
    //     trace: `retain-on-failure`,
    //     launchOptions: {
    //       slowMo: 0
    //     }
    //   },
    // },
    // {
    //   name: `DB`
    // },
    {
      name: `API`,
      use: {
        baseURL: testConfig[process.env.ENV]
      }
    }
  ],
};
export default config;