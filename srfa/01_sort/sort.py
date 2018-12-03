from math import floor


from utils import log, exchange

def insertion(list):
    length = len(list)
    for current in range(1, length):
        for prev in range(current, 0, -1):
            if list[prev] < list[prev - 1]:
                exchange(list, prev, prev - 1)

def selection(list):
    pass

def bubble(list): 
    pass

def perdown(list, current, length):
    child = current * 2 + 1
    while child < length:
        if child + 1 != length and list[child + 1] > list[child]:
            child = child + 1

        if list[current] < list[child]:
            exchange(list, current, child)
        current = child
        child = current * 2 + 1
def heap(list):
    length = len(list)
    for i in range(floor(length / 2), -1, -1):
        perdown(list, i, length)

    for i in range(length - 1, 0, -1):
        exchange(list, 0, i)
        perdown(list, 0, i)

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
def quick(lst):
    length = len(lst)
    quicksortIter(lst, 0, length - 1)