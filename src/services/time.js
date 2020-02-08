import moment from 'moment';

export function toLocalTime(utc) {
  return moment
    .utc(utc)
    .local()
    .format('LLLL');
  // .format('DD-MM-YYYY HH:mm:ss');
}
