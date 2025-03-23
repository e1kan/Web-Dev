import math
# FOR ---------------------------------------------------------------- :

#A - even numbers
a = int(input())
b = int(input())
for x in range(a, b + 1):
    if (x % 2 == 0):
        print(x)

#B - leftovers
a = int(input())
b = int(input())
c = int(input())
d = int(input())
for x in range(a, b + 1):
    if (x % d == c):
        print(x)

#C - squares
a = int(input())
b = int(input())
for x in range(a, b + 1):
    if (int(sqrt(x))**2 == x):
        print(x)

#C2 - digit in a number
x = str(input())
d = str(input())
answer = 0
for digit in x:
    if (digit == d):
        answer += 1
print(answer)

#C3 - sum of the digits
x = str(input())
sum = 0
for digit in x:
    sum += int(digit)
print(sum)

#C4 - reverse the number
x = str(input())
reversed_num = ''
for digit in x[::-1]:
    reversed_num += digit
print(int(reversed_num))

#G - minimum divider
x = int(input())
for div in range(2, x + 1):
    if (x % div == 0):
        print(div)
        break

#H - the number's dividers
x = int(input())
for div in range(1, x + 1):
    if (x % div == 0):
        print(div)

#I - the number of dividers
x = int(input())
numOfDivs = 1
for div in range(1, x):
    if (x % div == 0):
        numOfDivs += 1
print(numOfDivs)

#J - sum of 100
sumOfHundred = 0
for num in range(100):
    num = int(input())
    sumOfHundred += num
print(sumOfHundred)

#K - sum of numbers
N = int(input())
sumOfN = 0
for num in range(N):
    num = int(input())
    sumOfN += num
print(sumOfN)

#K1 - number conversion
binaryNum = str(input())
actualNum = 0
something = 0
for digit in binaryNum[::-1]:
    actualNum += int(digit) * 2**something
    something += 1
print(actualNum)

#M - nulls
N = int(input())
sumOfNulls = 0
for num in range(N):
    num = str(input())
    sumOfNulls += num.count('0')
print(sumOfNulls)

# WHILE -------------------------------------------------------------- :
#A - list of squares
N = int(input())
counter = 1
while counter**2 < N:
    print(counter**2)
    counter += 1

#B - minimum divider
N = int(input())
minDiv = 2
while minDiv != N + 1:
    if N % minDiv == 0:
        print(minDiv)
        break
    minDiv += 1

#C - list of 2's powers
N = int(input())
twoInDegree = 1
while twoInDegree < N:
    print(twoInDegree)
    twoInDegree *= 2

#D - concrete 2's power
N = int(input())
if N == 1:
    print("YES")
else:
    while N % 2 == 0:
        N //= 2
    if N == 1:
        print("YES")
    else:
        print("NO")

#E - binary logarithm
N = int(input())
newNum = 1
k = 0
while newNum < N:
    newNum *= 2
    k += 1
print(k)
