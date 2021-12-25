import  Child  from "./Child";
import Demo from "./Demo";
import  {Parent} from "./Parent"

Parent.resetFunPriority({
    funArray:[
        'b',
        'c',
        'd',
        'e',
        'f'
    ]
})

let child  = await (new Child())
console.log(child.a)
child.b(10)
child.c(100)
child.d(1000)
child.e(10000)
child.f(100000)

// Parent.resetFunPriority({
//     funArray:[
//         'c',
//         'f'
//     ]
// })

// let child2 = await (new Child())
// // child.c(100)
//  child2.d(1000)
// child2.e(10000)
// child2.f(100000)

// child2.a =  122
// console.log(child2.a)

let demo  = await (new Demo({
    funArray:[
        'b',
        'c',
        'd',
        'e',
        'f'
    ]
}))
demo.c()
