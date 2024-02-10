/* this file is loaded automatically */

// for i18n
declare interface Navigator {
  userLanguage: string
}

// svg declaration
declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

/*
Override Object.entries type
  type Entries<T> = {
    [K in keyof T]: [K, T[K]]
  }[keyof T][]

  declare interface ObjectConstructor {
    entries<T extends object>(o: T): Entries<T>
  }

Example
  interface Obj {
    a: number;
    b: string;
    c: number;
  }
  type Test = Entries<Obj>;
  // (["a", number] | ["b", string] | ["c", number])[]

*/

/**
 * Add react-syntax-highlighter declaration to accept all language
 * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-syntax-highlighter/index.d.ts
 */
declare module 'react-syntax-highlighter/dist/esm/languages/hljs' {
  const languages: string[]
  export default languages
}
