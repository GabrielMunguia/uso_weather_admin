export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
};
export const REGEXS = {
  DUI: /^\d{9}(-\d{1})?$/,
  NIT: /^\d{4}-\d{5}-\d{3}$/,
  DUI_OR_NIT: /^(?:\d{9}(-\d{1})?|\d{4}-\d{5}-\d{3})$/,
};

export const MASKS = {
  DUI: 'XXXXXXXX-X',
  NIT: 'XXXX-XXXXX-XXX',
  DUI_OR_NIT: 'XXXX-XXXX-XXXX',
};

export const IVA = 0.13;
