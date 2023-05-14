import type { BaseEntity } from '@/common/entities/base.entity';

import type { RoomType } from '../enums/room-type.enum';

export interface Room extends BaseEntity {
  type: RoomType;
  sanatoriumId: number;
  surfaceArea: number | null;
  capacity: number;
  pricePerDay: number;
  quantity: number;

}
