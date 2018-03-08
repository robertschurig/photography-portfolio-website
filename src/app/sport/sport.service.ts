import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { IProjects } from '../shared/image-list.interface';

@Injectable()
export class SportService {
  private projects: IProjects;

  constructor(private http: HttpClient) {
  }

  public getProjects(): Observable<IProjects> {
    return this.projects ? Observable.of(this.projects) : this.http.get('./content/sport.json')
      .pipe(
        mergeMap((projects: { data: any[] }) => {
          const observables: Observable<any>[] = [];
          projects.data.forEach((project) => {
            observables.push(this.http.get(project.url));
          });
          return Observable.forkJoin(observables);
        }),
        map((projects: IProjects) => {
          this.projects = projects;
          return this.projects;
        }),
      );
  }
}
