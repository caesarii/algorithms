//
//  quicksort.c
//  c
//
//  Created by qinghe on 27/02/2018.
//  Copyright © 2018 qinghe. All rights reserved.
//

#include "quicksort.h"
#include "utils.h"
#include <stdbool.h>

type median(type *list, int left, int right) {
    int center = (left + right) / 2;
    type l = list[left];
    type c = list[center];
    type r = list[right];
    if(l > c) {
        exchange(list, left, center);
    }
    if(l > r) {
        exchange(list, left, right);
    }
    if(c > r) {
        exchange(list, center, right);
    }
    return list[center];
};

void quicksortIter(type *list, int left, int right) {
    // 递归边界
    if(right - left <= 1) {
        if(list[left] > list[right]) {
            exchange(list, left, right);
        }
        return;
       
    }
    // 枢纽元
    type pivot = median(list, left, right);
    int center = (left + right) / 2;
    exchange(list, center, right - 1);
    
    // 划分集合
    int i = left + 1;
    int j = right - 2;
    while(true) {
        while(list[i] < pivot) {
            i += 1;
        }
        while(list[j] > pivot) {
            j -= 1;
        }
        
        if(i < j) {
            exchange(list, i, j);
        } else {
            break;
        }
    }
    
    // 复原 pivot
    exchange(list, i, right - 1);
    // 递归
    quicksortIter(list, left, i - 1);
    quicksortIter(list, i + 1, right);
};

void quicksort(type *list, int length){
    quicksortIter(list, 0, length - 1);
};
