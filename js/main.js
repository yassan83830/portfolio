(function() {
    'use strict';

    Vue.config.devtools = true;

    var header = new Vue({
        el: '#header',
        data: {
            title: "YASUMORI"
        }
    })

    var hamburger = new Vue({
        el: '#hamburger_menu',
        data(){
            return{
                ActiveBtn: false,
                menus: [
                    {
                        label: "TOP",
                        path: "./index.html"
                    },
                    {
                        label: "PROFILE",
                        path: "./index.html"
                    },
                    {
                        label: "WORKS",
                        path: "./index.html"
                    }
                ]
            }
        }
      })

    var img_bg = new Vue({
        el: '#img_bg',
        data: {
            BackgroundImage: 'img/top_background.png'
        }
    })


})();