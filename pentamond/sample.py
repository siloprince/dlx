# coding: utf-8
import sys,os
sys.path.append(os.pardir)
import dlx as dlx
import xpentamond as xpentamond

def solve(subdiv):
    c = [0]
    def counter(xs):
        print xs
        if len(xs)>0:
            c[0] += 1

    ymax = 8
    xmax = 8
    picked = [1,2,3,4,5,16,17,18,19,20]

    inside = xpentamond.getInside(subdiv,xmax,ymax,picked)
    ls = xpentamond.place(subdiv,xmax,ymax,inside)
    dlx.algoDLX(counter, ls)
    return c[0]


