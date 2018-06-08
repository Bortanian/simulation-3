import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import { connect } from 'react-redux'
import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
        this.getPosts = this.getPosts.bind(this)
    }
    componentDidMount() {
        this.getPosts()
    }
    getPosts() {
        axios.get(`/api/posts/${this.props.id}?userposts=${this.state.userposts}&filter=${this.state.search}`)
             .then(res => {
                console.log(res.data)
                this.setState({
                    posts: res.data
                })
            })
    }
    updateSearch(val) {
        this.setState({
            search: val
        })

    }
    render() {

        let mappedPosts = this.state.posts.map(post => {
            return (
                <div key={post.id}>
                    <p>{post.title}</p>
                    <p>{post.username}</p>
                    <p>{post.profile_pic}</p>
                    <hr />
                </div>
            )
        })
        return (
            <div>
                <Nav />
                <p>
                    DASHBOARD COMPONENT
                </p>
                <div>
                    <input onChange={(e) => this.updateSearch(e.target.value)} />
                    <button onClick={() => this.getPosts()}>Search</button>
                    <button>Reset</button>
                    <input onClick={() => this.setState({ userposts: !this.state.userposts })} type='checkbox' defaultChecked />
                    <label>My Posts</label>
                    <section>
                        {mappedPosts}
                    </section>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        id: state.id
    }
}

export default connect(mapStateToProps)(Dashboard)