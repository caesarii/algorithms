
from utils import log, exchange
from math import floor

def half(n):
    return floor(n / 2)

def shellsort (list):
    length = len(list)
    increment = half(length)

    while increment > 0:
        for i in range(increment, length):
            temp = list[i]
            j = i
            while j >= increment:
                if temp < list[j - increment]:
                    list[j] = list[j - increment]
                else:
                    break
                j = j - increment

            list[j] = temp
        increment = half(increment)
    return list

if __name__ == '__main__':
    list = [38, 545, 6, 9, 324, 1, 4, 564, 17, 754]
    sorted = shellsort(list)
    log(sorted)
