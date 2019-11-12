import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils';
import {shortText, longText, posts, users} from './__data__/testData';

it('not alter a string under 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})
it('will shorten text over 100 characters', () => {
    const shortened = (shortenText(longText))
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})
it('word count will correctly count the number of words in a sentence', () => {
    expect(wordCount(posts)).toBe(233)
})
it('will attach a display name property to passed in posts', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})
it('will remove posts with no matching users', () => {
    const newPosts = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(newPosts[0]).not.toContainEqual(posts)
})