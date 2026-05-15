# world

Portfolio website for Mwila Kaunda, built with webpack and deployed to Firebase Hosting.

## Stack

- Node.js 20
- webpack
- ESLint + Stylelint
- Firebase Hosting

## Local development

```bash
npm install
npm start
```

Development server opens in your browser.

## Quality checks

```bash
npm run lint:js
npm run lint:css
npm test
npm run build
```

## Branch workflow

This repository is set up for Git Flow-style branching:

- `main`: production
- `develop`: integration
- `feature/*`, `release/*`, `hotfix/*`: short-lived branches

## CI/CD

GitHub Actions workflows:

- `Linters`: runs JS/CSS lint on `develop` and `main`
- `Build and Test`: runs tests and webpack build on `develop` and `main`
- `Deploy Develop`: deploys on push to `develop`
- `Deploy Main`: deploys on push to `main`

## Deployment prerequisites

Set this GitHub repository secret before deploy workflows can succeed:

- `FIREBASE_SERVICE_ACCOUNT`: full JSON credentials for a Firebase service account with Hosting deploy permissions in project `pickaapp-79307`
