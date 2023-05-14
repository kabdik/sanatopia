import { BaseEntity } from '@/common/entities/base.entity';
import { Check, Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import type { Sanatorium } from '../interfaces/sanatorium.interface';
import { TableName } from '@/common/enums/table';
import { SanatoriumStatus } from '../enums/sanatorium-status.enum';
import { RoomEntity } from '@/modules/room/entities/room.entity';
import { OwnerEntity } from '@/modules/owner/entities/owner.entity';

@Entity(TableName.SANATORIUM)
export class SanatoriumEntity extends BaseEntity implements Sanatorium {
  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'int' })
  @Check(`"rating" >= 0.00 AND "rating" <= 5.00`)
  rating!: number;

  @Column({ type: 'text' })
  address!: string;

  @Column({ type: 'varchar' })
  contactName!: string;

  @Column({ type: 'varchar' })
  contactPhone!: string;

  @Column({ type: 'int' })
  ownerId!: number;

  @Column('varchar')
  postCode!: string;
  
  @Column('enum', { enum: SanatoriumStatus, default: SanatoriumStatus.PENDING })
  status!: SanatoriumStatus;

  @OneToMany(() => RoomEntity, (room) => room.sanatorium, { cascade: true })
  rooms?: RoomEntity[];

  @ManyToOne(() => OwnerEntity, (owner) => owner.sanatoriums, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'ownerId' })
  owner?: OwnerEntity;
}
