/* eslint-disable no-undef */
/* eslint-disable global-require */
import angular from 'angular';
import '@uirouter/angularjs';

const setupRoutes = ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/',
            template: `
                <h3 class="well">Hello Home!</h3>
            `,
        })
        .state('about', {
            url: '/about',
            template: '<about></about>',
        })
        .state('persons', {
            url: '/persons',
            resolve: {
                persons: (PersonService) => PersonService.queryPersons(),
            },
            controllerAs: '$ctrl',
            controller(persons) {
                this.persons = persons;
            },
            template: `
                <persons-list persons="$ctrl.persons"></persons-list>
            `,
        })
        .state('person', {
            url: '/person',
            template: `
                <div class="well" ui-view=""></div>
            `,
        })
        .state('person.uuid', {
            url: '/:uuid',
            resolve: {
                persons: (PersonService) => PersonService.getPersons(),
            },
            controllerAs: '$ctrlP',
            controller(persons, $state) {
                this.person = persons.filter(p => p.login.uuid === $state.params.uuid)[0];
            },
            template: `
                <persons-detail person="$ctrlP.person"></persons-detail>
            `,
        });
};

const enableHtml5Mode = ($locationProvider) => {
    $locationProvider.html5Mode({ enabled: true });
};

module.exports = angular.module('ngReact', [
    require('@uirouter/angularjs'),
    require('./services/PersonService').name,
    require('./components/PersonsList').name,
    require('./components/PersonsDetail').name,
    require('./components/About').name,
])
    .config(enableHtml5Mode)
    .config(setupRoutes);
