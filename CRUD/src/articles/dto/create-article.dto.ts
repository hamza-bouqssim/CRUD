import { ApiProperty } from "@nestjs/swagger";

export class CreateArticleDto {
    @ApiProperty()
    title: string;

    @ApiProperty({required: false})
    description?: string;

    @ApiProperty()
    body: string;

    @ApiProperty({required: false})
    published?: boolean = false;
}
