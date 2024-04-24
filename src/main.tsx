import ReactDOM from 'react-dom/client';
import { Root } from './Root.tsx';
import './index.css';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import WebApp from '@twa-dev/sdk';

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
