const productNames = ['Laptop', 'Mouse', 'Keyboard', 'Monitor']
for(let indeex = 0; indeex<productNames.length; indeex++)
{
     console.log("Prouduct Name : ", productNames[indeex])
}

let filesRemaining = 5
while(filesRemaining > 0)
{
    console.log("Downloanding file ...")
    filesRemaining--
}
console.log("Download Complete")

let attemptNumber = 1
do{
    console.log("Attempt ", attemptNumber)
    attemptNumber++
}while(attemptNumber <=3)