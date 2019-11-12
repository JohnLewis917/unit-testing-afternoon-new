import React from 'react'
import {render} from '@testing-library/react'
import PostWidget from '../components/PostWidget'
import {MemoryRouter} from 'react-router-dom'
import {shortenText} from '../utils/functions'
import {posts} from './__data__/testData'

const longPost = posts[0]
const post = posts[1]

it('render Postwidget and test if inner text content contains passed in posts text content', () => {
    const {container} = render (
        <MemoryRouter>
            <PostWidget {...post}/>
        </MemoryRouter>,
    )
    expect(container.textContent).toContain(post.text)
})
it('shortens display text when expanded is false', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...longPost}/>
        </MemoryRouter>,
    )
    expect(container.textContent).toContain(shortenText(longPost.text))
})
it('displays text when expanded', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget expanded={true} {...longPost}/>
        </MemoryRouter>
    )
    expect(container.textContent).toContain(longPost.text)
})