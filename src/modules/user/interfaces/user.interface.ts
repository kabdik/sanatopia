import type { BaseEntity } from '@/common/entities/base.entity';

import type { UserRole } from '../enums/user-role.enum';

export interface User extends BaseEntity {
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
  role: UserRole;
}
