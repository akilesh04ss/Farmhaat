def maximum( list ):
    max = list[ 0 ]
    for i in list:
        if i > max:
            max = i
    return max
res = maximum([10, 20, 30, 40])
print("The maximum number is ",res)