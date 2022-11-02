(function() {
    'use strict';

    Vue.config.devtools = true;

    var header = new Vue({
        el: '#header',
        data: {
            path: "./index.html",
            title: "yassan83830"
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

    var background = new Vue({
        el: '.background',
        data: {
            footer: "@ 2022- yassan83830"
        }
    })


})();