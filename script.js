
//------------------------------------------------------LOGICA-------------------------------------------------------------------------------------------------------------------------
var services;
(function (services) {
    var Evaluator = /** @class */ (function () {
        function Evaluator() {
        }
        Evaluator.eval = function (str) {
            return new Evaluator.Evaluator$0(str).parse();
        };
        return Evaluator;
    }());
    services.Evaluator = Evaluator;
    Evaluator["__class"] = "services.Evaluator";
    (function (Evaluator) {
        var Evaluator$0 = /** @class */ (function () {
            function Evaluator$0(str) {
                this.str = str;
                this.pos = -1;
                if (this.ch === undefined) {
                    this.ch = 0;
                }
            }
            Evaluator$0.prototype.nextChar = function () {
                this.ch = (++this.pos < this.str.length) ? (this.str.charAt(this.pos)).charCodeAt(0) : -1;
            };
            Evaluator$0.prototype.eat = function (charToEat) {
                while ((this.ch == ' '.charCodeAt(0))) {
                    this.nextChar();
                }
                ;
                if (this.ch === charToEat) {
                    this.nextChar();
                    return true;
                }
                return false;
            };
            Evaluator$0.prototype.parse = function () {
                this.nextChar();
                var x = this.parseExpression();
                if (this.pos < this.str.length)
                    throw Object.defineProperty(new Error("Unexpected: " + String.fromCharCode(this.ch)), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                return x;
            };
            Evaluator$0.prototype.parseExpression = function () {
                var x = this.parseTerm();
                for (; ;) {
                    {
                        if (this.eat(('+').charCodeAt(0)))
                            x += this.parseTerm();
                        else if (this.eat(('-').charCodeAt(0)))
                            x -= this.parseTerm();
                        else
                            return x;
                    }
                    ;
                }
            };
            Evaluator$0.prototype.parseTerm = function () {
                var x = this.parseFactor();
                for (; ;) {
                    {
                        if (this.eat(('*').charCodeAt(0)))
                            x *= this.parseFactor();
                        else if (this.eat(('/').charCodeAt(0)))
                            x /= this.parseFactor();
                        else
                            return x;
                    }
                    ;
                }
            };
            Evaluator$0.prototype.parseFactor = function () {
                if (this.eat(('+').charCodeAt(0)))
                    return this.parseFactor();
                if (this.eat(('-').charCodeAt(0)))
                    return -this.parseFactor();
                var x;
                var startPos = this.pos;
                if (this.eat(('(').charCodeAt(0))) {
                    x = this.parseExpression();
                    this.eat((')').charCodeAt(0));
                }
                else if ((this.ch >= '0'.charCodeAt(0) && this.ch <= '9'.charCodeAt(0)) || this.ch == '.'.charCodeAt(0)) {
                    while (((this.ch >= '0'.charCodeAt(0) && this.ch <= '9'.charCodeAt(0)) || this.ch == '.'.charCodeAt(0))) {
                        this.nextChar();
                    }
                    ;
                    x = /* parseDouble */ parseFloat(this.str.substring(startPos, this.pos));
                }
                else if (this.ch >= 'a'.charCodeAt(0) && this.ch <= 'z'.charCodeAt(0)) {
                    while ((this.ch >= 'a'.charCodeAt(0) && this.ch <= 'z'.charCodeAt(0))) {
                        this.nextChar();
                    }
                    ;
                    var func = this.str.substring(startPos, this.pos);
                    x = this.parseFactor();
                    if (func === ("sqrt"))
                        x = Math.sqrt(x);
                    else if (func === ("sin"))
                        x = Math.sin(/* toRadians */(function (x) { return x * Math.PI / 180; })(x));
                    else if (func === ("cos"))
                        x = Math.cos(/* toRadians */(function (x) { return x * Math.PI / 180; })(x));
                    else if (func === ("tan"))
                        x = Math.tan(/* toRadians */(function (x) { return x * Math.PI / 180; })(x));
                    else
                        throw Object.defineProperty(new Error("Unknown function: " + func), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                }
                else {
                    throw Object.defineProperty(new Error("Unexpected: " + String.fromCharCode(this.ch)), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                }
                if (this.eat(('^').charCodeAt(0)))
                    x = Math.pow(x, this.parseFactor());
                return x;
            };
            return Evaluator$0;
        }());
        Evaluator.Evaluator$0 = Evaluator$0;
    })(Evaluator = services.Evaluator || (services.Evaluator = {}));
    var Variavel = /** @class */ (function () {
        function Variavel(nome) {
            if (this.nome === undefined) {
                this.nome = null;
            }
            if (this.valor === undefined) {
                this.valor = 0;
            }
            this.nome = nome;
        }
        Variavel.prototype.getValor = function () {
            return this.valor;
        };
        Variavel.prototype.setValor = function (valor) {
            this.valor = valor;
        };
        Variavel.prototype.getNome = function () {
            return this.nome;
        };
        return Variavel;
    }());
    services.Variavel = Variavel;
    Variavel["__class"] = "services.Variavel";
    var FBF = /** @class */ (function () {
        function FBF(enunciado) {
            if (this.enunciado === undefined) {
                this.enunciado = null;
            }
            this.variaveis = ([]);
            this.enunciado = enunciado;
        }
        FBF.prototype.inicializarFBF = function () {
            /* clear */ (this.variaveis.length = 0);
            if ( /* contains */(this.enunciado.indexOf("A") != -1)) /* add */
                (this.variaveis.push(new services.Variavel("A")) > 0);
            if ( /* contains */(this.enunciado.indexOf("B") != -1)) /* add */
                (this.variaveis.push(new services.Variavel("B")) > 0);
            if ( /* contains */(this.enunciado.indexOf("C") != -1)) /* add */
                (this.variaveis.push(new services.Variavel("C")) > 0);
            if ( /* contains */(this.enunciado.indexOf("D") != -1)) /* add */
                (this.variaveis.push(new services.Variavel("D")) > 0);
            if ( /* contains */(this.enunciado.indexOf("E") != -1)) /* add */
                (this.variaveis.push(new services.Variavel("E")) > 0);
        };
        FBF.prototype.processarFBF = function () {
            this.enunciado = /* replace */ this.enunciado.split('&').join('*');
            this.enunciado = /* replace */ this.enunciado.split('|').join('+');
            services.Operacoes.processar(this.variaveis, this.enunciado);
        };
        FBF.prototype.getVariaveis = function () {
            return this.variaveis;
        };
        FBF.prototype.setVariaveis = function (variaveis) {
            this.variaveis = variaveis;
        };
        return FBF;
    }());
    services.FBF = FBF;
    FBF["__class"] = "services.FBF";
    var Operacoes = /** @class */ (function () {
        function Operacoes() {
        }
        Operacoes.resultados_$LI$ = function () {
            if (Operacoes.resultados == null) {
                Operacoes.resultados = ({});
            } return Operacoes.resultados;
        };
        Operacoes.valoresPossiveis_$LI$ = function () {
            if (Operacoes.valoresPossiveis == null) {
                Operacoes.valoresPossiveis = ([]);
            } return Operacoes.valoresPossiveis;
        };
        Operacoes.passoAPasso_$LI$ = function () {
            if (Operacoes.passoAPasso == null) {
                Operacoes.passoAPasso = ([]);
            } return Operacoes.passoAPasso;
        };
        Operacoes.processar = function (variaveis, enunciado) {
            /* clear */ (Operacoes.valoresPossiveis_$LI$().length = 0);
            /* clear */ Operacoes.resultados_$LI$().entries = [];
            /* clear */ (Operacoes.passoAPasso_$LI$().length = 0);
            for (var i = 0; i < (Math.pow(2, /* size */ variaveis.length) | 0); i++) {
                {
                    if (i === 0) {
                        for (var index17438 = 0; index17438 < variaveis.length; index17438++) {
                            var variavel = variaveis[index17438];
                            {
                                variavel.setValor(0);
                            }
                        }
                        Operacoes.getResultados$java_util_List$java_lang_String(variaveis, enunciado);
                    }
                    else {
                        function toBinaryString(i) {
                            if (i === 0) return "0";

                            let binaryString = "";
                            while (i > 0) {
                                binaryString = (i % 2) + binaryString;
                                i = Math.floor(i / 2);
                            }

                            return binaryString;
                        }
                        var combinacao = toBinaryString(i);
                        while ((combinacao.length !== /* size */ variaveis.length)) {
                            {
                                combinacao = "0" + combinacao;
                            }
                        }
                        ;
                        for (var index17439 = 0; index17439 < variaveis.length; index17439++) {
                            var variavel = variaveis[index17439];
                            {
                                variavel.setValor(parseFloat(combinacao.substring(0, 1)));
                                combinacao = combinacao.substring(1);
                            }
                        }
                        Operacoes.getResultados$java_util_List$java_lang_String(variaveis, enunciado);
                    }
                }
                ;
            }
        };
        Operacoes.getResultados$java_util_List$java_lang_String = function (variaveis, enunciado) {
            var valorFinal;
            var valoresPossiveisVetor = (function (s) {
                var a = []; while (s-- > 0)
                    a.push(null); return a;
            })(/* size */ variaveis.length);
            if ( /* contains */(enunciado.indexOf("A") != -1))
                enunciado = /* replace */ enunciado.split('A').join(/* valueOf */ String(/* get */ variaveis[0].getValor()).toString().charAt(0));
            if ( /* contains */(enunciado.indexOf("B") != -1))
                enunciado = /* replace */ enunciado.split('B').join(/* valueOf */ String(/* get */ variaveis[1].getValor()).toString().charAt(0));
            if ( /* contains */(enunciado.indexOf("C") != -1))
                enunciado = /* replace */ enunciado.split('C').join(/* valueOf */ String(/* get */ variaveis[2].getValor()).toString().charAt(0));
            if ( /* contains */(enunciado.indexOf("D") != -1))
                enunciado = /* replace */ enunciado.split('D').join(/* valueOf */ String(/* get */ variaveis[3].getValor()).toString().charAt(0));
            if ( /* contains */(enunciado.indexOf("E") != -1))
                enunciado = /* replace */ enunciado.split('E').join(/* valueOf */ String(/* get */ variaveis[4].getValor()).toString().charAt(0));
            for (var i = 0; i < /* size */ variaveis.length; i++) {
                {
                    valoresPossiveisVetor[i] = /* get */ variaveis[i].getValor();
                }
                ;
            }
            /* add */ (Operacoes.valoresPossiveis_$LI$().push(valoresPossiveisVetor) > 0);
            /* add */ (Operacoes.passoAPasso_$LI$().push(enunciado) > 0);
            enunciado = Operacoes.resolverComParenteses(enunciado);
            while ((enunciado.length !== 1)) {
                {
                    if ( /* contains */(enunciado.indexOf("-") != -1)) {
                        for (var i = 0; i < enunciado.length; i++) {
                            {
                                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(enunciado.charAt(i)) == '-'.charCodeAt(0)) {
                                    if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(enunciado.charAt(i + 1)) == '0'.charCodeAt(0)) {
                                        enunciado = enunciado.substring(0, i + 1) + "1" + enunciado.substring(i + 2);
                                        enunciado = enunciado.substring(0, i) + enunciado.substring(i + 1);
                                        i = 0;
                                    }
                                    else if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(enunciado.charAt(i + 1)) == '1'.charCodeAt(0)) {
                                        enunciado = enunciado.substring(0, i + 1) + "0" + enunciado.substring(i + 2);
                                        enunciado = enunciado.substring(0, i) + enunciado.substring(i + 1);
                                        i = 0;
                                    }
                                }
                            }
                            ;
                        }
                        /* add */ (Operacoes.passoAPasso_$LI$().push(enunciado) > 0);
                    }
                    if ( /* contains */(enunciado.indexOf("+") != -1)) {
                        for (var i = 0; i < enunciado.length; i++) {
                            {
                                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(enunciado.charAt(i)) == '+'.charCodeAt(0)) {
                                    var somaS = String(Math.round(services.Evaluator.eval(enunciado.substring(i - 1, i + 2)))).toString();
                                    var soma = parseFloat(somaS);
                                    if (soma > 1)
                                        soma = 1;
                                    enunciado = enunciado.substring(0, i - 1) + /* valueOf */ String(soma).toString() + enunciado.substring(i + 2);
                                    i = 0;
                                }
                            }
                            ;
                        }
                        /* add */ (Operacoes.passoAPasso_$LI$().push(enunciado) > 0);
                    }
                    if ( /* contains */(enunciado.indexOf("*") != -1)) {
                        for (var i = 0; i < enunciado.length; i++) {
                            {
                                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(enunciado.charAt(i)) == '*'.charCodeAt(0)) {
                                    var multiS = String(Math.round(services.Evaluator.eval(enunciado.substring(i - 1, i + 2)))).toString();
                                    var multi = parseFloat(multiS);
                                    enunciado = enunciado.substring(0, i - 1) + /* valueOf */ String(multi).toString() + enunciado.substring(i + 2);
                                    i = 0;
                                }
                            }
                            ;
                        }
                        /* add */ (Operacoes.passoAPasso_$LI$().push(enunciado) > 0);
                    }
                    var temCondicional = false;
                    if ( /* contains */(enunciado.indexOf("~") != -1)) {
                        for (var i = 0; i < enunciado.length; i++) {
                            {
                                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(enunciado.charAt(i)) == '~'.charCodeAt(0)) {
                                    enunciado = enunciado.substring(0, i) + "+" + enunciado.substring(i + 1);
                                    enunciado = "-" + enunciado;
                                }
                            }
                            ;
                        }
                        temCondicional = true;
                        /* add */ (Operacoes.passoAPasso_$LI$().push(enunciado) > 0);
                    }
                    if (temCondicional)
                        continue;
                    var temBiCondicional = false;
                    if ( /* contains */(enunciado.indexOf("%") != -1)) {
                        for (var i = 0; i < enunciado.length; i++) {
                            {
                                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(enunciado.charAt(i)) == '%'.charCodeAt(0)) {
                                    var a = enunciado.substring(0, i);
                                    var b = enunciado.substring(i + 1);
                                    enunciado = "(" + a + "~" + b + ")*(" + b + "~" + a + ")";
                                }
                            }
                            ;
                        }
                        enunciado = Operacoes.resolverComParenteses(enunciado);
                        temBiCondicional = true;
                        /* add */ (Operacoes.passoAPasso_$LI$().push(enunciado) > 0);
                    }
                    if (temBiCondicional)
                        continue;
                }
            }
            ;
            valorFinal = parseFloat(enunciado);
            /* add */ (Operacoes.passoAPasso_$LI$().push(enunciado) > 0);
            /* add */ (Operacoes.passoAPasso_$LI$().push("FIM") > 0);
            /* put */ (function (m, k, v) {
                if (m.entries == null)
                    m.entries = []; for (var i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key == null && k == null || m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        m.entries[i].value = v;
                        return;
                    } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } });
            })(Operacoes.resultados_$LI$(), valoresPossiveisVetor, valorFinal);
        };
        Operacoes.getResultados = function (variaveis, enunciado) {
            if (((variaveis != null && (variaveis instanceof Array)) || variaveis === null) && ((typeof enunciado === 'string') || enunciado === null)) {
                return services.Operacoes.getResultados$java_util_List$java_lang_String(variaveis, enunciado);
            }
            else if (variaveis === undefined && enunciado === undefined) {
                return services.Operacoes.getResultados$();
            }
            else
                throw new Error('invalid overload');
        };
        Operacoes.resolverComParenteses = function (enunciado) {
            while (( /* contains */(enunciado.indexOf("(") != -1))) {
                {
                    var abreP = enunciado.lastIndexOf("(");
                    var fechaP = abreP + enunciado.substring(abreP).indexOf(")");
                    var enunciadoEntreParenteses = enunciado.substring(abreP + 1, fechaP);
                    if ( /* contains */(enunciadoEntreParenteses.indexOf("-") != -1)) {
                        for (var i = 0; i < enunciadoEntreParenteses.length; i++) {
                            {
                                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(enunciadoEntreParenteses.charAt(i)) == '-'.charCodeAt(0)) {
                                    if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(enunciadoEntreParenteses.charAt(i + 1)) == '0'.charCodeAt(0)) {
                                        enunciadoEntreParenteses = enunciadoEntreParenteses.substring(0, i + 1) + "1" + enunciadoEntreParenteses.substring(i + 2);
                                        enunciadoEntreParenteses = enunciadoEntreParenteses.substring(0, i) + enunciadoEntreParenteses.substring(i + 1);
                                        i = 0;
                                    }
                                    else if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(enunciadoEntreParenteses.charAt(i + 1)) == '1'.charCodeAt(0)) {
                                        enunciadoEntreParenteses = enunciadoEntreParenteses.substring(0, i + 1) + "0" + enunciadoEntreParenteses.substring(i + 2);
                                        enunciadoEntreParenteses = enunciadoEntreParenteses.substring(0, i) + enunciadoEntreParenteses.substring(i + 1);
                                        i = 0;
                                    }
                                }
                            }
                            ;
                        }
                        /* add */ (Operacoes.passoAPasso_$LI$().push(enunciado.substring(0, abreP + 1) + enunciadoEntreParenteses + enunciado.substring(fechaP)) > 0);
                    }
                    if ( /* contains */(enunciadoEntreParenteses.indexOf("+") != -1)) {
                        for (var i = 0; i < enunciadoEntreParenteses.length; i++) {
                            {
                                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(enunciadoEntreParenteses.charAt(i)) == '+'.charCodeAt(0)) {
                                    var somaS = String(Math.round(services.Evaluator.eval(enunciadoEntreParenteses.substring(i - 1, i + 2)))).toString();
                                    var soma = parseFloat(somaS);
                                    if (soma > 1)
                                        soma = 1;
                                    enunciadoEntreParenteses = enunciadoEntreParenteses.substring(0, i - 1) + /* valueOf */ String(soma).toString() + enunciadoEntreParenteses.substring(i + 2);
                                    i = 0;
                                }
                            }
                            ;
                        }
                        /* add */ (Operacoes.passoAPasso_$LI$().push(enunciado.substring(0, abreP + 1) + enunciadoEntreParenteses + enunciado.substring(fechaP)) > 0);
                    }
                    if ( /* contains */(enunciadoEntreParenteses.indexOf("*") != -1)) {
                        for (var i = 0; i < enunciadoEntreParenteses.length; i++) {
                            {
                                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(enunciadoEntreParenteses.charAt(i)) == '*'.charCodeAt(0)) {
                                    var multiS = String(Math.round(services.Evaluator.eval(enunciadoEntreParenteses.substring(i - 1, i + 2)))).toString();
                                    var multi = parseFloat(multiS);
                                    enunciadoEntreParenteses = enunciadoEntreParenteses.substring(0, i - 1) + /* valueOf */ String(multi).toString() + enunciadoEntreParenteses.substring(i + 2);
                                    i = 0;
                                }
                            }
                            ;
                        }
                        /* add */ (Operacoes.passoAPasso_$LI$().push(enunciado.substring(0, abreP + 1) + enunciadoEntreParenteses + enunciado.substring(fechaP)) > 0);
                    }
                    var temCondicional = false;
                    if ( /* contains */(enunciadoEntreParenteses.indexOf("~") != -1)) {
                        for (var i = 0; i < enunciadoEntreParenteses.length; i++) {
                            {
                                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(enunciadoEntreParenteses.charAt(i)) == '~'.charCodeAt(0)) {
                                    enunciadoEntreParenteses = enunciadoEntreParenteses.substring(0, i) + "+" + enunciadoEntreParenteses.substring(i + 1);
                                    enunciadoEntreParenteses = "-" + enunciadoEntreParenteses;
                                }
                            }
                            ;
                        }
                        enunciado = enunciado.substring(0, abreP + 1) + enunciadoEntreParenteses + enunciado.substring(fechaP);
                        /* add */ (Operacoes.passoAPasso_$LI$().push(enunciado) > 0);
                        temCondicional = true;
                    }
                    if (temCondicional)
                        continue;
                    var temBiCondicional = false;
                    if ( /* contains */(enunciadoEntreParenteses.indexOf("%") != -1)) {
                        for (var i = 0; i < enunciadoEntreParenteses.length; i++) {
                            {
                                if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(enunciadoEntreParenteses.charAt(i)) == '%'.charCodeAt(0)) {
                                    var a = enunciadoEntreParenteses.substring(0, i);
                                    var b = enunciadoEntreParenteses.substring(i + 1);
                                    enunciadoEntreParenteses = "(" + a + "~" + b + ")*(" + b + "~" + a + ")";
                                }
                            }
                            ;
                        }
                        enunciado = enunciado.substring(0, abreP + 1) + enunciadoEntreParenteses + enunciado.substring(fechaP);
                        /* add */ (Operacoes.passoAPasso_$LI$().push(enunciado) > 0);
                        temBiCondicional = true;
                    }
                    if (temBiCondicional)
                        continue;
                    enunciado = enunciado.substring(0, abreP) + enunciadoEntreParenteses + enunciado.substring(fechaP + 1);
                    /* add */ (Operacoes.passoAPasso_$LI$().push(enunciado) > 0);
                }
            }
            ;
            return enunciado;
        };
        Operacoes.getResultados$ = function () {
            return Operacoes.resultados_$LI$();
        };
        Operacoes.getValoresPossiveis = function () {
            return Operacoes.valoresPossiveis_$LI$();
        };
        Operacoes.getPassoAPasso = function () {
            return Operacoes.passoAPasso_$LI$();
        };
        Operacoes.setResultados = function (resultados) {
            Operacoes.resultados = resultados;
        };
        Operacoes.setValoresPossiveis = function (valoresPossiveis) {
            Operacoes.valoresPossiveis = valoresPossiveis;
        };
        Operacoes.setPassoAPasso = function (passoAPasso) {
            Operacoes.passoAPasso = passoAPasso;
        };
        return Operacoes;
    }());
    services.Operacoes = Operacoes;
    Operacoes["__class"] = "services.Operacoes";
})(services || (services = {}));

//--------------------------------------------------------------------------TRATAMENTO---------------------------------------------------------------------------------------

function adicionarOperacao(operacao) {
    const formulaInput = document.getElementById("formulaInput");
    const cursorPosition = formulaInput.selectionStart; // Obtem a posição do cursor no input

    const formulaText = formulaInput.value;
    const formulaPart1 = formulaText.slice(0, cursorPosition);
    const formulaPart2 = formulaText.slice(cursorPosition);

    const novaFormula = formulaPart1 + operacao + formulaPart2;
    formulaInput.value = novaFormula;
}


// Recupere o botão "Calcular" e adicione um ouvinte de evento para o clique
const calcularBtn = document.getElementById("calcularBtn");
calcularBtn.addEventListener("click", function () {
    // Recupere a fórmula inserida pelo usuário
    const formulaInput = document.getElementById("formulaInput").value.toUpperCase();

    try {

        if (!checaEnunciado(substituirOperadores(formulaInput))) {
            throw new Error();
        }
        let fbf = new services.FBF(substituirOperadores(formulaInput))

        fbf.inicializarFBF();
        fbf.processarFBF()

        resultados = new services.Operacoes.getResultados()
        passos = new services.Operacoes.getPassoAPasso()
        valoresPossiveis = new services.Operacoes.getValoresPossiveis()
        rLista = []

        for (r of resultados.entries) {
            rLista.push(r.getValue())
        }

        nomesVariaveis = []
        for (v of fbf.variaveis) {
            nomesVariaveis.push(v.nome)
        }


        // Exiba a tabela verdade gerada
        const divTabela = document.getElementById("divTabela");
        divTabela.style.display = "block"; // Remova o atributo "style" para exibir a div

        montarTabelaVerdade(valoresPossiveis, rLista, nomesVariaveis, formulaInput);


        passoLinha = []
        textoLinha = ''
        c=1
        for (i of passos) {
            if (i == 'FIM') {
                textoLinha = textoLinha.replaceAll('0', 'F')
                textoLinha = textoLinha.replaceAll('1', 'V')
                textoLinha = textoLinha.replaceAll('-','¬');
                textoLinha = textoLinha.replaceAll('*','∧');
                textoLinha = textoLinha.replaceAll('+','∨');
                textoLinha = textoLinha.replaceAll('~','→');
                textoLinha = textoLinha.replaceAll('%','↔');
                textoLinha = 'Linha '+c+': '+formulaInput + " = " + textoLinha.substring(0, textoLinha.length - 6)
                textoLinha += '(FIM)'
                passoLinha.push(textoLinha)
                textoLinha = ''
                c++
            }
            else textoLinha += i + ' = '
        }

        // Exiba a resolução passo a passo gerada
        const divResolucao = document.getElementById("divResolucao");
        divResolucao.style.display = "block"; // Remova o atributo "style" para exibir a div
        montarPassoAPasso(passoLinha, divResolucao);

    } catch (error) {
        alert('A fórmula contém erros. Use apenas as variáveis A, B, C, D, E e os operadores lógicos: ¬ (Negação), ∧ (E), ∨ (Ou), → (Condicional) e ↔ (Bicondicional).')
    }
});

function substituirOperadores(formula) {
    formula = formula.replaceAll('¬', '-');
    formula = formula.replaceAll('∧', '&');
    formula = formula.replaceAll('∨', '|');
    formula = formula.replaceAll('→', '~');
    formula = formula.replaceAll('↔', '%');
    return formula;
}

function montarPassoAPasso(passoLinha, div) {
    div.innerHTML = ""
    const titulo = document.createElement("h2")
    titulo.textContent = "Passo a Passo:"
    div.appendChild(titulo)
    for (l of passoLinha) {
        const linha = document.createElement("p")
        linha.textContent = l
        div.appendChild(linha)
    }
}

function montarTabelaVerdade(valoresVariaveis, valoresFBF, nomesVariaveis, enunciadoFBF) {
    const numLinhas = valoresVariaveis.length;
    const numVariaveis = valoresVariaveis[0].length;

    const tabelaVerdade = document.getElementById("tabelaVerdade");
    tabelaVerdade.innerHTML = ""; // Limpa a tabela antes de preenchê-la

    // Cria a primeira linha da tabela (cabeçalho com os nomes das variáveis e o resultado final)
    const cabecalho = document.createElement("tr");
    for (let variavel = 0; variavel < numVariaveis; variavel++) {
        const th = document.createElement("th");
        th.textContent = nomesVariaveis[variavel];
        cabecalho.appendChild(th);
    }
    const thResultado = document.createElement("th");
    thResultado.textContent = enunciadoFBF;
    cabecalho.appendChild(thResultado);
    tabelaVerdade.appendChild(cabecalho);

    // Itera pelas linhas da tabela verdade
    for (let linha = 0; linha < numLinhas; linha++) {
        const valoresLinha = valoresVariaveis[linha];
        const resultado = valoresFBF[linha];

        // Cria uma nova linha para a tabela
        const novaLinha = document.createElement("tr");

        // Preenche os valores da linha
        for (let variavel = 0; variavel < numVariaveis; variavel++) {
            const valorCelula = valoresLinha[variavel];
            const td = document.createElement("td");
            td.textContent = valorCelula === 0 ? "F" : "V"; // Substitui 0 por "F" e 1 por "V"
            novaLinha.appendChild(td);
        }

        // Preenche o resultado final
        const tdResultado = document.createElement("td");
        tdResultado.textContent = resultado === 0 ? "F" : "V"; // Substitui 0 por "F" e 1 por "V"
        novaLinha.appendChild(tdResultado);

        // Adiciona a linha à tabela
        tabelaVerdade.appendChild(novaLinha);
    }
}

function checaEnunciado(inputElement) {
    let nAParent = 0;
    let nFParent = 0;
    const validChars = "ABCDE&|~%()-";

    if (inputElement.trim() === "") {
        return false;
    }

    for (let i = 0; i < inputElement.length; i++) {
        const char = inputElement[i];
        if (char === "(") nAParent++;
        if (char === ")") nFParent++;

        if (
            i < inputElement.length - 1 &&
            "ABCDE".includes(char) &&
            !"&|~%)".includes(inputElement[i + 1])
        ) {

            return false;
        }

        if (!validChars.includes(char)) {
            return false;
        }
    }

    if (!"ABCDE(-".includes(inputElement[0])) {
        return false;
    }

    if (nAParent !== nFParent) {
        return false;
    }

    if (
        (inputElement.includes("B") && !inputElement.includes("A")) ||
        (inputElement.includes("C") && !inputElement.includes("B")) ||
        (inputElement.includes("D") && !inputElement.includes("C")) ||
        (inputElement.includes("E") && !inputElement.includes("D"))
    ) {
        return false;
    }

    return true;
}