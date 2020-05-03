import angular from 'angular';
import { reactToAngularComponent } from '../../services/AngularReactHelper';
import PersonsDetail from './PersonsDetail';

module.exports = angular.module('ngReactExample.personsDetail', [
]).component('personsDetail', reactToAngularComponent(PersonsDetail));
