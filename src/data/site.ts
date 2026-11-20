// Facts: veon/client.json (C-xxx). Nothing here is invented; rows without a price in the facts carry no price.
export const phone = { tel: "+380676577999", label: "+38 067 657 79 99" }; // C-102 contacts, primary number
export const phones = [
  { tel: "+380676577999", label: "+38 067 657 79 99" },
  { tel: "+380976577999", label: "+38 097 657 79 99", note: "ANTI-AGE & ESTETIC · вул. Сахарова, 80А" }, // C-126
  { tel: "+380689221508", label: "+38 068 922 15 08" },
  { tel: "+380322400813", label: "+38 032 240 08 13" },
];
export const telegram = "https://t.me/+380676577999";
export const email = "centr.novoderm@gmail.com";
export const address = { line: "вул. Академіка Андрія Сахарова, 82", city: "Львів" }; // індекс не вказано: K-008 (79026 / 79000) — уточнити в клієнта
export const mapUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Львів, вул. Академіка Андрія Сахарова, 82");
export const hours = [
  { days: "Пн–пт", time: "9:00–19:00" },
  { days: "Сб", time: "9:00–17:00" },
  { days: "Нд", time: "вихідний" },
]; // C-104
export const socials = {
  instagram: "https://www.instagram.com/centr.novoderm/",
  facebook: "https://www.facebook.com/centr.novoderm/",
};
export const docUa = "https://doc.ua/ua/klinika/lviv/medichnij-centr-novoderm"; // C-004

export interface Request { q: string; area: string; method: string; price?: string; unit?: string; text: string; }
export const requests: Request[] = [
  { q: "Змінилась родимка", area: "Дерматоонкологія", method: "Цифрова дерматоскопія FotoFinder", price: "3 400", unit: "картування тіла",
    text: "Консультація дерматоонколога та картування всього тіла на FotoFinder. Дерматоскопія 1–3 новоутворень — +500 грн до консультації. Видалення новоутворень шкіри — після огляду лікаря." }, // C-106
  { q: "Висипання й акне", area: "Дерматологія", method: "Консультація дерматолога, лікування акне", price: "1 100", unit: "первинна консультація",
    text: "Первинна консультація дерматолога — 1 100 грн (кандидат медичних наук — 1 300 грн), повторна — 900 грн." }, // C-105
  { q: "Випадає волосся", area: "Трихологія", method: "Консультація трихолога", text: "Прийом трихологів центру. Вартість уточнюйте за телефоном." },
  { q: "Зморшки і тонус", area: "Косметологія та естетична медицина", method: "Ботулінотерапія, RF-ліфтинг, біоревіталізація", price: "200", unit: "ботулінотерапія, за одиницю",
    text: "Ботулінотерапія — 200 грн за одиницю, міжбрів'я — 3 100 грн, Full Face — 14 000–18 000 грн. Також RF-ліфтинг, мезотерапія, контурна пластика, плазмоліфтинг." }, // C-108
  { q: "Небажане волосся", area: "Лазерна косметологія", method: "Лазерна епіляція DEKA Motus AX", price: "від 300", unit: "за зону",
    text: "Лазерна епіляція на апараті DEKA Motus AX — від 300 грн за зону." }, // C-107
  { q: "Рубці та розтяжки", area: "Косметологія", method: "Видалення рубців і розтяжок", text: "Видалення рубців і розтяжок. Метод і вартість визначає лікар на консультації." },
  { q: "Нігті й стопи", area: "Подологія", method: "Прийом подологів", text: "Прийом подологів центру. Вартість уточнюйте за телефоном." },
  { q: "Делікатне жіноче питання", area: "Гінекологія, зокрема естетична", method: "Консультація гінеколога", text: "Прийом акушера-гінеколога. Вартість уточнюйте за телефоном." },
  { q: "Підвищена пітливість", area: "Дерматологія", method: "Лікування гіпергідрозу", text: "Лікування гіпергідрозу. Метод і вартість визначає лікар на консультації." },
];

export interface Doctor { name: string; role: string; exp?: string; img: string; w: number; h: number; }
// Source: the clinic's own specialists page (names, roles, photos); not part of client.json — flagged in the report.
export const doctors: Doctor[] = [
  { name: "Сліпецький Роман Ростиславович", role: "Хірург, хірург-онколог вищої категорії", exp: "понад 15 років досвіду", img: "slipetskyi-640", w: 640, h: 643 },
  { name: "Висоцький Антон Анатолійович", role: "Кандидат медичних наук, лікар-хірург вищої категорії", exp: "понад 16 років досвіду", img: "vysotskyi-640", w: 640, h: 771 },
  { name: "Кулик Марта Юріївна", role: "Дерматолог, дерматоонколог", exp: "13 років досвіду", img: "kulyk-500", w: 500, h: 500 },
  { name: "Шуліпа Ірина Вадимівна", role: "Кандидат медичних наук, дерматолог, дерматовенеролог", exp: "понад 40 років досвіду", img: "shulipa-640", w: 640, h: 662 },
  { name: "Петрушко Ірина Костянтинівна", role: "Дерматовенеролог, дерматолог-міколог", exp: "25 років досвіду", img: "petrushko-500", w: 500, h: 500 },
  { name: "Маргарян Єрванд Арзуманович", role: "Трихолог-трансплантолог", exp: "13 років досвіду", img: "marharian-640", w: 640, h: 730 },
];

export const brands = ["PCA skin", "ZO Skin Health", "Environ", "Gehwol", "Nanogen", "Inkarami"]; // C-111
export const devices = ["FotoFinder", "DEKA Motus AX", "QuadroStarPro Yellow", "Endolift", "Robolex Plus", "Aquapure", "BTL EmSella", "Bi-One"]; // C-113
