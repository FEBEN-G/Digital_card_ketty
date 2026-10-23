import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          tap_to_open: "Tap to Open",
          pause_music: "Pause music",
          play_music: "Play music",
          save_the_date_caps: "SAVE THE DATE",
          getting_married: "We are getting married!",
          wedding_venue: "WEDDING VENUE",
          location: "Gospel Truth Church, Jimma",
          ceremony: "Ceremony",
          ceremony_time: "4:00 LT",
          time_remaining: "TIME REMAINING UNTIL THE BIG DAY",
          days: "DAYS",
          hours: "HOURS",
          minutes: "MINUTES",
          seconds: "SECONDS",
          get_directions: "GET DIRECTIONS",
          wedding_date: "Saturday, November 21, 2026",
          sunday_time: "Saturday, 4:00 LT",
          invitation_title: "Wedding Invitation",
          invitation_message: "Together with great joy and heartfelt blessings, we, **Muluken Habtamu and Rediet Getachew**, warmly invite you to our wedding as we begin our beautiful journey of love and lifelong commitment.\n\nPlease honor us with your presence on **Saturday, November 21, 2026**.\n\nYour presence will make our special day even more meaningful and memorable.",
          waiting_message: "Thank you for being part of our story!",
          selah_presents: "Presented by Selah Events for you",
          selah_contact: "Contact us +251937318894",
          bible_verse: "\"Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh.\"",
          bible_reference: "Genesis 2:24"
        }
      },
      am: {
        translation: {
          tap_to_open: "ለመክፈት ይንኩ",
          pause_music: "ሙዚቃ አቁም",
          play_music: "ሙዚቃ አጫውት",
          save_the_date_caps: "ቀኑን ይያዙ",
          getting_married: "እየተጋባን ነው!",
          wedding_venue: "የሰርግ ቦታ",
          location: "የወንጌል እውነት ቤተክርስቲያን፣ ጅማ",
          ceremony: "ኘሮግራማችን የሚጀምረው",
          ceremony_time: "ጠዋት 4 ሰዓት",
          time_remaining: "ለታላቁ ቀን የቀረው ጊዜ",
          days: "ቀናት",
          hours: "ሰዓታት",
          minutes: "ደቂቃዎች",
          seconds: "ሰከንዶች",
          get_directions: "አቅጣጫ ያግኙ",
          wedding_date: "ቅዳሜ ኅዳር 12 2019",
          sunday_time: "ቅዳሜ፣ ጠዋት 4 ሰዓት",
          invitation_title: "የክብር ጥሪ",
          invitation_message: "የማክበር ሰላምታችንን እያቀረብን የእኛ የአቶ ሙሉቀን ሀብታሙ እና የወ/ሪት ረድኤት ጌታቸው የጋብቻ ስነስርዓት የሚፈጸመው ቅዳሜ ኅዳር 12 ቀን 2019 ዓ.ም ስለሆነ በዚሁ ዕለት እንዲገኙልን በማክበር ጠርተንዎታል።",
          waiting_message: "ስለምትመጡ እናመሰግናለን!",
          selah_presents: "በሴላህ ኢቨንትስ ለእናንተ የቀረበ",
          selah_contact: "ያግኙን +251937318894",
          bible_verse: "\"ስለዚህ ሰው አባቱንና እናቱን ይተዋል፥ በሚስቱም ይጣበቃል፤ ሁለቱም አንድ ሥጋ ይሆናሉ።\"",
          bible_reference: "ኦሪት ዘፍጥረት 2:24"
        }
      }
    },
    fallbackLng: "am",
    lng: "am",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
