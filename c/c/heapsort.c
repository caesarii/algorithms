//
//  heapsort.c
//  c
//
//  Created by qinghe on 26/02/2018.
//  Copyright © 2018 qinghe. All rights reserved.
//

#include "heapsort.h"
#include "utils.h"

void perdown(type *list, int current, int length){
    int child = current * 2 + 1;
    while(child < length) {
        if(child + 1 != length && list[child + 1] > list[child]) {
            child = child + 1;
        }
        
        if(list[child] > list[current]) {
            exchange(list, current, child);
        }
        
        current = child;
        child = current * 2 + 1;
    }
}

void heapsort_qing(type *list, int length) {
    for(int i = length / 2; i >= 0; i--) {
        perdown(list, i, length);
    }
    
    for(int i = length - 1; i > 0; i--) {
        exchange(list, 0, i);
        perdown(list, 0, i);
    }
}


