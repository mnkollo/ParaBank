import { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class RegisterPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillUpRegistrationForm(firstName: string, lastName: string, address: string, city: string, state: string, zipCode: string, phoneNumber: string, ssn: string, username: string, password: string) {

    await this.page.locator('[id="customer.firstName"]').fill(firstName);
    await this.page.locator('[id="customer.lastName"]').fill(lastName);
    await this.page.locator('[id="customer.address.street"]').fill(address);
    await this.page.locator('[id="customer.address.city"]').fill(city);
    await this.page.locator('[id="customer.address.state"]').fill(state);
    await this.page.locator('[id="customer.address.zipCode"]').fill(zipCode);
    await this.page.locator('[id="customer.phoneNumber"]').fill(phoneNumber);
    await this.page.locator('[id="customer.ssn"]').fill(ssn);
    await this.page.locator('[id="customer.username"]').fill(username);
    await this.page.locator('[id="customer.password"]').fill(password);
    await this.page.locator('[id="repeatedPassword"]').fill(password);
    await this.page.locator('input[value="Register"]').click();

    if (ssn === '') {
      await expect(this.page.locator('.error')).toHaveText('Social Security Number is required.');
    }
    else if (address === '') {
      await expect(this.page.locator('.error')).toHaveText('Address is required.');

    } else {
      await expect(this.page.locator('h1[class="title"]')).toHaveText(`Welcome ${username}`);
      await expect(this.page.locator('[id="rightPanel"] p')).toHaveText('Your account was created successfully. You are now logged in.');
    }
  }

}