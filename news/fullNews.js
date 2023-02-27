let newsList = [
    {
        mainImage: "./news/1/mainImage.jpg",
        text: '"Har bir inson hurmatga loyiq" mavzusida ochiq dars tashkil etildi',
        date: '19.12.2022' 
    },
    {
        mainImage: "./news/2/mainImage.jpg",
        text: ' "Qizlar odobi oila faravonligi"mavzusida davra suhbati o\'tkazildi',
        date: '19.12.2022' 
    },
    {
        mainImage: "./news/3/mainImage.jpg",
        text: 'Zarafshon shahar 4-sektorda uch avlod uchrashuvi o\'tkazildi',
        date: '19.12.2022' 
    },
    {
        mainImage: "./news/4/mainImage.jpg",
        text: '\"Oʻzbekiston Respublikasida qonun chiqaruvchi organ\" ochiq darsi tashkil qilindi.',
        date: '19.12.2022' 
    },
    {
        mainImage: "./news/5/mainImage.jpg",
        text: '\"VIII asrda Xuroson va Movarounnahr\" mavzusida ochiq dars tashkil qilindi.',
        date: '19.12.2022' 
    },
    {
        mainImage: "./news/6/mainImage.jpg",
        text: '\"Tafakkur gulshani\"deb nomlangan tadbir tashkil etildi',
        date: '19.12.2022' 
    },
    {
        mainImage: "./news/7/mainImage.jpg",
        text: 'Konstitutsiyamiz qabul qilinganligining 30 yilligi keng nishonlandi',
        date: '19.12.2022' 
    },
    {
        mainImage: "./news/8/mainImage.jpg",
        text: 'Zamonaviy metodlardan foydalangan holda ochiq dars tashkil qilindi',
        date: '21.12.2022' 
    },
    {
        mainImage: "./news/9/mainImage.jpg",
        text: 'Abu Rayxon Beruniy haftaligi doirasida Ijodiy-madaniy masalalar bo‘yicha davra suhbati o\'tkazildi',
        date: '16.02.2023' 
    },
    {
        mainImage: "./news/10/mainImage.jpg",
        text: 'Zahriddin Muhammad Bobur ijodiga bag\'ishlab "Zakovat" o\'yini tashkil qilindi',
        date: '16.02.2023' 
    },
    {
        mainImage: "./news/11/mainImage.jpg",
        text: 'Zahriddin Muhammad Bobur tavalludiga bag\'ishlab "Quvnoq startlar" o\'tkazildi',
        date: '16.02.2023' 
    },
    {
        mainImage: "./news/12/mainImage.jpg",
        text: 'Ichki ishlar vaziri o‘rinbosari 13-ixtisoslashtirilgan maktabda bo‘ldi',
        date: '16.02.2023' 
    }
    ,
    {
        mainImage: "./news/13/mainImage.jpg",
        text: 'S.Zunnunova tavalludining 97 yilligiga “Zakovat” intelektual o‘yini o‘tkazildi',
        date: '16.02.2023' 
    },
    {
        mainImage: "./news/14/mainImage.jpg",
        text: '4-sinf o\'quvchilari uchun maktab direktori bilan ma’naviyat darsi tashkil etildi',
        date: '17.02.2023' 
    },
    {
        mainImage: "./news/15/mainImage.jpg",
        text: 'Yoshlar jinoyatchiligiga qarshi targ‘ibot uchrashuvi tashkil etildi',
        date: '17.02.2023' 
    },
    {
        mainImage: "./news/16/mainImage.jpg",
        text: 'Abu Rayhon Beruniy haftaligi doirasida "Zakovat" intelektual õyini õtkazildi',
        date: '17.02.2023' 
    },
    {
        mainImage: "./news/17/mainImage.jpg",
        text: '"Matematika darslarida Beruniyni yod etib"mavzusida ochiq dars tashkil etildi',
        date: '18.02.2023' 
    },
    {
        mainImage: "./news/18/mainImage.jpg",
        text: 'Boburning tavalludiga “Qoldi andin yaxshilig‘” nomli tadbir tashkil etildi',
        date: '18.02.2023' 
    },
    {
        mainImage: "./news/19/mainImage.jpg",
        text: 'Zarafshon tumanlararo Iqtisodiy sudi raisi bilan davra suhbati uyushtirildi',
        date: '18.02.2023' 
    },
    {
        mainImage: "./news/20/mainImage.jpg",
        text: '"Sifatli ta\'lim – taraqqiyot kafolati" - Sherzod G\'ofurov',
        date: '19.02.2023' 
    }
]


let newPageObj = "";
let lengthOfArray = newsList.length;
for(let i=lengthOfArray-1; i>=0; i--){
    newPageObj = newPageObj + '<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s"><div class="service-item rounded h-100"><div class="mb-0"><div class="w-100 mb-4"><img src="'+newsList[i].mainImage+'" class="w-100"></div><h5 class="mb-0 mx-4 ">'+newsList[i].text+'</h5></div><a class="btn btn-light px-3 m-4" href="">Batafsil <i class="fa fa-angle-right"></i></a>'+newsList[i].date+'</div></div>';
}        

document.getElementById('newsFullBlock').innerHTML = newPageObj;

            
              
                
        