// import { EHSPageObject } from '@objects/CMMS/EHSPageObjects';
import { WebActions } from '@lib/WebActions'
import { testConfig } from '../../../../testConfig';
import { ComboBoxActions } from '@lib_web/ComboBoxActions'
import { DateActions } from "@lib/web/DateActions";
import { Page, expect } from "@playwright/test";
import { SmokeCommonMethodObject } from '@objects/SmokeSuit/SolarSmoke/CommonMethodObjetc';
import { ButtonActions } from '@lib_web/ButtonActions';
import { TextBoxActions } from '@lib_web/TextBoxActions';


let webactions: WebActions;
let comboBoxObj: ComboBoxActions;
let dateObj: DateActions;
let textBoxActionsObj: TextBoxActions;
let buttonActionsObj: ButtonActions;
let webActions: WebActions;



function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

export class SmokeCommonMethodsPage extends SmokeCommonMethodObject {

    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webactions = new WebActions(this.page);
        comboBoxObj = new ComboBoxActions(this.page);
        dateObj = new DateActions(this.page);
        textBoxActionsObj = new TextBoxActions(this.page)
        buttonActionsObj = new ButtonActions(this.page)
        webActions = new WebActions(this.page);

        


    }

    async ClickOnEOSEButton() {
        await webactions.waitForElementAttached(this.EoseBtn);
        await webactions.clickElement(this.EoseBtn);

    }
    async ChecktheRowforAccount(name: string) {
        let acrow = this.page.locator(this.rowcheck);
        await webactions.delay(2000);
        expect.soft(acrow).toContainText(name);
        await webactions.clickElement(this.rowcheck);
        await webactions.delay(2000);
    }

    async filterfromcolumn(idname: string, name: string) {


        await webactions.clickElement(this.sortingfromcolumn(idname));
        await webactions.clickElement(this.buttonsforsorting("filter"));
        //await webactions.delay(4000);
        let searchtxt = `//div[@class="ag-filter-body"]//div[@ref="eValue1"]//input`;
        await this.page.fill(searchtxt, name);
        //await webactions.delay(2000);
        await webactions.clickElement(this.buttonsforsorting("filter"));
        await webactions.delay(2000);
    }
    async loginToApplication(username1: string, password1: string): Promise<void> {
        // const decipherPassword = await webActions.decipherPassword();
        // await textBoxActionsObj.enterElementText(this.email_txt, testConfig.username);
        // await textBoxActionsObj.enterElementText(this.password_txt, testConfig.password);
        await textBoxActionsObj.enterElementText(this.email_txt, username1);
        await textBoxActionsObj.enterElementText(this.password_txt, password1);
        await buttonActionsObj.clickElement(this.login_btn);
        await webActions.delay(10000);
        await webActions.waitForElementAttached(this.logout_btn);
    }
    async Wind_Btn() {
        await webactions.clickElement(this.wind_button);
        await webactions.delay(5000);
    }


}
