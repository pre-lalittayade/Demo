export class CmmsMasterPageObject {
    protected filter=`//button[@mattooltip="Filter"]`;
    protected upload=`//button[@mattooltip="Upload"]`;
    protected download=`//button[@mattooltip="Download"]`;
    protected adding_btn=`//mat-icon[contains(text(),'add')]`;
    protected view_btn=`//mat-icon[contains(text(),"visibility")]`;
    protected view_btn1=`//mat-icon[contains(text(),"visibility")]//parent::button`;
    protected editing_btn=`//mat-icon[contains(text(),'edit')]`;
    protected deleting_btn=`//mat-icon[contains(text(),'delete')]`;
    protected saving_btn=`//mat-icon[contains(text(),'save')]`;
    


    protected JSA_AddBtn=`//div[@class="search-pagination ng-star-inserted"]//span[@class="icon icon-Add"]`;
protected JSA_Upload=`//button[@mattooltip="JSA Upload"]`;
protected JSA_Download=`//button[@mattooltip="JSA Download"]`;
protected JSA_SearchBtn=(value: string) =>`//div[@class="parameter-name"]//*[text()="${value}"]//parent::div//*//i[@class="fa fa-search"]`;
protected JSA_typedropdown=`//div[@class="input-container"]//div//span[text()="Type"]//parent::div//div[@class="ng-select-container"]`;
protected JSA_Nametxt=`//div[@class="input-container"]//div//span[text()="Name"]//parent::div//div//input[@class="default-input ng-untouched ng-pristine ng-valid"]`;
protected ActivityJsaAdding_Search=`//div[@class="input-container"]//div//button[@class="bttn action-btn mat-tooltip-trigger"]//*[text()="autorenew"]`
protected JSAAdding_searchbtn=`//div//button[@mattooltip="Search"]//*[text()=" search "]`;
protected JSA_row=(value: string) =>`//div[@class="form-container"]//div[@class="list-control show-Flex-Column-Size"]//div[text()="${value}"]`;
protected JSA_typevalue=(value: string) =>`//div[@class="ng-dropdown-panel-items scroll-host"]//div[contains(@class,"ng-star-inserted")]//span[text()="${value}"]`
protected ActivityApply_btn=`//div[@class="search-pagination"]//button[@mattooltip="Apply"]`;
protected ToolsAdding_searchbtn=`//div//button[@mattooltip="Search"]//*[text()="autorenew"]`;

//FIND WORKORDER BY YEAR,MONTH,WEEK FORMAT
protected Yeartext=`//div[@class="action-panel"]//div[@class="row m-0"]//div[@class="col-md-4 pl-0"]//*[@class="txt-reg main-head ng-star-inserted"]`;
protected Year_btn=(value:string)=>`//div[@class="btn-group"]//div[normalize-space(text())="${value}"]`;
protected find_month=(value:string)=>`//div[@class="ng-star-inserted"]//div[@class="row m-0 yearCalender"]//div[@class="col-md-3 ng-star-inserted"]//div[text()="${value}"]`;
protected find_day=`//div[@class="cal-month-view"]//div[@class="ng-star-inserted"]//div[contains(@aria-label,"November")]//span[text()="1"]`;
protected datelabel=`//div[@class="btn-group"]//div[@class="btn btn-outline-secondary"]`;
protected workorderMonth=(value:string)=>`//div[@class="ng-star-inserted"]//div[@class="row m-0 yearCalender"]//div[@class="col-md-3 ng-star-inserted"]//div[contains(text(),"${value}")]`;
protected workorderweek=(value:string)=>`//div[@class="cal-month-view"]//div[@class="cal-cell-top ng-star-inserted"]//span[text()="${value}"]`;
protected LeftArrow_btn=`//div[@class="btn-group"]//div[1][@class="btn btn-primary ng-star-inserted"]`;
protected RightArrow_btn=`//div[@class="btn-group"]//div[3][@class="btn btn-primary ng-star-inserted"]`;
protected NoOfWorkorder=(month:string)=>`//div[@class="col-md-3 ng-star-inserted"]//div[text()="${month}"]//parent::div//span[@class="getTotal"]`

//Objects for  Scheduler
protected MultipleAdd_btn=`//span[@class="icon icon-Add"]`;
protected Delete_btn=(value:string)=>`//div[@class="ag-pinned-right-cols-container"]//div[@row-index="${value}"]//div//span//*[text()="delete"]`;
protected Asset_viewbtn=(value:string)=>`//div[@row-index="${value}"]//mat-icon[contains(text(),"remove_red_eye")]`;


//objects to select user for ASSIGNEE AND APPROVER through filter///

protected Username=(name:string)=>`//div[@col-id="UserName" and text()="${name}"]`;
protected Usernamefilter=`//div[@col-id="UserName"]//span[@class="ag-icon ag-icon-menu"]`;
protected Userfilter_btn=`//div[@class="ag-tabs ag-menu ag-focus-managed ag-ltr ag-popup-child"]//span[@class="ag-icon ag-icon-filter"]`;
protected AssignedUsername_txt=`//div[@class="ag-filter-body"]//input`;
protected CrewApply_btn=`//div[@class="grid-layout show-Flex-Container show-Flex-Row grid-full-height"]//div[@class="search-pagination"]//button[@mattooltip="Apply"]`

protected sortingfromcolumn=(name:string)=>`//div[@col-id="${name}"]//span[@class="ag-icon ag-icon-menu"]`;
protected buttonsforsorting=(label:string)=>`//span[@aria-label="${label}"]`;//general,filter,columns
protected pincolumn=(name:string)=>`//span[@class="ag-menu-option-part ag-menu-option-text" and text()="${name}"]`; 
protected pinvalues=(name:string)=>`//div[@class="ag-menu-list ag-focus-managed"]//div[@class="ag-menu-option"]//span[text()="${name}"]`
protected selectallcheckbx=`//div[@class="ag-column-select-header"]//div//input[@type="checkbox"]`;
protected columnchkbx=(name:string)=>`//div[@class="ag-column-select-column ag-column-select-indent-0" and @title="${name}"]//input[@type="checkbox"]`;

//protected sortingfromPeriodicitycolumn=`//div[@col-id="Periodicity"]//span[@class="ag-icon ag-icon-menu"]`;
protected filterpriority=(label:string)=>`//div[@class="ag-virtual-list-container ag-filter-virtual-list-container"]//div[@class="ag-virtual-list-item ag-filter-virtual-list-item"]//div[text()="${label}"]`;

protected columntosort=(label:string)=>`//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="${label}"]`;
protected AscendingSort=(label:string)=>`//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="${label}"]//div[@class="ag-header-cell-label"]//span[@class="ag-icon ag-icon-asc"]`;
protected DescendingSort=(label:string)=>`//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="${label}"]//div[@class="ag-header-cell-label"]//span[@class="ag-icon ag-icon-desc"]`;


protected AlarmAddButton=`//div[@class="ag-center-cols-viewport"]//div[@row-index="0"]//div[@class="ag-cell ag-cell-not-inline-editing ag-cell-normal-height ag-cell-value ag-cell-focus"]`;
}