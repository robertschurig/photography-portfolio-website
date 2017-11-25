import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProjects, IProject } from '../shared/image-list.interface';
import { Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class SportService {
  private _projects: IProjects;

  constructor(private http: HttpClient) {
  }

  public getProjects(): Observable<IProjects> {
    return this._projects ? Observable.of(this._projects) : this.http.get('./content/sport.json')
      .pipe(
      mergeMap((projects: { data: any[] }) => {
        let observables: Observable<any>[] = [];
        projects.data.forEach((project) => {
          observables.push(this.http.get(project.url));
        });
        return Observable.forkJoin(observables);
      }),
      map((projects: IProjects) => {
        this._projects = projects;
        return this._projects;
      })
      );
  }
}
