import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';
import { RolesGuard } from '@/modules/auth/guards/roles.guard';
import type { UserRole } from '@/modules/user/enums/user-role.enum';

export const UseAuth = (...roles:UserRole[]):ReturnType<typeof applyDecorators> => applyDecorators(
  SetMetadata('roles', roles),
  UseGuards(JwtAuthGuard, RolesGuard),
);
