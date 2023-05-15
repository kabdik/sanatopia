import { BaseEntity } from '@/common/entities/base.entity';
import type { Room } from '../interfaces/room.interface';
import { RoomType } from '../enums/room-type.enum';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { TableName } from '@/common/enums/table';
import { SanatoriumEntity } from '@/modules/sanatorium/entities/sanatorium.entity';
import { RoomFacilitiesEntity } from './room-facilities.entity';

@Entity(TableName.ROOM)
export class RoomEntity extends BaseEntity implements Room {
  @Column('enum', { enum: RoomType })
  type!: RoomType;

  @Column('int')
  sanatoriumId!: number;

  @Column('double precision', { nullable: true })
  surfaceArea!: number | null;

  @Column('int')
  capacity!: number;

  @Column('numeric', { precision: 10, scale: 2 })
  pricePerDay!: number;

  @Column('int')
  quantity!: number;

  @ManyToOne(() => SanatoriumEntity, (sanatorium) => sanatorium.rooms, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'sanatoriumId' })
  sanatorium?: SanatoriumEntity;

  @OneToMany(() => RoomFacilitiesEntity, (facility) => facility.room, { cascade: true })
  facilities?: RoomFacilitiesEntity[];
}
