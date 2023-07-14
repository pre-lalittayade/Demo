import { LoginMultipalUsersObject } from "../../objectRepository/Login Users/LoginMultipalUsersObject";
import { WebActions } from "@lib/WebActions";
import type { Page } from '@playwright/test';
import {testConfig} from '../../../testConfig';
import {TextBoxActions} from '@lib_web/TextBoxActions';
import{ButtonActions} from '@lib_web/ButtonActions';
import { Data } from "../../../tests/resources/LoginUsers/LoginData"


let webActions: WebActions;
let textBoxActionsObj: TextBoxActions;
let buttonActionsObj: ButtonActions;

export class LoginMultipalUsersPage extends LoginMultipalUsersObject{
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
        textBoxActionsObj = new TextBoxActions(this.page)
        buttonActionsObj = new ButtonActions(this.page)
    }


    async navigateToURL(): Promise<void> {
        await webActions.navigateToURL(testConfig.qa);
        await webActions.waitForElementAttached(this.email_txt)
    }

    async loginToApplication( username1 : string,  password1 : string): Promise<void> {
        // const decipherPassword = await webActions.decipherPassword();
        // await textBoxActionsObj.enterElementText(this.email_txt, testConfig.username);
        // await textBoxActionsObj.enterElementText(this.password_txt, testConfig.password);
        await textBoxActionsObj.enterElementText(this.email_txt, username1);
        await textBoxActionsObj.enterElementText(this.password_txt, password1);
        await buttonActionsObj.clickElement(this.login_btn);
        await webActions.delay(10000);
        await webActions.waitForElementAttached(this.logout_btn);
    }

   async LogoutOfApplication(): Promise<void>  {
        await buttonActionsObj.clickElement(this.logout_btn);
        await buttonActionsObj.clickElement(this.logout_confirm_yes_btn);
        await webActions.waitForElementAttached(this.login_btn)
   }
}
