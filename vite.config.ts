import path from 'path';
import vuePlugin from '@vitejs/plugin-vue2';
import { defineConfig, loadEnv } from 'vite';
// import stylelintPlugin from 'vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  if (command === 'serve') console.log('serve mode');
  else console.log('build mode');

  return {
    plugins: [
      vuePlugin(),
      // stylelintPlugin({
      //   include: ['src/**/*.{css,vue,pcss,scss}'],
      //   exclude: ['node_modules'],
      //   lintOnStart: false,
      //   emitErrorAsWarning: true,
      // }),
    ],
    build: {
      target: 'esnext',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        vue: path.resolve(__dirname, './node_modules/vue/dist/vue.js'),
      },
    },
  };
});
