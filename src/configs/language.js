import { v4 as uuidv4 } from 'uuid';

export const NavLeng = {
        uz: {
            connection: "Kontaket",
            set: "Ijtimoiy tarmoqlar"
        },
        ru: {
            connection: "Контакт",
            set: "Социальный сети"
        },
        en: {
            connection: "Contact",
            set: "Social networks"
        }
}
export const HeaderLang = {  
    uz: {
        title: "Shaxsiy dacha",
        btn: "Ko'rish"
    },
    ru: {
        title: "Шейхская резиденция",
        btn: "Просмотреть"
    },
    en: {
        title: "Sheikh's residence",
        btn: "View"
    }    
}
export const PlaseLeng = {
    uz: "Dam olish maskanlari",
    ru: "Месты Отдыха",
    en: "Vacation Place"
}
export const RecamudetLeng = {
    uz: "Tavsiya etilgan",
    ru: "Рекомендуемые",
    en: "Recommended"
}
export const FilterLeng = {
    uz: {
        place: "Joylashuv",
        tip: "Dacha tipe",
        price: "Narxi"
    },
    ru: {
        place: "Расположение",
        tip: "Тип отдыха",
        price: "Цена"
    },
    en: {
        place: "Location",
        tip: "Cottage type",
        price: "Price"
    }
}
export const CottageLeng ={ 
    uz: {
        region: "viloyat",
        price: "Kunlin narx: ",
        weekendPrice: "Dam olish kunlari uchun narx: "
    },
    ru: {
        region: "область",
        price: "Цена За День: ",
        weekendPrice: "Цена За Выходной День: "
    },
    en: {
        region: "region",
        price: "Price per Day",
        weekendPrice: "Price per Weekend: "
    }
}
export const FooterLink1 = [
    {
        id: uuidv4(),
        content: {
            uz: "Ko'p so'raladigan savollar",
            ru:"Часто задаваемые вопросы",
            en:"FAQ"
        }
    },   
    {
        id: uuidv4(),
        content: {
            uz: "Bizning kontaktlarimiz",
            ru:"Наши контакты",
            en:"Our contacts"
        },
        to: "/"
    } 
]
export const FooterLink2 = [
    {
        id: uuidv4(),
        content: {
            uz: "Biz haqimizda",
            ru: "О нас",
            en: "About",
        },
         to: ""
    },{
        id: uuidv4(),
        content: {
            uz: "Foydalanish shartlari",
            ru: "Пользовательское соглашение",
            en: "Terms of use"
        },
        to: "/"
    },
    {
        id: uuidv4(),
        content: {
            uz: "Maxviylik siyosati",
            ru: "Политика конфиденциальности",
            en: "Privacy Policy"
        },
        to: "/"
    }
]
export const FooterLink3 = [
    {
        id: uuidv4(),
        content: {
            uz: "Dacha",
            ru: "Дачи",
            en: "Cottage"
        },
        to: "#dacha"
    },
    {
        id: uuidv4(),
        content: {
            uz: "Baliq ovlash joylari",
            ru: "Месты рыбалки",
            en: "Place Fishing"
        },
        to: "#place"
    },
    {
        id: uuidv4(),
        content: {
            uz: "Piknik joylari",
            ru: "Месты пикник",
            en: "PLace Picnic"
        },
        to: "#palce"
    }
]
export const FooterHeadLeng = {
    uz: {
        link1: "Qo'llab-quvvatlash",
        link2: "Kompaniya",
        link3: "Hamkorlik"
    },
    ru: {
        link1: "Поддержка",
        link2: "Компания",
        link3: "Cотрудничество"
    },
    en: {
        link1: "Support",
        link2: "Copany",
        link3: "Cooperation"
    }
}