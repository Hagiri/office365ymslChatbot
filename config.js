const msalConfig = {
  auth: {
    clientId: '4efab3ea-2033-4930-a378-9837418e8e2b',
    redirectUri: 'http://localhost:8080'
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