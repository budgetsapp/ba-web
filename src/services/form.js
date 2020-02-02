export function getError(errors, touched, fieldName) {
  const error =
    errors[fieldName] && touched[fieldName] ? errors[fieldName] : '';
  return error
    ? {
        content: error,
        pointing: 'above'
      }
    : false;
}
