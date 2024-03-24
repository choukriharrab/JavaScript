
// In Bubble Sort algorithm, 


let arr = [1,10,2,12,8,4,9];
let a;

function bubbleSort(){
    
    for(i=0; i<arr.length-1; i++ ){
        for(j=0; j<arr.length-i-1; j++ ){
            if(arr[j]>arr[j+1]){
                a = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=a;
            }

        };
    };

    return arr;
}

console.log(bubbleSort())

// Selection Sort
arr = [1,10,2,12,8,4,9];

let min;
 
function selectionSort(){
    
    for(i=0; i<arr.length-1; i++ ){

        min = i;

        for(j=i+1; j<arr.length; j++){

            if(arr[min]>arr[j]){
                min = j;                                
            };

        };
        a = arr[i];
        arr[i]=arr[min];
        arr[min]=a;
    };

    return arr;
}

console.log(selectionSort())

// Insertion Sort
arr = [1,10,2,12,8,4,9];

function insertionSort(){
    
    for(i=0; i<arr.length; i++ ){
        a = arr[i];
        j = i-1;
        while(j>=0 && arr[j]>a){
            arr[j+1] = arr[j];
            j--
        }
        arr[j+1] = a;
    };

    return arr;
}

console.log(insertionSort())

// Merge Sort

function sort(array, l, r){
 
    if(l<r){

        var m = parseInt(l+(r-l)/2);
            
        sort(array, l, m);

        sort(array, m+1, r);

        merge(array, l, m, r);

        return array;

    };

};

function merge(array, l, m, r){

    let leftLength = m - l + 1;
    let rightLength = r - m;

    let leftArray= [];
    let rightArray = [];

    for (i = 0; i < leftLength; i++) {

        leftArray[i]=array[l + i];

    };

    for (j = 0; j < rightLength; j++) {

        rightArray[j]=array[m+1+j];

    };

    i = 0;
    j = 0;
    k = l;

    while (i < leftLength && j < rightLength) {

        if (leftArray[i] <= rightArray[j]) {

            array[k] = leftArray[i];
            i++;

        } else {

            array[k] = rightArray[j];
            j++;

        };

        k++;
    };

    while (i < leftLength) {

        array[k] = leftArray[i];
        i++;
        k++;
        
    };

    while (j < rightLength) {

        array[k] = rightArray[j];
        j++;
        k++;
    };

};

arr = [1,10,2,12,8,4,9];

console.log(sort(arr, 0 ,arr.length-1));

// Linear Search


function linearSearch(arr, k){
    for(i=0; i<arr.length; i++){
        if(arr[i]===k){
            return i;
        }
    }
    return "Not Found!"
}
arr = [1,10,2,12,8,4,9];

console.log(linearSearch(arr, 12));

// Binary Search


function binarySearch(arr, k, low, high){

    
    for(i=0; i<arr.length; i++){

        let mid  =parseInt((low+high)/2);
        let midArr= arr[mid];

        if(midArr===k){
            return mid;
        }else if(midArr<k){
            low = mid + 1;
        }else if(midArr>k){
            high = mid - 1;
        }

    }

    return "Not Found!"
}
arr = [1,10,2,12,8,4,9];

console.log(sort(arr, 0 ,arr.length-1));


console.log(binarySearch(arr, 4, 0, arr.length-1));