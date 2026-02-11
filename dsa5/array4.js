let arr = [[1,2,3],
           [4,5,6],
           [7,8,9]];
let res = [];
let minr = 0;
let minc = 0;
let maxr = arr.length-1;
let maxc = arr[0].length-1;

while (minr<=maxr && minc<=maxc){
    for(let c=minc; c<=maxc; c++){
        res.push(arr[minr][c]);
    }
    minr++;
    for(let r=minr; r<=maxr; r++){
        res.push(arr[r][maxc]);
    }
    maxc--;
   if(minr<=maxr){
     for(let c=maxc; c>=minc; c--){
        res.push(arr[maxr][c]);
    }
   }
    maxr--;
   if(minc<=maxc){
     for(let r=maxr; r>=minr; r--){
        res.push(arr[r][minc]);
    }
    minc++;
   }
}
console.log(res);
