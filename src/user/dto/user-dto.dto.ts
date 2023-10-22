import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";

export class UserDto {
  name?: string;
  @IsString()
  password?: string
  @IsString()
  password2?: string
  @IsNumber()
  loginCount?: number
  
}
export class AddUserDto {
  name?: string;
  @IsString()
  password?: string
  @IsString()
  password2?: string
  @IsNumber()
  loginCount?: number
}
export class UserList {
  @IsString()
  name: string;
  @IsString()
  password: string
}

export class UpdateUserDto extends PartialType(UserDto) {}