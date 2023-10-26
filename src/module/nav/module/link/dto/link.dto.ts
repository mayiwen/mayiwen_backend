import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";


export class AddLinkDto {
  @IsString()
  title: string;
  @IsString()
  src: string;
  @IsNumber()
  titleId: number;
  @IsNumber()
  indexLink: number
}

export class UpdateLinkDto extends PartialType(AddLinkDto) {
  @IsNumber()
  id: number
}