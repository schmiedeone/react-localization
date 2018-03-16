export function getInterfaceLanguage() {
  const defaultLang = 'en-US';
  if (!!global.navigator && !!global.navigator.language) { return global.navigator.language; } else if (!!global.navigator && !!global.navigator.languages && !!global.navigator.languages[0]) { return global.navigator.languages[0]; } else if (!!global.navigator && !!global.navigator.userLanguage) { return global.navigator.userLanguage; } else if (!!global.navigator && !!global.navigator.browserLanguage) { return global.navigator.browserLanguage; }
  return defaultLang;
}

export function validateTranslationKeys(translationKeys) {
  const reservedNames = [
    '_interfaceLanguage',
    '_language',
    '_defaultLanguage',
    '_defaultLanguageFirstLevelKeys',
    '_props',
  ];
  translationKeys.forEach(key => {
    if (reservedNames.indexOf(key) !== -1) {
      throw new Error(`${key} cannot be used as a key. It is a reserved word.`);
    }
  });
}
