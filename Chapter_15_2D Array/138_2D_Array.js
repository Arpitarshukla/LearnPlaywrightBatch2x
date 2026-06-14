// 2D Array 
//Kind of matrix

//Single Dimensional array example: let a =[1,2,3,4]; -----> stored in the continuous memory

// Multi Dimensional Array has Rows and columns ---> i=row and j= column (row follwed by column) ---> they are in the form of matrices
// each cell has a combination of i,j ---->  3 * 3 matrix positions (indexes) given below
// row 1-  0,0 ---- 0,1 ---- 0,2
// row 2-  1,0 ---- 1,1 ---- 1,2
// row 3-  2,0 ---- 2,1 ---- 2,2

let grid = [
    [1, 2, 3],    //3 rows of 3*3 matrix
    [4, 5, 6],
    [7, 8, 9]
]

//Index of 1 =0,0
//Index of 5= 1,1

//To Iterate over them: ----> using For Loop (2 for loops)

for (let i = 0; i < 3; i++) {   // i value go from 0 to 2 ---> 0,1,2
    for (let j = 0; j < 3; j++) {
        console.log(grid[i][j]);     /// This is will print all the value-- //console.log add a new line.. hence all the elements are on the new line (ascending- 1-9 downward directions)
    }
    console.log("\n");// to print in the form of per row and then gap then again row--- use this
}


















///Debugging  -- dubg the values
// to debug click on the line of console---> click on line 25











