function main() {
    arr = [4,5,1,8, 3,4];
     for(let i = 0; i< arr.length; i++){
         for(let j=0; j< arr.length; j++){
              if(arr[j] > arr[j+1]){
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
         }
       
 }
  console.log(arr)
 }
 main()

 //time complexitiy is o(n^2)