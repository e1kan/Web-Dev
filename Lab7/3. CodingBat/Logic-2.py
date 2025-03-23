# make_bricks
def make_bricks(small, big, goal):
  max_big = min(big, goal // 5)
  remaining = goal - (max_big * 5)
  return remaining <= small

# lone_sum
def lone_sum(a, b, c):
  sum = 0
  if a != b and a != c:
    sum += a
  if b != c and b != a:
    sum += b
  if c != a and c != b:
    sum += c
  return sum

# lucky_sum
def lucky_sum(a, b, c):
  sum = 0
  if a != 13:
    if b != 13:
      if c != 13:
        return a+b+c

      return a + b

    return a
  return sum

# no_teen_sum
def fix_teen(n):
  if n in range(13, 20):
    if n == 15 or n == 16:
      return n
    return 0
  return n

def no_teen_sum(a, b, c):
  return sum(map(fix_teen, (a,b,c)))

# round_sum
def round10(n):
  if n % 10 >= 5:
    return n + 10 - (n % 10)
  else:
    return n - (n % 10)

def round_sum(a, b, c):
  return sum(map(round10, (a,b,c)))

# close_far
def is_close(x, y):
    return abs(x - y) <= 1

def is_far(x, y):
    return abs(x - y) >= 2

def close_far(a, b, c):
  if is_close(a, b) and is_far(a, c) and is_far(b, c):
      return True

  if is_close(a, c) and is_far(a, b) and is_far(b, c):
      return True
  return False

# make_chocolate
def make_chocolate(small, big, goal):
    max_big = min(big, goal // 5)
    remaining = goal - (max_big * 5)

    return remaining if remaining <= small else -1
