/*
import 必需对应有一个 export defalut，
如何让 svg 有导出，就需要这个文件给所有 svg 一个默认的导出
*/

declare module '*.svg' {
  const content: any;
  export default content;
}