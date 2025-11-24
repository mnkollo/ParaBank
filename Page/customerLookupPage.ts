import { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class CustomerLookupPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillUpCustomerLookupForm(firstName: string, lastName: string, address: string, city: string, state: string, zipCode: string, phoneNumber: string, ssn: string, username: string, password: string) {

    await this.page.locator('[id="firstName"]').fill(firstName);
    await this.page.locator('[id="lastName"]').fill(lastName);
    await this.page.locator('[id="address.street"]').fill(address);
    await this.page.locator('[id="address.city"]').fill(city);
    await this.page.locator('[id="address.state"]').fill(state);
    await this.page.locator('[id="address.zipCode"]').fill(zipCode);
    await this.page.locator('[id="ssn"]').fill(ssn);
    await this.page.locator('input[type="submit"]').click();
    if (ssn === '') {
      await expect(this.page.locator('.error')).toHaveText('Social Security Number is required.');

    }
    else if (address === '') {
      await expect(this.page.locator('.error')).toHaveText('Address is required.');
    }
    else if (firstName === '') {
      await expect(this.page.locator('.error')).toHaveText('First name is required.');

    } else {
      await expect(this.page.locator('[class="title"]')).toHaveText(`Error!`);
      await expect(this.page.locator('[class="error"]')).toHaveText('The customer information provided could not be found.');// Change this line to what the error page states on the customer lookup page when it cannot locate user
    }
  }

}