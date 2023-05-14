import { IsEnum, IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';
import { RoomType } from '../enums/room-type.enum';

export class CreateRoomBodyDto {
  @IsEnum(RoomType)
  @IsNotEmpty()
  type!: RoomType;

  @IsNumber()
  @IsOptional()
  surfaceArea?: number;

  @IsNumber()
  @IsNotEmpty()
  capacity!: number;

  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  pricePerDay!: number;

  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  quantity!: number;
}
