const fs = require('fs')
const path = require('path')
const replacethis ="suraj"
const replacewith ="larry"
const preview = false
const folder = __dirname
try {
    const data = fs.readdir(folder,(error,data)=>{
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let oldFile = path.join(folder,item) 
            let newFile=path.join(folder,item.replaceAll(replacethis,replacewith))
            if(!preview){
            fs.rename(oldFile, newFile,()=>{
                console.log("Rename Success")
            })}
            else{
                if("data/"+item!==newFile) console.log(""+item + " will be renamed to "+newFile)
            }
            
        }

    })
} catch (error) {
    console.error(error);
}
