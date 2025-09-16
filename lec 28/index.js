const {PrismaClient} = require('./generated/prisma'); 
const prisma = new PrismaClient()
async function addUser(email,name,password){
    await prisma.user.create({
        data:{
            email:email,
            name:name,
            password:password
        }
    })
}
// addUser("user4@gmail.com","user4","user4").then(()=>{
//     console.log(("User added successfully"));
// })

async function getAllUsers(){
    let allUsers=await prisma.user.findMany();
    return allUsers;
}
getAllUsers().then((data)=>{
    console.log(data);
})