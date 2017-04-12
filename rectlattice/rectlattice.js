'use strict'; {
    const SHAPE = 'rectangle';
    document.registerElement('lattice-' + SHAPE, class extends SVGElement {
        static get extends() { return 'g'; }
        createdCallback() {
            this.createShadowRoot();
            let fixed = 3;
            let unit = parseInt(this.getAttribute('unit'), 10);
            let subdiv = parseInt(this.getAttribute('subdiv'), 10);
            let xmax = parseInt(this.getAttribute('xmax'), 10) * subdiv;
            let ymax = parseInt(this.getAttribute('ymax'), 10) * subdiv;
            let pickedList = [];
            let colorList = [];
            let pickedStr = this.getAttribute('picked');
            if (pickedStr && pickedStr.trim().length > 0) {
                let picked;
                if (/^\s*\[\s*\[/.test(pickedStr)) {
                    picked = JSON.parse(pickedStr);
                } else if (/^\s*\[/.test(pickedStr)) {
                    picked = [JSON.parse(pickedStr)];
                } else {
                    picked = [pickedStr.split(',')];
                }

                for (let pi = 0; pi < picked.length; pi++) {
                    for (let pj = 0; pj < picked[pi].length; pj++) {
                        let v = parseInt(picked[pi][pj], 10);
                        if (isNaN(v)) {
                            continue;
                        } else if (v < 0 && v >= xmax * ymax * 2) {
                            continue;
                        } else {
                            pickedList.push(v);
                            colorList.push(pi);
                        }
                    }
                }
            }
            let colortab = [
                '#ffffff',
                '#ffaaaa',
                '#88ff88',
                '#aaaaff',
                '#ffff88',
                '#88ffff',
                '#ff88ff',
                '#ffaa00',
                '#ff00aa',
                '#aaff00',
                '#00ffaa',
                '#00aaff',
                '#aa00ff',
            ];
            let styles = [];
            styles.push('<style>.triangle { fill-opacity: 0.0; }</style>');
            styles.push('<style>.picked-triangle { fill-opacity: 1.0; }</style>');
            let shapes = [];
            for (let y = 0; y < ymax; y++) {
                for (let x = 0; x < xmax; x++) {
                    let x0 = unit * x;
                    let x1 = x0 + unit;
                    let x2 = x0;
                    let x3 = x0 + unit;
                    let x4 = x0 + unit / 2;
                    let y0 = unit * y;
                    let y1 = y0;
                    let y2 = y0 + unit;
                    let y3 = y0 + unit;
                    let y4 = y0 + unit / 2;
                    x0 = x0.toFixed(fixed);
                    x1 = x1.toFixed(fixed);
                    x2 = x2.toFixed(fixed);
                    x3 = x3.toFixed(fixed);
                    x4 = x4.toFixed(fixed);
                    y0 = y0.toFixed(fixed);
                    y1 = y1.toFixed(fixed);
                    y2 = y2.toFixed(fixed);
                    y3 = y3.toFixed(fixed);
                    y4 = y4.toFixed(fixed);
                    let id0 = (x + y * xmax) * 4;
                    let id1 = id0 + 1;
                    let id2 = id0 + 2;
                    let id3 = id0 + 3;
                    let class0 = 'picked-' + SHAPE;
                    let index0 = pickedList.indexOf(id0);
                    let color0 = 0;
                    if (index0 === -1) {
                        class0 = SHAPE;
                    } else {
                        color0 = colorList[index0];
                    }
                    let class1 = 'picked-' + SHAPE;
                    let index1 = pickedList.indexOf(id1);
                    let color1 = 0;
                    if (index1 === -1) {
                        class1 = SHAPE;
                    } else {
                        color1 = colorList[index1];
                    }
                    let class2 = 'picked-' + SHAPE;
                    let index2 = pickedList.indexOf(id2);
                    let color2 = 0;
                    if (index2 === -1) {
                        class2 = SHAPE;
                    } else {
                        color2 = colorList[index2];
                    }
                    let class3 = 'picked-' + SHAPE;
                    let index3 = pickedList.indexOf(id3);
                    let color3 = 0;
                    if (index3 === -1) {
                        class3 = SHAPE;
                    } else {
                        color3 = colorList[index3];
                    }
                    shapes.push(`<polygon id="${id0}" style="fill:${colortab[color0 % 12 + 1]};stroke:#000000;" class="${class0}" points="${x0},${y0} ${x4},${y4} ${x1},${y1}"/>`);
                    shapes.push(`<polygon id="${id1}" style="fill:${colortab[color1 % 12 + 1]};stroke:#000000;" class="${class1}" points="${x1},${y1} ${x4},${y4} ${x3},${y3}"/>`);
                    shapes.push(`<polygon id="${id2}" style="fill:${colortab[color2 % 12 + 1]};stroke:#000000;" class="${class2}" points="${x2},${y2} ${x4},${y4} ${x0},${y0}"/>`);
                    shapes.push(`<polygon id="${id3}" style="fill:${colortab[color3 % 12 + 1]};stroke:#000000;" class="${class3}" points="${x3},${y3} ${x4},${y4} ${x2},${y2}"/>`);

                }
            }
            this.shadowRoot.innerHTML = styles.join('') + '<g id="shapes">' + shapes.join('') + '</g>';
            let polygons = this.shadowRoot.querySelectorAll('polygon');
            for (let pi = 0; pi < polygons.length; pi++) {
                polygons[pi].addEventListener('mousedown', function (ev) {
                    if (this.tagName.toLowerCase() !== 'polygon') {
                        return;
                    }
                    let root = this.parentNode;
                    root.setAttribute('mouse', 'down');
                    if (ev.path[0].className.baseVal === SHAPE) {
                        ev.path[0].className.baseVal = 'picked-' + SHAPE;
                        root.setAttribute('state', 'picked');
                    } else if (ev.path[0].className.baseVal === 'picked-' + SHAPE) {
                        ev.path[0].className.baseVal = SHAPE;
                        root.setAttribute('state', '');
                    }
                });
                polygons[pi].addEventListener('mousemove', function (ev) {
                    if (this.tagName.toLowerCase() !== 'polygon') {
                        return;
                    }
                    let root = this.parentNode;
                    let mouse = root.getAttribute('mouse');
                    if (mouse !== 'down') {
                        return;
                    }
                    let state = root.getAttribute('state');
                    if (state === 'picked') {
                        ev.path[0].className.baseVal = 'picked-' + SHAPE;
                    } else {
                        ev.path[0].className.baseVal = SHAPE;
                    }
                });
                polygons[pi].addEventListener('mouseup', function (ev) {
                    if (this.tagName.toLowerCase() !== 'polygon') {
                        return;
                    }
                    let root = this.parentNode;
                    root.setAttribute('mouse', 'up');
                    let picked = this.parentNode.querySelectorAll('polygon.picked-' + SHAPE);
                    let pickedList = [];
                    for (let pi = 0; pi < picked.length; pi++) {
                        pickedList.push(parseInt(picked[pi].id, 10));
                    }
                    let lattice = ev.path[3];
                    lattice.setAttribute('picked', pickedList.join(','));
                    console.log('[' + pickedList.join(',') + ']');
                });
            }
        }
    });
}