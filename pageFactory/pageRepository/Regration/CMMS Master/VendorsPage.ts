import { VendorsObject } from '@objects/Regration/CMMS Master/VendorsObject';
import { WebActions } from '@lib/WebActions'
import {testConfig} from '../../../../testConfig';
import {ComboBoxActions} from '@lib_web/ComboBoxActions'

import { Page,expect } from "@playwright/test";


let webactions: WebActions;
let comboBoxObj: ComboBoxActions;


function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
 }

export class VendorsPage extends VendorsObject{

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
    

       }

       async AddAccount(name:string){
        await webactions.waitForElementAttached(this.AccountDropdown);
        await webactions.clickElement(this.AccountDropdown);
        await webactions.waitForElementAttached(this.Dropdownvalues(name));
        await webactions.clickElement(this.Dropdownvalues(name));
       }
       async AddName(name:string){
        await webactions.waitForElementAttached(this.Vendorname);
        await webactions.enterElementText(this.Vendorname,name);
        await webactions.delay(2000);

       }
       async AddAddress(name:string){
        await webactions.enterElementText(this.Address,name);
       }
       async AddZipcode(name:string){
        await webactions.enterElementText(this.Zipcode,name);
       }
       async AddCountry(name:string){
        await webactions.clickElement(this.country);
        await webactions.clickElement(this.Dropdownvalues(name));

       }

       async AddCity(name:string){
        await webactions.enterElementText(this.city,name);
       }
       async AddTax(value:string){
        await webactions.enterElementText(this.tax,value);
       }
       async AddContactprsn(name:string){
        await webactions.enterElementText(this.contactPerson,name);
       }
       async AddEmail(name:string){
        await webactions.enterElementText(this.Emailid,name);
       }
       async AddContactnumber(code:string,value:string){
        await webactions.enterElementText(this.Contactnocode,code);
        await webactions.delay(2000);
        await webactions.enterElementText(this.Contactnumber,value);
       }
       async Addworktype(name:string){
        await webactions.clickElement(this.worktype);
        await webactions.clickElement(this.Dropdownvalues(name));

       }
       async Downloadfile(){
        let download=await Promise.all([
            this.page.waitForEvent("download"),
            this.page.click(this.downloadbtn)
        ]);
        let filename=download[0].suggestedFilename();
        await download[0].saveAs(filename);
        await webactions.delay(5000);
    }
    async FilterAccount(name:string){
        await webactions.waitForElementAttached(this.filterAccount);
        await webactions.clickElement(this.filterAccount);
        await delay(2000);
        await webactions.waitForElementAttached(this.Dropdownvalues(name));
        await webactions.clickElement(this.Dropdownvalues(name));
        await delay(2000);
    }
    async filterName(name:string){
        await webactions.enterElementText(this.filtername,name);
    }
    async ClickonSearchbutton(){
        await webactions.clickElement(this.filtersearch);
    }
    async ClickonResetbutton(){
        await webactions.clickElement(this.filterReset);
    }
    async CheckfilterACafterReset(){
        await webactions.waitForElementAttached(this.filterAccount);
        await webactions.delay(2000);
       let cd=await this.page.innerText(this.filterAccount);

        expect.soft(cd).toContain("Account");
         console.log("Account After Reset :",cd);
    }
    async CheckfilternameafterReset(){
        await webactions.waitForElementAttached(this.filtername);
        await webactions.delay(2000);
       let cd=await this.page.innerText(this.filtername);

        expect.soft(cd).toBe("");
         console.log("Name After Reset :",cd);
    }
    async EditfirstProfileDetails(){
        await webactions.waitForElementAttached(this.editprofile1);
        await webactions.clickElement(this.editprofile1);
        
    }
    async EditSecondProfileDetails(){
        await webactions.waitForElementAttached(this.editprofile2);
        await webactions.clickElement(this.editprofile2);
        // await this.page.locator(this.checkseconditemisdeleted).hover();
        // await this.page.locator(this.editprofile2).click({force:true});
       
    }
    async DeleteSecondProfileDetails(){
       
        await webactions.waitForElementAttached(this.Deleteprofile2);
        await webactions.clickElement(this.Deleteprofile2);
        await this.page.locator('//button[contains(text(), "Ok")]').click();
        await webactions.delay(2000);
        await this.page.locator('//button[contains(text(), "Ok")]').click();
       
    }
    async VerifyItemisDeleted(locator:string){
        let del=await this.page.locator(locator);
        await webactions.delay(2000);
        expect.soft(del).not.toBeVisible();

    }
    async VerifyfirstItemisDeleted(){
        await this.VerifyItemisDeleted(this.checkfirstitemisdeleted);
        
    }
    async VerifySecondItemisDeleted(){
       await this.VerifyItemisDeleted(this.checkseconditemisdeleted);
      
    }
    async VerifyEntireProfileisDeleted(name:string){
        let del=await this.page.locator(this.Checkvendor(name));
        await webactions.delay(2000);
        expect.soft(del).not.toBeVisible();

    }
    async CheckDetailsFirstrow(value:string,r:string){
        let fr=await this.page.innerText(this.Detailsfirstrow(r));
        await webactions.delay(2000);
        console.log("first row:",fr);
        expect.soft(fr).toContain(value);
    }
    async CheckDetailsSecondrow(value:string,r:string){
        let secr=await this.page.innerText(this.Detailssecondrow(r));
        await webactions.delay(2000);
        console.log("second row:",secr);
        expect.soft(secr).toContain(value);
    }

    async ClickonVenderrow(name:string){
        let vname=this.page.locator(this.Checkvendor(name));
        expect(vname).toHaveText(name);
        await webactions.clickElement(this.Checkvendor(name));
    }
    async CatchpopupOk(){
        
        await this.page.locator('//button[contains(text(), "Ok")]').click();
      }

      async Uploadfile(file:string){
        let [upload]=await Promise.all([
        this.page.waitForEvent("filechooser"),
        this.page.click(this.uploadbtn)
    ]);
    upload.setFiles(file);
    await this.page.locator('//button[contains(text(), "Ok")]').click();
    }
    async SelectAccountToUpload(name:string){
        await webactions.waitForElementAttached(this.Uploadaccount);
        await webactions.clickElement(this.Uploadaccount);
        await webactions.waitForElementAttached(this.Dropdownvalues(name));
        await webactions.clickElement(this.Dropdownvalues(name));
        await webactions.delay(2000);
    }
    async ClickonPlusButton(){
        await webactions.waitForElementAttached(this.PlusButton);
        await webactions.clickElement(this.PlusButton);
    }
    // async ClickonResetButton(){
    //     await webactions.clickElement(this.resetbutton);
    //     await webactions.waitForElementAttached(this.filterAccount);
    //     await webactions.delay(2000);
    //    let cd=await this.page.innerText(this.filterAccount);

    //     expect.soft(cd).toContain("Account");
    //      console.log("After Reset Account:",cd);
        
    //   }

    async checkaccount(value:string){
       
        console.log("Account:");
        let ac=await this.CheckGivenData(value,this.AccountDropdown);
        
    }
    async CheckGivenData(name:string,locator:string):Promise<string>{
        await webactions.waitForElementAttached(locator);
        await webactions.delay(2000);
       let cd=await this.page.innerText(locator);
       console.log(cd);
        expect.soft(cd).toContain(name);
        return cd;
      }
      async checkCountry(value:string){
       
        console.log("country:");
        let ac=await this.CheckGivenData(value,this.country);
        
    }
    async checkWorkType(value:string){
        
        console.log("WorkType:");
        let ac=await this.CheckGivenData(value,this.worktype);
        
    }
    async CheckGivenData2(name:string,locator:string):Promise<string>{
        await webactions.waitForElementAttached(locator);
        await webactions.delay(2000);
       let cd=await this.page.inputValue(locator);
       console.log(cd);
        expect.soft(cd).toContain(name);
        return cd;
      }
      async checkName(value:string){
        
        console.log("Name:");
        let ac=await this.CheckGivenData2(value,this.Vendorname);
        
    }
    async checkAddress(value:string){
        
        console.log("Address:");
        let ac=await this.CheckGivenData2(value,this.Address);
        
    }
    async checkCity(value:string){
        
        console.log("City:");
        let ac=await this.CheckGivenData2(value,this.city);
        
    }
    async checkZipcode(value:string){
        
        console.log("Zipcode:");
        let ac=await this.CheckGivenData2(value,this.Zipcode);
        
    }
    async checkTaxid(value:string){
        
        console.log("Taxid:");
        let ac=await this.CheckGivenData2(value,this.tax);
        
    }
    async checkcontactPerson(value:string){
        
        console.log("contactPerson:");
        let ac=await this.CheckGivenData2(value,this.contactPerson);
        
    }
    async checkEmail(value:string){
        
        console.log("Email:");
        let ac=await this.CheckGivenData2(value,this.Emailid);
        
    }
    async checkcontactnumber(value1:string,value2:string){
        console.log("contactnumber Code:");
        let ac=await this.CheckGivenData2(value1,this.Contactnocode);
        console.log("contactnumber:");
        ac=await this.CheckGivenData2(value2,this.Contactnumber);
       
    }

    async ClickonSavetoCheckMandatoryFields(){
        await webactions.clickElement(this.saving_btn);
           
           await this.page.locator('//button[contains(text(), "Ok")]').click();
           
  
       }
       async ClickoncanceltoCloseFilter(){
        await webactions.waitForElementAttached(this.Filterclose);
        await webactions.clickElement(this.Filterclose);
       }

    }