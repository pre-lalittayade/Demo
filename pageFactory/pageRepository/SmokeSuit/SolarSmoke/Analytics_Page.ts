import { WebActions } from '@lib/WebActions';
import { ComboBoxActions } from '@lib_web/ComboBoxActions';
import { DateActions } from "@lib/web/DateActions";
import { expect, Page } from "@playwright/test";
import { MenuActions } from "@lib_web/MenuActions";
import { testConfig } from '../../../../testConfig';
import { TextBoxActions } from '@lib_web/TextBoxActions';
import { ButtonActions } from '@lib_web/ButtonActions';
import { Analyticst_Object } from '@objects/SmokeSuit/SolarSmoke/Analytics_Object';

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;
let textBoxActionsObj: TextBoxActions;
let buttonActionsObj: ButtonActions;
let webActions: WebActions;


export class Analytics_Page extends Analyticst_Object {

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        dateObj = new DateActions(this.page);
        menuObj = new MenuActions(this.page);
        textBoxActionsObj = new TextBoxActions(this.page)
        buttonActionsObj = new ButtonActions(this.page)
        webActions = new WebActions(this.page);

    }
    async navigateToURL(environment: string): Promise<void> {
        // await webActions.navigateToURL(testConfig.qa);
        await webActions.navigateToURL(environment);
        await webActions.waitForElementAttached(this.email_txt);
    }

    async loginToApplication(username1: string, password1: string): Promise<void> {
        // const decipherPassword = await webActions.decipherPassword();
        // await textBoxActionsObj.enterElementText(this.email_txt, testConfig.username);
        // await textBoxActionsObj.enterElementText(this.password_txt, testConfig.password);
        await textBoxActionsObj.enterElementText(this.email_txt, username1);
        await textBoxActionsObj.enterElementText(this.password_txt, password1);
        await buttonActionsObj.clickElement(this.login_btn);
        await webActions.delay(10000);
        await webActions.waitForElementAttached(this.logout_btn);
    }

    async LogoutOfApplication(): Promise<void> {
        await buttonActionsObj.clickElement(this.logout_btn);
        await buttonActionsObj.clickElement(this.logout_confirm_yes_btn);
        await webActions.waitForElementAttached(this.login_btn)
    }

    async Refreshbtn() {
        await webActions.clickElement(this.refreshbtn)
    }

    async GetColumns(locator: string) {
        const elements = await this.page.$$(locator);
        let colmuns = [];
        for (const element of elements) {
            let col = await element.innerText();
            colmuns.push(col)
        }
        return colmuns;
    }

    async GetColumnValuesRE(columns: Array<string>, colNUm: number) {
        let columnValues = []
        for (let i = 0; i < columns.length - 1; i++) {
            let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNUm}]//span`;
            let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
            if (colValue.match('\n')) {
                columnValues.push(' ');
            } else {
                columnValues.push(colValue);
            }
        }
        return columnValues;
    }
    async GetColumnValues(columns: Array<string>, colNUm: number) {
        let columnValues = []
        for (let i = 0; i < columns.length; i++) {
            let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNUm}]`;
            let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
            if (colValue.match('\n')) {
                columnValues.push(' ');
            } else {
                columnValues.push(colValue);
            }
        }
        return columnValues;
    }
    async GetColumnsDG(locator: string) {
        const elements = await this.page.$$(locator);
        let colmuns = [];
        for (const element of elements) {
            let col = await element.innerText();
            colmuns.push(col)
        }
        return colmuns;
    }
    async GetColumnValuesDG(columns: Array<string>, colNUm: number) {
        let columnValues = []
        for (let i = 0; i < columns.length-1; i++) {
            let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNUm}]`;
            let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
            if (colValue.match('\n')) {
                columnValues.push(' ');
            } else {
                columnValues.push(colValue);
            }
        }
        return columnValues;
    }
    
    async colunmName(){
       const a = await this.page.innerText(this.colunmname);
       console.log(a);
    }
    async colunmLocation(){
       const a = await this.page.innerText(this.colunmlocation);
       console.log(a);
    }
    async colunmDA(){
       const a = await this.page.innerText(this.colunmda);
       console.log(a);
    }
    //////////////////////////////////////
    //div[@class="highcharts-data-table"]//thead//tr//th[@class="text"]
    async GetColumns1(locator: string) {
        const elements = await this.page.$$(locator);
        let colmuns = [];
        for (const element of elements) {
            let col = await element.innerText();
            colmuns.push(col)
        }
        return colmuns;
    }

    async GetColumnValues1(columns: Array<string>) {
        let columnValues = []
        for (let i = 0; i < columns.length; i++) {
            let locator = `//div[@class="highcharts-data-table"]//tr[1]//td[@class="number"]`;
            let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
            if (colValue.match('\n')) {
                columnValues.push(' ');
            } else {
                columnValues.push(colValue);
            }
        }
        return columnValues;
    }

    async GetHiddenColumns(locator: string, totalColumns: number) {
        let colmuns = [];
        await webactions.delay(5000)
        for (let i = 0; i <= Math.round(totalColumns / 5); i++) {
            const elements = await this.page.$$(locator);
            for (const element of elements) {
                let col = await element.innerText();
                colmuns.push(col)
            }
            let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 1) * 5}"]`)
            if (await rowElement.isVisible()) {
                await rowElement.click();
                for (let j = 0; j < 5; j++)
                    await this.page.keyboard.press("ArrowRight")
            }
        }
        const uniqueColumns = new Set(colmuns)
        return colmuns = Array.from(uniqueColumns);
    }


    async GetHiddenColumnValues(columns: Array<string>, colNum: number) {
        let columnValues = []
        let SecondElement = '//div[@class="ag-pinned-left-cols-container"]/div[@row-index="0"]/div[@aria-colindex="2"]'
        await this.page.locator(SecondElement).click();
        await this.page.keyboard.press("ArrowRight")
        for (let i = 0; i < columns.length; i++) {
            let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 3)}"]`)
            await rowElement.click();
            for (let j = 0; j < 2; j++)
                await this.page.keyboard.press("ArrowRight")
            let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNum}]`

            let colValue = await this.page.$eval(locator, (ele) => ele.textContent)
            if (colValue.match('\n')) {
                columnValues.push(' ');
            } else {
                columnValues.push(colValue);
            }
        }
        return columnValues;
    }

    async ScrollTOElement(user) {
        for (let i = 0; i < 100; i++) {
            if (!(await user.isVisible())) {
                await this.page.keyboard.press("PageUp")
            }
        }
        await user.scrollIntoViewIfNeeded({ timeout: 20000 })
    }

    async GetHiddenColumnValueProfiling(columns: Array<string>) {
        let columnValuesprof = []
        let SecondElement = '//div[@class="ag-pinned-left-cols-container"]/div[@row-index="0"]/div[@aria-colindex="2"]'
        await this.page.locator(SecondElement).click();
        await this.page.keyboard.press("ArrowRight")
        for (let i = 0; i < columns.length; i++) {
            let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 4)}"]`);
            if (await rowElement.isVisible())
                await rowElement.click();
            for (let j = 0; j < 2; j++)
                await this.page.keyboard.press("ArrowRight")
            let locator = `//div[@class="ag-center-cols-container"]//div[1]//div[@class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value"]`

            let colValue = await this.page.$eval(locator, (ele) => ele.textContent)
            if (colValue.match('\n')) {
                columnValuesprof.push(' ');
            } else {
                columnValuesprof.push(colValue);
            }
        }
        return columnValuesprof;
    }
    //////////////////////////////////////
    async checkPageisCorrectorNot(name: string) {
        await webactions.delay(2000);
        let pgname = (await this.page.innerText(this.checkpagename)).split("/");
        console.log("Page Name Is - ", pgname[2]);
        expect(pgname[2]).toContain(name);
    }

    async TahoeV2Button(value: string) {
        await webActions.waitForElementAttached(this.tahoeV2button);
        await webActions.clickElement(this.tahoeV2button);
        await webActions.delay(2000);
        await this.checkPageisCorrectorNot(value);
    }
    async DataGovernanceButton(value: string) {
        await webActions.waitForElementAttached(this.datagovernancebutton);
        await webActions.clickElement(this.datagovernancebutton);
        await webActions.delay(2000);
        await this.checkPageisCorrectorNot(value);

    }
    async PlantInverterWMSButton(value: string) {
        await webActions.waitForElementAttached(this.plantinverterwmsbutton(value));
        await webActions.clickElement(this.plantinverterwmsbutton(value));
        await webActions.delay(2000);
    }
    async AssertionLossCalculation(value: string) {
        await webactions.waitForElementAttached(this.assertionlosscalculation(value))
        const firstValue = await this.page.innerText(this.assertionlosscalculation(value))
        console.log(value, " - ", firstValue);
        expect.soft(firstValue).not.toEqual(" ");
    }
    async AssertionDA(value: string) {
        await webactions.waitForElementAttached(this.assertionDA(value))
        const firstValue = await this.page.innerText(this.assertionDA(value))
        console.log(value, " - ", firstValue);
        // expect.soft(firstValue).toBeGreaterThan(0);
        expect.soft(firstValue).not.toEqual(" ");

    }
    async AssertionDQ(value: string) {
        await webactions.waitForElementAttached(this.assertionDQ(value))
        const firstValue = await this.page.innerText(this.assertionDQ(value))
        console.log(value, " - ", firstValue);
        // expect.soft(firstValue).toBeGreaterThan(0);
        expect.soft(firstValue).not.toEqual(" ");
    }
    async Assertion(value: string) {
        await webactions.waitForElementAttached(this.assertion(value))
        const firstValue = await this.page.innerText(this.assertion(value))
        parseInt(firstValue);
        console.log(value," - ",firstValue);
        expect.soft(firstValue).not.toEqual(" ");
        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }
    async Assertiontimelaps() {
        await webactions.waitForElementAttached(this.assertion1);
        const locator = this.page.locator(this.assertion1);
        const Locat = await this.page.innerText('//div[@class="ag-header-cell-label"]//span[contains(text(),"Time")]');
        console.log(Locat);
        expect.soft(locator).toBeVisible();
    }
    async Assertion1() {
        await webactions.waitForElementAttached(this.assertion1);
        const locator = this.page.locator(this.assertion1);
        const Locat = await this.page.innerText('//div[@class="ag-header-cell-label"]//span[contains(text(),"Time")]');
        // console.log(Locat);
        expect.soft(locator).toBeVisible();
        await webactions.waitForElementAttached(this.assertionprof1);
        const locator1 = this.page.locator(this.assertionprof1);
        const Locat1 = await this.page.innerText(this.assertionprof1);
        console.log(Locat," :- ",Locat1);
        expect.soft(locator1).toBeVisible();
    }
    async AssertionTrends() {
        await webactions.waitForElementAttached(this.assertiontrends1);
        const locator = this.page.locator(this.assertiontrends1);
        const Locat = await this.page.innerText(this.assertiontrends1);
        // console.log(Locat);
        expect.soft(locator).toBeVisible();
        await webactions.waitForElementAttached(this.assertiontrends2);
        const locator1 = this.page.locator(this.assertiontrends2);
        const Locat1 = await this.page.innerText(this.assertiontrends2);
        console.log(Locat," :- ",Locat1);
        expect.soft(locator1).toBeVisible();
    }
    //PlantPerformance
    async SelectProject(name: string) {
        await webactions.waitForElementAttached(this.project);
        await webActions.clickElement(this.project);
        await webActions.waitForElementAttached(this.projectdropdownvalue(name));
        await webActions.clickElement(this.projectdropdownvalue(name));
    }
    async SelectAnalysis(name: string) {
        await webactions.waitForElementAttached(this.analysis);
        await webActions.clickElement(this.analysis);
        await webActions.waitForElementAttached(this.analysisdropdownvalue(name));
        await webActions.clickElement(this.analysisdropdownvalue(name));
    }
    async SelectCustomer(name: string) {
        await webactions.waitForElementAttached(this.customer);
        await webActions.clickElement(this.customer);
        await webActions.waitForElementAttached(this.customerdropdownvalue(name));
        await webActions.clickElement(this.customerdropdownvalue(name));
    }
    async SelectMakeModel(name: string) {
        await webactions.waitForElementAttached(this.makemodel);
        await webActions.clickElement(this.makemodel);
        await webActions.waitForElementAttached(this.makemodeldropdownvalue(name));
        await webActions.clickElement(this.makemodeldropdownvalue(name));
    }
    async SearchButton() {
        await webActions.clickElement(this.searchbuttton);
    }
    async AssertionPlantPerformance() {
        // await webactions.waitForElementAttached(this.assertionplantperformance)
        // const firstValue = await this.page.innerText(this.assertionplantperformance)
        // parseInt(firstValue);
        // console.log(firstValue);
        // expect.soft(firstValue).not.toEqual(" ");
        // expect.soft(firstValue).toBeGreaterThan(0.0);

        // await webactions.waitForElementAttached(this.assertionplantperformance);
        // const locator = await this.page.textContent(this.assertionplantperformance);
        // console.log(locator);
        // expect.soft(locator).not.toEqual(" ");

        // await webactions.waitForElementAttached(this.assertionefficiency);
        // const locator1 = await this.page.textContent(this.assertionefficiency);
        // console.log(locator1);
        // expect.soft(locator1).not.toEqual(" ");

        await webactions.waitForElementAttached(this.assertionactualwtgplf);
        await this.page.locator(this.assertionactualwtgplf).scrollIntoViewIfNeeded();
        await webActions.delay(3000);
        const locator2 = await this.page.textContent(this.assertionactualwtgplf);
        const Locator2 = parseFloat(locator2);
        console.log("Estimate Actual WTG :- ",Locator2);
        expect.soft(Locator2).toBeGreaterThanOrEqual(0.0);

        await webactions.waitForElementAttached(this.assertiondataavailability1);
        await this.page.locator(this.assertiondataavailability1).scrollIntoViewIfNeeded();
        await webActions.delay(3000);
        const locator3 = await this.page.textContent(this.assertiondataavailability1);
        const Locator3 = parseFloat(locator3);
        console.log("Data Availability :- ",Locator3);
        expect.soft(Locator3).toBeGreaterThanOrEqual(0.0);
    }

    // async selectValeFromDropDown(dropdownName: string, value: string): Promise<void> {
    //     await this.SelectValue(this.project_dropdown(dropdownName), dropdownName, value);
    // }
    // async SelectValue(locator: string, dropdownName: string, dropDownValueName: string): Promise<void> {
    //     await webActions.waitForElementAttached(locator);
    //     let valueToSelect = (value: string) => `//span[normalize-space(text())="${value}")]`;
    //     let current_value = await comboBoxObj.GetDropDOwnValue(dropdownName);
    //     if (current_value !== dropDownValueName) {
    //         await this.page.click(locator);
    //         await this.page.click(valueToSelect(dropDownValueName));
    //     }
    // }

    //AMS
    async DropDown(dropdownName: string, value: string): Promise<void> {
        await comboBoxObj.SelectValue(this.dropdowns(dropdownName), dropdownName, value);
    }
    async selectValeFromDropDown(dropdownName: string, value: string): Promise<void> {
        await comboBoxObj.SelectValue(this.project_dropdown(dropdownName), dropdownName, value);
    }
    async SelectAlarmButton(buttonName: string): Promise<void> {
        await webactions.clickElement(this.alarms_btn(buttonName));
    }
    async SelectDateRange(fromDate: string, toDate: string): Promise<void> {
        await dateObj.SelectDateRange(fromDate, toDate);
    }
    async NavigateToMenuTree(parentNode: string, nodes: string): Promise<void> {
        await menuObj.smokenavigateMenuTree(parentNode, nodes);
    }
    async DragAndDropElements(source: string): Promise<void> {
        await webactions.dragAndDrop(this.source_location(source), this.drop_textBox);
    }
    async DisplayChart(item: string) {
        await webactions.clickElement(this.chart_menu_btn);
        await webactions.clickElement(this.chart_menu_item(item));
        const User = this.page.locator(this.user);
        await this.ScrollTOElement(User);
    }
    async CheckWtg() {

        let WTGA = await this.page.textContent(`//div[@class="col-md-3 pl-0 ng-star-inserted"]//app-circularsolidguage[@id="ams-Actual WTG Availability"]//div//span[@data-z-index="1"]//span`);
        let CA = await this.page.textContent(`//app-circularsolidguage[@id="ams-Contractual Availability"]//div//span[@data-z-index="1"]//span`);
        let GA = await this.page.textContent(`//app-circularsolidguage[@id="ams-Grid Availability"]//div//span[@data-z-index="1"]//span`);
        let RA = await this.page.textContent(`//app-circularsolidguage[@id="ams-Resource Availability"]//div//span[@data-z-index="1"]//span`);
        await webactions.delay(1000);

        // let Wt =await this.page.inputValue(`//app-circularsolidguage[@id="ams-Actual WTG Availability"]//div//span[@data-z-index="1"]//span`);

        expect.soft(WTGA).not.toEqual(" ");
        console.log("Actual WTG Availability :- ",WTGA);

        expect.soft(CA).not.toEqual(" ");
        console.log("Contractual Availability :- ",CA);

        expect.soft(GA).not.toEqual(" ");
        console.log("Grid Availability :- ",GA);

        expect.soft(RA).not.toEqual(" ");
        console.log("Resource Availability :- ",RA);

    }
    async AssertionGrid1() {
        await webActions.waitForElementAttached(this.amsassertion1);
        const var1 = await this.page.innerText(this.amsassertion1);
        const var2 = await this.page.innerText(this.amsassertion2);
        console.log(var1, " ->", var2);
    }
    async AssertionGrid2() {
        await webActions.waitForElementAttached(this.amsassertion3);
        const var1 = await this.page.innerText(this.amsassertion3);
        const var2 = await this.page.innerText(this.amsassertion4);
        console.log(var1, " ->", var2);
    }
    async GridView() {
        await webactions.clickElement(this.grid_view_btn);
    }
    async GridViewprof() {
        await webactions.clickElement(this.grid_view_btnprof);
    }

    async SettingButton() {
        await webactions.clickElement(this.setting_btn);
        await webactions.delay(5000);
        // await this.GraphAssertion();
        // await webactions.delay(5000);
        await webactions.clickElement(this.graph_1);
        await webactions.delay(5000);
        await webactions.clickElement(this.graph_2);
        await webactions.delay(5000);
        await webactions.clickElement(this.graph_3);
        await webactions.delay(5000);
        await webactions.clickElement(this.graph_4);
        await webactions.delay(5000);
        await webactions.clickElement(this.graph_5);
        await webactions.delay(4000);
        await webactions.clickElement(this.setting_btn);
    }
    async SettingButton1() {
        // await webactions.clickElement(this.setting_btn);
        // await webactions.delay(5000);
        // await this.GraphAssertion();
        // await webactions.delay(5000);
        await webactions.clickElement(this.graph_1);
        await webactions.delay(5000);
        await webactions.clickElement(this.graph_2);
        await webactions.delay(5000);
        await webactions.clickElement(this.graph_3);
        await webactions.delay(5000);
        await webactions.clickElement(this.graph_4);
        await webactions.delay(5000);
        await webactions.clickElement(this.graph_5);
        await webactions.delay(4000);
        await webactions.clickElement(this.setting1);
    }

    async ClickOnSearch(){
        await webActions.waitForElementAttached(this.searchbutton)
        await webactions.clickElement(this.searchbutton);
    }

    //div[@id="chartGrid3_1"]
    async Assertionprof() {
        await webactions.waitForElementAttached(this.assertionprof)
        const locator = this.page.locator(this.assertionprof)
        expect.soft(locator).toBeVisible();
        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }

    //Tahoe V2

    async TahoeAssertion(value: string) {
        await webactions.waitForElementAttached(this.valueassertion(value))
        // const locator = this.page.locator(this.valueassertion(value));
        const locator = await this.page.innerText(this.valueassertion(value));
        console.log(value, " :- " ,locator);
        expect.soft(locator).not.toEqual(" ");
        // expect.soft(locator).not.toBeGreaterThan(0);
        // const firstValue = await this.page.innerText(this.assertion(value))
    }
    async OLDAssertion(value: string) {
        await webactions.waitForElementAttached(this.overalllossdistributionassertion(value))
        const locator = await this.page.innerText(this.overalllossdistributionassertion(value));
        console.log(value, " :- " ,locator);
        expect.soft(locator).not.toEqual(" ");
    }
    async TahoePageAssertion() {
        await webactions.waitForElementAttached(this.tahoepageass);
        const locat = await this.page.locator(this.tahoepageass);
        //    const Locat = await this.page.innerText(this.tahoepageass);
        //     console.log(Locat);
        expect.soft(locat).toBeVisible();
    }
    async ClickOnLDBPSPlant() {
        await webactions.clickElement(this.ldbp);
        await webactions.delay(5000);
    }
    async TahoeGraphAssertion() {
        //await webactions.delay(5000);
        // await this.page.locator(`//*[@class="highcharts-grid highcharts-xaxis-grid"]//*[name()='path'][1]`).highlight();
        //await this.page.locator(`//*[@class="highcharts-grid highcharts-xaxis-grid"]//*[name()='path'][1]`).hover();
        await this.page.locator(`//*[contains(@class,"highcharts-line-series highcharts-tracker")][1]//*[name()='image'][1]`).highlight();
        await this.page.locator(`//*[contains(@class,"highcharts-line-series highcharts-tracker")][1]//*[name()='image'][1]`).hover({ force: true });

        // await this.page.locator(`//highcharts-chart[@id="container"]//*[@class="highcharts-markers highcharts-series-4 highcharts-line-series highcharts-tracker"]//*[contains(@aria-label,"5. May")]`).hover({ force: true });

        await webactions.delay(15000);

    }
    //////////////////////////////////////////////

    async SelectFromdropdown(name: string) {
        await webActions.clickElement(this.clickonproject);
        await webactions.waitForElementAttached(this.Dropdownvalues(name));
        await webactions.clickElement(this.Dropdownvalues(name));
        await webactions.delay(2000);
    }

    async Selectdate(date: string, value: string) {
        await webactions.clickElement(this.CalenderDate(value));
        await dateObj.SelectDate(date);
        await webactions.delay(2000);
    }

    async SearchBtn() {
        await webActions.clickElement(this.searchbtn);
        await webactions.delay(7000);
    }
    async Popupdatanotavailable() {
        await webActions.clickElement(this.datanotpresentokbtn);
        await webactions.delay(5000);
    }
    // async Enddate(date: string) {
    //     await webactions.clickElement(this.CalenderDate(value));
    //     await dateObj.SelectDate(date);
    //     await webactions.delay(2000);
    // }
    async Wind_Btn() {
        await webactions.clickElement(this.wind_button);
        await webactions.delay(5000);
    }
    async ShortNameMenu() {
        await this.page.hover(this.Shortnamebox_hover)
        await this.page.waitForSelector(this.short_name_menu_btn)
        // await this.page.hover(this.short_name_menu_btn);
        await this.page.click(this.short_name_menu_btn);
        await webactions.clickElement(this.short_name_menu_filter_btn);
        // await webactions.clickElement(this.bess);
    }
    async NameMenu() {
        await this.page.hover(this.namebox_hover)
        // await this.page.waitForSelector(this.name_menu_btn)
        // await this.page.hover(this.short_name_menu_btn);
        await this.page.locator(this.name_menu_btn).click({ force: true });
        await webActions.delay(3000);
        await this.page.locator(this.name_menu_filter_btn).click();
        // await webactions.clickElement(this.bess);
    }
    async EnterNameFor_Filter(value: string) {
        // await webactions.enterElementText(this.enternameforfilter,value);
        // await webactions.delay(2000);
        await webactions.waitForElementAttached(this.enternameforfilter);
        await webactions.clickElement(this.enternameforfilter);
        // await webactions.delay(2000);
        await this.page.keyboard.type(value);
        await webactions.delay(1000);
    }
    async clickOnFirstElement() {
        await webactions.waitForElementAttached(this.clickonfirstelement);
        await webactions.clickElement(this.clickonfirstelement);
        await webactions.delay(2000);
    }
    async DatanotavailableOKbtn() {
        await webactions.waitForElementAttached(this.datanotpresentokbtn);
        await webactions.clickElement(this.datanotpresentokbtn);
        await webactions.delay(2000);
    }

    // async Datanotvsible(){
    //     const Datanotavailableispresent:boolean =await this.page.locator(`//div[@class="cdk-overlay-pane"]//button`).isVisible

    // }
    async ScrollToDown() {
        const userEle =
            `//div[@id="plotly-graph-1"]`;
        await webactions.clickElement(userEle);
        for (let i = 0; i < 100; i++) {
            if (!(await this.page.locator(`//div[@id="plotly-graph-9"]`).isVisible())) {
                await this.page.keyboard.press("ArrowDown");
            }
        }
    }

    async Assertionpro() {
        await webactions.waitForElementAttached(this.assertionproject);
        const locator = await this.page.textContent(this.assertionproject);
        // const locator = this.page.locator(this.assertionproject);
        expect.soft(locator).not.toEqual(" ");
        console.log(locator);
        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }
    async AssertionWTG() {
        await webactions.waitForElementAttached(this.assertionwtg);
        const locator = await this.page.textContent(this.assertionwtg);
        // const locator = this.page.locator(this.assertionwtg);
        console.log(locator);
        expect.soft(locator).not.toEqual(" ");
        // expect.soft(firstValue).toBeGreaterThan(0.0);

        // await webactions.waitForElementAttached(this.assertiondataavailability);
        const locator1 = await this.page.textContent(this.assertiondataavailability);
        console.log(locator1);
        expect.soft(locator1).not.toEqual(" ");

        // await webactions.waitForElementAttached(this.assertionactualwtg);
        const locator2 = await this.page.textContent(this.assertionactualwtg);
        console.log(locator2);
        expect.soft(locator2).not.toEqual(" ");
    }
    async AssertionNDAP() {
        await webactions.waitForElementAttached(this.assNDAP);
        const locator = await this.page.textContent(this.assNDAP);
        // const abcd = locator;
        expect.soft(locator).not.toEqual(" ");
        console.log(locator);
        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }
    async IfDataIsVisible() {
        const CostomerBtn: boolean = (await this.page.locator(this.datanotpresentokbtn).isVisible());
        if (CostomerBtn) {
            await webActions.clickElement(this.datanotpresentokbtn);
            await this.Assertionpro();
        }
        else {
            await this.AssertionWTG();
        }
    }
    async IfDataIsVisible1() {
        const CostomerBtn: boolean = (await this.page.locator(this.datanotpresentokbtn).isVisible());
        if (CostomerBtn) {
            await webActions.clickElement(this.datanotpresentokbtn);
            await this.Assertionpro();
        }
        else {
            await this.AssertionNDAP();
            await this.CheckGraphvalue();
        }
    }
    async CheckGraphvalue() {
        let lv;
        let ccR = `//div[@id="plotly-graph-10"]//*[@class="plot"]//*[@class="scatterlayer mlayer"]//*[contains(@class,"trace scatter")][1]//*[@class="points"]//*[name()='path' and @class="point"]`;
        await this.page.locator('//div[@id="plotly-graph-10"]').scrollIntoViewIfNeeded();
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('ArrowDown');
        let ccdcount = await this.page.locator(ccR);
        let ccdcountvalue = await ccdcount.count();
        console.log("count", ccdcountvalue);
        let colmuns = [];
        //await this.page.locator(`//div[@id="plotly-graph-5"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom in"]`);
        for (let i = 1; i < ccdcountvalue; i++) {
            //await delay(2000);
            await this.page.locator(ccR).nth(i).scrollIntoViewIfNeeded();
            await this.page.locator(ccR).nth(i).hover({ force: true });
            let col = await this.page.textContent(`//div[@id="plotly-graph-10"]//*[name()='g' and @class="hoverlayer"]//*[@class="legend"]//*[@class="scrollbox"]//*[@class="legendtitletext"]`);
            // `//div[@id="plotly-graph-10"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[name()='text' and @class="nums"]`);
            colmuns.push(col);
            //await delay(2000);
            lv = i;
            //console.log(i);
        }
        console.log("Total RTE%", colmuns);
        let l: number = colmuns.length;
        let innervalue = (colmuns[(l - 1)]);
        console.log("innervalue", innervalue);
        expect.soft(innervalue).not.toBe(" ");
    }

    //String Analysis
    async Project(name: string) {
        await webactions.waitForElementAttached(this.project_sa);
        await webActions.clickElement(this.project_sa);
        await webActions.waitForElementAttached(this.projectdropdownvalue_sa(name));
        await webActions.clickElement(this.projectdropdownvalue_sa(name));
    }
    async Inverters(name: string) {
        await webactions.waitForElementAttached(this.inverter_sa);
        await webActions.clickElement(this.inverter_sa);
        await webActions.waitForElementAttached(this.inverterdropdownvalue_sa(name));
        await webActions.clickElement(this.inverterdropdownvalue_sa(name));
    }
    async ModuleType(name: string) {
        await webactions.waitForElementAttached(this.moduletype_sa);
        await webActions.clickElement(this.moduletype_sa);
        await webActions.waitForElementAttached(this.moduletypedropdownvalue_sa(name));
        await webActions.clickElement(this.moduletypedropdownvalue_sa(name));
    }
    async Search_sa() {
        await webactions.waitForElementAttached(this.search_sa);
        await webActions.clickElement(this.search_sa);
    }
    async SelectDateRange_sa(fromDate: string, toDate: string): Promise<void> {
        let date_btn = (value: string) => `//mat-datepicker-toggle[@mattooltip="${value}"]/button`;
        let selectDate = (value: string) => `//table[@class="mat-calendar-table"]//tr//td/div[contains(text(), "${value}")]`
        await webActions.clickElement(date_btn("From date"));
        await this.SelectDate(fromDate);
        await webActions.clickElement(date_btn("To date"));
        await this.SelectDate(toDate);
    }

    async SelectDate(date: string): Promise<void> {

        // let ok_btn = '//button[@class="mat-focus-indicator mat-button mat-stroked-button mat-button-base"]'
        const currentMonthYeartxt = '//div[@class="mat-calendar-header"]//span';
        const currentMonthYearArray = (await this.page.innerText(currentMonthYeartxt)).split(' ');
        const selectyearBtn = '//div[@class="mat-calendar-header"]//button';
        let dateMonthYearBtn = (value: string) => `//table[@class="mat-calendar-table"]//tr//td/div[contains(text(),"${value}")]`;

        const dateArray = date.split("-");
        if ((currentMonthYearArray[1] !== dateArray[2]) || (currentMonthYearArray[0] !== dateArray[1].toUpperCase())) {
            await webActions.clickElement(selectyearBtn);
            await webActions.clickElement(dateMonthYearBtn(dateArray[2]));
            await webActions.clickElement(dateMonthYearBtn(dateArray[1].toUpperCase()));
            await webActions.clickElement(dateMonthYearBtn(dateArray[0]));
        } else {
            await webActions.clickElement(dateMonthYearBtn(dateArray[0]));

        }
        //div[@row-index="0"]//div[@aria-colindex="2"]
        // await webActions.clickElement(ok_btn);
    }
    async AssertionSA() {
        await webactions.waitForElementAttached(this.assertion_sa);
        const locator = await this.page.textContent(this.assertion_sa);
        expect.soft(locator).not.toEqual(" ");
        console.log(locator);
        console.log("-----------------------");
    }
    async AssertionPieChart() {
        await webactions.waitForElementAttached(this.assertion_pie0);
        const locator0 = await this.page.textContent(this.assertion_pie0);
        const locator1 = await this.page.textContent(this.assertion_pie1);
        const locator2 = await this.page.textContent(this.assertion_pie2);
        expect.soft(locator0).not.toEqual(" ");
        expect.soft(locator1).not.toEqual(" ");
        expect.soft(locator2).not.toEqual(" ");
        console.log("Data Quality Graph Value");
        console.log(locator0);
        console.log(locator1);
        console.log(locator2);
        console.log("-----------------------");
    }
    async AssertionXYChart() {
        await this.page.locator(`//h3[contains(text(),"Specific Current & Irradiance")]`).scrollIntoViewIfNeeded();

        await webactions.waitForElementAttached(this.assertion_xy0);
        const locator0 = await this.page.textContent(this.assertion_xy0);
        const locator1 = await this.page.textContent(this.assertion_xy1);
        expect.soft(locator0).not.toEqual(" ");
        expect.soft(locator1).not.toEqual(" ");
        console.log("X-Y Graph Value");
        console.log(locator0);
        console.log(locator1);
    }
    //Plant power forecasting
    async Project_PPF(name: string) {
        await webactions.waitForElementAttached(this.project_ppf);
        await webActions.clickElement(this.project_ppf);
        await webActions.waitForElementAttached(this.projectdropdownvalue_ppf(name));
        await webActions.clickElement(this.projectdropdownvalue_ppf(name));
    }
    async Search_ppf() {
        await webactions.waitForElementAttached(this.search_ppf);
        await webActions.clickElement(this.search_ppf);
    }
    async Assertion_ppf() {
        await webactions.waitForElementAttached(this.assertion_ppf);
        const locator = await this.page.textContent(this.assertion_ppf);
        expect.soft(locator).not.toEqual(" ");
        console.log(locator);
        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }
    //Data Governance
    async Click_DataAvability() {
        const User = this.page.locator(this.user_DG);
        await this.ScrollTOElement_DG(User)
        await webactions.waitForElementAttached(this.clickondataavaibality);
        await webActions.clickElement(this.clickondataavaibality);
        await webactions.delay(2000);
    }
    async ScrollTOElement_DG(user_DG) {
        for (let i = 0; i < 100; i++) {
            if (!(await user_DG.isVisible())) {
                await this.page.keyboard.press("PageUp")
            }
        }
        await user_DG.scrollIntoViewIfNeeded({ timeout: 20000 })
    }
    async Assertion_DM() {
        await webactions.waitForElementAttached(this.assertion_dm);
        const locator = await this.page.textContent(this.assertion_dm);
        expect.soft(locator).not.toEqual(" ");
        console.log("For validation we are taking Graph Heading which is :- ",locator);
    }

    //EOSE 



    // async ClickOnEOSEButton() {
    //     await webactions.waitForElementAttached(this.EoseBtn);
    //     await webactions.clickElement(this.EoseBtn);

    // }
    // async ChecktheRowforAccount(name: string) {
    //     let acrow = this.page.locator(this.rowcheck);
    //     await webactions.delay(2000);
    //     expect.soft(acrow).toContainText(name);
    //     await webactions.clickElement(this.rowcheck);
    //     await webactions.delay(2000);
    // }

    // async filterfromcolumn(idname: string, name: string) {


    //     await webactions.clickElement(this.sortingfromcolumn(idname));
    //     await webactions.clickElement(this.buttonsforsorting("filter"));
    //     //await webactions.delay(4000);
    //     let searchtxt = `//div[@class="ag-filter-body"]//div[@ref="eValue1"]//input`;
    //     await this.page.fill(searchtxt, name);
    //     //await webactions.delay(2000);
    //     await webactions.clickElement(this.buttonsforsorting("filter"));
    //     await webactions.delay(2000);
    // }

    // async AddProject() {
    //     await webactions.waitForElementAttached(this.ProjectDPS);
    //     await webactions.clickElement(this.ProjectDPS);
    // }
    // async ClickOnSearchButton() {
    //     await webactions.waitForElementAttached(this.SearchBtnDPS);
    //     await webactions.clickElement(this.SearchBtnDPS);
    // }
    // async SelectDropdownvalue(name: string) {
    //     await webactions.waitForElementAttached(this.dropdown(name));
    //     await webactions.clickElement(this.dropdown(name));
    // }
    // async AddEnergyGroupName() {
    //     await webactions.waitForElementAttached(this.EnergyGroupName);
    //     await webactions.clickElement(this.EnergyGroupName);
    // }
    // async AddDate(date: string) {
    //     await webactions.clickElement(this.StartDate);
    //     await dateObj.SelectDate(date);
    // }
    // async CheckforPrethos() {
    //     await webactions.waitForElementAttached(this.prethosdropdown);
    //     let pre = this.page.locator(this.prethosdropdown);
    //     expect.soft(pre).toBeVisible();
    //     await webactions.clickElement(this.prethosdropdown);

    // }
    // async CheckdailyCyclegraphVisibility(label: string) {

    //     await webactions.waitForElementAttached(this.DailyCyclegraphheading);
    //     let grhd = this.page.locator(this.DailyCyclegraphheading);
    //     expect.soft(grhd).toBeVisible();

    //     await this.page.locator(`//div[@class="svg-container"]//*[@class="xy"]//*[@class="nsewdrag drag"]`).highlight();
    //     await this.page.locator(`//div[@class="svg-container"]//*[@class="gridlayer"]//*[@class="x"]`).highlight();
    //     await this.page.locator(this.dailycyclelatvalue(label)).highlight();
    //     await this.page.locator(this.dailycyclelatvalue(label)).hover({ force: true });
    //     await webactions.delay(2000);
    //     let stcharge = await this.page.textContent(this.dailycyclestatusstateOfCharge);
    //     console.log("state of Charge", stcharge);
    //     expect.soft(stcharge).not.toBe(" ");
    //     let energyBC = await this.page.textContent(this.dailycyclestatusEnergyBlockCurrent);
    //     console.log("Energy Block Current", energyBC);
    //     expect.soft(energyBC).not.toBe(" ");
    //     let energyBV = await this.page.textContent(this.dailycyclestatusEnergyBlockVoltage);
    //     console.log("Energy Block Voltage", energyBV);
    //     expect.soft(energyBV).not.toBe(" ");


    // }

    // async StringCurrentgraphVisibility() {
    //     await this.Dailyperformancegraphheading(this.StringCurrent);

    // }
    // async StringVoltagegraphVisibility() {
    //     await this.Dailyperformancegraphheading(this.graphstringVoltage);

    // }
    // async ModuleVoltagegraphVisibility() {
    //     await this.Dailyperformancegraphheading(this.graphModuleVoltage);

    // }
    // async ModuleTemperaturegraphVisibility() {
    //     await this.Dailyperformancegraphheading(this.graphModuleTemperature);

    // }
    // async StringSocgraphVisibility() {
    //     await this.Dailyperformancegraphheading(this.graphStringSocs);

    // }
    // async ModuleSocgraphVisibility() {
    //     await this.Dailyperformancegraphheading(this.graphModuleSoc);

    // }
    // async ModuleVStringIA1graphVisibility() {
    //     await this.Dailyperformancegraphheading(this.graphModuleVStringIA1);

    // }
    // async ModuleVStringIA2graphVisibility() {
    //     await this.Dailyperformancegraphheading(this.graphModuleVStringIA2);

    // }
    // async ModuleVStringIA3graphVisibility() {
    //     await this.Dailyperformancegraphheading(this.graphModuleVStringIA3);

    // }
    // async ModuleVStringIA4graphVisibility() {
    //     await this.Dailyperformancegraphheading(this.graphModuleVStringIA4);

    // }
    // async ModuleVStringIA5graphVisibility() {
    //     await this.Dailyperformancegraphheading(this.graphModuleVStringIA5);

    // }
    // async ModuleVStringIA6graphVisibility() {
    //     await this.Dailyperformancegraphheading(this.graphModuleVStringIA6);

    // }
    // async ModuleVStringIB1graphVisibility() {
    //     await this.Dailyperformancegraphheading(this.graphModuleVStringIB1);

    // }
    // async ModuleVStringIB2graphVisibility() {
    //     await this.Dailyperformancegraphheading(this.graphModuleVStringIB2);

    // }
    // async ModuleVStringIB3graphVisibility() {
    //     await this.Dailyperformancegraphheading(this.graphModuleVStringIB3);

    // }
    // async ModuleVStringIB4graphVisibility() {
    //     await this.Dailyperformancegraphheading(this.graphModuleVStringIB4);

    // }
    // async ModuleVStringIB5graphVisibility() {
    //     await this.Dailyperformancegraphheading(this.graphModuleVStringIB5);

    // }
    // async ModuleVStringIB6graphVisibility() {
    //     await this.Dailyperformancegraphheading(this.graphModuleVStringIB6);

    // }
    // async TablegraphVisibility() {
    //     await this.Dailyperformancegraphheading(this.tableTimetoDrop);
    //     let tDmodule1 = await this.page.textContent(this.timetodropmodule1);
    //     console.log("EM01 Time to Drop :- ", tDmodule1);
    //     expect.soft(tDmodule1).not.toBe(" ");

    // }
    // async HeatMapVisibility() {
    //     await this.Dailyperformancegraphheading(this.heatmapofVoltage);
    //     let heatmap0 = await this.page.textContent(this.heatmapvalue);
    //     console.log("Heatmap 0th value :- ", heatmap0);
    //     expect.soft(heatmap0).not.toBe(" ");

    // }
    // async TotalEnergyDischargevalueVisibility() {
    //     await this.Dailyperformancegraphheading(this.TotalEnergyDischarge);

    // }


    // async TotalEnergyDischargevalue() {
    //     await webactions.delay(2000);
    //     let tedv = await this.page.textContent(this.totalEnergydischargevalue);
    //     console.log("Total Energy Diacharge :- ", tedv);
    //     expect.soft(tedv).not.toBe(" ");



    // }

    // async DailyperformanceGraphValues(id: string) {
    //     await webactions.clickElement(this.zoomout(id));
    //     //await webactions.clickElement(`//div[@id="plotly-graph-1"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom out"]`);
    //     await webactions.delay(2000);
    //     await webactions.clickElement(this.Comparewithhover(id));
    //     await this.page.locator(this.verticalline6(id)).hover({ force: true });
    //     await webactions.delay(2000);
    // }
    // async DailyperformanceSummaryValues1() {
    //     console.log("String Current");
    //     let EBESA1 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESA1.Energy String Current"));
    //     console.log("EBESA1", EBESA1);
    //     expect.soft(EBESA1).not.toBe(" ");
    //     let EBESA2 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESA2.Energy String Current"));
    //     console.log("EBESA2", EBESA2);
    //     expect.soft(EBESA2).not.toBe(" ");
    //     let EBESA3 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESA3.Energy String Current"));
    //     console.log("EBESA3", EBESA3);
    //     expect.soft(EBESA3).not.toBe(" ");
    //     let EBESA4 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESA4.Energy String Current"));
    //     console.log("EBESA4", EBESA4);
    //     expect.soft(EBESA4).not.toBe(" ");
    //     let EBESA5 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESA5.Energy String Current"));
    //     console.log("EBESA5", EBESA5);
    //     expect.soft(EBESA5).not.toBe(" ");
    //     let EBESA6 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESA6.Energy String Current"));
    //     console.log("EBESA6", EBESA6);
    //     expect.soft(EBESA6).not.toBe(" ");
    //     let ESi = await this.page.textContent(this.dailyperformancevalues1("ESi Average"));
    //     console.log("ESi", ESi);
    //     expect.soft(ESi).not.toBe(" ");
    //     let EBESB1 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESB1.Energy String Current"));
    //     console.log("EBESB1", EBESB1);
    //     expect.soft(EBESB1).not.toBe(" ");
    //     let EBESB2 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESB2.Energy String Current"));
    //     console.log("EBESB2", EBESB2);
    //     expect.soft(EBESB2).not.toBe(" ");
    //     let EBESB3 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESB3.Energy String Current"));
    //     console.log("EBESB3", EBESB3);
    //     expect.soft(EBESB3).not.toBe(" ");
    //     let EBESB4 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESB4.Energy String Current"));
    //     console.log("EBESB4", EBESB4);
    //     expect.soft(EBESB4).not.toBe(" ");
    //     let EBESB5 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESB5.Energy String Current"));
    //     console.log("EBESB5", EBESB5);
    //     expect.soft(EBESB5).not.toBe(" ");
    //     let EBESB6 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESB6.Energy String Current"));
    //     console.log("EBESB6", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     await this.page.keyboard.press('ArrowDown');

    // }
    // async DailyperformanceSummaryValues2() {
    //     console.log("String Voltage");
    //     let EBESA1 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESA1.Energy String Voltage"));
    //     console.log("EBESA1", EBESA1);
    //     expect.soft(EBESA1).not.toBe(" ");
    //     let EBESA2 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESA2.Energy String Voltage"));
    //     console.log("EBESA2", EBESA2);
    //     expect.soft(EBESA2).not.toBe(" ");
    //     let EBESA3 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESA3.Energy String Voltage"));
    //     console.log("EBESA3", EBESA3);
    //     expect.soft(EBESA3).not.toBe(" ");
    //     let EBESA4 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESA4.Energy String Voltage"));
    //     console.log("EBESA4", EBESA4);
    //     expect.soft(EBESA4).not.toBe(" ");
    //     let EBESA5 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESA5.Energy String Voltage"));
    //     console.log("EBESA5", EBESA5);
    //     expect.soft(EBESA5).not.toBe(" ");
    //     let EBESA6 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESA6.Energy String Voltage"));
    //     console.log("EBESA6", EBESA6);
    //     expect.soft(EBESA6).not.toBe(" ");

    //     let EBESB1 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESB1.Energy String Voltage"));
    //     console.log("EBESB1", EBESB1);
    //     expect.soft(EBESB1).not.toBe(" ");
    //     let EBESB2 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESB2.Energy String Voltage"));
    //     console.log("EBESB2", EBESB2);
    //     expect.soft(EBESB2).not.toBe(" ");
    //     let EBESB3 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESB3.Energy String Voltage"));
    //     console.log("EBESB3", EBESB3);
    //     expect.soft(EBESB3).not.toBe(" ");
    //     let EBESB4 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESB4.Energy String Voltage"));
    //     console.log("EBESB4", EBESB4);
    //     expect.soft(EBESB4).not.toBe(" ");
    //     let EBESB5 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESB5.Energy String Voltage"));
    //     console.log("EBESB5", EBESB5);
    //     expect.soft(EBESB5).not.toBe(" ");
    //     let EBESB6 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESB6.Energy String Voltage"));
    //     console.log("EBESB6", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     for (let i = 0; i < 10; i++) {
    //         await this.page.keyboard.press('ArrowDown');
    //     }
    // }

    // async DailyperformanceSummaryValues3() {
    //     console.log("Energy Module Voltage");
    //     let EBESA1 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESB4|EM07.Energy Module Voltage reading"));
    //     console.log("EBESA1", EBESA1);
    //     expect.soft(EBESA1).not.toBe(" ");
    //     let EBESA2 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESB1|EM07.Energy Module Voltage reading"));
    //     console.log("EBESA2", EBESA2);
    //     expect.soft(EBESA2).not.toBe(" ");
    //     let EBESA3 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESB1|EM04.Energy Module Voltage reading"));
    //     console.log("EBESA3", EBESA3);
    //     expect.soft(EBESA3).not.toBe(" ");
    //     let EBESA4 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESB6|EM12.Energy Module Voltage reading"));
    //     console.log("EBESA4", EBESA4);
    //     expect.soft(EBESA4).not.toBe(" ");
    //     let EBESA5 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESB1|EM12.Energy Module Voltage reading"));
    //     console.log("EBESA5", EBESA5);
    //     expect.soft(EBESA5).not.toBe(" ");
    //     let EBESA6 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESA2|EM03.Energy Module Voltage reading"));
    //     console.log("EBESA6", EBESA6);
    //     expect.soft(EBESA6).not.toBe(" ");

    //     let EBESB1 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESA2|EM01.Energy Module Voltage reading"));
    //     console.log("EBESB1", EBESB1);
    //     expect.soft(EBESB1).not.toBe(" ");
    //     let EBESB2 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESB4|EM06.Energy Module Voltage reading"));
    //     console.log("EBESB2", EBESB2);
    //     expect.soft(EBESB2).not.toBe(" ");
    //     let EBESB3 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESA2|EM10.Energy Module Voltage reading"));
    //     console.log("EBESB3", EBESB3);
    //     expect.soft(EBESB3).not.toBe(" ");
    //     let EBESB4 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESA2|EM05.Energy Module Voltage reading"));
    //     console.log("EBESB4", EBESB4);
    //     expect.soft(EBESB4).not.toBe(" ");
    //     let EBESB5 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESB4|EM12.Energy Module Voltage reading"));
    //     console.log("EBESB5", EBESB5);
    //     expect.soft(EBESB5).not.toBe(" ");
    //     let EBESB6 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESA2|EM06.Energy Module Voltage reading"));
    //     console.log("EBESB6", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     let EBESEM6 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESA2|EM04.Energy Module Voltage reading"));
    //     console.log("EBESB6", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     for (let i = 0; i < 10; i++) {
    //         await this.page.keyboard.press('ArrowDown');
    //     }
    // }

    // async DailyperformanceSummaryValues5() {
    //     console.log("State of Charge");
    //     let EBESA1 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESA1.State Of Charge"));
    //     console.log("EBESA1", EBESA1);
    //     expect.soft(EBESA1).not.toBe(" ");
    //     let EBESA2 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESA2.State Of Charge"));
    //     console.log("EBESA2", EBESA2);
    //     expect.soft(EBESA2).not.toBe(" ");
    //     let EBESA3 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESA3.State Of Charge"));
    //     console.log("EBESA3", EBESA3);
    //     expect.soft(EBESA3).not.toBe(" ");
    //     let EBESA4 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESA4.State Of Charge"));
    //     console.log("EBESA4", EBESA4);
    //     expect.soft(EBESA4).not.toBe(" ");
    //     let EBESA5 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESA5.State Of Charge"));
    //     console.log("EBESA5", EBESA5);
    //     expect.soft(EBESA5).not.toBe(" ");
    //     let EBESA6 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESA6.State Of Charge"));
    //     console.log("EBESA6", EBESA6);
    //     expect.soft(EBESA6).not.toBe(" ");

    //     let EBESB1 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESB1.State Of Charge"));
    //     console.log("EBESB1", EBESB1);
    //     expect.soft(EBESB1).not.toBe(" ");
    //     let EBESB2 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESB2.State Of Charge"));
    //     console.log("EBESB2", EBESB2);
    //     expect.soft(EBESB2).not.toBe(" ");
    //     let EBESB3 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESB3.State Of Charge"));
    //     console.log("EBESB3", EBESB3);
    //     expect.soft(EBESB3).not.toBe(" ");
    //     let EBESB4 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESB4.State Of Charge"));
    //     console.log("EBESB4", EBESB4);
    //     expect.soft(EBESB4).not.toBe(" ");
    //     let EBESB5 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESB5.State Of Charge"));
    //     console.log("EBESB5", EBESB5);
    //     expect.soft(EBESB5).not.toBe(" ");
    //     let EBESB6 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESB6.State Of Charge"));
    //     console.log("EBESB6", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     for (let i = 0; i < 10; i++) {
    //         await this.page.keyboard.press('ArrowDown');
    //     }
    // }

    // async DailyperformanceSummaryValues7() {
    //     console.log("Energy Module VoltageEB03|ESA1");
    //     let EBESA1 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM01.Energy Module Voltage reading"));
    //     console.log("EBESA1", EBESA1);
    //     expect.soft(EBESA1).not.toBe(" ");
    //     let EBESA2 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM02.Energy Module Voltage reading"));
    //     console.log("EBESA2", EBESA2);
    //     expect.soft(EBESA2).not.toBe(" ");
    //     let EBESA3 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM03.Energy Module Voltage reading"));
    //     console.log("EBESA3", EBESA3);
    //     expect.soft(EBESA3).not.toBe(" ");
    //     let EBESA4 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM04.Energy Module Voltage reading"));
    //     console.log("EBESA4", EBESA4);
    //     expect.soft(EBESA4).not.toBe(" ");
    //     let EBESA5 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM05.Energy Module Voltage reading"));
    //     console.log("EBESA5", EBESA5);
    //     expect.soft(EBESA5).not.toBe(" ");
    //     let EBESA6 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM06.Energy Module Voltage reading"));
    //     console.log("EBESA6", EBESA6);
    //     expect.soft(EBESA6).not.toBe(" ");

    //     let EBESB1 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM07.Energy Module Voltage reading"));
    //     console.log("EBESB1", EBESB1);
    //     expect.soft(EBESB1).not.toBe(" ");
    //     let EBESB2 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM08.Energy Module Voltage reading"));
    //     console.log("EBESB2", EBESB2);
    //     expect.soft(EBESB2).not.toBe(" ");
    //     let EBESB3 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM09.Energy Module Voltage reading"));
    //     console.log("EBESB3", EBESB3);
    //     expect.soft(EBESB3).not.toBe(" ");
    //     let EBESB4 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM10.Energy Module Voltage reading"));
    //     console.log("EBESB4", EBESB4);
    //     expect.soft(EBESB4).not.toBe(" ");
    //     let EBESB5 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM11.Energy Module Voltage reading"));
    //     console.log("EBESB5", EBESB5);
    //     expect.soft(EBESB5).not.toBe(" ");
    //     let EBESB6 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM12.Energy Module Voltage reading"));
    //     console.log("EBESB6", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     let EBESEM6 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1.Energy String Current"));
    //     console.log("EString Current", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     for (let i = 0; i < 10; i++) {
    //         await this.page.keyboard.press('ArrowDown');
    //     }
    // }
    // async DailyperformanceSummaryValues8() {
    //     console.log("Energy Module VoltageEB03|ESA2");
    //     let EBESA1 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM01.Energy Module Voltage reading"));
    //     console.log("EBESA1", EBESA1);
    //     expect.soft(EBESA1).not.toBe(" ");
    //     let EBESA2 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM02.Energy Module Voltage reading"));
    //     console.log("EBESA2", EBESA2);
    //     expect.soft(EBESA2).not.toBe(" ");
    //     let EBESA3 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM03.Energy Module Voltage reading"));
    //     console.log("EBESA3", EBESA3);
    //     expect.soft(EBESA3).not.toBe(" ");
    //     let EBESA4 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM04.Energy Module Voltage reading"));
    //     console.log("EBESA4", EBESA4);
    //     expect.soft(EBESA4).not.toBe(" ");
    //     let EBESA5 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM05.Energy Module Voltage reading"));
    //     console.log("EBESA5", EBESA5);
    //     expect.soft(EBESA5).not.toBe(" ");
    //     let EBESA6 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM06.Energy Module Voltage reading"));
    //     console.log("EBESA6", EBESA6);
    //     expect.soft(EBESA6).not.toBe(" ");

    //     let EBESB1 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM07.Energy Module Voltage reading"));
    //     console.log("EBESB1", EBESB1);
    //     expect.soft(EBESB1).not.toBe(" ");
    //     let EBESB2 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM08.Energy Module Voltage reading"));
    //     console.log("EBESB2", EBESB2);
    //     expect.soft(EBESB2).not.toBe(" ");
    //     let EBESB3 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM09.Energy Module Voltage reading"));
    //     console.log("EBESB3", EBESB3);
    //     expect.soft(EBESB3).not.toBe(" ");
    //     let EBESB4 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM10.Energy Module Voltage reading"));
    //     console.log("EBESB4", EBESB4);
    //     expect.soft(EBESB4).not.toBe(" ");
    //     let EBESB5 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM11.Energy Module Voltage reading"));
    //     console.log("EBESB5", EBESB5);
    //     expect.soft(EBESB5).not.toBe(" ");
    //     let EBESB6 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM12.Energy Module Voltage reading"));
    //     console.log("EBESB6", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     let EBESEM6 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2.Energy String Current"));
    //     console.log("EString Current", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     for (let i = 0; i < 10; i++) {
    //         await this.page.keyboard.press('ArrowDown');
    //     }
    // }
    // async DailyperformanceSummaryValues9() {
    //     console.log("Energy Module VoltageEB03|ESA3");
    //     let EBESA1 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM01.Energy Module Voltage reading"));
    //     console.log("EBESA1", EBESA1);
    //     expect.soft(EBESA1).not.toBe(" ");
    //     let EBESA2 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM02.Energy Module Voltage reading"));
    //     console.log("EBESA2", EBESA2);
    //     expect.soft(EBESA2).not.toBe(" ");
    //     let EBESA3 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM03.Energy Module Voltage reading"));
    //     console.log("EBESA3", EBESA3);
    //     expect.soft(EBESA3).not.toBe(" ");
    //     let EBESA4 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM04.Energy Module Voltage reading"));
    //     console.log("EBESA4", EBESA4);
    //     expect.soft(EBESA4).not.toBe(" ");
    //     let EBESA5 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM05.Energy Module Voltage reading"));
    //     console.log("EBESA5", EBESA5);
    //     expect.soft(EBESA5).not.toBe(" ");
    //     let EBESA6 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM06.Energy Module Voltage reading"));
    //     console.log("EBESA6", EBESA6);
    //     expect.soft(EBESA6).not.toBe(" ");

    //     let EBESB1 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM07.Energy Module Voltage reading"));
    //     console.log("EBESB1", EBESB1);
    //     expect.soft(EBESB1).not.toBe(" ");
    //     let EBESB2 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM08.Energy Module Voltage reading"));
    //     console.log("EBESB2", EBESB2);
    //     expect.soft(EBESB2).not.toBe(" ");
    //     let EBESB3 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM09.Energy Module Voltage reading"));
    //     console.log("EBESB3", EBESB3);
    //     expect.soft(EBESB3).not.toBe(" ");
    //     let EBESB4 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM10.Energy Module Voltage reading"));
    //     console.log("EBESB4", EBESB4);
    //     expect.soft(EBESB4).not.toBe(" ");
    //     let EBESB5 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM11.Energy Module Voltage reading"));
    //     console.log("EBESB5", EBESB5);
    //     expect.soft(EBESB5).not.toBe(" ");
    //     let EBESB6 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM12.Energy Module Voltage reading"));
    //     console.log("EBESB6", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     let EBESEM6 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3.Energy String Current"));
    //     console.log("EString Current", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     for (let i = 0; i < 10; i++) {
    //         await this.page.keyboard.press('ArrowDown');
    //     }
    // }
    // async DailyperformanceSummaryValues10() {
    //     console.log("Energy Module VoltageEB03|ESA4");
    //     let EBESA1 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM01.Energy Module Voltage reading"));
    //     console.log("EBESA1", EBESA1);
    //     expect.soft(EBESA1).not.toBe(" ");
    //     let EBESA2 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM02.Energy Module Voltage reading"));
    //     console.log("EBESA2", EBESA2);
    //     expect.soft(EBESA2).not.toBe(" ");
    //     let EBESA3 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM03.Energy Module Voltage reading"));
    //     console.log("EBESA3", EBESA3);
    //     expect.soft(EBESA3).not.toBe(" ");
    //     let EBESA4 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM04.Energy Module Voltage reading"));
    //     console.log("EBESA4", EBESA4);
    //     expect.soft(EBESA4).not.toBe(" ");
    //     let EBESA5 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM05.Energy Module Voltage reading"));
    //     console.log("EBESA5", EBESA5);
    //     expect.soft(EBESA5).not.toBe(" ");
    //     let EBESA6 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM06.Energy Module Voltage reading"));
    //     console.log("EBESA6", EBESA6);
    //     expect.soft(EBESA6).not.toBe(" ");

    //     let EBESB1 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM07.Energy Module Voltage reading"));
    //     console.log("EBESB1", EBESB1);
    //     expect.soft(EBESB1).not.toBe(" ");
    //     let EBESB2 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM08.Energy Module Voltage reading"));
    //     console.log("EBESB2", EBESB2);
    //     expect.soft(EBESB2).not.toBe(" ");
    //     let EBESB3 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM09.Energy Module Voltage reading"));
    //     console.log("EBESB3", EBESB3);
    //     expect.soft(EBESB3).not.toBe(" ");
    //     let EBESB4 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM10.Energy Module Voltage reading"));
    //     console.log("EBESB4", EBESB4);
    //     expect.soft(EBESB4).not.toBe(" ");
    //     let EBESB5 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM11.Energy Module Voltage reading"));
    //     console.log("EBESB5", EBESB5);
    //     expect.soft(EBESB5).not.toBe(" ");
    //     let EBESB6 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM12.Energy Module Voltage reading"));
    //     console.log("EBESB6", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     let EBESEM6 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4.Energy String Current"));
    //     console.log("EString Current", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     for (let i = 0; i < 10; i++) {
    //         await this.page.keyboard.press('ArrowDown');
    //     }
    // }
    // async DailyperformanceSummaryValues11() {
    //     console.log("Energy Module VoltageEB03|ESA5");
    //     let EBESA1 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM01.Energy Module Voltage reading"));
    //     console.log("EBESA1", EBESA1);
    //     expect.soft(EBESA1).not.toBe(" ");
    //     let EBESA2 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM02.Energy Module Voltage reading"));
    //     console.log("EBESA2", EBESA2);
    //     expect.soft(EBESA2).not.toBe(" ");
    //     let EBESA3 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM03.Energy Module Voltage reading"));
    //     console.log("EBESA3", EBESA3);
    //     expect.soft(EBESA3).not.toBe(" ");
    //     let EBESA4 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM04.Energy Module Voltage reading"));
    //     console.log("EBESA4", EBESA4);
    //     expect.soft(EBESA4).not.toBe(" ");
    //     let EBESA5 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM05.Energy Module Voltage reading"));
    //     console.log("EBESA5", EBESA5);
    //     expect.soft(EBESA5).not.toBe(" ");
    //     let EBESA6 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM06.Energy Module Voltage reading"));
    //     console.log("EBESA6", EBESA6);
    //     expect.soft(EBESA6).not.toBe(" ");

    //     let EBESB1 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM07.Energy Module Voltage reading"));
    //     console.log("EBESB1", EBESB1);
    //     expect.soft(EBESB1).not.toBe(" ");
    //     let EBESB2 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM08.Energy Module Voltage reading"));
    //     console.log("EBESB2", EBESB2);
    //     expect.soft(EBESB2).not.toBe(" ");
    //     let EBESB3 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM09.Energy Module Voltage reading"));
    //     console.log("EBESB3", EBESB3);
    //     expect.soft(EBESB3).not.toBe(" ");
    //     let EBESB4 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM10.Energy Module Voltage reading"));
    //     console.log("EBESB4", EBESB4);
    //     expect.soft(EBESB4).not.toBe(" ");
    //     let EBESB5 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM11.Energy Module Voltage reading"));
    //     console.log("EBESB5", EBESB5);
    //     expect.soft(EBESB5).not.toBe(" ");
    //     let EBESB6 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM12.Energy Module Voltage reading"));
    //     console.log("EBESB6", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     let EBESEM6 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5.Energy String Current"));
    //     console.log("EString Current", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     for (let i = 0; i < 10; i++) {
    //         await this.page.keyboard.press('ArrowDown');
    //     }
    // }
    // async DailyperformanceSummaryValues12() {
    //     console.log("Energy Module VoltageEB03|ESA6");
    //     let EBESA1 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM01.Energy Module Voltage reading"));
    //     console.log("EBESA1", EBESA1);
    //     expect.soft(EBESA1).not.toBe(" ");
    //     let EBESA2 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM02.Energy Module Voltage reading"));
    //     console.log("EBESA2", EBESA2);
    //     expect.soft(EBESA2).not.toBe(" ");
    //     let EBESA3 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM03.Energy Module Voltage reading"));
    //     console.log("EBESA3", EBESA3);
    //     expect.soft(EBESA3).not.toBe(" ");
    //     let EBESA4 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM04.Energy Module Voltage reading"));
    //     console.log("EBESA4", EBESA4);
    //     expect.soft(EBESA4).not.toBe(" ");
    //     let EBESA5 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM05.Energy Module Voltage reading"));
    //     console.log("EBESA5", EBESA5);
    //     expect.soft(EBESA5).not.toBe(" ");
    //     let EBESA6 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM06.Energy Module Voltage reading"));
    //     console.log("EBESA6", EBESA6);
    //     expect.soft(EBESA6).not.toBe(" ");

    //     let EBESB1 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM07.Energy Module Voltage reading"));
    //     console.log("EBESB1", EBESB1);
    //     expect.soft(EBESB1).not.toBe(" ");
    //     let EBESB2 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM08.Energy Module Voltage reading"));
    //     console.log("EBESB2", EBESB2);
    //     expect.soft(EBESB2).not.toBe(" ");
    //     let EBESB3 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM09.Energy Module Voltage reading"));
    //     console.log("EBESB3", EBESB3);
    //     expect.soft(EBESB3).not.toBe(" ");
    //     let EBESB4 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM10.Energy Module Voltage reading"));
    //     console.log("EBESB4", EBESB4);
    //     expect.soft(EBESB4).not.toBe(" ");
    //     let EBESB5 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM11.Energy Module Voltage reading"));
    //     console.log("EBESB5", EBESB5);
    //     expect.soft(EBESB5).not.toBe(" ");
    //     let EBESB6 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM12.Energy Module Voltage reading"));
    //     console.log("EBESB6", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     let EBESEM6 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6.Energy String Current"));
    //     console.log("EString Current", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     for (let i = 0; i < 10; i++) {
    //         await this.page.keyboard.press('ArrowDown');
    //     }
    // }
    // async DailyperformanceSummaryValues13() {
    //     console.log("Energy Module VoltageEB03|ESB1");
    //     let EBESA1 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM01.Energy Module Voltage reading"));
    //     console.log("EBESA1", EBESA1);
    //     expect.soft(EBESA1).not.toBe(" ");
    //     let EBESA2 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM02.Energy Module Voltage reading"));
    //     console.log("EBESA2", EBESA2);
    //     expect.soft(EBESA2).not.toBe(" ");
    //     let EBESA3 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM03.Energy Module Voltage reading"));
    //     console.log("EBESA3", EBESA3);
    //     expect.soft(EBESA3).not.toBe(" ");
    //     let EBESA4 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM04.Energy Module Voltage reading"));
    //     console.log("EBESA4", EBESA4);
    //     expect.soft(EBESA4).not.toBe(" ");
    //     let EBESA5 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM05.Energy Module Voltage reading"));
    //     console.log("EBESA5", EBESA5);
    //     expect.soft(EBESA5).not.toBe(" ");
    //     let EBESA6 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM06.Energy Module Voltage reading"));
    //     console.log("EBESA6", EBESA6);
    //     expect.soft(EBESA6).not.toBe(" ");

    //     let EBESB1 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM07.Energy Module Voltage reading"));
    //     console.log("EBESB1", EBESB1);
    //     expect.soft(EBESB1).not.toBe(" ");
    //     let EBESB2 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM08.Energy Module Voltage reading"));
    //     console.log("EBESB2", EBESB2);
    //     expect.soft(EBESB2).not.toBe(" ");
    //     let EBESB3 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM09.Energy Module Voltage reading"));
    //     console.log("EBESB3", EBESB3);
    //     expect.soft(EBESB3).not.toBe(" ");
    //     let EBESB4 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM10.Energy Module Voltage reading"));
    //     console.log("EBESB4", EBESB4);
    //     expect.soft(EBESB4).not.toBe(" ");
    //     let EBESB5 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM11.Energy Module Voltage reading"));
    //     console.log("EBESB5", EBESB5);
    //     expect.soft(EBESB5).not.toBe(" ");
    //     let EBESB6 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM12.Energy Module Voltage reading"));
    //     console.log("EBESB6", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     let EBESEM6 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1.Energy String Current"));
    //     console.log("EString Current", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     for (let i = 0; i < 10; i++) {
    //         await this.page.keyboard.press('ArrowDown');
    //     }
    // }
    // async DailyperformanceSummaryValues14() {
    //     console.log("Energy Module VoltageEB03|ESB2");
    //     let EBESA1 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM01.Energy Module Voltage reading"));
    //     console.log("EBESA1", EBESA1);
    //     expect.soft(EBESA1).not.toBe(" ");
    //     let EBESA2 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM02.Energy Module Voltage reading"));
    //     console.log("EBESA2", EBESA2);
    //     expect.soft(EBESA2).not.toBe(" ");
    //     let EBESA3 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM03.Energy Module Voltage reading"));
    //     console.log("EBESA3", EBESA3);
    //     expect.soft(EBESA3).not.toBe(" ");
    //     let EBESA4 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM04.Energy Module Voltage reading"));
    //     console.log("EBESA4", EBESA4);
    //     expect.soft(EBESA4).not.toBe(" ");
    //     let EBESA5 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM05.Energy Module Voltage reading"));
    //     console.log("EBESA5", EBESA5);
    //     expect.soft(EBESA5).not.toBe(" ");
    //     let EBESA6 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM06.Energy Module Voltage reading"));
    //     console.log("EBESA6", EBESA6);
    //     expect.soft(EBESA6).not.toBe(" ");

    //     let EBESB1 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM07.Energy Module Voltage reading"));
    //     console.log("EBESB1", EBESB1);
    //     expect.soft(EBESB1).not.toBe(" ");
    //     let EBESB2 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM08.Energy Module Voltage reading"));
    //     console.log("EBESB2", EBESB2);
    //     expect.soft(EBESB2).not.toBe(" ");
    //     let EBESB3 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM09.Energy Module Voltage reading"));
    //     console.log("EBESB3", EBESB3);
    //     expect.soft(EBESB3).not.toBe(" ");
    //     let EBESB4 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM10.Energy Module Voltage reading"));
    //     console.log("EBESB4", EBESB4);
    //     expect.soft(EBESB4).not.toBe(" ");
    //     let EBESB5 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM11.Energy Module Voltage reading"));
    //     console.log("EBESB5", EBESB5);
    //     expect.soft(EBESB5).not.toBe(" ");
    //     let EBESB6 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM12.Energy Module Voltage reading"));
    //     console.log("EBESB6", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     let EBESEM6 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2.Energy String Current"));
    //     console.log("EString Current", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     for (let i = 0; i < 10; i++) {
    //         await this.page.keyboard.press('ArrowDown');
    //     }
    // }
    // async DailyperformanceSummaryValues15() {
    //     console.log("Energy Module VoltageEB03|ESB3");
    //     let EBESA1 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM01.Energy Module Voltage reading"));
    //     console.log("EBESA1", EBESA1);
    //     expect.soft(EBESA1).not.toBe(" ");
    //     let EBESA2 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM02.Energy Module Voltage reading"));
    //     console.log("EBESA2", EBESA2);
    //     expect.soft(EBESA2).not.toBe(" ");
    //     let EBESA3 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM03.Energy Module Voltage reading"));
    //     console.log("EBESA3", EBESA3);
    //     expect.soft(EBESA3).not.toBe(" ");
    //     let EBESA4 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM04.Energy Module Voltage reading"));
    //     console.log("EBESA4", EBESA4);
    //     expect.soft(EBESA4).not.toBe(" ");
    //     let EBESA5 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM05.Energy Module Voltage reading"));
    //     console.log("EBESA5", EBESA5);
    //     expect.soft(EBESA5).not.toBe(" ");
    //     let EBESA6 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM06.Energy Module Voltage reading"));
    //     console.log("EBESA6", EBESA6);
    //     expect.soft(EBESA6).not.toBe(" ");

    //     let EBESB1 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM07.Energy Module Voltage reading"));
    //     console.log("EBESB1", EBESB1);
    //     expect.soft(EBESB1).not.toBe(" ");
    //     let EBESB2 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM08.Energy Module Voltage reading"));
    //     console.log("EBESB2", EBESB2);
    //     expect.soft(EBESB2).not.toBe(" ");
    //     let EBESB3 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM09.Energy Module Voltage reading"));
    //     console.log("EBESB3", EBESB3);
    //     expect.soft(EBESB3).not.toBe(" ");
    //     let EBESB4 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM10.Energy Module Voltage reading"));
    //     console.log("EBESB4", EBESB4);
    //     expect.soft(EBESB4).not.toBe(" ");
    //     let EBESB5 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM11.Energy Module Voltage reading"));
    //     console.log("EBESB5", EBESB5);
    //     expect.soft(EBESB5).not.toBe(" ");
    //     let EBESB6 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM12.Energy Module Voltage reading"));
    //     console.log("EBESB6", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     let EBESEM6 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3.Energy String Current"));
    //     console.log("EString Current", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     for (let i = 0; i < 10; i++) {
    //         await this.page.keyboard.press('ArrowDown');
    //     }
    // }
    // async DailyperformanceSummaryValues16() {
    //     console.log("Energy Module VoltageEB03|ESB4");
    //     let EBESA1 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM01.Energy Module Voltage reading"));
    //     console.log("EBESA1", EBESA1);
    //     expect.soft(EBESA1).not.toBe(" ");
    //     let EBESA2 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM02.Energy Module Voltage reading"));
    //     console.log("EBESA2", EBESA2);
    //     expect.soft(EBESA2).not.toBe(" ");
    //     let EBESA3 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM03.Energy Module Voltage reading"));
    //     console.log("EBESA3", EBESA3);
    //     expect.soft(EBESA3).not.toBe(" ");
    //     let EBESA4 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM04.Energy Module Voltage reading"));
    //     console.log("EBESA4", EBESA4);
    //     expect.soft(EBESA4).not.toBe(" ");
    //     let EBESA5 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM05.Energy Module Voltage reading"));
    //     console.log("EBESA5", EBESA5);
    //     expect.soft(EBESA5).not.toBe(" ");
    //     let EBESA6 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM06.Energy Module Voltage reading"));
    //     console.log("EBESA6", EBESA6);
    //     expect.soft(EBESA6).not.toBe(" ");

    //     let EBESB1 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM07.Energy Module Voltage reading"));
    //     console.log("EBESB1", EBESB1);
    //     expect.soft(EBESB1).not.toBe(" ");
    //     let EBESB2 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM08.Energy Module Voltage reading"));
    //     console.log("EBESB2", EBESB2);
    //     expect.soft(EBESB2).not.toBe(" ");
    //     let EBESB3 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM09.Energy Module Voltage reading"));
    //     console.log("EBESB3", EBESB3);
    //     expect.soft(EBESB3).not.toBe(" ");
    //     let EBESB4 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM10.Energy Module Voltage reading"));
    //     console.log("EBESB4", EBESB4);
    //     expect.soft(EBESB4).not.toBe(" ");
    //     let EBESB5 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM11.Energy Module Voltage reading"));
    //     console.log("EBESB5", EBESB5);
    //     expect.soft(EBESB5).not.toBe(" ");
    //     let EBESB6 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM12.Energy Module Voltage reading"));
    //     console.log("EBESB6", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     let EBESEM6 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4.Energy String Current"));
    //     console.log("EString Current", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     for (let i = 0; i < 10; i++) {
    //         await this.page.keyboard.press('ArrowDown');
    //     }
    // }
    // async DailyperformanceSummaryValues17() {
    //     console.log("Energy Module VoltageEB03|ESB5");
    //     let EBESA1 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM01.Energy Module Voltage reading"));
    //     console.log("EBESA1", EBESA1);
    //     expect.soft(EBESA1).not.toBe(" ");
    //     let EBESA2 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM02.Energy Module Voltage reading"));
    //     console.log("EBESA2", EBESA2);
    //     expect.soft(EBESA2).not.toBe(" ");
    //     let EBESA3 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM03.Energy Module Voltage reading"));
    //     console.log("EBESA3", EBESA3);
    //     expect.soft(EBESA3).not.toBe(" ");
    //     let EBESA4 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM04.Energy Module Voltage reading"));
    //     console.log("EBESA4", EBESA4);
    //     expect.soft(EBESA4).not.toBe(" ");
    //     let EBESA5 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM05.Energy Module Voltage reading"));
    //     console.log("EBESA5", EBESA5);
    //     expect.soft(EBESA5).not.toBe(" ");
    //     let EBESA6 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM06.Energy Module Voltage reading"));
    //     console.log("EBESA6", EBESA6);
    //     expect.soft(EBESA6).not.toBe(" ");

    //     let EBESB1 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM07.Energy Module Voltage reading"));
    //     console.log("EBESB1", EBESB1);
    //     expect.soft(EBESB1).not.toBe(" ");
    //     let EBESB2 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM08.Energy Module Voltage reading"));
    //     console.log("EBESB2", EBESB2);
    //     expect.soft(EBESB2).not.toBe(" ");
    //     let EBESB3 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM09.Energy Module Voltage reading"));
    //     console.log("EBESB3", EBESB3);
    //     expect.soft(EBESB3).not.toBe(" ");
    //     let EBESB4 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM10.Energy Module Voltage reading"));
    //     console.log("EBESB4", EBESB4);
    //     expect.soft(EBESB4).not.toBe(" ");
    //     let EBESB5 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM11.Energy Module Voltage reading"));
    //     console.log("EBESB5", EBESB5);
    //     expect.soft(EBESB5).not.toBe(" ");
    //     let EBESB6 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM12.Energy Module Voltage reading"));
    //     console.log("EBESB6", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     let EBESEM6 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5.Energy String Current"));
    //     console.log("EString Current", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     for (let i = 0; i < 10; i++) {
    //         await this.page.keyboard.press('ArrowDown');
    //     }
    // }
    // async DailyperformanceSummaryValues18() {
    //     console.log("Energy Module VoltageEB03|ESB6");
    //     let EBESA1 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM01.Energy Module Voltage reading"));
    //     console.log("EBESA1", EBESA1);
    //     expect.soft(EBESA1).not.toBe(" ");
    //     let EBESA2 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM02.Energy Module Voltage reading"));
    //     console.log("EBESA2", EBESA2);
    //     expect.soft(EBESA2).not.toBe(" ");
    //     let EBESA3 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM03.Energy Module Voltage reading"));
    //     console.log("EBESA3", EBESA3);
    //     expect.soft(EBESA3).not.toBe(" ");
    //     let EBESA4 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM04.Energy Module Voltage reading"));
    //     console.log("EBESA4", EBESA4);
    //     expect.soft(EBESA4).not.toBe(" ");
    //     let EBESA5 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM05.Energy Module Voltage reading"));
    //     console.log("EBESA5", EBESA5);
    //     expect.soft(EBESA5).not.toBe(" ");
    //     let EBESA6 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM06.Energy Module Voltage reading"));
    //     console.log("EBESA6", EBESA6);
    //     expect.soft(EBESA6).not.toBe(" ");

    //     let EBESB1 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM07.Energy Module Voltage reading"));
    //     console.log("EBESB1", EBESB1);
    //     expect.soft(EBESB1).not.toBe(" ");
    //     let EBESB2 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM08.Energy Module Voltage reading"));
    //     console.log("EBESB2", EBESB2);
    //     expect.soft(EBESB2).not.toBe(" ");
    //     let EBESB3 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM09.Energy Module Voltage reading"));
    //     console.log("EBESB3", EBESB3);
    //     expect.soft(EBESB3).not.toBe(" ");
    //     let EBESB4 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM10.Energy Module Voltage reading"));
    //     console.log("EBESB4", EBESB4);
    //     expect.soft(EBESB4).not.toBe(" ");
    //     let EBESB5 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM11.Energy Module Voltage reading"));
    //     console.log("EBESB5", EBESB5);
    //     expect.soft(EBESB5).not.toBe(" ");
    //     let EBESB6 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM12.Energy Module Voltage reading"));
    //     console.log("EBESB6", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     let EBESEM6 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6.Energy String Current"));
    //     console.log("EString Current", EBESB6);
    //     expect.soft(EBESB6).not.toBe(" ");
    //     for (let i = 0; i < 10; i++) {
    //         await this.page.keyboard.press('ArrowDown');
    //     }
    // }


    // async Dailyperformancegraphheading(locator: string) {

    //     await webactions.waitForElementAttached(locator);
    //     let grhed = this.page.locator(locator);
    //     expect.soft(grhed).toBeVisible();
    // };

    // async CheckTable1IsPrescent(name: string) {
    //     await webactions.waitForElementAttached(this.Table1);
    //     await this.page.locator(this.Table1).highlight();
    //     await this.page.locator(this.table1Cell1).hover();
    //     await webactions.delay(2000);
    //     let tblcell = await this.page.textContent(this.table1Cell1);
    //     expect.soft(tblcell).toContain(name);
    //     console.log("Table1cell1", tblcell);

    // }
    // async CheckTable2IsPrescent(name: string) {
    //     await webactions.waitForElementAttached(this.table2Cell1);
    //     await webactions.delay(2000);
    //     let tblcell = await this.page.textContent(this.table2Cell1);
    //     expect.soft(tblcell).toContain(name);
    //     console.log("Table2cell1", tblcell);

    // }
    // async AddQFFilter() {
    //     await webactions.clickElement(this.weakmoduleQFFilter);
    // }
    // async CheckWeakModulegraphVisibility(locator: string) {

    //     await webactions.waitForElementAttached(locator);
    //     let wmgrhed = this.page.locator(locator);
    //     expect.soft(wmgrhed).toBeVisible();
    // }
    // async TakeGraphValue() {
    //     await this.page.locator(`//div//*[@class="layer-below"]//*[@class="shapelayer"]//*[@data-index="20"]`).hover({ force: true });
    //     let Statecharge = await this.page.textContent(`//div//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="name" and text()="State Of Cha..."]//following-sibling::*[@class="nums"]`);
    //     console.log("State of Charge", Statecharge);
    //     let energrBCurrent = await this.page.textContent(`//div//*[@class="hoverlayer"]//*[@class="hovertext"][1]//*[@class="name" and text()="Energy Block..."]//following-sibling::*[@class="nums"]`);
    //     console.log("Energy Block Current", energrBCurrent);
    //     let energrBVoltage = await this.page.textContent(`//div//*[@class="hoverlayer"]//*[@class="hovertext"][2]//*[@class="name" and text()="Energy Block..."]//following-sibling::*[@class="nums"]`);
    //     console.log("Energy Block Voltage", energrBVoltage);


    // }

    // async Cycletrend() {
    //     await this.CheckWeakModulegraphVisibility(this.GraphCycletrend);
    // }
    // async CycleperformanceStatistics() {
    //     await this.CheckWeakModulegraphVisibility(this.Cycleperformance);
    // }
    // async energyModuleMatrix1() {
    //     await this.CheckWeakModulegraphVisibility(this.EnergyModule2);
    // }
    // async energyModuleMatrix2() {
    //     await this.CheckWeakModulegraphVisibility(this.EnergyModule1);
    // }
    // async CumulativeChargeandDischarge() {
    //     await this.CheckWeakModulegraphVisibility(this.cumulativeEnergy);
    // }
    // async CumulativeCycleCount() {
    //     await this.CheckWeakModulegraphVisibility(this.cumulativeCyclecount);
    // }
    // async ChargeEnergyDischargeEnergy() {
    //     await this.CheckWeakModulegraphVisibility(this.chargeenergydischargeefficiency);
    // }
    // async RoundTripEfficiencyoverTemperature() {
    //     await this.CheckWeakModulegraphVisibility(this.roundTripEfficiency);
    // }











    //EOSE

    async ClickOnEOSEButton() {
        await webactions.waitForElementAttached(this.EoseBtn);
        await webactions.clickElement(this.EoseBtn);

    }
    async ChecktheRowforAccount(name: string) {
        let acrow = this.page.locator(this.rowcheck);
        await webactions.delay(2000);
        expect.soft(acrow).toContainText(name);
        await webactions.clickElement(this.rowcheck);
        await webactions.delay(2000);
    }

    async filterfromcolumn(idname: string, name: string) {


        await webactions.clickElement(this.sortingfromcolumn(idname));
        await webactions.clickElement(this.buttonsforsorting("filter"));
        //await webactions.delay(4000);
        let searchtxt = `//div[@class="ag-filter-body"]//div[@ref="eValue1"]//input`;
        await this.page.fill(searchtxt, name);
        //await webactions.delay(2000);
        await webactions.clickElement(this.buttonsforsorting("filter"));
        await webactions.delay(2000);
    }

    async AddProject() {
        await webactions.waitForElementAttached(this.ProjectEOSE);
        await webactions.clickElement(this.ProjectEOSE);
    }
    async ClickOnSearchButton() {
        await webactions.waitForElementAttached(this.SearchBtnEOSE);
        await webactions.clickElement(this.SearchBtnEOSE);
    }
    async SelectDropdownvalue(name: string) {
        await webactions.waitForElementAttached(this.dropdown(name));
        await webactions.clickElement(this.dropdown(name));
    }
    async AddEnergyGroupName() {
        await webactions.waitForElementAttached(this.EnergyGroupName);
        await webactions.clickElement(this.EnergyGroupName);
    }
    async AddDate(date: string) {
        await webactions.clickElement(this.StartDate);
        await dateObj.SelectDate(date);
    }
    async CheckforPrethos() {
        await webactions.waitForElementAttached(this.prethosdropdown);
        let pre = this.page.locator(this.prethosdropdown);
        expect.soft(pre).toBeVisible();
        await webactions.clickElement(this.prethosdropdown);

    }
    async CheckdailyCyclegraphVisibility(label: string) {

        await webactions.waitForElementAttached(this.DailyCyclegraphheading);
        let grhd = this.page.locator(this.DailyCyclegraphheading);
        expect.soft(grhd).toBeVisible();

        await this.page.locator(`//div[@class="svg-container"]//*[@class="xy"]//*[@class="nsewdrag drag"]`).highlight();
        await this.page.locator(`//div[@class="svg-container"]//*[@class="gridlayer"]//*[@class="x"]`).highlight();
        await this.page.locator(this.dailycyclelatvalue(label)).highlight();
        await this.page.locator(this.dailycyclelatvalue(label)).hover({ force: true });
        await webactions.delay(2000);
        let stcharge = await this.page.textContent(this.dailycyclestatusstateOfCharge);
        console.log("State of Charge :- ", stcharge);
        expect.soft(stcharge).not.toBe(" ");
        let energyBC = await this.page.textContent(this.dailycyclestatusEnergyBlockCurrent);
        console.log("Energy Block Current :- ", energyBC);
        expect.soft(energyBC).not.toBe(" ");
        let energyBV = await this.page.textContent(this.dailycyclestatusEnergyBlockVoltage);
        console.log("Energy Block Voltage :- ", energyBV);
        expect.soft(energyBV).not.toBe(" ");


    }

    async StringCurrentgraphVisibility() {
        await this.Dailyperformancegraphheading(this.StringCurrent);

    }
    async StringVoltagegraphVisibility() {
        await this.Dailyperformancegraphheading(this.graphstringVoltage);

    }
    async ModuleVoltagegraphVisibility() {
        await this.Dailyperformancegraphheading(this.graphModuleVoltage);

    }
    async ModuleTemperaturegraphVisibility() {
        await this.Dailyperformancegraphheading(this.graphModuleTemperature);

    }
    async StringSocgraphVisibility() {
        await this.Dailyperformancegraphheading(this.graphStringSocs);

    }
    async ModuleSocgraphVisibility() {
        await this.Dailyperformancegraphheading(this.graphModuleSoc);

    }
    async ModuleVStringIA1graphVisibility() {
        await this.Dailyperformancegraphheading(this.graphModuleVStringIA1);

    }
    async ModuleVStringIA2graphVisibility() {
        await this.Dailyperformancegraphheading(this.graphModuleVStringIA2);

    }
    async ModuleVStringIA3graphVisibility() {
        await this.Dailyperformancegraphheading(this.graphModuleVStringIA3);

    }
    async ModuleVStringIA4graphVisibility() {
        await this.Dailyperformancegraphheading(this.graphModuleVStringIA4);

    }
    async ModuleVStringIA5graphVisibility() {
        await this.Dailyperformancegraphheading(this.graphModuleVStringIA5);

    }
    async ModuleVStringIA6graphVisibility() {
        await this.Dailyperformancegraphheading(this.graphModuleVStringIA6);

    }
    async ModuleVStringIB1graphVisibility() {
        await this.Dailyperformancegraphheading(this.graphModuleVStringIB1);

    }
    async ModuleVStringIB2graphVisibility() {
        await this.Dailyperformancegraphheading(this.graphModuleVStringIB2);

    }
    async ModuleVStringIB3graphVisibility() {
        await this.Dailyperformancegraphheading(this.graphModuleVStringIB3);

    }
    async ModuleVStringIB4graphVisibility() {
        await this.Dailyperformancegraphheading(this.graphModuleVStringIB4);

    }
    async ModuleVStringIB5graphVisibility() {
        await this.Dailyperformancegraphheading(this.graphModuleVStringIB5);

    }
    async ModuleVStringIB6graphVisibility() {
        await this.Dailyperformancegraphheading(this.graphModuleVStringIB6);

    }
    async TablegraphVisibility() {
        await this.Dailyperformancegraphheading(this.tableTimetoDrop);
        let tDmodule1 = await this.page.textContent(this.timetodropmodule1);
        console.log("EM01 Time to Drop :- ", tDmodule1);
        expect.soft(tDmodule1).not.toBe(" ");

    }
    async HeatMapVisibility() {
        await this.Dailyperformancegraphheading(this.heatmapofVoltage);
        let heatmap0 = await this.page.textContent(this.heatmapvalue);
        console.log("Heatmap 0th value :- ", heatmap0);
        expect.soft(heatmap0).not.toBe(" ");

        // let width=await this.page.locator(`//div[@id="plotly-graph-20"]//*[@class="main-svg"][1]`);
        // let widthvalue=await width.getAttribute('width');
        // console.log("width",widthvalue);
        // let widthoriginal=parseInt(widthvalue);
        // expect.soft(widthoriginal).toBeGreaterThan(1500);

    }
    async TotalEnergyDischargevalueVisibility() {
        await this.Dailyperformancegraphheading(this.TotalEnergyDischarge);

    }


    async TotalEnergyDischargevalue() {
        await webactions.delay(2000);
        let tedv = await this.page.textContent(this.totalEnergydischargevalue);
        console.log("Total Energy :- ", tedv);
        expect.soft(tedv).not.toBe(" ");



    }

    async DailyperformanceGraphValues(id: string) {
        await webactions.clickElement(this.zoomout(id));
        //await webactions.clickElement(`//div[@id="plotly-graph-1"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom out"]`);
        await webactions.delay(2000);
        await webactions.clickElement(this.Comparewithhover(id));
        let x = 1;

        let linearray = [];
        let lx = 0;
        let xlines = await this.page.locator(`//div[@id="${id}"]//*[@class="main-svg"]//*[@class="cartesianlayer"]//*[@class="gridlayer"]//*[@class="x"]//*[name()='path']`);
        let xlinescountvalue = await xlines.count();
        console.log("Count :- ", xlinescountvalue);
        for (x = 1; x <= xlinescountvalue; x++) {
            await this.page.locator(`//div[@id="${id}"]//*[@class="main-svg"]//*[@class="cartesianlayer"]//*[@class="gridlayer"]//*[@class="x"]//*[name()='path'][${x}]`).hover({ force: true });
            await webactions.delay(2000);
            if (await this.page.locator(`//div[@id="${id}"]//*[@class="main-svg"]//*[@class="hoverlayer"]//*[name()='g' and @class="hovertext"][1]`).isVisible()) {
                linearray[lx] = x;
                lx = lx + 1;
            }
        }
        lx = lx - 1;
        let line = linearray[lx];
        console.log("Xlines :- ", line);
        await this.page.locator(`//div[@id="${id}"]//*[@class="main-svg"]//*[@class="cartesianlayer"]//*[@class="gridlayer"]//*[@class="x"]//*[name()='path'][${line}]`).hover({ force: true });
        // await webactions.delay(2000);
        let tltipvalues = await this.page.locator(`//div[@id="${id}"]//*[@class="main-svg"]//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="nums"]//*[name()='tspan'][1]`);
        let tltipvaluescountvalue = await xlines.count();
        console.log("tooltipcount :- ", tltipvaluescountvalue);
        for (x = 1; x <= tltipvaluescountvalue; x++) {
            let EBESA = await this.page.textContent(`//div[@id="${id}"]//*[@class="hoverlayer"]//*[@class="hovertext"][${x}]//*[@class="nums"]//*[name()='tspan'][1]`);
            console.log("EBESA :- ", x, EBESA);
            expect.soft(EBESA).not.toBe(" ");
        }
    }
    async DailyperformanceSummaryValues1() {
        console.log("String Current");
        let EBESA1 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESA1.Energy String Current"));
        console.log("EBESA1 :- ", EBESA1);
        expect.soft(EBESA1).not.toBe(" ");
        let EBESA2 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESA2.Energy String Current"));
        console.log("EBESA2 :- ", EBESA2);
        expect.soft(EBESA2).not.toBe(" ");
        let EBESA3 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESA3.Energy String Current"));
        console.log("EBESA3 :- ", EBESA3);
        expect.soft(EBESA3).not.toBe(" ");
        let EBESA4 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESA4.Energy String Current"));
        console.log("EBESA4 :- ", EBESA4);
        expect.soft(EBESA4).not.toBe(" ");
        let EBESA5 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESA5.Energy String Current"));
        console.log("EBESA5 :- ", EBESA5);
        expect.soft(EBESA5).not.toBe(" ");
        let EBESA6 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESA6.Energy String Current"));
        console.log("EBESA6 :- ", EBESA6);
        expect.soft(EBESA6).not.toBe(" ");
        let ESi = await this.page.textContent(this.dailyperformancevalues1("ESi Average"));
        console.log("ESi :- ", ESi);
        expect.soft(ESi).not.toBe(" ");
        let EBESB1 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESB1.Energy String Current"));
        console.log("EBESB1 :- ", EBESB1);
        expect.soft(EBESB1).not.toBe(" ");
        let EBESB2 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESB2.Energy String Current"));
        console.log("EBESB2 :- ", EBESB2);
        expect.soft(EBESB2).not.toBe(" ");
        let EBESB3 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESB3.Energy String Current"));
        console.log("EBESB3 :- ", EBESB3);
        expect.soft(EBESB3).not.toBe(" ");
        let EBESB4 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESB4.Energy String Current"));
        console.log("EBESB4 :- ", EBESB4);
        expect.soft(EBESB4).not.toBe(" ");
        let EBESB5 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESB5.Energy String Current"));
        console.log("EBESB5 :- ", EBESB5);
        expect.soft(EBESB5).not.toBe(" ");
        let EBESB6 = await this.page.textContent(this.dailyperformancevalues1("EB03|ESB6.Energy String Current"));
        console.log("EBESB6 :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        await this.page.keyboard.press('ArrowDown');

    }
    async DailyperformanceSummaryValues2() {
        console.log("String Voltage");
        let EBESA1 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESA1.Energy String Voltage"));
        console.log("EBESA1 :- ", EBESA1);
        expect.soft(EBESA1).not.toBe(" ");
        let EBESA2 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESA2.Energy String Voltage"));
        console.log("EBESA2 :- ", EBESA2);
        expect.soft(EBESA2).not.toBe(" ");
        let EBESA3 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESA3.Energy String Voltage"));
        console.log("EBESA3 :- ", EBESA3);
        expect.soft(EBESA3).not.toBe(" ");
        let EBESA4 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESA4.Energy String Voltage"));
        console.log("EBESA4 :- ", EBESA4);
        expect.soft(EBESA4).not.toBe(" ");
        let EBESA5 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESA5.Energy String Voltage"));
        console.log("EBESA5 :- ", EBESA5);
        expect.soft(EBESA5).not.toBe(" ");
        let EBESA6 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESA6.Energy String Voltage"));
        console.log("EBESA6 :- ", EBESA6);
        expect.soft(EBESA6).not.toBe(" ");

        let EBESB1 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESB1.Energy String Voltage"));
        console.log("EBESB1 :- ", EBESB1);
        expect.soft(EBESB1).not.toBe(" ");
        let EBESB2 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESB2.Energy String Voltage"));
        console.log("EBESB2 :- ", EBESB2);
        expect.soft(EBESB2).not.toBe(" ");
        let EBESB3 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESB3.Energy String Voltage"));
        console.log("EBESB3 :- ", EBESB3);
        expect.soft(EBESB3).not.toBe(" ");
        let EBESB4 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESB4.Energy String Voltage"));
        console.log("EBESB4 :- ", EBESB4);
        expect.soft(EBESB4).not.toBe(" ");
        let EBESB5 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESB5.Energy String Voltage"));
        console.log("EBESB5 :- ", EBESB5);
        expect.soft(EBESB5).not.toBe(" ");
        let EBESB6 = await this.page.textContent(this.dailyperformancevalues2("EB03|ESB6.Energy String Voltage"));
        console.log("EBESB6 :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        for (let i = 0; i < 10; i++) {
            await this.page.keyboard.press('ArrowDown');
        }
    }

    async DailyperformanceSummaryValues3() {
        console.log("Energy Module Voltage");
        let EBESA1 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESB4|EM07.Energy Module Voltage reading"));
        console.log("EBESA1 :- ", EBESA1);
        expect.soft(EBESA1).not.toBe(" ");
        let EBESA2 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESB1|EM07.Energy Module Voltage reading"));
        console.log("EBESA2 :- ", EBESA2);
        expect.soft(EBESA2).not.toBe(" ");
        let EBESA3 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESB1|EM04.Energy Module Voltage reading"));
        console.log("EBESA3 :- ", EBESA3);
        expect.soft(EBESA3).not.toBe(" ");
        let EBESA4 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESB6|EM12.Energy Module Voltage reading"));
        console.log("EBESA4 :- ", EBESA4);
        expect.soft(EBESA4).not.toBe(" ");
        let EBESA5 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESB1|EM12.Energy Module Voltage reading"));
        console.log("EBESA5 :- ", EBESA5);
        expect.soft(EBESA5).not.toBe(" ");
        let EBESA6 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESA2|EM03.Energy Module Voltage reading"));
        console.log("EBESA6 :- ", EBESA6);
        expect.soft(EBESA6).not.toBe(" ");

        let EBESB1 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESA2|EM01.Energy Module Voltage reading"));
        console.log("EBESB1 :- ", EBESB1);
        expect.soft(EBESB1).not.toBe(" ");
        let EBESB2 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESB4|EM06.Energy Module Voltage reading"));
        console.log("EBESB2 :- ", EBESB2);
        expect.soft(EBESB2).not.toBe(" ");
        let EBESB3 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESA2|EM10.Energy Module Voltage reading"));
        console.log("EBESB3 :- ", EBESB3);
        expect.soft(EBESB3).not.toBe(" ");
        let EBESB4 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESA2|EM05.Energy Module Voltage reading"));
        console.log("EBESB4 :- ", EBESB4);
        expect.soft(EBESB4).not.toBe(" ");
        let EBESB5 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESB4|EM12.Energy Module Voltage reading"));
        console.log("EBESB5 :- ", EBESB5);
        expect.soft(EBESB5).not.toBe(" ");
        let EBESB6 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESA2|EM06.Energy Module Voltage reading"));
        console.log("EBESB6 :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        let EBESEM6 = await this.page.textContent(this.dailyperformancevalues3("EB03|ESA2|EM04.Energy Module Voltage reading"));
        console.log("EBESB6 :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        for (let i = 0; i < 10; i++) {
            await this.page.keyboard.press('ArrowDown');
        }
    }

    async DailyperformanceSummaryValues5() {
        console.log("State of Charge");
        let EBESA1 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESA1.State Of Charge"));
        console.log("EBESA1 :- ", EBESA1);
        expect.soft(EBESA1).not.toBe(" ");
        let EBESA2 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESA2.State Of Charge"));
        console.log("EBESA2 :- ", EBESA2);
        expect.soft(EBESA2).not.toBe(" ");
        let EBESA3 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESA3.State Of Charge"));
        console.log("EBESA3 :- ", EBESA3);
        expect.soft(EBESA3).not.toBe(" ");
        let EBESA4 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESA4.State Of Charge"));
        console.log("EBESA4 :- ", EBESA4);
        expect.soft(EBESA4).not.toBe(" ");
        let EBESA5 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESA5.State Of Charge"));
        console.log("EBESA5 :- ", EBESA5);
        expect.soft(EBESA5).not.toBe(" ");
        let EBESA6 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESA6.State Of Charge"));
        console.log("EBESA6 :- ", EBESA6);
        expect.soft(EBESA6).not.toBe(" ");

        let EBESB1 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESB1.State Of Charge"));
        console.log("EBESB1 :- ", EBESB1);
        expect.soft(EBESB1).not.toBe(" ");
        let EBESB2 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESB2.State Of Charge"));
        console.log("EBESB2 :- ", EBESB2);
        expect.soft(EBESB2).not.toBe(" ");
        let EBESB3 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESB3.State Of Charge"));
        console.log("EBESB3 :- ", EBESB3);
        expect.soft(EBESB3).not.toBe(" ");
        let EBESB4 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESB4.State Of Charge"));
        console.log("EBESB4 :- ", EBESB4);
        expect.soft(EBESB4).not.toBe(" ");
        let EBESB5 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESB5.State Of Charge"));
        console.log("EBESB5 :- ", EBESB5);
        expect.soft(EBESB5).not.toBe(" ");
        let EBESB6 = await this.page.textContent(this.dailyperformancevalues5("EB03|ESB6.State Of Charge"));
        console.log("EBESB6 :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        for (let i = 0; i < 10; i++) {
            await this.page.keyboard.press('ArrowDown');
        }
    }

    async DailyperformanceSummaryValues7() {
        console.log("Energy Module VoltageEB03|ESA1");
        let EBESA1 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM01.Energy Module Voltage reading"));
        console.log("EBESA1 :- ", EBESA1);
        expect.soft(EBESA1).not.toBe(" ");
        let EBESA2 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM02.Energy Module Voltage reading"));
        console.log("EBESA2 :- ", EBESA2);
        expect.soft(EBESA2).not.toBe(" ");
        let EBESA3 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM03.Energy Module Voltage reading"));
        console.log("EBESA3 :- ", EBESA3);
        expect.soft(EBESA3).not.toBe(" ");
        let EBESA4 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM04.Energy Module Voltage reading"));
        console.log("EBESA4 :- ", EBESA4);
        expect.soft(EBESA4).not.toBe(" ");
        let EBESA5 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM05.Energy Module Voltage reading"));
        console.log("EBESA5 :- ", EBESA5);
        expect.soft(EBESA5).not.toBe(" ");
        let EBESA6 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM06.Energy Module Voltage reading"));
        console.log("EBESA6 :- ", EBESA6);
        expect.soft(EBESA6).not.toBe(" ");

        let EBESB1 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM07.Energy Module Voltage reading"));
        console.log("EBESB1 :- ", EBESB1);
        expect.soft(EBESB1).not.toBe(" ");
        let EBESB2 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM08.Energy Module Voltage reading"));
        console.log("EBESB2 :- ", EBESB2);
        expect.soft(EBESB2).not.toBe(" ");
        let EBESB3 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM09.Energy Module Voltage reading"));
        console.log("EBESB3 :- ", EBESB3);
        expect.soft(EBESB3).not.toBe(" ");
        let EBESB4 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM10.Energy Module Voltage reading"));
        console.log("EBESB4 :- ", EBESB4);
        expect.soft(EBESB4).not.toBe(" ");
        let EBESB5 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM11.Energy Module Voltage reading"));
        console.log("EBESB5 :- ", EBESB5);
        expect.soft(EBESB5).not.toBe(" ");
        let EBESB6 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1|EM12.Energy Module Voltage reading"));
        console.log("EBESB6 :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        let EBESEM6 = await this.page.textContent(this.dailyperformancevalues7("EB03|ESA1.Energy String Current"));
        console.log("EString Current :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        for (let i = 0; i < 10; i++) {
            await this.page.keyboard.press('ArrowDown');
        }
    }
    async DailyperformanceSummaryValues8() {
        console.log("Energy Module VoltageEB03|ESA2");
        let EBESA1 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM01.Energy Module Voltage reading"));
        console.log("EBESA1 :- ", EBESA1);
        expect.soft(EBESA1).not.toBe(" ");
        let EBESA2 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM02.Energy Module Voltage reading"));
        console.log("EBESA2 :- ", EBESA2);
        expect.soft(EBESA2).not.toBe(" ");
        let EBESA3 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM03.Energy Module Voltage reading"));
        console.log("EBESA3 :- ", EBESA3);
        expect.soft(EBESA3).not.toBe(" ");
        let EBESA4 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM04.Energy Module Voltage reading"));
        console.log("EBESA4 :- ", EBESA4);
        expect.soft(EBESA4).not.toBe(" ");
        let EBESA5 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM05.Energy Module Voltage reading"));
        console.log("EBESA5 :- ", EBESA5);
        expect.soft(EBESA5).not.toBe(" ");
        let EBESA6 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM06.Energy Module Voltage reading"));
        console.log("EBESA6 :- ", EBESA6);
        expect.soft(EBESA6).not.toBe(" ");

        let EBESB1 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM07.Energy Module Voltage reading"));
        console.log("EBESB1 :- ", EBESB1);
        expect.soft(EBESB1).not.toBe(" ");
        let EBESB2 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM08.Energy Module Voltage reading"));
        console.log("EBESB2 :- ", EBESB2);
        expect.soft(EBESB2).not.toBe(" ");
        let EBESB3 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM09.Energy Module Voltage reading"));
        console.log("EBESB3 :- ", EBESB3);
        expect.soft(EBESB3).not.toBe(" ");
        let EBESB4 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM10.Energy Module Voltage reading"));
        console.log("EBESB4 :- ", EBESB4);
        expect.soft(EBESB4).not.toBe(" ");
        let EBESB5 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM11.Energy Module Voltage reading"));
        console.log("EBESB5 :- ", EBESB5);
        expect.soft(EBESB5).not.toBe(" ");
        let EBESB6 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2|EM12.Energy Module Voltage reading"));
        console.log("EBESB6 :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        let EBESEM6 = await this.page.textContent(this.dailyperformancevalues8("EB03|ESA2.Energy String Current"));
        console.log("EString Current :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        for (let i = 0; i < 10; i++) {
            await this.page.keyboard.press('ArrowDown');
        }
    }
    async DailyperformanceSummaryValues9() {
        console.log("Energy Module VoltageEB03|ESA3");
        let EBESA1 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM01.Energy Module Voltage reading"));
        console.log("EBESA1 :- ", EBESA1);
        expect.soft(EBESA1).not.toBe(" ");
        let EBESA2 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM02.Energy Module Voltage reading"));
        console.log("EBESA2 :- ", EBESA2);
        expect.soft(EBESA2).not.toBe(" ");
        let EBESA3 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM03.Energy Module Voltage reading"));
        console.log("EBESA3 :- ", EBESA3);
        expect.soft(EBESA3).not.toBe(" ");
        let EBESA4 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM04.Energy Module Voltage reading"));
        console.log("EBESA4 :- ", EBESA4);
        expect.soft(EBESA4).not.toBe(" ");
        let EBESA5 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM05.Energy Module Voltage reading"));
        console.log("EBESA5 :- ", EBESA5);
        expect.soft(EBESA5).not.toBe(" ");
        let EBESA6 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM06.Energy Module Voltage reading"));
        console.log("EBESA6 :- ", EBESA6);
        expect.soft(EBESA6).not.toBe(" ");

        let EBESB1 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM07.Energy Module Voltage reading"));
        console.log("EBESB1 :- ", EBESB1);
        expect.soft(EBESB1).not.toBe(" ");
        let EBESB2 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM08.Energy Module Voltage reading"));
        console.log("EBESB2 :- ", EBESB2);
        expect.soft(EBESB2).not.toBe(" ");
        let EBESB3 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM09.Energy Module Voltage reading"));
        console.log("EBESB3 :- ", EBESB3);
        expect.soft(EBESB3).not.toBe(" ");
        let EBESB4 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM10.Energy Module Voltage reading"));
        console.log("EBESB4 :- ", EBESB4);
        expect.soft(EBESB4).not.toBe(" ");
        let EBESB5 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM11.Energy Module Voltage reading"));
        console.log("EBESB5 :- ", EBESB5);
        expect.soft(EBESB5).not.toBe(" ");
        let EBESB6 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3|EM12.Energy Module Voltage reading"));
        console.log("EBESB6 :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        let EBESEM6 = await this.page.textContent(this.dailyperformancevalues9("EB03|ESA3.Energy String Current"));
        console.log("EString Current :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        for (let i = 0; i < 10; i++) {
            await this.page.keyboard.press('ArrowDown');
        }
    }
    async DailyperformanceSummaryValues10() {
        console.log("Energy Module VoltageEB03|ESA4");
        let EBESA1 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM01.Energy Module Voltage reading"));
        console.log("EBESA1 :- ", EBESA1);
        expect.soft(EBESA1).not.toBe(" ");
        let EBESA2 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM02.Energy Module Voltage reading"));
        console.log("EBESA2 :- ", EBESA2);
        expect.soft(EBESA2).not.toBe(" ");
        let EBESA3 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM03.Energy Module Voltage reading"));
        console.log("EBESA3 :- ", EBESA3);
        expect.soft(EBESA3).not.toBe(" ");
        let EBESA4 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM04.Energy Module Voltage reading"));
        console.log("EBESA4 :- ", EBESA4);
        expect.soft(EBESA4).not.toBe(" ");
        let EBESA5 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM05.Energy Module Voltage reading"));
        console.log("EBESA5 :- ", EBESA5);
        expect.soft(EBESA5).not.toBe(" ");
        let EBESA6 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM06.Energy Module Voltage reading"));
        console.log("EBESA6 :- ", EBESA6);
        expect.soft(EBESA6).not.toBe(" ");

        let EBESB1 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM07.Energy Module Voltage reading"));
        console.log("EBESB1 :- ", EBESB1);
        expect.soft(EBESB1).not.toBe(" ");
        let EBESB2 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM08.Energy Module Voltage reading"));
        console.log("EBESB2 :- ", EBESB2);
        expect.soft(EBESB2).not.toBe(" ");
        let EBESB3 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM09.Energy Module Voltage reading"));
        console.log("EBESB3 :- ", EBESB3);
        expect.soft(EBESB3).not.toBe(" ");
        let EBESB4 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM10.Energy Module Voltage reading"));
        console.log("EBESB4 :- ", EBESB4);
        expect.soft(EBESB4).not.toBe(" ");
        let EBESB5 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM11.Energy Module Voltage reading"));
        console.log("EBESB5 :- ", EBESB5);
        expect.soft(EBESB5).not.toBe(" ");
        let EBESB6 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4|EM12.Energy Module Voltage reading"));
        console.log("EBESB6 :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        let EBESEM6 = await this.page.textContent(this.dailyperformancevalues10("EB03|ESA4.Energy String Current"));
        console.log("EString Current :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        for (let i = 0; i < 10; i++) {
            await this.page.keyboard.press('ArrowDown');
        }
    }
    async DailyperformanceSummaryValues11() {
        console.log("Energy Module VoltageEB03|ESA5");
        let EBESA1 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM01.Energy Module Voltage reading"));
        console.log("EBESA1 :- ", EBESA1);
        expect.soft(EBESA1).not.toBe(" ");
        let EBESA2 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM02.Energy Module Voltage reading"));
        console.log("EBESA2 :- ", EBESA2);
        expect.soft(EBESA2).not.toBe(" ");
        let EBESA3 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM03.Energy Module Voltage reading"));
        console.log("EBESA3 :- ", EBESA3);
        expect.soft(EBESA3).not.toBe(" ");
        let EBESA4 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM04.Energy Module Voltage reading"));
        console.log("EBESA4 :- ", EBESA4);
        expect.soft(EBESA4).not.toBe(" ");
        let EBESA5 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM05.Energy Module Voltage reading"));
        console.log("EBESA5 :- ", EBESA5);
        expect.soft(EBESA5).not.toBe(" ");
        let EBESA6 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM06.Energy Module Voltage reading"));
        console.log("EBESA6 :- ", EBESA6);
        expect.soft(EBESA6).not.toBe(" ");

        let EBESB1 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM07.Energy Module Voltage reading"));
        console.log("EBESB1 :- ", EBESB1);
        expect.soft(EBESB1).not.toBe(" ");
        let EBESB2 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM08.Energy Module Voltage reading"));
        console.log("EBESB2 :- ", EBESB2);
        expect.soft(EBESB2).not.toBe(" ");
        let EBESB3 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM09.Energy Module Voltage reading"));
        console.log("EBESB3 :- ", EBESB3);
        expect.soft(EBESB3).not.toBe(" ");
        let EBESB4 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM10.Energy Module Voltage reading"));
        console.log("EBESB4 :- ", EBESB4);
        expect.soft(EBESB4).not.toBe(" ");
        let EBESB5 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM11.Energy Module Voltage reading"));
        console.log("EBESB5 :- ", EBESB5);
        expect.soft(EBESB5).not.toBe(" ");
        let EBESB6 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5|EM12.Energy Module Voltage reading"));
        console.log("EBESB6 :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        let EBESEM6 = await this.page.textContent(this.dailyperformancevalues11("EB03|ESA5.Energy String Current"));
        console.log("EString Current :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        for (let i = 0; i < 10; i++) {
            await this.page.keyboard.press('ArrowDown');
        }
    }
    async DailyperformanceSummaryValues12() {
        console.log("Energy Module VoltageEB03|ESA6");
        let EBESA1 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM01.Energy Module Voltage reading"));
        console.log("EBESA1 :- ", EBESA1);
        expect.soft(EBESA1).not.toBe(" ");
        let EBESA2 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM02.Energy Module Voltage reading"));
        console.log("EBESA2 :- ", EBESA2);
        expect.soft(EBESA2).not.toBe(" ");
        let EBESA3 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM03.Energy Module Voltage reading"));
        console.log("EBESA3 :- ", EBESA3);
        expect.soft(EBESA3).not.toBe(" ");
        let EBESA4 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM04.Energy Module Voltage reading"));
        console.log("EBESA4 :- ", EBESA4);
        expect.soft(EBESA4).not.toBe(" ");
        let EBESA5 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM05.Energy Module Voltage reading"));
        console.log("EBESA5 :- ", EBESA5);
        expect.soft(EBESA5).not.toBe(" ");
        let EBESA6 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM06.Energy Module Voltage reading"));
        console.log("EBESA6 :- ", EBESA6);
        expect.soft(EBESA6).not.toBe(" ");

        let EBESB1 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM07.Energy Module Voltage reading"));
        console.log("EBESB1 :- ", EBESB1);
        expect.soft(EBESB1).not.toBe(" ");
        let EBESB2 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM08.Energy Module Voltage reading"));
        console.log("EBESB2 :- ", EBESB2);
        expect.soft(EBESB2).not.toBe(" ");
        let EBESB3 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM09.Energy Module Voltage reading"));
        console.log("EBESB3 :- ", EBESB3);
        expect.soft(EBESB3).not.toBe(" ");
        let EBESB4 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM10.Energy Module Voltage reading"));
        console.log("EBESB4 :- ", EBESB4);
        expect.soft(EBESB4).not.toBe(" ");
        let EBESB5 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM11.Energy Module Voltage reading"));
        console.log("EBESB5 :- ", EBESB5);
        expect.soft(EBESB5).not.toBe(" ");
        let EBESB6 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6|EM12.Energy Module Voltage reading"));
        console.log("EBESB6 :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        let EBESEM6 = await this.page.textContent(this.dailyperformancevalues12("EB03|ESA6.Energy String Current"));
        console.log("EString Current :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        for (let i = 0; i < 10; i++) {
            await this.page.keyboard.press('ArrowDown');
        }
    }
    async DailyperformanceSummaryValues13() {
        console.log("Energy Module VoltageEB03|ESB1");
        let EBESA1 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM01.Energy Module Voltage reading"));
        console.log("EBESA1 :- ", EBESA1);
        expect.soft(EBESA1).not.toBe(" ");
        let EBESA2 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM02.Energy Module Voltage reading"));
        console.log("EBESA2 :- ", EBESA2);
        expect.soft(EBESA2).not.toBe(" ");
        let EBESA3 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM03.Energy Module Voltage reading"));
        console.log("EBESA3 :- ", EBESA3);
        expect.soft(EBESA3).not.toBe(" ");
        let EBESA4 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM04.Energy Module Voltage reading"));
        console.log("EBESA4 :- ", EBESA4);
        expect.soft(EBESA4).not.toBe(" ");
        let EBESA5 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM05.Energy Module Voltage reading"));
        console.log("EBESA5 :- ", EBESA5);
        expect.soft(EBESA5).not.toBe(" ");
        let EBESA6 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM06.Energy Module Voltage reading"));
        console.log("EBESA6 :- ", EBESA6);
        expect.soft(EBESA6).not.toBe(" ");

        let EBESB1 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM07.Energy Module Voltage reading"));
        console.log("EBESB1 :- ", EBESB1);
        expect.soft(EBESB1).not.toBe(" ");
        let EBESB2 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM08.Energy Module Voltage reading"));
        console.log("EBESB2 :- ", EBESB2);
        expect.soft(EBESB2).not.toBe(" ");
        let EBESB3 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM09.Energy Module Voltage reading"));
        console.log("EBESB3 :- ", EBESB3);
        expect.soft(EBESB3).not.toBe(" ");
        let EBESB4 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM10.Energy Module Voltage reading"));
        console.log("EBESB4 :- ", EBESB4);
        expect.soft(EBESB4).not.toBe(" ");
        let EBESB5 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM11.Energy Module Voltage reading"));
        console.log("EBESB5 :- ", EBESB5);
        expect.soft(EBESB5).not.toBe(" ");
        let EBESB6 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1|EM12.Energy Module Voltage reading"));
        console.log("EBESB6 :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        let EBESEM6 = await this.page.textContent(this.dailyperformancevalues13("EB03|ESB1.Energy String Current"));
        console.log("EString Current :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        for (let i = 0; i < 10; i++) {
            await this.page.keyboard.press('ArrowDown');
        }
    }
    async DailyperformanceSummaryValues14() {
        console.log("Energy Module VoltageEB03|ESB2");
        let EBESA1 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM01.Energy Module Voltage reading"));
        console.log("EBESA1 :- ", EBESA1);
        expect.soft(EBESA1).not.toBe(" ");
        let EBESA2 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM02.Energy Module Voltage reading"));
        console.log("EBESA2 :- ", EBESA2);
        expect.soft(EBESA2).not.toBe(" ");
        let EBESA3 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM03.Energy Module Voltage reading"));
        console.log("EBESA3 :- ", EBESA3);
        expect.soft(EBESA3).not.toBe(" ");
        let EBESA4 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM04.Energy Module Voltage reading"));
        console.log("EBESA4 :- ", EBESA4);
        expect.soft(EBESA4).not.toBe(" ");
        let EBESA5 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM05.Energy Module Voltage reading"));
        console.log("EBESA5 :- ", EBESA5);
        expect.soft(EBESA5).not.toBe(" ");
        let EBESA6 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM06.Energy Module Voltage reading"));
        console.log("EBESA6 :- ", EBESA6);
        expect.soft(EBESA6).not.toBe(" ");

        let EBESB1 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM07.Energy Module Voltage reading"));
        console.log("EBESB1 :- ", EBESB1);
        expect.soft(EBESB1).not.toBe(" ");
        let EBESB2 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM08.Energy Module Voltage reading"));
        console.log("EBESB2 :- ", EBESB2);
        expect.soft(EBESB2).not.toBe(" ");
        let EBESB3 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM09.Energy Module Voltage reading"));
        console.log("EBESB3 :- ", EBESB3);
        expect.soft(EBESB3).not.toBe(" ");
        let EBESB4 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM10.Energy Module Voltage reading"));
        console.log("EBESB4 :- ", EBESB4);
        expect.soft(EBESB4).not.toBe(" ");
        let EBESB5 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM11.Energy Module Voltage reading"));
        console.log("EBESB5 :- ", EBESB5);
        expect.soft(EBESB5).not.toBe(" ");
        let EBESB6 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2|EM12.Energy Module Voltage reading"));
        console.log("EBESB6 :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        let EBESEM6 = await this.page.textContent(this.dailyperformancevalues14("EB03|ESB2.Energy String Current"));
        console.log("EString Current :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        for (let i = 0; i < 10; i++) {
            await this.page.keyboard.press('ArrowDown');
        }
    }
    async DailyperformanceSummaryValues15() {
        console.log("Energy Module VoltageEB03|ESB3");
        let EBESA1 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM01.Energy Module Voltage reading"));
        console.log("EBESA1 :- ", EBESA1);
        expect.soft(EBESA1).not.toBe(" ");
        let EBESA2 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM02.Energy Module Voltage reading"));
        console.log("EBESA2 :- ", EBESA2);
        expect.soft(EBESA2).not.toBe(" ");
        let EBESA3 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM03.Energy Module Voltage reading"));
        console.log("EBESA3 :- ", EBESA3);
        expect.soft(EBESA3).not.toBe(" ");
        let EBESA4 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM04.Energy Module Voltage reading"));
        console.log("EBESA4 :- ", EBESA4);
        expect.soft(EBESA4).not.toBe(" ");
        let EBESA5 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM05.Energy Module Voltage reading"));
        console.log("EBESA5 :- ", EBESA5);
        expect.soft(EBESA5).not.toBe(" ");
        let EBESA6 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM06.Energy Module Voltage reading"));
        console.log("EBESA6 :- ", EBESA6);
        expect.soft(EBESA6).not.toBe(" ");

        let EBESB1 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM07.Energy Module Voltage reading"));
        console.log("EBESB1 :- ", EBESB1);
        expect.soft(EBESB1).not.toBe(" ");
        let EBESB2 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM08.Energy Module Voltage reading"));
        console.log("EBESB2 :- ", EBESB2);
        expect.soft(EBESB2).not.toBe(" ");
        let EBESB3 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM09.Energy Module Voltage reading"));
        console.log("EBESB3 :- ", EBESB3);
        expect.soft(EBESB3).not.toBe(" ");
        let EBESB4 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM10.Energy Module Voltage reading"));
        console.log("EBESB4 :- ", EBESB4);
        expect.soft(EBESB4).not.toBe(" ");
        let EBESB5 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM11.Energy Module Voltage reading"));
        console.log("EBESB5 :- ", EBESB5);
        expect.soft(EBESB5).not.toBe(" ");
        let EBESB6 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3|EM12.Energy Module Voltage reading"));
        console.log("EBESB6 :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        let EBESEM6 = await this.page.textContent(this.dailyperformancevalues15("EB03|ESB3.Energy String Current"));
        console.log("EString Current :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        for (let i = 0; i < 10; i++) {
            await this.page.keyboard.press('ArrowDown');
        }
    }
    async DailyperformanceSummaryValues16() {
        console.log("Energy Module VoltageEB03|ESB4");
        let EBESA1 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM01.Energy Module Voltage reading"));
        console.log("EBESA1 :- ", EBESA1);
        expect.soft(EBESA1).not.toBe(" ");
        let EBESA2 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM02.Energy Module Voltage reading"));
        console.log("EBESA2 :- ", EBESA2);
        expect.soft(EBESA2).not.toBe(" ");
        let EBESA3 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM03.Energy Module Voltage reading"));
        console.log("EBESA3 :- ", EBESA3);
        expect.soft(EBESA3).not.toBe(" ");
        let EBESA4 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM04.Energy Module Voltage reading"));
        console.log("EBESA4 :- ", EBESA4);
        expect.soft(EBESA4).not.toBe(" ");
        let EBESA5 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM05.Energy Module Voltage reading"));
        console.log("EBESA5 :- ", EBESA5);
        expect.soft(EBESA5).not.toBe(" ");
        let EBESA6 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM06.Energy Module Voltage reading"));
        console.log("EBESA6 :- ", EBESA6);
        expect.soft(EBESA6).not.toBe(" ");

        let EBESB1 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM07.Energy Module Voltage reading"));
        console.log("EBESB1 :- ", EBESB1);
        expect.soft(EBESB1).not.toBe(" ");
        let EBESB2 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM08.Energy Module Voltage reading"));
        console.log("EBESB2 :- ", EBESB2);
        expect.soft(EBESB2).not.toBe(" ");
        let EBESB3 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM09.Energy Module Voltage reading"));
        console.log("EBESB3 :- ", EBESB3);
        expect.soft(EBESB3).not.toBe(" ");
        let EBESB4 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM10.Energy Module Voltage reading"));
        console.log("EBESB4 :- ", EBESB4);
        expect.soft(EBESB4).not.toBe(" ");
        let EBESB5 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM11.Energy Module Voltage reading"));
        console.log("EBESB5 :- ", EBESB5);
        expect.soft(EBESB5).not.toBe(" ");
        let EBESB6 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4|EM12.Energy Module Voltage reading"));
        console.log("EBESB6 :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        let EBESEM6 = await this.page.textContent(this.dailyperformancevalues16("EB03|ESB4.Energy String Current"));
        console.log("EString Current :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        for (let i = 0; i < 10; i++) {
            await this.page.keyboard.press('ArrowDown');
        }
    }
    async DailyperformanceSummaryValues17() {
        console.log("Energy Module VoltageEB03|ESB5");
        let EBESA1 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM01.Energy Module Voltage reading"));
        console.log("EBESA1 :- ", EBESA1);
        expect.soft(EBESA1).not.toBe(" ");
        let EBESA2 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM02.Energy Module Voltage reading"));
        console.log("EBESA2 :- ", EBESA2);
        expect.soft(EBESA2).not.toBe(" ");
        let EBESA3 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM03.Energy Module Voltage reading"));
        console.log("EBESA3 :- ", EBESA3);
        expect.soft(EBESA3).not.toBe(" ");
        let EBESA4 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM04.Energy Module Voltage reading"));
        console.log("EBESA4 :- ", EBESA4);
        expect.soft(EBESA4).not.toBe(" ");
        let EBESA5 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM05.Energy Module Voltage reading"));
        console.log("EBESA5 :- ", EBESA5);
        expect.soft(EBESA5).not.toBe(" ");
        let EBESA6 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM06.Energy Module Voltage reading"));
        console.log("EBESA6 :- ", EBESA6);
        expect.soft(EBESA6).not.toBe(" ");

        let EBESB1 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM07.Energy Module Voltage reading"));
        console.log("EBESB1 :- ", EBESB1);
        expect.soft(EBESB1).not.toBe(" ");
        let EBESB2 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM08.Energy Module Voltage reading"));
        console.log("EBESB2 :- ", EBESB2);
        expect.soft(EBESB2).not.toBe(" ");
        let EBESB3 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM09.Energy Module Voltage reading"));
        console.log("EBESB3 :- ", EBESB3);
        expect.soft(EBESB3).not.toBe(" ");
        let EBESB4 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM10.Energy Module Voltage reading"));
        console.log("EBESB4 :- ", EBESB4);
        expect.soft(EBESB4).not.toBe(" ");
        let EBESB5 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM11.Energy Module Voltage reading"));
        console.log("EBESB5 :- ", EBESB5);
        expect.soft(EBESB5).not.toBe(" ");
        let EBESB6 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5|EM12.Energy Module Voltage reading"));
        console.log("EBESB6 :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        let EBESEM6 = await this.page.textContent(this.dailyperformancevalues17("EB03|ESB5.Energy String Current"));
        console.log("EString Current :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        for (let i = 0; i < 10; i++) {
            await this.page.keyboard.press('ArrowDown');
        }
    }
    async DailyperformanceSummaryValues18() {
        console.log("Energy Module VoltageEB03|ESB6");
        let EBESA1 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM01.Energy Module Voltage reading"));
        console.log("EBESA1 :- ", EBESA1);
        expect.soft(EBESA1).not.toBe(" ");
        let EBESA2 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM02.Energy Module Voltage reading"));
        console.log("EBESA2 :- ", EBESA2);
        expect.soft(EBESA2).not.toBe(" ");
        let EBESA3 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM03.Energy Module Voltage reading"));
        console.log("EBESA3 :- ", EBESA3);
        expect.soft(EBESA3).not.toBe(" ");
        let EBESA4 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM04.Energy Module Voltage reading"));
        console.log("EBESA4 :- ", EBESA4);
        expect.soft(EBESA4).not.toBe(" ");
        let EBESA5 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM05.Energy Module Voltage reading"));
        console.log("EBESA5 :- ", EBESA5);
        expect.soft(EBESA5).not.toBe(" ");
        let EBESA6 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM06.Energy Module Voltage reading"));
        console.log("EBESA6 :- ", EBESA6);
        expect.soft(EBESA6).not.toBe(" ");

        let EBESB1 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM07.Energy Module Voltage reading"));
        console.log("EBESB1 :- ", EBESB1);
        expect.soft(EBESB1).not.toBe(" ");
        let EBESB2 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM08.Energy Module Voltage reading"));
        console.log("EBESB2 :- ", EBESB2);
        expect.soft(EBESB2).not.toBe(" ");
        let EBESB3 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM09.Energy Module Voltage reading"));
        console.log("EBESB3 :- ", EBESB3);
        expect.soft(EBESB3).not.toBe(" ");
        let EBESB4 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM10.Energy Module Voltage reading"));
        console.log("EBESB4 :- ", EBESB4);
        expect.soft(EBESB4).not.toBe(" ");
        let EBESB5 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM11.Energy Module Voltage reading"));
        console.log("EBESB5 :- ", EBESB5);
        expect.soft(EBESB5).not.toBe(" ");
        let EBESB6 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6|EM12.Energy Module Voltage reading"));
        console.log("EBESB6 :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        let EBESEM6 = await this.page.textContent(this.dailyperformancevalues18("EB03|ESB6.Energy String Current"));
        console.log("EString Current :- ", EBESB6);
        expect.soft(EBESB6).not.toBe(" ");
        for (let i = 0; i < 10; i++) {
            await this.page.keyboard.press('ArrowDown');
        }
    }


    async Dailyperformancegraphheading(locator: string) {

        await webactions.waitForElementAttached(locator);
        let grhed = this.page.locator(locator);
        expect.soft(grhed).toBeVisible();
    };

    async CheckTable1IsPrescent(name: string) {
        await webactions.waitForElementAttached(this.Table1);
        await this.page.locator(this.Table1).highlight();
        await this.page.locator(this.table1Cell1).hover();
        await webactions.delay(2000);
        let tblcell = await this.page.textContent(this.table1Cell1);
        expect.soft(tblcell).toContain(name);
        console.log("Table-1 cell-1 :- ", tblcell);

        /*     await this.page.locator(`//div[@id="plotly-graph-3"]`).scrollIntoViewIfNeeded();
             let totalcolumns=`//div[@id="plotly-graph-3"]//*[@class="main-svg"]//*[name()='g' and @class="table"]//*[@class="y-column"]`;
             for(let i=1;i<=13;i++){
               await delay(2000);
             let CyclePerformaceremaingColumn=`//div[@id="plotly-graph-3"]//*[@class="main-svg"]//*[name()='g' and @class="table"]//*[@class="y-column"][${i}]//*[@id="cells1"]//*[name()='g']//*[@class="column-cell"]`;
     
             let ccdcount=await this.page.locator(CyclePerformaceremaingColumn);
             let ccdcountvalue=await ccdcount.count();
             console.log("count",ccdcountvalue);
            
             console.log("column",i);
     
               for(let j=1;j<=ccdcountvalue;j++){
               console.log("cell",j);
              await delay(2000);
              // let Cellvalue=await this.page.locator(CyclePerformaceremaingColumn).nth(j).hover();
              
               let col1=await this.page.textContent(`//div[@id="plotly-graph-3"]//*[@class="main-svg"]//*[name()='g' and @class="table"]//*[@class="y-column"][${i}]//*[@id="cells1"]//*[name()='g']//*[@class="column-cell"][${j}]`);
            console.log(j,":",col1);
           expect.soft(col1).not.toBe(" ");
               await delay(2000);
            
             }
           }
           */
    }
    async CheckTable2IsPrescent(name: string) {
        await webactions.waitForElementAttached(this.table2Cell1);
        await webactions.delay(2000);
        let tblcell = await this.page.textContent(this.table2Cell1);
        expect.soft(tblcell).toContain(name);
        console.log("Table-2 cell-1 :- ", tblcell);

        /*   await this.page.locator(`//div[@id="plotly-graph-5"]`).scrollIntoViewIfNeeded();
           let totalcolumns=`//div[@id="plotly-graph-5"]//*[@class="main-svg"]//*[name()='g' and @class="table"]//*[@class="y-column"]`;
           for(let i=1;i<=13;i++){
             await delay(2000);
           let CyclePerformaceremaingColumn=`//div[@id="plotly-graph-5"]//*[@class="main-svg"]//*[name()='g' and @class="table"]//*[@class="y-column"][${i}]//*[@id="cells1"]//*[name()='g']//*[@class="column-cell"]`;
   
           let ccdcount=await this.page.locator(CyclePerformaceremaingColumn);
           let ccdcountvalue=await ccdcount.count();
           console.log("count",ccdcountvalue);
          
           console.log("column",i);
   
             for(let j=1;j<=ccdcountvalue;j++){
             console.log("cell",j);
            await delay(2000);
            // let Cellvalue=await this.page.locator(CyclePerformaceremaingColumn).nth(j).hover();
            
             let col1=await this.page.textContent(`//div[@id="plotly-graph-5"]//*[@class="main-svg"]//*[name()='g' and @class="table"]//*[@class="y-column"][${i}]//*[@id="cells1"]//*[name()='g']//*[@class="column-cell"][${j}]`);
          console.log(j,":",col1);
         expect.soft(col1).not.toBe(" ");
             await delay(2000);
          
           }
         }
   */
    }
    async AddQFFilter() {
        await webactions.clickElement(this.weakmoduleQFFilter);
    }
    async CheckWeakModulegraphVisibility(locator: string) {

        await webactions.waitForElementAttached(locator);
        let wmgrhed = this.page.locator(locator);
        // console.log(wmgrhed);
        expect.soft(wmgrhed).toBeVisible();
    }
    async TakeGraphValue() {
        await this.page.locator(`//div//*[@class="layer-below"]//*[@class="shapelayer"]//*[@data-index="20"]`).hover({ force: true });
        let Statecharge = await this.page.textContent(`//div//*[@class="hoverlayer"]//*[@class="hovertext"]//*[@class="name" and text()="State Of Cha..."]//following-sibling::*[@class="nums"]`);
        console.log("State of Charge :- ", Statecharge);
        let energrBCurrent = await this.page.textContent(`//div//*[@class="hoverlayer"]//*[@class="hovertext"][1]//*[@class="name" and text()="Energy Block..."]//following-sibling::*[@class="nums"]`);
        console.log("Energy Block Current :- ", energrBCurrent);
        let energrBVoltage = await this.page.textContent(`//div//*[@class="hoverlayer"]//*[@class="hovertext"][2]//*[@class="name" and text()="Energy Block..."]//following-sibling::*[@class="nums"]`);
        console.log("Energy Block Voltage :- ", energrBVoltage);


    }

    async Cycletrend() {
        await this.CheckWeakModulegraphVisibility(this.GraphCycletrend);
        let ccd = `//div[@id="plotly-graph-1"]//*[@class="main-svg"]//*[name()='g' and @class="shapelayer"]//*[name()='path']`;
        await webactions.clickElement(this.Comparewithhover("plotly-graph-1"));
        let ccdcount = await this.page.locator(ccd);
        let ccdcountvalue = await ccdcount.count();
        // console.log("Count :- ", ccdcountvalue);
        let colmuns1 = [];
        let colmuns2 = [];
        let colmuns3 = [];
        //await this.page.locator(`//div[@id="plotly-graph-5"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom in"]`);
        for (let i = 1; i < ccdcountvalue; i++) {
            await webActions.delay(2000);
            await this.page.locator(ccd).nth(i).scrollIntoViewIfNeeded();
            await this.page.locator(ccd).nth(i).hover({ force: true });

            let col1 = await this.page.textContent(`//div[@id="plotly-graph-1"]//*[@class="main-svg"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"][1]//*[text()="Energy Block..."]//following-sibling::*[@class="nums"]`);
            let col2 = await this.page.textContent(`//div[@id="plotly-graph-1"]//*[@class="main-svg"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"][2]//*[text()="Energy Block..."]//following-sibling::*[@class="nums"]`);
            let col3 = await this.page.textContent(`//div[@id="plotly-graph-1"]//*[@class="main-svg"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[text()="State Of Cha..."]//following-sibling::*[@class="nums"]`);
            colmuns1.push(col1);
            colmuns2.push(col2);
            colmuns3.push(col3);
            await webActions.delay(2000);
            //lv=i;

        }
        console.log(colmuns1);
        // let inner=await this.page.locator(`//div[@id="plotly-graph-5"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[name()='text' and @class="nums"]`);
        // let innervalue=await this.page.textContent(`//div[@id="plotly-graph-5"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[name()='text' and @class="nums"]`);
        // console.log("innervalue",innervalue);
        // }
        //  let lastpoint=`//div[@id="plotly-graph-5"]//*[@class="main-svg"]//*[name()='g' and @class="plot"]//*[contains(@class,"trace scatter")][1]//*[@class="points"]//*[name()='path'][${lv}]`;
        //  await this.page.locator(lastpoint).hover({force:true});

        let l: number = colmuns1.length;

        console.log("Energy Block Current :- ", colmuns1[l - 1]);
        expect.soft(colmuns1[l - 1]).not.toBe(" ");
        console.log("Energy Block Voltage :- ", colmuns2[l - 1]);
        expect.soft(colmuns2[l - 1]).not.toBe(" ");
        console.log("State of Charge :- ", colmuns3[l - 1]);
        expect.soft(colmuns3[l - 1]).not.toBe(" ");


    }
    async CycleperformanceStatistics() {
        await this.CheckWeakModulegraphVisibility(this.Cycleperformance);
        /*   await this.page.locator(`//div[@id="plotly-graph-2"]`).scrollIntoViewIfNeeded();
           let totalcolumns=`//div[@id="plotly-graph-2"]//*[@class="main-svg"]//*[name()='g' and @class="table"]//*[@class="y-column"]`;
           for(let i=1;i<=2;i++){
             //await delay(2000);
           let CyclePerformaceremaingColumn=`//div[@id="plotly-graph-2"]//*[@class="main-svg"]//*[name()='g' and @class="table"]//*[@class="y-column"][${i}]//*[@id="cells1"]//*[name()='g']//*[@class="column-cell"]`;
   
           let ccdcount=await this.page.locator(CyclePerformaceremaingColumn);
           let ccdcountvalue=await ccdcount.count();
           console.log("count",ccdcountvalue);
          
           console.log("column",i);
   
             for(let j=1;j<=ccdcountvalue;j++){
             console.log("cell",j);
            //await delay(2000);
            // let Cellvalue=await this.page.locator(CyclePerformaceremaingColumn).nth(j).hover();
            
             let col1=await this.page.textContent(`//div[@id="plotly-graph-2"]//*[@class="main-svg"]//*[name()='g' and @class="table"]//*[@class="y-column"][${i}]//*[@id="cells1"]//*[name()='g']//*[@class="column-cell"][${j}]`);
          console.log(j,":",col1);
          let cs=parseInt(col1);
         expect.soft(col1).not.toBe(" ");
             await delay(2000);
          if(i==2){
           expect.soft(cs).toBeLessThan(50);
          }
           }
          
              
   
         }*/
    }
    async energyModuleMatrix1() {
        await this.CheckWeakModulegraphVisibility(this.EnergyModule2);
    }
    async energyModuleMatrix2() {
        await this.CheckWeakModulegraphVisibility(this.EnergyModule1);
    }
    async CumulativeChargeandDischarge() {
        await this.CheckWeakModulegraphVisibility(this.cumulativeEnergy);
        /*    let lv;
            let ccR=`//div[@id="plotly-graph-5"]//*[@class="main-svg"]//*[name()='g' and @class="plot"]//*[contains(@class,"trace scatter")][1]//*[@class="points"]//*[name()='path']`;
            await this.page.locator('//div[@id="plotly-graph-5"]').scrollIntoViewIfNeeded();
            let ccdcount=await this.page.locator(ccR);
            let ccdcountvalue=await ccdcount.count();
            console.log("count",ccdcountvalue);
            let colmuns = [];
            //await this.page.locator(`//div[@id="plotly-graph-5"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom in"]`);
            for(let i=1;i<ccdcountvalue;i++){
             //await delay(2000);
              await this.page.locator(ccR).nth(i).scrollIntoViewIfNeeded();
              await this.page.locator(ccR).nth(i).hover({force:true});
             
           let col=await this.page.textContent(`//div[@id="plotly-graph-5"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[name()='text' and @class="nums"]`);
          
              colmuns.push(col);
              //await delay(2000);
              //lv=i;
              console.log(i);
            }
            console.log(colmuns);
              // let inner=await this.page.locator(`//div[@id="plotly-graph-5"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[name()='text' and @class="nums"]`);
              // let innervalue=await this.page.textContent(`//div[@id="plotly-graph-5"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[name()='text' and @class="nums"]`);
              // console.log("innervalue",innervalue);
           // }
          //  let lastpoint=`//div[@id="plotly-graph-5"]//*[@class="main-svg"]//*[name()='g' and @class="plot"]//*[contains(@class,"trace scatter")][1]//*[@class="points"]//*[name()='path'][${lv}]`;
          //  await this.page.locator(lastpoint).hover({force:true});
           let inner=await this.page.locator(`//div[@id="plotly-graph-5"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[name()='text' and @class="nums"]`);
           let l:number=colmuns.length;
           let innervalue=(colmuns[l-1]).split(",");
           console.log("innervalue",innervalue[2]);
           expect.soft(innervalue[2]).not.toBe(" ");
           
           let ccG=`//div[@id="plotly-graph-5"]//*[@class="main-svg"]//*[name()='g' and @class="plot"]//*[contains(@class,"trace scatter")][2]//*[@class="points"]//*[name()='path']`;
           //await this.page.locator('//div[@id="plotly-graph-5"]').scrollIntoViewIfNeeded();
           ccdcount=await this.page.locator(ccG);
           ccdcountvalue=await ccdcount.count();
           console.log("count",ccdcountvalue);
           let colvalues = [];
           //await this.page.locator(`//div[@id="plotly-graph-5"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom in"]`);
           for(let i=1;i<ccdcountvalue;i++){
            //await delay(2000);
             await this.page.locator(ccG).nth(i).scrollIntoViewIfNeeded();
             await this.page.locator(ccG).nth(i).hover({force:true});
            
          let col=await this.page.textContent(`//div[@id="plotly-graph-5"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[name()='text' and @class="nums"]`);
         
             colvalues.push(col);
             //await delay(2000);
             //lv=i;
             console.log(i);
           }
           console.log(colvalues);
            
          inner=await this.page.locator(`//div[@id="plotly-graph-5"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[name()='text' and @class="nums"]`);
          l=colvalues.length;
          innervalue=(colvalues[l-1]).split(",");
          console.log("innervalue",innervalue[2]);
          expect.soft(innervalue[2]).not.toBe(" ");
          */
    }
    async CumulativeCycleCount() {
        await this.CheckWeakModulegraphVisibility(this.cumulativeCyclecount);
        /*     let lv;
             let ccR=`//div[@id="plotly-graph-6"]//*[@class="main-svg"]//*[name()='g' and @class="plot"]//*[contains(@class,"trace scatter")]//*[@class="points"]//*[name()='path']`;
             await this.page.locator('//div[@id="plotly-graph-6"]').scrollIntoViewIfNeeded();
             let ccdcount=await this.page.locator(ccR);
             let ccdcountvalue=await ccdcount.count();
             console.log("count",ccdcountvalue);
             let colmuns = [];
             //await this.page.locator(`//div[@id="plotly-graph-5"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom in"]`);
             for(let i=1;i<ccdcountvalue;i++){
              //await delay(2000);
               await this.page.locator(ccR).nth(i).scrollIntoViewIfNeeded();
               await this.page.locator(ccR).nth(i).hover({force:true});
              
            let col=await this.page.textContent(`//div[@id="plotly-graph-6"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[name()='text' and @class="nums"]`);
           
               colmuns.push(col);
               //await delay(2000);
               //lv=i;
               //console.log(i);
             }
             console.log("Cumulative Cycle",colmuns);
               // let inner=await this.page.locator(`//div[@id="plotly-graph-5"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[name()='text' and @class="nums"]`);
               // let innervalue=await this.page.textContent(`//div[@id="plotly-graph-5"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[name()='text' and @class="nums"]`);
               // console.log("innervalue",innervalue);
            // }
           //  let lastpoint=`//div[@id="plotly-graph-5"]//*[@class="main-svg"]//*[name()='g' and @class="plot"]//*[contains(@class,"trace scatter")][1]//*[@class="points"]//*[name()='path'][${lv}]`;
           //  await this.page.locator(lastpoint).hover({force:true});
            let inner=await this.page.locator(`//div[@id="plotly-graph-6"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[name()='text' and @class="nums"]`);
            let l:number=colmuns.length;
            let innervalue=(colmuns[l-1]).split(",");
            console.log("innervalue",innervalue[2]);
            expect.soft(innervalue[2]).not.toBe(" ");
     
            */
    }



    async ChargeEnergyDischargeEnergy() {
        await this.CheckWeakModulegraphVisibility(this.chargeenergydischargeefficiency);
        /*     let lv;
             let ccB=`//div[@id="plotly-graph-7"]//*[@class="main-svg"]//*[name()='g' and @class="plot"]//*[contains(@class,"trace scatter")][3]//*[@class="points"]//*[name()='path']`;
             await this.page.locator('//div[@id="plotly-graph-7"]').scrollIntoViewIfNeeded();
             
             let ccdcount=await this.page.locator(ccB);
             let ccdcountvalue=await ccdcount.count();
             console.log("count",ccdcountvalue);
             let colmuns = [];
             //await this.page.locator(`//div[@id="plotly-graph-5"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom in"]`);
             for(let i=1;i<ccdcountvalue;i++){
              //await delay(2000);
               await this.page.locator(ccB).nth(i).scrollIntoViewIfNeeded();
               await this.page.locator(ccB).nth(i).hover({force:true});
              
            let col=await this.page.textContent(`//div[@id="plotly-graph-7"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[name()='text' and @class="nums"]`);
           
               colmuns.push(col);
               //await delay(2000);
               lv=i;
               //console.log(i);
             }
             console.log("Primary Energy Efficiency",colmuns);
              
            let l:number=colmuns.length;
            let innervalue=(colmuns[(l-1)]);
            console.log("innervalue",innervalue);
            expect.soft(innervalue).not.toBe(" ");
      await delay(2000);
     
            let ccO=`//div[@id="plotly-graph-7"]//*[@class="main-svg"]//*[name()='g' and @class="plot"]//*[contains(@class,"trace scatter")][4]//*[@class="points"]//*[name()='path']`;
             await this.page.locator('//div[@id="plotly-graph-7"]').scrollIntoViewIfNeeded();
             
            let ccdcount1=await this.page.locator(ccO);
            let ccdcountvalue1=await ccdcount1.count();
             console.log("count",ccdcountvalue1);
             let colmuns1 = [];
             //await this.page.locator(`//div[@id="plotly-graph-5"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom in"]`);
             for(let i=1;i<ccdcountvalue;i++){
              //await delay(2000);
               await this.page.locator(ccO).nth(i).scrollIntoViewIfNeeded();
               await this.page.locator(ccO).nth(i).hover({force:true});
              
            let col=await this.page.textContent(`//div[@id="plotly-graph-7"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[name()='text' and @class="nums"]`);
           
               colmuns1.push(col);
               //await delay(2000);
               lv=i;
               //console.log(i);
             }
     
             console.log("Round Trip Efficiency",colmuns1);
              
            l=colmuns1.length;
           innervalue=(colmuns1[(l-1)]);
            console.log("innervalue",innervalue);
            expect.soft(innervalue).not.toBe(" ");
     
     
            let ccR=`//div[@id="plotly-graph-7"]//*[@class="main-svg"]//*[name()='g' and @class="overplot"]//*[contains(@class,"trace scatter")][4]//*[@class="points"]//*[name()='path']`;
            await this.page.locator('//div[@id="plotly-graph-7"]').scrollIntoViewIfNeeded();
            
           let ccdcount2=await this.page.locator(ccR);
           let ccdcountvalue2=await ccdcount2.count();
            console.log("count",ccdcountvalue2);
            let colmuns2 = [];
            //await this.page.locator(`//div[@id="plotly-graph-5"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom in"]`);
            for(let i=1;i<ccdcountvalue;i++){
             //await delay(2000);
              await this.page.locator(ccR).nth(i).scrollIntoViewIfNeeded();
              await this.page.locator(ccR).nth(i).hover({force:true});
             
           let col=await this.page.textContent(`//div[@id="plotly-graph-7"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[name()='text' and @class="nums"]`);
          
              colmuns2.push(col);
              //await delay(2000);
              lv=i;
              //console.log(i);
            }
     
            console.log("Discharge Energy",colmuns2);
             
           l=colmuns2.length;
          innervalue=(colmuns2[(l-1)]).split(",");
           console.log("innervalue",innervalue[2]);
           expect.soft(innervalue[2]).not.toBe(" ");
     
     
           let ccG=`//div[@id="plotly-graph-7"]//*[@class="main-svg"]//*[name()='g' and @class="overplot"]//*[contains(@class,"trace scatter")][2]//*[@class="points"]//*[name()='path']`;
            await this.page.locator('//div[@id="plotly-graph-7"]').scrollIntoViewIfNeeded();
            
           let ccdcount3=await this.page.locator(ccR);
           let ccdcountvalue3=await ccdcount3.count();
            console.log("count",ccdcountvalue3);
            let colmuns3 = [];
            //await this.page.locator(`//div[@id="plotly-graph-5"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom in"]`);
            for(let i=1;i<ccdcountvalue;i++){
             //await delay(2000);
              await this.page.locator(ccG).nth(i).scrollIntoViewIfNeeded();
              await this.page.locator(ccG).nth(i).hover({force:true});
             
           let col=await this.page.textContent(`//div[@id="plotly-graph-7"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[name()='text' and @class="nums"]`);
          
              colmuns3.push(col);
              //await delay(2000);
              lv=i;
              //console.log(i);
            }
     
            console.log("Charge Energy",colmuns3);
             
           l=colmuns3.length;
          innervalue=(colmuns3[(l-1)]).split(",");
           console.log("innervalue",innervalue[2]);
           expect.soft(innervalue[2]).not.toBe(" ");
     
           */
    }


    async RoundTripEfficiencyoverTemperature() {
        await this.CheckWeakModulegraphVisibility(this.roundTripEfficiency);
        /*     let lv;
             let ccR=`//div[@id="plotly-graph-8"]//*[@class="main-svg"]//*[name()='g' and @class="plot"]//*[contains(@class,"trace scatter")]//*[@class="points"]//*[name()='path']`;
             await this.page.locator('//div[@id="plotly-graph-8"]').scrollIntoViewIfNeeded();
             await this.page.keyboard.press('ArrowDown');
             await this.page.keyboard.press('ArrowDown');
             await this.page.keyboard.press('ArrowDown');
             await this.page.keyboard.press('ArrowDown');
             let ccdcount=await this.page.locator(ccR);
             let ccdcountvalue=await ccdcount.count();
             console.log("count",ccdcountvalue);
             let colmuns = [];
             //await this.page.locator(`//div[@id="plotly-graph-5"]//div[@class="modebar modebar--hover ease-bg"]//div[@class="modebar-group"]//a[@data-title="Zoom in"]`);
             for(let i=1;i<ccdcountvalue;i++){
              //await delay(2000);
               await this.page.locator(ccR).nth(i).scrollIntoViewIfNeeded();
               await this.page.locator(ccR).nth(i).hover({force:true});
              
            let col=await this.page.textContent(`//div[@id="plotly-graph-8"]//*[name()='g' and @class="hoverlayer"]//*[@class="hovertext"]//*[name()='text' and @class="nums"]`);
           
               colmuns.push(col);
               //await delay(2000);
               lv=i;
               //console.log(i);
             }
             console.log("Total RTE%",colmuns);
              
            let l:number=colmuns.length;
            let innervalue=(colmuns[(l-1)/2]);
            console.log("innervalue",innervalue);
            expect.soft(innervalue).not.toBe(" ");
            */
    }

}

// function delay(arg0: number) {
//     throw new Error('Function not implemented.');
// }
