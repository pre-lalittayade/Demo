export class EHSPageObject {

    protected downloadbtn = `#DownloadId`;
    protected ProjectDropdown = `//div[@class="mat-drawer-inner-container"]//form//ng-select[@id="ProjectId"]`;
    protected Dropdownvalues = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//div[@role="option"]//span[normalize-space(text())="${value}"]`;

    protected calenderbtn = `//div[@class="date-fields"]//input[@id="ObservationDateId"]//parent::div//button[@aria-label="Open calendar"]`;
    protected targetdate = `//div[@class="date-fields"]//input[@id="TargetDateId"]//parent::div//button[@aria-label="Open calendar"]`;
    protected closedate = `//div[@class="date-fields"]//input[@id="CloseDateId"]//parent::div//button[@aria-label="Open calendar"]`;
    protected repeat = `#RepeatId`;
    protected prevention = `#PreventionId`;

    protected typeofObservation = `#TypeofObservationId`;
    protected location = `#LocationId`;
    protected Description = `#DescriptionId`;
    protected severity = `#SeverityId`;
    protected uploadbtn = `//div[@class="btn btn-default action-button ml-0"]//span[@mattooltip="Upload"]`;
    protected SeverityDropdown = (value: string) => `//ng-dropdown-panel//div[@class="ng-dropdown-panel-items scroll-host"]//span[text()="${value}"]`

    protected filterproject = `//ng-multiselect-dropdown[@id="ProjectId"]//div[@class="multiselect-dropdown"]`;
    protected filterProject_Value = (value: string) => `//div[@class="dropdown-list"]//ul//li//div[text()="${value}"]`;
    protected select_Project = `//li[@class="filter-textbox ng-star-inserted"]//input[@placeholder="Search"]`;


    protected filterobsrvtnFrom = `//div[@class="date-fields"]//input[@id="ObservationFormId"]//parent::div//button[@type="button"]//span[@class="mat-button-wrapper"]`;
    protected filterobsrvtnTo = `//div[@class="date-fields"]//input[@id="ObservationToId"]//parent::div//button[@type="button"]//span[@class="mat-button-wrapper"]`;
    protected filterStatus = `//ng-select[@id="StatusId" and @placeholder="Status"]`;
    protected filtersearch = `#SearchId`;

    protected EditStatus = `//div[@class="mat-drawer-inner-container"]//h2[text()="EHS Details"]//parent::div//ng-select[@id="StatusId"]`;
    protected EditResponsibility = `//div//h2[contains(text(),"EHS Details")]//parent::div//ng-select[@id="ResponsibilityId"]`;

    // protected targetdate = `//div[@class="date-fields"]//input[@id="TargetDateId"]//parent::div//mat-datepicker-toggle//button`;
    // protected closedate = `//div[@class="date-fields"]//input[@id="CloseDateId"]//parent::div//mat-datepicker-toggle//button`;
    protected afterimage = `//div[@class="col-md-12 p-b-10 ng-star-inserted"]//div[@type="button"]//span[@mattooltip="Upload"]`;

    protected sortingfromcolumn = (name: string) => `//div[@col-id="${name}"]//span[@class="ag-icon ag-icon-menu"]`;
    protected buttonsforsorting = (label: string) => `//span[@aria-label="${label}"]`;//general,filter,columns
    protected pincolumn = (name: string) => `//span[@class="ag-menu-option-part ag-menu-option-text" and text()="${name}"]`;
    protected pinvalues = (name: string) => `//div[@class="ag-menu-list ag-focus-managed"]//div[@class="ag-menu-option"]//span[text()="${name}"]`
    protected selectallcheckbx = `//div[@class="ag-column-select-header"]//div//input[@type="checkbox"]`;
    protected columnchkbx = (name: string) => `//div[@class="ag-column-select-column ag-column-select-indent-0"]//span[text()="${name}"]//parent::div//input[@type="checkbox"]`;

    protected DescriptionRow = (name: string) => `//div[@ref="eBodyViewport"]//div[@col-id="Description" and text()="${name}"]//parent::div[@role="row"]`;
    //`//div[@class="ag-center-cols-container"]//div[@col-id="Description" and text()="${name}"];`
    protected Clickonrowstatus = (value: string) => `//div[@class="ag-root-wrapper ag-layout-normal ag-ltr"]//div[@row-index="${value}"]//div[@col-id="Status"]`;

    protected columntosort = (label: string) => `//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="${label}"]`;
    protected AscendingSort = (label: string) => `//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="${label}"]//div[@class="ag-header-cell-label"]//span[@class="ag-icon ag-icon-asc"]`;
    protected DescendingSort = (label: string) => `//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="${label}"]//div[@class="ag-header-cell-label"]//span[@class="ag-icon ag-icon-desc"]`;

    protected projassertion = `//div[@ref="leftContainer"]//div[@col-id="Id"]`;
    protected observationfromassertion = `//div[@ref="eContainer"]//div[@col-id="ObserveDate"]`;
    protected statusassertion = `//div[@ref="eContainer"]//div[@col-id="Status"]`;
    protected status = `//span[contains(text(),"Status")]`;
    protected od = `//span[contains(text(),"Observation Date")]`;

    protected filter_project = `//span[@class="selected-item"]//span`;
    protected filter_obserfrom = `//input[@id="ObservationFormId"]`;
    protected filter_obserto = `//input[@id="ObservationToId"]`;
    protected filter_status = `//div[@class="cmms-chart-multiselect"]//ng-select[@id="StatusId"]//div[@class="ng-placeholder"]`;
    protected filter_respons = `//div[@class="cmms-chart-multiselect"]//ng-select[@id="ResponsibilityId"]//div[@class="ng-placeholder"]`;

    protected edit_project = `//div[@class="mat-drawer-inner-container"]//form//ng-select[@id="ProjectId"]//div[@class="ng-value ng-star-inserted"]//span[2]`;
    protected edit_facility = `//ng-select[@id="TypeofObservationId"]//span[@class="ng-value-label ng-star-inserted"]`;
    protected edit_location = `//ng-select[@id="LocationId"]//span[@class="ng-value-label ng-star-inserted"]`;
    protected edit_description = `//textarea[@id="DescriptionId"]`;
    protected edit_observedby = `//ng-select[@id="ObserveUserId"]//span[@class="ng-value-label ng-star-inserted"]`;
    protected edit_severity = `//ng-select[@id="SeverityId"]//span[@class="ng-value-label ng-star-inserted"]`;
    protected edit_beforeimage = `//h6[contains(text(),"Attach Before Image")]//parent::div//div//a`;
    protected IsReadableOnly = (value: string) => `//h2[contains(text(),"EHS Details")]//ancestor::mat-drawer//ng-select[@id="${value}Id"]//input`;
    protected IsReadableOnly2 = (value: string) => `//h2[contains(text(),"EHS Details")]//ancestor::mat-drawer//textarea[@id="${value}Id"]`;
    protected IsReadableOnly1 = (value: string) => `//h2[contains(text(),"EHS Details")]//ancestor::mat-drawer//input[@id="${value}Id"]`;
    // protected FAstatus = `//ng-multiselect-dropdown[@id="status"]`;
    // protected FAstatusList = (value: string) => `//ng-multiselect-dropdown[@id="status"]//div[@class="dropdown-list"]//ul[@class="item2"]//li//div[contains(text(),"${value}")]`;
} 