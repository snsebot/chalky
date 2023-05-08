/*

throwWarn(path, line, code, msg);

 option -  type  -  example

  @path - string - index.ts;
  @line - string - 1:18;
  @code - number - 2001;
  @msg  - string - Value is undefined.;

*/

import pc from "picocolors";

export function throwWarn(path: string, line: string, code: number, msg: string) {
  return pc.blue(path) + pc.yellow(line) + " - " + pc.yellow("warning ") + pc.gray("SJS" + code + ": ") + msg
}
