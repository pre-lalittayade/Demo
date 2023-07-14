import { WSObject } from "@objects/Monitoring/WSObject";
import { WebActions } from '@lib/WebActions'
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
import { DateActions } from "@lib/web/DateActions";
import { expect, Page } from "@playwright/test";
import { MenuActions } from "@lib_web/MenuActions";

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;

export class WSPage extends WSObject{

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

    
    async BLK03DailyEnergy() {
        await webactions.waitForElementAttached(this.objBLK03)
        const firstValue = await this.page.innerText(this.objBLK03)
        await webactions.delay(70000);
        const secondValue = await this.page.innerText(this.objBLK03)
        expect(firstValue).not.toEqual(secondValue);
    }

    async BLK08DailyEnergy() {
        await webactions.waitForElementAttached(this.objBLK08)
        const firstValue = await this.page.innerText(this.objBLK08)
        await webactions.delay(70000);
        const secondValue = await this.page.innerText(this.objBLK08)
        expect(firstValue).not.toEqual(secondValue);
    }

}