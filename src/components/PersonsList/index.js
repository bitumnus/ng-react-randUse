import angular from 'angular';
import { react2angular } from 'react2angular';
import PersonsList from './PersonsList';

module.exports = angular
    .module('ngReact.personsList', [])
    .component('personsList', react2angular(PersonsList));

// decide use two methods for migrate React Component to AngularJS
// this is using react2angular depend
// in PersonsDetail use AngularReactHelper.js file
