import { LossCalculationObject } from "@objects/CMMS/LossCalculationObject";
import { WebActions } from '@lib/WebActions'
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
import { DateActions } from "@lib/web/DateActions";
import { Page, expect } from "@playwright/test";


let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;

export class LossCalculationPage extends LossCalculationObject {

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        dateObj = new DateActions(this.page);

    }

    async CheckBox(locator: string) {
        await webactions.clickElement(this.checkbox(locator));
        await webactions.delay(2000);
    }
    // Filter Functionlaty
    async FilterButton(locator: string) {
        await webactions.clickElement(this.filterbtn);
        await webactions.delay(2000);
    }
    async FilterProjectCalculated(locator: string, value: string) {
        await webactions.clickElement(this.filterprojbtn(locator));
        await webactions.clickElement(this.filterprojvalue(value));
        await webactions.delay(2000);
    }
    async BreakdownStartDate() {
        await webactions.clickElement(this.bdstartdate);
    }
    async BreakdownEndDate() {
        await webactions.clickElement(this.bdenddate);
    }
    async SelectDate(fromDate: string): Promise<void> {
        await dateObj.SelectDate(fromDate);
    }
    async FilterSearch_RefreshButton(locator: string) {
        await webactions.clickElement(this.filtersearchrefreshbtn(locator));
        await webactions.delay(2000);
    }
    // end
    async LossCalculations_Button() {
        await webactions.clickElement(this.calculatebtn);
        await webactions.delay(2000);
    }
    async View_CancleButton(value: string) {
        await webactions.clickElement(this.viewcanclebtn(value));
        await webactions.delay(5000);
    }
    async ClickOnRow(value: string) {
        await webactions.clickElement(this.clickonrow(value));
    }
    async Yes_No_Button(value: string) {
        await webactions.clickElement(this.yes_no_btn(value));
    }


}