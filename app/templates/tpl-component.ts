import { Component } from "angularjs-annotations";

class <%= className %>Controller {
  public text: string;

  constructor() {
    this.text = 'My brand new component!';
  }
}

@Component({
  template: require('./<%= htmlTemplateName %>'),
  controller: <%= className %>Controller
})
export class <%= componentName %> implements ng.IComponentOptions { 
}