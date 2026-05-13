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
          save_the_date_caps: "SAVE THE DATE",
          getting_married: "We are getting married!",
          wedding_venue: "WEDDING VENUE",
          location: "Salayish the Grand Hotel, Mizan Aman",
          ceremony: "Ceremony",
          reception: "Reception",
          rsvp_now: "RSVP NOW",
          time_remaining: "TIME REMAINING UNTIL THE BIG DAY",
          days: "DAYS",
          hours: "HOURS",
          minutes: "MINUTES",
          seconds: "SECONDS",
          bridal_procession: "BRIDAL PROCESSION",
          brides_house: "Bride's House",
          get_directions: "GET DIRECTIONS",
          view_maps: "View on Google Maps",
          wedding_date: "17 May 2026",
          sunday: "Sunday",
          sunday_time: "Sunday, 13:00",
          wedding_program: "WEDDING PROGRAM",
          church: "Church Ceremony",
          procession: "Bridal Procession",
          arrival: "Arrival at Venue",
          lunch: "Lunch & Reception",
          photos: "Photo Session",
          cake: "Cake Cutting",
          invitation_title: "Wedding Invitation",
          invitation_message: "Together with great joy and heartfelt blessings, we warmly invite you to celebrate the wedding ceremony of **Ato Henok & W/ro Yabsira** as they begin their beautiful journey of love and lifelong commitment.\n\nPlease honor us with your presence on **Sunday, May 17, 2026**.\n\nYour presence will make our special day even more meaningful and memorable.",
          waiting_message: "Thank you for being part of our story!",
          grooms_house: "To the Groom's House"
        }
      },
      am: {
        translation: {
          tap_to_open: "ለመክፈት ይንኩ",
          save_the_date_caps: "ቀኑን ይያዙ",
          getting_married: "እየተጋባን ነው!",
          wedding_venue: "የሰርግ ቦታ",
          location: "ሳላይሽ ግራንድ ሆቴል፣ ሚዛን አማን",
          ceremony: "ምሳ",
          reception: "ምሳ",
          rsvp_now: "አሁኑኑ ይመዝገቡ",
          time_remaining: "ለታላቁ ቀን የቀረው ጊዜ",
          days: "ቀናት",
          hours: "ሰዓታት",
          minutes: "ደቂቃዎች",
          seconds: "ሰከንዶች",
          bridal_procession: "የሙሽራ ስነ-ስርዓት",
          brides_house: "የሙሽሪት ቤት",
          get_directions: "አቅጣጫ ያግኙ",
          view_maps: "በጉግል ካርታ ይመልከቱ",
          wedding_date: "ግንቦት 9 2018",
          sunday: "እሁድ",
          sunday_time: "እሁድ፣ 7:00 ሰዓት",
          wedding_program: "የሠርግ ፕሮግራም",
          church: "የቤተክርስቲያን ስነስርዓት",
          procession: "የሙሽራ ስነ-ስርዓት",
          arrival: "አዳራሽ መድረሻ",
          lunch: "ምሳ",
          photos: "ፎቶ ስነ-ስርዓት",
          cake: "ኬክ መቁረስ",
          invitation_title: "የክብር ጥሪ",
          invitation_message: "የማክበር ሰላምታችንን እያቀረብን የልጃችን የአቶ ሄኖክ እና የወ/ሪት ያብስራ የጋብቻ ስነስርዓት የሚፈጸመው እሁድ ግንቦት 9 ቀን 2018 ዓ.ም ስለሆነ በዚሁ ዕለት እንዲገኙልን በማክበር ጠርተንዎታል።",
          waiting_message: "ስለምትመጡ እናመሰግናለን!",
          grooms_house: "ወደ ሙሽራው ቤት"
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
