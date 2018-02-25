
from utils import log, exchange
from math import floor

def perdown(list, i, length):
    temp = list[i]
    while i * 2 + 1 < length:
        child = i * 2 + 1
        if child != length - 1 and list[child + 1] > list[child]:
            child = child + 1
        if temp < list[child]:
            list[i] = list[child]
        else:
            break

        i = child
    list[i] = temp

def heapsort(list):
    length = len(list)
    for i in range(floor(length / 2), -1, -1):
        perdown(list, i, length)

    for i in range(length - 1, 0, -1):
        exchange(list, 0, i)
        perdown(list, 0, i)

    return list

if __name__ == '__main__':
    list = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    sorted = heapsort(list)
    log(sorted)