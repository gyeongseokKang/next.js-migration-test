export let serviceOnOff = false;

export function sleep(m: number) {
  return new Promise((r) => setTimeout(r, m));
}

export const SERVER_URL = "http://13.124.222.71:11809";
