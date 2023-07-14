export class HomePageObjects {
    protected home_btn = '';
    protected pageHeader = '//div[@class="project-name"]/*'
    // protected sub_menu = (subMenuName: string) => `//li[@class="ng-star-inserted"]/a[normalize-space(text()),"${subMenuName}")]`
    protected sub_menu = (subMenuName: string) =>`//li[@class="ng-star-inserted"]/a[normalize-space(text())= "${subMenuName}"]`;
}