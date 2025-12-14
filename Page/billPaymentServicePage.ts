import { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class BillPaymentServicePage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillUpBillPaymentService(payeeName: string, address: string, city: string, state: string, zipCode: string, phone: string, account: string, verifyaccount: string, amount: string) {

    await this.page.locator('[name="payee.name"]').fill(payeeName);
    await this.page.locator('[name="payee.address.street"]').fill(address);
    await this.page.locator('[name="payee.address.city"]').fill(city);
    await this.page.locator('[name="payee.address.state"]').fill(state);
    await this.page.locator('[name="payee.address.zipCode"]').fill(zipCode);
    await this.page.locator('[name="payee.phoneNumber"]').fill(phone);
    await this.page.locator('[name="payee.accountNumber"]').fill(account);
    await this.page.locator('[name="verifyAccount"]').fill(verifyaccount);
    await this.page.locator('[name="amount"]').fill(amount);
    await this.page.locator('[value="Send Payment"]').click();
    await expect(this.page).toHaveURL('https://parabank.parasoft.com/parabank/billpay.htm');
  }
}
  //   //if (ssn === '') {
  //     await expect(this.page.locator('[id="ssn.errors"]')).toHaveText('Social Security Number is required.');

  //   }
  //   else if (state === '') {
  //     await expect(this.page.locator('.error')).toHaveText('State is required.');

  //   }
  //   else if (address === '') {
  //     await expect(this.page.locator('.error')).toHaveText('Address is required.');
  //   }
  //   else if (firstName === '') {
  //     await expect(this.page.locator('.error')).toHaveText('First name is required.');

  //   } else {
  //     await expect(this.page.locator('[class="title"]')).toHaveText(`Error!`);
  //     await expect(this.page.locator('[class="error"]')).toHaveText('The customer information provided could not be found.');// Change this line to what the error page states on the customer lookup page when it cannot locate user
  //   }
  // }//