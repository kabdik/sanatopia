import { BaseEntityStatic } from '@/common/entities/base.entity';
import { TableName } from '@/common/enums/table';
import { Column, Entity } from 'typeorm';
import type { Facility } from '../interfaces/facility.interface';

@Entity(TableName.FACILITIES)
export class FacilityEntity extends BaseEntityStatic implements Facility {
  @Column('varchar')
  name!: string;
}
