import type { BaseEntity } from '@/common/entities/base.entity';

export interface SanatoriumTreatments extends BaseEntity {
  sanatoriumId:number;
  treatment: string;
  price: null | number;
}
