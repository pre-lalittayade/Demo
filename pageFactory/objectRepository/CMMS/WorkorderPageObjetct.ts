export class WorkorderPageObject {

  
    protected saving_btn=`//mat-icon[contains(text(),'save')]`;
   
   protected Cancel=`//mat-icon[contains(text(),"close")]`;
   protected add_subclass_name_txt=`//div[@class="name-input"]//input[@name="SubClassificationName"]`;
   protected subclass_search_btn=`//div[@class="subClassificationIcons"]//button[@mattooltip="Search"]`;
   protected Activity_row=(name: string) =>`//div[@class="ag-center-cols-container"]//div[text()="${name}"]`;



protected Search_btn=`#SearchId`;
protected Listview_btn=`//span[@class="ng-star-inserted"]//button[@class="btn btn-default action-button fill-basic-button mat-tooltip-trigger"]`;
protected Calender_btn=`//button[@class="btn btn-default action-button mozila-btn-class fill-basic-button mat-tooltip-trigger ng-star-inserted"]//span[@class="fa fa-dashboard"]`;
protected View_Dashboard=`//button[@class="btn btn-default action-button mozila-btn-class fill-basic-button mat-tooltip-trigger ng-star-inserted"]//span[@class="fa fa-calendar"]`;
protected Listdownload_btn=`#ListDownloadId`;
protected Completedownload_btn=`#CompleteDownloadId`;
protected project_dropdown=(value: string) =>`//div[@class="col-md-4 p-0"]//*//div[contains(@class,"ng-star-inserted")]//*[contains(text(),"${value}")]//parent::div//div[@role="combobox"]`;
//protected filterProject_dropdown=(value: string) =>`//div[@class="mat-drawer-inner-container"]//div[@class="col-md-12 m-b-10"]//*[contains(text(),"${value}")]//parent::div//div//*[@class="multiselect-dropdown"]`;
protected activitySearch_btn=`#SearchId1`;
//`//div[@class="m-t-16 activityField"]//button[@id="SearchId1"]`;
protected classification_dropdown=(value:string)=>`//div[@class="show-Flex-Container show-Flex-Column searchList"]//*//div[contains(@class,"ng-star-inserted")]//*[contains(text(),"${value}")]//parent::div//div[@role="combobox"]`;
protected Classification_value=(value:string)=>`//div[@class="ng-dropdown-panel-items scroll-host"]//div[@role="option"]//span[text()="${value}"]`;
protected SubclassificationSearch_btn=`//div[@class="field2"]//div[@class="subClassificationText"]//*[@class="mat-icon notranslate material-icons mat-icon-no-color"]`;
protected Activity_txtbox=`//div[@class="field3"]//input[@name="ActivityName"]`;
protected Activityadd_searchbtn=`//div[@class="field4"]//button[@mattooltip="Search"]`;
protected checkbox=`#mat-checkbox-1-input`;

protected checkBoxState = '//div/mat-checkbox';
protected checkBox = `//div/mat-checkbox//span` ;
protected checkBox2=`//div/mat-checkbox//label`;

protected calender_btn=(value:string)=>`//div[@class="double-input custom-check-input row scheduledCalenders"]//*[text()="${value}"]//ancestor::div[@class="col"]//div[@class="datepicker-block"]//button[@class="mat-focus-indicator mat-icon-button mat-button-base"]`;
protected breakdown_calender=(value:string)=>`//div[contains(@class,"double-input custom-check-input row scheduledCalenders")]//*[text()="${value}"]//parent::div//div[@class="datepicker-block"]//button[@class="mat-focus-indicator mat-icon-button mat-button-base"]`;
protected dateSearch_btn=`//div[@id="cdk-overlay-218"]//div[@class="actions ng-tns-c54-687 ng-star-inserted"]//button[@class="mat-focus-indicator mat-button mat-stroked-button mat-button-base"]//span[@class="mat-button-wrapper"]`;
protected warehouse_dropdown=(value:string)=>`#WarehouseTextId`;
//`//div[@class="col-md-4 p-0"]//*//div[contains(@class,"ng-star-inserted")]//*[text()="${value}"]//ancestor::div[@class="m-t-16 ng-star-inserted"]//div[@role="combobox"]`;
protected drop_value=(value:string)=>`//div[@class="ng-dropdown-panel-items scroll-host"]//div[@role="option"]//span[normalize-space(text())="${value}"]`;
protected ControllableEvent=`#ControllableEventTypeTextId`;
protected DcCapacity=`//div[@class="m-t-16 ng-star-inserted"]//input[@name="DCCapacity"]`;
protected RescheduleDate=(value:string)=>`//div[@class="row ng-star-inserted"]//label[text()="${value}"]//parent::div//div[@class="datepicker-block"]//button[@class="mat-focus-indicator mat-icon-button mat-button-base"]`;
protected RescheduledUserBtn=(value:string)=>`//div[@class="details"]//div[@class="input-wrapper m-t-8 pl-0 ng-star-inserted"]//label[text()="${value}"]//parent::div//button//*[@class="mat-icon notranslate material-icons mat-icon-no-color"]`;


protected subclassificationApply_btn=`//div[@class="search-pagination ng-star-inserted"]//button[@mattooltip="Apply"]`;
protected subclassification_row=(name: string) =>`//div[@class="ag-center-cols-container"]//div[text()="${name}"]`;
protected ActivityApply_btn=`//div[@class="search-pagination"]//button[@mattooltip="Apply"]`;
protected Assingnedto_searchbtn=`//div/label[contains(text(),"Assigned To")]/parent::div//button/mat-icon`;
//`//div//label[contains(text(),"Assigned To")]//parent::div//button[@id="SearchId2"]//*[text()="search"]`;
//`//button[@id="SearchId2"]//mat-icon`;
//div/label[contains(text(),"Assigned To")]/parent::div//button/mat-icon
protected searchBtn ='//div/label[contains(text(),"Approver")]/parent::div//button/mat-icon';
//`//div//input[@id="AssignedToId"]//parent::div//div//*[@class="mat-icon notranslate material-icons mat-icon-no-color"]`;
//`//div[@class="assignTo"]//input[@id="AssignedToId"]//parent::div//button[@id="SearchId"]//*[text()="search"]`;
protected Approver_searchbtn=`//button[@id="Search1Id"]//mat-icon`;
protected SelectUsername=(name: string) =>`//div[@class="ag-root ag-unselectable ag-layout-normal"]//div[text()="${name}"]`;
protected Remarks_txtarea=`#RemarkId`;
protected NonControllable_chkbox=`//div[@class="m-t-16 ng-star-inserted"]//*[contains(@class,"mat-checkbox mat-accent ")]`
//`//div[@class="m-t-16 ng-star-inserted"]//*[@id="mat-checkbox-9"]`;
protected Noncontrollable_dropdown=`//div[@class="ng-select-container"]//div[@class="ng-input"]//ancestor::div[@class="m-t-16 nonControllableEventType ng-star-inserted"]//span[@class="ng-arrow-wrapper"]`
//`//div[@class="ng-select-container"]//div[@class="ng-input"]//parent::div[@class="ng-value-container"]//div[text()="Event Type"]`;
protected Noncontrollable_value=(value:string)=>`//div[@class="ng-dropdown-panel-items scroll-host"]//div[contains(@class,"ng-option ng-star-inserted")]//span[text()="${value}"]`;
protected Breakdown_percentage=`#BreakdownPercentageId`;
protected Anomaly_Searchbtn=`//div[@class="anomaly"]//button[@id="CauseSearchId"]//*[text()="search"]`;
protected Anomaly_Nametxt=`//div[@class="col-md-6"]//input[@name="Cause"]`;
protected AnomalyAdd_Searchbtn=`//div[@class="col-md-6 causeModalBtns"]//button//*[text()="autorenew"]`;
protected Anomaly_row=(name: string) =>`//div[@class="ag-center-cols-container"]//div[text()="${name}"]`;
protected Crew_search=`//div[@class="crewText"]//button//*[text()="search"]`;
protected Technician_search=`//div[@class="flex-row jc-sb"]//button//*[text()="search"]`;
protected Technician_row=(name: string) =>`//div[@class="ag-center-cols-container"]//div[text()="${name}"]`;
protected Scope_txt=`#WOScopeId`;
protected waterconsumption=`#WaterConsumptionTextId`;
protected cleaningMW=`#CleaningAsMWTextId`;
protected Reason=`#ReasonTextId`;
protected workordersaving_btn=`//mat-icon[contains(text(),'save')]`;
protected Statelog_state=(value:string)=>`//div[@class="ag-root-wrapper ag-layout-normal ag-ltr"]//div[@class="ag-center-cols-viewport"]//div[@row-index="${value}"]//div[@col-id="WoState"]`;

protected filterProject_Value=(value:string)=>`//div[@class="dropdown-list"]//ul//li//div[text()="${value}"]`;
protected select_Project=`//li[@class="filter-textbox ng-star-inserted"]//input[@placeholder="Search"]`;
protected Heading_btn=(value:string)=>`//div[@class="mat-tab-list"]//div[text()="${value}"]`;
protected FileUpload_btn=`//div[@class="btn btn-default action-button ng-star-inserted"]//span[@class="fa fa-upload"]`;
//`//div[@class="col-md-12 ng-star-inserted"]//span[@class="fa fa-upload"]`;
protected InsideAdd_btn=`//button[contains(@class,"bttn action-btn")]`;
protected ResourceCode_txt=(name: string) =>`//div[@class="col-md-3"]//*[text()="${name}"]//parent::div//input`;
protected ResourceSearch_btn=`//div[@class="col-md-3 prFields"]//button[@mattooltip="Search"]`;
protected Select_row=(value:string)=>`//div[@class="ag-root ag-unselectable ag-layout-normal"]//div[@class="ag-body-viewport ag-layout-normal ag-row-no-animation"]//div[text()="${value}"]`;
protected filterProject_dropdown=`#ProjectId`;
protected filteritem=(name: string) =>`//div[@class="mat-drawer-inner-container"]//div[@class="col-md-12 m-b-10"]//*[contains(text(),"${name}")]//parent::div//div[@class="cmms-chart-multiselect"]`;
protected filtersubclassification_btn=`//div[@class="col-md-12 m-b-10"]//div[@class="subClassificationText"]//input[@id="SubClassificationTextId"]//following-sibling::*[@class="mat-icon notranslate material-icons mat-icon-no-color"]`;
protected crewSearch_btn=`//div[@class="col-md-12 m-b-10"]//div[@class="subClassificationText"]//input[@id="CrewTextId"]//parent::div//*[text()="search"]`;
protected crewName_txt=`//div[@class="col-md-6"]//input[@name="CrewName"]`;
protected crew_row=(name: string) =>`//div[@class="ag-center-cols-container"]//div[text()="${name}"]`
protected crewNameSearch_btn=`//div[@class="col-md-6 crewModalBtns p-0"]//button[@mattooltip="Search"]`;
protected Apply_btn=`#ApplyId`;
protected filterAssignApprover=`//div[@class="subClassificationText"]//div//input[@id="AssignToApproverTextId"]//parent::div//*[text()="search"]`;

protected FindWorkorder_label=(value:string)=>`//div[@class="cal-event ng-star-inserted" and contains(@aria-label,"${value}")]`;
//`//div[contains(@class,"cal-event-container cal-starts-within-day")]//*//div[contains(@aria-label,"${value}")]`;
//`//div[@class="cal-event-container cal-starts-within-day ng-star-inserted"]//*//div[contains(@aria-label,"${value}")]`;
protected Yeartext=`//div[@class="action-panel"]//div[@class="row m-0"]//div[@class="col-md-4 pl-0"]//*[@class="txt-reg main-head ng-star-inserted"]`;
protected Year_btn=(value:string)=>`//div[@class="btn-group"]//div[normalize-space(text())="${value}"]`;
protected find_month=(value:string)=>`//div[@class="ng-star-inserted"]//div[@class="row m-0 yearCalender"]//div[@class="col-md-3 ng-star-inserted"]//div[text()="${value}"]`;
protected find_day=`//div[@class="cal-month-view"]//div[@class="ng-star-inserted"]//div[contains(@aria-label,"November")]//span[text()="1"]`;
protected datelabel=`//div[@class="btn-group"]//div[@class="btn btn-outline-secondary"]`;
protected workorderMonth=(value:string)=>`//div[@class="ng-star-inserted"]//div[@class="row m-0 yearCalender"]//div[@class="col-md-3 ng-star-inserted"]//div[contains(text(),"${value}")]`;
protected workorderweek=(value:string)=>`//div[@class="cal-month-view"]//div[@class="cal-cell-top ng-star-inserted"]//span[text()="${value}"]`;
protected viewReport=`#ViewReportId`;
protected LinkedWorkorderAdd_btn=`//div[@class="liked-work-orders ng-star-inserted"]//div//span[@class="icon icon-Add"]`;
protected Calendar_view=`//span[@class="ng-star-inserted"]//button[@class="btn btn-default action-button fill-basic-button mat-tooltip-trigger"]//*[text()="calendar_today"]`;
protected CheckNoofWorkorder=(value:string)=>`//div[@class="cal-event-container cal-starts-within-day cal-ends-within-day ng-star-inserted"]//*//div[contains(@aria-label,"${value}")]`;

protected Assettxt_box=(name:string)=>`//div[@class="d-flex align-items-end"]//*[text()="${name}"]//parent::div//input`
protected AssetSearch_btn=`//div[@class="d-flex align-items-end"]//button[@mattooltip="Search"]`;
protected Assetapply_btn=`//div//button[@mattooltip="Apply"]/mat-icon`;
protected Alarm_calender=(value:string)=>`//div[@class="datepicker-block"]//*[text()="${value}"]//parent::div//button[@class="mat-focus-indicator mat-icon-button mat-button-base"]`
protected AlarmSearch_btn=`#SearchId4`;
protected AlarmVerification=(name:string)=>`//div[@class="ag-body-viewport ag-layout-normal ag-row-no-animation"]//div[@col-id="ControllerName" and text()="${name}"]`;
protected alarmName=`//div[@class="ag-center-cols-container"]//div[@row-index="0"]//div[@col-id="ControllerName"]`;
protected AlarmPlus_btn=(value:string)=>`//div[@class="ag-center-cols-viewport"]//div[@row-index="${value}"]//div[@class="enable-add-button"]//span[@class="icon icon-Add"]`;
//`//div[@class="show-Flex-Container show-Flex-Column grid-full-height"]//button[@id="SearchId"]//*[@class="mat-icon notranslate material-icons mat-icon-no-color"]`;
protected Select_state=(state:string)=>`//div[@class="ng-dropdown-panel-items scroll-host"]//div[@role="option"]//span[text()="${state}"]`
protected State_dropdown=`#StateTextId`;
protected Task_state=(value:string)=>`//div[@class="show-Flex-Container show-Flex-Column grid-full-height"]//div[text()="${value}"]//parent::div//div[@col-id="StatusString"]`;
//`//div[@class="ag-wrapper ag-picker-field-wrapper"]`;
protected Task_statevalue=(value:string)=>`//div[text()="${value}"]`;
//`//div[@class="ag-cell-edit-wrapper"]//div[@class="ag-wrapper ag-picker-field-wrapper"]//div[text()="Completed"]`
//`//div[@class="show-Flex-Container show-Flex-Column grid-full-height"]//div[text()="${value}"]`;
//div[@class="ag-cell-edit-wrapper"]//div[@class="ag-wrapper ag-picker-field-wrapper"]//div[text()="Completed"]
protected Task_stateSave=`#SaveId`;
protected Task_Edit=`#EditId`;
protected Cleanedmodules=(value:string)=>`//div[@class="ag-center-cols-container"]//div[contains(text(),"${value}")]//parent::div//div[@col-id="CleanedNoOfModules"]`;
protected cleanednoofmodule=(value:string)=>`//div[@class="ag-center-cols-container"]//div[contains(text(),"${value}")]//parent::div//div[@col-id="CleanedNoOfModules"]//div[@class="ag-cell-edit-wrapper"]//input`;

protected grassReason=`//div[@class="m-t-16 ng-star-inserted"]//label[text()="Reason"]//parent::div//*//div[@class="ng-select-container"]`;
protected NonPvArea=`//div[@class="input-wrapper m-t-16 ng-star-inserted"]//input[@class="default-input ng-untouched ng-pristine ng-valid"]`;
//protected AddAssetNew_btn=(value:string)=>'//button[@class="bttn action-btn ml-2 mat-tooltip-trigger ng-star-inserted"]//*[text()="${value}"]`;

protected taskSelection_btn=`//div[@class="taskButton"]//i[@class="fa fa-search"]`;
protected taskSelection_row=(value:string)=>`//div[@class="show-Flex-Container show-Flex-Column searchList"]//div[@class="ag-center-cols-container"]//div[text()="${value}"]`;
protected taskApply_btn=`//div[@class="search-pagination m-t-8"]//button[@mattooltip="Apply"]`;

protected rescheduledAssigned=`//div//input[@id="ReScheduleAssignedToNameId"]//parent::div[@class="assignTo"]//button//mat-icon`;
protected rescheduledApprover=`//div//input[@id="ReScheduleApproverId"]//parent::div[@class="assignTo"]//button//mat-icon`;


protected leftArrow=`#work-order-div-calendar-previous-view`;
protected RightArrow=`#work-order-div-calendar-next-view`;
}
