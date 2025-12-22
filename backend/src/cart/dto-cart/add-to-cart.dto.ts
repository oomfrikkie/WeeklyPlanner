import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class AddToCartDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  @IsNotEmpty()
  accountId: number;

  @ApiProperty({ example: 12 })
  @IsInt()
  @IsNotEmpty()
  productId: number;

  @ApiProperty({ example: 2, default: 1 })
  @IsInt()
  @Min(1)
  quantity: number;
}
