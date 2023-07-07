// eslint-disable-next-line @typescript-eslint/no-var-requires
const newrelic = require('newrelic');
import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class ArtistsService {
  constructor(private http: HttpService) {}

  create(artist): any {
    //return newrelic.startSegment('getHelloService', false, () => {
    return this.http
      .post('http://child:3000/artists/create', artist)
      .pipe(
        map((response) =>
          console.log(
            `Artists Child create says ${JSON.stringify(response.data)}`,
          ),
        ),
      );
    // });
  }

  getAll(): any {
    return this.http.get('http://child:3000/artists/getAll').pipe(
      map((response) => {
        console.log(`Artists Child getAll says ${JSON.stringify(response.data)}`);
        return response.data;
      }),
    );
  }
}
