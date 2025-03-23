# count_evens
def count_evens(nums):
  return len([x for x in nums if x % 2 == 0])

# big_diff
def big_diff(nums):
  return max(nums) - min(nums)

# centered_average
def centered_average(nums):
  nums = sorted(nums)[1:-1]
  return sum(nums) // len(nums)

# sum13
def sum13(nums):
  sum = 0
  flag = False
  for num in nums:
    if flag:
      flag = False
      continue
    if num == 13:
      flag = True
      continue
    sum += num
  return sum

# sum67
def sum67(nums):
  flag = False
  sum = 0
  for i in range(len(nums)):
    if flag:
      if nums[i] == 7:
        flag = False
      continue
    if nums[i] == 6:
      flag = True
      continue
    sum += nums[i]
  return sum

# has22
def has22(nums):
  for i in range(len(nums)-1):
    if nums[i] == 2 and nums[i + 1] == 2:
      return True
  return False
