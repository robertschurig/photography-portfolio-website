import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map } from 'rxjs/operators';
import { forkJoin, Observable, of } from 'rxjs';


import { IProjects, IProject, ISeries } from '../shared/image-list.interface';

@Injectable()
export class SeriesService {
  private projects: IProjects;

  constructor(private http: HttpClient) {
  }

  public getProjects(): Observable<IProjects> {
    return this.projects ? of(this.projects) : this.http.get('./content/series.json')
      .pipe(
        mergeMap((projects: { data: ISeries }) => {
          const observables: Observable<any>[] = [];

          projects.data.forEach((project) => {
            observables.push(this.http.get<IProject>(project.url));
          });

          return forkJoin(observables);
        }),
        map((projects: IProjects) => {
          this.projects = projects;
          return this.projects;
        }),
      );
  }
}
