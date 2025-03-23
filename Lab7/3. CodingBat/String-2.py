# double_char
def double_char(str):
  s = ''
  for c in str:
    s += (c * 2)
  return s


# count_code
def count_code(str):
  count = 0
  for i in range(len(str) - 3):
    if str[i:i+2] == 'co' and str[i+3] == 'e':
      count += 1
  return count


# count_hi
def count_hi(str):
  return str.count('hi')


# end_other
def end_other(a, b):
  if len(a) < len(b):
    return b.lower().endswith(a.lower())
  else:
    return a.lower().endswith(b.lower())


# cat_dog
def cat_dog(str):
  return str.count('cat') == str.count('dog')


# xyz_there
def xyz_there(str):
  for i in range(len(str) - 2):
    if str[i:i+3] == 'xyz':
      if i > 0 and str[i - 1] == '.':
        continue
      else:
        return True
  return False
