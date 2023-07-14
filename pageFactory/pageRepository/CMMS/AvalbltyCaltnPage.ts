
import { WebActions } from '@lib/WebActions'
import {testConfig} from '../../../testConfig';
import {ComboBoxActions} from '@lib_web/ComboBoxActions'
import { DateActions } from "@lib/web/DateActions";
import { Page,expect } from "@playwright/test";
import { AvalbltyCalctnPageObject } from '@objects/CMMS/AvalbltyCalctnPageObject';


let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;


function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
 }

export class AvalbltyCalcPage extends AvalbltyCalctnPageObject{

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        dateObj=new DateActions(this.page);

       }

       async ClickOnFilter(){
        await webactions.waitForElementAttached(this.filter);
        await webactions.clickElement(this.filter);
   }

        async AddProject(){
            await webactions.waitForElementAttached(this.ProjectDropdown);
            await webactions.clickElement(this.ProjectDropdown);
       }
       async SelectFromdropdown(name:string){
        await webactions.waitForElementAttached(this.Dropdownvalues(name));
        await webactions.clickElement(this.Dropdownvalues(name));
        await webactions.delay(2000);

       }
       async Filterfromdate(date:string){
    
        await webactions.clickElement(this.Calenderfrom);
        await dateObj.SelectDate(date);
        await webactions.delay(2000);
    }
    async FilterTodate(date:string){
        
        await webactions.clickElement(this.CalenderTo);
        await dateObj.SelectDate(date);
        await webactions.delay(2000);
    }
    async FilterSearch(){
        await webactions.waitForElementAttached(this.searchBtn);
        await webactions.clickElement(this.searchBtn);
        await webactions.delay(2000);
    }
    async SelectCheckBox(value:string){
        await webactions.waitForElementAttached(this.Checkbox(value));
        await webactions.clickElement(this.Checkbox(value));
        await webactions.delay(2000);
    }
    async ClickonCalculateBtn(){
        
        await webactions.clickElement(this.Calculator);
        await webactions.delay(2000);
    }
    async viewTheAvailabilityCalculation(value){
        await webactions.delay(2000);
        await webactions.doubleClickElement(this.Checkbox(value));
        await webactions.delay(2000);
        
    }
    async View(){
        await webactions.waitForElementAttached(this.view_btn);
        await webactions.clickElement(this.view_btn);
        await webactions.delay(5000);
    }

    async sortandColumnlvloprtns(idname:string,name:string){
      
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
   async filterfromcolumn(idname:string,name:string){ 
  
  
    await webactions.clickElement(this.sortingfromcolumn(idname));
    await webactions.clickElement(this.buttonsforsorting("filter"));
    await webactions.delay(4000);
    let searchtxt=`//div[@ref="eCondition1PanelFrom"]//input[@ref="eInput"]`;
    await webactions.clickElement(searchtxt);
    await webactions.enterElementText(searchtxt,name);
    await webactions.delay(2000);
    await webactions.clickElement(this.buttonsforsorting("filter"));
    await webactions.delay(2000);
  }

  async CheckCalculatedValues(name:string){
    await webactions.waitForElementAttached(this.RowValues(name));
    let calcvalue=this.page.innerText(this.RowValues(name));
   // let calculated=this.page.innerText(calcvalue);
    await webactions.delay(2000);
    expect(calcvalue).not.toBe(' ');

  }

    }