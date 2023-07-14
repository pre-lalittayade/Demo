// import { EHSPageObject } from '@objects/CMMS/EHSPageObjects';
import { WebActions } from '@lib/WebActions'
import { testConfig } from '../../../../testConfig';
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
import { DateActions } from "@lib/web/DateActions";
import { Page, expect } from "@playwright/test";
import { EHSManualDataObject } from '@objects/Regration/CMMS/EHSManualDataObject';


let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;


function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

export class EHSMDPage extends EHSManualDataObject {

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        dateObj = new DateActions(this.page);

    }


    async AddProject() {
        await webactions.waitForElementAttached(this.ProjectDropdown);
        await webactions.clickElement(this.ProjectDropdown);
    }
    async SelectFromdropdown(name: string) {
        await webactions.waitForElementAttached(this.Dropdownvalues(name));
        await webactions.clickElement(this.Dropdownvalues(name));
        await webactions.delay(2000);

    }
    async SelectObservationMonth(date: string) {
        await webactions.clickElement(this.ObservationMonth);
        await dateObj.SelectDate(date);
        await webactions.delay(2000);
    }
    async Enterdata(locator: string, time: string) {
        await webactions.waitForElementAttached(locator);
        await webactions.enterElementText(locator, time);
        await webactions.delay(2000);
    }
    async NoofLostTimeInjuries(hrs: string) {
        //await webactions.waitForElementAttached(this.LostTimeInjrs);
        await this.Enterdata(this.LostTimeInjrs, hrs);
    }
    async AVGNoofWorkers(hrs: string) {
        await this.Enterdata(this.Avgnoworkers, hrs);
    }
    async AvgNoofPersonsWorkPerDay(hrs: string) {
        await this.Enterdata(this.AvgNoofPerson, hrs);
    }
    async TotalManHours(hrs: string) {
        await this.Enterdata(this.Manhours, hrs);
    }
    async TotalSafeManHours(hrs: string) {
        await this.Enterdata(this.Ttlsafemanhrs, hrs);
    }
    async LostWorkDay(hrs: string) {
        await this.Enterdata(this.lostworkday, hrs);
    }
    async HSEMeetinTraining(hrs: string) {
        await this.Enterdata(this.HSEmeeting, hrs);
    }
    async InductionTrainingManHours(hrs: string) {
        await this.Enterdata(this.InductionTraining, hrs);
    }

    async FilterfromProject(project: string) {
        await webactions.waitForElementAttached(this.filterproject);
        await webactions.clickElement(this.filterproject);
        await webactions.clickElement(this.filterProject_Value("Select All"));
        await webactions.clickElement(this.filterProject_Value("UnSelect All"));
        await webactions.clickElement(this.select_Project);
        //  await webactions.clickElement(this.filterproject);
        await webactions.delay(1000);
        let checkBoxArray = project.split(",");

        for (let i = 0; i < (checkBoxArray.length); i++) {
            await webactions.waitForElementAttached(this.filterProject_Value(checkBoxArray[i]));
            await this.page.click(this.filterProject_Value(checkBoxArray[i]));
            await delay(1000);
        }

        await webactions.clickElement(this.filterproject);
    }


    async clickonSearchbtn() {
        await webactions.clickElement(this.filterSearch);
    }

    async clickOnFilterResetBtn() {
        await webactions.clickElement(this.filterReset);
    }


    async filterfromcolumn(idname: string, name: string) {


        await webactions.clickElement(this.sortingfromcolumn(idname));
        await webactions.clickElement(this.buttonsforsorting("filter"));
        await webactions.delay(4000);
        let searchtxt = `//div[@role="dialog"]//div[@class="ag-filter-body"]//div[@ref="eWrapper"]//input[@placeholder="Filter..."]`;
        await webactions.enterElementText(searchtxt, name);
        await webactions.delay(2000);
        await webactions.clickElement(this.buttonsforsorting("filter"));
        await webactions.delay(2000);
    }

    async filterfromcolumnSecond(idname: string, name: string) {


        await webactions.clickElement(this.sortingfromcolumn(idname));
        // await webactions.clickElement(this.buttonsforsorting("filter"));
        await webactions.delay(4000);
        let searchtxt = `//div[@role="dialog"]//div[@class="ag-filter-body"]//div[@ref="eWrapper"]//input[@placeholder="Filter..."]`;
        await webactions.enterElementText(searchtxt, name);
        await webactions.delay(2000);
        await webactions.clickElement(this.buttonsforsorting("filter"));
        await webactions.delay(2000);
    }

    async CheckEHSManualData(value: string) {
        await webactions.delay(2000);
        await webactions.waitForElementAttached(this.checkavgworkers);

        let avgwrk = await this.page.innerText(this.checkavgworkers);
        await webactions.delay(2000);
        expect(avgwrk).toContain(value);
        await webactions.clickElement(this.checkavgworkers);

    }

    async sortColumn(name: string) {
        await webactions.waitForElementAttached(this.columntosort(name));
        await webactions.clickElement(this.columntosort(name));
        await webactions.delay(2000);
        await webactions.clickElement(this.DescendingSort(name));
        await webactions.delay(2000);
        await webactions.clickElement(this.AscendingSort(name));
        await webactions.delay(2000);

        // await webactions.clickElement(this.columntosort(name));
        // await webactions.delay(2000);
        // await webactions.clickElement(this.AscendingSort(name));
        // await webactions.delay(2000);
    }
    async sortandColumnlvloprtns(idname: string, name: string) {

        //await this.page.locator(this.sortingfromcolumn(idname)).scrollIntoViewIfNeeded();
        await webactions.clickElement(this.sortingfromcolumn(idname));
        //await webactions.clickElement(this.buttonsforsorting("general"));
        await webactions.waitForElementAttached(this.pincolumn("Pin Column"));
        await this.page.hover(this.pincolumn("Pin Column"));
        await webactions.clickElement(this.pinvalues("Pin Right"));
        await webactions.delay(2000);
        await webactions.clickElement(this.sortingfromcolumn(idname));
        await webactions.clickElement(this.pincolumn("Pin Column"));
        await webactions.clickElement(this.pinvalues("No Pin"));
        await webactions.delay(2000);

        await webactions.clickElement(this.sortingfromcolumn(idname));
        await webactions.delay(2000);
        await webactions.waitForElementAttached(this.pincolumn("Autosize This Column"));
        await webactions.clickElement(this.pincolumn("Autosize This Column"));
        await webactions.delay(2000);
        await webactions.clickElement(this.sortingfromcolumn(idname));
        await webactions.waitForElementAttached(this.pincolumn("Reset Columns"));
        await webactions.clickElement(this.pincolumn("Reset Columns"));
        await webactions.delay(2000);

        await webactions.clickElement(this.sortingfromcolumn(idname));
        await webactions.delay(2000);
        await webactions.waitForElementAttached(this.pincolumn("Autosize All Columns"));
        await webactions.clickElement(this.pincolumn("Autosize All Columns"));
        await webactions.delay(2000);
        await webactions.clickElement(this.sortingfromcolumn(idname));
        await webactions.waitForElementAttached(this.pincolumn("Reset Columns"));
        await webactions.clickElement(this.pincolumn("Reset Columns"));
        await webactions.delay(2000);

        await webactions.clickElement(this.sortingfromcolumn(idname));

        await webactions.clickElement(this.buttonsforsorting("columns"));
        await webactions.clickElement(this.selectallcheckbx);
        await webactions.delay(4000);
        await webactions.clickElement(this.selectallcheckbx);
        await webactions.clickElement(this.columnchkbx(name));
        await webactions.delay(4000);
        await webactions.clickElement(this.columnchkbx(name));

    }
    async checkingeditproject(project: string) {
        await webactions.delay(2000);
        let proj = await this.page.textContent(this.edit_project);
        console.log("Project :- ", proj);
        expect.soft(proj).toContain(project);
        await webactions.delay(2000);
    }

    async checkingedit(value: string, valueofparameter: string, whichparameter: string) {
        await webactions.delay(2000);
        await this.page.locator(this.edit_parameters(value)).scrollIntoViewIfNeeded();
        let editparameters = await this.page.inputValue(this.edit_parameters(value));
        console.log(whichparameter, " :- ", editparameters);
        expect.soft(editparameters).toContain(valueofparameter);
        await webactions.delay(1000);
    }

    async checkingresetforfilter(valuefilterproj: string) {
        await webactions.delay(2000);
        let filterproj = await this.page.textContent(this.resetfilterproj);
        console.log( " Project :- ", filterproj);
        expect.soft(filterproj).toContain(valuefilterproj);
        await webactions.delay(1000);
    }
}


