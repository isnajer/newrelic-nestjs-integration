// eslint-disable-next-line @typescript-eslint/no-var-requires
const newrelic = require('newrelic');
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Artist, ArtistDocument } from './schemas/artist.schema';
import { CreateArtistDto } from './dto/create-artist.dto';

@Injectable()
export class ArtistsService {
  constructor(@InjectModel(Artist.name) private artistModel: Model<ArtistDocument>) {}

  async create(createArtistDto: CreateArtistDto): Promise<Artist> {
    // return newrelic.startSegment('getHelloService', false, () => {
    const createdArtist = new this.artistModel(createArtistDto);
    return createdArtist.save();
    // });
  }

  async findAll(): Promise<Artist[]> {
    return this.artistModel.find().exec();
  }
}
