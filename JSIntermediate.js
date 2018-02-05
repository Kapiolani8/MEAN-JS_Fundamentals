//Part 1 
function starString(num){
    console.log('*'.repeat(num));
}
let stars = starString(8)

//Part 2 & 3

function drawStars(arr){
    for (i = 0; i<arr.length; i++){
       if(typeof arr[i] == "string"){
           console.log(arr[i][0].toLowerCase().repeat(arr[i].length));
       }else{
            console.log('*'.repeat(arr[i]));
        }
    }
}



        // // for (let x =0; x <arr[i].length; x++){
        // //     console.log(arr\)
        // //     newStringArray += arr[i][0].toLowerCase();
        // //     }
        // //     newArray.push(newStringArray);
        // //     }
        // // }
        // return newArray;

let arr = [2,"Kapiolani",4, "Ricardo", 6, "Kobi", 8,10];
drawStars(arr);