//
//  quicksort.h
//  c
//
//  Created by qinghe on 27/02/2018.
//  Copyright © 2018 qinghe. All rights reserved.
//

#ifndef quicksort_h
#define quicksort_h

#include <stdio.h>
typedef int type;

type median(type *list, int left, int right);

void quicksortIter(type *list, int left, int right);

void quicksort(type *list, int length);

#endif /* quicksort_h */
