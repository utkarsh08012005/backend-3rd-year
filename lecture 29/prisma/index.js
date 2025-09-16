let {PrismaClient}=require("./generated/prisma");
let prisma=new PrismaClient();
async function addUser(name,email,password){
    let newUser=await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password
        }
    })
    return newUser;
}
addUser("Sukrit","sukrit@gmail.com","1234").then((data)=>{
    console.log("User created successfully");
}).catch((err)=>{
    console.log("Error");
})
async function addTweet(content,userId){
    await prisma.tweet.create({
        data:{
            content:content,
            userId:userId
        }
    })
}
addTweet("my first tweet",1)
.then(()=>console.log("tewwt done"))

async function getUserTweet(userId) {
    let tweets = await prisma.tweet.findMany({
        where:{
            userId:Number(userId)
        }
    })
    return tweets;
}


getUserTweet("1")
.then((data)=>{
    console.log(data)
})

async function updateTweet(tweetid,userId,updatedContent) {
    let tweet=await prisma.tweet.findUnique({
        where:{
id:Number(tweetid)
        }//id:Number(tweetid)
    })
    if(!tweet){
        return "tweet not theere"
    }

}
await prisma.tweet.update({
    where:{
        id:Number(tweetid)
    },
    data:{
        content:updatedContent
    }
})
updateTweet("1","1","update tweet")
.then(()=>{
    console.log("done")
})
