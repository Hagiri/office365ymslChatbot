const msalConfig = {
  auth: {
	  //アプリの登録でのアプリケーションIDとリダイレクトURIの設定（Test-graphApp）
    clientId: '76c4668f-7f7d-49bf-a96c-aa30bf39cee4',
    redirectUri: 'http://localhost/app/'
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