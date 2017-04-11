#coding: utf-8

def getInside(t,xmag,ymag,data):
    xmax = t*xmag
    ymax = t*ymag
    inside = []
    for yg in xrange(0, ymag):
        for xg in xrange(0, xmag):
           zg = getIndex(2*xg,yg,xmag)
           if zg in data:
             appendEven(inside,xg,yg,zg,t,xmax)
           if (zg+1) in data:
             appendOdd(inside,xg,yg,zg+1,t,xmax)
    return sorted(inside)

def appendOdd(inside,xg,yg,zg,t,xmax):
    if t==1:
        inside.append(zg)
        return
    for yt in xrange(0, t):
        y = yg*t+yt
        base = getIndex(0,y,xmax)
        for xt in xrange(0, t):
            if bool(xt<t-1-yt):
              continue
            x = xg*t+xt
            z = getIndex(2*x+1,y,xmax)
            inside.append(z)
            if not bool(xt+yt==t-1):
                inside.append(z-1)


def appendEven(inside,xg,yg,zg,t,xmax):
    if t==1:
        inside.append(zg)
        return
    for yt in xrange(0, t):
        y = yg*t+yt
        base = getIndex(0,y,xmax)
        for xt in xrange(0, t):
            if bool(xt>=t-yt):
              continue
            x = xg*t+xt
            z = getIndex(2*x,y,xmax)
            inside.append(z)
            if  xt+yt < t-1:
               inside.append(z+1)

def append(inside,placements,_x,_y,t,xmax,ymax,list):
    _append(inside,placements,2*_x,_y,t,xmax,ymax,list)
    _append(inside,placements,2*_x+1,_y,t,xmax,ymax,list)

def _append (inside,placements,gx,gy,t,xmax,ymax,list) :
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
            if not bool(tx>=0 and ty>=0 and tx<2*xmax and ty<2*ymax):
                ret = []
                break
            if bool(tx<gx and tx%(2*xmax)>=gx%(2*xmax)) :
                ret = []
                break
            if bool(tx>gx and tx%(2*xmax)<=gx%(2*xmax)) :
                ret = []
                break
            ind = getIndex(tx,ty,xmax)
            if ind in inside:
                ret.append(getIndex(tx,ty,xmax));

        if len(ret)==len(list):
            __append(inside,placements,ret)

def getIndex(tx,ty,xmax):
    return ty*xmax*2+tx

def __append(inside,placements,list):
    slist = sorted(list)
    if slist not in placements:
        placements.append(slist)

def place(t,xmag,ymag,inside):
    xmax = t*xmag
    ymax = t*ymag
    placements = []
    for y in xrange(0, ymax):
        for x in xrange(0, xmax):
            # trapezoid
            append(inside,placements,x,y,t,xmax,ymax,[[0,0],[0,1],[1,0],[1,1],[2,0],[0,2],[0,3],[1,2]])
            append(inside,placements,x,y,t,xmax,ymax,[[0,3],[1,1],[1,2],[1,3],[2,0],[2,1],[2,2],[2,3]])
            append(inside,placements,x,y,t,xmax,ymax,[[0,0],[0,1],[0,2],[0,3],[0,4],[1,0],[1,1],[1,2]])
            append(inside,placements,x,y,t,xmax,ymax,[[0,1],[0,2],[0,3],[0,4],[1,0],[1,1],[1,2],[2,0]])
            append(inside,placements,x,y,t,xmax,ymax,[[0,5],[1,3],[1,4],[1,5],[2,1],[2,2],[2,3],[2,4]])
            append(inside,placements,x,y,t,xmax,ymax,[[0,3],[0,4],[0,5],[1,1],[1,2],[1,3],[1,4],[1,5]])
    return placements
