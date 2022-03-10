let obj=
{
    num1:100,
    num2:200
};
function myFun(arg1,arg2,arg3)
{
    console.log(arg1+arg2+arg3+this.num1+this.num2);                                     //1100
};
myFun.call(obj,300,200,300);
let arr=[200,300,400];
myFun.apply(obj,arr);                                                                   //1200
let newmemory=myFun.bind(obj);
newmemory(300,200,400);                                                                 //1200