# i18n-multilingual

Repositorio de ejemplo para pruebas de internacionalización (i18n) con Playwright.


*Estructura del proyecto*

- public/
  - index.html — página HTML de ejemplo utilizada en las pruebas.
- src/
  - i18n.js — módulo de internacionalización (placeholder).
  - locales/ — archivos JSON con traducciones:
    - en.json — inglés
    - es.json — español
    - ar.json — árabe
- tests/
  - localization.spec.js — tests de Playwright para verificar la localización
- screenshots/ — capturas de pantalla generadas por las pruebas
- playwright.config.js — configuración de Playwright
- package.json — dependencias y scripts de npm

*Requisitos*

- Node.js (>= 16 recomendado)
- npm (v6+) o yarn
- bash (el entorno del usuario es bash.exe en Windows; los comandos que se muestran son para esa shell)

*Instalación*

bash
cd multilingual-tests
npm install
npx playwright install


Si usas yarn:

bash
cd multilingual-tests
yarn install
npx playwright install


*Comandos útiles*

- Ejecutar todos los tests con Playwright:

bash
npx playwright test


- Ejecutar un test específico (por archivo):

bash
npx playwright test tests/localization.spec.js


- Ver reporte HTML (después de ejecutar tests):

bash
npx playwright show-report


- Abrir la página de ejemplo en public/index.html desde un servidor estático (opcional):

bash
# usando npx serve (instálalo si no lo tienes)
npx serve public -p 3000
# luego abre http://localhost:3000 en el navegador


*Notas*

- Los archivos src/locales/*.json contienen las traducciones; reemplázalos o complétalos según necesites.
- playwright.config.js puede ajustarse para distintos navegadores, tamaños de pantalla o rutas de reporte.