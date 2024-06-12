// // Ques 2: Implement Binary Search in JavaScript
// // Given an array of integers nums which is sorted in ascending order, and an integer target,
// // Write a function to search target in nums. If target exists, then return its index.
// // Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.

// // Input: nums = [-1,0,3,5,9,12], target = 9  ----->>>>>  Output:  4
// // Input: nums = [-1,0,3,5,9,12], target = 2  ----->>>>>  Output: -1
// //O(log n)
// //space O(1)
// function binarySearch(nums, target) {
//     let start = 0
//     let end = nums.length - 1

//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2)
//         if (nums[middle] === target) {
//             return middle
//         } else if (nums[middle] < target) {
//             start = middle + 1
//         } else {
//             end = middle - 1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9))

// //1539. Kth missing positive Number 



//2529. Maximum Count of Positive Integer and Negative Integer
function maxCount(nums) {
    return Math.max(upperBound(nums), lowerBound(nums))
}


// [-2,-1,-1,1,2,3]
// low = 0,high = 5
// mid = 2  nums[mid] = -1
function upperBound(nums) {
    let low = 0
    let high = nums.length - 1
    while (low < high) {
        let mid = Math.ceil((low + high) / 2)//convert to low end
        if (nums[mid] < 0) {
            low = mid
        } else {
            high = mid - 1
        }
    }
    return nums[0] >= 0 ? 0 : low + 1
}

function lowerBound(nums) {
    let low = 0
    let high = nums.length - 1
    while (low < high) {
        let mid = Math.floor((low + high) / 2)//convert to high end
        if (nums[mid] > 0) {
            high = mid
        } else {
            low = mid + 1
        }
    }
    return nums[nums.length - 1] <= 0 ? 0 : nums.length - low
}

console.log(maxCount([5,20,66,1314]))

