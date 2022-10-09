import path from 'path';
import { defineConfig, PluginOption, loadEnv } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import devtools from 'solid-devtools/vite';

type DefineConfigProps = {
  mode: string;
};

export default ({ mode }: DefineConfigProps) => {
  process.env = Object.assign(
    process.env,
    loadEnv(mode, process.cwd(), ''),
  );

  const plugins: PluginOption[] = [
    solidPlugin(),
    tsconfigPaths({
      projects: ['./tsconfig.json'],
    }),
  ];

  if (process.env.SOLID_NODE_ENV !== 'production') {
    plugins.push(devtools({ name: true }));
  }

  return defineConfig({
    plugins,
    envPrefix: ['SOLID', 'NODE'],
    server: {
      port: 3000,
    },
    build: {
      target: 'esnext',
    },
    resolve: {
      alias: { src: path.resolve('src/') },
    },
  });
};
