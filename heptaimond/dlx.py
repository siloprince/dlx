# coding: utf-8
import time

Header = None

class Dnode:
    def __init__(self, n):
        self.up   = self
        self.down = self
        self.next = self
        self.prev = self
        self.num  = n      
        self.head = self  
        self.size = 0     

def initHeader():
    global Header
    Header = Dnode(-1)

def insertLine(header, node):
    node.prev = header.prev
    node.next = header
    header.prev.next = node
    header.prev = node

def searchHeader(n):
    global Header
    node = Header.next
    while node is not Header:
        if node.num == n: return node
        node = node.next
    newNode = Dnode(n)
    insertLine(Header, newNode)
    return newNode

def insertCol(col, node):
    header = searchHeader(col)
    header.size += 1
    node.head = header
    node.down = header
    node.up   = header.up
    header.up.down = node
    header.up = node

def makeDancingLinks(xss):
    initHeader()
    for line, xs in enumerate(xss):
        hNode = Dnode(line)
        insertCol(xs[0], hNode)
        for i in xrange(1, len(xs)):
            node = Dnode(line)
            insertCol(xs[i], node)
            insertLine(hNode, node)

def selectMinCol():
    global Header
    minNode = Header.next
    node = minNode.next
    while node is not Header:
        if node.size == 0: return node
        if node.size < minNode.size:
            minNode = node
        node = node.next
    return minNode

def isEmpty():
    global Header
    return Header is Header.next

def removeMatrix(hNode):
    node = hNode
    while True:
        header = node.head
        header.prev.next = header.next
        header.next.prev = header.prev
        cNode = node.down
        while cNode is not node:
            if cNode is not cNode.head:
                lNode = cNode.next
                while lNode is not cNode:
                    lNode.up.down = lNode.down
                    lNode.down.up = lNode.up
                    lNode.head.size -= 1
                    lNode = lNode.next
            cNode = cNode.down
        node = node.next
        if node is hNode: break

def restoreMatrix(hNode):
    node = hNode.prev
    while True:
        header = node.head
        header.prev.next = header
        header.next.prev = header
        cNode = node.up
        while cNode is not node:
            if cNode is not cNode.head:
                lNode = cNode.prev
                while lNode is not cNode:
                    lNode.up.down = lNode
                    lNode.down.up = lNode
                    lNode.head.size += 1
                    lNode = lNode.prev
            cNode = cNode.up
        if node is hNode: break
        node = node.prev

def algoDLX(f, xss):
    def algoSub(a):
        if isEmpty():
            f(a)
        else:
            cNode = selectMinCol()
            lNode = cNode.down
            while lNode is not cNode:
                removeMatrix(lNode)
                a.append(xss[lNode.num])
                algoSub(a)
                a.pop()
                restoreMatrix(lNode)
                lNode = lNode.down
    makeDancingLinks(xss)
    algoSub([])
