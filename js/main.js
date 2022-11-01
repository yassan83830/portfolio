(function() {
    'use strict';

    Vue.config.devtools = true;
    
    var app = new Vue({
        el: '#app',
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