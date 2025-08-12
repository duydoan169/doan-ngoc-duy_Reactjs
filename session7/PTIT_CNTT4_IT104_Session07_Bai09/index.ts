class Comment{
    static currentId=1;
    id: number;
    userId: number;
    content: string;
    replies: Comment[];

    constructor(userId: number, content: string, replies: Comment[]){
        this.content=content;
        this.id=Comment.currentId++;
        this.replies=replies;
        this.userId=userId;
    }
    addReply(reply: Comment){
        this.replies.push(reply);
    }
}
class Post{
    static currentId=1;
    id: number;
    likes: User[];
    comments: Comment[];
    userId: number;
    content: string;

    constructor(likes: User[], comments: Comment[], userId: number, content: string){
        this.id=Post.currentId++;
        this.likes=likes;
        this.comments=comments;
        this.userId=userId;
        this.content=content
    }
    addLike(user: User){
        this.likes.push(user);
    }
    addComment(comment: Comment){
        this.comments.push(comment);
    }
}
class User{
    static currentId=1;
    id: number;
    posts: Post[];
    followers: User[];

    constructor(posts: Post[], followers: User[]){
        this.id=User.currentId++;
        this.followers=followers;
        this.posts=posts;
    }
    createPost(likes: User[], comments: Comment[], content: string){
        let newPost = new Post(likes, comments, this.id, content);
        this.posts.push(newPost);
    }
    createComment(postId: number, content: string){
        let found=this.posts.findIndex(post => post.id==postId);
        if(found==-1){
            console.log("Id khong ton tai");
            return;
        }
        let newComment=new Comment(this.id, content, []);
        this.posts[found].addComment(newComment);
    }
    follow(user: User){
        this.followers.push(user);
    }
    likePost(postId: number){
        let found=this.posts.findIndex(post => post.id==postId);
        if(found==-1){
            console.log("Id khong ton tai");
            return;
        }
        this.posts[found].addLike(this);
    }
    viewFeed(){
        if(this.followers.length==0){
            console.log("khong co nguoi dang theo doi");
            return;
        }
        for (let follower of this.followers) {
            if(follower.posts.length==0){
                console.log("user nay khong co bai dang");
                break;
            }
            for (let post of follower.posts) {
                console.log(`Id: ${post.id}, Likes ${post.likes}, comments: ${post.comments}, userId: ${post.userId}, content: ${post.content}`);                
            }
        }
    }
}