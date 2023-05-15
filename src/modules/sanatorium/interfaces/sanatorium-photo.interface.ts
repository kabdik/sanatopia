import type { BaseEntity } from '@/common/entities/base.entity';

export interface SanatoriumPhoto extends BaseEntity {
  sanatoriumId:number;
  photoId:number;
}
