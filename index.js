/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0, high = nums.length - 1;
    while(low <= high){
        let mid = parseInt((low + high)/2);
        if(nums[low] == nums[mid]){
            if(nums[low] > nums[low + 1]) return nums[low+1];
            else return nums[low];
        }
        else if(nums[high] == nums[mid]){
            if(nums[high] > nums[high -1]) return nums[high - 1];
            else return nums[high];
        }
        else if(nums[mid] > nums[high]){
            low = mid + 1;
        }
        else if(nums[mid] > nums[low]){
            high = mid - 1;
        }
        else if(nums[mid] < nums[low] && nums[mid] < nums[high]){
            high = high - 1;
        }
    }
};