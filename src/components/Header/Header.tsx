import { createSignal, For, onMount } from 'solid-js';
import { RouteNames } from '../../routes/models';
import { Link, useLocation } from '@solidjs/router';
import style from './header.module.scss';

export const Header = () => {
  const [activeItem, setActiveItem] = createSignal<number>(0);
  const { pathname } = useLocation();

  onMount(() => {
    const currentUrlIndex = RouteNames.findIndex(
      (route) => route.url === pathname,
    );

    setActiveItem(currentUrlIndex === -1 ? 0 : currentUrlIndex);
  });

  return (
    <nav class={style.container}>
      <For each={RouteNames}>
        {(route, index) => {
          return (
            <Link
              href={route.url}
              onClick={() => setActiveItem(index())}>
              <div
                class={
                  activeItem() === index()
                    ? `${style.item} ${style.active}`
                    : style.item
                }>
                {route.name}
              </div>
            </Link>
          );
        }}
      </For>
    </nav>
  );
};
