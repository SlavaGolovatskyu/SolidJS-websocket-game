/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

(async (ENV) => {
  if (ENV !== 'production') {
    await import('solid-devtools');
  }
})(import.meta.env.SOLID_NODE_ENV);

render(() => <App />, document.getElementById('root') as HTMLElement);
