import angular from 'angular';
import { reactToAngularComponent } from '../../services/AngularReactHelper';
import PersonsList from './presenter';

module.exports = angular.module('ngReactExample.personsList', [
]).component('personsList', reactToAngularComponent(PersonsList));
