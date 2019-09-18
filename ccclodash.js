const _ = module.exports = {}

// _.chunk(['a', 'b', 'c', 'd'], 2) => [['a', 'b'], ['c', 'd']]
// _.chunk(['a', 'b', 'c', 'd'], 3) => [['a', 'b', 'c'], ['d']]
_.chunk = function (list, n) {
  const clist = []
  for (let i=0; i<list.length; i+=n) {
    clist.push(list.slice(i, i+n))
  }
  return clist
}
/*_.drop([1, 2, 3]);
// => [2, 3]
 
_.drop([1, 2, 3], 2);
// => [3]
 
_.drop([1, 2, 3], 5);
// => []
 
_.drop([1, 2, 3], 0);
// => [1, 2, 3]
*/
_.drop = function (list, n=1){
  let rlist = []
  for (let i=n; i<list.length; i++){
    rlist.push(list[i])
  }
  return rlist
}
/*
_.dropRight([1, 2, 3]);
// => [1, 2]
 
_.dropRight([1, 2, 3], 2);
// => [1]
 
_.dropRight([1, 2, 3], 5);
// => []
 
_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
*/

_.dropRight = function (list, n){
  let alist =[]
  for (let i=0; i<list.length-n; i++){
    alist.push(list[i])
  }
  return alist
}
/*
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
*/
_.compact = function (list) {
  let  blist = []
  for (let i=0;i<list.length;i++) {
    if (list[i]) {
      blist.push(list[i])
    }
  }
  return blist
}
/*
_.last([1, 2, 3]);
// => 3
*/
_.last = function (list){
  let clist = []
  for (let i = 0;i<list.length;i++){
    if(i=list.length-1){
      clist.push(list[i])
    }
    return clist
  }
}
