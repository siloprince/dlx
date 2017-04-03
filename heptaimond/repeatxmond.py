#coding: utf-8

def append(placements,_x,_y,list):
    _append(placements,2*_x,_y,_x,list)
    _append(placements,2*_x+1,_y,_x,list)

def _append (placements,gx,gy,xmax,list) :
    xcand=[]
    for lk in list:
        if lk[1]%2 == gx%2:
            xcand.append(lk)

    for xc in xcand:
        ret = []
        for lk in list:
            xdiff = xc[1]
            ydiff = xc[0]
            tx = gx + lk[1] - xdiff
            ty = gy + lk[0] - ydiff
            ret.append(getIndex(tx,ty,xmax));

        if len(ret)==len(list):
            __append(placements,ret)

def getIndex(tx,ty,xmax):
    return ty*xmax*2+tx

def __append(placements,list):
    slist = sorted(list)
    if slist not in placements:
        placements.append(slist)

def place(xpiece,ypiece,xslide,yslide):
    placements = []
    for y in xrange(0, ypiece):
        for x in xrange(0, xpiece):
            # kazaguruma
            append(placements,x,y,[[0,0],[0,1],[1,-1],[1,0],[1,1],[1,2],[2,-2]])
            append(placements,x,y,[[0,-1],[0,0],[1,-4],[1,-3],[1,-2],[1,-1],[2,-2]])
            append(placements,x,y,[[0,1],[1,-3],[1,-2],[1,-1],[1,0],[2,-2],[2,-1]])
            append(placements,x,y,[[0,1],[1,0],[1,1],[1,2],[1,3],[2,-1],[2,0]])
            # funa 2 layer
            append(placements,x,y,[[0,0],[0,1],[1,-2],[1,-1],[1,0],[1,1],[1,2]])
            append(placements,x,y,[[0,-1],[0,0],[1,-4],[1,-3],[1,-2],[1,-1],[1,0]])
            append(placements,x,y,[[0,-1],[0,0],[0,1],[0,2],[0,3],[1,0],[1,1]])
            append(placements,x,y,[[0,-1],[0,0],[0,1],[0,2],[0,3],[1,0],[1,-1]])
            # funa 3-1 layer
            append(placements,x,y,[[0,-1],[0,0],[1,-3],[1,-2],[1,-1],[1,0],[2,-4]])
            append(placements,x,y,[[0,0],[0,1],[1,-2],[1,-1],[1,0],[1,1],[2,0]])
            append(placements,x,y,[[0,1],[1,-3],[1,-2],[1,-1],[1,0],[2,-3],[2,-2]])
            append(placements,x,y,[[0,1],[1,0],[1,1],[1,2],[1,3],[2,0],[2,1]])
            # funa 3-2 layer
            append(placements,x,y,[[0,1],[0,3],[1,0],[1,1],[1,2],[2,0],[2,1]])
            append(placements,x,y,[[0,1],[0,3],[1,0],[1,1],[1,2],[2,0],[2,-1]])
            append(placements,x,y,[[0,0],[0,1],[1,-1],[1,0],[1,1],[2,-2],[2,0]])
            append(placements,x,y,[[0,-1],[0,0],[1,-3],[1,-2],[1,-1],[2,-4],[2,-2]])

    return placements
