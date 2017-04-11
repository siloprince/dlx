# coding: utf-8
import sys,os
sys.path.append(os.pardir)
import dlx as dlx
import xtrapezoid as xtrapezoid

def solve(subdiv):
    c = [0]
    def counter(xs):
        print xs
        if len(xs)>0:
            c[0] += 1

    ymax = 24
    xmax = 24
    scale = 1
    picked = [3,4,5,49,50,51,52,53,96,97,98,99,100,144,145,146]

    inside = xtrapezoid.getInside(subdiv,xmax,ymax,picked)
    ls = xtrapezoid.place(subdiv,xmax,ymax,inside)
    dlx.algoDLX(counter, ls)
    return c[0]


