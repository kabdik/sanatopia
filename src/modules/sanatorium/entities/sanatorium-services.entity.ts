import { BaseEntity } from '@/common/entities/base.entity';
import { TableName } from '@/common/enums/table';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import type { SanatoriumServices } from '../interfaces/sanatorium-services.interface';
import { SanatoriumEntity } from './sanatorium.entity';
import { ServicesEntity } from './services.entity';

@Entity(TableName.SANATORIUM_SERVICES)
export class SanatoriumServicesEntity extends BaseEntity implements SanatoriumServices {
  @Column('int')
  sanatoriumId!: number;

  @Column('int')
  serviceId!: number;

  @ManyToOne(() => SanatoriumEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'sanatoriumId' })
  sanatorium?: SanatoriumEntity;

  @ManyToOne(() => ServicesEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'serviceId' })
  service?: ServicesEntity;
}
