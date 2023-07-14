import { CommonMethodsObject } from "@objects/Regration/CommonObject/CommonMethodsObject";
import { WebActions } from '@lib/WebActions'
import { testConfig } from '../../../../testConfig';
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
// import { TextBoxActions } from "@lib/web/TextBoxActions";
import { DateActions } from "@lib/web/DateActions";
import { Page, expect } from "@playwright/test";
// import { ButtonActions } from "@lib/web/ButtonActions";
import { TextBoxActions } from '@lib_web/TextBoxActions';
import { ButtonActions } from '@lib_web/ButtonActions';
import { MenuActions } from "@lib/web/MenuActions";


// let webactions: WebActions;
// let comboBoxObj: ComboBoxActions;
let textboxObj: TextBoxActions;
// let dateObj: DateActions;
let January: string;
let February: string;
let March: string;
let April: string;
let May: string;
let June: string;
let July: string;
let August: string;
let September: string;
let October: string;
let November: string;
let December: string;
let T: number;
let t: number;
let table: string;
let dessertsRow:string;
let desserts:string;
let originalData:string;


let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;
let textBoxActionsObj: TextBoxActions;
let buttonActionsObj: ButtonActions;
let webActions: WebActions;

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

export class CommonMethodsPage extends CommonMethodsObject {
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;

        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        dateObj = new DateActions(this.page);
        menuObj = new MenuActions(this.page);
        textboxObj = new TextBoxActions(this.page);
        textBoxActionsObj = new TextBoxActions(this.page)
        buttonActionsObj = new ButtonActions(this.page)
        webActions = new WebActions(this.page);

    }

    async loginToApplication(username1: string, password1: string): Promise<void> {
        // const decipherPassword = await webActions.decipherPassword();
        // await textBoxActionsObj.enterElementText(this.email_txt, testConfig.username);
        // await textBoxActionsObj.enterElementText(this.password_txt, testConfig.password);
        await textBoxActionsObj.enterElementText(this.email_txt, username1);
        await textBoxActionsObj.enterElementText(this.password_txt, password1);
        await buttonActionsObj.clickElement(this.login_btn);
        await webActions.delay(5000);
        await webActions.waitForElementAttached(this.logout_btn);
    }

    async LogoutOfApplication(): Promise<void> {
        await buttonActionsObj.clickElement(this.logout_btn);
        await buttonActionsObj.clickElement(this.logout_confirm_yes_btn);
        await webActions.waitForElementAttached(this.login_btn)
    }

    async ClickAddButton() {    //same as Warehouse//Same as workorder
        await webactions.waitForElementAttached(this.adding_btn);
        await webactions.clickElement(this.adding_btn);

    }

    async Filter() {                     //same as Resources//same as anomily//same as warehouse
        await webactions.waitForElementAttached(this.filter);
        await webactions.clickElement(this.filter);
        await webactions.delay(2000);
    }

    async Save() {                                  //same as  activity//same as Resources//same as Anomily//same as warehouse
        await webactions.waitForElementAttached(this.saving_btn);
        await webactions.clickElement(this.saving_btn);
        await webactions.delay(3000);
        await this.page.locator('//button[contains(text(), "Yes")]').click();

        await this.page.locator('//button[contains(text(), "Ok")]').click();

    }

    async Reset() {
        await webactions.waitForElementAttached(this.reset);
        await webactions.clickElement(this.reset);
        await webactions.delay(2000);
    }

    async Edit() {
        await webactions.waitForElementAttached(this.editing_btn);
        await webactions.clickElement(this.editing_btn);
        await webactions.delay(2000);
    }

    async View() {
        await webactions.waitForElementAttached(this.view_btn);
        await webactions.clickElement(this.view_btn);
        await webactions.delay(2000);
    }


    async Close() {
        await webactions.waitForElementAttached(this.view_btn);
        await webactions.clickElement(this.view_btn);
        await webactions.delay(2000);
    }
    async Delete() {
        await webactions.clickElement(this.deleting_btn);
        await webactions.delay(2000);
        await this.page.locator('//button[contains(text(), "Yes")]').click();

        await this.page.locator('//button[contains(text(), "Ok")]').click();


    }
    async ClickCancelButton() {    //same as Warehouse//Same as workorder
        await webactions.waitForElementAttached(this.cancel_btn);
        await webactions.clickElement(this.cancel_btn);
        await webactions.delay(2000);
        await this.page.locator('//button[contains(text(), "Yes")]').click();
    }

    async FilterCloseButton() {
        await webactions.waitForElementAttached(this.filterclose);
        await webactions.clickElement(this.filterclose);
        await webactions.delay(2000);
    }

    async AddPPE(value: string, item: string, name: string) {
        await webactions.waitForElementAttached(this.JSA_SearchBtn(value));
        await webactions.clickElement(this.JSA_SearchBtn(value));
        await webactions.clickElement(this.JSA_typedropdown);
        await webactions.waitForElementAttached(this.JSA_typevalue(item));
        await webactions.clickElement(this.JSA_typevalue(item));
        await webactions.enterElementText(this.JSA_Nametxt, name);
        //if(value==="PPE"){
        await webactions.clickElement(this.ActivityJsaAdding_Search);
        // }if(value=="Tools"){
        //  await webactions.clickElement(this.ToolsAdding_searchbtn);
        //  }
        await webactions.delay(5000);
        await webactions.clickElement(this.JSA_row(name));
        await webactions.clickElement(this.ActivityApply_btn);
    }
    async AddTools(value: string, item: string, name: string) {

    }


    async findYear(date: string) {
        await webactions.delay(4000);
        await webactions.waitForElementAttached(this.Year_btn("Year"));
        await webactions.clickElement(this.Year_btn("Year"));
        // let k=await this.page.innerText(this.Yeartext);
        // console.log(k);
        let DateArray = date.split("-");
        let datelabelArray = (await this.page.innerText(this.datelabel)).split(",");
        let datemonthArray = (datelabelArray[1]).split(' ');
        let month = datemonthArray[0].substring(0, 3);

        let y = parseInt(DateArray[2]);
        console.log(y);
        let x = parseInt(datelabelArray[2])

        if (x < y) {
            for (let x = parseInt(datelabelArray[2]); x < y; x++) {
                console.log(x);
                console.log(y);
                await webactions.clickElement(this.RightArrow_btn);
            }
        }
        else if (x > y) {
            for (let x = parseInt(datelabelArray[2]); x > y; x--) {
                console.log(x);
                console.log(y);
                await webactions.clickElement(this.LeftArrow_btn);
            }
        }

    }

    async findMonthandDay(date: string) {
        await webactions.delay(4000);
        let DateArray = date.split("-");
        let datelabelArray = (await this.page.innerText(this.datelabel)).split(",");
        let datemonthArray = (datelabelArray[1]).split(' ');
        let month = datemonthArray[0].substring(0, 3);
        await webactions.clickElement(this.workorderMonth(DateArray[1]));
        await webactions.delay(3000);
        await webactions.clickElement(this.workorderweek(DateArray[0]));
        await webactions.delay(3000);
        await webactions.clickElement(this.Year_btn("Day"));
    }




    async TotalNoOfWorkorders() {
        await webactions.delay(4000);
        T = 0;
        January = await this.page.innerText(this.NoOfWorkorder("January"));
        let J = January.split(":");
        console.log(January);
        T = T + parseInt(J[1]);
        February = await this.page.innerText(this.NoOfWorkorder("February"));
        let F = February.split(":");
        console.log(February);
        T = T + parseInt(F[1]);
        March = await this.page.innerText(this.NoOfWorkorder("March"));
        let M = March.split(":");
        console.log(March);
        T = T + parseInt(M[1]);
        April = await this.page.innerText(this.NoOfWorkorder("April"));
        let A = April.split(":");
        console.log(April);
        T = T + parseInt(A[1]);
        May = await this.page.innerText(this.NoOfWorkorder("May"));
        let My = May.split(":");
        console.log(May);
        T = T + parseInt(My[1]);
        June = await this.page.innerText(this.NoOfWorkorder("June"));
        let Jun = June.split(":");
        console.log(June);
        T = T + parseInt(Jun[1]);
        July = await this.page.innerText(this.NoOfWorkorder("July"));
        let Jl = July.split(":");
        console.log(July);
        T = T + parseInt(Jl[1]);
        August = await this.page.innerText(this.NoOfWorkorder("August"));
        let Au = August.split(":");
        console.log(August);
        T = T + parseInt(A[1]);
        September = await this.page.innerText(this.NoOfWorkorder("September"));
        let S = September.split(":");
        console.log(September);
        T = T + parseInt(S[1]);
        October = await this.page.innerText(this.NoOfWorkorder("October"));
        let O = October.split(":");
        console.log(October);
        T = T + parseInt(O[1]);
        November = await this.page.innerText(this.NoOfWorkorder("November"));
        let N = November.split(":");
        console.log(November);
        T = T + parseInt(N[1]);
        December = await this.page.innerText(this.NoOfWorkorder("December"));
        let D = December.split(":");
        console.log(December);
        T = T + parseInt(D[1]);
        //let t=parseInt(T);
        console.log(T)
    }
    async CheckWorkOrderPlaced() {
        let A = T;
        await this.TotalNoOfWorkorders();
        expect.soft(T).toBeGreaterThan(A);
    }


    async ClickonMoreAddingButton() {
        await webactions.delay(2000);

        //await this.page.locator(`//div[@col-id="ProjectName" and @title="Project"]`).scrollIntoViewIfNeeded();
        await webactions.clickElement(this.MultipleAdd_btn);
    }
    async DeleteAdditional(name: string) {
        await webactions.delay(3000);
        await this.page.locator(this.Delete_btn(name)).scrollIntoViewIfNeeded();
        await webactions.clickElement(this.Delete_btn(name));

    }
    async ViewAssets(value: string) {
        await webactions.delay(2000);
        await webactions.waitForElementAttached(this.Asset_viewbtn(value));
        await webactions.clickElement(this.Asset_viewbtn(value));
    }
    async CloseAssetView() {
        await webactions.clickElement('//button[@class="dailog-close-btn"]//*[text()="clear"]');
    }

    async AddUsers(name: string) {
        await webactions.clickElement(this.Usernamefilter);
        await webactions.clickElement(this.Userfilter_btn);
        await webactions.enterElementText(this.AssignedUsername_txt, name);
        await webactions.clickElement(this.Userfilter_btn);
        await webactions.clickElement(this.Username(name));
        await webactions.clickElement(this.CrewApply_btn);
    }

    async sortandColumnlvloprtns(idname: string, name: string) {



        await this.page.locator(this.sortingfromcolumn(idname)).scrollIntoViewIfNeeded();
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

    async filterfromcolumn(idname: string, name: string) {
        await webactions.clickElement(this.sortingfromcolumn(idname));
        await webactions.clickElement(this.buttonsforsorting("filter"));
        await webactions.delay(4000);
        let searchtxt = `//div[@class="ag-filter-body"]//div[@ref="eValue1"]//input`;
        await webactions.enterElementText(searchtxt, name);
        await webactions.delay(2000);
        await webactions.clickElement(this.buttonsforsorting("filter"));
        await webactions.delay(2000);
    } async Removefilterfromcolumn(idname: string) {
        await webactions.clickElement(this.sortingfromcolumn(idname));
        let searchtxt = `//div[@class="ag-filter-body"]//div[@ref="eValue1"]//input`;
        await webactions.delay(2000);
        await webactions.clickElement(searchtxt);
        await this.page.locator(searchtxt).fill(" ");
        await this.page.keyboard.press('Backspace');

    }
    async sortColumn(name: string) {
        await webactions.waitForElementAttached(this.columntosort(name));
        await webactions.clickElement(this.columntosort(name));
        await webactions.delay(2000);
        await webactions.clickElement(this.AscendingSort(name));
        await webactions.delay(2000);
        await webactions.clickElement(this.DescendingSort(name));
        await webactions.delay(2000);
        await webactions.clickElement(this.columntosort(name));
        await webactions.delay(2000);
        await webactions.clickElement(this.AscendingSort(name));
        await webactions.delay(2000);
    }
    async checkPageisCorrectorNot(name: string) {
        await webactions.delay(2000);
        let pgname = (await this.page.innerText(this.Checkpagename)).split("/");
        console.log("Page Name:", pgname[2]);
        expect(pgname[2]).toContain(name);
    }

    async SortingAssertion(columnName:string){
        await delay(5000);
        const table = this.page.locator(`//div[@class="ag-root ag-unselectable ag-layout-normal"]`); //table x path
        const desserts = table.locator(this.columnHeading(columnName)); // xpath for column heading        
        const dessertsRow =  this.page.locator(this.columnValues(columnName));  //xpath for all rows from table
        const originalData =  await dessertsRow.allTextContents();

        console.log("original:",originalData)
        // console.log(" --- None ---");
        await sortTable();
        // console.log(" --- Ascending --- ");
        await desserts.click();
        await sortTable();
        // console.log(" --- Descending --- ");
        await desserts.click();
        await sortTable();
    
        
        async function sortTable() {
            // await desserts.click();
            await delay(5000);
            const sort = await desserts.getAttribute("aria-sort");
            if (sort === "descending"){
                console.log(" --- Descending --- ");
                // console.log("Expecting des :- " +sort);
                const SortingByFunctionality = await dessertsRow.allTextContents();
                const ManualSorting = await SortingByFunctionality.sort((a,b) => b.localeCompare(a));
                
                if(SortingByFunctionality === ManualSorting){
                    await expect.soft(SortingByFunctionality).toEqual(ManualSorting);
                    console.log("Assertion Pass");
                    console.log(" ");
                    console.log("List In Descending Order :- " + SortingByFunctionality);
                    console.log(" ");
                }else{
                    console.log(" --- Sorting is not working --- ");
                }
            }
            if (sort === "ascending"){
                console.log(" --- Ascending --- ");

                const SortingByFunctionality = await dessertsRow.allTextContents();
                const ManualSorting = await SortingByFunctionality.sort((a,b) => a.localeCompare(b));
               
                if(SortingByFunctionality === ManualSorting){
                    await expect.soft(SortingByFunctionality).toEqual(ManualSorting);
                    console.log("Assertion Pass");
                    console.log(" ");
                    console.log("List In Ascending Order :- " + SortingByFunctionality);
                    console.log(" ");
                }else{
                    console.log(" --- Sorting is not working --- ");
                }         
            }if (sort === "none"){
                const SortingByFunctionality = await dessertsRow.allTextContents();
                // console.log(" --- None --- ");
                console.log("List Without Sorting :- " + await dessertsRow.allTextContents());
                console.log(" ");
                if(SortingByFunctionality == originalData){
                    await expect.soft(SortingByFunctionality).toEqual(originalData);
                }
            }           
        }
    }

}

    // Sorting and column level operations

    // async sortWebTable() {
    //     // const browser = await chromium.launch();
    //     // const page = await browser.newPage();

    //     // // Navigate to the web page containing the table
    //     // await page.goto('https://example.com');

    //     // Identify the table element using a CSS selector
    //     const tableSelector = `//div[@aria-label="Press SPACE to select this row."]//div[@col-id="TaskName"]`;
    //     const table = await this.page.$(tableSelector);

    //     // Extract table data into an array of objects
    //     const tableData = await table.$$eval('tr', (rows) =>
    //         rows.map((row) => {
    //             const columns = row.querySelectorAll('td');
    //             return Array.from(columns).map((column) => column.innerText);
    //         })
    //     );

    //     // Implement a sorting function (e.g., sorting based on the first column)
    //     const sortByColumn = 0;
    //     const sortingFunction = (a, b) =>
    //         a[sortByColumn].localeCompare(b[sortByColumn]);

    //     // Sort the table data using the sorting function
    //     tableData.sort(sortingFunction);

    //     // Update the table on the web page with the sorted data
    //     await table.$$eval('tr', (rows, data) => {
    //         rows.forEach((row, index) => {
    //             const columns = row.querySelectorAll('td');
    //             Array.from(columns).forEach(
    //                 (column, columnIndex) => (column.innerText = data[index][columnIndex])
    //             );
    //         });
    //     }, tableData);

    //     // Close the browser instance
    //     // await browser.close();

    //     //span[@ref="eSortAsc"], //span[@ref="eSortDesc"], //span[@ref="eSortNone"]
    // }

    // sortWebTable().catch(console.error);
    // test("Web table sorting", async ( {page} ) => {

    //     const table = page.locator(""); //table x path

    //     const desserts = table.locator(""); //xpath for parent os ass, dess,and none

    //     const shortType = await desserts.getAttribute(""); //xpath for all rows from table

    //     table.locator 

    // })



    
    


