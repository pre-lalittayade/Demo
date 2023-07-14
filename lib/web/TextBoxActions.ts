import {WebActions} from '@lib/WebActions'


export class TextBoxActions extends WebActions {
    
        async enterElementText(locator: string, text: string): Promise<void> {
        await this.waitForElementAttached(locator);
        await this.page.fill(locator, text);
    }
}