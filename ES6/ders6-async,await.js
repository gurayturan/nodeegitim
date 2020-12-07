const user={id:10,name:"güray"};
const friends=[{id:11,name:"ali"},{id:12,name:"mert"}];
const getuser=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(user);
        },1000)
    })
};

const getFriends=(userid)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(friends);
        },2000)
    })
};
let userid;
/*
//callback
getuser().then(function (user) {
        userid=user.id;
        getFriends(userid).then(function (friends) {
            console.log(user);
            console.log(friends);
        })
});

getuser()
    .then((user)=>{
        userid=user.id;
        return userid;
    })
    .then((userid)=>{
        getFriends(userid)
            .then((friends)=>{
                console.log(friends);
            })
    });
*/
//promise chain
getuser()
    .then((user)=>{
        return getFriends(user.id);
    })
    .then((friends)=>{
        console.log(friends);
    });
//async/await
async function asenkronakis() {

    try {
        const user = await getuser();
        const friends = await getFriends(user.id);
        console.log(user);
        console.log(friends);
    }catch(error){
        console.log(error);
    }
}

asenkronakis();