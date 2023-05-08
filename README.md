<h1><img height="30" width="30" src="https://raw.githubusercontent.com/snsebot/chalky/main/snsejs/27E1C581-6290-4BEA-A274-CD693680D4BB.png"> @snsejs/errors</h1>
<p>Library that returns strings that should be printed in console. Aimed at snsejs libraries.</p>
<h2>Installing and usage</h2>


To install the library *separately* from the main snsejs library, use following command:
```bash
npm install @snsejs/errors
```

<img src="https://em-content.zobj.net/thumbs/160/apple/76/notebook_1f4d3.png" width="20" height="20"> Note: it's not recommended to use this library as CommonJS module. Require it with import.



```js
import { ... } from '@snsejs/errors';
```
## Functions
```js
throwError(path: string, line: string, code: number, msg: string)
throwWarn(path: string, line: string, code: number, msg: string)
```
## Dependencies
picocolors
