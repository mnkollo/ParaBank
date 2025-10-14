import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  async registerPage() {
    await this.page.locator('a', { hasText: 'Register' }).click();
  }

  async openNewAccountPage() {
    await this.page.locator('a', { hasText: 'Open New Account' }).click();
  }

  async login(username: string, password: string) {
    await this.page.locator('[name="username"]').fill(username);
    await this.page.locator('[name="password"]').fill(password);
    await this.page.locator('input[value="Log In"]').click();
  }

  async logout() {
    await this.page.locator('a', { hasText: 'Log Out' }).click();
  }
}