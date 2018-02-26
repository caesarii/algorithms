
from utils import log, exchange
from math import floor

def perdown(list, current, length):
    child = current * 2 + 1
    while child < length:
        if child + 1 != length and list[child + 1] > list[child]:
            child = child + 1

        if list[current] < list[child]:
            exchange(list, current, child)
        current = child
        child = current * 2 + 1

def heapsort(list):
    length = len(list)
    for i in range(floor(length / 2), -1, -1):
        perdown(list, i, length)

    for i in range(length - 1, 0, -1):
        exchange(list, 0, i)
        perdown(list, 0, i)

if __name__ == '__main__':
    list = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    heapsort(list)
    log(list)