'use strict';

/*-----------------
 APP
 -----------------*/

let app = null;

function startVue() {
    app = new Vue({

        // We want to target the div with an id of 'componentsList'
        el: '#componentsList',

        data: {
            testData : 22,
            pluginsData : []
        },

        created: function () {
        },

        computed: {}
    });
}
