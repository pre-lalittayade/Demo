import { LoginPageObjects } from "@objects/LoginPageObjects";
import { WebActions } from "@lib/WebActions";
import type { Page } from '@playwright/test';
import {testConfig} from '../../testConfig';
import {TextBoxActions} from '@lib_web/TextBoxActions';
import{ButtonActions} from '@lib_web/ButtonActions';

let webActions: WebActions;
let textBoxActionsObj: TextBoxActions;
let buttonActionsObj: ButtonActions;

export class LoginPage extends LoginPageObjects{
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
        textBoxActionsObj = new TextBoxActions(this.page)
        buttonActionsObj = new ButtonActions(this.page)
    }


    // async navigateToURL(): Promise<void> {
    //     await webActions.navigateToURL(testConfig.qa);
    //     // await webActions.navigateToURL(testConfig.User);
    //     await webActions.waitForElementAttached(this.email_txt)
    // }

    env = process.env.ENV
    configEnv = testConfig.envorments[this.env];

    async navigateToURL(): Promise<void> {
        const url = this.configEnv[0].url;
        await webActions.navigateToURL(url);
        await webActions.waitForElementAttached(this.email_txt);
    }

    async loginToApplication(): Promise<void> {
        // const decipherPassword = await webActions.decipherPassword();
        await textBoxActionsObj.enterElementText(this.email_txt, testConfig.username);
        await textBoxActionsObj.enterElementText(this.password_txt, testConfig.password);
        await buttonActionsObj.clickElement(this.login_btn);
        await webActions.waitForElementAttached(this.logout_btn);
    }

   async LogoutOfApplication(): Promise<void>  {
        await buttonActionsObj.clickElement(this.logout_btn);
        await buttonActionsObj.clickElement(this.logout_confirm_yes_btn);
        await webActions.waitForElementAttached(this.login_btn)
   }
}
