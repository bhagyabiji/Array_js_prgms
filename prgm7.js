p = [12,10,20,11,30]
q = [25,11,33,30,20]

p.sort((p, q) => p - q)
q.sort((p, q) => p - q)

i = 0 // index of p array
j = 0 //index of q array

while(i<=p.length-1 && j<=q.length-1){

    if(p[i] == q[j]){
        console.log(p[i]);
        i++
        j++
    }
    else if(p[i] > q[j]){
        j++
    }
    else {
        i++
    }

}