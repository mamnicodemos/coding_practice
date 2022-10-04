function eraseOverlapIntervals(intervals){
    intervals.sort(function(a, b){
        return a[0] - b[0]; 
     });
     let count = 0;
     let j = 0;
     for(let i = 1; i < intervals.length; i++){
         let nextsi = intervals[i][0];
         let nextei = intervals[i][1];
         let currente = intervals[j][1];
         
         if(currente > nextsi){
             count++;
             if(nextei < currente){
                 j = i;
             }
         } else {
             j = i;
         }
     }
     return count;
}

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]));
console.log(eraseOverlapIntervals([[1,2],[2,3]]));