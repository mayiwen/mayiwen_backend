import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";


export class AddTitleDto {
  @IsString()
  title: string;
}

export class UpdateTitleDto extends PartialType(AddTitleDto) {
  @IsNumber()
  id: number
}