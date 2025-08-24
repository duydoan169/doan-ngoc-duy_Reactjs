import React, { Component } from 'react'
type Post={
    id: number,
    title: string,
    content: string,
    author: string
}
type Props={
    post: Post;
}
export default class DetailPost extends Component<Props> {
  render() {
    return (
      <div>
        <div>id: {this.props.post.id}</div>
        <div>title: {this.props.post.title}</div>
        <div>content: {this.props.post.content}</div>
        <div>author: {this.props.post.author}</div>
        <hr style={{width: "500px", margin: "20px 0 20px"}} />
      </div>
    )
  }
}
