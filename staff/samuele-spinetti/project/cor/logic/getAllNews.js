import { User, NewsArticle } from '../data/models.js'

import { validate, errors } from 'com'
const { NotFoundError, SystemError } = errors

export default userId => {
    validate.id(userId, 'userId')

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return NewsArticle.find({}, { __v: 0 }).sort({ publishedAt: -1 }).lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(newsArticles => {
                    newsArticles.map(newsArticle => {
                        newsArticle.fav = user.favs.some(newsArticleObjectId => newsArticleObjectId.toString() === newsArticle._id.toString())
                        newsArticle.id = newsArticle._id.toString()
                        delete newsArticle._id

                        return newsArticle
                    })

                    return newsArticles
                })
        })
}