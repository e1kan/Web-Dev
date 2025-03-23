# cigar_party
def cigar_party(cigars, is_weekend):
  if is_weekend:
    return cigars >= 40
  return cigars >= 40 and cigars <= 60

# date_fashion
def date_fashion(you, date):
  if you <= 2 or date <= 2:
    return 0
  if you >= 8 or date >= 8:
    return 2
  return 1

# squirrel_play
def squirrel_play(temp, is_summer):
  if is_summer:
    return temp >= 60 and temp <= 100
  else:
    return temp >= 60 and temp <= 90

# caught_speeding
def caught_speeding(speed, is_birthday):
  if is_birthday:
    speed -= 5

  if speed <= 60:
    return 0
  elif speed >= 61 and speed <= 80:
    return 1
  else:
    return 2

# sorta_sum
def sorta_sum(a, b):
  if a + b in range(10, 20):
    return 20
  return a + b

# alarm_clock
def alarm_clock(day, vacation):
  if vacation:
    if day == 0 or day == 6:
      return 'off'
    else:
      return '10:00'
  else:
    if day == 0 or day == 6:
      return '10:00'
    else:
      return '7:00'

# love6
def love6(a, b):
  return a == 6 or b == 6 or abs(a - b) == 6 or a + b == 6

# in1to10
def in1to10(n, outside_mode):
  if outside_mode:
    return n <= 2 or n >= 10
  return n in range(1, 11)

# near_ten
def near_ten(num):
  li = [num-2,num-1,num,num+1,num+2]

  for el in li:
    if el % 10 == 0:
      return True
  return False
