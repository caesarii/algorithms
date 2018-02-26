from utils import log, exchange
from math import floor

def median(lst, left, right):
    center = floor((left + right) / 2)
    if lst[left] > lst[center]:
        exchange(lst, left, center)
    if lst[left] > lst[right]:
        exchange(lst, left, right)
    if lst[center] > lst[right]:
        exchange(lst, center, right)

    return lst[center]

def quicksortIter(lst, left, right):
    if right - left <= 1:
        if lst[left] > lst[right]:
            exchange(lst, left, right)
        return

    pivot = median(lst, left, right)
    exchange(lst, floor((left + right) / 2), right - 1)
    i = left + 1
    j = right - 2
    while(True):
        while lst[i] < pivot:
            i += 1
        while lst[j] > pivot:
            j -= 1
        if i < j:
            exchange(lst, i, j)
        else:
            break
    exchange(lst, i, right - 1)
    quicksortIter(lst, left, i - 1)
    quicksortIter(lst, i + 1, right)

def quicksort(lst):
    length = len(lst)
    quicksortIter(lst, 0, length - 1)


if __name__ == '__main__':
    lst = [38, 545, 6, 9, 324, 1, 4, 564, 17, 754]
    quicksort(lst)
    log(lst)