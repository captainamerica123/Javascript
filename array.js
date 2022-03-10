/*let arr = [10,20,30,40,50];
    console.log( arr[0], arr[1], arr[2], arr[3], arr[4] );          //10 20 30 40 50   
    console.log( arr[-1],arr[5],arr[100] );                         //undefined undefined undefined
    console.log(arr.length);                                        //5

    arr[100]=1000;
    console.log(arr.length);                                        //101

    console.log(arr);                                               //[ 10, 20, 30, 40, 50, <95 empty items>, 1000 ]
*/
/*let arr=[10,20,30,40,50,60,70,80,90,100];
delete arr[2];
console.log(arr);                                                   //[ 10, 20, <1 empty item>, 40, 50, 60, 70, 80, 90, 100 ]
console.log(arr.length);                                            //10

arr.push(30);
console.log(arr);                                                   //[ 10, 20, <1 empty item>, 40, 50, 60, 70, 80, 90, 100, 30 ]

arr.unshift(5);
console.log(arr);                                                   //[ 5, 10, 20, <1 empty item>, 40, 50, 60, 70, 80, 90, 100, 30 ]

arr.pop();
console.log(arr);                                                   //[ 5, 10, 20, <1 empty item>, 40, 50, 60, 70, 80, 90, 100 ]

arr.shift();
console.log(arr);                                                   //[ 10, 20, <1 empty item>, 40, 50, 60, 70, 80, 90, 100 ]

*/

/*
let arr=[10,20,30,40, 50, 60, 70, 80, 90, 100];
arr.splice(4,3);
console.log(arr);                                                    //[10,20,30,40,80, 90, 100]
arr.splice(-1,1);
console.log(arr);                                                   //[ 10, 20, 30, 40, 80, 90 ]
arr.splice(4,0,50,60,70);
console.log(arr);                                                   //[10, 20, 30, 40, 50,60, 70, 80, 90]
arr.splice(9,0,100);
console.log(arr);                                                   //[10, 20, 30, 40, 50,60, 70, 80, 90,100]
arr.splice(1);
console.log(arr);                                                   //[10]

*/

/*
let arr=[10,20,30,40, 50, 60, 70, 80, 90, 100];
console.log(arr.slice(2,6));                                        //[ 30, 40, 50, 60 ]
console.log(arr.slice(-6,-3));                                      //[ 50, 60, 70 ]
*/

/*
let arr1=[10,20,30];
let arr2=[40,50,60];
console.log([...arr1,...arr2]);                                       //[10 20 30 40 50 60]
*/

/* 
let grand=["5 acres"];
let parent=[...grand," 5 acres"];
let child=[...parent,"10 acres"];
console.log(child);                                             //[ '5 acres', ' 5 acres', '10 acres' ]
 */    

/* let c1=[10,20,30];
let xerox=[...c1];
c1.push(40);
xerox.push(50);
console.log(c1);                                                //[ 10, 20, 30, 40 ]
console.log(xerox);  */                                            //[ 10, 20, 30, 50 ]


/* let arr=[10,20,30,40,50,60];
let c1=arr.slice(3);
let c2=arr.slice(0,3);

console.log([...c1,...c2]);                                     *///[ 40, 50, 60, 10, 20, 30 ]

/* let arr=[10,20,30,40,50,60];

console.log(arr.findIndex((element,index)=>{                    //2
return element==30;
})); */

/*  let arr=[10,20,30,40,50,60];

arr.splice(arr.findIndex((element,index)=>{                    //2
return element==20;
}),1);
console.log(arr);  */                                           //[ 10, 30, 40, 50, 60 ]


/* console.log([1,2,3,4,5].map((element,index)=>{                  //[ 100, 200, 300, 400, 500 ]
    return element*100;
})
); */

//console.log([1,2,3,4,5].map(element=>element*10));              //[ 10, 20, 30, 40, 50 ]

/* console.log([10,20,30,40,50].filter((element,index)=>{             //[ 30, 40, 50 ]
    return element>=30;
})
); */

/* console.log([1,2,3,4,5].map(element=>element*100).filter((element,index)=>{
    return element>=300;
})                                                                      //[ 300, 400, 500 ]
); */

/* console.log([10,20,30,40,50].reduce((firstelement,nextelement)=>{            
    return firstelement+nextelement;                                    //150
})
); */

/* console.log(
    [1,[2],[3],[4]].flat(1)                                             //[ 1, 2, 3, 4 ]
);

console.log(
    [[[[1]]],[[[[[[[2]]]]]]],[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]].flat(Infinity)    //[ 1, 2, 3 ]
); */


/* console.log(
    [1,5,2,4,3].sort((arg1,arg2)=>{
        return arg1-arg2;                                               //[ 1, 2, 3, 4, 5 ]
    })
);

console.log(
    [1,5,2,4,3].sort((arg1,arg2)=>{
        return arg2-arg1;                                               //[ 5, 4, 3, 2, 1 ]
    })
); */

/* console.log(
    Array.from("Hello").reverse().toString().replaceAll(",","")         //olleH
); */
/* 
let arr = ["Angular","React","NodeJS","VueJS"];
console.log(arr.reverse((element,index)=>{
    return element.reverse().toString();                                //[ 'VueJS', 'NodeJS', 'React', 'Angular' ]
})
); 
 */



//console.log("welcome to ashok it".substr(0,7));                         //welcome

/* let obj = {
    "key1":"Hello_1",
    "key2":"Hello_2",
    "key3":"Hello_3"
};
for(let key in obj){
    console.log( obj[key] );                                            //Hello_1 Hello_2 Hello_3
} */

/* let arr2 = [10,20,30,40,50,60,70,80,90,100];
arr2.copyWithin(7);
console.log(arr2);                                                      //[10, 20, 30, 40, 50,60, 70, 10, 20, 30]
 */

/* let arr = [10,20,30,40,50];
let arr1=arr.fill(100);
console.log(arr1);                                                     //[ 100, 100, 100, 100, 100 ]
let arr2=arr1.fill(200,1);
console.log(arr2);   */                                                    //[ 100, 200, 200, 200, 200 ]


/* console.log(
    [10,20,30,40,50].some((element,index)=>{
        return element<=50;                                                //true
    })
);
 */

console.log(
    [1,2,10,4,5].find((element,index)=>{
        return element==10;                                                 //undefined
    })
);







