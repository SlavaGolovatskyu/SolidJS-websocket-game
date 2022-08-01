type RouteNamesType = {
  url: Routes;
  name: string;
};

export enum Routes {
  HOME = '/',
  ABOUT_US = '/about-us',
  ABOUT_PROJECT = '/about-project',
  JOIN_TO_THE_CHAT = '/chat',
}

export const RouteNames: RouteNamesType[] = [
  {
    url: Routes.HOME,
    name: 'Home',
  },
  {
    url: Routes.ABOUT_US,
    name: 'About us',
  },
  {
    url: Routes.ABOUT_PROJECT,
    name: 'About project',
  },
  {
    url: Routes.JOIN_TO_THE_CHAT,
    name: 'Chat',
  },
];
