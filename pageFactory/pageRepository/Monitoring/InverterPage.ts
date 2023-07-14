import { InverterObject } from "@objects/Monitoring/InverterObject";
import { WebActions } from '@lib/WebActions'
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
import { DateActions } from "@lib/web/DateActions";
import { expect, Page } from "@playwright/test";
import { MenuActions } from "@lib_web/MenuActions";

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;

export class InverterPage extends InverterObject{

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        dateObj = new DateActions(this.page);
        menuObj = new MenuActions(this.page);

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

    async Dropdown(value:string){
        await webactions.clickElement(this.dropdownclick);
        await this.page.keyboard.type(value);
        await webactions.clickElement(this.dropdownclick1);
        await webactions.delay(15000);
    }



//Assertion

    async SolarPR() {
        await webactions.waitForElementAttached(this.obj)
        const firstValue = await this.page.innerText(this.obj)
        await webactions.delay(60000);
        const secondValue = await this.page.innerText(this.obj)
        expect(firstValue).not.toEqual(secondValue);
    }

    async Power() {
        await webactions.waitForElementAttached(this.objpower)
        const firstValue = await this.page.innerText(this.objpower)
        await webactions.delay(60000);
        const secondValue = await this.page.innerText(this.objpower)
        expect(firstValue).not.toEqual(secondValue);
    }

    async DailyEnergy() {
        await webactions.waitForElementAttached(this.objdailyenergy)
        const firstValue = await this.page.innerText(this.objdailyenergy)
        await webactions.delay(60000);
        const secondValue = await this.page.innerText(this.objdailyenergy)
        expect(firstValue).not.toEqual(secondValue);
    }

}