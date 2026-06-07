// {fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// }

const g = async () => {

    try{

        const response = await fetch("https://jsonplaceholder.typicode.com/usersddd")

        const data = await response.json()

        if(response.ok){
            console.log(data)
        }

    }
    catch(e){
        console.log(e)
    }

}

g()

//creating own promise

const Gpromise = new Promise(
    (resolve, reject)=>{

        setTimeout(()=>{
            resolve("pizza delivered")
        }, 3000)

    }
)

Gpromise.then((message)=>{console.log(message)})


