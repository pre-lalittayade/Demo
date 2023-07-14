export class CostumAlertsObject {

    protected createnewalert  = (value: string) =>`//button[contains(text(),"${value}")]`;
    protected projectanddevice = (value: string) =>`//span[@class="mat-content"]//*[contains(text(),"${value}")]`;
    protected condltlonname = (value: string) =>`//div[@class="col-md-4"]//label[contains(text(),"${value}")]//following-sibling::input`;
    protected feature = (value: string) =>`//div[@class="col-md-4"]//label[contains(text(),"${value}")]//parent::div//*[contains(@class,"default-input pl-0 ng-select ng-select-single ng-select-searchable ng-select-clearable")]`;
    protected feature1 = (value: string) =>`//div[@class="ng-option ng-option-marked ng-star-inserted"]//span[contains(text(),"${value}")]`;
    protected project = (value: string) =>`//div[@class="col-md-4"]//label[contains(text(),"${value}")]//parent::div//*[contains(@class,"default-input pl-0 ng-select ng-select-single ng-select-searchable ng-select-clearable")]`;
    protected project1 = (value: string) =>`//div[@class="ng-option ng-star-inserted"]//span[normalize-space(text())="${value}"]`;
    protected targetdevicecategory = (value: string) => `//div[@class="col-md-4"]//label[contains(text(),"${value}")]//parent::div//*[contains(@class,"default-input pl-0 ng-select ng-select-single ng-select-searchable ng-select-clearable")]`;
    protected targetdevicecategory1 = (value: string) => `//div[@class="ng-option ng-star-inserted"]//span[normalize-space(text())="${value}"]`;
    protected alertsetting = (value: string) =>`//span[@class="mat-content"]//*[contains(text(),"${value}")]`;
    protected starttime = `//input[@id='StartTimeId']`;
    protected endtime = `//input[@id='EndTimeId']`;
    protected timepickerdial =`//div[@class="timepicker ng-trigger ng-trigger-timepicker ng-tns-c39-155 ng-star-inserted"] `;




//span[@class="mat-checkbox-label"]//[normalize-space(text())="Inverter 2-1"]

    //`//span[@class="mat-content"]//*[contains(text(),"${value}")]`;
    //`//div[@class="overview-wrapper"]//form//span[@class="mat-content"]//*[contains(text(),"${value}")]`;
}