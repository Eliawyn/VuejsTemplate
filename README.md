# Bulma Vue

#### Notes
  - Utiliser AOS pour afficher une navbar fixe après un certain endroit (la navbar simple transparente sera toujours là mais en haut) avec un certain effet

### Liens utiles
**Vue Js**
 - https://coursetro.com/courses/23/Vue-Tutorial-in-2018---Learn-Vue.js-by-Example
 - https://medium.com/@jaouad_45834/full-stack-shopping-cart-with-mevn-stack-part-1-89dae1f35378
---
**Bulma**
 - https://bulma.io/
 - https://github.com/vue-bulma/vue-admin
---
**MongoDB and ElasticSearch**
 - https://dzone.com/articles/cli-for-indexing-data-from-mongodb-to-elasticsearc
 - https://github.com/appbaseio/abc
 - https://medium.appbase.io/cli-for-indexing-data-from-mongodb-to-elasticsearch-ee5a74695945
 - deprecated : https://www.compose.com/articles/mongoosastic-the-power-of-mongodb-and-elasticsearch-together/
 - deprecated : https://github.com/mongoosastic/mongoosastic
---
**Animate On Scroll**
 - http://michalsnik.github.io/aos/
 - https://www.youtube.com/watch?v=j_30KqVCmq8
---
**Site traduction i18n** (voir vue-starter)
 - https://kazupon.github.io/vue-i18n/
 - https://github.com/kazupon/vue-i18n
---
**Input Validation VeeValidate**
 - https://baianat.github.io/vee-validate/
 - https://coursetro.com/posts/code/137/Vue-Forms-Tutorial---Capturing-and-Validating-User-Input
---

### Installation du projet

Initialisation
```bash
# Installation de vue-cli
npm install -g @vue/cli

# Creation du projet
vue create bulma-vue
# suivre les instructions, installer router et vuex

# Installation des packages
cd bulma-vue
npm install --save bulma bulma-checkradio axios node-sass sass-loader @fortawesome/fontawesome-free

# Ajout du fichier de style
touch ./src/assets/main.scss
```

Modifier le fichier de style
```scss
// src/assets/main.scss

// $primary: #3B7CBC;

.tile.is-child {
  padding: 1.5rem;
}

@import 'bulma';
@import 'bulma-checkradio';
@import '~@fortawesome/fontawesome-free/css/all.css';
```

Modifier le fichier `./src/main.js`
```javascript
// src/main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Require the main Sass manifest file
require('./assets/main.scss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

### Lancement du projet
Modifier le fichier `package.json`
```json
"scripts": {
  "serve": "vue-cli-service serve",
  "build": "vue-cli-service build && serve -s dist",
  "lint": "vue-cli-service lint"
}
```

Lancement developpement/production
```bash
# Lancer en developpement
npm run serve

# Lancer en production
npm run build
# Il va build le projet et le lancer en mode production
# Pour auditer une page web, Ctrl-Maj-I => audit

# Si il faut un port spécifique
PORT=3005 npm run serve
```
