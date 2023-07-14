import { EHSPageObject } from '@objects/Regration/CMMS/EHSPageObjects';
import { WebActions } from '@lib/WebActions'
import { testConfig } from '../../../../testConfig';
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
import { DateActions } from "@lib/web/DateActions";
import { Page, expect } from "@playwright/test";
import { chromium, ChromiumBrowser } from "@playwright/test";
import * as excel from 'exceljs';



let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let downfile:string;


function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

export class EHSPage extends EHSPageObject {

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        dateObj = new DateActions(this.page);

    }

    async AddFromDropdown(locator: string) {
        await webactions.waitForElementAttached(locator);
        await webactions.clickElement(locator);

    }
    async AddFromSeverityDropdown(value: string) {
        await webactions.waitForElementAttached(this.SeverityDropdown(value));
        await webactions.clickElement(this.SeverityDropdown(value));

    }

    async AddProject() {
        await this.AddFromDropdown(this.ProjectDropdown);
    }
    async SelectFromdropdown(name: string) {
        await webactions.waitForElementAttached(this.Dropdownvalues(name));
        await webactions.clickElement(this.Dropdownvalues(name));
        await webactions.delay(2000);

    }

    async SelectObservationDate(date: string) {
        await webactions.clickElement(this.calenderbtn);
        await dateObj.SelectDate(date);
        await webactions.delay(2000);
    }
    async SelectTargetDate(date: string) {
        await webactions.clickElement(this.targetdate);
        await dateObj.SelectDate(date);
        await webactions.delay(2000);
    }
    async SelectclosedDate(date: string) {
        await webactions.clickElement(this.closedate);
        await dateObj.SelectDate(date);
        await webactions.delay(2000);
    }

    async AddTypeofObservation() {
        await this.AddFromDropdown(this.typeofObservation);
    }
    async AddLocation() {
        await this.AddFromDropdown(this.location);

    }
    async AddSeverity() {
        await this.AddFromDropdown(this.severity);

    }
    async AddRepeat() {
        await this.AddFromDropdown(this.repeat);

    }
    async AddDescrption(value: string) {
        await webactions.waitForElementAttached(this.Description);
        await webactions.enterElementText(this.Description, value);
        await webactions.delay(2000);

    }
    async Uploadfile(filename: string) {
        let [upload] = await Promise.all([
            this.page.waitForEvent("filechooser"),
            this.page.click(this.uploadbtn)
        ]);
        upload.setFiles(filename);
        //await this.page.locator('//button[contains(text(), "Ok")]').click();
    }

    async filterFromProject() {
        await this.page.locator(this.filterproject).click({ force: true });
    }

    async filterProjectValue(project: string) {

        await webactions.clickElement(this.filterProject_Value("Select All"));
        await webactions.clickElement(this.filterProject_Value("UnSelect All"));
        // await webactions.clickElement(this.select_Project);
        // await webactions.clickElement(this.filterproject);
        // await webactions.delay(5000);
        let checkBoxArray = project.split(",");

        for (let i = 0; i < (checkBoxArray.length); i++) {
            await webactions.waitForElementAttached(this.filterProject_Value(checkBoxArray[i]));
            await this.page.click(this.filterProject_Value(checkBoxArray[i]));
            await delay(1000);
        }

        await webactions.clickElement(this.select_Project);

    }



    async filterFromStatus() {
        await this.AddFromDropdown(this.filterStatus);
    }

    async filterObservationfromDate(date: string) {
        await webactions.clickElement(this.filterobsrvtnFrom);
        await dateObj.SelectDate(date);
        await webactions.delay(2000);
    }

    async filterObservationToDate(date: string) {
        await webactions.clickElement(this.filterobsrvtnTo);
        await dateObj.SelectDate(date);
        await webactions.delay(2000);
    }
    async ClickOnFilterSearchButton() {
        await webactions.clickElement(this.filtersearch);
    }

    async EdittheStatus() {
        await webactions.waitForElementAttached(this.EditStatus);
        await webactions.clickElement(this.EditStatus);
    }

    async AddTargetDate(date: string) {
        await webactions.waitForElementAttached(this.targetdate);
        await webactions.clickElement(this.targetdate);
        await dateObj.SelectDate(date);
        await webactions.delay(2000);
    }
    async AddCloseDate(date: string) {
        await webactions.waitForElementAttached(this.closedate);
        await webactions.clickElement(this.closedate);
        await dateObj.SelectDate(date);
        await webactions.delay(2000);
    }
    async UploadafterImage(filename: string) {

        await webactions.delay(2000);
        await this.page.locator(this.afterimage).scrollIntoViewIfNeeded();

        let [upload] = await Promise.all([
            this.page.waitForEvent("filechooser"),
            this.page.click(this.afterimage)
        ]);
        upload.setFiles(filename);
        await webactions.delay(2000);
        //await this.page.locator('//button[contains(text(), "Ok")]').click();
    }
    async Downloadfile() {
        let download = await Promise.all([
            this.page.waitForEvent("download"),
            this.page.click(this.downloadbtn)
        ]);
        let filename = download[0].suggestedFilename();
        await download[0].saveAs(filename);
        await webactions.delay(5000);
        downfile=filename;
    }

    // READING EXCEL FILE

    // // var Excel = require('exceljs');
    // // let workbook = new Excel.Workbook();
    // var Excel = require(filename);
    // let workbook = new Excel.Workbook();


    // workbook.xlsx.readFile(filename)
    //     .then(function () {
    //         var worksheet = workbook.getWorksheet(1);
    //         var row = worksheet.getRow(5);
    //         console.log(row);
    //         // row.getCell(1).value = 5; // A5's value set to 5
    //         // row.commit();
    //         // return workbook.xlsx.writeFile('new.xlsx');
    //     })


    async openBrowser(): Promise<ChromiumBrowser> {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('C:/Users/Prescinto/.vscode/Test case 1/playwright/playwright/EHS_09062023_163407.xlsx');
        return browser;
    }

    async readExcel(): Promise<void> {
        console.log("open");
        var Excel = require('exceljs');
        var workbook = new Excel.Workbook();

        workbook.xlsx.readFile('C:/Users/Prescinto/.vscode/Test case 1/playwright/playwright/EHS_09062023_163407.xlsx')
            .then(function () {
                var worksheet = workbook.getWorksheet(1);
                var row = worksheet.getRow(5);
                row.getCell(1).value = 12; // A5's value set to 5
                row.commit();
                console.log("close");
                worksheet.eachRow((row, rowNumber) => {
                    row.eachCell((cell, colNumber) => {
                        const value = cell.value;
                        console.log(`Cell(${rowNumber}, ${colNumber}): ${value}`);
                    });
                });
                return workbook.xlsx.writeFile('C:/Users/Prescinto/.vscode/Test case 1/playwright/playwright/tests/resources/DEMO/Excel.json');
            })

        /*  const browser = await this.openBrowser();
          const page = await browser.newPage();
  await webactions.delay(2000);
          // Read the Excel file
          const fileInput = await page.$('input[type="file"]');
          await fileInput.setInputFiles('https://docs.google.com/spreadsheets/d/12cZ79vpGoRWqMSeEbjlXRNvtp_yr64Hk/edit#gid=1496391120');
  
          // Wait for the file to be processed
          await page.waitForLoadState('networkidle');
  
          // Get the workbook and the specific worksheet
          const workbook = new excel.Workbook();
          await workbook.xlsx.readFile('https://docs.google.com/spreadsheets/d/12cZ79vpGoRWqMSeEbjlXRNvtp_yr64Hk/edit#gid=1496391120');
          const worksheet = workbook.getWorksheet('Sheet1');
  
          // Iterate over the rows and columns to read the values
          worksheet.eachRow((row, rowNumber) => {
              row.eachCell((cell, colNumber) => {
                  const value = cell.value;
                  console.log(`Cell(${rowNumber}, ${colNumber}): ${value}`);
              });
          });
  
          await browser.close();
          // readExcel();
  */
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

    async Removefilterfromcolumn(idname: string) {
        await webactions.clickElement(this.sortingfromcolumn(idname));
        let searchtxt = `//div[@class="ag-filter-body"]//div[@ref="eValue1"]//input`;
        await webactions.delay(2000);
        await webactions.clickElement(searchtxt);
        await this.page.locator(searchtxt).fill(" ");
        await this.page.keyboard.press('Backspace');

    }

    async ClickonEHSRow(name: string, status: string) {
        await webactions.delay(2000);
        await webactions.waitForElementAttached(this.DescriptionRow(name));
        let checkrow = this.page.locator(this.DescriptionRow(name));
        await this.ScrollToRight();
        let rowindex = await checkrow.getAttribute('row-index');
        console.log(rowindex);
        await webactions.delay(2000);
        let loc = this.page.locator(this.Clickonrowstatus(rowindex));
        console.log((this.page.innerText(this.Clickonrowstatus(rowindex))));
        await webactions.delay(2000);
        expect(loc).toHaveText(status);
        await webactions.delay(2000);
        await webactions.clickElement(this.DescriptionRow(name));
    }

    async filterfromcolumn(idname: string, name: string) {


        await webactions.clickElement(this.sortingfromcolumn(idname));
        // await webactions.clickElement(this.buttonsforsorting("filter"));
        await webactions.delay(4000);
        let searchtxt = `//div[@class="ag-filter-body"]//div[@ref="eValue1"]//input`;
        await webactions.enterElementText(searchtxt, name);
        await webactions.delay(2000);
        await webactions.clickElement(this.buttonsforsorting("filter"));
        await webactions.delay(2000);
    }

    async ScrollToRight() {

        const userEle =
            `//div[@class="ag-center-cols-viewport"]//div[@row-index="0"]//div[@col-id="Description"]`;
        await webactions.clickElement(userEle);
        for (let i = 0; i < 100; i++) {
            if (!(await this.page.locator(`//div[@class="ag-center-cols-viewport"]//div[@row-index="0"]//div[@col-id="Status"]`).isVisible())) {
                await this.page.keyboard.press("ArrowRight");

            }
        }
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

    //Assertion
    async ProjectAssertion(value: string) {
        await console.log(" --- Seprate Validations Of Filter Parameters --- ");
        console.log(" ");
        let projectassertion = await this.page.locator(this.projassertion);
        let countvalue = await projectassertion.count();
        console.log("Here after applying filter only for ", value, ", We are getting ", countvalue, " Rows of that project.");
        if (countvalue == 0) {
            console.log("No Data Available");
        } else {
            for (let i = 0; i < countvalue; i++) {
                // for(let i=0;i<parseInt(tskno);i++){
                let projectrow = await this.page.innerText(`//div[@row-index="${i}"]//div[@col-id="ProjectName"]`);
                await webactions.delay(3000);
                expect.soft(projectrow).toContain(value);
                // console.log(projectrow);
            }
        }
        //}
    }
    async ObservationFromAssertion(fromdate: string, todate: string) {
        let observfromassertion = await this.page.locator(this.observationfromassertion);
        await webactions.delay(5000);
        let countvalue = await observfromassertion.count();
        console.log("Here after applying filter for Observation From & Observation To, We are getting ", countvalue, " Rows of that Observation Date.");
        if (countvalue == 0) {
            console.log("No Data Available");
        } else {
            await console.log("Here we are getting Date's between ", fromdate, " - ", "", todate, " after applying filter for Observation From & Observation To");
            for (let i = 0; i < countvalue; i++) {
                const observedaterow = (await this.page.innerText(`//div[@row-index="${i}"]//div[@col-id="ObserveDate"]`)).split(" ");
                let observed_date = new Date(observedaterow[0]).toLocaleDateString();
                // console.log("new Date :- ",observed_date);

                const FromDate: Date = new Date(fromdate);
                const From_Date = new Date(FromDate).toLocaleDateString();
                // console.log(From_Date);
                const ToDate: Date = new Date(todate);
                const To_Date = new Date(ToDate).toLocaleDateString();
                // console.log(To_Date);
                if (observed_date >= From_Date && observed_date <= To_Date) {
                    await console.log(observed_date);
                } else {
                    console.log('No Data Found')
                }
            }

        }

    }
    async scrollforstatus() {
        await webactions.clickElement(this.od);
        for (let j = 0; j <= 20; j++) {
            if (!(await this.page.locator(this.status).isVisible())) {
                await this.page.keyboard.press('ArrowRight');
            }
            await this.page.keyboard.press('ArrowRight');
        }
    }
    async StatusAssertion(value: string) {

        // await this.page.locator(this.status).scrollIntoViewIfNeeded();
        let statusassertion = await this.page.locator(this.statusassertion);
        await webactions.delay(3000);
        let countvalue = await statusassertion.count();
        console.log("Here after applying filter for Status - ", value, ", We are getting ", countvalue, " Rows of that status.");
        if (countvalue == 0) {
            console.log("No Data Available");
        } else {
            //for (let i = 0; i < 2; i++) {
            for (let i = 0; i < countvalue; i++) {
                // for(let i=0;i<parseInt(tskno);i++){
                let statusrow = await this.page.innerText(`//div[@row-index="${i}"]//div[@col-id="Status"]`);
                await webactions.delay(2000);
                expect.soft(statusrow).toContain(value);
                // console.log(statusrow);
            }
        }
        //}
    }

    // Checking funcationality of reset button is working or not
    async CheckResetFuncationality(name:string) {
        console.log(" ");
        await console.log(" --- Checking Reset Button Is Working For Filter --- ");
        console.log(" ");
        await webactions.delay(3000);
        let proj = await this.page.textContent(this.filter_project);
        console.log("Project After Reset :- ", proj);
        expect.soft(proj).toContain(name);
        // await webactions.delay(2000);

        // Not Working

        // // let obserfrom = await this.page.inputValue(this.filter_obserfrom);
        // let obserfrom = await this.page.locator(this.filter_obserfrom);
        // await webactions.delay(2000);
        // console.log("Observation From After Reset :- ",obserfrom);
        // expect.soft(obserfrom).toHaveText("Select date time");
        // await webactions.delay(2000);

        // let obserto = await this.page.innerText(this.filter_obserto);
        // await webactions.delay(2000);
        // console.log("Observation To After Reset :- ",obserto);
        // expect.soft(obserto).toBe("Select date time");
        // await webactions.delay(2000);

        let respons = await this.page.textContent(this.filter_respons);
        console.log("Responsibility After Reset :- ", respons);
        expect.soft(respons).toContain("Responsibility");

        let statusfilter = await this.page.textContent(this.filter_status);
        console.log("Status After Reset :- ", statusfilter);
        expect.soft(statusfilter).toContain("Status");

    }
    async checkingedit(project: string, facility: string, location: string, description: string, observedby: string, severity: string, beforeimg: string) {
        // console.log(" ");
        // await console.log(" --- Checking Edit Is Working  --- ");
        // console.log(" ");
        await webactions.delay(3000);
        let proj = await this.page.textContent(this.edit_project);
        console.log("Project :- ", proj);
        expect.soft(proj).toContain(project);
        await webactions.delay(2000);
        let editfacility = await this.page.textContent(this.edit_facility);
        console.log("Type Of Observation :- ", editfacility);
        expect.soft(editfacility).toContain(facility);
        await webactions.delay(2000);
        let editlocation = await this.page.textContent(this.edit_location);
        console.log("Location :- ", editlocation);
        expect.soft(editlocation).toContain(location);
        await webactions.delay(2000);
        // let editdescription = await this.page.innerText(this.edit_description);
        // console.log("Description After Edit :- ", editdescription);
        // expect.soft(editdescription).toContain(description);
        // await webactions.delay(2000);
        let editobservedby = await this.page.textContent(this.edit_observedby);
        console.log("Observed By :- ", editobservedby);
        expect.soft(editobservedby).toContain(observedby);
        await webactions.delay(2000);
        let editseverity = await this.page.textContent(this.edit_severity);
        console.log("Severity :- ", editseverity);
        expect.soft(editseverity).toContain(severity);
        await webactions.delay(2000);
        let editbeforeimage = await this.page.textContent(this.edit_beforeimage);
        console.log("Uploded File Name :- ", editbeforeimage);
        expect.soft(editbeforeimage).toContain(beforeimg);
        await webactions.delay(2000);
    }
    async AddPrevention(value: string) {
        await webactions.waitForElementAttached(this.prevention);
        await webactions.enterElementText(this.prevention, value);
        await webactions.delay(2000);
    }
    async CheckingValueIsReadOnly (value: string) {
        await webactions.waitForElementAttached(this.IsReadableOnly(value));
        await this.page.locator(this.IsReadableOnly(value)).scrollIntoViewIfNeeded();
        let var0 = this.page.locator(this.IsReadableOnly(value));
        expect.soft(var0).not.toBeEditable();
        await webactions.delay(2000);
    }
    async CheckingValueIsReadOnly1 (value: string) {
        await webactions.waitForElementAttached(this.IsReadableOnly1(value));
        await this.page.locator(this.IsReadableOnly1(value)).scrollIntoViewIfNeeded();
        let var1 = this.page.locator(this.IsReadableOnly1(value));
        expect.soft(var1).not.toBeEditable();
        await webactions.delay(2000);
    }
    async CheckingValueIsReadOnly2 (value: string) {
        await webactions.waitForElementAttached(this.IsReadableOnly2(value));
        await this.page.locator(this.IsReadableOnly2(value)).scrollIntoViewIfNeeded();
        let var2 = this.page.locator(this.IsReadableOnly2(value));
        expect.soft(var2).not.toBeEditable();
        await webactions.delay(2000);
    }


    // async FacilityAuditStatus(value:string) {
    //     await webactions.waitForElementAttached(this.FAstatus);
    //     await webactions.clickElement(this.FAstatus);
    //     expect.soft(this.page.locator(this.FAstatusList(value))).toBeVisible();
    // }


}