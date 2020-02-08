import { PAGE_SIZE } from '../consts/table';

export function getPagesCount(items) {
  return Math.round(items / PAGE_SIZE);
}
