import type { BaseEntity } from '@/common/entities/base.entity';

import type { SanatoriumStatus } from '../enums/sanatorium-status.enum';

export interface Sanatorium extends BaseEntity {
  name: string;
  rating: number;
  address: string;
  contactName: string;
  contactPhone: string;
  ownerId: number;
  status: SanatoriumStatus;
}
