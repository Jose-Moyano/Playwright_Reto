import { test, expect } from '@playwright/test';
import EmployePage from '../../pages/employePage';
import LoginPage from '../../pages/loginPage';
import * as testData from './TestData.json';
// Permitiendo así acceder a los métodos y propiedades definidos en esa clase.
let employePage: EmployePage;
let loginPage: LoginPage;
// Método que se utiliza para definir una función que se ejecutará antes de cada prueba 
test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  employePage = new EmployePage(page);
  await loginPage.visit();
  await loginPage.submitLoginForm(testData.login.user, testData.login.password);
});

test('CP001 - Inicio de sesión exitoso', async ({page}) => {
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});

test('CP002 - Crear Empleado', async ({page}) => {
  await employePage.createEmpForm(testData.employeNew.photoEmp, testData.employeNew.firstNameEmp, testData.employeNew.middleNameEmp, testData.employeNew.lastNameEmp, testData.employeNew.idEmp, testData.employeNew.userEmp, testData.employeNew.passEmp, testData.employeNew.confirmedPassEmp);
  const alerta = await page.locator(
    '//p[contains(string(),"Success")]'
  );
  await expect(alerta).toBeVisible();  
});

test('CP003 - Validar Empleado', async ({page}) => {
  await employePage.validateEmpRegister(testData.employeNew.idEmp);
  const alerta = await page.locator(
    '//span[contains(string(),"(1) Record Found")]'
  );
  await expect(alerta).toBeVisible();
});








