import { GrasscuttingPageObjects } from '@objects/CMMS/GrasscuttingPageObjects';
import { WebActions } from '@lib/WebActions'
import {testConfig} from '../../../testConfig';
import {ComboBoxActions} from '@lib_web/ComboBoxActions'
import { TextBoxActions } from "@lib/web/TextBoxActions";
import { DateActions } from "@lib/web/DateActions";
import { Page,expect } from "@playwright/test";
import { CmmsPage } from '../CMMS_Master/CmmsMasterPage';

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let textboxObj:TextBoxActions;
let dateObj: DateActions;
let N:string;

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
 }

export class GrasscuttingPage extends GrasscuttingPageObjects{
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        textboxObj=new TextBoxActions(this.page);

       }

       async AddProjectFromDropdown(value:string){

        await webactions.clickElement(this.Project_dropdown);
        await webactions.clickElement(this.projectdropdown_value(value));

       }
       async AddCycleName(value:string){
        await webactions.enterElementText(this.cycleName_txt,value);

       }
       async AddCycleDetails(value:string){
        await webactions.waitForElementAttached(this.cycle_details);
        await webactions.enterElementText(this.cycle_details,value);
       }
       async ClickonCalenderBtn(name:string,date:string){
        await webactions.clickElement(this.calender_btn(name));

        let ok_btn = '//button[@class="mat-focus-indicator mat-button mat-stroked-button mat-button-base"]'
    const currentMonthYeartxt = '//div[@class="mat-calendar-header"]//span';
    const currentMonthYearArray = (await this.page.innerText(currentMonthYeartxt)).split(' ');
    const selectyearBtn = '//div[@class="mat-calendar-header"]//button';
    let dateMonthYearBtn = (value: string) => `//table[@class="mat-calendar-table"]//tr//td/div[contains(text(),"${value}")]`;
    const dateArray = date.split("-");
    if((currentMonthYearArray[1] !== dateArray[2]) || (currentMonthYearArray[0] !== dateArray[1].toUpperCase())){
        await  webactions.clickElement(selectyearBtn);
        await  webactions.clickElement(dateMonthYearBtn(dateArray[2]));
        await  webactions.clickElement(dateMonthYearBtn(dateArray[1].toUpperCase()));
        
        await  webactions.clickElement(dateMonthYearBtn(dateArray[0]));
    } else {
        await webactions.clickElement(dateMonthYearBtn(dateArray[0]));
    }
    await webactions.clickElement(ok_btn);

       }
       async ClickOnSearchBtn(name:string){
        await webactions.clickElement(this.searchbuttons(name));
       }
       async ClickOnCrewSearchBtn(name:string,value:string){
        await webactions.clickElement(this.searchbuttons(name));
        const user = this.page.locator(this.SelectUsername(value));
        await user.scrollIntoViewIfNeeded();
        await webactions.clickElement(this.SelectUsername(value));
        await webactions.clickElement(this.ActivityApply_btn);
        
       }
    async AddCyclePlanDetails(name:string,code:string){
        await webactions.clickElement(this.AddData);
        await webactions.waitForElementAttached(this.Nametxt);
        await webactions.enterElementText(this.Nametxt,name);
        await webactions.enterElementText(this.Codetxt,code);
        await this.ClickonCycleSearchButton();
        await webactions.delay(3000);
        N=await this.page.innerText(this.NOofTableAssetMaster(code));
        console.log("Noof Tables in Asset"+N);
        await webactions.clickElement(this.Cycle_row(code));
        await webactions.clickElement(this.Applybtn);
    }
    async CheckNoofTables(name:string){
        let T=this.page.locator(this.NoofTableAppeared(name));
        await webactions.delay(2000);
        console.log("After Adding No of tables"+T);
        expect(T).toHaveText(N);
        await webactions.delay(2000);

    }
    async ClickonCycleSearchButton(){
        await webactions.clickElement(this.SearchCycle);
    }

    async savebeforeplanneddate(){
        await webactions.delay(2000);
        await webactions.clickElement('//mat-icon[contains(text(),"save")]');
        await this.page.locator('//button[contains(text(),"Ok")]').click();
    } 
    async Addplanned_date(value:string,date:string){
        await webactions.clickElement(this.Planneddate(value));
        await webactions.delay(1000);
        //  await webactions.clickElement(this.Planned_Date);
        //  await webactions.enterElementText(this.Planned_Date,date);
        await webactions.waitForElementAttached(this.PlannedCalendar_btn);
        await webactions.clickElement(this.PlannedCalendar_btn);
        
        let ok_btn = '//button[@class="mat-focus-indicator mat-button mat-stroked-button mat-button-base"]'
    const currentMonthYeartxt = '//div[@class="mat-calendar-header"]//span';
    const currentMonthYearArray = (await this.page.innerText(currentMonthYeartxt)).split(' ');
    const selectyearBtn = '//div[@class="mat-calendar-header"]//button';
    let dateMonthYearBtn = (value: string) => `//table[@class="mat-calendar-table"]//tr//td/div[contains(text(),"${value}")]`;
    const dateArray = date.split("-");
    if((currentMonthYearArray[1] !== dateArray[2]) || (currentMonthYearArray[0] !== dateArray[1].toUpperCase())){
        await  webactions.clickElement(selectyearBtn);
        await  webactions.clickElement(dateMonthYearBtn(dateArray[2]));
        await  webactions.clickElement(dateMonthYearBtn(dateArray[1].toUpperCase()));
        
        await  webactions.clickElement(dateMonthYearBtn(dateArray[0]));
    } else {
        await webactions.clickElement(dateMonthYearBtn(dateArray[0]));
    }
    await webactions.clickElement(ok_btn);

}

    async SelectfromfilterDropdown(name:string,value:string){
        await webactions.waitForElementAttached(this.filterproject_dropdown(name));
        await webactions.clickElement(this.filterproject_dropdown(name));
        await webactions.clickElement(this.projectdropdown_value(value));
    }
    async GiveCycleName(name:string){
        await webactions.enterElementText(this.filterCycle_name,name);
        
    }
    async CheckGrasscuttingCycleName(chk:string){
        let checkGrasscutting=await this.page.locator('//div[@class="ag-body-viewport ag-layout-normal ag-row-no-animation"]//div[@class="ag-center-cols-viewport"]//div[@row-index="0"]')
        await expect.soft(checkGrasscutting).toContainText(chk);
    }
    async CheckGrasscuttingCycleApprover(chk:string){
        let checkGrasscutting=await this.page.locator('//div[@class="ag-body-viewport ag-layout-normal ag-row-no-animation"]//div[@class="ag-center-cols-viewport"]//div[@row-index="0"]')
        await expect.soft(checkGrasscutting).toContainText(chk);
    }
    async CheckGrasscuttingCycleAsset(value:string,chk:string){
        await this.page.locator(this.Assetdetails(value)).click();
        let checkGrasscutting=await this.page.locator(this.Assetdetails(value));
        await expect.soft(checkGrasscutting).toContainText(chk);
        await webactions.delay(10000);
        await webactions.clickElement(this.assetClose);
    }

    async ClickonDuplicateCycle(){
        await webactions.clickElement(this.duplicateCycle_btn);
    }
    async Uploadfile(){
        let [upload]=await Promise.all([
        this.page.waitForEvent("filechooser"),
        this.page.click(this.FileUpload_btn)
    ]);
    upload.setFiles("test.jpg");
    //await this.page.locator('//button[contains(text(), "Ok")]').click();
    await webactions.delay(3000);
    }
    
    async SaveWorkorder(){                                  
        await webactions.waitForElementAttached(this.workordersaving_btn);
        await webactions.clickElement(this.workordersaving_btn);
        await webactions.delay(5000);
        await this.page.locator('//button[contains(text(), "Ok")]').click();
      
           await this.page.locator('//button[contains(text(), "Ok")]').click();
           
      }
      async ClickonCancel(){
        await webactions.waitForElementAttached(this.cancelbtn);
        await webactions.clickElement(this.cancelbtn);
        await webactions.delay(2000);
        await this.page.locator('//button[contains(text(), "Yes")]').click();
      }
      async ClickoniButton(name:string){
        await this.page.locator(`//div[@row-index="0"]//div[@col-id="AssignedToName"]`).click();
        for(let i = 0; i < 3; i++){
         
        await this.page.keyboard.press("ArrowRight");
    }
    const ele = '//div[@class="ag-center-cols-container"]/div[@row-index="0"]//div[@col-id="CycleId_1"]//span/span';
    await webactions.waitForElementAttached(ele);
    const element =  this.page.locator('//div[@class="ag-center-cols-container"]/div[@row-index="0"]//div[@col-id="CycleId_1"]');
    const box = await element.boundingBox();
   const x = box.x -1 + (box.width / 2);
   const y = box.y + 2.5 + (box.height / 2);
    await this.page.mouse.click(x, y);
        await webactions.delay(2000);
       
      }
    }