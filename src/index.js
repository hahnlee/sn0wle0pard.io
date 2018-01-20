import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import { App } from 'containers';

console.log('Hello developer!!');
console.log('mail: mailto://hanlee.dev@gmail.com');
console.log(
  '%c███████╗███╗   ██╗ ██████╗ ██╗    ██╗██╗     ███████╗ ██████╗ ██████╗  █████╗ ██████╗ ██████╗\n' +
  '%c██╔════╝████╗  ██║██╔═████╗██║    ██║██║     ██╔════╝██╔═████╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗\n' +
  '%c███████╗██╔██╗ ██║██║██╔██║██║ █╗ ██║██║     █████╗  ██║██╔██║██████╔╝███████║██████╔╝██║  ██║\n' +
  '%c╚════██║██║╚██╗██║████╔╝██║██║███╗██║██║     ██╔══╝  ████╔╝██║██╔═══╝ ██╔══██║██╔══██╗██║  ██║\n' +
  '%c███████║██║ ╚████║╚██████╔╝╚███╔███╔╝███████╗███████╗╚██████╔╝██║     ██║  ██║██║  ██║██████╔╝\n' +
  '%c╚══════╝╚═╝  ╚═══╝ ╚═════╝  ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝\n',
  'color:#0078FF;',
  'color:#148CFF;',
  'color:#28A0FF;',
  'color:#3CB4FF;',
  'color:#50C8FF;',
  'color:#5ABEFF',
);

ReactDOM.render(<App/>, document.getElementById('root'));