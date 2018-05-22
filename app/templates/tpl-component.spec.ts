import * as angular from 'angular';
import 'angular-mocks';
import {<%= componentName %>} from './<%= name %>.component';

describe('<%= className %> component', () => {
  beforeEach(() => {
    angular
      .module('<%= className %>', ['app/<%= htmlTemplateName %>']) // TODO: Check path
      .component('<%= lowerCaseComponentName %>', new <%= componentName %>());
    angular.mock.module('<%= lowerCaseComponentName %>');
  });

  it('should...', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<<%= lowerCaseComponentName %>></<%= lowerCaseComponentName %>>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
