export class RegTaskObject {
        protected button = (value: string) => `//mat-icon[contains(text(),"${value}")]//parent::button`;
        protected taskdetails = (value: string) => `//h2[contains(text(),"Tasks Details")]//parent::div//input[@id="${value}"]`;
        protected search = (value: string) => `//h2[contains(text(),"Search")]//parent::div//input[@id="${value}"]`;
        protected edit = (value: string) => `//h2[contains(text(),"Tasks Details")]//parent::div//input[@id="${value}"]`;
        protected searchclose = `#close-id`;
        protected save_popup_yes = `//button[contains(text(),'Yes')]`;
        protected save_successfull_ok = `//button[contains(text(),'Ok')]`;
        protected Dropdownvalues = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//div[@role="option"]//span[normalize-space(text())="${value}"]`;
        protected ProjectDropdown = `//div[@class="mat-drawer-inner-container"]//form//ng-select[@id="ProjectId"]`;
        protected ElementSubsearchbtn = `//div[@class="d-flex"]//i[@class="fa fa-search"]`;
        protected subclassification_txt_box = `//div[@class="name-input"]//input[@name="SubClassificationName"]`;
        protected classification_row = (value: string) => `//div//app-sub-classification//div[text()="${value}"]`;
        protected subclassapply_btn = `//div//app-sub-classification//button[@mattooltip="Apply"]`;
        protected submit_btn = `//mat-icon[contains(text(),"done")]//parent::button`;
        protected SearchRefresh_btn = `//div[@class="subClassificationIcons"]//button[@mattooltip="Search"]`;
        protected SearchSubClassification = `#search-id`;
        protected filter_Search_btn = `#auto-renew-id`;
        protected clickonfirstelement = (value: string) => `//div[@row-index="0"]//div[@col-id="${value}"]`;
        protected short_name_menu_btn = (value: string) => `//div[@col-id="${value}"]//*//span[@class="ag-icon ag-icon-menu"]`;
        protected short_name_menu_filter_btn = `//div[@class="ag-theme-alpine ag-popup"]//*//span[@class="ag-icon ag-icon-filter"]`;
        protected Shortnamebox_hover = (value: string) => `//span[contains(text(),"${value}")]//parent::div[@class="ag-header-cell-label"]`;
        protected enternameforfilter = `//div[@class="ag-filter-body"]//input`;
        protected filter_status = `//div[@class="cmms-chart-multiselect"]//ng-select[@id="StatusId"]//div[@class="ng-placeholder"]`;
        protected filter_respons = `//div[@class="cmms-chart-multiselect"]//ng-select[@id="ResponsibilityId"]//div[@class="ng-placeholder"]`;
        protected filter_project = `//span[@class="selected-item"]//span`;

        protected sortingfromcolumn = (name: string) => `//div[@col-id="${name}"]//span[@class="ag-icon ag-icon-menu"]`;
        protected buttonsforsorting = (label: string) => `//span[@aria-label="${label}"]`;//general,filter,columns
        protected pincolumn = (name: string) => `//span[@class="ag-menu-option-part ag-menu-option-text" and text()="${name}"]`;
        protected pinvalues = (name: string) => `//div[@class="ag-menu-list ag-focus-managed"]//div[@class="ag-menu-option"]//span[text()="${name}"]`
        protected selectallcheckbx = `//div[@class="ag-column-select-header"]//div//input[@type="checkbox"]`;
        protected columnchkbx = (name: string) => `//div[@class="ag-column-select-column ag-column-select-indent-0"]//span[text()="${name}"]//parent::div//input[@type="checkbox"]`;

        protected columntosort = (label: string) => `//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="${label}"]`;
        protected AscendingSort = (label: string) => `//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="${label}"]//div[@class="ag-header-cell-label"]//span[@class="ag-icon ag-icon-asc"]`;
        protected DescendingSort = (label: string) => `//div[@class="ag-header-row ag-header-row-column"]//div[@col-id="${label}"]//div[@class="ag-header-cell-label"]//span[@class="ag-icon ag-icon-desc"]`;


















        protected acc = (value: string) => `//div[@class="col-md-12 m-b-8 mttrFormFileds ng-star-inserted"]//div[@class="ng-select-container ng-has-value"][contains(text(),"${value}")]`;
        protected namebox = `//body/app-root[1]/app-shell[1]/div[1]/div[2]/app-task[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/mat-drawer-container[1]/mat-drawer[2]/div[1]/div[1]/form[1]/div[2]/input[1]`;
        // protected taskdetails = (value: string) => `//h2[contains(text(),"Tasks Details")]//parent::div//input[@id="${value}"]`;
        protected refrance_code = `//input[@id='ReferenceCodeId']`;
        protected Search_btn = `//mat-icon[contains(text(),'search')]`;
        protected subName = `//body/div[3]/div[2]/div[1]/mat-dialog-container[1]/app-sub-classification[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]`;
        protected subSearchButton = `//mat-icon[contains(text(),'autorenew')]`;
        protected panel_dropdown = (value: string) =>
                `//div[@class="mat-drawer-inner-container"]//form//div[contains(@class,"ng-star-inserted")]//*[text()="${value}"]//parent::div//div[@role="combobox"]`
        protected panel_filter_dropdown = (value: string) =>
                `//div[@class="mat-drawer-inner-container"]//*//div[contains(@class,"ng-star-inserted")]//*[contains(text(),"${value}")]//parent::div//div[@role="combobox"]`
        protected click_element = (value: string) => `//div[text()= "${value}"]`;
        //body/div[2]/div[2]/div[1]/mat-dialog-container[1]/app-sub-classification[1]/div[1]/div[3]/div[1]/div[2]/div[1]/ag-grid-angular[1]/div[1]/div[2]/div[2]/div[3]/div[2]/div[1]
        protected sub_classification_add_btn = ``;
        protected sub_classification_edit_btn = ``;
        protected save_btn = `//mat-icon[contains(text(),'save')]`;

        protected visible_btn = `//mat-icon[contains(text(),'visibility')]`;
        protected filter_btn = `//button[@id='FilterId']`;
        protected filterSearch_btn = `//body/app-root[1]/app-shell[1]/div[1]/div[2]/app-task[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/mat-drawer-container[1]/mat-drawer[1]/div[1]/div[1]/div[5]/button[1]`;
        protected filterPanel_dropdown = (value: string) => `//div[@class="mat-drawer-inner-container"]//form//div[contains(@class,"ng-star-inserted mat-drawer-opened")]//*[contains(text(),"${value}")]//parent::div//div[@role="combobox"]`;

        protected filterBtn_name = `//input[@id='NameId']`;
        protected filterBtn_refrance_code = `//input[@id='RefrenceCodeId']`;
        protected filter_refresh_btn = `#reset`;
        protected filter_cancel = `#close-id`;
        protected filter_Account = `//ng-select[@id='AcountId']`;
        protected filterdropdown_value = (value: string) => `//div[@class="ng-dropdown-panel-items scroll-host"]//div//div/span[text()="Prescinto"]`;
        protected edit_button = `//div[@class="action-button-container"]//span[2]//button`;
        protected delete_button = `//div[@class="action-button-container"]//span[3]//button`;

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