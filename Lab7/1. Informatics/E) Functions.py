#A - minimum of 4 numbers
def minimumOfFours(a, b, c, d):
    numList = [a, b, c, d]
    minNum = min(numList)

    return minNum

print(minimumOfFours(1, 2, 5, 88))

#B - degree
def power(a, n):
    powered = 1
    while n != 0:
        powered *= a
        n -= 1
    return powered

print(power(12, 2))

#C - excluding OR
def Xor(x, y):
    if (x == True and y == True):
        return False
    else:
        return True
print(Xor(0, 1))
