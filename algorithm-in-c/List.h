
#ifndef __GuaList_H__
#define __GuaList_H__

#include <stdbool.h>


// 声明 结构名, 类型
struct NodeStruct;
typedef struct NodeStruct Node;


struct ListStruct;
typedef struct ListStruct List;

typedef int type;

List *
ListCreate(int *element, int numberOfElements);

void
ListLog(List *list);

/*
1.1
返回一个 GuaList 的长度
*/
int
ListLength(List *list);

/*
1.2
检查一个 GuaList 中是否存在某个元素
*/
bool
ListContains(List *list, type element);

/*
1.3
在 GuaList 的末尾添加一个元素
*/
void
ListAppend(List *list, type element);

/*
1.4
在 GuaList 的头部添加一个元素
*/
void
ListPrepend(List *list, type element);

/*
1.5
在一个 GuaList 中查找某个元素, 返回下标(序号)
如果不存在, 返回 -1
*/
int
ListIndexOfElement(List *list, type element);

/*
1.6
往一个 GuaList 中插入一个元素, 下标(序号) 为 index
不考虑非法情况(下标大于长度)
*/
void
ListInsertElementAtIndex(List *list, type element, int index);

type
ListShift(List *list);

int
ListElementAtIndex(List *list, int index);

void ListRemove(List * list);

#endif
