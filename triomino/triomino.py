# coding: utf-8
import sys,os
sys.path.append(os.pardir)
import dlx as dlx

def makeTiling(p,q):
    tbl = []
    for y in xrange(0, p-1):
        for x in xrange(0, q-1):
            z = x + y*q
            tbl.append([z,z+1,z+q])
            tbl.append([z,z+1,z+q+1])
            tbl.append([z,z+q,z+q+1])
            tbl.append([z+1,z+q,z+q+1])
    print tbl
    return tbl

def solve(p,q):
    c = [0]
    def counter(xs):
        print xs
        c[0] += 1
   
    if (p*q)%3 != 0:
        return

    ls = makeTiling(p,q)
    dlx.algoDLX(counter, ls)
