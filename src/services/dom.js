import { APP_DISPLAY_NAME } from '../consts/app';

export function buildTitle(title) {
  return title ? `${title} - ${APP_DISPLAY_NAME}` : APP_DISPLAY_NAME;
}

export function setDocumentTitle(title) {
  document.title = title;
}

export function setDocumentTitleWithAppName(title) {
  setDocumentTitle(buildTitle(title));
}
