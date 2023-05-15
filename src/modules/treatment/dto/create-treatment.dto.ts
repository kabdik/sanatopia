import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSanatoriumTreatmentDto {
  @IsNotEmpty()
  id!: number;

  @IsOptional()
  @IsNumber()
  price?: number;
}

export class CreateSanatoriumCustomTreatmentDto {
  @IsNotEmpty()
  @IsString()
  treatment!: string;

  @IsOptional()
  @IsNumber()
  price?: number;
}
