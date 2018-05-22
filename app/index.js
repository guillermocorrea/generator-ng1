'use strict';

const Generator = require('yeoman-generator');
const upperCamelCase = require('uppercamelcase');

function lowerCaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.log('**************ng1 generator**************');
    }

    start() {
        this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter a name for the new component (i.e.: user-status): '
            }
        ]).then((answers) => {
            const className = upperCamelCase(answers.name);
            const htmlTemplateName = answers.name + '.component.html';
            const componentName = className + 'Component';
            const appRoot = 'app/src/';
            // create destination folder
            this.destinationRoot(answers.name);
            this.fs.copyTpl(
                this.templatePath('tpl-component.html'),
                this.destinationPath(htmlTemplateName)
            );
            this.fs.copyTpl(
                this.templatePath('tpl-component.ts'),
                this.destinationPath(appRoot + answers.name + '.component.ts'),
                {
                    className: className,
                    htmlTemplateName: htmlTemplateName,
                    componentName: componentName
                }
            );
            this.fs.copyTpl(
                this.templatePath('tpl-component.spec.ts'),
                this.destinationPath(appRoot + answers.name + '.component.spec.ts'),
                {
                    name: answers.name,
                    className: className,
                    htmlTemplateName: htmlTemplateName,
                    componentName: componentName,
                    lowerCaseComponentName: lowerCaseFirstLetter(componentName)
                }
            );
        });
    }
};