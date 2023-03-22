const routesConstants = {
  login: () => 'login',
  loggedin: () => 'loggedin',
  registration: () => 'registration',
  registered: () => 'registered',
  matching: () => `${routesConstants.registered()}/matching`,
  chat: () => `${routesConstants.registered()}/chat`,
  chatById: (userId: string) => `${routesConstants.registered()}/chat${userId}`,
  settings: () => `${routesConstants.registered()}/settings`,
};

export default routesConstants;
