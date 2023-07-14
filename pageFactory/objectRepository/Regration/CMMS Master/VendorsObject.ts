export class VendorsObject {

    protected saving_btn=`//mat-icon[contains(text(),'save')]`;
    protected AccountDropdown=`#AccountId`;
    protected Vendorname=`#vendornameId`;
    protected Address=`#addressId`;
    protected city=`#cityId`;
    protected Zipcode=`#zipcodeId`;
    protected country=`#CountryId`;
    protected tax=`#taxId`;
    protected contactPerson=`#contactpersonId`;
    protected Contactnocode=`#contactnumber1Id`;
    protected Contactnumber=`#contactnumber2Id`;
    protected Emailid=`#emailId`;
    protected worktype=`#WorkTypeId`;
    protected Dropdownvalues=(value: string) =>`//div[@class="ng-dropdown-panel-items scroll-host"]//div[@role="option"]//span[normalize-space(text())="${value}"]`;
    protected uploadbtn=`#clouduploadId`;
    protected downloadbtn=`#clouddownloadId`;
    protected filterAccount=`#searchAccountId`;
    protected filtername=`#nameId`;
    protected filtersearch=`#autorenewId`;
    protected filterReset=`#refreshId`;
    protected editprofile1=`//div[@class="show-Flex-Row-Size childDetails"]//div[@class="ng-star-inserted"][1]//mat-card//button[@id="editId"]`;
    protected editprofile2=`//div[@class="show-Flex-Row-Size childDetails"]//div[@class="ng-star-inserted"][2]//mat-card//button[@id="editId"]`;
    //`//div[@class="show-Flex-Row-Size childDetails"]//div[@class="ng-star-inserted"][2]//mat-card//button//mat-icon[contains(text(),"edit")]`;
    //`//div[@class="show-Flex-Row-Size childDetails"]//div[@class="ng-star-inserted"][2]//mat-card//button[@id="editId"]`;

    protected Deleteprofile1=`//div[@class="show-Flex-Row-Size childDetails"]//div[@class="ng-star-inserted"][1]//mat-card//button[@id="deleteId"]`;
    protected Deleteprofile2=`//div[@class="show-Flex-Row-Size childDetails"]//div[@class="ng-star-inserted"][2]//mat-card//button[@id="deleteId"]`

    protected Detailssecondrow=(value:string)=>`//div[@class="show-Flex-Row-Size childDetails"]//div[@class="ng-star-inserted"][${value}]//span[@id="Vendor-details"]`;
    protected Detailsfirstrow=(value:string)=>`//div[@class="show-Flex-Row-Size childDetails"]//div[@class="ng-star-inserted"][${value}]//span[@id="Vendor-address"]`;

    protected checkseconditemisdeleted=`//div[@class="show-Flex-Row-Size childDetails"]//div[@class="ng-star-inserted"][2]//mat-card`;
    protected checkfirstitemisdeleted=`//div[@class="show-Flex-Row-Size childDetails"]//div[@class="ng-star-inserted"][2]//mat-card`;

    protected Checkvendor=(name:string)=>`//div[@class="ag-center-cols-viewport"]//div[@col-id="VendorNameSL" and text()="${name}"]`;
    protected Uploadaccount=`#AccountId`;
    protected PlusButton=`//button[@aria-label="Add Address"]`;
    protected resetbutton=`//button[@mattooltip="Reset"]`;

    protected Filterclose=`#searchId`;

}