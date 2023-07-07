import { IsInt, IsString } from 'class-validator';

export class CreateArtistDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly instrument: string;

  @IsString()
  readonly genre: string;
}
