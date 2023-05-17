import { BaseEntityStatic } from '@/common/entities/base.entity';
import { TableName } from '@/common/enums/table';
import { Column, Entity } from 'typeorm';
import type { Services } from '../interfaces/services.interface';

@Entity(TableName.SERVICES)
export class ServicesEntity extends BaseEntityStatic implements Services {
  @Column('varchar')
  name!: string;
}
