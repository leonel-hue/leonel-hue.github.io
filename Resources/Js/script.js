let menu_up = document.getElementById('menu_up');
let interfaces = document.getElementsByClassName('interfaces');
let image = document.getElementById('image_up');
let q = document.getElementById('q');
let w = document.getElementById('w');
let e = document.getElementById('e');
let r = document.getElementById('r');
let t = document.getElementById('t');
let y = document.getElementById('y');
let u = document.getElementById('u');
let i = document.getElementById('i');
let o = document.getElementById('o');
let p = document.getElementById('p');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let a7 = document.getElementById('a7');
let a8 = document.getElementById('a8');
let a9 = document.getElementById('a9');
let a = document.getElementById('a');
let s = document.getElementById('s');
let d = document.getElementById('d');
let f = document.getElementById('f');
let g = document.getElementById('g');
let h = document.getElementById('h');
let j = document.getElementById('j');
let k = document.getElementById('k');
let l = document.getElementById('l');
let l2 = document.getElementById('l2');
let l3 = document.getElementById('l3');
let a4 = document.getElementById('a4');
let a5 = document.getElementById('a5');
let a6 = document.getElementById('a6');
let z = document.getElementById('z');
let x = document.getElementById('x');
let c = document.getElementById('c');
let v = document.getElementById('v');
let b = document.getElementById('b');
let n = document.getElementById('n');
let m = document.getElementById('m');
let m2H = document.getElementById('m2H');
let m3H = document.getElementById('m3H');
let m4H = document.getElementById('m4H');
let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');
let a0 = document.getElementById('a0');
let asup = document.getElementById('asup');
let abar = document.getElementById('abar');
let abarinv = document.getElementById('abarinv');
let amoins = document.getElementById('amoins');
let aplus = document.getElementById('aplus');
let adiv = document.getElementById('adiv');
let amul = document.getElementById('amul');
let ami = document.getElementById('ami');


const boutton1 = document.querySelectorAll('boutton1');
let bouton = false;

let qdown = function(event) {
    if (event.key === 'q' || event.key === 'Q' && !bouton) {
        q.style.backgroundColor = 'red';
        q.click();
        }
};

let qup = function(event) {
    if (event.key === 'q' || event.key === 'Q' && bouton) {
        q.style.backgroundColor = 'white';
    }
};

document.addEventListener('keydown', qdown);
document.addEventListener('keyup', qup);

let wdown = function(event) {
    if (event.key === 'w' || event.key === 'W' && !bouton) {
        w.style.backgroundColor = 'red';
        w.click();
        }
};

let wup = function(event) {
    if (event.key === 'w' || event.key === 'W' && bouton) {
        w.style.backgroundColor = 'white';
    }
};

document.addEventListener('keydown', wdown);
document.addEventListener('keyup', wup);

let edown = function(event) {
    if (event.key === 'e' || event.key === 'E' && !bouton) {
        e.style.backgroundColor = 'red';
        e.click();
        }
};

let eup = function(event) {
    if (event.key === 'e' || event.key === 'E' && bouton) {
        e.style.backgroundColor = 'white';
    }
};

document.addEventListener('keydown', edown);
document.addEventListener('keyup', eup);

let rdown = function(event) {
    if (event.key === 'r' || event.key === 'R' && !bouton) {
        r.style.backgroundColor = 'red';
        r.click();
        }
};

let rup = function(event) {
    if (event.key === 'r' || event.key === 'R' && bouton) {
        r.style.backgroundColor = 'white';
    }
};

document.addEventListener('keydown', rdown);
document.addEventListener('keyup', rup);

let tdown = function(event) {
    if (event.key === 't' || event.key === 'T' && !bouton) {
        t.style.backgroundColor = 'red';
        t.click();
        }
};

let tup = function(event) {
    if (event.key === 't' || event.key === 'T' && bouton) {
        t.style.backgroundColor = 'white';
    }
};

document.addEventListener('keydown', tdown);
document.addEventListener('keyup', tup);

let ydown = function(event) {
    if (event.key === 'y' || event.key === 'Y' && !bouton) {
        y.style.backgroundColor = 'red';
        y.click();
        }
}

let yup = function(event) {
    if (event.key === 'y' || event.key === 'Y' && bouton) {
        y.style.backgroundColor = 'white';
    }
};

document.addEventListener('keydown', ydown);
document.addEventListener('keyup', yup);

let udown = function(event) {
    if (event.key === 'u' || event.key === 'U' && !bouton) {
        u.style.backgroundColor = 'red';
        u.click();
        }
}

let uup = function(event) {
    if (event.key === 'u' || event.key === 'U' && bouton) {
        u.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', udown);
document.addEventListener('keyup', uup);

let idown = function(event) {
    if (event.key === 'i' || event.key === 'I' && !bouton) {
        i.style.backgroundColor = 'red';
        i.click();
        }
}

let iup = function(event) {
    if (event.key === 'i' || event.key === 'I' && bouton) {
        i.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', idown);
document.addEventListener('keyup', iup);

let odown = function(event) {
    if (event.key === 'o' || event.key === 'O' && !bouton) {
        o.style.backgroundColor = 'red';
        o.click();
        }
}

let oup = function(event) {
    if (event.key === 'o' || event.key === 'O' && bouton) {
        o.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', odown);
document.addEventListener('keyup', oup);

let pdown = function(event) {
    if (event.key === 'p' || event.key === 'P' && !bouton) {
        p.style.backgroundColor = 'red';
        p.click();
        }
}

let pup = function(event) {
    if (event.key === 'p' || event.key === 'P' && bouton) {
        p.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', pdown);
document.addEventListener('keyup', pup);

let p2down = function(event) {
    if (event.key === '[' || event.key === '{' && !bouton) {
        p2.style.backgroundColor = 'red';
        p2.click();
        }
}

let p2up = function(event) {
    if (event.key === '[' || event.key === '{' && bouton) {
        p2.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', p2down);
document.addEventListener('keyup', p2up);

let p3down = function(event) {
    if (event.key === ']' || event.key === '}' && !bouton) {
        p3.style.backgroundColor = 'red';
        p3.click();
        }
}

let p3up = function(event) {
    if (event.key === ']' || event.key === '}' && bouton) {
        p3.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', p3down);
document.addEventListener('keyup', p3up);

let a7down = function(event) {
    if (event.key === '7' || event.key === '7' && !bouton) {
        a7.style.backgroundColor = 'red';
        a7.click();
        }
}

let a7up = function(event) {
    if (event.key === '7' || event.key === '7' && bouton) {
        a7.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', a7down);
document.addEventListener('keyup', a7up);

let a8down = function(event) {
    if (event.key === '8' || event.key === '8' && !bouton) {
        a8.style.backgroundColor = 'red';
        a8.click();
        }
}

let a8up = function(event) {
    if (event.key === '8' || event.key === '8' && bouton) {
        a8.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', a8down);
document.addEventListener('keyup', a8up);

let a9down = function(event) {
    if (event.key === '9' || event.key === '9' && !bouton) {
        a9.style.backgroundColor = 'red';
        a9.click();
        }
}

let a9up = function(event) {
    if (event.key === '9' || event.key === '9' && bouton) {
        a9.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', a9down);
document.addEventListener('keyup', a9up);

let adown = function(event) {
    if (event.key === 'a' || event.key === 'A' && !bouton) {
        a.style.backgroundColor = 'red';
        a.click();
        }
}

let aup = function(event) {
    if (event.key === 'a' || event.key === 'A' && bouton) {
        a.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', adown);
document.addEventListener('keyup', aup);

let sdown = function(event) {
    if (event.key === 's' || event.key === 'S' && !bouton) {
        s.style.backgroundColor = 'red';
        s.click();
        }
}

let sup = function(event) {
    if (event.key === 's' || event.key === 'S' && bouton) {
        s.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', sdown);
document.addEventListener('keyup', sup);

let ddown = function(event) {
    if (event.key === 'd' || event.key === 'D' && !bouton) {
        d.style.backgroundColor = 'red';
        d.click();
        }
}

let dup = function(event) {
    if (event.key === 'd' || event.key === 'D' && bouton) {
        d.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', ddown);
document.addEventListener('keyup', dup);

let fdown = function(event) {
    if (event.key === 'f' || event.key === 'F' && !bouton) {
        f.style.backgroundColor = 'red';
        f.click();
        }
}

let fup = function(event) {
    if (event.key === 'f' || event.key === 'F' && bouton) {
        f.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', fdown);
document.addEventListener('keyup', fup);

let gdown = function(event) {
    if (event.key === 'g' || event.key === 'G' && !bouton) {
        g.style.backgroundColor = 'red';
        g.click();
        }
}

let gup = function(event) {
    if (event.key === 'g' || event.key === 'G' && bouton) {
        g.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', gdown);
document.addEventListener('keyup', gup);

let hdown = function(event) {
    if (event.key === 'h' || event.key === 'H' && !bouton) {
        h.style.backgroundColor = 'red';
        h.click();
        }
}

let hup = function(event) {
    if (event.key === 'h' || event.key === 'H' && bouton) {
        h.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', hdown);
document.addEventListener('keyup', hup);

let jdown = function(event) {
    if (event.key === 'j' || event.key === 'J' && !bouton) {
        j.style.backgroundColor = 'red';
        j.click();
        }
}

let jup = function(event) {
    if (event.key === 'j' || event.key === 'J' && bouton) {
        j.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', jdown);
document.addEventListener('keyup', jup);

let kdown = function(event) {
    if (event.key === 'k' || event.key === 'K' && !bouton) {
        k.style.backgroundColor = 'red';
        k.click();
        }
}

let kup = function(event) {
    if (event.key === 'k' || event.key === 'K' && bouton) {
        k.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', kdown);
document.addEventListener('keyup', kup);

let ldown = function(event) {
    if (event.key === 'l' || event.key === 'L' && !bouton) {
        l.style.backgroundColor = 'red';
        l.click();
        }
}

let lup = function(event) {
    if (event.key === 'l' || event.key === 'L' && bouton) {
        l.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', ldown);
document.addEventListener('keyup', lup);

let l2down = function(event) {
    if (event.key === ';' || event.key === ':' && !bouton) {
        l2.style.backgroundColor = 'red';
        l2.click();
        }
}

let l2up = function(event) {
    if (event.key === ';' || event.key === ':' && bouton) {
        l2.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', l2down);
document.addEventListener('keyup', l2up);

let l3down = function(event) {
    if (event.key === "'" || event.key === '"' && !bouton) {
        l3.style.backgroundColor = 'red';
        l3.click();
        }
}

let l3up = function(event) {
    if (event.key === "'" || event.key === '"' && bouton) {
        l3.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', l3down);
document.addEventListener('keyup', l3up);

let a4down = function(event) {
    if (event.key === '4' || event.key === '4' && !bouton) {
        a4.style.backgroundColor = 'red';
        a4.click();
        }
}

let a4up = function(event) {
    if (event.key === '4' || event.key === '4' && bouton) {
        a4.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', a4down);
document.addEventListener('keyup', a4up);

let a5down = function(event) {
    if (event.key === '5' || event.key === '5' && !bouton) {
        a5.style.backgroundColor = 'red';
        a5.click();
        }
}

let a5up = function(event) {
    if (event.key === '5' || event.key === '5' && bouton) {
        a5.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', a5down);
document.addEventListener('keyup', a5up);

let a6down = function(event) {
    if (event.key === '6' || event.key === '6' && !bouton) {
        a6.style.backgroundColor = 'red';
        a6.click();
        }
}

let a6up = function(event) {
    if (event.key === '6' || event.key === '6' && bouton) {
        a6.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', a6down);
document.addEventListener('keyup', a6up);

let zdown = function(event) {
    if (event.key === 'z' || event.key === 'Z' && !bouton) {
        z.style.backgroundColor = 'red';
        z.click();
        }
}

let zup = function(event) {
    if (event.key === 'z' || event.key === 'Z' && bouton) {
        z.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', zdown);
document.addEventListener('keyup', zup);

let xdown = function(event) {
    if (event.key === 'x' || event.key === 'X' && !bouton) {
        x.style.backgroundColor = 'red';
        x.click();
        }
}

let xup = function(event) {
    if (event.key === 'x' || event.key === 'X' && bouton) {
        x.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', xdown);
document.addEventListener('keyup', xup);

let cdown = function(event) {
    if (event.key === 'c' || event.key === 'C' && !bouton) {
        c.style.backgroundColor = 'red';
        c.click();
        }
}

let cup = function(event) {
    if (event.key === 'c' || event.key === 'C' && bouton) {
        c.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', cdown);
document.addEventListener('keyup', cup);

let vdown = function(event) {
    if (event.key === 'v' || event.key === 'V' && !bouton) {
        v.style.backgroundColor = 'red';
        v.click();
        }
}

let vup = function(event) {
    if (event.key === 'v' || event.key === 'V' && bouton) {
        v.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', vdown);
document.addEventListener('keyup', vup);

let bdown = function(event) {
    if (event.key === 'b' || event.key === 'B' && !bouton) {
        b.style.backgroundColor = 'red';
        b.click();
        }
}

let bup = function(event) {
    if (event.key === 'b' || event.key === 'B' && bouton) {
        b.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', bdown);
document.addEventListener('keyup', bup);

let ndown = function(event) {
    if (event.key === 'n' || event.key === 'N' && !bouton) {
        n.style.backgroundColor = 'red';
        n.click();
        }
}

let nup = function(event) {
    if (event.key === 'n' || event.key === 'N' && bouton) {
        n.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', ndown);
document.addEventListener('keyup', nup);

let mdown = function(event) {
    if (event.key === 'm' || event.key === 'M' && !bouton) {
        m.style.backgroundColor = 'red';
        m.click();
        }
}

let mup = function(event) {
    if (event.key === 'm' || event.key === 'M' && bouton) {
        m.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', mdown);
document.addEventListener('keyup', mup);

let m2Hdown = function(event) {
    if (event.key === ',' || event.key === '<' && !bouton) {
        m2H.style.backgroundColor = 'red';
        m2H.click();
        }
}

let m2Hup = function(event) {
    if (event.key === ',' || event.key === '<' && bouton) {
        m2H.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', m2Hdown);
document.addEventListener('keyup', m2Hup);

let m3Hdown = function(event) {
    if (event.key === '.' || event.key === '>' && !bouton) {
        m3H.style.backgroundColor = 'red';
        m3H.click();
        }
}

let m3Hup = function(event) {
    if (event.key === '.' || event.key === '>' && bouton) {
        m3H.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', m3Hdown);
document.addEventListener('keyup', m3Hup);

let m4Hdown = function(event) {
    if (event.key === '/' || event.key === '?' && !bouton) {
        m4H.style.backgroundColor = 'red';
        m4H.click();
        }
}

let m4Hup = function(event) {
    if (event.key === '/' || event.key === '?' && bouton) {
        m4H.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', m4Hdown);
document.addEventListener('keyup', m4Hup);

let a1down = function(event) {
    if (event.key === '1' || event.key === '1' && !bouton) {
        a1.style.backgroundColor = 'red';
        a1.click();
        }
}

let a1up = function(event) {
    if (event.key === '1' || event.key === '1' && bouton) {
        a1.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', a1down);
document.addEventListener('keyup', a1up);

let a2down = function(event) {
    if (event.key === '2'  || event.key === '2' && !bouton) {
        a2.style.backgroundColor = 'red';
        a2.click();
        }
}

let a2up = function(event) {
    if (event.key === '2' || event.key === '2' && bouton) {
        a2.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', a2down);
document.addEventListener('keyup', a2up);

let a3down = function(event) {
    if (event.key === '3' || event.key === '3' && !bouton) {
        a3.style.backgroundColor = 'red';
        a3.click();
        }
}

let a3up = function(event) {
    if (event.key === '3' || event.key === '3' && bouton) {
        a3.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', a3down);
document.addEventListener('keyup', a3up);

let a0down = function(event) {
    if (event.key === '0' || event.key === '0' && !bouton) {
        a0.style.backgroundColor = 'red';
        a0.click();
        }
}

let a0up = function(event) {
    if (event.key === '0' || event.key === '0' && bouton) {
        a0.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', a0down);
document.addEventListener('keyup', a0up);

let asupdown = function(event) {
    if (event.key === '.' || event.key === '.' && !bouton) {
        asup.style.backgroundColor = 'red';
        asup.click();
        }
}

let asupup = function(event) {
    if (event.key === '.' || event.key === '.' && bouton) {
        asup.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', asupdown);
document.addEventListener('keyup', asupup);

/* let abardown = function(event) {
    if (event.key === '\'' && !bouton) {
        abar.style.backgroundColor = 'red';
        abarinv.click();
        }
}

let abarup = function(event) {
    if (event.key === '\'' && bouton) {
        abar.style.backgroundColor = 'white';
    }
}

document.addEventListener('keydown', abardown);
document.addEventListener('keyup', abarup);

let abarinvdown = function(event) {
    if (event.key === '\'' && !bouton) {
        abarinv.style.backgroundColor = 'red';
        abarinv.click();
        }
} 

let abarinvup = function(event) {
    if (event.key === '\'' && bouton) {
        abarinv.style.backgroundColor = 'white';
    }
} 

document.addEventListener('keydown', abarinvdown);
document.addEventListener('keyup', abarinvup); */

let amoinsdown = function(event) {
    if (event.key === '-' || event.key === '-' && !bouton) {
        amoins.style.backgroundColor = 'red';
        amoins.click();
        }
}

let amoinsup = function(event) {
    if (event.key === '-' || event.key === '-' && bouton) {
        amoins.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', amoinsdown);
document.addEventListener('keyup', amoinsup);

let aplusdown = function(event) {
    if (event.key === '+' || event.key === '+' && !bouton) {
        aplus.style.backgroundColor = 'red';
        aplus.click();
        }
}

let aplusup = function(event) {
    if (event.key === '+' || event.key === '+' && bouton) {
        aplus.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', aplusdown);
document.addEventListener('keyup', aplusup);

let adivdown = function(event) {
    if (event.key === '/' || event.key === '/' && !bouton) {
        adiv.style.backgroundColor = 'red';
        adiv.click();
        }
}

let adivup = function(event) {
    if (event.key === '/' || event.key === '/' && bouton) {
        adiv.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', adivdown);
document.addEventListener('keyup', adivup);

let amuldown = function(event) {
    if (event.key === '*' && !bouton) {
        amul.style.backgroundColor = 'red';
        amul.click();
        }
}

let amulup = function(event) {
    if (event.key === '*' && bouton) {
        amul.style.backgroundColor = '#333333';
    }
}

document.addEventListener('keydown', amuldown);
document.addEventListener('keyup', amulup);

let Menu = function(event) {
    event.preventDefault();
    for (let i = 0; i < interfaces.length; i++) {
        let interface = interfaces[i];
        if (interface.style.visibility === 'visible') { 
            return interface.style.visibility = 'hidden';
        } else {
            return interface.style.visibility = 'visible';
        }
    }
};

document.addEventListener('click', Menu);


