export class TaskObject {
        protected button = (value: string) => `//mat-icon[contains(text(),"${value}")]//parent::button`;
        protected acc = (value: string) => `//div[@class="col-md-12 m-b-8 mttrFormFileds ng-star-inserted"]//div[@class="ng-select-container ng-has-value"][contains(text(),"${value}")]`;
        protected namebox = `//body/app-root[1]/app-shell[1]/div[1]/div[2]/app-task[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/mat-drawer-container[1]/mat-drawer[2]/div[1]/div[1]/form[1]/div[2]/input[1]`;
        protected name = `//body/app-root[1]/app-shell[1]/div[1]/div[2]/app-task[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/mat-drawer-container[1]/mat-drawer[2]/div[1]/div[1]/form[1]/div[2]/input[1]`;
                          //body/app-root[1]/app-shell[1]/div[1]/div[2]/app-task[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/mat-drawer-container[1]/mat-drawer[1]/div[1]/div[1]/div[2]
        protected refrance_code = `//input[@id='ReferenceCodeId']`;
        protected Search_btn = `//mat-icon[contains(text(),'search')]`;
        protected subName = `//body/div[3]/div[2]/div[1]/mat-dialog-container[1]/app-sub-classification[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]`;
        protected subSearchButton = `//mat-icon[contains(text(),'autorenew')]`;
        protected panel_dropdown = (value: string) =>
                `//div[@class="mat-drawer-inner-container"]//form//div[contains(@class,"ng-star-inserted")]//*[text()="${value}"]//parent::div//div[@role="combobox"]`
        protected panel_filter_dropdown = (value: string) =>
                `//div[@class="mat-drawer-inner-container"]//*//div[contains(@class,"ng-star-inserted")]//*[contains(text(),"${value}")]//parent::div//div[@role="combobox"]`
        protected click_element = (value:string)=> `//div[text()= "${value}"]`;
        //body/div[2]/div[2]/div[1]/mat-dialog-container[1]/app-sub-classification[1]/div[1]/div[3]/div[1]/div[2]/div[1]/ag-grid-angular[1]/div[1]/div[2]/div[2]/div[3]/div[2]/div[1]
        protected submit_btn = `//div[@class="search-pagination ng-star-inserted"]//button`;
        protected sub_classification_add_btn =``;
        protected sub_classification_edit_btn =``;
        protected save_btn = `//mat-icon[contains(text(),'save')]`;
        protected save_popup_yes =`//button[contains(text(),'Yes')]`;
        protected save_successfull_ok = `//button[contains(text(),'Ok')]`;
        protected visible_btn = `//mat-icon[contains(text(),'visibility')]`;
        protected filter_btn = `//button[@id='FilterId']`;
        protected filterSearch_btn =`//body/app-root[1]/app-shell[1]/div[1]/div[2]/app-task[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/mat-drawer-container[1]/mat-drawer[1]/div[1]/div[1]/div[5]/button[1]`;
        protected filterPanel_dropdown = (value: string) => `//div[@class="mat-drawer-inner-container"]//form//div[contains(@class,"ng-star-inserted mat-drawer-opened")]//*[contains(text(),"${value}")]//parent::div//div[@role="combobox"]`;
        
        protected filterBtn_name = `//input[@id='NameId']`;
        protected filterBtn_refrance_code = `//input[@id='RefrenceCodeId']`;
        protected filter_Search_btn = `//body/app-root[1]/app-shell[1]/div[1]/div[2]/app-task[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/mat-drawer-container[1]/mat-drawer[1]/div[1]/div[1]/div[4]/div[1]/div[1]`;
        protected filter_refresh_btn = `//body/app-root[1]/app-shell[1]/div[1]/div[2]/app-task[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/mat-drawer-container[1]/mat-drawer[1]/div[1]/div[1]/div[5]/button[1]`;

        protected filter_Account = `//ng-select[@id='AcountId']`;
        protected filterdropdown_value = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//div//div/span[text()="Prescinto"]`;
        protected edit_button = `//div[@class="action-button-container"]//span[2]//button`;
        protected delete_button =`//div[@class="action-button-container"]//span[3]//button`;

        // `//div[@class="ng-dropdown-panel-items scroll-host"]//div//div[@class="ng-option ng-star-inserted"]//span[text()="${value}"]`;













        

        //     protected project_dropdown = (value: string) =>
        //         `//div[@class="col-md-12 d-flex justify-content-between mb-3 cg-8"]//div[contains(text(), "${value}")]//parent::div`;
        //     protected alarms_btn = (value: string) => `//button//span[contains(text(),"${value}")]`;
        //     protected time_span_btn = (value : string) => `//mat-button-toggle-group//span[(text()="${value}")]`
        //    // `//mat-button-toggle-group//span[contains(text(),"${value}")]`;
        //     protected search_btn = `#searchId`;
        //     protected actions_btn = (row: string) => `//div[@row-id="${row}"]/div[@col-id="actions" and @role="gridcell"]`;
        //     protected add_delete_btn = (value: string) => `//div[@class="mat-menu-content"]//i[contains(text(), "${value}")]//parent::button`;
        //     protected grid_Col_text = (value: string) =>
        //         `//div[@role="grid" and @aria-colcount="12"]//span[contains(text(), "${value}")]//ancestor::div[@class="ag-header-cell ag-focus-managed ag-header-cell-sortable"]`
        //     protected row_count = '//div[@role="grid" and @aria-colcount="12"]//div[@role="rowgroup" and @class="ag-center-cols-container"]//div[@role="row"]'
        //     protected grid_cell = (row: string, col: string) =>
        //         `//div[@role="grid" and @aria-colcount="12"]//div[@role="rowgroup" and @class="ag-center-cols-container"]
        //     //div[@role="row" and @row-id="${row}"]//div[@aria-colindex="${col}"]`;
        //     protected save_btn = '//button[@mattooltip="Save"]';
        //     protected publish_btn = '//button[@mattooltip="Publish"]';
        //     protected save_popup_yes_btn = '//button[contains(text(), "Yes")]'
        //     protected save_popup_ok_btn = '//button[contains(text(), "Ok")]'

        //     protected menu_tree_node = (nodeName: string) => `//span[contains(text(),"${nodeName}")]`;
        //     protected source_location = (value: string) => `//span[contains(text(), "${value}")]`;
        //     protected drop_textBox = '//div[@class="tags droptextbox cdk-drop-list"]';
        //     protected chart_menu_btn = '//button[@aria-label="View chart menu"]'
        //     protected chart_menu_item = (menuItem: string) => `//li[contains(text(), "${menuItem}")]`;
}