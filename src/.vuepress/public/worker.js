import { isPlainObject as e } from "vuepress/shared";
const t = (e) => Array.isArray(e),
  { entries: n } = Object,
  { fromEntries: r } = Object,
  { values: i } = Object,
  a = (r, ...i) => {
    if (i.length === 0) return r;
    let o = i.shift();
    return (
      o &&
        n(o).forEach(([n, i]) => {
          n === `__proto__` ||
            n === `constructor` ||
            (e(r[n]) && e(i)
              ? a(r[n], i)
              : t(i)
                ? (r[n] = [...i])
                : e(i)
                  ? (r[n] = {
                      ...i,
                    })
                  : (r[n] = o[n]));
        }),
      a(r, ...i)
    );
  },
  o = `KEYS`,
  s = `VALUES`;
var c = class {
  set;
  _type;
  _path;
  constructor(e, t) {
    let n = e._tree,
      r = Array.from(n.keys());
    ((this.set = e),
      (this._type = t),
      (this._path =
        r.length > 0
          ? [
              {
                node: n,
                keys: r,
              },
            ]
          : []));
  }
  next() {
    let e = this.dive();
    return (this.backtrack(), e);
  }
  dive() {
    if (this._path.length === 0)
      return {
        done: !0,
        value: void 0,
      };
    let { node: e, keys: t } = l(this._path);
    if (l(t) === ``)
      return {
        done: !1,
        value: this.result(),
      };
    let n = e.get(l(t));
    return (
      this._path.push({
        node: n,
        keys: Array.from(n.keys()),
      }),
      this.dive()
    );
  }
  backtrack() {
    if (this._path.length === 0) return;
    let e = l(this._path).keys;
    (e.pop(), !(e.length > 0) && (this._path.pop(), this.backtrack()));
  }
  key() {
    return (
      this.set._prefix +
      this._path
        .map(({ keys: e }) => l(e))
        .filter((e) => e !== ``)
        .join(``)
    );
  }
  value() {
    return l(this._path).node.get(``);
  }
  result() {
    switch (this._type) {
      case s:
        return this.value();
      case o:
        return this.key();
      default:
        return [this.key(), this.value()];
    }
  }
  [Symbol.iterator]() {
    return this;
  }
};
const l = (e) => e[e.length - 1],
  u = (e, t, n) => {
    let r = new Map();
    if (typeof t != `string`) return r;
    let i = t.length + 1,
      a = i + n,
      o = new Uint8Array(a * i).fill(n + 1);
    for (let e = 0; e < i; ++e) o[e] = e;
    for (let e = 1; e < a; ++e) o[e * i] = e;
    return (d(e, t, n, r, o, 1, i, ``), r);
  },
  d = (e, t, n, r, i, a, o, s) => {
    let c = a * o;
    t: for (let l of e.keys())
      if (l === ``) {
        let t = i[c - 1];
        t <= n && r.set(s, [e.get(l), t]);
      } else {
        let c = a;
        for (let e = 0; e < l.length; ++e, ++c) {
          let r = l[e],
            a = o * c,
            s = a - o,
            u = i[a],
            d = Math.max(0, c - n - 1),
            f = Math.min(o - 1, c + n);
          for (let e = d; e < f; ++e) {
            let n = r !== t[e],
              o = i[s + e] + +n,
              c = i[s + e + 1] + 1,
              l = i[a + e] + 1,
              d = (i[a + e + 1] = Math.min(o, c, l));
            d < u && (u = d);
          }
          if (u > n) continue t;
        }
        d(e.get(l), t, n, r, i, c, o, s + l);
      }
  };
var f = class e {
  _tree;
  _prefix;
  _size = void 0;
  constructor(e = new Map(), t = ``) {
    ((this._tree = e), (this._prefix = t));
  }
  atPrefix(t) {
    if (!t.startsWith(this._prefix)) throw Error(`Mismatched prefix`);
    let [n, r] = p(this._tree, t.slice(this._prefix.length));
    if (n === void 0) {
      let [n, i] = y(r);
      for (let r of n.keys())
        if (r !== `` && r.startsWith(i)) {
          let a = new Map();
          return (a.set(r.slice(i.length), n.get(r)), new e(a, t));
        }
    }
    return new e(n, t);
  }
  clear() {
    ((this._size = void 0), this._tree.clear());
  }
  delete(e) {
    return ((this._size = void 0), g(this._tree, e));
  }
  entries() {
    return new c(this, `ENTRIES`);
  }
  forEach(e) {
    for (let [t, n] of this) e(t, n, this);
  }
  fuzzyGet(e, t) {
    return u(this._tree, e, t);
  }
  get(e) {
    let t = m(this._tree, e);
    return t === void 0 ? void 0 : t.get(``);
  }
  has(e) {
    return m(this._tree, e)?.has(``) ?? !1;
  }
  keys() {
    return new c(this, o);
  }
  set(e, t) {
    if (typeof e != `string`) throw Error(`key must be a string`);
    return ((this._size = void 0), h(this._tree, e).set(``, t), this);
  }
  get size() {
    if (this._size) return this._size;
    this._size = 0;
    let e = this.entries();
    for (; !e.next().done; ) this._size += 1;
    return this._size;
  }
  update(e, t) {
    if (typeof e != `string`) throw Error(`key must be a string`);
    this._size = void 0;
    let n = h(this._tree, e);
    return (n.set(``, t(n.get(``))), this);
  }
  fetch(e, t) {
    if (typeof e != `string`) throw Error(`key must be a string`);
    this._size = void 0;
    let n = h(this._tree, e),
      r = n.get(``);
    return (r === void 0 && n.set(``, (r = t())), r);
  }
  values() {
    return new c(this, s);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  static from(t) {
    let n = new e();
    for (let [e, r] of t) n.set(e, r);
    return n;
  }
  static fromObject(t) {
    return e.from(Object.entries(t));
  }
};
const p = (e, t, n = []) => {
    if (t.length === 0 || e == null) return [e, n];
    for (let r of e.keys())
      if (r !== `` && t.startsWith(r))
        return (n.push([e, r]), p(e.get(r), t.slice(r.length), n));
    return (n.push([e, t]), p(void 0, ``, n));
  },
  m = (e, t) => {
    if (t.length === 0 || !e) return e;
    for (let n of e.keys())
      if (n !== `` && t.startsWith(n)) return m(e.get(n), t.slice(n.length));
  },
  h = (e, t) => {
    let n = t.length;
    t: for (let r = 0; e && r < n; ) {
      for (let i of e.keys())
        if (i !== `` && t[r] === i[0]) {
          let a = Math.min(n - r, i.length),
            o = 1;
          for (; o < a && t[r + o] === i[o]; ) ++o;
          let s = e.get(i);
          if (o === i.length) e = s;
          else {
            let n = new Map();
            (n.set(i.slice(o), s),
              e.set(t.slice(r, r + o), n),
              e.delete(i),
              (e = n));
          }
          r += o;
          continue t;
        }
      let i = new Map();
      return (e.set(t.slice(r), i), i);
    }
    return e;
  },
  g = (e, t) => {
    let [n, r] = p(e, t);
    if (n !== void 0) {
      if ((n.delete(``), n.size === 0)) _(r);
      else if (n.size === 1) {
        let [e, t] = n.entries().next().value;
        v(r, e, t);
      }
    }
  },
  _ = (e) => {
    if (e.length === 0) return;
    let [t, n] = y(e);
    if ((t.delete(n), t.size === 0)) _(e.slice(0, -1));
    else if (t.size === 1) {
      let [n, r] = t.entries().next().value;
      n !== `` && v(e.slice(0, -1), n, r);
    }
  },
  v = (e, t, n) => {
    if (e.length === 0) return;
    let [r, i] = y(e);
    (r.set(i + t, n), r.delete(i));
  },
  y = (e) => e[e.length - 1],
  b = (e, t) => {
    let n = e._idToShortId.get(t);
    if (n != null) return e._storedFields.get(n);
  },
  x = /[\n\r\p{Z}\p{P}]+/u,
  S = (e, t) => {
    e.includes(t) || e.push(t);
  },
  C = (e, t) => {
    for (let n of t) e.includes(n) || e.push(n);
  },
  w = ({ score: e }, { score: t }) => t - e,
  T = () => new Map(),
  E = (e) => {
    let t = new Map();
    for (let n of Object.keys(e)) t.set(parseInt(n, 10), e[n]);
    return t;
  },
  D = (e, t) => (Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0),
  O = {
    or: (e, t) => {
      for (let n of t.keys()) {
        let r = e.get(n);
        if (r == null) e.set(n, t.get(n));
        else {
          let { score: e, terms: i, match: a } = t.get(n);
          ((r.score += e),
            (r.match = Object.assign(r.match, a)),
            C(r.terms, i));
        }
      }
      return e;
    },
    and: (e, t) => {
      let n = new Map();
      for (let r of t.keys()) {
        let i = e.get(r);
        if (i == null) continue;
        let { score: a, terms: o, match: s } = t.get(r);
        (C(i.terms, o),
          n.set(r, {
            score: i.score + a,
            terms: i.terms,
            match: Object.assign(i.match, s),
          }));
      }
      return n;
    },
    and_not: (e, t) => {
      for (let n of t.keys()) e.delete(n);
      return e;
    },
  },
  k = (e, t, n, r, i, a) => {
    let { k: o, b: s, d: c } = a;
    return (
      Math.log(1 + (n - t + 0.5) / (t + 0.5)) *
      (c + (e * (o + 1)) / (e + o * (1 - s + (s * r) / i)))
    );
  },
  A = (e) => (t, n, r) => ({
    term: t,
    fuzzy: typeof e.fuzzy == `function` ? e.fuzzy(t, n, r) : (e.fuzzy ?? !1),
    prefix: typeof e.prefix == `function` ? e.prefix(t, n, r) : e.prefix === !0,
    termBoost: typeof e.boostTerm == `function` ? e.boostTerm(t, n, r) : 1,
  }),
  j = (e, t, n, r) => {
    for (let i of Object.keys(e._fieldIds))
      if (e._fieldIds[i] === n) {
        e._options.logger(
          `warn`,
          `SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${r}" was not present in field "${i}". Removing a document after it has changed can corrupt the index!`,
          `version_conflict`,
        );
        return;
      }
  },
  M = (e, t, n, r) => {
    if (!e._index.has(r)) {
      j(e, n, t, r);
      return;
    }
    let i = e._index.fetch(r, T),
      a = i.get(t),
      o = a?.get(n);
    (!a || typeof o > `u`
      ? j(e, n, t, r)
      : o <= 1
        ? a.size <= 1
          ? i.delete(t)
          : a.delete(n)
        : a.set(n, o - 1),
      e._index.get(r).size === 0 && e._index.delete(r));
  },
  N = {
    k: 1.2,
    b: 0.7,
    d: 0.5,
  },
  P = {
    idField: `id`,
    extractField: (e, t) => e[t],
    stringifyField: (e) => e.toString(),
    tokenize: (e) => e.split(x),
    processTerm: (e) => e.toLowerCase(),
    fields: void 0,
    searchOptions: void 0,
    storeFields: [],
    logger: (e, t) => {
      console?.[e]?.(t);
    },
    autoVacuum: !0,
  },
  F = {
    combineWith: `or`,
    prefix: !1,
    fuzzy: !1,
    maxFuzzy: 6,
    boost: {},
    weights: {
      fuzzy: 0.45,
      prefix: 0.375,
    },
    bm25: N,
  },
  ee = {
    combineWith: `and`,
    prefix: (e, t, n) => t === n.length - 1,
  },
  te = {
    batchSize: 1e3,
    batchWait: 10,
  },
  I = {
    minDirtFactor: 0.1,
    minDirtCount: 20,
  },
  L = {
    ...te,
    ...I,
  },
  R = Symbol(`*`),
  z = (e, t) => {
    let n = new Map(),
      r = {
        ...e._options.searchOptions,
        ...t,
      };
    for (let [t, i] of e._documentIds) {
      let a = r.boostDocument
        ? r.boostDocument(i, ``, e._storedFields.get(t))
        : 1;
      n.set(t, {
        score: a,
        terms: [],
        match: {},
      });
    }
    return n;
  },
  B = (e, t = `or`) => {
    if (e.length === 0) return new Map();
    let n = t.toLowerCase();
    if (!(n in O)) throw Error(`Invalid combination operator: ${t}`);
    return e.reduce(O[n]);
  },
  V = (e, t, n, r, i, a, o, s, c, l = new Map()) => {
    if (a == null) return l;
    for (let u of Object.keys(o)) {
      let d = o[u],
        f = e._fieldIds[u],
        p = a.get(f);
      if (p == null) continue;
      let m = p.size,
        h = e._avgFieldLength[f];
      for (let a of p.keys()) {
        if (!e._documentIds.has(a)) {
          (M(e, f, a, n), --m);
          continue;
        }
        let o = s ? s(e._documentIds.get(a), n, e._storedFields.get(a)) : 1;
        if (!o) continue;
        let g = p.get(a),
          _ = e._fieldLength.get(a)[f],
          v = k(g, m, e._documentCount, _, h, c),
          y = r * i * d * o * v,
          b = l.get(a);
        if (b) {
          ((b.score += y), S(b.terms, t));
          let e = D(b.match, n);
          e ? e.push(u) : (b.match[n] = [u]);
        } else
          l.set(a, {
            score: y,
            terms: [t],
            match: {
              [n]: [u],
            },
          });
      }
    }
    return l;
  },
  H = (e, t, n) => {
    let r = {
        ...e._options.searchOptions,
        ...n,
      },
      i = (r.fields ?? e._options.fields).reduce(
        (e, t) => ({
          ...e,
          [t]: D(r.boost, t) || 1,
        }),
        {},
      ),
      { boostDocument: a, weights: o, maxFuzzy: s, bm25: c } = r,
      { fuzzy: l, prefix: u } = {
        ...F.weights,
        ...o,
      },
      d = e._index.get(t.term),
      f = V(e, t.term, t.term, 1, t.termBoost, d, i, a, c),
      p,
      m;
    if ((t.prefix && (p = e._index.atPrefix(t.term)), t.fuzzy)) {
      let n = t.fuzzy === !0 ? 0.2 : t.fuzzy,
        r = n < 1 ? Math.min(s, Math.round(t.term.length * n)) : n;
      r && (m = e._index.fuzzyGet(t.term, r));
    }
    if (p)
      for (let [n, r] of p) {
        let o = n.length - t.term.length;
        if (!o) continue;
        m?.delete(n);
        let s = (u * n.length) / (n.length + 0.3 * o);
        V(e, t.term, n, s, t.termBoost, r, i, a, c, f);
      }
    if (m)
      for (let n of m.keys()) {
        let [r, o] = m.get(n);
        if (!o) continue;
        let s = (l * n.length) / (n.length + o);
        V(e, t.term, n, s, t.termBoost, r, i, a, c, f);
      }
    return f;
  },
  U = (e, t, n = {}) => {
    if (t === R) return z(e, n);
    if (typeof t != `string`) {
      let r = {
        ...n,
        ...t,
        queries: void 0,
      };
      return B(
        t.queries.map((t) => U(e, t, r)),
        r.combineWith,
      );
    }
    let { tokenize: r, processTerm: i, searchOptions: a } = e._options,
      o = {
        tokenize: r,
        processTerm: i,
        ...a,
        ...n,
      },
      { tokenize: s, processTerm: c } = o;
    return B(
      s(t)
        .flatMap((e) => c(e))
        .filter((e) => !!e)
        .map(A(o))
        .map((t) => H(e, t, o)),
      o.combineWith,
    );
  },
  W = (e, t, n = {}) => {
    let { searchOptions: r } = e._options,
      i = {
        ...r,
        ...n,
      },
      a = U(e, t, n),
      o = [];
    for (let [t, { score: n, terms: r, match: s }] of a) {
      let a = r.length || 1,
        c = {
          id: e._documentIds.get(t),
          score: n * a,
          terms: Object.keys(s),
          queryTerms: r,
          match: s,
        };
      (Object.assign(c, e._storedFields.get(t)),
        (i.filter == null || i.filter(c)) && o.push(c));
    }
    return ((t === R && i.boostDocument == null) || o.sort(w), o);
  },
  G = (e, t, n = {}) => {
    n = {
      ...e._options.autoSuggestOptions,
      ...n,
    };
    let r = new Map();
    for (let { score: i, terms: a } of W(e, t, n)) {
      let e = a.join(` `),
        t = r.get(e);
      t == null
        ? r.set(e, {
            score: i,
            terms: a,
            count: 1,
          })
        : ((t.score += i), (t.count += 1));
    }
    let i = [];
    for (let [e, { score: t, terms: n, count: a }] of r)
      i.push({
        suggestion: e,
        terms: n,
        score: t / a,
      });
    return (i.sort(w), i);
  };
var K = class {
  _options;
  _index;
  _documentCount;
  _documentIds;
  _idToShortId;
  _fieldIds;
  _fieldLength;
  _avgFieldLength;
  _nextId;
  _storedFields;
  _dirtCount;
  _currentVacuum;
  _enqueuedVacuum;
  _enqueuedVacuumConditions;
  constructor(e) {
    if (!e?.fields) throw Error(`SlimSearch: option "fields" must be provided`);
    let t = e.autoVacuum == null || e.autoVacuum === !0 ? L : e.autoVacuum;
    ((this._options = {
      ...P,
      ...e,
      autoVacuum: t,
      searchOptions: {
        ...F,
        ...e.searchOptions,
      },
      autoSuggestOptions: {
        ...ee,
        ...e.autoSuggestOptions,
      },
    }),
      (this._index = new f()),
      (this._documentCount = 0),
      (this._documentIds = new Map()),
      (this._idToShortId = new Map()),
      (this._fieldIds = {}),
      (this._fieldLength = new Map()),
      (this._avgFieldLength = []),
      (this._nextId = 0),
      (this._storedFields = new Map()),
      (this._dirtCount = 0),
      (this._currentVacuum = null),
      (this._enqueuedVacuum = null),
      (this._enqueuedVacuumConditions = I),
      this.addFields(this._options.fields));
  }
  get isVacuuming() {
    return this._currentVacuum != null;
  }
  get dirtCount() {
    return this._dirtCount;
  }
  get dirtFactor() {
    return this._dirtCount / (1 + this._documentCount + this._dirtCount);
  }
  get documentCount() {
    return this._documentCount;
  }
  get termCount() {
    return this._index.size;
  }
  toJSON() {
    let e = [];
    for (let [t, n] of this._index) {
      let r = {};
      for (let [e, t] of n) r[e] = Object.fromEntries(t);
      e.push([t, r]);
    }
    return {
      documentCount: this._documentCount,
      nextId: this._nextId,
      documentIds: Object.fromEntries(this._documentIds),
      fieldIds: this._fieldIds,
      fieldLength: Object.fromEntries(this._fieldLength),
      averageFieldLength: this._avgFieldLength,
      storedFields: Object.fromEntries(this._storedFields),
      dirtCount: this._dirtCount,
      index: e,
      version: 2,
    };
  }
  addFields(e) {
    for (let t = 0; t < e.length; t++) this._fieldIds[e[t]] = t;
  }
};
const q = (e) => new K(e),
  J = (
    {
      documentCount: e,
      nextId: t,
      fieldIds: n,
      averageFieldLength: r,
      dirtCount: i,
      version: a,
    },
    o,
  ) => {
    if (a !== 2)
      throw Error(
        `SlimSearch: cannot deserialize an index created with an incompatible version`,
      );
    let s = q(o);
    return (
      (s._documentCount = e),
      (s._nextId = t),
      (s._idToShortId = new Map()),
      (s._fieldIds = n),
      (s._avgFieldLength = r),
      (s._dirtCount = i ?? 0),
      (s._index = new f()),
      s
    );
  },
  Y = (e, t) => {
    let { index: n, documentIds: r, fieldLength: i, storedFields: a } = e,
      o = J(e, t);
    ((o._documentIds = E(r)),
      (o._fieldLength = E(i)),
      (o._storedFields = E(a)));
    for (let [e, t] of o._documentIds) o._idToShortId.set(t, e);
    for (let [e, t] of n) {
      let n = new Map();
      for (let e of Object.keys(t)) n.set(parseInt(e, 10), E(t[e]));
      o._index.set(e, n);
    }
    return o;
  },
  X = (e, t) => {
    let n = e.toLowerCase(),
      r = t.toLowerCase(),
      i = [],
      a = 0,
      o = 0,
      s = (e, n = !1) => {
        let r;
        ((r =
          o === 0
            ? e.length > 20
              ? `… ${e.slice(-20)}`
              : e
            : n
              ? e.length + o > 100
                ? `${e.slice(0, 100 - o)}… `
                : e
              : e.length > 20
                ? `${e.slice(0, 20)} … ${e.slice(-20)}`
                : e),
          r && i.push(r),
          (o += r.length),
          n ||
            (i.push([`mark`, t]), (o += t.length), o >= 100 && i.push(` …`)));
      },
      c = n.indexOf(r, a);
    if (c === -1) return null;
    for (; c >= 0; ) {
      let t = c + r.length;
      if ((s(e.slice(a, c)), (a = t), o > 100)) break;
      c = n.indexOf(r, a);
    }
    return (o < 100 && s(e.slice(a), !0), i);
  },
  Z = (e, t) =>
    t.contents.reduce((e, [, t]) => e + t, 0) -
    e.contents.reduce((e, [, t]) => e + t, 0),
  ne = (e, t) =>
    Math.max(...t.contents.map(([, e]) => e)) -
    Math.max(...e.contents.map(([, e]) => e)),
  Q = (e, t, r = {}, i = `max`) => {
    let a = {};
    return (
      W(t, e, {
        boost: {
          h: 2,
          t: 1,
          c: 4,
        },
        prefix: !0,
        ...r,
      }).forEach((e) => {
        let { id: t, terms: n, score: r } = e,
          i = t.includes(`@`),
          o = t.includes(`#`),
          [s, c] = t.split(/[#@]/),
          l = Number(s),
          u = n
            .sort((e, t) => e.length - t.length)
            .filter((e, t) => n.slice(t + 1).every((t) => !t.includes(e))),
          { contents: d } = (a[l] ??= {
            title: ``,
            contents: [],
          });
        if (i)
          d.push([
            {
              type: `customField`,
              id: l,
              index: c,
              display: u
                .flatMap((t) => e.c.map((e) => X(e, t)))
                .filter((e) => e != null),
            },
            r,
          ]);
        else {
          let t = u.map((t) => X(e.h, t)).filter((e) => e != null);
          if (
            (t.length > 0 &&
              d.push([
                {
                  type: o ? `heading` : `title`,
                  id: l,
                  ...(o && {
                    anchor: c,
                  }),
                  display: t,
                },
                r,
              ]),
            `t` in e && e.t)
          )
            for (let t of e.t) {
              let e = u.map((e) => X(t, e)).filter((e) => e != null);
              e.length > 0 &&
                d.push([
                  {
                    type: `text`,
                    id: l,
                    ...(o && {
                      anchor: c,
                    }),
                    display: e,
                  },
                  r,
                ]);
            }
        }
      }),
      n(a)
        .sort(([, e], [, t]) => (i ? Z : ne)(e, t))
        .map(([e, { title: n, contents: r }]) => {
          if (!n) {
            let r = b(t, e);
            r && (n = r.h);
          }
          return {
            title: n,
            contents: r.map(([e]) => e),
          };
        })
    );
  },
  $ = (e, t, n = {}) => {
    let r = G(t, e, {
      fuzzy: 0.2,
      maxFuzzy: 3,
      ...n,
    }).map(({ suggestion: e }) => e);
    return e.includes(` `) ? r : r.filter((e) => !e.includes(` `));
  },
  re = r(
    n(
      JSON.parse(
        '{"/":{"documentCount":45,"nextId":45,"documentIds":{"0":"1","1":"2","2":"3","3":"4","4":"4#自定义组件测试","5":"4#markdown测试","6":"4#标题","7":"4#h2","8":"4#h3","9":"4#h4","10":"4#h5","11":"4#h6","12":"4#格式化","13":"4#无序列表","14":"4#有序列表","15":"4#代码块","16":"4#tex语法测试","17":"4#表格测试","18":"4#提示容器","19":"4#选项卡测试","20":"4#自定义对齐","21":"4#plantuml测试","22":"4#代码演示","23":"4#交互演示","24":"4#kotlin-交互演示","25":"4#sandpack-交互演示","26":"4#vue-交互演示","27":"4#其他测试","28":"4@0","29":"4@1","30":"5","31":"6","32":"7","33":"8","34":"8#矩阵","35":"8#矩阵的秩","36":"8#证明思路","37":"8#矩阵的等价","38":"8#证明步骤","39":"8#初等矩阵","40":"8#分块矩阵","41":"8@0","42":"8@1","43":"9","44":"10"},"fieldIds":{"h":0,"t":1,"c":2},"fieldLength":{"0":[1,4],"1":[1],"2":[1],"3":[2,9],"4":[6,3],"5":[3],"6":[1],"7":[1],"8":[1],"9":[1],"10":[1],"11":[1],"12":[1,6],"13":[3,1],"14":[2,1],"15":[2,27],"16":[3,31],"17":[2,30],"18":[2,31],"19":[3],"20":[4,8],"21":[2],"22":[2],"23":[2],"24":[3],"25":[3],"26":[3],"27":[2,23],"28":[null,null,3],"29":[null,null,1],"30":[1],"31":[1],"32":[1],"33":[5,21],"34":[1,73],"35":[3,43],"36":[0,34],"37":[4,70],"38":[2,81],"39":[2,14],"40":[3,49],"41":[null,null,3],"42":[null,null,2],"43":[1],"44":[0,3]},"averageFieldLength":[2.031552458381727,17.20585901455148,0.2434108527131783],"storedFields":{"0":{"h":"介绍","t":["// TODO介绍页"]},"1":{"h":"文章"},"2":{"h":"开发"},"3":{"h":"Blog测试","t":["我的第一篇Blog，献给了debug ("]},"4":{"h":"自定义组件测试：","t":[" 计数器："]},"5":{"h":"MarkDown测试："},"6":{"h":"标题"},"7":{"h":"h2"},"8":{"h":"h3"},"9":{"h":"h4"},"10":{"h":"h5"},"11":{"h":"h6"},"12":{"h":"格式化","t":["引用","加粗，倾斜，高亮"]},"13":{"h":"无序列表","t":["1","2","3"]},"14":{"h":"有序列表","t":["1","2","3"]},"15":{"h":"代码块","t":["static boolean isPrime(int n) { if (n &#x3C;= 1) return false; if (n == 2) return true; if (n % 2 == 0) return false; for (int i = 3; i * i &#x3C;= n; i += 2) { if (n % i == 0) return false; } return true; }"]},"16":{"h":"Tex语法测试","t":["E=​100​010​001​​","∂ωr∂r​(ωyω​)=(ωyω​){(logy)r+i=1∑r​ωi(−1)ir⋯(r−i+1)(logy)r−i​}","注意","这里查出Bug，已经修复"]},"17":{"h":"表格测试","t":["序号","B","C","G","H","条件 1","条件 2","条件 3","条件 4","全部满足","1","T","T","T","T","F","F","T","F","❌","2","T","T","T","F","F","F","T","T","❌","3","T","T","F","T","F","T","T","F","❌","4","T","T","F","F","F","T","F","T","❌","5","T","F","T","T","F","T","T","T","❌","6","T","F","T","F","F","T","T","T","❌","7","T","F","F","T","F","T","T","T","❌","8","T","F","F","F","F","T","F","T","❌","9","F","T","T","T","T","F","T","F","❌","10","F","T","T","F","T","F","T","T","❌","11","F","T","F","T","T","T","T","F","❌","12","F","T","F","F","T","T","F","T","❌","13","F","F","T","T","T","T","T","T","✅","14","F","F","T","F","T","T","T","T","✅","15","F","F","F","T","T","T","T","T","✅","16","F","F","F","F","T","T","F","T","❌"]},"18":{"h":"提示容器","t":["安全的在 Markdown 中使用 {{ variable }}。","自定义标题","信息容器，包含 代码 与 链接。","const a = 1;","自定义标题","提示容器","自定义标题","警告容器","自定义标题","危险容器","自定义标题","详情容器"]},"19":{"h":"选项卡测试"},"20":{"h":"自定义对齐","t":["我是居中的","我在右对齐"]},"21":{"h":"PlantUML测试"},"22":{"h":"代码演示"},"23":{"h":"交互演示"},"24":{"h":"Kotlin 交互演示"},"25":{"h":"Sandpack 交互演示"},"26":{"h":"Vue 交互演示"},"27":{"h":"其他测试","t":["此文字有脚注[1].","Me!","Minecraft","test剧透 19th H2O"," 计划 1"," 计划 2","这是脚注内容 ↩︎"]},"28":{"c":["开发","项目"]},"29":{"c":["测试"]},"30":{"h":"生活"},"31":{"h":"其他"},"32":{"h":"学习"},"33":{"h":"线性代数部分公式及定理","t":["大部分是矩阵相关的定理及公式，但是也掺杂着其他部分如行列式、向量的内容"]},"34":{"h":"矩阵","t":["(A∗)−1=(A−1)∗(A∗)T=(AT)∗(AT)−1=(A−1)T(AB)−1=B−1A−1(AB)T=BTAT(AB)∗=B∗A∗","∣AT∣=∣A∣(kA)T=kAT∣kA∣=kn∣A∣(A±B)T=AT±BT∣A∗∣=∣A∣n−1∣A−1∣=∣A∣1​(kA)−1=k1​A−1AA−1=E∣AB∣=∣A∣∣B∣∣Am∣=∣A∣mA∗A=∣A∣EA−1=∣A∣1​A∗A∗=A−1∣A∣∣kA∗∣=kn∣A∣n−1(kA)∗=(kA)−1∣kA∣=k1​A−1kn∣A∣=kn−1A∗(A∗)∗=(A∗)−1∣A∗∣=∣A∣1​A∣A∣n−1=A∣A∣n−2","若A=(ac​bd​)则A∗=(d−c​−ba​)","A∈Kn×s：","A 是一个矩阵（matrix）","矩阵元素来自数域 K（可以是实数域 ℝ 或复数域 ℂ 等）","A 有 n 行（rows），s 列（columns）","读作：&quot;A 属于 K 上的 n×s 矩阵&quot;"]},"35":{"h":"矩阵的秩","t":["r(A∗)=⎩⎨⎧​n,r(A)=n1,r(A)=n−10,r(A)&lt;n−1​","若A∈Kn×s,B∈Ks×m,则有：","r(AB)≥r(A)+r(B)−s","上式为Sylvester 秩不等式","r(AB)≤min{r(A),r(B)}"]},"36":{"h":"","t":["乘积 AB 的列向量可由 A 的列向量线性表出，故 r(AB)≤r(A).","乘积 AB 的行向量可由 B 的行向量线性表出，故 r(AB)≤r(B).","上面两个结合有：","r(A)+r(B)−s≤r(AB)≤min{r(A),r(B)}","r(A)+r(B)≥r(A,B)"]},"37":{"h":"矩阵的等价","t":["定义：若矩阵A可以通过初等变换变成矩阵B则称A与B等价，记作:A≈B 即：∃ 可逆矩阵P,Q,使得：","PAQ=B","则称A与B等价.","等价的矩阵具有一下性质：","A≈A","若A≈B,B≈C→A≈C","若A≈B→B≈A","A与B等价的充要条件是他们具有相同的标准形A与B等价,则他们的秩相等","{奇异方阵、降秩方阵，∣A∣=0非奇异方阵、满秩方阵，∣A∣=0​","若A∈Rm×n,B∈Rn×s , 且AB=0，则","r(A)+r(B)≤n"]},"38":{"h":"证明步骤","t":["矩阵分块 将矩阵 B 按列分块，记B=[β1​,β2​,…,βs​] 其中βi∈Rn×1是 B 的第 i 列。","分析 AB=0 的列向量意义 由矩阵乘法规则：AB=A[β1​,β2​,…,βs​]=[Aβ1​,Aβ2​,…,Aβs​] 已知 AB=0，因此对所有 i=1,2,…,s，有Aβi=0 这表明：B 的每一列 βi​ 都是齐次线性方程组 Ax=0 的解.","分析基础解系Ax=0 基础解析的向量数量为n−r(A)r(B) 表示一组解的极大无关组向量的个数 那么r(B)≤n−r(A) 即r(A)+r(B)≤n"]},"39":{"h":"初等矩阵","t":["P(i,j)T=P(i,j)P(i,j)−1=P(i,j)P(i(k))T=P(i(k))P(i(k))−1=P(i(k1​))P(i,j(k))T=P(j,i(k))TP(i,j(k))−1=P(i,j(−k))"]},"40":{"h":"分块矩阵","t":["​(A0​0B​)​=∣A∣∣B∣","​(0B​A0​)​=(−1)mn∣A∣∣B∣","m,n分别是A,B的阶数","若A=​An​​...​A2​A1​​ （A1​,A2​,...,An​）都可逆 则：","A−1=​A1​​...​An−1​An​​","安全声明","请以教材为准，本文的某些符号、公式、定理可能与一些教材有所不同"]},"41":{"c":["学习","数学"]},"42":{"c":["线代"]},"43":{"h":"教程"},"44":{"h":"","t":["404 Not Found"]}},"dirtCount":0,"index":[["教程",{"0":{"43":1}}],["教材",{"1":{"40":2}}],["代",{"2":{"42":1}}],["代码",{"0":{"15":1,"22":1},"1":{"18":1}}],["线",{"2":{"42":1}}],["线性方程",{"1":{"38":1}}],["线性",{"1":{"36":2}}],["线性代数",{"0":{"33":1}}],["符号",{"1":{"40":1}}],["某些",{"1":{"40":1}}],["本文",{"1":{"40":1}}],["准",{"1":{"40":1}}],["以",{"1":{"40":1}}],["请",{"1":{"40":1}}],["声明",{"1":{"40":1}}],["都",{"1":{"40":1}}],["都是",{"1":{"38":1}}],["阶",{"1":{"40":1}}],["j",{"1":{"39":8}}],["那么",{"1":{"38":1}}],["极大",{"1":{"38":1}}],["系",{"1":{"38":1}}],["基础",{"1":{"38":2}}],["解析",{"1":{"38":1}}],["解",{"1":{"38":3}}],["次",{"1":{"38":1}}],["每一",{"1":{"38":1}}],["所有",{"1":{"38":1}}],["因此",{"1":{"38":1}}],["已知",{"1":{"38":1}}],["已经",{"1":{"16":1}}],["规则",{"1":{"38":1}}],["意义",{"1":{"38":1}}],["其中",{"1":{"38":1}}],["其他",{"0":{"27":1,"31":1},"1":{"33":1}}],["…",{"1":{"38":4}}],["βi",{"1":{"38":2}}],["βs",{"1":{"38":2}}],["β2",{"1":{"38":2}}],["β1",{"1":{"38":2}}],["按",{"1":{"38":1}}],["将",{"1":{"38":1}}],["分别",{"1":{"40":1}}],["分析",{"1":{"38":2}}],["分",{"0":{"40":1},"1":{"38":2}}],["步骤",{"0":{"38":1}}],["证明",{"0":{"38":1}}],["且",{"1":{"37":1}}],["",{"1":{"37":1}}],["满",{"1":{"37":1}}],["满足",{"1":{"17":1}}],["非",{"1":{"37":1}}],["降",{"1":{"37":1}}],["阵",{"1":{"37":4}}],["方",{"1":{"37":4}}],["奇异",{"1":{"37":2}}],["形",{"1":{"37":1}}],["标准",{"1":{"37":1}}],["标题",{"0":{"6":1},"1":{"18":5}}],["相等",{"1":{"37":1}}],["相同",{"1":{"37":1}}],["相关",{"1":{"33":1}}],["他们",{"1":{"37":2}}],["充要条件",{"1":{"37":1}}],["→",{"1":{"37":2}}],["性质",{"1":{"37":1}}],["具有",{"1":{"37":2}}],["使得",{"1":{"37":1}}],["使用",{"1":{"18":1}}],["q",{"1":{"37":1}}],["quot",{"1":{"34":2}}],["paq",{"1":{"37":1}}],["p",{"1":{"37":1,"39":11}}],["plantuml",{"0":{"21":1}}],["∃",{"1":{"37":1}}],["即",{"1":{"37":1,"38":1}}],["≈",{"1":{"37":7}}],[":",{"1":{"37":1}}],["作",{"1":{"37":1}}],["记",{"1":{"37":1,"38":1}}],["称",{"1":{"37":2}}],["变成",{"1":{"37":1}}],["变换",{"1":{"37":1}}],["初等",{"0":{"39":1},"1":{"37":1}}],["通过",{"1":{"37":1}}],["价",{"0":{"37":1},"1":{"37":5}}],["结合",{"1":{"36":1}}],["个",{"1":{"36":1,"38":1}}],["两",{"1":{"36":1}}],["故",{"1":{"36":2}}],["表示",{"1":{"38":1}}],["表明",{"1":{"38":1}}],["表出",{"1":{"36":2}}],["表格",{"0":{"17":1}}],["由",{"1":{"36":2,"38":1}}],["可能",{"1":{"40":1}}],["可逆",{"1":{"37":1,"40":1}}],["可",{"1":{"36":2}}],["可以",{"1":{"34":1,"37":1}}],["积",{"1":{"36":2}}],["乘法",{"1":{"38":1}}],["乘",{"1":{"36":2}}],["≤",{"1":{"35":1,"36":4,"37":1,"38":2}}],["不等式",{"1":{"35":1}}],["为",{"1":{"35":1,"38":1,"40":1}}],["式",{"1":{"35":1}}],["≥",{"1":{"35":1,"36":1}}],["lt",{"1":{"35":1}}],["logy",{"1":{"16":2}}],["⎧",{"1":{"35":1}}],["⎨",{"1":{"35":1}}],["⎩",{"1":{"35":1}}],["秩",{"0":{"35":1},"1":{"35":1,"37":3}}],["上面",{"1":{"36":1}}],["上",{"1":{"34":1,"35":1}}],["属于",{"1":{"34":1}}],["读作",{"1":{"34":1}}],["列",{"1":{"34":1,"36":2,"38":4}}],["列表",{"0":{"13":1,"14":1}}],["行",{"1":{"34":1,"36":2}}],["行列式",{"1":{"33":1}}],["等",{"0":{"37":1},"1":{"34":1,"37":5}}],["ℂ",{"1":{"34":1}}],["复数",{"1":{"34":1}}],["或",{"1":{"34":1}}],["ℝ",{"1":{"34":1}}],["实数",{"1":{"34":1}}],["域",{"1":{"34":3}}],["数学",{"2":{"41":1}}],["数量",{"1":{"38":1}}],["数",{"1":{"34":1,"38":1,"40":1}}],["来自",{"1":{"34":1}}],["元素",{"1":{"34":1}}],["）",{"1":{"34":4,"40":1}}],["（",{"1":{"34":4,"40":1}}],["一些",{"1":{"40":1}}],["一",{"1":{"38":1}}],["一下",{"1":{"37":1}}],["一个",{"1":{"34":1}}],["一篇",{"1":{"3":1}}],["×",{"1":{"34":2,"35":2,"37":2,"38":1}}],["∈",{"1":{"34":1,"35":2,"37":2,"38":1}}],["d",{"1":{"34":1}}],["debug",{"1":{"3":1}}],["则",{"1":{"34":1,"35":1,"37":4,"40":1}}],["若",{"1":{"34":1,"35":1,"37":4,"40":1}}],["±",{"1":{"34":2}}],["ks",{"1":{"35":1}}],["k",{"1":{"34":2,"39":7}}],["k1",{"1":{"34":2,"39":1}}],["kn",{"1":{"34":4,"35":1}}],["kat",{"1":{"34":1}}],["ka",{"1":{"34":7}}],["kotlin",{"0":{"24":1}}],["∣",{"1":{"34":48,"37":4,"40":8}}],["∗",{"1":{"34":19,"35":1}}],["向量",{"1":{"33":1,"36":4,"38":3}}],["、",{"1":{"33":1,"37":2,"40":2}}],["如",{"1":{"33":1}}],["着",{"1":{"33":1}}],["杂",{"1":{"33":1}}],["掺",{"1":{"33":1}}],["也",{"1":{"33":1}}],["但是",{"1":{"33":1}}],["矩阵",{"0":{"34":1,"35":1,"37":1,"39":1,"40":1},"1":{"33":1,"34":3,"37":4,"38":3}}],["大部分",{"1":{"33":1}}],["定理",{"0":{"33":1},"1":{"33":1,"40":1}}],["定义",{"0":{"4":1,"20":1},"1":{"18":5,"37":1}}],["及",{"0":{"33":1},"1":{"33":1}}],["公式",{"0":{"33":1},"1":{"33":1,"40":1}}],["部分",{"0":{"33":1},"1":{"33":1}}],["学习",{"0":{"32":1},"2":{"41":1}}],["生活",{"0":{"30":1}}],["项目",{"2":{"28":1}}],["↩︎",{"1":{"27":1}}],["内容",{"1":{"27":1,"33":1}}],["是",{"1":{"27":1,"33":1,"34":2,"37":1,"38":1,"40":1}}],["这",{"1":{"27":1,"38":1}}],["这里",{"1":{"16":1}}],["计划",{"1":{"27":2}}],["计数",{"1":{"4":1}}],["透",{"1":{"27":1}}],["剧",{"1":{"27":1}}],["!",{"1":{"27":1}}],["mn",{"1":{"40":1}}],["min",{"1":{"35":1,"36":1}}],["minecraft",{"1":{"27":1}}],["m",{"1":{"35":1,"40":1}}],["matrix",{"1":{"34":1}}],["ma",{"1":{"34":1}}],["markdown",{"0":{"5":1},"1":{"18":1}}],["me",{"1":{"27":1}}],[".",{"1":{"27":1,"36":2,"37":1,"38":1,"40":9}}],["]",{"1":{"27":1,"38":3}}],["[",{"1":{"27":1,"38":3}}],["脚注",{"1":{"27":2}}],["有所不同",{"1":{"40":1}}],["有",{"1":{"27":1,"34":1,"35":1,"36":1,"38":1}}],["有序",{"0":{"14":1}}],["文字",{"1":{"27":1}}],["文章",{"0":{"1":1}}],["此",{"1":{"27":1}}],["vue",{"0":{"26":1}}],["variable",{"1":{"18":1}}],["sylvester",{"1":{"35":1}}],["s",{"1":{"34":3,"35":2,"36":1,"37":1,"38":1}}],["sandpack",{"0":{"25":1}}],["static",{"1":{"15":1}}],["交互",{"0":{"23":1,"24":1,"25":1,"26":1}}],["演示",{"0":{"22":1,"23":1,"24":1,"25":1,"26":1}}],["右",{"1":{"20":1}}],["居中",{"1":{"20":1}}],["我在",{"1":{"20":1}}],["我是",{"1":{"20":1}}],["我的",{"1":{"3":1}}],["齐",{"0":{"20":1},"1":{"20":1,"38":1}}],["对",{"0":{"20":1},"1":{"20":1,"38":1}}],["卡",{"0":{"19":1}}],["选项",{"0":{"19":1}}],["详情",{"1":{"18":1}}],["危险",{"1":{"18":1}}],["警告",{"1":{"18":1}}],["a1",{"1":{"40":3}}],["a2",{"1":{"40":2}}],["an",{"1":{"40":4}}],["a0",{"1":{"40":2}}],["ax",{"1":{"38":2}}],["aβi",{"1":{"38":1}}],["aβs",{"1":{"38":1}}],["aβ2",{"1":{"38":1}}],["aβ1",{"1":{"38":1}}],["ac",{"1":{"34":1}}],["am",{"1":{"34":1}}],["ab",{"1":{"34":4,"35":2,"36":5,"37":1,"38":3}}],["at",{"1":{"34":4}}],["a",{"1":{"18":1,"34":39,"35":7,"36":6,"37":16,"38":4,"40":5}}],["接",{"1":{"18":1}}],["链",{"1":{"18":1}}],["与",{"1":{"18":1,"37":4,"40":1}}],["包含",{"1":{"18":1}}],["信息",{"1":{"18":1}}],["。",{"1":{"18":2,"38":1}}],["中",{"1":{"18":1}}],["在",{"1":{"18":1}}],["的",{"0":{"35":1,"37":1},"1":{"18":1,"20":1,"33":2,"34":1,"36":4,"37":4,"38":7,"40":2}}],["安全",{"1":{"18":1,"40":1}}],["容器",{"0":{"18":1},"1":{"18":5}}],["提示",{"0":{"18":1},"1":{"18":1}}],["✅",{"1":{"17":3}}],["9",{"1":{"17":1}}],["8",{"1":{"17":1}}],["7",{"1":{"17":1}}],["6",{"1":{"17":1}}],["5",{"1":{"17":1}}],["❌",{"1":{"17":13}}],["全部",{"1":{"17":1}}],["404",{"1":{"44":1}}],["4",{"1":{"17":2}}],["条件",{"1":{"17":4}}],["g",{"1":{"17":1}}],["columns",{"1":{"34":1}}],["const",{"1":{"18":1}}],["c",{"1":{"17":1,"34":1,"37":2}}],["号",{"1":{"17":1}}],["修复",{"1":{"16":1}}],["查出",{"1":{"16":1}}],["注意",{"1":{"16":1}}],["⋯",{"1":{"16":1}}],["−",{"1":{"16":3,"34":23,"35":3,"36":1,"38":2,"39":4,"40":3}}],["∑",{"1":{"16":1}}],["ωi",{"1":{"16":1}}],["ωyω",{"1":{"16":2}}],["ωr",{"1":{"16":1}}],["rn",{"1":{"37":1,"38":1}}],["rm",{"1":{"37":1}}],["rows",{"1":{"34":1}}],["r",{"1":{"16":5,"35":10,"36":12,"37":2,"38":6}}],["return",{"1":{"15":5}}],["∂",{"1":{"16":2}}],["​",{"1":{"16":10,"34":9,"35":2,"37":1,"38":10,"39":1,"40":25}}],["ea",{"1":{"34":1}}],["e",{"1":{"16":1,"34":1}}],["语法",{"0":{"16":1}}],["}",{"1":{"15":2,"16":1,"18":2,"35":1,"36":1}}],["+",{"1":{"15":1,"16":2,"35":1,"36":2,"37":1,"38":1}}],["*",{"1":{"15":1}}],["3",{"1":{"15":1,"17":2}}],["found",{"1":{"44":1}}],["for",{"1":{"15":1}}],["f",{"1":{"17":52}}],["false",{"1":{"15":3}}],["0b",{"1":{"40":2}}],["001",{"1":{"16":1}}],["010",{"1":{"16":1}}],["0",{"1":{"15":2,"37":3,"38":5}}],["%",{"1":{"15":2}}],["tp",{"1":{"39":1}}],["test",{"1":{"27":1}}],["tex",{"0":{"16":1}}],["t",{"1":{"17":76,"34":5,"39":3}}],["true",{"1":{"15":2}}],["todo",{"1":{"0":1}}],["2",{"1":{"15":3,"17":2,"27":1,"34":1}}],["1,2",{"1":{"38":1}}],["1,2,3",{"1":{"13":1,"14":1}}],["1kn",{"1":{"34":1}}],["1aa",{"1":{"34":1}}],["1a",{"1":{"34":2}}],["19th",{"1":{"27":1}}],["16",{"1":{"17":1}}],["15",{"1":{"17":1}}],["14",{"1":{"17":1}}],["13",{"1":{"17":1}}],["12",{"1":{"17":1}}],["11",{"1":{"17":1}}],["10",{"1":{"17":1,"35":1}}],["100",{"1":{"16":1}}],["1",{"1":{"15":1,"16":3,"17":2,"18":1,"27":2,"34":19,"35":1,"38":1,"39":3,"40":3}}],["=",{"1":{"15":10,"16":3,"18":1,"34":28,"35":3,"37":4,"38":9,"39":6,"40":4}}],[";",{"1":{"15":9,"18":1,"34":2,"35":1}}],["x3c",{"1":{"15":2}}],["#",{"1":{"15":2}}],["&",{"1":{"15":2,"34":2,"35":1}}],["{",{"1":{"15":2,"16":1,"18":2,"35":1,"36":1,"37":1}}],[")",{"1":{"15":6,"16":6,"34":18,"35":10,"36":12,"37":2,"38":6,"39":20,"40":3}}],["not",{"1":{"44":1}}],["n1",{"1":{"35":1}}],["n",{"1":{"15":6,"34":6,"35":3,"37":2,"38":3,"40":1}}],["ir",{"1":{"16":1}}],["i",{"1":{"15":5,"16":3,"38":2,"39":12}}],["if",{"1":{"15":4}}],["int",{"1":{"15":2}}],["isprime",{"1":{"15":1}}],["ba",{"1":{"34":1}}],["bd",{"1":{"34":1}}],["bt",{"1":{"34":1}}],["btat",{"1":{"34":1}}],["b",{"1":{"17":1,"34":4,"35":3,"36":6,"37":13,"38":7,"40":3}}],["bug",{"1":{"16":1}}],["boolean",{"1":{"15":1}}],["blog",{"0":{"3":1},"1":{"3":1}}],["块",{"0":{"15":1,"40":1},"1":{"38":2}}],["序",{"0":{"13":1},"1":{"17":1}}],["无关",{"1":{"38":1}}],["无",{"0":{"13":1}}],["高亮",{"1":{"12":1}}],["倾斜",{"1":{"12":1}}],["加粗",{"1":{"12":1}}],[",",{"1":{"12":1,"16":3,"17":169,"18":11,"20":1,"27":6,"34":7,"35":10,"36":6,"37":16,"38":13,"39":8,"40":11},"2":{"28":1,"41":1}}],["引用",{"1":{"12":1}}],["格式化",{"0":{"12":1}}],["h",{"1":{"17":1}}],["h6",{"0":{"11":1}}],["h5",{"0":{"10":1}}],["h4",{"0":{"9":1}}],["h3",{"0":{"8":1}}],["h2o",{"1":{"27":1}}],["h2",{"0":{"7":1}}],["器",{"1":{"4":1}}],["：",{"0":{"4":1,"5":1},"1":{"4":1,"34":2,"35":1,"36":1,"37":4,"38":2,"40":1}}],["件",{"0":{"4":1}}],["组",{"0":{"4":1},"1":{"38":3}}],["自",{"0":{"4":1,"20":1},"1":{"18":5}}],["(",{"1":{"3":1,"15":6,"16":6,"34":18,"35":10,"36":12,"37":2,"38":6,"39":20,"40":3}}],["了",{"1":{"3":1}}],["献给",{"1":{"3":1}}],["，",{"1":{"3":1,"12":2,"16":1,"18":1,"33":1,"34":1,"36":2,"37":4,"38":3,"40":1}}],["第",{"1":{"3":1,"38":1}}],["测试",{"0":{"3":1,"4":1,"5":1,"16":1,"17":1,"19":1,"21":1,"27":1},"2":{"29":1}}],["开发",{"0":{"2":1},"2":{"28":1}}],["页",{"1":{"0":1}}],["/",{"1":{"0":2}}],["介绍",{"0":{"0":1},"1":{"0":1}}]],"version":2}}',
      ),
    ).map(([e, t]) => [
      e,
      Y(t, {
        fields: [`h`, `t`, `c`],
        storeFields: [`h`, `t`, `c`],
      }),
    ]),
  );
self.addEventListener(
  `message`,
  ({ data: { type: e = `all`, query: t, locale: n, options: r, id: i } }) => {
    let a = re[n];
    e === `suggest`
      ? self.postMessage([e, i, $(t, a, r)])
      : e === `search`
        ? self.postMessage([e, i, Q(t, a, r, "max")])
        : self.postMessage({
            suggestions: [e, i, $(t, a, r)],
            results: [e, i, Q(t, a, r, __SLIMSEARCH_SORT_STRATEGY__)],
          });
  },
);
//# sourceMappingURL=build.js.map
