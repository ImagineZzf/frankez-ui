import FzButton from './src/button.vue';

FzButton.install = function (Vue) {
  Vue.component(FzButton.name, FzButton);
};

export default FzButton;