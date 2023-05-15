import type { BaseEntity } from '@/common/entities/base.entity';

export interface RoomFacilities extends BaseEntity {
  roomId: number;
  facilityId: number;
}
