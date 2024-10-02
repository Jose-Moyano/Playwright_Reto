import { Locator, Page, expect } from '@playwright/test';
import * as testData from './../tests/fixtures/TestData.json';

export default class LoginPage {

    readonly page: Page;
    readonly user: Locator;
    readonly pass: Locator;
    readonly loginButton: Locator;


    constructor(page) {
        this.page = page;
        this.user = page.locator('//input[@name="username"]');
        this.pass = page.locator('//input[@name="password"]')
        this.loginButton = page.locator('//button[contains(string(),"Login")]')
    }

    async submitLoginForm(user, pass) {
        await this.user.fill(user);
        await this.pass.fill(pass);
        await this.loginButton.click();
    }

    // Método que navega a la página de inicio. 
    async visit() {
        // Navegar a la página de inicio.
        await this.page.goto(testData.pageUrl.url, { waitUntil: 'load' });
        // Espere a que se cargue la página.
        await this.page.waitForLoadState();
    }
}