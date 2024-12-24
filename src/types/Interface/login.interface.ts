import { UserRole } from "../Enum/user-role.enum";

export interface IAdminLoginResponse {
  token: string;
  user: { email: string; role: UserRole; _id: string };
}

export interface IUpdatePasswordResponse {
  message: string;
}
