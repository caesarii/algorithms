//
//  main.c
//  c
//
//  Created by qinghe on 26/02/2018.
//  Copyright © 2018 qinghe. All rights reserved.
//

#include <stdio.h>
#include "insertsort.h"
#include "utils.h"


void
testInsertsort(void) {
    type list[] = {38, 545, 6, 9, 324, 1, 4, 564,17, 754};
    int length = 10;
    insertsort(list, length);
//    printf("%d\n", list[1]);
    qinglog(list, length);
    
}

int main(int argc, const char * argv[]) {
    // insert code here...
    testInsertsort();
    
    printf("Hello, World!\n");
    return 0;
}
