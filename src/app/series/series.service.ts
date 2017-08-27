import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {IProjects, IProject} from '../shared/image-list.interface';
import {Observable} from 'rxjs';

@Injectable()
export class SeriesService {
  private _projects: IProjects;

  constructor(private http: Http) {
  }

  public getProjects(): Observable<IProjects> {
    return this._projects ? Observable.of(this._projects) : this.http.get('./content/series.json').map(res => res.json().data)
        .flatMap((projects) => {
          let observables: Observable<any>[] = [];
          projects.forEach((project: any) => {
            observables.push(this.http.get(project.url).map(res => res.json()));
          });
          return Observable.forkJoin(observables);
        }).map((projects: IProjects) => {
          this._projects = projects;
          return this._projects;
        });
  }
}
