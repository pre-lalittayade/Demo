export class EHSManualDataObject {


    protected ProjectDropdown = `//div[@class="mat-drawer-inner-container"]//form//ng-select[@id="ProjectId"]`;
    protected Dropdownvalues = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//div[@role="option"]//span[normalize-space(text())="${value}"]`;

    protected ObservationMonth = `//div[@class="col-md-12 m-b-10"]//input[@id="ObservationMonthId"]//parent::div//button[@aria-label="Open calendar"]`;
    protected LostTimeInjrs = `#lTINonReportableId`;
    protected Avgnoworkers = `#AvgNoOfworkersId`;
    protected AvgNoofPerson = `#AvgPersonPerdayId`;
    protected Manhours = `#ManHoursWorkedId`;
    protected Ttlsafemanhrs = `#SafeMenHoursachievedId`;
    protected lostworkday = `#LostWorkdayId`;
    protected HSEmeeting = `#HSEmeetingId`;
    protected InductionTraining = `#inductionTrainigId`;
    protected filterproject = `//div[@class="col-md-12 m-b-10 mttrFormFileds"]//div[@class="cmms-chart-multiselect"]//ng-multiselect-dropdown[@id="ProjectId"]`;
    protected filterProject_Value = (value: string) => `//div[@class="dropdown-list"]//ul//li//div[text()="${value}"]`;
    protected select_Project = `//li[@class="filter-textbox ng-star-inserted"]//input[@placeholder="Search"]`;

    protected filterSearch = `#SearchId`;
    protected filterReset = `#ResetId`;
    protected sortingfromcolumn = (name: string) => `//div[@col-id="${name}"]//span[@class="ag-icon ag-icon-menu"]`;
    protected checkavgworkers = `//div[@class="ag-center-cols-viewport"]//div[@row-index="0"]//div[@col-id="AvgNoOfWorkers"]`;
    protected checkobsernmonth = `//div[@class="ag-center-cols-viewport"]//div[@row-index="0"]//div[@col-id="EHSMonth"]`;
    protected buttonsforsorting = (label: string) => `//span[@aria-label="${label}"]`;//general,filter,columns

    protected pincolumn = (name: string) => `//span[@class="ag-menu-option-part ag-menu-option-text" and text()="${name}"]`;
    protected pinvalues = (name: string) => `//div[@class="ag-menu-list ag-focus-managed"]//div[@class="ag-menu-option"]//span[text()="${name}"]`
    protected selectallcheckbx = `//div[@class="ag-column-select-header"]//div//input[@type="checkbox"]`;
    protected columnchkbx = (name: string) => `//div[@class="ag-column-select-column ag-column-select-indent-0"]//span[text()="${name}"]//parent::div//input[@type="checkbox"]`;


    protected columntosort = (label: string) => `//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="${label}"]`;
    protected AscendingSort = (label: string) => `//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="${label}"]//div[@class="ag-header-cell-label"]//span[@class="ag-icon ag-icon-asc"]`;
    protected DescendingSort = (label: string) => `//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="${label}"]//div[@class="ag-header-cell-label"]//span[@class="ag-icon ag-icon-desc"]`;

    protected edit_project = `//h2[contains(text(),"EHS Manual Data Details")]//parent::div//ng-select[@id="ProjectId"]//div[2]//span[2]`;
    protected edit_parameters = (value: string) => `//h2[contains(text(),"EHS Manual Data Details")]//parent::div//input[@id="${value}"]`;
    protected edit_location = `//ng-select[@id="LocationId"]//span[@class="ng-value-label ng-star-inserted"]`;
    protected edit_description = `//textarea[@id="DescriptionId"]`;
    protected edit_observedby = `//ng-select[@id="ObserveUserId"]//span[@class="ng-value-label ng-star-inserted"]`;
    protected edit_severity = `//ng-select[@id="SeverityId"]//span[@class="ng-value-label ng-star-inserted"]`;
    protected edit_beforeimage = `//h6[contains(text(),"Attach Before Image")]//parent::div//div//a`;
    protected resetfilterproj = `//h2[contains(text(),"Search")]//parent::div//ng-multiselect-dropdown[@id="ProjectId"]//span[@class="selected-item"]//span`;
}
