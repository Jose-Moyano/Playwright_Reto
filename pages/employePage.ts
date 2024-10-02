import { Locator, Page, expect } from '@playwright/test';

export default class EmployePage {

    readonly page: Page;
    readonly moduleEmp: Locator;
    readonly newEmpButton: Locator;
    readonly photoEmp: Locator;
    readonly firstNameEmp: Locator;
    readonly middleNameEmp: Locator;
    readonly lastNameEmp: Locator;
    readonly idEmp: Locator;
    readonly createLoginEmp: Locator;
    readonly userEmp: Locator;
    readonly statusEmp: Locator;
    readonly passEmp: Locator;
    readonly confirmedPassEmp: Locator;
    readonly createEmp: Locator;
    readonly searchButton: Locator;

    constructor(page) {
        this.page = page;
        this.moduleEmp = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]');
        //this.newEmpButton = page.locator('//button[contains(string(),"Add")]');
        this.newEmpButton = page.locator('//div[@class=\'orangehrm-header-container\'] //button');
        this.photoEmp = page.locator('input[type="file"]');
        this.firstNameEmp = page.locator('//input[@name="firstName"]');
        this.middleNameEmp = page.locator('//input[@name="middleName"]');
        this.lastNameEmp = page.locator('//input[@name="lastName"]');
        //this.idEmp = page.locator('//label[contains(text(),"Employee Id")]/../../..//input');
        this.idEmp = page.locator('(//div/input[@class="oxd-input oxd-input--active"])[2]');
        //this.createLoginEmp = page.locator('//p[contains(string(),"Create Login Details")]/../div/label');
        this.createLoginEmp = page.locator('//span[@class="oxd-switch-input oxd-switch-input--active --label-right"]');
        
        //this.userEmp = page.locator('//label[contains(text(),"Username")]/../..//div/input');
        this.userEmp = page.locator('(//div/input[@class="oxd-input oxd-input--active"])[3]');

        //this.statusEmp = page.locator('//label[contains(string(),"Disabled")]');
        this.statusEmp = page.locator('(//span[@class="oxd-radio-input oxd-radio-input--active --label-right oxd-radio-input"])[2]');


        this.passEmp = page.locator('//p[contains(string(),"For a")]/../div/div/input');
        //this.confirmedPassEmp = page.locator('//label[contains(text(),"Confirm Password")]/../../..//input');
        this.confirmedPassEmp = page.locator(' (//input[@type="password"])[2]');
       
        //this.createEmp = page.locator('//button[contains(string(),"Save")]');
        this.createEmp = page.locator('//button[@type=\'submit\']');

        //this.searchButton = page.locator('//button[contains(string(),"Search")]');
        this.searchButton = page.locator('//button[@type="submit"]');

        

        


    }

    async createEmpForm(photoEmp, firstNameEmp, middleNameEmp, lastNameEmp, idEmp, userEmp, passEmp, confirmedPassEmp) {
        await this.moduleEmp.click();
        await this.newEmpButton.click();
        await this.photoEmp.setInputFiles(photoEmp);
        await this.firstNameEmp.fill(firstNameEmp);
        await this.middleNameEmp.fill(middleNameEmp);
        await this.lastNameEmp.fill(lastNameEmp);
        await this.idEmp.fill(idEmp);
        await this.createLoginEmp.click();
        await this.userEmp.fill(userEmp);
        await this.statusEmp.click();
        await this.passEmp.fill(passEmp);
        await this.confirmedPassEmp.fill(confirmedPassEmp);
        await this.createEmp.click();
    }

    async validateEmpRegister(idEmp) {
        await this.moduleEmp.click();
        await this.idEmp.fill(idEmp);
        await this.searchButton.click();
    }
}