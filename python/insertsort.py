
from utils import log, exchange

def insertsort(list):
    length = len(list)
    # 
    for current in range(1, length):
        for prev in range(current, 0, -1):
            if list[prev] < list[prev - 1]:
                exchange(list, prev, prev - 1)
    return list


if __name__ == '__main__':
    list = [38, 545, 6, 9, 324, 1, 4, 564,17, 754]
    sorted = insertsort(list)
    log(sorted)


