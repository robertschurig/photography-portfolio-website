export interface IImages extends Array<IImage> {
  [index: number]: IImage;
}

export interface IImage {
  title?: string;
  date?: string,
  thumb: string;
  source: string;
}
export interface IProjects extends Array<IProject> {
  [index: number]: IProject;
}

export interface  IProject {
  title: string;
  images: IImages;
}