/**
 * Type to infer return type of async function. Works like
 * the typescript ReturnType utility type
 *
 * Usage:
 * ReturnTypeAsync<typeof getFunction>
 */

export type ReturnTypeAsync<T extends (...args: any) => any> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : any;
