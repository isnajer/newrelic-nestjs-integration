import { IsInt, IsString } from 'class-validator';

export class CreateArtistDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly instrument: string;

  @IsString()
  readonly genre: string;
}
