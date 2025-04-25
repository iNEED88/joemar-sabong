// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  baseUrl: 'https://devxxx.azurewebsites.net/api',
  refUrl: 'https://devxxx.azurewebsites.net/play/signup',
  webSocketUrl: 'https://devxxx.azurewebsites.net/talpakanhub',
  webSocketConfig: {
    withCredentials: true,
    secure: true,
  },
};
