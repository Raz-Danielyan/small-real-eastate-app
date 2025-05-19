import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Home: "Home",
      About: "About",
      Properties: "Properties",
      Comments: "Comments",
      Blog: "Blog",
      Contact: "Contact",
      "Contact Us": "Contact Us",
      banner: `We build what others just imagine`,
      company: "company",
      year: "Founded in 2018",
      "about-1": `To date, it carries out large-scale construction activities, including the construction of water supply and sewerage systems, the construction of residential and public buildings, asphalting, modernization, repair services and external cladding.`,
      "about-2": `Our mission is to create a comfortable, safe and aesthetic environment
for people.
Vision: To become one of the industry leaders by implementing new standards
based on quality and trust.
Our team consists of professionals with excellent experience and
dedication.`,
      more: "More About Us",
      "label-1": "Modern\nProperties",
      "label-2": "Client\nSatisfaction",
      "label-3": "Years of\nExperience",
      "label-4": "Award\nWinning",
      find: "Discover our offered",
      construction: " construction",
      services: "services",
      all: "all parts",
      "est-1": "Architectural design",
      "est-descr": `We offer architectural design services, ensuring quality and timely implementation. We work with our clients to achieve their vision.`,
      "est-2": "Construction works (residential and commercial)",
      "est-2-descr": `We carry out high-quality construction works for residential and commercial premises, ensuring timely delivery and compliance with technical requirements.`,
      "est-3": "Interior design and planning",
      "est-3-descr": `We create functional and stylish interiors tailored to your taste, space dimensions, and modern design solutions.`,
      "est-4": "Complete renovation and modernization",
      "est-4-descr": `We carry out complete renovation and modernization of premises, from solving technical problems to updating the design.`,
      "est-5": "Technical consulting and engineering solutions",
      "est-5-descr": `We provide engineering and technical consulting, including structural solutions, communication systems, and project analysis.`,
      "home-title": "We will create your structure with",
      "home-title-1": "unique preferences",
      "home-descr": `A thorough study of the selected spaces offers solutions tailored to your lifestyle and individual requirements, ensuring that the most suitable and appropriate property is selected for you.`,
      "home-1": "Gulf gas station",
      "home-2": "Luxury House",
      "home-3": "Multistory building",
      "t-1": "Clients speak volumes",
      "t-2": "about us",
      "t-3": `Listen to the stories of our satisfied clients, sharing their experiences and successes with our exceptional real estate services.`,
      businessman: "Businessman",
      designer: "Designer",
      constructor: "Contractor",
      "als-descr":
        "A&D Construction made our dream house. Great work, attentive team, and flawless result.",
      "als-descr-1":
        "The construction process was clear and organized. Thank you for the professional approach.",
      "als-descr-2":
        "Always on time, always with quality. Working with A&D was a real pleasure.",
      "als-descr-3":
        "From start to finish, reliability, honesty, and excellent performance. I recommend it to everyone.",
      "als-descr-4":
        "My business space was transformed into a modern and functional environment thanks to A&D.",
      "als-descr-5":
        "Thanks to A&D Construction, I had no worries. Everything was done skillfully and qualitatively.",
      "n-1": " Lets build",
      "n-2": "your property",
      "n-3": "today",
      "n-descr": `Discover the perfect property tailored to your needs and preferences with our expert guidance.`,
      "f-descr": ` We are your personal real estate navigator, guiding you to your dream property with expert advice.`,
      Links: "Links",
      Information: "Information",
    },
  },
  hy: {
    translation: {
      Home: "Գլխավոր",
      About: "Մեր մասին",
      Properties: "Գույք",
      Blog: "Բլոգ",
      Contact: "Կապ",
      "Contact Us": "Կապ մեզ հետ",
      banner: `Մենք կառուցում ենք այն, ինչ ուրիշները պարզապես պատկերացնում
              են`,
      Comments: " Մեկնաբանություններ",
      company: "ընկերությունը",
      year: "2018թ.-ին հիմնադրվել է",
      "about-1": `Մինչ օրս իրականացնում է լայնածավալ շինարարական գործունեություն՝ ներառյալ ջրագծերի և կոյուղու համակարգերի կառուցում, բնակելի և հասարակական շենքերի շինարարություն, ասֆալտապատում, արդիականացում, վերանորոգման ծառայություններ և արտաքին երեսպատում։`,
      "about-2": `Մեր առաքելությունն է՝ ստեղծել հարմարավետ, անվտանգ և գեղագիտական միջավայր
մարդկանց համար։
Տեսլական՝ դառնալ ոլորտի առաջատարներից մեկը՝ վեր հանելով նոր ստանդարտներ
որակի և վստահության հիման վրա։
Մեր թիմը կազմված է պրոֆեսիոնալներից, ովքեր ունեն բարձրակարգ փորձ ու
նվիրվածություն։`,
      more: "Մանրամասն մեր մասին",
      "label-1": "Ժամանակակից\nԳույք",
      "label-2": "Հաճախորդի\n բավարարվածություն",
      "label-3": "Տարիների\nփորձ",
      "label-4": "Պարգև\nհաղթած",
      find: " Բացահայտեք մեր առաջարկած",
      construction: " շինարարական",
      services: "ծառայությունների",
      all: "ողջ տեսականին",
      "est-1": "Ճարտարապետական նախագծում",
      "est-descr": `Մենք առաջարկում ենք ճարտարապետական նախագծման ծառայություններ՝ ապահովելով որակյալ և ժամանակին իրականացում։ Մենք աշխատում ենք մեր հաճախորդների հետ, որպեսզի հասնենք նրանց տեսլականի իրականացմանը։`,
      "est-2": "Շինարարական աշխատանքներ (բնակելի և կոմերցիոն)",
      "est-2-descr": ` Իրականացնում ենք բարձրորակ շինարարական աշխատանքներ՝ բնակելի և կոմերցիոն տարածքների համար՝ ապահովելով ժամանակին հանձնում և տեխնիկական պահանջների պահպանում։`,
      "est-3": "Ինտերիերի դիզայն և պլանավորում",
      "est-3-descr": ` Ստեղծում ենք ֆունկցիոնալ և ոճային ինտերիերներ՝ համապատասխանեցված ձեր ճաշակին, տարածքի չափերին և ժամանակակից դիզայնի լուծումներին։`,
      "est-4": " Ամբողջական վերանորոգում և արդիականացում",
      "est-4-descr": `Կատարում ենք տարածքների ամբողջական վերանորոգում և արդիականացում՝ տեխնիկական խնդիրների լուծումից մինչև դիզայնի թարմացում։`,
      "est-5": "Տեխնիկական խորհրդատվություն և ինժեներական լուծումներ",
      "est-5-descr": ` Մատակարարում ենք ինժեներական և տեխնիկական խորհրդատվություն՝ ներառյալ կառուցվածքային լուծումներ, կոմունիկացիոն համակարգեր և նախագծային վերլուծություն։`,
      "home-title": "Պատրաստ ենք նախագծել ձեր կառույցը՝",
      "home-title-1": "ըստ ձեր նախասիրությունների։",
      "home-descr": `Ուշադրությամբ ընտրված տարածքների ուսումնասիրությունն առաջարկում է լուծումներ, որոնք համապատասխանեցված են ձեր կյանքի ոճին և անհատական պահանջներին՝ ապահովելով ձեզ համար առավել համապատասխան և հարմար գույքի ընտրություն։`,
      "home-1": "Գալֆ գազալցակայան",
      "home-2": "Լյուքս տուն",
      "home-3": "Բազմահարկանի կառույց",
      "t-1": "Հաճախորդները խոսում են",
      "t-2": "բարձր գնահատականներով",
      "t-3": `Լսեք մեր գոհ հաճախորդների պատմությունները, որոնք կիսվում են իրենց փորձով և հաջողություններով մեր բացառիկ անշարժ գույքի ծառայությունների հետ։`,
      businessman: `Բիզնեսմեն`,
      deesigner: `Դիզայներ`,
      constructor: `Շինարար`,
      "als-descr":
        "A&D Construction-ը կատարեց մեր երազանքների տունը։ Հոյակապ աշխատանք, ուշադիր թիմ և անթերի արդյունք։",
      "als-descr-1":
        "Շինարարական պրոցեսը հստակ և կազմակերպված էր։ Շնորհակալ եմ պրոֆեսիոնալ մոտեցման համար։",
      "als-descr-2":
        "Միշտ ժամանակին, միշտ որակով։ A&D-ի հետ աշխատելն իսկական հաճույք էր։",
      "als-descr-3":
        "Սկզբից մինչեւ վերջ՝ վստահելիություն, ազնվություն եւ գերազանց կատարում։ Խորհուրդ եմ տալիս բոլորին։",
      "als-descr-4":
        "Իմ բիզնեսի տարածքը վերածվեց ժամանակակից և ֆունկցիոնալ միջավայրի՝ շնորհիվ A&D-ի։",
      "als-descr-5":
        "A&D Construction-ի շնորհիվ ես չունեցա որևէ անհանգստություն։ Ամեն ինչ արված էր գրագետ և որակյալ։",
      "n-1": " Եկեք կառուցենք",
      "n-2": "ձեր գույքը",
      "n-3": "այսօր",
      "n-descr": ` Բացահայտեք ձեր կարիքներին և նախասիրություններին համապատասխանող կատարյալ գույքը մեր մասնագիտական ուղեցույցով։`,
      "f-descr": ` Մենք ձեր անձնական անշարժ գույքի նավապետն ենք, որը ձեզ առաջնորդում է ձեր երազանքների գույքը գտնելու համար՝ մասնագիտական խորհրդատվությամբ։`,
      Links: "Հղումներ",
      Information: "Տեղեկատվություն",
    },
  },
  ru: {
    translation: {
      Home: "Главная",
      About: "О нас",
      Properties: "Недвижимость",
      Contact: "Контакт",
      Blog: "Блог",
      Comments: "Комментарии",
      "Contact Us": "Связаться с нами",
      banner: `Мы строим то, что другие просто представляют`,
      company: "компания",
      year: "Основана в 2018 году",
      "about-1": `На сегодняшний день осуществляет широкомасштабную строительную деятельность, включая строительство водопроводных и канализационных систем, строительство жилых и общественных зданий, асфальтирование, модернизацию, услуги по ремонту и внешней отделке.`,
      "about-2": `Наша миссия-создать комфортную, безопасную и эстетичную среду
для людей.
Видение: стать одним из лидеров отрасли, внедряя новые стандарты
на основе качества и доверия.
Наша команда состоит из профессионалов, обладающих превосходным опытом и
преданность.`,
      more: "Подробнее о нас",
      "label-1": "Современная\nНедвижимость",
      "label-2": "Удовлетворение\nклиентов",
      "label-3": "Годы\nопыта",
      "label-4": "Награда\nвыигрына",
      find: "Откройте для себя наши предлагаемые",
      construction: " строительные",
      services: "услуги",
      all: "все части",
      "est-1": "Архитектурный дизайн",
      "est-descr": `Мы предлагаем услуги архитектурного проектирования, обеспечивая качество и своевременное выполнение. Мы работаем с нашими клиентами, чтобы достичь их видения.`,
      "est-2": "Строительные работы (жилые и коммерческие)",
      "est-2-descr": `Мы проводим качественные строительные работы для жилых и коммерческих помещений, обеспечивая своевременную доставку и соблюдение технических требований.`,
      "est-3": "Дизайн интерьеров и планировка",
      "est-3-descr": `Мы создаем функциональные и стильные интерьеры, адаптированные к вашему вкусу, размерам помещения и современным дизайнерским решениям.`,
      "est-4": "Полный ремонт и модернизация",
      "est-4-descr": `Мы проводим полный ремонт и модернизацию помещений, от решения технических проблем до обновления дизайна.`,
      "est-5": "Техническое консультирование и инженерные решения",
      "est-5-descr": `Мы предоставляем инженерные и технические консультации, включая структурные решения, коммуникационные системы и анализ проектов.`,
      "home-title": "Мы создадим вашу структуру с",
      "home-title-1": "уникальными предпочтениями",
      "home-descr": ` Тщательное изучение выбранных пространств предлагает решения, соответствующие вашему стилю жизни и индивидуальным требованиям, обеспечивая выбор наиболее подходящей и подходящей недвижимости для вас.`,
      "home-1": "Галф автозаправочная станция",
      "home-2": "Роскошный дом",
      "home-3": "Многоэтажное здание",
      "t-1": "Клиенты говорят о нас",
      "t-2": "с восторгом",
      "t-3": `Слушайте истории наших довольных клиентов, делящихся своим опытом и успехами с нашими исключительными услугами в сфере недвижимости.`,
      businessman: "Бизнесмен",
      deesigner: "Дизайнер",
      constructor: "Подрядчик",
      "als-descr":
        "A&D Construction сделала наш дом мечты. Отличная работа, внимательная команда и безупречный результат.",
      "als-descr-1":
        "Строительный процесс был четким и организованным. Спасибо за профессиональный подход.",
      "als-descr-2":
        "Всегда вовремя, всегда качественно. Работать с A&D было настоящим удовольствием.",
      "als-descr-3":
        "От начала до конца надежность, честность и отличное исполнение. Я рекомендую всем.",
      "als-descr-4":
        "Мое бизнес-пространство было преобразовано в современную и функциональную среду благодаря A&D.",
      "als-descr-5":
        "Благодаря A&D Construction у меня не было никаких забот. Все было сделано квалифицированно и качественно.",
      "n-1": "Давайте построим",
      "n-2": "вашу собственность",
      "n-3": "сегодня",
      "f-descr": ` Мы ваш личный навигатор по недвижимости, который направляет вас к поиску вашей мечты с профессиональной консультацией.`,
      "n-descr": ` Исследуйте отобранный выбор мест, разработанных с учетом ваших уникальных предпочтений, что облегчает поиск идеальной недвижимости, которая идеально соответствует вашему образу жизни и потребностям.`,
      Links: "Ссылки",
      Information: "Информация",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "hy", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
