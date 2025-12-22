import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsArray } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Ping Pong Table' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Butterfly', required: false })
  @IsOptional()
  @IsString()
  brand?: string;

  @ApiProperty({ example: 'Professional ping pong table for indoor use' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 499.99 })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: ['games', 'sports'],
    description: 'Category names',
  })
  @IsArray()
  @IsString({ each: true })
  categories: string[];
}
