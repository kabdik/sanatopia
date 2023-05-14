import { BaseEntity } from '@/common/entities/base.entity';
import type { User } from '../interfaces/user.interface';
import { Column, Entity } from 'typeorm';
import { UserRole } from '../enums/user-role.enum';
import { TableName } from '@/common/enums/table';

@Entity(TableName.USER)
export class UserEntity extends BaseEntity implements User {
  @Column('varchar')
  name!: string;

  @Column('varchar')
  surname!: string;

  @Column('varchar', { unique: true })
  email!: string;

  @Column('text', { unique: true })
  phone!: string ;

  @Column('varchar')
  password!: string;

  @Column('enum', { enum: UserRole, default: UserRole.USER })
  role!: UserRole;
}
