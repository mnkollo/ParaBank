import { test as setup } from '@playwright/test';
import { expect } from '@playwright/test';

import { HomePage } from '../Page/homePage';

  setup('write login session data', async ({ page }) => {
    const onHomePage = new HomePage(page);
    await page.goto(process.env.BASE_URL!);
    await expect(page).toHaveTitle(/ParaBank/);
    await onHomePage.login(process.env.USERNAME!, process.env.PASSWORD!);
    await page.context().storageState({ path: '.auth/login.json' });
  });