import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class MyComponent extends Vue {
  private message = 'It from mixin';
}
