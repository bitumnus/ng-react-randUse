/* eslint-disable no-undef */
/* eslint-disable global-require */
import angular from 'angular';
import '@uirouter/angularjs';

const setupRoutes = ($stateProvider) => {
    $stateProvider
        .state('home', {
            url: '/',
            template: `
                <h3>Hello Home!</h3>
            `,
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
                <div ui-view=""></div>
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
            // template: `
            //     <h3>{{$ctrlP.person.name.first}}</h3>
            // `,
            template: `
                <persons-detail person="$ctrlP.person"></persons-detail>
            `,
        });
};

const enableHtml5Mode = ($locationProvider) => {
    $locationProvider.html5Mode({ enabled: true });
};

module.exports = angular.module('ngReactExample', [
    require('@uirouter/angularjs'),
    require('./services/CommentService').name,
    require('./services/PersonService').name,
    require('./components/PersonsList').name,
    require('./components/PersonsDetail').name,
])
    .config(enableHtml5Mode)
    .config(setupRoutes);
