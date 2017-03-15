// See: https://www.chart.co.jp/subject/sugaku/suken_tsushin/68/68-1.pdf

function solve(raw) {
    var list = [];
    for (var ri = 0; ri < raw.length; ri++) {
        if (raw[ri] > 0 && raw[ri] % 2 == 1) {
            list.push(raw[ri]);
        }
    }
    for (var ri = 0; ri < raw.length; ri++) {
        if (raw[ri] > 0 && raw[ri] % 2 == 0) {
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
    //console.log(n);
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
        if (odd === 0) {
            var tmp = 0;
            for (var li = 0; li < list.length; li++) {
                var down = 1;
                for (var lj = 0; lj < list.length; lj++) {
                    if (li === lj) {
                        down *= factorial((list[lj] - 2) / 2);
                    } else {
                        down *= factorial(list[lj] / 2);
                    }
                }
                tmp += n * factorial((n - 2) / 2) / down;
            }
            if (odd === 0) {
                tmp /= 2;
            }
            //console.log('>>' + tmp);
            ret += tmp;
        }
        if (odd <= 2) {
            var tmp = 0;
            var down = 1;
            for (var li = 0; li < list.length; li++) {
                if (li < odd) {
                    down *= factorial((list[li] - 1) / 2);
                } else {
                    down *= factorial(list[li] / 2);
                }
            }
            tmp = n * factorial((n - odd) / 2) / down;
            if (odd === 0) {
                tmp /= 2;
            }
            ret += tmp;
            //console.log('>>>' + tmp);
        } else {
            ret = 0;
        }
        return ret;
    }

    function func1(n) {
        var ret = 0;
        for (var k = 1; k <= n; k++) {
            if (check(n, k, list)) {
                ret += main(n, k, list);
            }
        }
        //console.log('>' + ret);
        return ret;

        function check(n, k, list) {
            var gcdnk = gcd(n, k);
            var m = list.length;
            for (var mi = 0; mi < m; mi++) {
                var c = factorial(gcdnk * list[mi] / n);
                if (c % 1 !== 0) {
                    return false;
                }
            }
            return true;
        }

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

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    function factorial(num) {
        return (num <= 0) ? 1 : (num * factorial(num - 1));
    };
}
solve([1, 10, 0, 0, 0])
solve([8, 2, 0, 0, 0])
solve([3, 6, 0, 0, 0])
solve([4, 4, 0, 0, 0])
solve([5, 2, 0, 0, 0])
solve([0, 6, 0, 0, 0])
solve([9, 1, 0, 0, 0])
solve([7, 1, 1, 0, 0])
solve([5, 1, 2, 0, 0])
solve([3, 3, 1, 0, 0])
solve([1, 1, 4, 0, 0])
solve([6, 0, 2, 0, 0])
solve([1, 4, 2, 0, 0])
solve([2, 2, 2, 0, 0])
solve([3, 0, 2, 0, 0])
solve([3, 3, 0, 0, 0])
solve([1, 1, 3, 0, 0])
solve([0, 0, 4, 0, 0])
solve([1, 8, 0, 0, 0])
solve([1, 1, 6, 0, 0])
solve([1, 4, 2, 0, 0])
solve([3, 1, 2, 0, 0])
solve([1, 0, 4, 0, 0])
solve([5, 1, 1, 0, 0])
solve([3, 1, 1, 1, 0])
solve([1, 1, 1, 2, 0])
solve([1, 2, 0, 2, 0])
solve([1, 1, 0, 2, 0])
solve([4, 0, 0, 2, 0])
solve([1, 2, 0, 2, 0])
solve([0, 2, 0, 2, 0])
solve([1, 1, 0, 2, 0])
solve([3, 0, 0, 0, 0])
solve([7, 1, 0, 0, 0])
solve([5, 1, 1, 0, 0])
solve([3, 1, 2, 0, 0])
solve([1, 3, 1, 0, 0])
solve([1, 1, 4, 0, 0])
solve([1, 1, 1, 2, 0])
solve([1, 1, 0, 2, 0])
solve([1, 1, 0, 2, 0])
solve([3, 1, 1, 0, 0])
solve([1, 1, 1, 1, 0])
solve([1, 1, 1, 0, 0])
solve([2, 0, 0, 0, 2])
solve([1, 0, 0, 0, 2])
solve([12, 0, 0, 0, 0])