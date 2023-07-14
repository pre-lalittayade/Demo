export class AvailabilityManagementObject {

    protected project_dropdown = (value: string) =>
        `//div[@class="row dropdown-container"]//div[contains(text(), "${value}")]//parent::div`;
    protected alarms_btn = (value: string) => `//button//span[contains(text(),"${value}")]`;

    protected search_btn = `#searchId`;
    protected actions_btn = (row: string) => `//div[@row-id="${row}"]/div[@col-id="actions" and @role="gridcell"]`;
    protected add_delete_btn = (value: string) => `//div[@class="mat-menu-content"]//i[contains(text(), "${value}")]//parent::button`;
    //protected add_delete_btn = (value: string) => `//div[@class="mat-menu-content"]//i[contains(text(), "${value}")]//parent::button`;
    protected grid_Col_text = (value: string) =>
        `//div[@role="grid" and @aria-colcount="12"]//span[contains(text(), "${value}")]//ancestor::div[@class="ag-header-cell ag-focus-managed ag-header-cell-sortable"]`
    protected row_count = '//div[@role="grid" and @aria-colcount="12"]//div[@role="rowgroup" and @class="ag-center-cols-container"]//div[@role="row"]'
    protected grid_cell = (row: string, col: string) =>
        `//div[@role="grid" and @aria-colcount="12"]//div[@role="rowgroup" and @class="ag-center-cols-container"]
    //div[@role="row" and @row-id="${row}"]//div[@aria-colindex="${col}"]`;
    protected save_btn = '//button[@mattooltip="Save"]';
    protected publish_btn = '//button[@mattooltip="Publish"]';
    protected save_popup_yes_btn = '//button[contains(text(), "Yes")]'
    protected save_popup_ok_btn = '//button[contains(text(), "Ok")]'
    protected LastRow = '//*[@id="ag-944-row-count"]'
    protected publish_popup_yes='//button[contains(text(), "Yes")]';
    protected publish_popup_ok='//button[contains(text(), "Ok")]';
   
    protected avmpwtg='//div[@id="highcharts-on0nogn-121"]/div[@class="highcharts-data-labels highcharts-series-0 highcharts-solidgauge-series highcharts-tracker highcharts-series-hover"]/div/span/div/span';
    protected last_saved=`//div[@class='save-publish-log-statement ng-star-inserted']//span[text()=" Last saved by "]`;
    //div[@class="ag-paging-panel ag-unselectable"]//span[@class="ag-paging-row-summary-panel"]//span[@id="ag-779-row-count"]


}

// '//div[@role="grid" and @aria-colcount="12"]//div[@role="rowgroup" and @class="ag-center-cols-container"]//div[@role="row" and @aria-rowindex]'
// '//div[@role="grid" and @aria-colcount="12"]//div[@role="rowgroup" and @class="ag-center-cols-container"]//div[@role="row" and @aria-rowindex and @class="ag-row ag-row-focus ag-row-odd ag-row-level-0 ag-row-position-absolute ag-row-last"]'
