// We import the functions that are necessary for the C.R.U.D. operations.
// The model is the one that manipulates, reads data, returns data. The "heavylifter".
import fileService from "../shared-services/file-service.js";
import { Blog } from "../entities/blog.entity.js";

/**
 *  I create a class called BlogModel which will have the function that can read data
    NOTE. Because you are using fs.promises you must always put async before the function and await before the promised 
    based function
*/
class BlogModel {
    async readBlog(){
        const blogData = await fileService.viewBlog("../db/blog.json");

        return blogData
    };


    async createBlog(title, body, author, date, tags){
        const blogData = await fileService.viewBlog("../db/blog.json");

        // Here inside the constant I crate a new instance out of the Blog class
        const blog = new Blog(title, body, author, date, tags);

        blogData.push(blog)

        await fileService.writeToFile("../db/blog.json", JSON.stringify(blogData, null, 2))
    };


    async editBlogId(blogId){
        const blogData = await fileService.viewBlog("../db/blog.json");

        const editBlog = blogData.map((blog) => {
            if(blog.id === blogId){

                return {
                    ...blog,
                    title: "Iron - Fe",
                    body: "Foods high in iron",
                    tags: ["healthy lifestyle", "vegetables", "organic"]
                };
            };

            return blog
        });

        await fileService.writeToFile("../db/blog.json", JSON.stringify(editBlog, null, 2))
    };

    
    async deleteBlogId(blogId){
        const blogData = await fileService.viewBlog("../db/blog.json");

        const filteredBlog = blogData.filter((blog) => blog.id !== blogId);

        // if(!filteredBlog){
        //     return "The desired post does not exist"
        // };  

        if(filteredBlog.length === blogData.length){
            
            return filteredBlog;
        };

        await fileService.writeToFile("../db/blog.json", JSON.stringify(filteredBlog, null, 2));
    };


    async getTagBlog(arr){
        // I make a constant and read the data file
        const blogData = await fileService.viewBlog("../db/blog.json");

        // After that I make a constant that will filter out the object that has the tags we entered
        // I make a new array with filter and inside I use some to see if it includes the provided tag and
        // if it includes then return the newly filtered array
        const filteredBlogs = blogData.filter((blog) => arr.some((tag) => blog.tags.includes(tag)));

        if(filteredBlogs.length === 0){
            return "Couldn't find the desired match"
        };
        // I return the value
        return filteredBlogs;
    };
};



export default BlogModel;