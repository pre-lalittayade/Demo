import { WebActions } from "@lib/WebActions";


export class MenuActions extends WebActions {
    // async NavigateToMenuItems(index: number, locator: string): Promise<void> {
    //     await this.page.locator(`//div[@id="menuWrapper"][${index}]`).click();
    //     await this.page.locator(locator).click();
    // }

    // async NavigateToMenuItems(index: number, locator: string): Promise<boolean> {
        async NavigateToMenuItems(index: String, locator: string): Promise<boolean> {
        // await this.page.locator(`//div[@id="menuWrapper"][${index}]`).click();
       await this.page.locator(`//span[@id="${index}"]/parent::div`).click();

        
        const element = await this.page.$(locator);
        // const text = element.innerText();
        if (element !== null) {
            await this.page.locator(locator).click();
            return true;
        } else
            return false;
    }

    async navigateMenuTree(parent: string, nodes: string): Promise<void> {
        let parentTree = '//li[@class="mat-tree-node"]'
        let menu_tree_node = (nodeName: string) => `//span[normalize-space(text()),"${nodeName}")]`;
        await this.clickElement(parentTree);

        let treeeArray: string[];
        if (nodes.includes(":")) {
            treeeArray = nodes.split(":");
            for (let i = 0; i < treeeArray.length; i++) {
                await this.clickElement(menu_tree_node(treeeArray[i]));
            }
        } else {
            await this.clickElement(menu_tree_node(nodes));
        }
    }

    //For smoke trends
    async smokenavigateMenuTree(parent: string, nodes: string): Promise<void> {
        let parentTree = '//li[@class="mat-tree-node"]';
        let menu_tree_node = (nodeName: string) => `//span[contains(text(),"${nodeName}")]`;
        await this.clickElement(parentTree);

        let treeeArray: string[];
        if (nodes.includes(":")) {
            treeeArray = nodes.split(":");
            for (let i = 0; i < treeeArray.length; i++) {
                await this.clickElement(menu_tree_node(treeeArray[i]));
            }
        } else {
            await this.clickElement(menu_tree_node(nodes));
        }
    }
}