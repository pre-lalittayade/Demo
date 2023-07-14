import { SolarObject } from "@objects/Dashboard/SolarObject";
import { WebActions } from '@lib/WebActions'
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
import { DateActions } from "@lib/web/DateActions";
import { expect, Page } from "@playwright/test";
import { MenuActions } from "@lib_web/MenuActions"

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;

export class SolarPage extends SolarObject{

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        dateObj = new DateActions(this.page);
        menuObj = new MenuActions(this.page);

    }
    // async Wind_Btn() {
    //     await webactions.clickElement(this.wind_button);
    //     await webactions.delay(9000);
    // }
    async ShortNameMenu(){
        await this.page.hover(this.Shortnamebox_hover)
        await this.page.waitForSelector(this.short_name_menu_btn)
        // await this.page.hover(this.short_name_menu_btn);
        await this.page.click(this.short_name_menu_btn);
        await webactions.clickElement(this.short_name_menu_filter_btn);
        // await webactions.clickElement(this.bess);
    }
    
    async EnterNameFor_Filter(value:string){
        // await webactions.enterElementText(this.enternameforfilter,value);
        // await webactions.delay(2000);
        await webactions.waitForElementAttached(this.enternameforfilter);
        await webactions.clickElement(this.enternameforfilter);
        await webactions.delay(2000);
        await this.page.keyboard.type(value);
        await webactions.delay(2000);
    }
    // async ValidationOfValues(location:string, value:string){
    //     await webactions.waitForElementAttached(this.validationofvalues(location,value))
    //     const firstValue = await this.page.innerText(this.validationofvalues(location,value))
    //     expect(firstValue).not.toEqual(0);

    // }
    async clickOnFirstElement(){
        await webactions.waitForElementAttached(this.clickonfirstelement);
        await webactions.clickElement(this.clickonfirstelement);
        await webactions.delay(2000);
    }

     // Assertion
     async SolarPR() {
        await webactions.waitForElementAttached(this.obj)
        const firstValue = await this.page.innerText(this.obj)
        await webactions.delay(70000);
        const secondValue = await this.page.innerText(this.obj)
        expect(firstValue).not.toEqual(secondValue);
    
        // let PR = this.page.locator("//body/app-root[1]/app-shell[1]/div[1]/div[2]/app-home[1]/app-landing-overview[1]/div[2]/div[4]/div[2]/h3[1]");
        // await webactions.delay(7000);
        // let ComparePR = this.page.locator("//body/app-root[1]/app-shell[1]/div[1]/div[2]/app-home[1]/app-landing-overview[1]/div[2]/div[4]/div[2]/h3[1]");
        // console.log(PR);
        // await expect.soft(PR).toHaveText("000");
    }
     // Assertion
     async TechnicalActivePower() {
        await webactions.waitForElementAttached(this.objTAP)
        const firstValue = await this.page.innerText(this.objTAP)
        await webactions.delay(70000);
        const secondValue = await this.page.innerText(this.objTAP)
        expect(firstValue).not.toEqual(secondValue);

        await webactions.waitForElementAttached(this.objTPR)
        const firstValue1 = await this.page.innerText(this.objTPR)
        await webactions.delay(70000);
        const secondValue1 = await this.page.innerText(this.objTPR)
        expect(firstValue).not.toEqual(secondValue);

        await webactions.waitForElementAttached(this.objTDE)
        const firstValue2 = await this.page.innerText(this.objTDE)
        await webactions.delay(70000);
        const secondValue2 = await this.page.innerText(this.objTDE)
        expect(firstValue).not.toEqual(secondValue);

    }
    // async TechnicalActivePower() {
    //     await webactions.waitForElementAttached(this.objTAP)
    //     const firstValue = await this.page.innerText(this.objTAP)

    //     await webactions.waitForElementAttached(this.objTPR)
    //     const firstValue1 = await this.page.innerText(this.objTPR)

    //     await webactions.waitForElementAttached(this.objTDE)
    //     const firstValue2 = await this.page.innerText(this.objTDE)

    //     await webactions.delay(70000);

    //     const secondValue = await this.page.innerText(this.objTAP)
    //     expect(firstValue).not.toEqual(secondValue);

    //     const secondValue1 = await this.page.innerText(this.objTPR)
    //     expect(firstValue1).not.toEqual(secondValue1);

    //     const secondValue2 = await this.page.innerText(this.objTDE)
    //     expect(firstValue2).not.toEqual(secondValue2);
    // }
}