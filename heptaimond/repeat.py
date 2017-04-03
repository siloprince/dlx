#coding: utf-8
import dlx as dlx
import repeatxmond as repeatxmond

def solve(xscale=1, ypiece=4, xslide=0, yslide=0):
    c = [0]
    def counter(xs):
        print xs
        if len(xs)>0:
            c[0] += 1

    if (xslide * yslide == 0):
        xpiece = xscale * 7
        ls = repeatxmond.place(xpiece,ypiece,xslide,yslide)
        print ls
        dlx.algoDLX(counter, ls)
    
    return c[0]


