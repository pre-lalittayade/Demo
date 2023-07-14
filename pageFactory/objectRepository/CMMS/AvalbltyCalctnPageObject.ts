export class AvalbltyCalctnPageObject {
    protected filter=`#FilterId`;
    protected Calculator=`#CalculationId`;
    protected ProjectDropdown=`#ProjectId`;
    protected Dropdownvalues=(value: string) =>`//div[@class="ng-dropdown-panel-items scroll-host"]//div[@role="option"]//span[normalize-space(text())="${value}"]`;

    protected Calenderfrom=`//div[@class="form-input-box"]//div[1]//mat-datepicker-toggle//button`;
    protected CalenderTo=`//div[@class="form-input-box"]//div[2]//mat-datepicker-toggle//button`;
    protected searchBtn=`#SearchId`;
    protected ResetId=`#ResetId`;
    
    protected Checkbox=(value:string)=>`//div[@class="ag-center-cols-container"]//div[@col-id="FromDate" and text()="${value}"]//parent::div//div[@col-id="Selected"]//div[@class="ag-selection-checkbox"]`;
    // protected Checkbox=`//div[@row-index="0"]//div[@tabindex="-1" and @aria-colindex="1"]`;

    protected view_btn=`//div[@class="inline"]//span[1]//button[@id="ViewId"]`;

    protected sortingfromcolumn=(name:string)=>`//div[@col-id="${name}"]//span[@class="ag-icon ag-icon-menu"]`;
protected buttonsforsorting=(label:string)=>`//span[@aria-label="${label}"]`;//general,filter,columns
protected pincolumn=(name:string)=>`//span[@class="ag-menu-option-part ag-menu-option-text" and text()="${name}"]`; 
protected pinvalues=(name:string)=>`//div[@class="ag-menu-list ag-focus-managed"]//div[@class="ag-menu-option"]//span[text()="${name}"]`
protected selectallcheckbx=`//div[@class="ag-column-select-header"]//div//input[@type="checkbox"]`;
protected columnchkbx=(label:string)=>`//div[@class="ag-column-select-column ag-column-select-indent-0"]//span[text()="${label}"]//parent::div//input[@type="checkbox"]`;

protected RowValues=(name:string)=>`//div[@class="ag-center-cols-container"]//div[@row-index="0"]//div[@col-id="${name}"]`;



}