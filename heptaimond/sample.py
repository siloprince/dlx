#coding: utf-8
import dlx as dlx
import xmond as xmond

def solve(subdiv):
    c = [0]
    def counter(xs):
        print xs
        if len(xs)>0:
            c[0] += 1

    ymax = 6
    xmax = 6
    picked = [7,8,9,15,16,17,18,19,20,21,22,23,26,27,28,29,30,31,32,33,34,37,38,39,40,41,42,43,44,45,48,49,50,51,52,53,54,55,56,62,63,64]
 
    inside = xmond.getInside(subdiv,xmax,ymax,picked)
    ls = xmond.place(subdiv,xmax,ymax,inside)
    dlx.algoDLX(counter, ls)
    return c[0]


