// Binary Search

a = [11, 10, 12, 3, 2, 4]

a.sort((p, q) => p - q)


search = 11
low = 0
up = a.length - 1
mid = 0
isPresent = false

while (low <= up) {
    mid = Math.floor((low + up) / 2)

    if (a[mid] == search) {
        isPresent = true
        break
    }
    else if (a[mid] < search) {
        low = mid + 1
    }
    else {
        up = mid - 1
    }
}
console.log(isPresent? `${search} is present`: 'not present');

//flowchart and manual iteration