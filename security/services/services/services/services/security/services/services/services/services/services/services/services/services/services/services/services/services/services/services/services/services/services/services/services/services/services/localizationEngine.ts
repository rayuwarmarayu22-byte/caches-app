// Caches Multi-Language Localization & Dynamic Translation Engine

export type SupportedLanguageCode = 
  | 'en' // English
  | 'es' // Spanish
  | 'fr' // French
  | 'pt' // Portuguese
  | 'yo' // Yoruba
  | 'ha' // Hausa
  | 'ig' // Igbo
  | 'ar' // Arabic
  | 'zh' // Chinese
  | 'hi'; // Hindi

export interface UserLanguagePreference {
  userId: string;
  selectedLanguage: SupportedLanguageCode;
  autoTranslateSubtitles: boolean;
}

// Updates user interface language settings across all platform nodes
export function setUserLanguagePreference(userId: string, languageCode: SupportedLanguageCode): UserLanguagePreference {
  return {
    userId,
    selectedLanguage: languageCode,
    autoTranslateSubtitles: true,
  };
}

export function getLocalizedPlatformString(key: string, lang: SupportedLanguageCode): string {
  const dictionary: Record<SupportedLanguageCode, Record<string, string>> = {
    en: { upload: "Upload", wallet: "Wallet", live: "Live", settings: "Settings" },
    es: { upload: "Subir", wallet: "Billetera", live: "En Vivo", settings: "Ajustes" },
    fr: { upload: "Télécharger", wallet: "Portefeuille", live: "En Direct", settings: "Paramètres" },
    pt: { upload: "Enviar", wallet: "Carteira", live: "Ao Vivo", settings: "Configurações" },
    yo: { upload: "Gbe sori ayelujara", wallet: "Àpò OWÓ", live: "Lori Afẹfẹ", settings: "Eto" },
    ha: { upload: "Sanya", wallet: "Jaka", live: "Kai tsaye", settings: "Saituna" },
    ig: { upload: "Bulite", wallet: "Akpa Ego", live: "Nke Na-aga", settings: "Ntọala" },
    ar: { upload: "رفع", wallet: "محفظة", live: "مباشر", settings: "الإعدادات" },
    zh: { upload: "上传", wallet: "钱包", live: "直播", settings: "设置" },
    hi: { upload: "अपलोड करें", wallet: "वॉलेट", live: "लाइव", settings: "सेटिंग्स" },
  };

  const langPack = dictionary[lang] || dictionary['en'];
  return langPack[key] || dictionary['en'][key] || key;
}
