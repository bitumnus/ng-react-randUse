/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
// const AUTHOR_URI = 'http://localhost:3004/authors'
const PERSONS_URI = 'https://randomuser.me/api';

export default class AuthorService {

    static $inject = ['$http'];
    constructor($http) {
        this.$http = $http;
        this.authors = {};
    }

    queryAuthors() {
        return this.$http
            .get(PERSONS_URI)
            .then((resp) => {
                // this.setAuthors(resp.data.results);
                this.setPersonsData(resp.data.results);
            });
    }

    setPersonsData(persons) {
        this.persons = persons;
        return persons;
    }

    getPerson(id) {
        this.person = this.persons.filter(d => d.login.uuid === id);
        return this.person;
    }

    setAuthors(authors) {
        this.authors = authors.reduce((authorMap, author) => {
            authorMap[author.id] = author;
            return authorMap;
        }, this.authors);
        return authors;
    }

    getAuthor(id) {
        return this.authors[id];
    }
}
