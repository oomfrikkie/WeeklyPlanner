import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';

export class UpdateCartItemDto {
  @ApiProperty({ example: 3 })
  @IsInt()
  cartItemId: number;

  @ApiProperty({ example: 2 })
  @IsInt()
  @Min(0) // 0 = remove
  quantity: number;
}
