export class TrendObject {

    protected project_dropdown = (value: string) =>
        `//div[@class="col-md-12 d-flex justify-content-between mb-3 cg-8"]//div[contains(text(), "${value}")]//parent::div`;
    protected alarms_btn = (value: string) => `//button//span[contains(text(),"${value}")]`;
    protected time_span_btn = (value : string) => `//mat-button-toggle-group//span[(text()="${value}")]`
    protected search_btn = `#searchId`;
    protected actions_btn = (row: string) => `//div[@row-id="${row}"]/div[@col-id="actions" and @role="gridcell"]`;
    protected add_delete_btn = (value: string) => `//div[@class="mat-menu-content"]//i[contains(text(), "${value}")]//parent::button`;
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

    protected menu_tree_node = (nodeName: string) => `//span[contains(text(),"${nodeName}")]`;
    protected source_location = (value: string) => `//span[contains(text(), "${value}")]`;
    protected drop_textBox = '//div[@class="tags droptextbox cdk-drop-list"]';
    protected chart_menu_btn = '//button[@aria-label="View chart menu"]'
    protected chart_menu_item = (menuItem: string) => `//li[contains(text(), "${menuItem}")]`;
    protected treeNode = (value: string) => `//li/div[@class="mat-tree-node"]//span[contains(text(),"${value}" )]//parent::div/button`;

    protected grid_view_btn = `//button[@id='iconId']`;
    protected setting_btn =`//span[contains(text(),'IN.STRI.PORB.1A.AC Frequency')]`;
    protected graph =`//mat-tab-body/div[1]/div[2]/div[1]/app-grid-tab-node-control[1]/div[1]/div[2]/div[1]/div[2]/div[1]/span[1]/button[1]`;
    protected graph_1 =`//mat-tab-body/div[1]/div[2]/div[1]/app-grid-tab-node-control[1]/div[1]/div[2]/div[1]/div[2]/div[1]/span[2]/button[1]`;
    protected graph_2 =`//mat-tab-body/div[1]/div[2]/div[1]/app-grid-tab-node-control[1]/div[1]/div[2]/div[1]/div[2]/div[1]/span[3]/button[1]`;
    protected graph_3 =`//mat-tab-body/div[1]/div[2]/div[1]/app-grid-tab-node-control[1]/div[1]/div[2]/div[1]/div[2]/div[1]/span[4]/button[1]`;
    protected graph_4 =`//mat-tab-body/div[1]/div[2]/div[1]/app-grid-tab-node-control[1]/div[1]/div[2]/div[1]/div[2]/div[1]/span[5]/button[1]`;
    protected graph_5 =`//mat-tab-body/div[1]/div[2]/div[1]/app-grid-tab-node-control[1]/div[1]/div[2]/div[1]/div[2]/div[1]/span[6]/button[1]`;



}
/*/
Another X path for graphs

 protected graph_1=`//div[@class="chart-type-row align-chart-type-moz"]//span[1]`;
 protected graph_1=`//div[@class="chart-type-row align-chart-type-moz"]//span[2]`;
 protected graph_1=`//div[@class="chart-type-row align-chart-type-moz"]//span[3]`;
 protected graph_1=`//div[@class="chart-type-row align-chart-type-moz"]//span[4]`;
 protected graph_1=`//div[@class="chart-type-row align-chart-type-moz"]//span[5]`;
 protected graph_1=`//div[@class="chart-type-row align-chart-type-moz"]//span[6]`;

/*/