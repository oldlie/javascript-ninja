let array = new Array();
arr[0] = 1;
arr[1] = 7;
arr[2] = -3;
arr[3] = 2;
arr[4] = 6;
arr[5] = 0;

function t(array) {
    array.sort((a, b) => a - b );
    console.log(array);
}

t();