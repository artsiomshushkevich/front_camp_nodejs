import blogsMockData from '../../mockdata/blogs';
import _ from 'lodash';

export default class BlogsModel {
    getAll() {
        return blogsMockData;
    }

    getOneById(id) {
        return _.find(blogsMockData, {id: id});
    }

    deleteOneById(id) {
        return _.remove(blogsMockData, {id: id});
    }

    updateOne(updatedBlog) {
        var index = _.findIndex(blogsMockData, {id: updatedBlog.id});
        return index !== -1 ? blogsMockData.splice(index, 1, updatedBlog) : [];
    }

    insertOne(newBlog) {
        newBlog.id = blogsMockData.length ? (blogsMockData[blogsMockData.length - 1].id + 1) : 0;
        blogsMockData.push(newBlog);

        return [blogsMockData[blogsMockData.length - 1]];
    }   
}