let funMap = new Map()
let priorityMap = new Map()
let hasRun = new Map()
export class  Parent{

    constructor(options)
    {
        if(options)
        {
            Parent.resetFunPriority(options)
        }
       
     let x =  new Promise((resolve)=>{ 
        let retObj=Object.create(null)
      Promise.resolve().then(
          ()=>{
          for(let attr in x)
         {
            
           if(funMap.has(attr))
           {
            let fn = x[attr]
            Object.defineProperty(retObj,attr,{
                get()
                {
                    return function (argumennts) {
                        try{
                            let priority = funMap.get(attr)
                   
                           for(let i = 0;i<priority;i++)
                           {
                               let curAttr = priorityMap.get(i)
                               if(x[curAttr]&&!hasRun.get(curAttr))
                               {
                                   throw new Error('the function '+curAttr+' must be excuted before the function '+attr)
                               }
                           }
                              fn(argumennts)
                              hasRun.set(attr,true)
                        
                        }catch(e)
                        {
                           console.error(e)
                        }
                    }
                }
            })
             
           }else{
               let value = x[attr]
            Object.defineProperty(retObj,attr,{
                get( )
                {
                    return value
                },
                set(vvvv)
                {
                    value = vvvv
                }
            })
           }
         } 
          
          
           resolve(retObj)
       })
      })

      return x
    
    }

   static resetFunPriority(options)
   {
      funMap.clear()
      priorityMap.clear()
      hasRun.clear()
       const {funArray} = options
        let priority = 0
       for(let fun of funArray)
       {
        funMap.set(fun,priority)
        priorityMap.set(priority++,fun)
       }
    //    console.log(funMap,priorityMap)
   }

  

}