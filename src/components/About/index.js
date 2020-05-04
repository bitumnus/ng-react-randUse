import angular from 'angular';
import { reactToAngularComponent } from '../../services/AngularReactHelper';
import About from './About';

module.exports = angular.module('ngReact.about', [
]).component('about', reactToAngularComponent(About));
