
import { WebActions } from '@lib/WebActions'


export class ComboBoxActions extends WebActions {

    async SelectValue(locator: string, dropdownName: string, dropDownValueName: string): Promise<void> {
        await this.waitForElementAttached(locator);
        let valueToSelect = (value: string) => `//span[contains(text(), "${value}")]`;
        let current_value = await this.GetDropDOwnValue(dropdownName);
        if (current_value !== dropDownValueName) {
            await this.page.click(locator);
            await this.page.click(valueToSelect(dropDownValueName));
        }
    }

    // async GetDropDOwnValue (name:string): Promise<string> {

    //     let current_value_dropdown= (name: string) =>
    //     `//div[contains(text(), "${name}")]//parent::div//span[@class="ng-value-label ng-star-inserted"]`
    //      let value =  await this.page.innerText(current_value_dropdown(name));    
    //      return value;
    // }

    async GetDropDOwnValue(name: string): Promise<string> {

        let current_value_dropdown = (name: string) =>
            `//div[text() = "${name}"]//parent::div//span[@class="ng-value-label ng-star-inserted"]`
        let value = await this.page.innerText(current_value_dropdown(name));
        return value;
    }

    async GetDropDOwnValueCMMS(name: string): Promise<string> {

        let current_value_dropdown = (name: string) =>
            `//divs[(text(), "${name}")]//parent::div//span[@class="ng-arrow-wrappe"]`
        let value = await this.page.innerText(current_value_dropdown(name));
        return value;
    }

//CMMS Task 

// async SelectValueFromPanel(locator: string, dropdownName: string, dropDownValueName: string): Promise<void> {
//     await this.waitForElementAttached(locator);
//     let valueToSelect = (value: string) => `//span[contains(text(), "${value}")]`;
//     let current_value = await this.GetDropDOwnValueFromPanel(dropdownName);
//     if (current_value !== dropDownValueName) {
//         await this.page.click(locator);
//         await this.page.click(valueToSelect(dropDownValueName));
//     }
// }

// async GetDropDOwnValueFromPanel(name: string): Promise<string> {
//     let current_value_dropdown = (name: string) =>
//         `//div[@class="mat-drawer-inner-container"]//form//div[contains(@class,"ng-star-inserted")]//*[text() ="${name}"]//parent::div//span[@class="ng-value-label ng-star-inserted"]`
//     let value = await this.page.innerText(current_value_dropdown(name));
//     return value;
// }



async SelectValueFromPanel(locator: string, dropdownName: string, dropDownValueName: string, filter:boolean = false): Promise<void> {
        await this.waitForElementAttached(locator);
        let valueToSelect = (value: string) => `//span[contains(text(), "${value}")]`;
        let current_value = await this.GetDropDOwnValueFromPanel(dropdownName, filter);
        if (current_value !== dropDownValueName) {
            await this.page.click(locator);
            await this.page.click(valueToSelect(dropDownValueName));
        }
    }

    async GetDropDOwnValueFromPanel(name: string, filter: boolean): Promise<string> {
        let current_value_dropdown
        if(!filter){
            current_value_dropdown = (name: string) =>
            `//div[@class="mat-drawer-inner-container"]//form//div[contains(@class,"ng-star-inserted")]//*[text() ="${name}"]//parent::div//span[@class="ng-value-label ng-star-inserted"]`
        }
            else{
                current_value_dropdown = (name: string) =>
                `//div[@class="mat-drawer-inner-container"]//*//div[contains(@class,"ng-star-inserted")]//*[text() ="${name}"]//parent::div//span[@class="ng-value-label ng-star-inserted"]`

            }
        let value = await this.page.innerText(current_value_dropdown(name));
        return value;
    }

    // Dropdown
    






}