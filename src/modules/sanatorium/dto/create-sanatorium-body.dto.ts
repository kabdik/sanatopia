import { CreateRoomBodyDto } from '@/modules/room/dto/create-room-body.dto';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString, Max, Min, ValidateNested } from 'class-validator';

export class CreateSanatoriumBodyDto {
  @IsNotEmpty()
  @IsString()
  contactName!: string;

  @IsNotEmpty()
  @IsString()
  contactPhone!: string;

  @IsNotEmpty()
  @IsString()
  name!: string;

  @Min(0)
  @Max(5)
  @IsNumber()
  @IsNotEmpty()
  rating!: number;

  @IsNotEmpty()
  @IsString()
  address!: string;

  @IsNotEmpty()
  @IsString()
  postCode!: string;

  @IsArray()
  @IsNotEmpty()
  @Type(() => CreateRoomBodyDto)
  @ValidateNested({ each: true })
  rooms!: CreateRoomBodyDto[];

  @IsNotEmpty()
  @IsNumber({},{each:true})
  services!: number[];

  @IsNumber({}, { each: true })
  @IsNotEmpty()
  imageIds!: number[];

  @IsNotEmpty()
  @IsNumber({},{each:true})
  treatments!: number[];
}
