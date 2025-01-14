import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { ArtistsService } from './artists.service';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post('create')
  async create(
    @Body() artist: { name: string; instrument: string; genre: string },
  ): Promise<string> {
    return this.artistsService.create(artist);
  }

  @Get('getAll')
  async findAll(): Promise<string> {
    return this.artistsService.getAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.artistsService.remove(id);
  }
}
