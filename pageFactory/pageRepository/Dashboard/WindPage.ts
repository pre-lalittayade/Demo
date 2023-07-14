import { WindObject } from "@objects/Dashboard/WindObject";
import { WebActions } from '@lib/WebActions'
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
import { DateActions } from "@lib/web/DateActions";
import { expect, Page } from "@playwright/test";
import { MenuActions } from "@lib_web/MenuActions"
// import { WindObject } from '@objects/Dashboard/WindObject';

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;

export class WindPage extends WindObject{

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        dateObj = new DateActions(this.page);
        menuObj = new MenuActions(this.page);

    }
    async Wind_Btn() {
        await webactions.clickElement(this.wind_button);
        await webactions.delay(9000);
    }
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
    async clickOnFirstElement(){
        await webactions.waitForElementAttached(this.clickonfirstelement);
        await webactions.clickElement(this.clickonfirstelement);
        await webactions.delay(2000);
    }
    async clickOnElement(value:string){
        await webactions.waitForElementAttached(this.clickonelement);
        await webactions.clickElement(this.clickonelement);
        await webactions.delay(10000);
    }
    async Dropdown(value:string){
        await webactions.clickElement(this.dropdownclick);
        await this.page.keyboard.type(value);
        await webactions.clickElement(this.dropdownclick1);
        await webactions.delay(15000);
    }


    // Assertion
    async ActivePower() {
        await webactions.waitForElementAttached(this.obj)
        const firstValue = await this.page.innerText(this.obj)
        await webactions.delay(70000);
        const secondValue = await this.page.innerText(this.obj)
        expect(firstValue).not.toEqual(secondValue);
    }

    // Assertion
    async TechnicalActivePower() {
        await webactions.waitForElementAttached(this.obj)
        const firstValue = await this.page.innerText(this.obj)
        await webactions.delay(70000);
        const secondValue = await this.page.innerText(this.obj)
        expect(firstValue).not.toEqual(secondValue);

        await webactions.waitForElementAttached(this.objPLF)
        const firstValue1 = await this.page.innerText(this.objPLF)
        await webactions.delay(70000);
        const secondValue1 = await this.page.innerText(this.objPLF)
        expect(firstValue).not.toEqual(secondValue);

        await webactions.waitForElementAttached(this.objTGT)
        const firstValue3 = await this.page.innerText(this.objTGT)
        await webactions.delay(70000);
        const secondValue4 = await this.page.innerText(this.objTGT)
        expect(firstValue).not.toEqual(secondValue);

    }

     // Assertion
     async TurbineActivePower() {
        await webactions.waitForElementAttached(this.objTur)
        const firstValue = await this.page.innerText(this.objTur)
        await webactions.delay(70000);
        const secondValue = await this.page.innerText(this.objTur)
        expect(firstValue).not.toEqual(secondValue);

        await webactions.waitForElementAttached(this.objTurPLF)
        const firstValue1 = await this.page.innerText(this.objTurPLF)
        await webactions.delay(70000);
        const secondValue1 = await this.page.innerText(this.objTurPLF)
        expect(firstValue).not.toEqual(secondValue);

        await webactions.waitForElementAttached(this.objTurGT)
        const firstValue3 = await this.page.innerText(this.objTurGT)
        await webactions.delay(70000);
        const secondValue4 = await this.page.innerText(this.objTurGT)
        expect(firstValue).not.toEqual(secondValue);
    }
//body/app-root[1]/app-shell[1]/div[1]/div[2]/app-configure[1]/div[1]/div[1]/div[1]/mat-drawer-container[1]/mat-drawer-content[1]/div[1]/gridster[1]/gridster-item[2]/div[1]/app-tile[1]/div[1]/div[2]/h3[1]
//body/app-root[1]/app-shell[1]/div[1]/div[2]/app-technical[1]/div[1]/div[1]/div[1]/mat-drawer-container[1]/mat-drawer-content[1]/div[1]/div[2]/div[1]/app-circularguage[1]/div[1]/div[1]/h2[2]/b[1]
    //body/app-root[1]/app-shell[1]/div[1]/div[2]/app-technical[1]/div[1]/div[1]/div[1]/mat-drawer-container[1]/mat-drawer-content[1]/div[1]/div[1]/app-tile[1]/div[1]/div[2]/h3[1]
}