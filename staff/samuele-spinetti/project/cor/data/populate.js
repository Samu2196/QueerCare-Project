import 'dotenv/config'
import mongoose from 'mongoose'
import { HealthCareProvider, Location, NewsArticle } from './models.js'

mongoose.connect(process.env.MONGODB_URI)
    .then(() => Promise.all([HealthCareProvider.deleteMany(), NewsArticle.deleteMany()]))
    .then(() => HealthCareProvider.create([
        { name: 'Hospital Clinic de Barcelona', image: 'https://lh5.googleusercontent.com/p/AF1QipMQiomAXhmZQulvgSqd7xBRbIrZaAidh4pcGYHh=w408-h544-k-no', street: 'C. de Villarroel, 170, L\'Eixample, 08036 Barcelona', phoneNumber: '932275400', webURL: 'http://www.clinicbarcelona.org/', openingHours: ['Open 24h'], tags: ['hospital', 'VIH', 'HIV', 'STD', 'ITS', 'ETS', 'gonorrea', 'sifilis', 'clamidia', 'papiloma', 'virus', 'herpes', 'prueba', 'rapida', 'test', 'checkpoint', 'siphilis', 'gonorrhea'], location: new Location({ coordinates: [41.3894225, 2.1496325] }) },
        { name: 'Hospital Universitari Vall d’Hebron', image: 'https://lh5.googleusercontent.com/p/AF1QipOLfLR92bgN7tpNVheiURCncuZRRrX_S5x5zt1G=w464-h240-k-no', street: 'Pg. de la Vall d\'Hebron, 119, Horta-Guinardó, 08035 Barcelona', phoneNumber: '934893000', webURL: 'https://hospital.vallhebron.com/', openingHours: ['Open 24h'], tags: ['hospital', 'VIH', 'HIV', 'STD', 'ITS', 'ETS', 'gonorrea', 'sifilis', 'clamidia', 'papiloma', 'virus', 'herpes', 'prueba', 'rapida', 'test', 'checkpoint', 'siphilis', 'gonorrhea'], location: new Location({ coordinates: [41.4282227, 2.1360522] }) },
        { name: 'Hospital de Sant Pau', image: 'https://lh5.googleusercontent.com/p/AF1QipM9KfO5CMofb6eSFqoogf4U1RaycvZTwBl916W5=w408-h306-k-no', street: 'C/ de Sant Quintí, 89, Horta-Guinardó, 08025 Barcelona', phoneNumber: '932919000', webURL: 'https://www.santpau.cat/', openingHours: ['Open 24h'], tags: ['hospital', 'VIH', 'HIV', 'STD', 'ITS', 'ETS', 'gonorrea', 'sifilis', 'clamidia', 'papiloma', 'virus', 'herpes', 'prueba', 'rapida', 'test', 'checkpoint', 'siphilis', 'gonorrhea'], location: new Location({ coordinates: [41.4137299, 2.1719927] }) },
        { name: 'Hospital Universitari General de Catalunya', image: 'https://lh5.googleusercontent.com/p/AF1QipMpWIoxDb-5vubQvFboHZ6xN2vclIql1wPNzrOk=w408-h306-k-no', street: 'Carrer de Pedro i Pons, 1, 08195 Sant Cugat del Vallès, Barcelona', phoneNumber: '935656000', webURL: 'http://www.hgc.es/es/cartera-servicios/cardiologia', openingHours: ['Open 24h'], tags: ['hospital', 'VIH', 'HIV', 'STD', 'ITS', 'ETS', 'gonorrea', 'sifilis', 'clamidia', 'papiloma', 'virus', 'herpes', 'prueba', 'rapida', 'test', 'checkpoint', 'siphilis', 'gonorrhea'], location: new Location({ coordinates: [41.4750551, 2.0393329] }) },
        { name: 'Hospital del Mar', image: 'https://lh5.googleusercontent.com/p/AF1QipN8mDSQlzcfRb3LLAwZSeAAGliWvwnvRmx__kee=w408-h544-k-no', street: 'Pg. Marítim de la Barceloneta, 25, 29, Ciutat Vella, 08003 Barcelona', phoneNumber: '932483000', webURL: 'https://www.parcdesalutmar.cat/', openingHours: ['Open 24h'], tags: ['hospital', 'VIH', 'HIV', 'STD', 'ITS', 'ETS', 'gonorrea', 'sifilis', 'clamidia', 'papiloma', 'virus', 'herpes', 'prueba', 'rapida', 'test', 'checkpoint', 'siphilis', 'gonorrhea'], location: new Location({ coordinates: [41.3844358, 2.1908609] }) },
        { name: 'Hospital Universitario de Bellvitge', image: 'https://lh5.googleusercontent.com/p/AF1QipO0Lfqj4HOztRvOJcfjGZkxe7MJGpXcxe7dUPjA=w427-h240-k-no', street: 'Carrer de la Feixa Llarga, s/n, 08907 L\'Hospitalet de Llobregat, Barcelona', phoneNumber: '932607500', webURL: 'http://www.bellvitgehospital.cat/', openingHours: ['Open 24h'], tags: ['hospital', 'VIH', 'HIV', 'STD', 'ITS', 'ETS', 'gonorrea', 'sifilis', 'clamidia', 'papiloma', 'virus', 'herpes', 'prueba', 'rapida', 'test', 'checkpoint', 'siphilis', 'gonorrhea'], location: new Location({ coordinates: [41.3447701, 2.101657] }) },
        { name: 'Hospital Universitario Hermanos Trias y Pujol', image: 'https://lh5.googleusercontent.com/p/AF1QipMJ_79tm2UDI6OfUJ4IB40W4HZNQ8Zfez7zENs1=w408-h306-k-no', street: 'Carretera de Canyet, s/n, 08916 Badalona, Barcelona', phoneNumber: '934651200', webURL: 'http://germanstriashospital.cat/', openingHours: ['Open 24h'], tags: ['hospital', 'VIH', 'HIV', 'STD', 'ITS', 'ETS', 'gonorrea', 'sifilis', 'clamidia', 'papiloma', 'virus', 'herpes', 'prueba', 'rapida', 'test', 'checkpoint', 'siphilis', 'gonorrhea'], location: new Location({ coordinates: [41.481187, 2.2375473] }) },
        { name: 'BCN Checkpoint', image: 'https://lh5.googleusercontent.com/p/AF1QipNTPCTuCfBf1yiDARH_8HjQ9dcdUTgRNIhNKcbr=w408-h306-k-no', street: 'C/ del Comte Borrell, 164, 166, L\'Eixample, 08015 Barcelona', phoneNumber: '933182056', webURL: 'http://www.bcncheckpoint.com/', openingHours: ['Mon: 7:30-20:30', 'Tue: 7:30-20:30', 'Wed: 7:30-20:30', 'Thu: 7:30-20:30', 'Fri: 7:30-20:30', 'Sat: Closed', 'Sun: Closed'], tags: ['ong', 'ngo', 'VIH', 'HIV', 'STD', 'ITS', 'ETS', 'gonorrea', 'sifilis', 'clamidia', 'papiloma', 'virus', 'herpes', 'prueba', 'rapida', 'test', 'support', 'checkpoint', 'siphilis', 'gonorrhea'], location: new Location({ coordinates: [41.3836312, 2.1519504] }) },
        { name: 'BCN PrEP-Point', image: 'https://lh5.googleusercontent.com/p/AF1QipNHl4OJKqmjNRAixL7NPVuSPfjX-4OJbXkWBEj4=w408-h544-k-no', street: 'C/ del Comte Borrell, 168, L\'Eixample, 08015 Barcelona', phoneNumber: '933182056', webURL: 'http://www.bcncheckpoint.com/', openingHours: ['Mon: 7:30-20:30', 'Tue: 7:30-20:30', 'Wed: 7:30-20:30', 'Thu: 7:30-20:30', 'Fri: 7:30-20:30', 'Sat: Closed', 'Sun: Closed'], tags: ['prep', 'ong', 'ngo', 'VIH', 'HIV', 'STD', 'ITS', 'ETS', 'gonorrea', 'sifilis', 'clamidia', 'papiloma', 'virus', 'herpes', 'prueba', 'rapida', 'test', 'support', 'checkpoint', 'siphilis', 'gonorrhea'], location: new Location({ coordinates: [41.3836311, 2.1543747] }) },
        { name: 'ONG Stop', image: 'https://lh5.googleusercontent.com/p/AF1QipNUbRP_zaek0wH7wJQd0Uo7qpVpkoF5CtWVJr_-=w408-h725-k-no', street: 'C/ del Consell de Cent, 295, 4ª 1ª, Eixample, 08007 Barcelona', phoneNumber: '934522435', webURL: 'https://stopsida.org/', openingHours: ['Mon: 16:00-19:30', 'Tue: 10:00-14:00 / 16:00-19:30', 'Wed: 10:00-14:00 / 16:00-19:30', 'Thu: 10:00-14:00 / 16:00-19:30', 'Fri: 10:00-14:00', 'Sat: Closed', 'Sun: Closed'], tags: ['ong', 'ngo', 'VIH', 'HIV', 'STD', 'ITS', 'ETS', 'gonorrea', 'sifilis', 'clamidia', 'papiloma', 'virus', 'herpes', 'prueba', 'rapida', 'test', 'support', 'checkpoint', 'siphilis', 'gonorrhea'], location: new Location({ coordinates: [41.3887176, 2.1595069] }) },
        { name: 'Gais Positius', image: 'https://lh5.googleusercontent.com/p/AF1QipOQfgzum7Bzls7Jqxgr690dHizV1MF3Ml2UBXiq=w452-h240-k-no', street: 'C/ del Comte Borrell, 22, L\'Eixample, 08015 Barcelona', phoneNumber: '932980642', webURL: 'http://gaispositius.org/es/', openingHours: ['Mon: 10:00-15:00', 'Tue: 10:00-15:00', 'Wed: 10:00-15:00', 'Thu: 10:00-15:00', 'Fri: Closed', 'Sat: Closed', 'Sun: Closed'], tags: ['ong', 'ngo', 'VIH', 'HIV', 'STD', 'ITS', 'ETS', 'gonorrea', 'sifilis', 'clamidia', 'papiloma', 'virus', 'herpes', 'prueba', 'rapida', 'test', 'support', 'checkpoint', 'siphilis', 'gonorrhea'], location: new Location({ coordinates: [41.3764951, 2.1613867] }) },
        { name: 'ACATHI', image: 'https://lh5.googleusercontent.com/p/AF1QipMWHD9K4srx1PwBCrOo_IeHlddZhRqE0WIEwlYD=w408-h544-k-no', street: 'C/ de Muntaner, 34, entresuelo, L\'Eixample, 08011 Barcelona', phoneNumber: '931931353', webURL: 'http://www.acathi.org/', openingHours: ['Mon: 10:00-14:00 / 16:00-19:00', 'Tue: 10:00-14:00 / 16:00-19:00', 'Wed: 10:00-14:00 / 16:00-19:00', 'Thu: 10:00-14:00 / 16:00-19:00', 'Fri: 10:00-14:00 / 16:00-20:30', 'Sat: Closed', 'Sun: Closed'], tags: ['ong', 'ngo', 'VIH', 'HIV', 'STD', 'ITS', 'ETS', 'gonorrea', 'sifilis', 'clamidia', 'papiloma', 'virus', 'herpes', 'prueba', 'rapida', 'test', 'support', 'checkpoint', 'siphilis', 'gonorrhea'], location: new Location({ coordinates: [41.385497, 2.1609086] }) },
        { name: 'Dressanes Express', image: 'https://lh5.googleusercontent.com/p/AF1QipOnmnz_TkZbOTeuSmRDSekG_Ja6fU2JR7tK3ELA=w408-h306-k-no', street: 'Carrer de Sant Oleguer, 17, Ciutat Vella, 08001 Barcelona', phoneNumber: '934894408', webURL: 'https://hospital.vallhebron.com/assistencia/especialitats/drassanes-expres', openingHours: ['Mon: 08:00-19:00', 'Tue: 08:00-19:00', 'Wed: 08:00-19:00', 'Thu: 08:00-19:00', 'Fri: 08:00-19:00', 'Sat: Closed', 'Sun: Closed'], tags: ['hospital', 'VIH', 'HIV', 'STD', 'ITS', 'ETS', 'gonorrea', 'sifilis', 'clamidia', 'papiloma', 'virus', 'herpes', 'prueba', 'rapida', 'test', 'support', 'checkpoint', 'siphilis', 'gonorrhea'], location: new Location({ coordinates: [41.3772832, 2.1694405] }) }
    ]))
    .then(() => NewsArticle.create([
        { title: 'Women are using dating apps to discover their queer sexuality', urlToImage: 'https://helios-i.mashable.com/imagery/articles/01bHBrpoQHnFU7IMV26Fu5n/hero-image.fill.size_1248x702.v1723053133.jpg', description: 'During COVID lockdown in 2020 and 2021, Emma, now a 28-year-old in Cambridge, Massachusetts, discovered something unexpected on TikTok. Suddenly, her For You Page was full of content that would lead her to challenge her own identity: Cool lesbians. Emma, who chose to go by her first-name only for privacy reasons, had not allowed herself to engage with the part of her that desired women, though she always knew it was there, deep down.', url: 'https://mashable.com/article/women-are-using-dating-apps-to-discover-their-queer-sexuality' },
        { title: 'How to Support LGBTQ Victims and Survivors of Sexual Violence', description: 'Supporting LGBTQ victims and survivors and being there for them as they navigate the complexities of life after trauma is a crucial aspect of collective healing. Whether you are part of the LGBTQ community or not, it remains vital to provide a safe and empathetic space for those whose paths may diverge from your own. Learn about ways to show your support for survivors within the LGBTQ community below.', url: 'https://www.thetrevorproject.org/resources/guide/how-to-support-lgbtq-survivors-of-sexual-violence/' },
        { title: 'More than 40% of LGBTQ youth said they considered suicide in the past year, CDC report finds', urlToImage: 'https://s.abcnews.com/images/Health/suicide-rates-up-gty-thg-230412_1681305528685_hpMain.jpg', description: 'Youth who identify as LGBTQ+ reported higher rates of poor mental health and experiencing suicidal thoughts and behaviors than their cisgender and heterosexual peers, a new U.S. survey found. In 2023, more than three in five LGBTQ+ -- lesbian, gay, bisexual, transgender, questioning or another non-heterosexual identity -- high school students said they experienced persistent feelings of sadness or hopelessness, and more than half reported having poor mental health, according to the latest results of the Youth Risk Behavior Survey, published Tuesday morning by the Centers for Disease Control and Prevention (CDC).', url: 'https://abcnews.go.com/Health/40-lgbtq-youth-considered-suicide-past-year-cdc/story?id=112604907' },
        { title: 'LGBTQ athletes take their marks on the track at the Paris Olympic Games', urlToImage: 'https://i.abcnewsfe.com/a/b94dac4a-dd08-4311-acde-4280fa2c095c/nikki-hiltz-gty-jef-240725_1721906109550_hpEmbed_3x2.jpg?w=750', description: 'This year\'s U.S. Olympic team has a star-studded cast of LGBTQ athletes headed to Paris. At least 29 competitors are prepared to take on the international games, according to a database compiled by LGBTQ news outlet OutSports. These athletes are just a handful of the LGBTQ representation to expect at the Olympic Games. OutSports recorded at least 151 LGBTQ athletes representing countries around the world that are set to take up the competition in Paris.', url: 'https://abcnews.go.com/US/lgbtq-athletes-marks-track-paris-olympic-games/story?id=112186456' },
        { title: 'Much lower HIV knowledge and access to testing for people with disabilities globally', urlToImage: 'https://www.aidsmap.com/sites/default/files/styles/aidsmap_medium_crop/public/2024-07/viiv-image.png?itok=b5rxqHon', description: 'A survey of over half a million people in low- and middle-income countries found that men and women with disabilities were 25% less likely to have comprehensive knowledge about HIV prevention compared to people without disabilities. They were also less likely to know a place to be tested for HIV. Additionally, women with disabilities were less likely to know how to prevent vertical transmission and to have ever been tested for HIV compared to women without disabilities.', url: 'https://www.aidsmap.com/news/jul-2024/much-lower-hiv-knowledge-and-access-testing-people-disabilities-globally' }
    ]))
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(error => console.error(error))