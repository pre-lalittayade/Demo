import { test as baseTest } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { HomePage } from '@pages/HomePage';
import { AvailabilityManagementPage } from '@pages/AvailabilityManagementPage';
import { TrendPage } from '@pages/TrendsPage';
import { TimeLapsePage } from '@pages/TimeLapsePage';
import { TaskPage } from '@pages/CMMS_Master/TaskPage';
import { EnergyStoragePage } from '@pages/Dashboard/EnergyStorageNevigationPage';
import { WindPage } from '@pages/Dashboard/WindPage';
import { SolarPage } from '@pages/Dashboard/SolarPage';
import { CBPage } from '@pages/Monitoring/CBPage';
import { InverterPage } from '@pages/Monitoring/InverterPage';
import { WorkorderPage } from '@pages/CMMS/WorkorderPage';
import { MFMPage } from '@pages/Monitoring/MFMPage';
import { WSPage } from '@pages/Monitoring/WSPage';
import { CostumAlertstPage } from '@pages/Alarams/CostumAlertsPage';
import { BildJMRPage } from '@pages/CMMS/BildJMRPage';
import { LoginMultipalUsersPage } from '@pages/Login Users/LoginMultipalUsersPage';
import { LossCalculationPage } from '@pages/CMMS/LossCalculationPage';
import { AvalbltyCalcPage } from '@pages/CMMS/AvalbltyCaltnPage';
import { Managemet_Page } from '@pages/SmokeSuit/SolarSmoke/Management_Page';
import { CMMS_Master_Page } from '@pages/SmokeSuit/SolarSmoke/CMMS_Master_Page';
import { Dashboards_Page } from '@pages/SmokeSuit/SolarSmoke/Dashboards_Page';
import { Monitoring_Page } from '@pages/SmokeSuit/SolarSmoke/Monitoring_Page';
import { Analytics_Page } from '@pages/SmokeSuit/SolarSmoke/Analytics_Page';
import { Reporting_Page } from '@pages/SmokeSuit/SolarSmoke/Reporting_Page';
import { AlaramEvent_Page } from '@pages/SmokeSuit/SolarSmoke/Alarams&Events_Page';
import { CMMS_Page } from '@pages/SmokeSuit/SolarSmoke/CMMS_Page';
import { Diagnostics_Page } from '@pages/SmokeSuit/SolarSmoke/Diagnostics_Page';
import { Configuration_Page } from '@pages/SmokeSuit/SolarSmoke/Configuration_Page';
import { LandingPage } from '@pages/SmokeSuit/SolarSmoke/LandingPage_Page';

import { JMRPage } from '@pages/Regration/JMRPage';
import { ModulecleaningPage } from '@pages/CMMS/ModulecleaningPage';
import { CmmsPage } from '@pages/CMMS_Master/CmmsMasterPage';
import { GrasscuttingPage } from '@pages/CMMS/GrasscuttingPage';
import { SmokeCommonMethodsPage } from '@pages/SmokeSuit/SolarSmoke/CommonMethodPage';

//Regration
import { EHSPage } from '@pages/Regration/CMMS/EHSPage';
import { CommonMethodsPage } from '@pages/Regration/CommonPage/CommonMethodsPage';
import { RegTaskPage } from '@pages/Regration/CMMS Master/TaskPage';
import { EHSMDPage } from '@pages/Regration/CMMS/EHSManualDataPage';
import { VendorsPage } from '@pages/Regration/CMMS Master/VendorsPage';



const test = baseTest.extend<{new
    loginPage: LoginPage;

    homePage: HomePage;
    availabilityManagementPage: AvailabilityManagementPage;
    trendPage: TrendPage;
    timeLapse :TimeLapsePage; 
    cmmsTask : TaskPage;
    workorderpage : WorkorderPage;
    EnergyStorage : EnergyStoragePage;
    Wind : WindPage;
    Solar : SolarPage;
    CB : CBPage;
    Inverter : InverterPage;
    MFM : MFMPage;
    WS : WSPage;
    CostumAlerts : CostumAlertstPage;
    BildJMR : BildJMRPage;
    modulecleaningpage : ModulecleaningPage;
    cmmspage : CmmsPage;
    grasscuttingpage : GrasscuttingPage;
    JMRRegration : JMRPage;
    LoginUsers : LoginMultipalUsersPage;
    LossCalculation : LossCalculationPage;
    avalbltycalcltnpage:AvalbltyCalcPage;
    Managemet : Managemet_Page;
    CMMS_Master : CMMS_Master_Page;
    Dashboards : Dashboards_Page;
    Monitoring : Monitoring_Page;
    Analytics : Analytics_Page;
    Reporting : Reporting_Page;
    AlaramEvent : AlaramEvent_Page;
    CMMS : CMMS_Page;
    Configuration : Configuration_Page;
    Diagnostics : Diagnostics_Page;
    landingpage : LandingPage;
    SmokeCommonMethods : SmokeCommonMethodsPage;
 

    // Regration

    EnviromentHealthSafety : EHSPage;
    EHSManualData : EHSMDPage;
    CommonMethods : CommonMethodsPage;
    Task : RegTaskPage;
    Vendors : VendorsPage;

}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    trendPage: async ({ page }, use) => {
        await use(new TrendPage(page))
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    availabilityManagementPage: async ({ page }, use) => {
        await use(new AvailabilityManagementPage(page));
    },
    timeLapse: async({ page }, use) => {
        await use(new TimeLapsePage(page));
    },
    cmmsTask: async({page},use) => {
        await use(new TaskPage(page));
    },
    workorderpage:async({page},use)=>{
        await use(new WorkorderPage(page));
       },
    EnergyStorage: async({page},use) => {
        await use(new EnergyStoragePage(page));
    },
    Wind: async({page},use) => {
        await use(new WindPage(page));
    },
    Solar: async({page},use) => {
        await use(new SolarPage(page));
    },
    CB: async({page},use) => {
        await use(new CBPage(page));
    },
    Inverter: async({page},use) => {
        await use(new InverterPage(page));
    },
    MFM: async({page},use) => {
        await use(new MFMPage(page));
    },
    WS: async({page},use) => {
        await use(new WSPage(page));
    },
    CostumAlerts : async({page},use) => {
        await use(new CostumAlertstPage(page));
    },
    BildJMR : async({page},use) => {
        await use(new BildJMRPage(page));
    },
    JMRRegration : async({page},use) => {
        await use(new JMRPage(page));
    },
    LoginUsers : async({page},use) => {
        await use(new LoginMultipalUsersPage(page));
    },
    LossCalculation : async({page},use) => {
        await use(new LossCalculationPage(page));
    },
    avalbltycalcltnpage:async({page},use)=>{
        await use(new AvalbltyCalcPage(page));
      },
    modulecleaningpage : async({page},use) => {
        await use(new ModulecleaningPage(page))
    },
    cmmspage : async({page},use) => {
        await use(new CmmsPage(page))
    },
    grasscuttingpage : async({page},use) => {
        await use(new GrasscuttingPage(page))
    },
    Managemet : async({page},use) => {
        await use(new Managemet_Page(page));
    },
    CMMS_Master : async({page},use) => {
        await use(new CMMS_Master_Page(page))
    },
    Dashboards : async({page},use) => {
        await use(new Dashboards_Page(page))
    },
    Monitoring : async({page},use) => {
        await use(new Monitoring_Page(page))
    },
    Analytics : async({page},use) => {
        await use(new Analytics_Page(page))
    },
    Reporting : async({page},use) => {
        await use(new Reporting_Page(page))
    },
    AlaramEvent : async({page},use) => {
        await use(new AlaramEvent_Page(page))
    },
    CMMS : async({page},use) => {
        await use(new CMMS_Page(page))
    },
    Diagnostics : async({page},use) => {
        await use(new Diagnostics_Page(page))
    },
    Configuration : async({page},use) => {
        await use(new Configuration_Page(page))
    },
    landingpage : async({page},use) => {
        await use(new LandingPage(page))
    },
    SmokeCommonMethods : async({page},use) => {
        await use(new SmokeCommonMethodsPage(page))
    },

    // Regration
    EnviromentHealthSafety : async({page},use) => {
        await use(new EHSPage(page))
    },
    CommonMethods : async({page},use) => {
        await use(new CommonMethodsPage(page))
    },
    Task: async({page},use) => {
        await use(new RegTaskPage(page));
    },
    EHSManualData : async({page},use) => {
        await use(new EHSMDPage(page))
    },
    Vendors : async({page},use) => {
        await use(new VendorsPage(page))
    },

});

export default test;