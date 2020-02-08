import { PAGE_SIZE } from '../consts/table';

export function getPagesCount(items) {
  return Math.ceil(items / PAGE_SIZE);
}

export function normalizePageNumber(page) {
  return page - 1;
}
