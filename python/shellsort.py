
from utils import log, exchange
from math import floor

def half(n):
    return floor(n / 2)

def shellsort (list):
    length = len(list)

    increment = half(length)
    while increment > 0:
        for current in range(increment, length):
            prev = current
            while prev >= increment:
                if list[prev] < list[prev - increment]:
                    exchange(list, prev, prev - increment)
                prev = prev - increment

        increment = half(increment)

if __name__ == '__main__':
    list = [38, 545, 6, 9, 324, 1, 4, 564, 17, 754]
    shellsort(list)
    log(list)
