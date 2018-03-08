import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProject } from '../shared/image-list.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PortraitService {
  private portraitURL: string = './content/portrait/portrait.json';

  constructor(private http: HttpClient) {
  }

  public getPortraits(): Observable<IProject> {
    return this.http.get<IProject>(this.portraitURL);
  }
}
