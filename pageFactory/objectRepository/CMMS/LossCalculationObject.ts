export class LossCalculationObject {

    protected checkbox = (value: string) => `//div[contains(text(),"${value}")]//parent::div//div[@class="ag-cell-wrapper"]//*[@type="checkbox"]`;
    protected calculatebtn = `//button[@id='CalculatorId']`;
    protected filterbtn = `//button[@id='FilterId']`;
    protected viewcanclebtn = (value: string) => `//span//button//*[contains(text(),"${value}")]//parent::button`;
    protected projectclick = `//ng-select[@id='ProjectId']`;
    protected filterprojbtn = (value: string) => `//div[@class="mat-drawer-inner-container"]//*[contains(text(),"${value}")]//parent::div//*[contains(@class,"default-input pl-0 ng-select ng-select-single ng-select-searchable")]`;
    protected filterprojvalue = (value: string) => `//div[contains(@class,"ng-option ng-star-inserted")]//span[contains(text(),"${value}")]`;
    protected bdstartdate = `//div[@class="form-input-box"]//div[2]//button `;
    protected bdenddate = `//div[@class="form-input-box"]//div[4]//button `;
    protected filtersearchrefreshbtn = (value: string) => `//span[contains(text(),"${value}")]`;
    protected clickonrow = (value: string) => `//div[contains(text(),"${value}")]`;
    protected yes_no_btn = (value: string) => `//button[contains(text(),"${value}")]`;



}