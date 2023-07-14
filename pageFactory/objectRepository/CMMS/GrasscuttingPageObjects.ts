export class GrasscuttingPageObjects{
    protected searchbuttons=(label:string)=>`//div[@class="form-input-box"]//span[text()="${label}"]//parent::div//span[text()=" search "]`;
    protected Project_dropdown=`//div[@class="form-input-box"]//span[text()="Project"]//parent::div//div [@class="ng-select-container ng-has-value"]`;
    protected projectdropdown_value=(value:string)=>`//div[@class="ng-dropdown-panel-items scroll-host"]//div[@role="option"]//span[text()="${value}"]`;
    protected cycleName_txt=`#cycleNameId1`;
    protected cycle_details=`#CycleDetailsTextId`;
    protected calender_btn=(value:string)=>`//div[@class="form-input-box"]//input[@name="${value}"]//parent::div//button[@class="mat-focus-indicator mat-icon-button mat-button-base"]`;
    protected ActivityApply_btn=`//div[@class="search-pagination"]//button[@mattooltip="Apply"]`;
    
    
    protected SelectUsername=(name: string) =>`//div[@class="ag-root ag-unselectable ag-layout-normal"]//div[text()="${name}"]`;
    protected AddData=`#AddAssetsId`;
    protected Nametxt=`#NameTextId`;
    protected Codetxt=`#CodeId`;
    protected SearchCycle=`#SearchId`;
    protected Applybtn=`#DoneId`;
    protected Cycle_row=(value:string)=>`//div[@class="ag-center-cols-container"]//div[@col-id="AssetCode" and text()="${value}"]//parent::div//input[@type="checkbox"]`
    //div[@class="ag-center-cols-container"]//div[@col-id="AssetCode" and text()="IN.PRES.DEMO.AB6402S"]//parent::div//input[@type="checkbox"]
    
    protected PlannedCalendar_btn=`//div//input[@data-placeholder="Select date"]//ancestor::div[@class="mat-form-field-flex"]//div[contains(@class,"mat-form-field-suffix")]//button//*[@class="mat-datepicker-toggle-default-icon ng-star-inserted"]`;
    protected filterproject_dropdown=(value: string) =>`//div[@class="mat-drawer-inner-container"]//*[contains(text(),"${value}")]//parent::div//div[@role="combobox"]`; 
    protected filterCycle_name=`#CycleNameId`;
    protected checkGrasscutting=(value: string) =>`//div[@class="ag-body-viewport ag-layout-normal ag-row-no-animation"]//div[text()="${value}"]`;
    protected duplicateCycle_btn=`#DuplicateId`;
    protected FileUpload_btn=`//div[@class="btn btn-default action-button ng-star-inserted"]//span[@class="fa fa-upload"]`;
    protected workordersaving_btn=`//mat-icon[contains(text(),'save')]`;
    protected Planneddate=(value: string) =>`//div[@class="ag-body-viewport ag-layout-normal ag-row-no-animation"]//div[contains(text(),"${value}")]//ancestor::div[@class="ag-body-viewport ag-layout-normal ag-row-no-animation"]//div[@class="ag-center-cols-clipper"]//div[@col-id="PlannedDate"]//input[contains(@class,"input-renderer")]`;
    protected NOofTableAssetMaster=(code: string) =>`//div[@class="ag-center-cols-container"]//div[text()="${code}"]//following-sibling::div[@col-id="NoOfTables"]`;
    protected NoofTableAppeared=(value: string) =>`//div[@row-index="${value}"]//div[@col-id="NoOfModules"]`;
    protected cancelbtn=`//button[@class="bttn action-btn mat-tooltip-trigger ng-star-inserted"]//*[text()="cancel"]`;
    protected iButton=(name: string) =>`//div[@class="ag-center-cols-container"]//div[@row-index="0"]//div[@col-id="CycleName" and text()="${name}"]//following-sibling::div[@col-id="CycleId_1"]`;
    //span[contains(@class,"material-icons-outlined")]`;
    protected Assetdetails=(value: string) =>`//div[@ref="eBodyViewport"]//div[@class="ag-pinned-left-cols-container"]//div[@row-index="${value}"]`;
    protected assetClose=`#ClearId`;
    }
    