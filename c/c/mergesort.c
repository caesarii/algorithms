//
//  mergesort.c
//  c
//
//  Created by qinghe on 26/02/2018.
//  Copyright © 2018 qinghe. All rights reserved.
//

#include <stdlib.h>
#include "mergesort.h"
#include "utils.h"

void merge(type *list, int left, int center, int right) {
    type *sorted;
    sorted = malloc(left * sizeof(type));
    for(int i = 0; i < left; i++) {
        sorted[i] = list[i];
    }

    int leftEnd = center - 1;
    int current = left;
    int num = right - left + 1;
    
    while(left <= leftEnd && center <= right) {
        if(list[left] <= list[center]) {
            sorted[current] = list[left];
            left += 1;
        } else {
            sorted[current] = list[center];
            center += 1;
        }
        current += 1;
    }
    
    while(left <= leftEnd) {
        sorted[current] = list[left];
        current += 1;
        left += 1;
    }
    while(center <= right) {
        sorted[current] = list[center];
        current += 1;
        center += 1;
    }
    
    for(int i = 0; i < num; i++, right--) {
        list[right] = sorted[right];
    }
    free(sorted);
};

void mergesortIter(type *list, int left, int right) {
    if(left < right) {
        int center = (left + right) / 2;
        mergesortIter(list, left, center);
        mergesortIter(list, center + 1, right);
        merge(list, left, center + 1, right);
    }
};

void mergesort_qing(type *list, int length) {

    mergesortIter(list, 0, length - 1);
};
