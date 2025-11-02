import { test, expect } from '@playwright/test';

test('Libro Disponible', async ({ page }) => {
  await page.goto('https://um.edu.ar/ugc/biblioteca/');
  await page.getByRole('link', { name: 'Ir al Portal de Biblioteca UM' }).click();
  await page.getByRole('link', { name: 'Consultá nuestro catálogo' }).click();
  await expect(page.locator('#translControl1')).toBeVisible();
  await expect(page.locator('#select_library')).toBeVisible();
  await page.locator('#translControl1').click();
  await page.locator('#translControl1').fill('UML Y PATRONES');
  await page.locator('#select_library').selectOption('branch:01');
  await page.getByRole('button', { name: 'Buscar' }).click();
  await expect(page.getByText('Disponible').first()).toBeVisible();
});