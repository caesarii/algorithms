
log = print

def exchange(list, i, j):
    temp = list[i]
    list[i] = list[j]
    list[j] = temp
    return list

if __name__ == '__main__':
    list = [0, 1, 3]
    exchange(list, 0, 1)
    log('list', list)