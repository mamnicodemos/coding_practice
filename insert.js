function insert(intervals, newInterval){
    intervals.push(newInterval);
    return mergeIntervals(intervals);
}

function mergeIntervals(intervals){
    if(intervals.length <= 1){
        return intervals;
    }
    intervals.sort(function(a,b){return a[0] - b[0]});
    const answer = [];
    let currentInterval = intervals[0];
    answer.push(currentInterval);
    for(let interval of intervals){
        let currentStart = currentInterval[0];
        let currentEnd = currentInterval[1];
        let nextStart = interval[0];
        let nextEnd = interval[1];
        if(currentEnd >= nextStart){
            currentInterval[0] = Math.min(currentStart, nextStart);
            currentInterval[1] = Math.max(currentEnd, nextEnd);
        } else {
            currentInterval = interval;
            answer.push(currentInterval);
        }
    }
    return answer;
}

console.log(insert([[1,3],[6,9]],[2,5]));
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]));