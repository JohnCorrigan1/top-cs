const arr = [8, 2, 3, 6, 5, 4, 7, 1, 100, 88, 99, 39999, -4, 10]

export default function sort(arr){
    if(arr.length <= 1) return arr;

    const middle = Math.floor(arr.length/2)
    // keeps calling sort on each arr until its one element
    //recursion magic
    let left = sort(arr.slice(0, middle))
    let right = sort(arr.slice(middle))
    //merges the two single element or empty arrays
    return merge(left, right)
}

function merge(arr1, arr2){
    const merged = [];
    let i = 0;
    let j = 0;
    
    while (i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            merged.push(arr1[i])
            i++
        }
        else if(arr2[j] <= arr1[i]){
            merged.push(arr2[j])
            j++;
        }
    }
    
    while(i < arr1.length){
        merged.push(arr1[i])
        i++;
    }
    
    while(j < arr2.length){
        merged.push(arr2[j])
        j++;
    }
    return merged
}

console.log(sort(arr))