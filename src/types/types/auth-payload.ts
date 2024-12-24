//  =================================================== USER_LOGIN_PAYLOAD ===================================================

export type LOGIN_PAYLOAD = {
  /**
   * Email : User Email Address that will be used for login.
   */
  email: string;

  /**
   * Password : User Password that will be used for login.
   */
  password: string;
};

export type SETTINGS_PAYLOAD = {
  email: string;
  oldPassword: string;
  newPassword: string;
};
