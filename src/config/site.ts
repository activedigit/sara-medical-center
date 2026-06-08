export const SITE = {
  url: 'https://saramedical.co.il',
  name: {
    ar: 'مركز سارة الطبي',
    he: 'מרכז שארה לרפואה דחופה',
    en: 'Sarah Medical Center',
  },
  shortName: {
    ar: 'مركز سارة',
    he: 'מרכז שארה',
    en: 'Sarah Center',
  },
  phone: {
    display: '04-884-8080',
    intl: '+97248848080',
    tel: 'tel:+97248848080',
  },
  whatsapp: {
    number: '97248848080',
    link: 'https://wa.me/97248848080',
  },
  email: 'info@saramedical.co.il',
  address: {
    ar: 'بناية بوابة المدينة، الطابق الأول، شارع القدس، أم الفحم',
    he: 'בניין שער העיר, קומה 1, רחוב אל-קודס, אום אל-פחם',
    en: 'City Gate Building, Floor 1, A-Kuds Street, Umm al-Fahm',
    street: 'A-Kuds Street, City Gate Building, Floor 1',
    locality: 'Umm al-Fahm',
    country: 'IL',
  },
  geo: {
    latitude: 32.532028,
    longitude: 35.1514998,
  },
  social: {
    facebook: 'https://www.facebook.com/SarahMCenter/',
  },
  hours: [
    { day: 'sun', label: 'sundayThursday', open: '08:00', close: '22:00' },
    { day: 'mon', label: 'sundayThursday', open: '08:00', close: '22:00' },
    { day: 'tue', label: 'sundayThursday', open: '08:00', close: '22:00' },
    { day: 'wed', label: 'sundayThursday', open: '08:00', close: '22:00' },
    { day: 'thu', label: 'sundayThursday', open: '08:00', close: '22:00' },
    { day: 'fri', label: 'friday', open: '08:00', close: '14:00' },
    { day: 'sat', label: 'saturday', open: '08:30', close: '18:00' },
  ] as const,
  defaultOgImage: '/og-image.jpg',
} as const;
