//
//  utils.c
//  c
//
//  Created by qinghe on 26/02/2018.
//  Copyright © 2018 qinghe. All rights reserved.
//

#include "utils.h"



void
qinglog(type *list, int length) {
    printf("log start: \n");
    for(int i = 0; i < length; i++) {
        printf("%d ", list[i]);
    }
    printf("\n\n");
}

void
exchange(type *list, int i, int j) {
    int temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}
