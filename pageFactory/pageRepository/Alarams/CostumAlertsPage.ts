import { CostumAlertsObject } from "@objects/Alarams/CostumAlertsObject";
import { WebActions } from '@lib/WebActions'
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
import { DateActions } from "@lib/web/DateActions";
import { Page, expect } from "@playwright/test";
import { testConfig } from "../../../testConfig";
// import { test,expect } from "@playwright/test";

let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;

export class CostumAlertstPage extends CostumAlertsObject {

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        dateObj = new DateActions(this.page);

    }

    async CreateNewAlert (buttonName: string): Promise<void> {
        await webactions.clickElement(this.createnewalert(buttonName));
    }
    async ProjectAndDevice (button: string) : Promise<void>  {
        await webactions.waitForElementAttached(this.projectanddevice(button));
        await webactions.clickElement(this.projectanddevice(button));
    }
    async CondltlonName (locator: string, Name: string): Promise<void> {
        await webactions.enterElementText(this.condltlonname(locator),Name);
    }
    async Feature (locator: string, Name: string): Promise<void> {
        await webactions.clickElement(this.feature(locator));
        // await webactions.enterElementText(this.condltlonnamefeature(locator),Name);
        await webactions.clickElement(this.feature1(Name));
    }
    async Project (locator: string, Name: string): Promise<void> {
        await webactions.clickElement(this.project(locator));
        await webactions.clickElement(this.project1(Name));
    }
    async TargetDeviceCategory (locator: string, Name: string): Promise<void> {
        await webactions.clickElement(this.targetdevicecategory(locator));
        await webactions.clickElement(this.targetdevicecategory1(Name));
    }

    // Problem in fetching x path for inverter 2-1

    async AlertSetting (button: string) : Promise<void>  {
        await webactions.waitForElementAttached(this.projectanddevice(button));
        await webactions.clickElement(this.projectanddevice(button));
    }
    async StartTime (time:string) {
        await webactions.clickElement(this.starttime);
        await webactions.enterElementText(this.starttime,time);
        await webactions.delay(5000);
    }
    async EndTime (time:string) {
        await webactions.clickElement(this.endtime);
        await webactions.enterElementText(this.endtime,time);
        await webactions.delay(5000);
    }

}
