import math

# A - hypotenuse
a = int(input())
b = int(input())
hypotenuse = math.sqrt(a**2 + b**2)
print('Hypotenuse:', hypotenuse)

#B - next, previous
num = int(input())
print("The next number for the number ", num, ' is ', num + 1, '.')
print("The previous number for the number ", num, ' is ', num - 1, '.')


#C - split the apples 1
n = int(input())
k = int(input())
print("Apples splitted evenly: ", k // n)

#C - split the apples 2
n = int(input())
k = int(input())
print("Apples left in the basket: ", k % n)

#D - MRAR
v = int(input())
t = int(input())
stop = (v * t) % 109
stop = (109 + stop) % 109
print(stop)
