export enum SelectedPage {
    About = "about",
    Projects = "projects",
    Contact = "contact",
  }


export type ProjectType = {
    id: number,
    title: string,
    des?: string,
    img: string,
    link?: string,
  }