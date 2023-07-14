export class Management_Object {
    // protected wind_button
    protected email_txt = `#username`;
    protected password_txt = `#myPassword`;
    protected login_btn = `#btnLoginId`;
    protected logout_btn = '//div[@mattooltip="Logout"]/*';
    protected logout_confirm_yes_btn = '//app-confirm-dialog//button[contains(text(), "Yes")]';
    protected column = `//div[@role="presentation"]//div[@role="rowgroup"]//div[@class="ag-header-cell ag-header-cell-sortable ag-focus-managed"]`;
    protected columnvalue = `//div[@row-index="0"]//div[@aria-colindex=2]`;
    // protected locator = `//div[@ref="centerContainer"]//div[@row-id="0"]/div[@aria-colindex=${i+3}]`;

}