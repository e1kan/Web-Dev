#A - A[0], A[2], A[4], ...
N = int(input())
arr = [int(input()) for num in range(N)]
print(*arr[::2])


#B - output even elements
N = int(input())
arr = [int(input()) for num in range(N)]
for x in arr:
    if x % 2 == 0:
        print(x)


#C - num of positive elements
N = int(input())
arr = [int(input()) for num in range(N)]
k = 0
for x in arr:
    if x > 0:
        k += 1
print(k)


#D - num of elements that are bigger than previous elements
N = int(input())
arr = [int(input()) for num in range(N)]
k = 0
for x in range(1, len(arr)):
    if arr[x] > arr[x-1]:
        k += 1
print(k)


#E - are there two elements with the same signs
N = int(input())
arr = [int(input()) for num in range(N)]
k = 0
for x in arr:
    if x > 0:
        k += 1
print(k)


#F - num of elements that are bigger than previous and next elements
import numpy as np
N = int(input())
arr = [int(input()) for num in range(N)]
k = 0
answ = 'NO'
for x in range(1, len(arr) - 1):
    if np.sign(arr[x])== np.sign(arr[x-1]) or np.sign(arr[x]) == np.sign(arr[x+1]):
        answ = 'YES'
        break
print(answ)


#G -  reverse the elements
N = int(input())
arr = [int(input()) for num in range(N)]
arr.reverse()
print(*arr)
