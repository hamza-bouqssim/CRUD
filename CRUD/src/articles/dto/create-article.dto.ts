import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateArticleDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    title: string;
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    @ApiProperty({required: false})
    description?: string;
    
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    body: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({required: false})
    published?: boolean = false;
}
