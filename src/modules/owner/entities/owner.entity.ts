import { BaseEntity } from '@/common/entities/base.entity';
import { TableName } from '@/common/enums/table';
import { SanatoriumEntity } from '@/modules/sanatorium/entities/sanatorium.entity';
import { UserEntity } from '@/modules/user/entities/user.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import type { Owner } from '../interfaces/owner.interface';

@Entity(TableName.OWNER)
export class OwnerEntity extends BaseEntity implements Owner {
  @Column('int')
  userId!: number;

  @OneToOne(() => UserEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user?: UserEntity;

  @OneToMany(() => SanatoriumEntity, (sanatorium) => sanatorium.owner, { cascade: true })
  sanatoriums?: SanatoriumEntity[];
}
