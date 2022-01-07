import { app } from "./controller/app"
import { commentPostController } from "./controller/commentPostController"
import { createPostController } from "./controller/createPostController"
import { dontFriendUserController } from "./controller/dontFriendUserController"
import { dontLikePostByIdController } from "./controller/dontLikePostByIdController"
import { friendUserController } from "./controller/friendUserController"
import { getPostByTypesController } from "./controller/getPostByTypesController"
import { getPostFriendsController } from "./controller/getPostFriendsController"
import { likePostByIdController } from "./controller/likePostByIdController"
import { loginController } from "./controller/loginController"
import { postByIdController } from "./controller/postByIdController"
import { signupController } from "./controller/signupController"

app.get("/labook/post/:type", getPostByTypesController)
app.get("/labook/post/friend", getPostFriendsController)
app.get("/labook/postId/:id", postByIdController)
app.post("/labook/signup", signupController)
app.post("/labook/login", loginController)
app.post("/labook/post", createPostController)
app.post("/labook/post/like", likePostByIdController)
app.post("/labook/post/comment", commentPostController)
app.post("/labook/user/friend", friendUserController)
app.delete("/labook/post/dontlike", dontLikePostByIdController)
app.delete("/labook/user/friend", dontFriendUserController)



