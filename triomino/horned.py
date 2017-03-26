# coding: utf-8
import sys,os
sys.path.append(os.pardir)
import dlx as dlx

def tblappend (full,a0,a1,a2,a3):
    tmp = []
    for fv in full:
        tmp.append(fv)
        tmp.append(fv+1)
        tmp.append(fv+2)
        tmp.append(fv+3)

    for a0v in a0:
        tmp.append(a0v)
        tmp.append(a0v+1)
    for a1v in a1:
        tmp.append(a1v)
        tmp.append(a1v+2)
    for a2v in a2:
        tmp.append(a2v+1)
        tmp.append(a2v+3)
    for a3v in a3:
        tmp.append(a3v+2)
        tmp.append(a3v+3) 
    return tmp              

def makeTiling(p,q):
    tbl = []
    for y in xrange(0, p-2):
        for x in xrange(0, q-1):
            z = (x + y*q)
            a = 4*z
            b = 4*(z+1)
            d = 4*(z+q)
            e = 4*(z+q+1)
            g = 4*(z+2*q)
            h = 4*(z+2*q+1)
            tbl.append(tblappend([a,d],[b],[g],[],[]))
            tbl.append(tblappend([b,e],[h],[a],[],[]))
            tbl.append(tblappend([d,g],[],[],[h],[a]))
            tbl.append(tblappend([e,h],[],[],[b],[g]))

    for y in xrange(0, p-1):
        for x in xrange(0, q-2):
            z = (x + y*q)
            a = 4*z
            b = 4*(z+1)
            c = 4*(z+2)
            d = 4*(z+q)
            e = 4*(z+q+1)
            f = 4*(z+q+2)
            tbl.append(tblappend([a,b],[d],[],[c],[]))
            tbl.append(tblappend([b,c],[],[f],[],[a]))
            tbl.append(tblappend([d,e],[f],[],[a],[]))
            tbl.append(tblappend([e,f],[],[d],[],[c]))

    #print tbl
    return tbl

def solve(p,q):
    c = [0]
    def counter(xs):
        print xs
        print ","
        c[0] += 1
   
    if (p*q)%3 != 0:
        return

    ls = makeTiling(p,q)
    dlx.algoDLX(counter, ls)
    print c[0]

print "'use strict';"
print "function data () { retrun ["
solve(8,12)
print "];);"
