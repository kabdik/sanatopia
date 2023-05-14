import { BaseEntityStatic } from "@/common/entities/base.entity";
import { TableName } from "@/common/enums/table";
import { Column, Entity } from "typeorm";
import type { Treatment } from "../interfaces/treatment.interface";

@Entity(TableName.TREATMENT)
export class TreatmentEntity extends BaseEntityStatic implements Treatment {
    @Column({type:'varchar'})
    name!: string;
}
