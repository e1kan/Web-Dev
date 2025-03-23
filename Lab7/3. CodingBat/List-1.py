# first_last6
def first_last6(nums):
  return nums[0] == 6 or nums[-1] == 6

# same_first_last
def same_first_last(nums):
  return len(nums) >= 1 and nums[0] == nums[-1]

# make_pi
def make_pi():
  return [3,1,4]

# common_end
def make_pi():
  return [3,1,4]

# sum3
def sum3(nums):
  return sum(nums)

# rotate_left3
def rotate_left3(nums):
  nums.append(nums.pop(0))
  return nums

# reverse3
def reverse3(nums):
  return nums[::-1]

# max_end3
def max_end3(nums):
  max = nums[0] if nums[0] > nums[-1] else nums[-1]
  return [max for el in nums]

# sum2
def sum2(nums):
  if len(nums) < 1:
    return 0
  if len(nums) < 2:
    return sum(nums)
  return sum(nums[:2])

# middle_way
def middle_way(a, b):
  return [a[1], b[1]]

# make_ends
def make_ends(nums):
  return [nums[0], nums[-1]]

# has23
def has23(nums):
  return 2 in nums or 3 in nums
