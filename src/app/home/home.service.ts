import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IImages } from '../shared/image-list.interface';

@Injectable()
export class HomeService {
  private portraitURL: string = './content/home.json';

  constructor(private http: HttpClient) {
  }

  public getPortraits(): Observable<IImages> {
    return this.http.get<IImages>(this.portraitURL);
  }
}
