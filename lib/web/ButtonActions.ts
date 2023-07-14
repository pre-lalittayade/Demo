
import {WebActions} from '@lib/WebActions'


export class ButtonActions extends WebActions {

    async clickElement(locator: string): Promise<void> {
        await this.waitForElementAttached(locator);
        await this.page.click(locator);
    }
}