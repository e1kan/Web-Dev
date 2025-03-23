#A - maximum of two numbers
a = int(input())
b = int(input())
if (a > b):
    print(a)
else:
    print(b)

#B - leap year
year = int(input())
if (year % 4 == 0 and year % 100 != 0 or year % 400 == 0):
    print("YES")
else:
    print("NO")


#C - testing system
testNum = int(input())
studAnsw = int(input())
if (testNum != 1 and studAnsw != 1):
    print("YES")
elif (testNum == 1 and studAnsw == 1):
    print("YES")
else:
    print("NO")


#D - number's sign
num = int(input())
if (num > 0):
    print(1)
elif (num < 0):
    print(-1)
else:
    print(0)

#E - which number is larger
a = int(input())
b = int(input())
if (a > b):
    print(1)
elif (a < b):
    print(2)
else:
    print(0)
