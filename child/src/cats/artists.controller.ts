import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';

import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { Artist } from './schemas/artist.schema';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post('create')
  create(@Body() artist: CreateArtistDto): Promise<Artist> {
    return this.artistsService.create(artist);
  }

  @Get('getAll')
  async findAll(): Promise<Artist[]> {
    return this.artistsService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.artistsService.remove(id);
  }
}
