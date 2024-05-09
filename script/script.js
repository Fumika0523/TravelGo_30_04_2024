// let flagTestSection=document.getElementById("displayFlagSection")
// var req=new XMLHttpRequest()
//     req.open(`GET`,`https://restcountries.com/v3.1/all`)
//     req.send()
//     req.onload=function(){
      
//         let data=JSON.parse(req.response)
//         console.log(data)
//         //flag

//         // ? optional changing + data is not present for few field ? > skip and go to next level
//         for(var i=0;i<data.length;i++){//250 times > 250img +h6
//             console.log(data[i]?.flags?.png)
//             //i didnt had the elemt
//             let divFlagTag=document.createElement(`div`)
//             let imageTag=document.createElement(`img`)
//             imageTag.setAttribute(`src`,data[i]?.flags?.png)
//             imageTag.setAttribute(`class`,`flagDesign`)//classattribute
//             let h5Tag=document.createElement(`h5`)
//             h5Tag.innerHTML=data[i]?.name?.common
//             divFlagTag.append(imageTag,h5Tag)
//             flagTestSection.append(divFlagTag)
//         }
//     }

//     //practice again
let flagTestSection=document.getElementById("displayFlagSection")
var req=new XMLHttpRequest()
    req.open(`GET`,`https://restcountries.com/v3.1/all`)
    req.send()
    req.onload=function(){
        let data=JSON.parse(req.response)
        for(var i=0; i<data.length; i++){
            let divFlagTag=document.createElement(`div`)
            let imageTag=document.createElement(`img`)
            imageTag.setAttribute(`src`,data[i]?.flags?.png)
            imageTag.setAttribute(`class`,`flagDesign`)
            let h5Tag=document.createElement(`h5`)
            h5Tag=document.createElement(`h5`)
            h5Tag.innerHTML=data[i]?.name?.common
            divFlagTag.append(imageTag,h5Tag)
            flagTestSection.append(divFlagTag)
        }
    }