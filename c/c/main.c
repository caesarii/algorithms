//
//  main.c
//  c
//
//  Created by qinghe on 26/02/2018.
//  Copyright © 2018 qinghe. All rights reserved.
//

#include <stdio.h>
#include "utils.h"
#include "insertsort.h"
#include "shellsort.h"
#include "heapsort.h"

void
testInsertsort(void) {
    type list[] = {38, 545, 6, 9, 324, 1, 4, 564,17, 754};
    int length = 10;
    insertsort(list, length);
    qinglog("insertsort", list, length);
}

void
testShellsort(void) {
    type list[] = {38, 545, 6, 9, 324, 1, 4, 564,17, 754};
    int length = 10;
    shellsort(list, length);
    qinglog("shellsort", list, length);
}

void
testHeapsort(void) {
    type list[] = {38, 545, 6, 9, 324, 1, 4, 564,17, 754};
    int length = 10;
    heapsort_qing(list, length);
    qinglog("heasort", list, length);
}

int main(int argc, const char * argv[]) {
    // insert code here...
    testInsertsort();
    testShellsort();
    testHeapsort();
    
    printf("Hello, World!\n");
    return 0;
}
