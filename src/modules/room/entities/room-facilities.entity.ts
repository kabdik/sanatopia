import { BaseEntity } from '@/common/entities/base.entity';
import { TableName } from '@/common/enums/table';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import type { RoomFacilities } from '../interfaces/room-facilities.interface';
import { FacilityEntity } from './facilities.entity';
import { RoomEntity } from './room.entity';

@Entity(TableName.ROOM_FACILITIES)
export class RoomFacilitiesEntity extends BaseEntity implements RoomFacilities {
  @Column('int')
  roomId!: number;

  @Column('int')
  facilityId!: number;

  @ManyToOne(() => RoomEntity,(room)=>room.facilities, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'roomId' })
  room?: RoomEntity;

  @ManyToOne(() => FacilityEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'facilityId' })
  facility?: FacilityEntity;
}
