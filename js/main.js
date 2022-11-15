(function () {
  'use strict';

  Vue.config.devtools = true;

  var app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
      tab: null,
      header_img: "./img/header/header01.jpg",
      tab_title_list: [
        { title: 'Top' },
        { title: 'Profile' },
        { title: 'Works' }
      ],
      my: [
        { name: 'YASSAN'},
        { icon: "./img/top_background.png"},
        { about: '1998年生まれ、広島市で育ち大のカープファン  趣味は、野球観戦や旅行、サイクリング、カメラ、ボランティア、Tシャツデザインなど  高専時代はグループでのものづくり、大学時代はボランティア活動に精を出した。 推しは「東海オンエア」と「アイドルのいる生活」'},
        { email: 'o830takumay [at] gmail.com'}
      ],
      categories: [
        {
          title: 'Education',
          list: [
            { year: '2014-2019', content: '広島商船高等専門学校 流通情報工学科 卒業' },
            { year: '2018 August(2weeks)', content: 'Emilio Aguinaldo College International Language Institute Manila, Philippines English Proficiency Program 修了' },
            { year: '2019-2021', content: '豊橋技術科学大学 工学部 情報・知能工学科 卒業' },
            { year: '2021-', content: '豊橋技術科学大学 博士前期課程 情報・知能工学専攻 在学中' }
          ]
        },
        {
          title: 'Awards',
          list: [
            { year: '2008', content: '第15回鐡道の日 こども絵画コンテスト : 優秀賞' },
            { year: '2017', content: 'EDGE INNOVATION GROOVE AWARD 「Mymelody」：最優秀賞・TDK賞 - 担当: システム設計' },
            { year: '2017', content: '全国高等専門学校プログラミングコンテスト 「メロディー☆アート」: 敢闘賞 - 担当: リーダー, ハードウェア設計・開発' },
            { year: '2017', content: 'キャンパスベンチャーグランプリ中国大会 「メロディー☆アート」：テクノロジー部門　最優秀賞（中国経済連合会会長賞）- 担当: リーダー、ビジネスアイデア立案、発表者、 発表資料作成' },
            { year: '2018', content: '第25回コンピュータフェスティバル 「卍アート」 : ブース審査 優秀賞 - 担当: アニメーション企画制作' },
            { year: '2018', content: '全国高等専門学校プログラミングコンテスト 「まきまき☆マキアートDX」：自由部門　トヨタコミュニケーションシステム企業賞 - 担当: 開発サポート,　アニメーション制作' },
            { year: '2018', content: '広島商船高等専門学校 功労賞' },
            { year: '2019', content: '第2回技科大アイデアピッチコンテスト 「ソロ活ルート共有アプリ「☆ひとで☆」」 : 優秀賞 - 担当: 企画、発表資料作成、発表者' },
            { year: '2021', content: 'アーバンデータチャレンジ2020 「食べてみりん」社会基盤情報流通推進協議会（AIGID）銅賞および、オープンガバメント推進協議会特別賞銅賞 - 担当: ソフトウェア開発' },
            { year: '2021', content: '豊橋技術科学大学 学生表彰　団体（学術研究活動）' }
          ]
        },
        {
          title: 'Internship',
          list: [
            { year: '2019(3weeks)', content: 'マツダ株式会社' },
            { year: '2020(6months)', content: '株式会社ウェブインパクト 豊橋コア' }
          ]
        },
        {
          title: 'Media',
          list: [
            { year: '2017.6.30', content: '「INNOVATION WORLD」-「TDK DREAM PITCH」, J-WAVE(81.3FM)' },
            { year: '2018.1.15', content: 'キャンパスベンチャーグランプリ中国、安森さん（広島商船高専）らに最優秀賞 | その他 ニュース | 日刊工業新聞 電子版,　https://www.nikkan.co.jp/articles/view/457826, 日刊工業新聞' },
            { year: '2018.1.16', content: 'キャンパスベンチャーグランプリ中国 認知症予防期待 知育玩具を開発, 中国新聞' },
            { year: '2018.1.24', content: 'キャンパスベンチャーグランプリ中国, 日刊工業新聞' },
            { year: '2018.1.26', content: '「キャンパスベンチャーグランプリ中国」で表彰式、最優秀賞に安森さんら | その他 ニュース | 日刊工業新聞 電子版, https://www.nikkan.co.jp/articles/view/459378, 日刊工業新聞' },
            //{ year: '2019.10.10', content: '【10月1日】 第2回技科大アイデアピッチコンテスト・2019年度第2回起業家育成セミナーを開催しました | アントレプレナーシップ教育プログラム, https://www.siva.tut.ac.jp/activity/%E3%80%9010%E6%9C%881%E6%97%A5%E3%80%91-2019%E5%B9%B4%E5%BA%A6%E7%AC%AC1%E5%9B%9E%E6%8A%80%E7%A7%91%E5%A4%A7%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A2%E3%83%94%E3%83%83%E3%83%81%E3%82%B3%E3%83%B3%E3%83%86/, 豊橋技術科学大学' },
          ]
        },
        {
          title: 'Qualifying Examination',
          list: [
            { year: '2014', content: 'ニュース時事能力検定 3級' },
            { year: '2014', content: '日本語ワープロ検定 第2級' },
            { year: '2015', content: '情報処理技能検定試験 表計算 第3級' },
            { year: '2016', content: 'ITパスポート試験 合格' },
            { year: '2016', content: '漢字検定準2級' }
          ]
        },
        {
          title: 'Programming',
          list: [
            { year: '', content: 'C' },
            { year: '', content: 'C++' },
            { year: '', content: 'Java' },
            { year: '', content: 'HTML/CSS' },
            { year: '', content: 'Javascript' },
            { year: '', content: 'Typescript' },
            { year: '', content: 'Python' }
          ]
        }
      ]
    }
  })


}) ();