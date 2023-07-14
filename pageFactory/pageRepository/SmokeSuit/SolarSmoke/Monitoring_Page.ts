import { WebActions } from '@lib/WebActions';
import { ComboBoxActions } from '@lib_web/ComboBoxActions';
import { DateActions } from "@lib/web/DateActions";
import { expect, Page } from "@playwright/test";
import { MenuActions } from "@lib_web/MenuActions";
import { testConfig } from '../../../../testConfig';
import { TextBoxActions } from '@lib_web/TextBoxActions';
import { ButtonActions } from '@lib_web/ButtonActions';
import { Monitoring_Object } from '@objects/SmokeSuit/SolarSmoke/Monitoring_Object';

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;
let textBoxActionsObj: TextBoxActions;
let buttonActionsObj: ButtonActions;
let webActions: WebActions;


export class Monitoring_Page extends Monitoring_Object {

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

    async GetColumns(locator: string) {
        const elements = await this.page.$$(locator);
        let colmuns = [];
        for (const element of elements) {
            let col = await element.innerText();
            colmuns.push(col)
        }
        return colmuns;
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

    async Assertion(value: string) {
        await webactions.waitForElementAttached(this.assertiontilesobj(value))
        const firstValue = await this.page.innerText(this.assertiontilesobj(value))
        parseInt(firstValue);
        expect.soft(firstValue).not.toEqual(" ");
        console.log(value, " :- ", firstValue);
        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }
    async AssertionMFM() {
        await webactions.waitForElementAttached(this.assertiontilesobj1)
        const firstValue = await this.page.innerText(this.assertiontilesobj1)
        parseInt(firstValue);
        expect.soft(firstValue).not.toEqual(" ");
        console.log(firstValue);
        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }
    async Assertiontiles(value: string) {
        await webactions.waitForElementAttached(this.assertiontilesobj2(value))
        const firstValue = await this.page.innerText(this.assertiontilesobj2(value))
        parseInt(firstValue);
        expect.soft(firstValue).not.toEqual(" ");
        console.log(firstValue);
        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }
    async AssertionWS(value: string) {
        await webactions.waitForElementAttached(this.ass_poa_ghi(value))
        const firstValue = await this.page.innerText(this.ass_poa_ghi(value))
        parseInt(firstValue);
        expect.soft(firstValue).not.toEqual(" ");
        console.log(value, " :- ", firstValue);
        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }

    async AssertionGenerator(value: string) {
        await webactions.waitForElementAttached(this.assertiongenerator(value))
        const firstValue = await this.page.innerText(this.assertiongenerator(value))
        parseInt(firstValue);
        expect.soft(firstValue).not.toEqual(" ");
        console.log(value, " :- ", firstValue);
        // expect.soft(firstValue).toBeGreaterThan(0.0);
    }
    async TurbineNameAssertion(value: string) {
        await webActions.waitForElementAttached(this.turbinedropdown);
        await webActions.clickElement(this.turbinedropdown);
        await webActions.waitForElementAttached(this.turbinedropdownvalues(value));
        await webActions.clickElement(this.turbinedropdownvalues(value));
        await webActions.delay(5000);
        const value1 = (await this.page.textContent(this.turbineassertion)).substring(0, 9);

        // const Assertion = await expect.soft(value).not.toEqual(value1);
        await expect.soft(value1).toContain(value);
        await console.log(value1);
    }
    //Turbine page 
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
    async EnterNameFor_Filter(value: string) {
        // await webactions.enterElementText(this.enternameforfilter,value);
        // await webactions.delay(2000);
        await webactions.waitForElementAttached(this.enternameforfilter);
        await webactions.clickElement(this.enternameforfilter);
        await webactions.delay(2000);
        await this.page.keyboard.type(value);
        await webactions.delay(2000);
    }
    async clickOnFirstElement() {
        await webactions.waitForElementAttached(this.clickonfirstelement);
        await webactions.clickElement(this.clickonfirstelement);
        await webactions.delay(2000);
    }
    async clickOnFirstElementEOSE() {
        await webactions.waitForElementAttached(this.clickonfirstelementEOSE);
        await webactions.clickElement(this.clickonfirstelementEOSE);
        await webactions.delay(3000);
    }
    async DatanotavailableOKbtn() {
        await webactions.waitForElementAttached(this.datanotpresentokbtn);
        await webactions.clickElement(this.datanotpresentokbtn);
        await webactions.delay(2000);
    }
    //configure
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

    async Project(name: string) {
        await webactions.waitForElementAttached(this.project);
        await webActions.clickElement(this.project);
        await webActions.waitForElementAttached(this.dropdownvalue(name));
        await webActions.clickElement(this.dropdownvalue(name));
    }
    async Account(name: string) {
        await webactions.waitForElementAttached(this.account);
        await webActions.clickElement(this.account);
        await webActions.waitForElementAttached(this.dropdownvalue(name));
        await webActions.clickElement(this.dropdownvalue(name));
    }
    async Dashboard(name: string) {
        await webactions.waitForElementAttached(this.dashboard);
        await webActions.clickElement(this.dashboard);
        await webActions.waitForElementAttached(this.dropdownvalue(name));
        await webActions.clickElement(this.dropdownvalue(name));
    }
    async SearchBtn() {
        await webactions.waitForElementAttached(this.search);
        await webActions.clickElement(this.search);
    }
    async BackTOInverterBtn() {
        await webactions.waitForElementAttached(this.backtoinverter);
        await webActions.clickElement(this.backtoinverter);
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

    // for configure page solar

    async ChecktheRowforAccount(name: string) {
        let acrow = this.page.locator(this.rowcheck);
        await webactions.delay(2000);
        expect.soft(acrow).toContainText(name);
        await webactions.clickElement(this.rowcheck);
        await webactions.delay(2000);
    }

    //   async filterfromcolumn(idname:string,name:string){ 
    //     await webactions.clickElement(this.sortingfromcolumn(idname));
    //     await webactions.clickElement(this.buttonsforsorting("filter"));
    //     //await webactions.delay(4000);
    //     let searchtxt=`//div[@class="ag-filter-body"]//div[@ref="eValue1"]//input`;
    //     await this.page.fill(searchtxt,name);
    //     //await webactions.delay(2000);
    //     await webactions.clickElement(this.buttonsforsorting("filter"));
    //     await webactions.delay(2000);
    //   }


    async BackToDashboard() {
        await webactions.waitForElementAttached(this.backtodashboard);
        await webactions.clickElement(this.backtodashboard);
        await webactions.delay(3000);
    }
    async ActivePower() {
        await webactions.waitForElementAttached(this.ActivePowerTile);
        let th1 = this.page.locator(this.ActivePowerTile);
        await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.Activepowervalue);
        await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = await this.page.innerText(this.Activepowervalue);
        expect.soft(tv2).not.toBe("");
        console.log("Active Power :- ", tv2);
    }
    async PVPower() {
        await webactions.waitForElementAttached(this.PVpower);
        let th1 = this.page.locator(this.PVpower);
        await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.PVpowerValue);
        await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = await this.page.innerText(this.PVpowerValue);
        expect.soft(tv2).not.toBe("");
        console.log("PV Power :- ", tv2);
    }
    async ReactivePower() {
        await webactions.waitForElementAttached(this.ReactiveP);
        let th1 = this.page.locator(this.ReactiveP);
        await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.ReactivePValue);
        await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = await this.page.innerText(this.ReactivePValue);
        expect.soft(tv2).not.toBe("");
        console.log("Reactive Power :- ", tv2);
    }

    async DailyEnergy() {
        await webactions.waitForElementAttached(this.DailyE);
        let th1 = this.page.locator(this.DailyE);
        await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.DailyEValue);
        await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = await this.page.innerText(this.DailyEValue);
        expect.soft(tv2).not.toBe("");
        console.log("Daily Energy :- ", tv2);
    }

    async ACFrequencyTile() {
        await webactions.waitForElementAttached(this.ACFrequency);
        let th1 = this.page.locator(this.ACFrequency);
        await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.ACFrequencyValue);
        await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = await this.page.innerText(this.ACFrequencyValue);
        expect.soft(tv2).not.toBe("");
        console.log("AC Frequency :- ", tv2);
    }

    async PowerfactorTile() {
        await webactions.waitForElementAttached(this.Powerfactor);
        let th1 = this.page.locator(this.Powerfactor);
        await webactions.delay(2000);
        expect.soft(th1).toBeVisible();
        let tv1 = this.page.locator(this.PowerfactorValue);
        await webactions.delay(2000);
        expect.soft(tv1).toBeVisible();
        let tv2 = await this.page.innerText(this.PowerfactorValue);
        let pf = parseFloat(tv2);
        expect.soft(pf).toBeGreaterThanOrEqual(0);
        console.log("Power factor :- ", pf);
    }

    async CheckGraphAndValue() {
        let GPic = this.page.locator(this.Graph);
        await webactions.delay(2000);
        expect.soft(GPic).toBeVisible();
        //await webactions.delay(2000);
        let GTValue = await this.page.innerText(this.GraphValue);
        // await webactions.delay(2000);
        expect.soft(GTValue).not.toBe("");
        console.log(GTValue);

    }
    async GetBartooltip() {
        // await this.page.locator(`id="chartid"`).highlight();
        // await this.page.locator(`//div[@id="bartile-chart"]//*[@class="highcharts-series-group"]//*[name()='rect'][31]`).highlight();

        await this.page.locator(`//div[@id="bartile-chart"]//*[@class="highcharts-series-group"]//*[name()='rect'][31]`).hover();
        const count = await this.page.locator(this.graphbartooltip);
        console.log(count);
        await webactions.delay(2000);
        let tooltip = await this.page.innerText(this.graphbartooltip);
        console.log(tooltip);
        // await webactions.delay(2000);
        // const elements = await this.page.$$(this.graphbartooltip);
        // let colmuns=[];
        // for(const element of elements){
        //     await element.hover();
        //     let col =  await element.innerText();
        //     colmuns.push(col);
        //     console.log("tooltip",element);
        // }

    }
    async CheckGraphchart() {
        let GPic2 = this.page.locator(this.Graph2);
        await webactions.delay(2000);
        expect.soft(GPic2).toBeVisible();
        // await webactions.delay(2000);
    }


    async CheckTableisVisible() {
        await this.page.locator(this.Table).scrollIntoViewIfNeeded();
        let Tbl = this.page.locator(this.Table);
        await webactions.delay(2000);
        expect.soft(Tbl).toBeVisible();
        // await webactions.delay(2000);
    }



    // async GetColumns(locator: string) {
    //     const elements = await this.page.$$(locator);
    //     let colmuns = [];
    //     for (const element of elements) {
    //         let col = await element.innerText();
    //         colmuns.push(col)
    //     }
    //     return colmuns;
    // }
    // async GetColumnValues(columns: Array<string>, colNUm: number) {
    //     let columnValues = []
    //     for (let i = 0; i < columns.length; i++) {
    //         let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNUm}]`;
    //         let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
    //         if (colValue.match('\n')) {
    //             columnValues.push(' ');
    //         } else {
    //             columnValues.push(colValue);
    //         }
    //     }
    //     return columnValues;
    // }

    //Monitoring EOSE page


    async ClickOnEOSEButton() {
        await webactions.waitForElementAttached(this.EoseBtn);
        await webactions.clickElement(this.EoseBtn);

    }
    // async ChecktheRowforAccount(name: string) {
    //     let acrow = this.page.locator(this.rowcheck);
    //     await webactions.delay(2000);
    //     expect.soft(acrow).toContainText(name);
    //     await webactions.clickElement(this.rowcheck);
    //     await webactions.delay(2000);
    // }

    async NameMenu() {
        await this.page.hover(this.namebox_hover)
        // await this.page.waitForSelector(this.name_menu_btn)
        // await this.page.hover(this.short_name_menu_btn);
        await this.page.locator(this.name_menu_btn).click({ force: true });
        await webActions.delay(3000);
        await webactions.clickElement(this.name_menu_filter_btn);
        // await webactions.clickElement(this.bess);
    }
    async NameFor_Filter(value: string) {
        // await webactions.enterElementText(this.enternameforfilter,value);
        // await webactions.delay(2000);
        await webactions.waitForElementAttached(this.enternameforfilter);
        await webactions.clickElement(this.enternameforfilter);
        await webactions.delay(2000);
        await this.page.keyboard.type(value);
        await webactions.delay(2000);
    }
    // async clickOnFirstElement() {
    //     await webactions.waitForElementAttached(this.clickonfirstelement);
    //     await webactions.clickElement(this.clickonfirstelement);
    //     await webactions.delay(2000);
    // }
    async filterfromcolumnEOSE(idname: string, name: string) {

        // await webactions.waitForElementAttached(this.sortingfromcolumn(idname));
        await webactions.clickElement(this.sortingfromcolumn(idname));
        await webactions.clickElement(this.buttonsforsorting("filter"));
        // await webactions.delay(2000);
        let searchtxt = `//div[@class="ag-filter-body"]//div[@ref="eValue1"]//input`;
        await this.page.fill(searchtxt, name);
        //await webactions.delay(2000);
        await webactions.clickElement(this.buttonsforsorting("filter"));
        await webactions.delay(2000);
    }

    async FindtheSocTile() {
        let Soc = this.page.locator(this.soc);
        expect.soft(Soc).toBeVisible();
        await webactions.delay(2000);
        let tv2 = await this.page.innerText(this.socvalue);
        expect.soft(tv2).not.toBe("");
        console.log("SoC :- ", tv2);

    }

    async checkPageisCorrectorNot(name: string) {
        await webactions.delay(2000);
        await webActions.waitForElementAttached(this.Checkpagename);
        let pgname = (await this.page.textContent(this.Checkpagename)).split("/");
        console.log("Page Name :- ", pgname[2]);
        expect(pgname[2]).toContain(name);
    }

    async AddProject() {
        await webactions.waitForElementAttached(this.configureProject);
        await webactions.clickElement(this.configureProject);
    }
    async ClickOnSearchButton() {
        await webactions.waitForElementAttached(this.configureRefresh);
        await webactions.clickElement(this.configureRefresh);
    }
    async SelectDropdownvalue(name: string) {
        await webactions.waitForElementAttached(this.dropdown(name));
        await webactions.clickElement(this.dropdown(name));
    }
    async AddAccount() {
        await webactions.waitForElementAttached(this.configureAccount);
        await webactions.clickElement(this.configureAccount);
    }
    async AddDashboard() {
        await webactions.waitForElementAttached(this.configureDashboard);
        await webactions.clickElement(this.configureDashboard);
    }
    async Checkthetable() {
        await webactions.waitForElementAttached(this.Afterloadingtable);
        let af = this.page.locator(this.Afterloadingtable);
        await webactions.delay(2000);
        expect.soft(af).toBeVisible();
    }

    async ClickonHyperlinkRow(name: string) {
        await webactions.waitForElementAttached(this.hyperlinkrow(name));
        await webactions.clickElement(this.hyperlinkrow(name));
        await webactions.delay(3000);
    }
    async BackToSitSubgrpString() {
        await webactions.waitForElementAttached(this.backtositSubgrpStrng);
        await webactions.clickElement(this.backtositSubgrpStrng);
        await webactions.delay(3000);
    }
    async BackToBlock() {
        await webactions.waitForElementAttached(this.backtoBlock);
        await webactions.clickElement(this.backtoBlock);
        await webactions.delay(3000);
    }
    async GetHiddenColumnsEOSE(locator: string, totalColumns: number) {
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
    async GetHiddenColumnValuesEOSE(columns: Array<string>, colNum: number) {
        let columnValues = []
        let SecondElement = '//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@aria-colindex="2"]';
        await this.page.locator(SecondElement).click();
        await this.page.keyboard.press("ArrowRight")
        for (let i = 0; i < columns.length; i++) {
            if (i < 9) {
                let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 3)}"]`);
                await rowElement.click();
            }
            for (let j = 0; j < 2; j++)
                await this.page.keyboard.press("ArrowRight");
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

    async ScrollToLeft() {
        let rowEle = this.page.locator(`//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@aria-colindex="2"]`);
        await this.page.locator(`//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@aria-colindex="8"]`).click();
        for (let j = 0; j < 10; j++) {
            if (!(await rowEle.isVisible())) {
                await this.page.keyboard.press("ArrowLeft");
            }
        }


    }


    // async GetColumns(locator: string) {
    //     const elements = await this.page.$$(locator);
    //     let colmuns = [];
    //     for (const element of elements) {
    //         let col = await element.innerText();
    //         colmuns.push(col)
    //     }
    //     return colmuns;
    // }
    // async GetColumnValues(columns: Array<string>, colNUm: number) {
    //     let columnValues = []
    //     for (let i = 0; i < columns.length; i++) {
    //         let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNUm}]`;
    //         let colValue = await this.page.$eval(locator, (ele) => ele.textContent);
    //         if (colValue.match('\n')) {
    //             columnValues.push(' ');
    //         } else {
    //             columnValues.push(colValue);//div[@ref="gridHeader"]//div[@aria-rowindex="1"]
    //         }
    //     }
    //     return columnValues;
    // }
    async GetHiddenColumnValuesSubgroup(columns: Array<string>, colNum: number) {
        let columnValues = []
        let SecondElement = '//div[@class="ag-center-cols-container"]/div[@row-index="0"]/div[@aria-colindex="2"]';
        await this.page.locator(SecondElement).click();
        await this.page.keyboard.press("ArrowRight")
        for (let i = 0; i < columns.length; i++) {
            if (i < 9) {
                let rowElement = this.page.locator(`//div[@row-index="0"]//div[@aria-colindex="${(i + 3)}"]`);
                await rowElement.click();
            }
            for (let j = 0; j < 2; j++)
                await this.page.keyboard.press("ArrowRight")
            if (i < 12) {
                let locator = `//div[@ref="centerContainer"]//div[@row-index="0"]/div[@aria-colindex=${i + colNum}]`;

                let colValue = await this.page.$eval(locator, (ele) => ele.textContent);

                if (colValue.match('\n')) {
                    columnValues.push(' ');
                } else {
                    columnValues.push(colValue);
                }
            }
        }
        return columnValues;
    }
    async CheckNamecolumn() {
        let nm = await this.page.innerText(`//div[@row-index="0"]//div[@col-id="Name"]`);
        console.log("Name :- ", nm);
        expect.soft(nm).not.toBe("");
    }
    async CheckStatuscolumn() {
        let nm = await this.page.innerText(`//div[@row-index="0"]//div[@col-id="Status"]`);
        console.log("Status :- ", nm);
        expect.soft(nm).not.toBe("");
    }
    async CheckEnabledcolumn() {
        let nm = await this.page.innerText(`//div[@row-index="0"]//div[@col-id="enabled"]`);
        console.log("Enabled Strings :- ", nm);
        expect.soft(nm).not.toBe("");
        // nm=await this.page.innerText(`//div[@row-index="0"]//div[@col-id="enabled"]//div[@title="Disabled Strings"]`);
        // console.log("Disabled:",nm);
        // expect.soft(nm).not.toBe("");
    }
    async CheckConnectedcolumn() {
        let nm = await this.page.innerText(`//div[@row-index="0"]//div[@col-id="connected"]`);
        console.log("Connected Strings :- ", nm);
        expect.soft(nm).not.toBe("");
    }
    async CheckWFAcolumn() {
        let nm = await this.page.innerText(`//div[@row-index="0"]//div[@col-id="DeviceStatusValue"]`);
        console.log("WAF :- ", nm);
        expect.soft(nm).not.toBe("");
    }
    async CheckContractorcolumn() {
        let nm = await this.page.innerText(`//div[@row-index="0"]//div[@col-id="ContactorStatus"]`);
        console.log("Contractorstatus :- ", nm);
        expect.soft(nm).not.toBe("");
    }









}