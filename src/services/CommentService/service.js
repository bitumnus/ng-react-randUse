const COMMENTS_URI = 'https://randomuser.me/api/?page=1&results=10';

export default class CommentService {

    // static $inject = ['$http'];
    constructor($http) {
        this.$http = $http;
    }

    queryComments() {
        return this.$http.get(COMMENTS_URI).then((resp) => this.setComments(resp.data.results));
    }

    getComments() {
        return this.comments;
    }

    setComments(comments) {
        this.comments = comments;
        return comments;
    }
}
