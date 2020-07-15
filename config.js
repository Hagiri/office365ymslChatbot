const msalConfig = {
  auth: {
    clientId: '2aa23749-177c-4650-be79-a7f92385eac1',
    redirectUri: 'https://hagiri.github.io/office365ymslchatbot/'
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
    forceRefresh: false
  }
};

const loginRequest = {
  scopes: [
    'openid',
    'profile',
    'user.read',
    'calendars.read'
  ]
}