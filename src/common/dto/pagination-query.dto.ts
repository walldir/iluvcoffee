import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  //@Type(() => Number) -> this is being set on the main.ts file with the useGlobalPipes() method
  limit: number;

  @IsOptional()
  @IsPositive()
  //@Type(() => Number) -> this is being set on the main.ts file with the useGlobalPipes() method
  offset: number;
}
