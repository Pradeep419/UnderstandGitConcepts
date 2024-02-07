function twoSum(nums: number[], target: number): number[] {
    
    let output : number[] = [];
    
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            
            if(nums[i]+nums[j]===target){
                output.push(i)
                output.push(j)
                break;
            }
        }
        
    }
    return output;
};

let result = twoSum([1,2,5,6,7], 12);
console.log(result);

// 3,2,5,6,7 target is 11 output should be [1,2]

let arr1 = [3];
let arr2 = [-2,-1];

//sort() sort the elements based on ASCII values if no equation provided.
let arr3 = arr1.concat(arr2).sort((a, b) => a-b);
console.log(arr3);

let median = arr3.length%2===0 ? ((arr3[(arr3.length/2)-1]+arr3[(arr3.length/2)])/2)
                                : arr3[(arr3.length-1)/2];

console.log(median);

// 1,2,3,4,5,6

let number = -3457
let rem = 0;
let res = 0;
let number2 = Math.sign(number) == -1 ? (number-(2*number)) : number;
let pow = Math.ceil(Math.log10(number2 + 1));

if(Math.sign(number) == -1){
    
    while(number<=-1){
    
        rem = number%10;
        number = Math.trunc(number/10);
        res = (rem*(10**(pow-1)))+res;
        pow = pow-1;
    }
}
else{

    while(number>=1){
    
        rem = number%10;
        number = Math.trunc(number/10);
        res = (rem*(10**(pow-1)))+res;
        pow = pow-1;
    }
}


console.log(Math.trunc(res));

function reverse(x: number): number {
    let rem = 0;
    let res = 0;
    let number2 = Math.sign(x) == -1 ? (x-(2*x)) : x;
    let pow = Math.ceil(Math.log10(number2 + 1));
    
    if(Math.sign(x) == -1){
        
        while(x<=-1){
        
            rem = x%10;
            x = Math.trunc(x/10);
            res = (rem*(10**(pow-1)))+res;
            pow = pow-1;
        }
    }
    else{
    
        while(x>=1){
        
            rem = x%10;
            x = Math.trunc(x/10);
            res = (rem*(10**(pow-1)))+res;
            pow = pow-1;
        }
    }
        return res;
    };
    
    let results = reverse(1534236469);
    console.log(results);

    function letterCombinations(digits: string): string[] {
    
        let myMap = new Map<string, string[]>();

        myMap.set("2", ["a", "b", "c"]);
        myMap.set("3", ["d", "e", "f"]);
        myMap.set("4", ["g", "h", "i"]);
        myMap.set("5", ["j", "k", "l"]);
        myMap.set("6", ["m", "n", "o"]);
        myMap.set("7", ["p", "q", "r", "s"]);
        myMap.set("8", ["t", "u", "v"]);
        myMap.set("9", ["w", "x", "y", "z"]);
        
        let length = digits.length;
        
        if(length === 1) {
            return myMap.get(digits)!;
        }

        else{

            let array1: string[] = myMap.get(digits[0])!;
            let array2: string[] = myMap.get(digits[1])!;
            let array3: string[] = []
            for(let i=0; i<array1?.length; i++){
                for(let j=0; j<array2?.length; j++){
                    array3.push(array1[i].concat(array2[j]));
                }
            }
            return array3;
        }
        

    };

    let output: string[] = letterCombinations("10")
    console.log(output);