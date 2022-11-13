(function () {
  'use strict';

  Vue.config.devtools = true;

  var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
      items: [
        { title: 'Top' },
        { title: 'Profile' },
        { title: 'Works' }
      ],
      edu_title: 'Education',
      edus: [
        { year: '2014-2019', school: '広島商船高等専門学校 流通情報工学科 卒業' },
        { year: '2018 August(2weeks)', school: 'Emilio Aguinaldo College International Language Institute Manila, Philippines English Proficiency Program 修了' },
        { year: '2019-2021', school: '豊橋技術科学大学 工学部 情報・知能工学科 卒業' },
        { year: '2021-', school: '豊橋技術科学大学 博士前期課程 情報・知能工学専攻 在学中' },
      ]
    }
  })


}) ();