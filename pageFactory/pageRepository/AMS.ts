// import { AvailabilityManagementObject } from "@objects/AvailabilityManagementObject";
// import { WebActions } from '@lib/WebActions'
// import {ComboBoxActions} from '@lib_web/ComboBoxActions'
// import { DateActions } from "@lib/web/DateActions";
// import { Page,expect } from "@playwright/test";
// // import { test,expect } from "@playwright/test";

// let webactions: WebActions;
// let comboBoxObj: ComboBoxActions;
// let dateObj: DateActions;

// var ProjectName : string[] = ["Sadla","Rajkot","Jaora"]; 

// export class AvailabilityManagementPage extends AvailabilityManagementObject{

//     readonly page: Page;

//     constructor(page: Page) {
//         super();
//         this.page = page;
//         webactions = new WebActions(this.page);
//         comboBoxObj = new ComboBoxActions(this.page);
//         dateObj = new DateActions(this.page);

//        }

//     async selectValeFromDropDown(dropdownName: string, value: string): Promise<void>{
//        await comboBoxObj.SelectValue(this.project_dropdown(dropdownName), dropdownName, value);
//     }

//     async SelectAlarmButton(buttonName: string): Promise<void>{
//         await webactions.clickElement(this.alarms_btn(buttonName));
//     }

//     async  SelectDateRange(fromDate: string, toDate: string): Promise<void> {
//         await dateObj.SelectDateRange(fromDate, toDate);
//         await webactions.clickElement(this.search_btn);
//     }

//     async EnterValueInGrid(colName: string, value: string){
//         let colArray: string[], valueArray: string[];
//         let length = 1;
//         if(colName.includes(":")){
//              colArray =  colName.split(":")
//              valueArray =  value.split(":")
//              length = colArray.length;
//         }
//         await webactions.waitForElementAttached(this.row_count);
//         const rowIndex =  (await this.page.$$(this.row_count)).length.toString();
//         await webactions.clickElement(this.actions_btn((parseInt (rowIndex)-1).toString()));
//         await webactions.clickElement(this.add_delete_btn("add"));
//         // await webactions.clickElement(this.add_delete_btn("delete"));
 
//         if(length > 1){
//             for(let i = 0; i < length; i++){        
//                 await this.enterRowColValue(colArray[i], valueArray[i]);
//             }
//         }
//         else{
//             await this.enterRowColValue(colName, value)
//         }
        
//     }

// //Delete Rows

// async Delete(){
//     await webactions.waitForElementAttached(this.row_count);
//      console.log("row count "+this.row_count);
//           const rowIndex =  (await this.page.$$(this.row_count)).length.toString();
//           var k=parseInt(rowIndex);
//           console.log(rowIndex );
//           var i:number;
//           for(i=(k-1);i>0;i--)
//           {
//              // Click button:has-text("...") >> nth=0
//            await this.page.locator('button:has-text("...")').nth(0).click();//first()
//    // Click text=delete Delete
//            await this.page.locator('text=delete Delete').click();
//    // Click text=Yes
//            await this.page.locator('text=Yes').click();
//           }
//          // console.log("here");
//         }



// // Delete Last



//     async DeleteFromGrid(){


//         await this.page.locator('button:has-text("...")').nth(-1).click();//first()
//         await this.page.locator('text=delete Delete').click();
//         await this.page.locator('text=Yes').click();
       
//         // await webactions.waitForElementAttached(this.row_count);
//         // const rowIndex = (await this.page.$$(this.row_count)).length.toString();
//         // await webactions.clickElement(this.actions_btn((parseInt (rowIndex)-1).toString()));
//         // await webactions.clickElement(this.add_delete_btn("delete"));
//         // // await this.page.locator('//button[contains(text(), "Yes")]').click();
//         // // await this.page.locator('//button[contains(text(), "Yes")]').click();
//         // await this.page.locator('text=Yes').click();

//     }

// //  // this.page.on("dialog",async(alert)=>{
//         //     await alert.accept();
//         // });




//     async enterRowColValue(colName: string, value: string){
//         const colIndex =  await this.GetGridColumnIndex(colName);
//         const rowIndex =  (await this.page.$$(this.row_count)).length.toString();
//         await webactions.doubleClickElement(this.grid_cell( (parseInt (rowIndex) -2).toString(), colIndex));
//         await this.page.keyboard.type(value);
//     }

//     async GetGridColumnIndex(columnName:string): Promise<string>{
//         return await this.page.$eval(this.grid_Col_text(columnName) , ele => ele.getAttribute("aria-colindex"));
//     }

//     // Pop-up button

//     // async Pop_UpDelete(){
//     //     await this.page.locator('text=Yes').click();
//     // }

//     // save
//     async SaveAndPublish(): Promise<void>{
//         //await webactions.clickElement(this.save_btn);
//         await this.page.locator('//button[@mattooltip="Save"]').click();
//         await this.Pop_UpSave();
//         await this.SavePopUpOK();
//     }
    

//     async Pop_UpSave(){
//         await this.page.locator('//button[contains(text(), "Yes")]').click();
//     }

//     async SavePopUpOK(){
//         await this.page.locator('//button[contains(text(), "Ok")]').click();
//     }


//     // Assertion Code

//     // async CheckWtg(){
//     //     // const list = this.page.locator('[aria-label="Contractual Availability\. Highcharts interactive chart\."]');
//         // const list = this.page.locator("//*[@class='highcharts-data-labels highcharts-series-0 highcharts-solidgauge-series highcharts-tracker highcharts-series-hover']/div/span/div/span");
        
//     //     const list = this.page.locator('text');
//         // await expect(list).toHaveCount(83);

//     //     // const list = this.page.locator('text');
//     //     // console.log(await list.textContent ());
//     //     // expect(list).toHaveCount(72.9);
        
//     //     // await expect(list).toHaveCount(1);

//     // await expect(this.page.locator("//*[@class='highcharts-data-labels highcharts-series-0 highcharts-solidgauge-series highcharts-tracker highcharts-series-hover']/div/span/div/span").first()).toHaveCount(72.7)

//     // }
//      // 61.5,100,33.3,100
//         // 76.9,100,16.7,100
//         // 78.4,100,33.33,100


  

// }
// Assertion code shared by veniyak sir
// async loginToApplication(): Promise<void> {
//     // const decipherPassword = await webActions.decipherPassword();
//     // await expect(this.page.locator(`#username`)).toHaveAttribute('placeholder','E-mail');
//     await expect(this.page.locator(`//input[@id="username"]`)).toHaveAttribute('placeholder','E-mail');
//     await textBoxActionsObj.enterElementText(this.email_txt, testConfig.username);
//     await textBoxActionsObj.enterElementText(this.password_txt, testConfig.password);