import { Parent } from "./Parent";

export default  class  Demo extends Parent{
    constructor(options)
    {
         super(options)
    }
    
    a =1
    b=function (x) {
        console.log("bfn",x)
    }

    c=function (x){
        console.log("cFn",x)  
    }
    d=function (x){
        console.log("dFn",x)  
    }
    e=function (x){
        console.log("eFn",x)  
    }
    f=function (x){
        console.log("fFn",x)  
    }
}