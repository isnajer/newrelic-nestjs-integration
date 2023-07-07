import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArtistsController } from './artists.controller';
import { AppService } from './app.service';
import { ArtistsService } from './artists.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ArtistsController],
  providers: [AppService, ArtistsService],
})
export class AppModule {}
