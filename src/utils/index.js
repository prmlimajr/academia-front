export function capitalize(str) {
  if (typeof str !== 'string') return '';
  str = str.toLowerCase();
  const initial = str.charAt(0).toUpperCase();
  return initial + str.substring(1);
}

export const removeReadOnly = (e) => e.target.removeAttribute('readonly');
