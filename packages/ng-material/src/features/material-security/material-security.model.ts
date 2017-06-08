export interface MaterialSecurityModel {
  forgotPassword?: MaterialSecurityModelForgotPassword;
  login?: MaterialSecurityModelLogin;
  loginError?: boolean;
  user?: MaterialSecurityModelUser;
}

export interface MaterialSecurityModelForgotPassword {
  email?: string;
}

export interface MaterialSecurityModelLogin {
  username?: string;
  password?: string;
}

export interface MaterialSecurityModelUser {
  username?: string;
}
