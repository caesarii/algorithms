//
//  shellsort.c
//  c
//
//  Created by qinghe on 26/02/2018.
//  Copyright © 2018 qinghe. All rights reserved.
//

#include "shellsort.h"
#include "shellsort.h"
#include "utils.h"

void
shellsort(type *list, int length) {
    for(int increment = length / 2; increment > 0; increment /= 2) {
        
        for(int current = increment; current < length; current++) {
            
            for(int prev = current; prev >= increment; prev -= increment){
                if(list[prev] < list[prev - increment]) {
                    exchange(list, prev, prev - increment);
                }
            }
        }
    }
}
