import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {IImages} from '../shared/image-list.interface';
import {Observable} from 'rxjs';

@Injectable()
export class HomeService {
  private portraitURL: string = './content/portrait/portrait.json';

  constructor(private http: Http) {
  }

  public getPortraits(): Observable<IImages> {
    return this.http.get(this.portraitURL)
      .map((res: Response) => {
        return this.extractData(res);
      })
      .catch(this.handleError);
  }


  private extractData(res: Response): IImages {
    let body = res.json();
    return body.data || [];
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
