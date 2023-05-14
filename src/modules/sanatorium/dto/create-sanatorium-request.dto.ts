import { createOwnerDto } from "@/modules/owner/dto/create-owner.dto"
import { Type } from "class-transformer"
import { IsNotEmpty, ValidateNested } from "class-validator"
import { CreateSanatoriumBodyDto } from "./create-sanatorium-body.dto"

export class CreateSanatoriumRequestDto {
    @IsNotEmpty()
    @Type(()=> CreateSanatoriumBodyDto)
    @ValidateNested()
    sanatorium!:CreateSanatoriumBodyDto
    @IsNotEmpty()
    @Type(()=>createOwnerDto)
    owner!:createOwnerDto   
}
