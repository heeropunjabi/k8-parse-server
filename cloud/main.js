Parse.Cloud.define("hello", async (request) => {
  // const Demo2 = Parse.Object.extend("Demo2");
  // const query = new Parse.Query(Demo2);
  // const obj = await query.get("AY6LOxnv1D");

  //obj.set("country", "JS");
  //console.log(`obj-->`, obj.attributes, obj.get("objectId"));
  // obj.set("country", "JS2");
  // setTimeout(async () => {
  //   await obj.save();
  // }, 3000);

  // Declare the types.
  // const Post = Parse.Object.extend("Post");
  // const Comment = Parse.Object.extend("Comment");

  // // Create the post
  // const myPost = new Post();
  // myPost.set("title", "I'm Hungry");
  // myPost.set("content", "Where should we go for lunch?");

  // // Create the comment
  // const myComment = new Comment();
  // myComment.set("content", "Let's do Sushirrito.");

  // // Add the post as a value in the comment
  // myComment.set("parent", myPost);

  // // This will save both myPost and myComment
  // await myComment.save();

  const demo = require("../demo");
  const response = await demo();
  //console.log("response", response.data);
  return response.data;
});
