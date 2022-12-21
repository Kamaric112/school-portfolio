export interface IHeaderLink {
  url: string;
  title: string;
  activeKey: string;
}

export const HeaderLinks: IHeaderLink[] = [
  {
    url: `/about`,
    title: 'About Me',
    activeKey: 'about',
  },
  {
    url: `/projects`,
    title: 'Projects',
    activeKey: 'projects',
  },
];
