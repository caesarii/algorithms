#include <stdbool.h>

int
hash(const char * key, int length) {
    int hash = 0;
    while(*key != '\0') {
        hash += *key++;
    }

    return (hash % length);
}


int
nextPrime(int length) {
    if(length % 2 == 0) {
        length++;
    }
    int i;
    bool isPrime = false;
    while(true) {
        length += 2;
        for(i = 3; i*i <= length; i+= 2) {
            if(length % i == 0) {
                isPrime = true;
                break;
            }
        }
        if(!isPrime) {
            return length;
        }
    }
}
