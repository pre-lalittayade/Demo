export class JMRObject {

    protected add_btn = (value: string) => `//span[@class="ng-star-inserted"]//*[normalize-space(text())="${value}"]`;
    protected projectclick = `//ng-select[@id='ProjectId']`;
    protected addproject = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//div[contains(@class,"ng-star-inserted")]//span[normalize-space(text())="${value}"]`;
    protected billedunbilledunitbtn = `//div//*[@id="BilledUnitsId"]//span[@class="mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin"]`;
    protected datebutton = (value: string) => `//div[contains(@class,"form-input-box")]//span[normalize-space(text())="${value}"]//parent::div//button`;
    protected schedulestartdate = `//span[contains(text(), "Schedule Start")]//following-sibling::div[1]//button`;
    // `//div//input[@class="default-input ng-untouched ng-pristine ng-invalid"]//parent::div//button[@class="mat-focus-indicator mat-icon-button mat-button-base"]//span[@class="mat-button-wrapper"]`;
    // `/span[contains(text(), "${value}")]//following-sibling::div[1]//button`;
    protected scheduleenddate = `//span[contains(text(), "Schedule End")]//preceding-sibling::div//following-sibling::div//button`;
    // `//div//input[@class="default-input ng-untouched ng-pristine ng-invalid"]//parent::div//*[@data-mat-calendar="mat-datepicker-6"]//button//span[@class="mat-button-wrapper"]`; 
    //`//span[contains(text(), "${value}")]//preceding-sibling::div//button`;
    protected jmrstartdate = `//span[contains(text(), "JMR Start")]//parent::div/div[1]//button`;
    // `//div[@class="form-input-box ng-star-inserted"]//span[text()="JMR Start Date"]//parent::div//div//*[@data-mat-calendar="mat-datepicker-16"]//button//span[@class="mat-button-wrapper"]`;
    // `//div//input[@class="default-input ng-untouched ng-pristine ng-invalid"]//parent::div//button[@class="mat-focus-indicator mat-icon-button mat-button-base"]//span[@class="mat-button-wrapper"]`;
    protected jmrenddate = `//span[contains(text(), "JMR End")]//preceding-sibling::div//following-sibling::div//button`;
    // `//div//*[@data-mat-calendar="mat-datepicker-17"]//button`;
    // `//div//input[@class="default-input ng-untouched ng-pristine ng-valid"]//parent::div//*[@data-mat-calendar="mat-datepicker-17"]//button//span[@class="mat-button-wrapper"]`;
    protected searchbutton = (value: string) => `//div[@class="form-input-box"]//span[contains(text(),"${value}")]//parent::div//div[2]//i`;
    protected selectusername = (value: string) => `//div[@class="ag-root ag-unselectable ag-layout-normal"]//div[text()="${value}"]`;
    protected user = (value: string) => `//div[@col-id="UserName" and text()="${value}"]`;
    protected apply_btn = `//div[@class="search-pagination"]//button[@mattooltip="Apply"]`;
    protected addasset = `//span[@class="icon icon-Add"]`;
    protected assetname = (value: string) => `//div//label[contains(text(),"${value}")]//parent::div//input`;
    protected assetcode = (value: string) => `//div//label[contains(text(),"${value}")]//parent::div//input`;
    protected assetsearchandreset = (value: string) => `//div[contains(@class,"align-items-end")]//button[@mattooltip="${value}"]`;
    protected checkbox = (value: string) => `//div[@class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height"]//parent::div//div[contains(text(),"${value}")]`;
    // `//div[contains(@class,"ag-checkbox")]//input[@xpath=1]`;
    protected assetapplybtn = `//div[contains(@class,"search-pagination")]//button[@mattooltip="Apply"]`;
    protected filebtn = `//div[@class="mat-tab-list"]//div[text()="Files"]`;
    protected uplodebtn = `//button[@id='UploadId']`;
    protected billedUnit = (value: string) => `//div[@class="ag-center-cols-container"]//*//div[contains(text(),"${value}")]//parent::div//div[3][contains(@class,"ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value")]//*//input`;
    // `//div[@class="ag-center-cols-container"]//*//div[contains(text(),"${value}")]//parent::div//div[contains(@class,"ag-cell-focus")]//*//input`;
    protected deemedgeneration = (value: string) => `//div[@class="ag-center-cols-container"]//*//div[contains(text(),"${value}")]//parent::div//div[4][contains(@class,"ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value")]//*//input`;
    protected assetdelete = (value: string) => `//div[@class="ag-center-cols-container"]//*//div[contains(text(),"${value}")]//parent::div//div[5][contains(@class,"ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value")]//*//i`;
    protected menubuttons = (value: string) => `//button//*[contains(text(),"${value}")]`;
    protected savepopupokyes = (value: string) => `//button[contains(text(),"${value}")]`;
    protected filterbtn = `//button[@id="FilterId"]`;
    protected filterdropdownlables = (value: string) => `//div[@class="mat-drawer-inner-container"]//h2[contains(text(),"Search")]//parent::div//div[@class="side-bar-input-container"]//*[text()="${value}"]//parent::div//div[@class="cmms-chart-multiselect"]`;
    protected spvname = (value: string) => `//div[@class="dropdown-list"]//*//div[text()="${value}"]`;
    protected billingmonthdatebtn = (value: string) => `//div[@class="mat-drawer-inner-container"]//h2[contains(text(),"${value}")]//parent::div//div[@class="side-bar-input-container"]//*[text()="Billing Month"]//parent::div//button`;
    protected approvername = (value: string) => `//div[@class="form-input-box"]//span[contains(text(),"Approver")]//parent::div//*//div[@class="dropdown-list"]//*//div[text()="${value}"]`;
    protected selectjmrforbulkupdate = (value: string) => `//div[@class="ag-center-cols-clipper"]//*//div[contains(text(),"${value}")]//parent::div//*//input[@type="checkbox"]`;
    protected bulkupdatebtn = (value: string) => `//button[contains(text(),"${value}")]`;
    protected updatedropdownlables = (value: string) => `//div[@class="mat-drawer-inner-container"]//h2[contains(text(),"Update")]//parent::div//*[@class="side-bar-input-container"]//h6[contains(text(),"${value}")]//parent::div//*[contains(@class,"default-input ng-select")]`;
    // `//div[@class="mat-drawer-inner-container"]//h2[contains(text(),"Update")]//parent::div//div[@class="side-bar-input-container"]//*//div[contains(text(),"${value}")]`;
    protected updateremarkbtn = `//div//*[@id="RemarksId"]`;
    protected searchbtn = `//button[@id="SearchId"]`;
    protected statusvalue = (value: string) => `//div[@class="mat-drawer-inner-container"]//h2[contains(text(),"Update")]//parent::div//div[@class="side-bar-input-container"]//*//div[@class="ng-dropdown-panel-items scroll-host"]//*//span[contains(text(),"${value}")]`;
    //div[@class="ng-dropdown-panel-items scroll-host"]//*//span[contains(text(),"${value}")];
    protected bulkupdateschedulestartenddate = (value: string) => `//span[contains(text(), "${value}")]//following-sibling::div[1]//button`;
}