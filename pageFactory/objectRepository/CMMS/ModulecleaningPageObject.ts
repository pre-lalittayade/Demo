export class ModulecleaningPageObjects {

    protected searchbuttons = (label: string) => `//div[@class="form-input-box"]//span[text()="${label}"]//parent::div//span[text()=" search "]`;
    protected Project_dropdown = `//div[@class="form-input-box"]//span[text()="Project"]//parent::div//div [@class="ng-select-container ng-has-value"]`;
    protected projectdropdown_value = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//div[@role="option"]//span[text()="${value}"]`;

    protected cycleName_txt = `#CycleNameId`;
    protected cycle_details = `#CycleDetailsId`;
    protected calender_btn = (value: string) => `//div[@class="form-input-box"]//input[@name="${value}"]//parent::div//button[@class="mat-focus-indicator mat-icon-button mat-button-base"]`;
    protected ActivityApply_btn = `//div[@class="search-pagination"]//button[@mattooltip="Apply"]`;

    protected SelectUsername = (name: string) => `//div[@class="ag-root ag-unselectable ag-layout-normal"]//div[text()="${name}"]`;


    protected AddData = `#AddAssetsId`;
    protected Nametxt = `#NameTextId`;
    protected Codetxt = `#CodeId`;
    protected SearchCycle = `//button[contains(@class,"action-btn mat-tooltip-trigger")]//*[contains(text(),"autorenew")]`;
    protected Applybtn = `#DoneId`;
    protected Cycle_row = (value: string) => `//div[@class="ag-center-cols-container"]//div[@col-id="AssetCode" and text()="${value}"]//parent::div//input[@type="checkbox"]`
    //div[@class="ag-center-cols-container"]//div[@col-id="AssetCode" and text()="IN.PRES.DEMO.AB6402S"]//parent::div//input[@type="checkbox"]
    protected Planned_Date = (value: string) => `//div[@class="show-Flex-Column-Size"]//div[contains(text(),"${value}")]//parent::div//div[@col-id="PlannedDate"]//input[contains(@class,"input-renderer ng-untouched ng-pristine")]`;
    protected PlannedCalendar_btn = `//div//input[@data-placeholder="Select date"]//ancestor::div[@class="mat-form-field-flex"]//div[contains(@class,"mat-form-field-suffix")]//button//*[@class="mat-datepicker-toggle-default-icon ng-star-inserted"]`;
    protected filterproject_dropdown = (value: string) => `//div[@class="mat-drawer-inner-container"]//*[contains(text(),"${value}")]//parent::div//div[@role="combobox"]`;
    protected filterCycle_name = `//div[@class="col-md-12 mt-2"]//*[text()="Cycle Name"]//following-sibling::input`;
    //`//div[@class="col-md-12 mt-2"]//input[@class="default-input ng-untouched ng-pristine ng-valid"]`;
    protected chechGrasscutting = (value: string) => `//div[@class="ag-body-viewport ag-layout-normal ag-row-no-animation"]//div[text()="${value}"]`;
    protected duplicateCycle_btn = `//div[@class="pull-right"]//button[@mattooltip="Duplicate cycle"]`;
    protected FileUpload_btn = `//div[@class="btn btn-default action-button ng-star-inserted"]//span[@class="fa fa-upload"]`;
    protected workordersaving_btn = `//mat-icon[contains(text(),'save')]`;
    protected NOofModuleAssetMaster = (code: string) => `//div[@class="ag-center-cols-container"]//div[text()="${code}"]//following-sibling::div[@col-id="NoOfModules"]`;
    protected NoofModuleAppeared = (value: string) => `//div[@row-index="${value}"]//div[@col-id="NoOfModules"]`;
    protected Assetdetails = (value: string) => `//div[@ref="eBodyViewport"]//div[@class="ag-pinned-left-cols-container"]//div[@row-index="${value}"]`;
    protected assetClose = `#ClearId`;
    protected cancelbtn = `//button[@class="button action-btn mat-tooltip-trigger ng-star-inserted"]//*[text()="cancel"]`;
    protected iButton = (name: string) => `//div[@class="ag-center-cols-container"]//div[@row-index="0"]//div[@col-id="CycleName" and text()="${name}"]//following-sibling::div[@col-id="CycleId_1"]//span/sapn`;

    protected Taskremarks = (value: string) => `//div[@class="ag-center-cols-viewport"]//div[@row-index="${value}"]//*//div[@ref="eInput"]`

}