import React, { Component } from 'react'
import DetailPost from './DetailPost';
type Post={
    id: number,
    title: string,
    content: string,
    author: string
}
type State={
    post: Post[];
}
export default class ListPost extends Component<object, State> {
    constructor(props: object){
        super(props);
        this.state={
            post: [
                {id: 1, title: "tai sao nen hoc reactjs", content: "hoc reactjs de di lam", author: "David"},
                {id: 2, title: "props trong reactjs", content: "props giup truyen du lieu tu component cha xuong con", author: "Linda"},
                {id: 3, title: "state trong reactjs la gi", content: "state giup luu tru trang thai giu lieu ben trong mot component", author: "David"}
            ]
        }
    }
    render() {
    return (
      <div>
        <h2>Danh sach bai viet</h2>
        <br />
        {this.state.post.map((item, index) =>{
            return <DetailPost key={index} post={item}></DetailPost>
        })}
      </div>
    )
  }
}
