#include <stdio.h>

#include "test.h"


void
ensure(bool condition, const char *message) {
    // 条件成立
    if(!condition) {
        printf("test failed: %s\n", message);
    }
}

void
testList() {

    void
    testGuaListLength() {
        type a1[] = {1, 2, 3};
        int n1 = 3;
        List *l1 = ListCreate(a1, n1);
        ensure(ListLength(l1) == n1, "test list length 1");

        type a2[] = {};
        int n2 = 0;
        List *l2 = ListCreate(a2, n2);
        ensure(ListLength(l2) == n2, "test list length 2");

        type a3[] = {1};

        int n3 = 1;
        List *l3 = ListCreate(a3, n3);
        ensure(ListLength(l3) == n3, "test list length 3");

        printf("length\n");
    }

    void
    testGuaListContains() {
        type a1[] = {1, 2, 3};
        int n1 = 3;
        List *l1 = ListCreate(a1, n1);
        ensure(ListContains(l1, 1) == true, "test list contains 1");

        type a2[] = {};
        int n2 = 0;
        List *l2 = ListCreate(a2, n2);
        ensure(ListContains(l2, 1) == false, "test list contains 2");

        type a3[] = {1, 2, 3};
        int n3 = 3;
        List *l3 = ListCreate(a3, n3);
        ensure(ListContains(l3, 4) == false, "test list contains 3");

        printf("contains\n");
    }

    void
    testGuaListAppend() {
        type a1[] = {1, 2, 3};
        int n1 = 3;
        List *l1 = ListCreate(a1, n1);
    //    GuaListLog(l1);
        ListAppend(l1, 4);
        ensure(ListLength(l1) == 4, "test list append 1");
    //    GuaListLog(l1);

        type a2[] = {};
        int n2 = 0;
        List *l2 = ListCreate(a2, n2);
    //    GuaListLog(l2);
        ListAppend(l2, 0);
        ensure(ListLength(l2) == 1, "test list contains 2");
    //    GuaListLog(l2);

        type a3[] = {3};
        int n3 = 1;
        List *l3 = ListCreate(a3, n3);
        ListAppend(l3, 3);
        ensure(ListLength(l3) == 2, "test list contains 3");

        printf("append\n");
    }

    void
    testGuaListPrepend() {
        type a1[] = {1, 2, 3};
        int n1 = 3;
        List *l1 = ListCreate(a1, n1);
        // GuaListLog(l1);
        ListPrepend(l1, 0);
        ensure(ListLength(l1) == 4, "test list prepend 1");
        // GuaListLog(l1);

        type a2[] = {};
        int n2 = 0;
        List *l2 = ListCreate(a2, n2);
        ListPrepend(l2, 0);
        ensure(ListLength(l2) == 1, "test list prepend 2");

        type a3[] = {3};
        int n3 = 1;
        List *l3 = ListCreate(a3, n3);
        ListAppend(l3, 3);
        ensure(ListLength(l3) == 2, "test list prepend 3");

        printf("prepend\n");
    }

    void
    testGuaListIndexOfElement() {
        type a1[] = {1, 2, 3};
        int n1 = 3;
        List *l1 = ListCreate(a1, n1);
        ensure(ListIndexOfElement(l1, 1) == 0, "test list indexOf 1");

    //    type a2[] = {};
    //    int n2 = 0;
    //    GuaList *l2 = GuaListCreate(a2, n2);
    //    ensure(GuaListIndexOfElement(l2, 1) == -1, "test list indexOf 2");
    //
    //    type a3[] = {3};
    //    int n3 = 1;
    //    GuaList *l3 = GuaListCreate(a3, n3);
    //    ensure(GuaListIndexOfElement(l3, 1) == -1, "test list indexOf 3");

        printf("indexOf\n");
    }

    void
    testGuaListInsertElementAtIndex() {
        type a1[] = {1, 2, 3};
        int n1 = 3;
        List *l1 = ListCreate(a1, n1);
        ListInsertElementAtIndex(l1, 11, 1);
        ensure(ListLength(l1) == 4, "test list insert 1");
        ListLog(l1);

        type a2[] = {};
        int n2 = 0;
        List *l2 = ListCreate(a2, n2);
        ListInsertElementAtIndex(l2, 11, 0);
        ensure(ListLength(l2) == 1, "test list insert 2");
        ListLog(l2);

        type a3[] = {3};
        int n3 = 1;
        List *l3 = ListCreate(a3, n3);
        ListInsertElementAtIndex(l3, 4, 0);
        ensure(ListLength(l3) == 2, "test list insert 3");
        ListLog(l3);

        printf("insert");
    }

    void
    testGuaListShift() {
        type a1[] = {1, 2, 3};
        int n1 = 3;
        List *l1 = ListCreate(a1, n1);
        printf("shift %i \n", ListShift(l1));

    }

    void
    testGuaListElementAtIndex() {
        type a1[] = {0, 1, 2, 3};
        int n1 = 4;
        List *l1 = ListCreate(a1, n1);
        printf("element at index %i \n", ListElementAtIndex(l1, 3));
    }




    testGuaListLength();
    testGuaListContains();
    testGuaListAppend();
    testGuaListPrepend();
    testGuaListIndexOfElement();
    testGuaListInsertElementAtIndex();
    testGuaListShift();
    testGuaListElementAtIndex();
}

void
testStack() {

    void
    testGuaStackPush() {
        // create
        Stack *s = StackCreate();
        ensure(StackLength(s) == 0, "test stack length 1 \n");
        printf("s len %i \n", StackLength(s));

        // push 0
        StackPush(s, 0);
        ensure(StackLength(s) == 1, "test stack length 2 \n");
        printf("s len %i \n", StackLength(s));

        // push 1
        StackPush(s, 1);
        ensure(StackLength(s) == 2, "test stack length 3 \n");
        printf("s len %i \n", StackLength(s));


        // push 2
        StackPush(s, 2);
        StackLog(s);
        printf("stack push");
    }

    void
    testGuaStackPop() {

        // create
        Stack *s = StackCreate();
        ensure(StackLength(s) == 0, "test stack length 1 \n");
        printf("s len %i \n", StackLength(s));

        // push 0
        StackPush(s, 0);
        ensure(StackLength(s) == 1, "test stack length 2 \n");
        printf("s len %i \n", StackLength(s));

        // push 1
        StackPush(s, 1);
        ensure(StackLength(s) == 2, "test stack length 3 \n");
        printf("s len %i \n", StackLength(s));


        // push 2
        StackPush(s, 2);
        StackLog(s);

        // pop 2
        ensure(StackPop(s) == 2, "test stack pop 1 \n");
        StackLog(s);

        // pop1
        ensure(StackPop(s) == 1, "test stack pop 2 \n");
        StackLog(s);

        // pop 0
        ensure(StackPop(s) == 0, "test stack pop 3 \n");
        StackLog(s);

        // pop nothing
        ensure(StackPop(s) == -1, "test stack pop 3 \n");
        StackLog(s);

        printf("stack pop \n");
    }

    void
    testStackIsEmpty() {
        Stack *s = StackCreate();
        ensure(StackIsEmpty(s) == true, "test stack isEmpty 1 \n");
        StackPush(s, 0);
        ensure(StackIsEmpty(s) == false, "test stack isEmpty 2 \n");
        printf("stack isEmpty");
    }

    void testStackClear() {
        Stack *s = StackCreate();
        StackPush(s, 0);
        StackPush(s, 0);
        StackPush(s, 0);
        StackClear(s);
        ensure(StackLength(s) == 0, "stack clear 1");
        printf("stack clear");
    }

    void testStackRemove() {
        Stack *s = StackCreate();
        StackPush(s, 0);
        StackPush(s, 0);
        StackPush(s, 0);
        StackRemove(s);

        // ensure(GuaStackLength(s) == 0, 'stack clear 1');
        printf("stack Remove");
    }


    testGuaStackPush();
    testGuaStackPop();
    testStackIsEmpty();
    testStackClear();
    testStackRemove();
}

void
testQueue() {

    void
    testQueueLength() {
        Queue *q = QueueCreate();
        ensure(QueueLength(q) == 0, "test queue length 1");

        printf("queue length \n");
    }

    void
    testEnqueueDeque() {
        Queue *q = QueueCreate();
        QueueEnqueue(q, 0);
        QueueEnqueue(q, 1);
        QueueEnqueue(q, 2);
        QueueLog(q);
        ensure(QueueLength(q) == 3, "test enqueue 1");

        ensure(QueueIsEmpty(q) == false, "test isEmpyt 1");

        ensure(QueueDequeue(q) == 0, "test dequeue 1");
        ensure(QueueDequeue(q) == 1, "test dequeue 2");
        ensure(QueueDequeue(q) == 2, "test dequeue 3");
        ensure(QueueDequeue(q) == -1, "test dequeue 4");
        QueueLog(q);
        ensure(QueueIsEmpty(q) == true, "test isEmpyt 2");

        printf("enque deque isEmpty \n");
    }

    void
    testQueueClear() {
        Queue *q = QueueCreate();
        QueueEnqueue(q, 0);
        QueueEnqueue(q, 1);
        QueueEnqueue(q, 2);
        QueueClear(q);
        ensure(QueueLength(q) == 0, "test clear 1");
        QueueRemove(q);
        printf("queue clear \n");
    }

    testQueueLength();
    testEnqueueDeque();
    testQueueClear();
}


void
testHashTable() {

    HashTable *t = HashTableCreate(11);
    // GuaHashTableLog(t);

    HashTableSet(t, "11", 1);
    HashTableSet(t, "a", 2);
    HashTableSet(t, "abc", 3);
    HashTableSet(t, "14a", 4);

    ensure(HashTableGet(t, "11") == 1, "test get 1");
    ensure(HashTableGet(t, "a") == 2, "test get 2");
    ensure(HashTableGet(t, "abc") == 3, "test get 3");
    ensure(HashTableGet(t, "14a") == 4, "test get 4");

    ensure(HashTableHas(t, "11") == true, "test has 1");
    ensure(HashTableHas(t, "5") == false, "test has 2");

    // GuaHashTableRemove(t);
     HashTableLog(t);

}

