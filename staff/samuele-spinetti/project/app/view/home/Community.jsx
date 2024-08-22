import { useState, useEffect } from 'react'
import useContext from '../context.js'

import logic from '../../logic'

import Heading from '../library/Heading'
import Button from '../library/Button'
import Container from '../library/Container'

import CreatePost from './CreatePost'
import Post from './Post'

export default function Community() {
    const [createPostVisible, setCreatePostVisible] = useState(false)
    const [posts, setPosts] = useState([])
    const { alert } = useContext()

    useEffect(() => {
        loadPosts()
    }, [])

    const handlePostDeleted = () => {
        loadPosts()
    }

    const handlePostLikeToggled = () => {
        loadPosts()
    }

    const handleCreatePostClick = () => {
        setCreatePostVisible(true)
    }

    const handleCancelCreatePostClick = () => {
        setCreatePostVisible(false)
    }

    const handlePostCreated = () => {
        setCreatePostVisible(false)

        loadPosts()
    }

    const loadPosts = () => {
        try {
            logic.getAllPosts()
                .then(posts => setPosts(posts))
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    return <>
        <Container className="flex flex-row items-center justify-around h-20">
            <Heading className="flex flex-col justify-center items-center text-[#000000] text-[20px] font-bold h-12">QueerCareCommunity</Heading>
            <Button className="border border-black rounded-lg w-20 h-10 m-1" onClick={handleCreatePostClick}>Add post</Button>
        </Container>
        {createPostVisible && <CreatePost onPostCreated={handlePostCreated} onCancelCreatePost={handleCancelCreatePostClick} />}
        <section className="flex flex-col gap-6 mb-24">
            {posts.map(post => <Post
                key={post.id}
                post={post}
                onPostDeleted={handlePostDeleted}
                onPostLikeToggled={handlePostLikeToggled}
            />)}
        </section>
    </>
}