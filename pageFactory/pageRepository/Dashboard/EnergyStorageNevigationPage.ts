import { EnergyStorageNevigationObject } from "@objects/Dashboard/EnergyStorageNevigationObject";
import { WebActions } from '@lib/WebActions'
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
import { DateActions } from "@lib/web/DateActions";
import { expect, Page } from "@playwright/test";
import { MenuActions } from "@lib_web/MenuActions"

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let menuObj: MenuActions;

export class EnergyStoragePage extends EnergyStorageNevigationObject {

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        dateObj = new DateActions(this.page);
        menuObj = new MenuActions(this.page);

    }
    async EnergyStorage_Btn() {
        await webactions.clickElement(this.energy_storage_button);
        await webactions.delay(9000);
    }

    // Assertion
    async CheckPowerRating() {
        await webactions.waitForElementAttached(this.objPR)
        const firstValue = await this.page.innerText(this.objPR)
        await webactions.delay(60000);
        const secondValue = await this.page.innerText(this.objPR)
        expect.soft(firstValue).not.toEqual(secondValue);
    }

    // clicking on menu button of short name for filtering name

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

    async BlockDropdown(value:string){
        await webactions.clickElement(this.blockdropdownclick);
        await this.page.keyboard.type(value);
        await webactions.clickElement(this.blockdropdownclick1);
        await webactions.delay(15000);
    }

    // Assertion
    async CheckEnergyRating() {
        await webactions.waitForElementAttached(this.objER)
        const firstValue = await this.page.innerText(this.objER)
        await webactions.delay(60000);
        const secondValue = await this.page.innerText(this.objER)
        expect.soft(firstValue).not.toEqual(secondValue);
    
    }

    // Assertion
    async CheckSubgroupVoltage() {
        await webactions.waitForElementAttached(this.objvtg)
        const firstValue = await this.page.innerText(this.objvtg)
        await webactions.delay(60000);
        const secondValue = await this.page.innerText(this.objvtg)
        expect.soft(firstValue).not.toEqual(secondValue);
    }

    // Assertion
    async CheckBlockVtg() {
        await webactions.waitForElementAttached(this.objvtg)
        const firstValue = await this.page.innerText(this.objvtg)
        await webactions.delay(60000);
        const secondValue = await this.page.innerText(this.objvtg)
        expect.soft(firstValue).not.toEqual(secondValue);
    }

    // async AddAssetReferenceCode(value:string){
    //     await webactions.enterElementText(this.add_referencecode,value);
    //     await webactions.delay(5000);
    // }//body/app-root[1]/app-shell[1]/div[1]/div[2]/app-subgroup[1]/div[1]/div[1]/div[1]/mat-drawer-container[1]/mat-drawer-content[1]/div[1]/div[1]/app-tile[2]/div[1]/div[2]/h3[1]
//body/app-root[1]/app-shell[1]/div[1]/div[2]/app-block[1]/div[1]/div[1]/div[1]/mat-drawer-container[1]/mat-drawer-content[1]/div[1]/div[1]/app-tile[2]/div[1]/div[2]/h3[1]
    //body/app-root[1]/app-shell[1]/div[1]/div[2]/app-home[1]/app-landing-overview[1]/div[4]/ag-grid-angular[1]/div[1]/div[2]/div[2]/div[3]/div[1]/div[2]

}