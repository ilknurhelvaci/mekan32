var express = require('express');
var router = express.Router();
const anaSayfa = function(req, res, next) {
  res.render('mekanlar-liste',
  {
      'baslik':'Anasayfa',
      'sayfaBaslik':{
         'siteAd':'Mekan32',
         'aciklama':'Isparta civarındaki mekanları keşfedin!'
      },
      'mekanlar':[
      {
       'ad':'Gloria Jeans',
       'adres':'Iyaş AVM',
       'puan':'5',
       'imkanlar':['kahveler','çay','pastalar'],
        'mesafe':'5km'
      },
      {
       'ad':'Starbucks',
       'adres':'Centrum Garden',
       'puan':'3',
       'imkanlar':['Dünya kahveleri','kahveler','pastalar'],
       'mesafe':'10km'

        },
      {
       'ad':'Tad Pizza',
       'adres':'SDÜ Doğu Kampüsü',
       'puan':'4',
       'imkanlar':['pizza','içecekler','tatlı'],
       'mesafe':'15km'
        },
      {
       'ad':'Burger King',
       'adres':'Iyaş AVM',
       'puan':'2',
       'imkanlar':['fast food','içecekler','tatlılar'],
        'mesafe':'5km'
        },
      {
       'ad':'Gratis',
       'adres':'Centrum Garden',
       'puan':'5',
       'imkanlar':['cilt bakımı','saç','makyaj'],
       'mesafe':'10km'
        }
    ]
    });
     
}

const mekanBilgisi=function(req,res){
  res.render('mekan-detay',{
     'baslik':'Mekan Bilgisi',
     'sayfaBaslik':'Starbucks',
     'mekanBilgisi':{
      'ad':'Starbucks',
      'adres':'Centrum Garden',
      'puan':'3',
      'imkanlar':['Dünya kahveleri','kahveler','pastalar'],
            'koordinatlar':{
        'enlem':37.781885,
        'boylam':30.566034
      },
      'saatler':[
       { 
        'gunler':'Pazartesi-Cuma',
        'acilis':'7:00',
        'kapanis':'23:00',
        'kapali':false
       },
       {
        'gunler':'Cumartesi',
        'acilis':'9:00',
        'kapanis':'22:30',
        'kapali':false

       },
       {
        'gunler':'Pazar',
        'kapali':true
       }
      ],
      'yorumlar':[
       {
        'yorumYapan':'İlknur Helvacı',
        'puan':4,
        'tarih':'1 Aralık 2020',
        'yorumMetni':'Kahveleri efsane'
       },
       {
        'yorumYapan':'İlknur Helvacı',
        'puan':3,
        'tarih':'1 Aralık 2020',
        'yorumMetni':'İdare eder'
       }
      ]
     }
  });
}

const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle' });
}
  
  module.exports={
  anaSayfa,
  mekanBilgisi,
  yorumEkle
  }
