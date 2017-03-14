function solve(raw) {
    var list = [];
    for (var ri = 0; ri < raw.length; ri++) {
        if (raw[ri] > 0) {
            list.push(raw[ri]);
        }
    }
    //console.log(list);
    var n = 0;
    for (ni = 0; ni < list.length; ni++) {
        n += list[ni];
    }
    var f1 = func1(n);
    var f2 = func2(n, list)
    var ret = (f1 + f2) / (2 * n);
    console.log(ret);
    return ret;

    function func2(n, list) {
        var ret = 0;
        var odd = 0;
        for (var li = 0; li < list.length; li++) {
            if (list[li] % 2 == 1) {
                odd++;
            }
        }
        //console.log(odd);
        if (odd === 0) {
            var down = 1;
            for (var li = 0; li < list.length; li++) {
                for (var lj = 0; lj < list.length; lj++) {
                    if (li === lj) {
                        down *= factorial((list[li] - 2) / 2);
                    } else {
                        down *= factorial(list[li] / 2);
                    }
                }
            }
            ret += n * factorial((n - 2) / 2) / down;
            if (odd === 0) {
                ret /= 2;
            }
        }
        if (odd <= 2) {
            var down = 1;
            for (var li = 0; li < list.length; li++) {
                if (li < odd) {
                    down *= factorial((list[li] - 1) / 2);
                } else {
                    down *= factorial(list[li] / 2);
                }
            }
            ret += n * factorial((n - odd) / 2) / down;
            if (odd === 0) {
                ret /= 2;
            }
        } else {
            ret = 0;
        }
        return ret;
    }

    function func1(n) {
        var ret = 0;
        for (var k = 1; k <= n; k++) {
            var m = main(n, k, list);
            if (m % 1 < 0.000000001) {
                ret += m;
            }
        }
        return ret;

        function main(n, k, list) {
            var gcdnk = gcd(n, k);
            var up = factorial(gcdnk);
            var base = 1;
            var m = list.length;
            for (var mi = 0; mi < m; mi++) {
                base *= factorial(gcdnk * list[mi] / n);
            }
            return up / base;
        }
    }

    function gcd(a, b) {
        if (!b) {
            return a;
        }
        return gcd(b, a % b);
    };

    function factorial(num) {
        return (num <= 0) ? 1 : (num * factorial(num - 1));
    };
}
solve([10, 1, 0, 0, 0])
solve([8, 2, 0, 0, 0])
solve([6, 3, 0, 0, 0])
solve([4, 4, 0, 0, 0])
solve([2, 5, 0, 0, 0])
solve([0, 6, 0, 0, 0])
solve([9, 0, 1, 0, 0])
solve([7, 1, 1, 0, 0])
solve([5, 2, 1, 0, 0])
solve([3, 3, 1, 0, 0])
solve([1, 4, 1, 0, 0])
solve([6, 0, 2, 0, 0])
solve([4, 1, 2, 0, 0])
solve([2, 2, 2, 0, 0])
solve([0, 3, 2, 0, 0])
solve([3, 0, 3, 0, 0])
solve([1, 1, 3, 0, 0])
solve([0, 0, 4, 0, 0])
solve([8, 0, 0, 1, 0])
solve([6, 1, 0, 1, 0])
solve([4, 2, 0, 1, 0])
solve([2, 3, 0, 1, 0])
solve([0, 4, 0, 1, 0])
solve([5, 0, 1, 1, 0])
solve([3, 1, 1, 1, 0])
solve([1, 2, 1, 1, 0])
solve([2, 0, 2, 1, 0])
solve([0, 1, 2, 1, 0])
solve([4, 0, 0, 2, 0])
solve([2, 1, 0, 2, 0])
solve([0, 2, 0, 2, 0])
solve([1, 0, 1, 2, 0])
solve([0, 0, 0, 3, 0])
solve([7, 0, 0, 0, 1])
solve([5, 1, 0, 0, 1])
solve([3, 2, 0, 0, 1])
solve([1, 3, 0, 0, 1])
solve([4, 0, 1, 0, 1])
solve([2, 1, 1, 0, 1])
solve([0, 2, 1, 0, 1])
solve([1, 0, 2, 0, 1])
solve([3, 0, 0, 1, 1])
solve([1, 1, 0, 1, 1])
solve([0, 0, 1, 1, 1])
solve([2, 0, 0, 0, 2])
solve([0, 1, 0, 0, 2])
solve([12, 0, 0, 0, 0])

solve([3, 2, 2])