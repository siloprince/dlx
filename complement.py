# coding: utf-8
import dlx as dlx

def makeTiling(magic,combo):

    tbl = []
    for x in xrange(0, magic):
        size = 0
        for cv in combo:
            size+=1
            if ( (cv>0) and ( x <= magic - size) ) :
                tmp = []
                for y in xrange(0, size):
                    tmp.append(x+y)
                tbl.append(tmp)
    #print tbl
    return tbl

def solve(combo):
    check = []
    chcount=0
    for cv in combo:
        chcount+=1
        for ci in xrange(0,cv):
            check.append(str(chcount))
    checkstr = ",".join(check)
    magic = 12
    csum = 0
    for cv in combo:
        csum += cv 

    raw = []
    compiled = []

    c = [0]
    def counter(xs):
      
        if (True):
            ele2 = []
            for xa in xs:
                for xv in xa:
                    ele2.append(xv)

            if len(ele2)!=magic:
                return
            if (len(list(set(ele2)))!=magic):
                return
        
        if (len(xs)==csum):
          #print xs
          msum = 0
          for xv in xs:
              msum += len(xv)
             
          if msum == magic:
            output = []
            ele = []
            for xv in xs:
                output.append(str(len(xv)))
                ele.append(str(len(xv)))
            ele.sort()
            #print output
            if ",".join(ele) == checkstr:
                #print output
                raw.append(",".join(output))
                for xv in xs:
                    output.append(str(len(xv)))
                output.append(":")
                rxs = list(xs)
                rxs.reverse()
                for rxv in rxs:
                    output.append(str(len(rxv)))
                for rxv in rxs:
                    output.append(str(len(rxv)))
                j = ",".join(output)
                compiled.append(j)
                c[0] += 1
   
    ls = makeTiling(magic,combo)
    dlx.algoDLX(counter, ls)

    same = []
    for cv in compiled:
        same.append(-1)
    rcount = 0
    for rv in raw:
        ccount =0
        for cv in compiled:
            if same[ccount]==-1:
                if cv.find(rv)>=0:
                    same[ccount]=rcount
            ccount+=1
        rcount+=1
    #print c[0]
    uniq = list(set(same))
    result = []
    for ui in uniq:
        result.append(raw[ui])
    #print len(result)
    print result
    print ","
    return c[0]

print "let data = ["
if(True):
    solve([10,1,0,0,0])
    solve([8,2,0,0,0])
    solve([6,3,0,0,0])
    solve([4,4,0,0,0])
    solve([2,5,0,0,0])
    solve([0,6,0,0,0])
    solve([9,0,1,0,0])
    solve([7,1,1,0,0])
    solve([5,2,1,0,0])
    solve([3,3,1,0,0])
    solve([1,4,1,0,0])
    solve([6,0,2,0,0])
    solve([4,1,2,0,0])
    solve([2,2,2,0,0])
    solve([0,3,2,0,0])
    solve([3,0,3,0,0])
    solve([1,1,3,0,0])
    solve([0,0,4,0,0])
    solve([8,0,0,1,0])
    solve([6,1,0,1,0])
    solve([4,2,0,1,0])
    solve([2,3,0,1,0])
    solve([0,4,0,1,0])
    solve([5,0,1,1,0])
    solve([3,1,1,1,0])
    solve([1,2,1,1,0])
    solve([2,0,2,1,0])
    solve([0,1,2,1,0])
    solve([4,0,0,2,0])
    solve([2,1,0,2,0])
    solve([0,2,0,2,0])
    solve([1,0,1,2,0])
    solve([0,0,0,3,0])
    solve([7,0,0,0,1])
    solve([5,1,0,0,1])
    solve([3,2,0,0,1])
    solve([1,3,0,0,1])
    solve([4,0,1,0,1])
    solve([2,1,1,0,1])
    solve([0,2,1,0,1])
    solve([1,0,2,0,1])
    solve([3,0,0,1,1])
    solve([1,1,0,1,1])
    solve([0,0,1,1,1])
    solve([2,0,0,0,2])
    solve([0,1,0,0,2])
    solve([12,0,0,0,0])

print "];"