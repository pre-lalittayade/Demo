import { HomePageObjects } from "@objects/HomePageObjects";
import type { Page } from '@playwright/test';
import { WebActions } from "@lib/WebActions";
import { MenuActions } from '@lib_web/MenuActions'

let webActions: WebActions;
let menuactionsObj: MenuActions;

export class HomePage extends HomePageObjects {
    readonly page: Page;

    constructor(page: Page) {
        super();
        this.page = page;
        webActions = new WebActions(this.page);
        menuactionsObj = new MenuActions(this.page)
    }

    //    async NaviagetToMenu(mainMenuIndex: number, subMenuName: string): Promise<void>{
    //     await menuactionsObj.NavigateToMenuItems(mainMenuIndex, this.sub_menu(subMenuName))
    //    }

    // async NaviagetToMenu(mainMenuIndex: number, subMenuName: string): Promise<boolean> {
    //     return await menuactionsObj.NavigateToMenuItems(mainMenuIndex, this.sub_menu(subMenuName))
    // }
    async NaviagetToMenu(mainMenuIndex: string, subMenuName: string): Promise<boolean> {
        return await menuactionsObj.NavigateToMenuItems(mainMenuIndex, this.sub_menu(subMenuName))
    }
}