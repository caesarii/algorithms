from utils import log, exchange
from math import floor

def merge(lst, left, center, right):
    sorted = lst[0:left]
    leftEnd = center - 1
    num = right - left + 1

    while left <= leftEnd and center <= right:
        if lst[left] <= lst[center]:
            sorted.append(lst[left])
            left += 1
        else:
            sorted.append(lst[center])
            center += 1

    while left <= leftEnd:
        sorted.append(lst[left])
        left += 1

    while center <= right:
        sorted.append(lst[center])
        center += 1

    for i in range(num):
        list[right] = sorted[right]
        right -= 1
    return lst



def mergesortIter(list, left, right):
    if left < right:
        center = floor((left + right) / 2)
        mergesortIter(list, left, center)
        mergesortIter(list, center + 1, right)
        merge(list, left, center + 1, right)
    else:
        return

def mergesort(list):
    length = len(list)
    mergesortIter(list, 0, length - 1)

if __name__ == '__main__':
    list = [38, 545, 6, 9, 324, 1, 4, 564, 17, 754]
    mergesort(list)
    log(list)