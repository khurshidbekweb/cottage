import { v4 as uuidv4 } from "uuid";

export const NavLeng = {
  uz: {
    connection: "Kontakt",
    set: "Ijtimoiy tarmoqlar",
  },
  ru: {
    connection: "Контакт",
    set: "Социальный сети",
  },
  en: {
    connection: "Contact",
    set: "Social networks",
  },
};

export const HeaderLang = {
  uz: {
    title: "Shaxsiy dacha",
    btn: "Ko'rish",
  },
  ru: {
    title: "Шейхская резиденция",
    btn: "Просмотреть",
  },
  en: {
    title: "Sheikh's residence",
    btn: "View",
  },
};

export const NavberLinks = {
  uz: {
    add: "E'lon qo'shish",
    cottage: "Mening dachalarim",
    profil: "Profil",
    services: "Xizmatlar",
    exit: "Chiqish",
  },
  ru: {
    add: "Подать объявление",
    cottage: "Мои объявлении",
    profil: "Профиль",
    services: "Услуги",
    exit: "Выход",
  },
  en: {
    add: "Post an add",
    cottage: "My ads",
    profil: "Profile",
    services: "Services",
    exit: "Exit",
  },
};

export const PlaseLeng = {
  uz: "Dam olish maskanlari",
  ru: "Месты Отдыха",
  en: "Vacation Place",
};
export const RecamudetLeng = {
  uz: "Tavsiya etilgan",
  ru: "Рекомендуемые",
  en: "Recommended",
};
// ============================== Filter language
export const FilterSectionLeng = {
  uz: "Filter bo'limi",
  ru: "Раздел Фильтр",
  en: "Filter section",
};
export const FilterLeng = {
  uz: {
    place: "Joylashuv",
    tip: "Dacha tipe",
    price: "Narxi",
  },
  ru: {
    place: "Расположение",
    tip: "Тип отдыха",
    price: "Цена",
  },
  en: {
    place: "Location",
    tip: "Cottage type",
    price: "Price",
  },
};

export const CottageLeng = {
  uz: {
    region: "viloyati",
    price: "Kunlin narx: ",
    weekendPrice: "Dam olish kunlari uchun narx: ",
    btn: "Ko'rish",
  },
  ru: {
    region: "область",
    price: "Цена За День: ",
    weekendPrice: "Цена За Выходной День: ",
    btn: "Подробное",
  },
  en: {
    region: "region",
    price: "Price per Day: ",
    weekendPrice: "Price per Weekend: ",
    btn: "View ",
  },
};
// =============================== Servises language
export const ProfileLeng = {
  uz: {
    text: "Profil",
    btn: "Saqlash",
  },
  ru: {
    text: "Профиль",
    btn: "Сохранить",
  },
  en: {
    text: "Profile",
    btn: "Save",
  },
};
// =============================== Footer language
export const FooterLink1 = [
  {
    id: uuidv4(),
    content: {
      uz: "Ko'p so'raladigan savollar",
      ru: "Часто задаваемые вопросы",
      en: "FAQ",
    },
  },
  {
    id: uuidv4(),
    content: {
      uz: "Bizning kontaktlarimiz",
      ru: "Наши контакты",
      en: "Our contacts",
    },
    to: "/",
  },
];
export const FooterLink2 = [
  {
    id: uuidv4(),
    content: {
      uz: "Biz haqimizda",
      ru: "О нас",
      en: "About",
    },
    to: "",
  },
  {
    id: uuidv4(),
    content: {
      uz: "Foydalanish shartlari",
      ru: "Пользовательское соглашение",
      en: "Terms of use",
    },
    to: "/",
  },
  {
    id: uuidv4(),
    content: {
      uz: "Maxviylik siyosati",
      ru: "Политика конфиденциальности",
      en: "Privacy Policy",
    },
    to: "/",
  },
];
export const FooterLink3 = [
  {
    id: uuidv4(),
    content: {
      uz: "Dacha",
      ru: "Дачи",
      en: "Cottage",
    },
    to: "#dacha",
  },
  {
    id: uuidv4(),
    content: {
      uz: "Baliq ovlash joylari",
      ru: "Месты рыбалки",
      en: "Place Fishing",
    },
    to: "#place",
  },
  {
    id: uuidv4(),
    content: {
      uz: "Piknik joylari",
      ru: "Месты пикник",
      en: "PLace Picnic",
    },
    to: "#palce",
  },
];

export const FooterHeadLeng = {
  uz: {
    link1: "Qo'llab-quvvatlash",
    link2: "Kompaniya",
    link3: "Hamkorlik",
  },
  ru: {
    link1: "Поддержка",
    link2: "Компания",
    link3: "Cотрудничество",
  },
  en: {
    link1: "Support",
    link2: "Copany",
    link3: "Cooperation",
  },
};

export const FooterMiniLang = {
  uz: "Toshkent, Amir Temur 7",
  ru: "Ташкент, Амир Tемура  7",
  en: "Tashkent, Amir Temur 7",
};

export const FilterNotFound = {
  uz: "Dacha topilmadi",
  ru: "Коттедж не найден",
  en: "Cottage not found",
};
