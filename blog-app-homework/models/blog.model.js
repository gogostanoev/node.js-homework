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


    // Second function, which will create a blog post
    async createBlog(title, body, author, tags){
        // I create a constant that will read all the data that is stored in the "blog.json"
        const blogData = await fileService.viewBlog("../db/blog.json");

        // Here inside the constant I crate a new instance out of the Blog class
        const blog = new Blog(title, body, author, tags);

        // After that, I will push the newly created object(blog) into the array(blogData)
        blogData.push(blog)

        // And finally, the updated "blogData" array is written to the "blog.json"
        await fileService.writeToFile("../db/blog.json", JSON.stringify(blogData, null, 2))
    };


    // Third function, which will update a blog post based on the corresponding ID
    async editBlogId(blogId){
        // I create a constant that will read all the data that is stored in the "blog.json"
        const blogData = await fileService.viewBlog("../db/blog.json");

        /**
         * Then I use the "map" method on the "blogData" array to create a new array(editBlog)
         * map() iterates over each object in the "blogData" array and checks if the id of the blog post
         * matches the blogId. If it matches, the func. updates the properties. It creates a new object thanks to
         * the spread operator(...blog), creating a new copy of the "blog" object with the updated properties
        */
        let blogFound = false;

        const editBlog = blogData.map((blog) => {
            if (blog.id === blogId) {
                blogFound = true;
                return {
                    ...blog,
                    title: "Iron - Fe",
                    body: "Foods high in iron",
                    tags: ["healthy lifestyle", "vegetables", "organic"]
                };
            }
            return blog;
        });
        
        if (!blogFound) {
            throw new Error(`Blog with id ${blogId} not found`);
        }       

        // And finally, the updated array is written back to the "blog.json"
        await fileService.writeToFile("../db/blog.json", JSON.stringify(editBlog, null, 2))
    };


    // Fourth function, which will delete a blog post based on the corresponding ID
    async deleteBlogId(blogId){
        // Same as above
        const blogData = await fileService.viewBlog("../db/blog.json");

        // I create a constant that will filter(iterate) through the array and checks if the id of blog matches the provided "blogId"
        const filteredBlog = blogData.filter((blog) => blog.id === blogId);
        console.log(filteredBlog)
        
        // If we didn't find an object with the matchind ID we stop the execution and return false
        if(filteredBlog.length === 0){
            return false
        };
        
        // I iterate through the array and
        for(let i = 0; i < blogData.length; i++){
            
            // When the current iteration of "blogData" matches the first object in "filteredBlog" 
            if(blogData[i] === filteredBlog[0]){
                
                // We remove the object from that array
                blogData.splice(i, 1);
                break
            }         
        };

        // Same as above
        await fileService.writeToFile("../db/blog.json", JSON.stringify(blogData, null, 2));
        return true
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