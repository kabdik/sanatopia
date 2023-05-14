import type { UserRole } from '../user/enums/user-role.enum';

export interface UserPayload {
  email: string;
  userId: number;
  role: UserRole;
}

export interface JwtSign {
  access_token: string;
  refresh_token: string;
}

export interface JwtPayload {
  email: string;
  sub: number;
  role: UserRole;
}
