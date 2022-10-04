class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        for(int n: nums){
            map.put(n, map.getOrDefault(n, 0) + 1);
        }
        
        List<Integer>[] bucket = new List[nums.length + 1];
        for(int n: map.keySet()){
            int freq = map.get(n);
            if(bucket[freq] == null){
                bucket[freq] = new LinkedList<>();
            }
            bucket[freq].add(n);
        }
        
        int[] res = new int[k];
        int j = 0;
        for(int i = bucket.length - 1; i > 0 && j < k; i--){
            if(bucket[i] != null){
                for(int l = 0; l < bucket[i].size(); l++){
                    res[j] = bucket[i].get(l);
                    j++;
                    if(j == k){
                        break;
                    }
                }
            }
        }
        return res;
    }
}