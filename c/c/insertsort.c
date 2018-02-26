//
//  insertsort.c
//  c
//
//  Created by qinghe on 26/02/2018.
//  Copyright © 2018 qinghe. All rights reserved.
//


#include "insertsort.h"
#include "utils.h"

void
insertsort(type *list, int numberOfElements) {
    for(int current = 1; current < numberOfElements; current++) {
        
        for(int prev = current; prev > 0; prev --) {
            
            if(list[prev] < list[prev - 1]) {
                exchange(list, prev, prev - 1);
            }
        }
    }
}
