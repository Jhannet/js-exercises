var searchRange = function(nums, target) {
    const low = 0, high = nums.length - 1;
    const startingPosition = lowerBound(nums, low, high, target);
    const endingPosition = lowerBound(nums, low, high, target + 1) - 1;
    if(startingPosition < nums.length && nums[startingPosition] == target){
        return [startingPosition, endingPosition];
    }
    return [-1, -1];
};

var lowerBound = function(nums, low, high, target){
    while(low <= high){
        const mid = (low + high) >> 1;
        if(nums[mid] < target){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return low;
}

console.log(searchRange([5,7,7,8,8,10], 8))