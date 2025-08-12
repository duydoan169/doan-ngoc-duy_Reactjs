var Comment = /** @class */ (function () {
    function Comment(userId, content, replies) {
        this.content = content;
        this.id = Comment.currentId++;
        this.replies = replies;
        this.userId = userId;
    }
    Comment.prototype.addReply = function (reply) {
        this.replies.push(reply);
    };
    Comment.currentId = 1;
    return Comment;
}());
var Post = /** @class */ (function () {
    function Post(likes, comments, userId, content) {
        this.id = Post.currentId++;
        this.likes = likes;
        this.comments = comments;
        this.userId = userId;
        this.content = content;
    }
    Post.prototype.addLike = function (user) {
        this.likes.push(user);
    };
    Post.prototype.addComment = function (comment) {
        this.comments.push(comment);
    };
    Post.currentId = 1;
    return Post;
}());
var User = /** @class */ (function () {
    function User(posts, followers) {
        this.id = User.currentId++;
        this.followers = followers;
        this.posts = posts;
    }
    User.prototype.createPost = function (likes, comments, content) {
        var newPost = new Post(likes, comments, this.id, content);
        this.posts.push(newPost);
    };
    User.prototype.createComment = function (postId, content) {
        var found = this.posts.findIndex(function (post) { return post.id == postId; });
        if (found == -1) {
            console.log("Id khong ton tai");
            return;
        }
        var newComment = new Comment(this.id, content, []);
        this.posts[found].addComment(newComment);
    };
    User.prototype.follow = function (user) {
        this.followers.push(user);
    };
    User.prototype.likePost = function (postId) {
        var found = this.posts.findIndex(function (post) { return post.id == postId; });
        if (found == -1) {
            console.log("Id khong ton tai");
            return;
        }
        this.posts[found].addLike(this);
    };
    User.prototype.viewFeed = function () {
        if (this.followers.length == 0) {
            console.log("khong co nguoi dang theo doi");
            return;
        }
        for (var _i = 0, _a = this.followers; _i < _a.length; _i++) {
            var follower = _a[_i];
            if (follower.posts.length == 0) {
                console.log("user nay khong co bai dang");
                break;
            }
            for (var _b = 0, _c = follower.posts; _b < _c.length; _b++) {
                var post = _c[_b];
                console.log("Id: ".concat(post.id, ", Likes ").concat(post.likes, ", comments: ").concat(post.comments, ", userId: ").concat(post.userId, ", content: ").concat(post.content));
            }
        }
    };
    User.currentId = 1;
    return User;
}());
