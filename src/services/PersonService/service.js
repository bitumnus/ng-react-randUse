const PERSONS_URI = 'https://randomuser.me/api/?results=200';

export default class PersonService {

    // static $inject = ['$http'];
    constructor($http) {
        this.$http = $http;
    }

    queryPersons() {
        return this.$http.get(PERSONS_URI).then((resp) => this.setPersons(resp.data.results));
    }

    getPersons() {
        return this.persons;
    }

    setPersons(persons) {
        this.persons = persons;
        return persons;
    }
}
