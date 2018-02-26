//
//  mergesort.h
//  c
//
//  Created by qinghe on 26/02/2018.
//  Copyright © 2018 qinghe. All rights reserved.
//

#ifndef mergesort_h
#define mergesort_h

#include <stdlib.h>
#include <stdio.h>
typedef int type;

void merge(type *list, int left, int center, int right);

void mergesortIter(type *list, int left, int right);

void mergesort_qing(type *list, int length);

#endif /* mergesort_h */
