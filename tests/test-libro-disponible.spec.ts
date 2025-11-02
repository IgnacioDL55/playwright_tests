import { test, expect } from '@playwright/test';

test.use({ 
  ignoreHTTPSErrors: true
});

test('Libro disponible', async ({ page }) => {
  await page.goto('https://um.edu.ar/ugc/biblioteca/');
  await page.getByRole('link', { name: 'Ir al Portal de Biblioteca UM' }).click();
  await page.getByRole('link', { name: 'Consultá nuestro catálogo' }).click();
  await expect(page.locator('#translControl1')).toBeVisible();
  await page.locator('#translControl1').click();
  await page.locator('#translControl1').fill('ingenieria de software');
  await expect(page.locator('#select_library')).toBeVisible();
  await page.locator('#select_library').selectOption('branch:01');
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.locator('#title_summary_60481').getByRole('link', { name: 'Ingeniería del software : un' }).click();
  await expect(page.getByRole('link', { name: 'Pressman, Roger S' })).toBeVisible();
  await expect(page.getByText('Disponible')).toBeVisible();
});