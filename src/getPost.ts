let post: any;
try{
    post = await import("../pages/Post.js");
} catch(err){
    throw new Error("Error importing post.js: " + err);
}

export default post.default;