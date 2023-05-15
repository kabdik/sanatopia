import { BaseEntity } from '@/common/entities/base.entity';
import { TableName } from '@/common/enums/table';
import { PhotoEntity } from '@/modules/photo/photo.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import type { SanatoriumPhoto } from '../interfaces/sanatorium-photo.interface';
import { SanatoriumEntity } from './sanatorium.entity';

@Entity(TableName.SANATORIUM_PHOTO)
export class SanatoriumPhotoEntity extends BaseEntity implements SanatoriumPhoto {
  @Column('int')
  sanatoriumId!: number;
  @Column('int')
  photoId!: number;

  @ManyToOne(() => SanatoriumEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'sanatoriumId' })
  sanatorium?: SanatoriumEntity;

  @ManyToOne(() => PhotoEntity, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'photoId' })
  photo?: PhotoEntity;
}
