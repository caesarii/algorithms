//
//  heapsort.h
//  c
//
//  Created by qinghe on 26/02/2018.
//  Copyright © 2018 qinghe. All rights reserved.
//

#ifndef heapsort_h
#define heapsort_h

#include <stdio.h>

typedef int type;

void heapsort_qing(type *list, int length);

void perdown(type *list, int current, int length);

#endif /* heapsort_h */
