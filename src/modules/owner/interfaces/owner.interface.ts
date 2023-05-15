import type { BaseEntity } from '@/common/entities/base.entity';

export interface Owner extends BaseEntity {
  userId: number;
}
